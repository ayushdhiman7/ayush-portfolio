import { devtoConfig } from '@/config/Devto';
import { BlogFrontmatter, BlogPost, BlogPostPreview } from '@/types/blog';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const blogDirectory = path.join(process.cwd(), 'src/data/blog');

type DevtoListArticle = {
  id: number;
  title: string;
  description: string;
  slug: string;
  cover_image: string | null;
  social_image: string | null;
  tag_list: string[] | string;
  published_at: string;
  url: string;
};

type DevtoArticle = DevtoListArticle & {
  body_markdown: string;
  tag_list: string;
  tags: string;
};

function normalizeTags(tags: string[] | string | undefined): string[] {
  if (Array.isArray(tags)) {
    return tags.map((tag) => tag.trim()).filter(Boolean);
  }
  if (typeof tags === 'string') {
    return tags
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);
  }
  return [];
}

function toDateString(iso: string): string {
  return iso.slice(0, 10);
}

function mapDevtoPreview(article: DevtoListArticle): BlogPostPreview {
  return {
    slug: article.slug,
    frontmatter: {
      title: article.title,
      description: article.description || article.title,
      image:
        article.cover_image ||
        article.social_image ||
        devtoConfig.fallbackImage,
      tags: normalizeTags(article.tag_list),
      date: toDateString(article.published_at),
      isPublished: true,
      source: 'devto',
    },
  };
}

/**
 * Get all blog post files from the blog directory
 */
export function getBlogPostSlugs(): string[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const files = fs.readdirSync(blogDirectory);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

/**
 * Get local MDX blog post by slug
 */
function getLocalBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const frontmatter = data as BlogFrontmatter;
    if (!frontmatter.title || !frontmatter.description) {
      throw new Error(`Invalid frontmatter in ${slug}.mdx`);
    }

    return {
      slug,
      frontmatter: {
        ...frontmatter,
        source: 'local',
      },
      content,
      format: 'mdx',
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

/**
 * Fetch published articles from Dev.to (auto-updates when you publish)
 */
export async function getDevtoBlogPreviews(): Promise<BlogPostPreview[]> {
  try {
    const response = await fetch(
      `${devtoConfig.apiUrl}/articles?username=${devtoConfig.username}&per_page=100`,
      {
        headers: { Accept: 'application/json' },
        next: { revalidate: devtoConfig.revalidateSeconds },
      },
    );

    if (!response.ok) {
      throw new Error(`Dev.to API error: ${response.status}`);
    }

    const articles: DevtoListArticle[] = await response.json();
    return articles.map(mapDevtoPreview);
  } catch (error) {
    console.error('Failed to fetch Dev.to articles:', error);
    return [];
  }
}

/**
 * Fetch a single Dev.to article by slug
 */
export async function getDevtoBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  try {
    const response = await fetch(
      `${devtoConfig.apiUrl}/articles/${devtoConfig.username}/${slug}`,
      {
        headers: { Accept: 'application/json' },
        next: { revalidate: devtoConfig.revalidateSeconds },
      },
    );

    if (!response.ok) {
      return null;
    }

    const article: DevtoArticle = await response.json();
    const tags = normalizeTags(article.tag_list || article.tags);

    // Drop a leading H1 that duplicates the page title
    let content = article.body_markdown || '';
    content = content.replace(/^#\s+.+\n+/, '');

    return {
      slug: article.slug,
      frontmatter: {
        title: article.title,
        description: article.description || article.title,
        image:
          article.cover_image ||
          article.social_image ||
          devtoConfig.fallbackImage,
        tags,
        date: toDateString(article.published_at),
        isPublished: true,
        source: 'devto',
      },
      content,
      format: 'markdown',
    };
  } catch (error) {
    console.error(`Failed to fetch Dev.to article ${slug}:`, error);
    return null;
  }
}

/**
 * Get blog post by slug with full content (local MDX first, then Dev.to)
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const local = getLocalBlogPostBySlug(slug);
  if (local) return local;
  return getDevtoBlogPostBySlug(slug);
}

/**
 * Local MDX posts only (sync — for build-time helpers)
 */
export function getLocalBlogPosts(): BlogPostPreview[] {
  const slugs = getBlogPostSlugs();

  return slugs
    .map((slug) => {
      const post = getLocalBlogPostBySlug(slug);
      if (!post) return null;

      return {
        slug: post.slug,
        frontmatter: post.frontmatter,
      };
    })
    .filter((post): post is BlogPostPreview => post !== null);
}

/**
 * Merge local MDX + Dev.to posts. Local wins on slug collisions.
 * Sorted newest first. New Dev.to publishes appear after revalidation.
 */
export async function getAllBlogPosts(): Promise<BlogPostPreview[]> {
  const [localPosts, devtoPosts] = await Promise.all([
    Promise.resolve(getLocalBlogPosts()),
    getDevtoBlogPreviews(),
  ]);

  const bySlug = new Map<string, BlogPostPreview>();

  for (const post of devtoPosts) {
    bySlug.set(post.slug, post);
  }
  // Local overrides Dev.to if the same slug exists
  for (const post of localPosts) {
    bySlug.set(post.slug, post);
  }

  return Array.from(bySlug.values()).sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );
}

/**
 * Get all published blog posts (local + Dev.to)
 */
export async function getPublishedBlogPosts(): Promise<BlogPostPreview[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => post.frontmatter.isPublished);
}

/**
 * Get blog posts by tag
 */
export async function getBlogPostsByTag(
  tag: string,
): Promise<BlogPostPreview[]> {
  const publishedPosts = await getPublishedBlogPosts();
  return publishedPosts.filter((post) =>
    post.frontmatter.tags.some(
      (postTag) => postTag.toLowerCase() === tag.toLowerCase(),
    ),
  );
}

/**
 * Get all unique tags from published posts
 */
export async function getAllTags(): Promise<string[]> {
  const publishedPosts = await getPublishedBlogPosts();
  const tagsSet = new Set<string>();

  publishedPosts.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => {
      tagsSet.add(tag.toLowerCase());
    });
  });

  return Array.from(tagsSet).sort();
}

/**
 * Get related posts based on tags (excluding the current post)
 */
export async function getRelatedPosts(
  currentSlug: string,
  maxPosts = 3,
): Promise<BlogPostPreview[]> {
  const currentPost = await getBlogPostBySlug(currentSlug);
  if (!currentPost || !currentPost.frontmatter.isPublished) {
    return [];
  }

  const allPosts = await getPublishedBlogPosts();
  const currentTags = currentPost.frontmatter.tags.map((tag) =>
    tag.toLowerCase(),
  );

  const postsWithScore = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const sharedTags = post.frontmatter.tags.filter((tag) =>
        currentTags.includes(tag.toLowerCase()),
      );
      return {
        post,
        score: sharedTags.length,
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return postsWithScore.slice(0, maxPosts).map((item) => item.post);
}
