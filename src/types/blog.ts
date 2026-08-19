export type BlogSource = 'local' | 'devto';

export interface BlogFrontmatter {
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  isPublished: boolean;
  /** Origin of the post — local MDX or synced from Dev.to */
  source?: BlogSource;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  /** mdx for local files, markdown for Dev.to bodies */
  format?: 'mdx' | 'markdown';
}

export interface BlogPostPreview {
  slug: string;
  frontmatter: BlogFrontmatter;
}
