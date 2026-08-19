import { BlogCard } from '@/components/blog/BlogCard';
import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { getPublishedBlogPosts } from '@/lib/blog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog – Saurabh Singh',
  description:
    'Thoughts on AI, full-stack development, and building products that matter.',
};

/** Refresh listing hourly so newly published Dev.to posts appear automatically */
export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts();

  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-secondary text-sm">Writing</p>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Blogs
          </h1>
          <p className="text-muted-foreground max-w-xl text-base">
            Thoughts on AI, full-stack development, and building things that
            matter.
          </p>
        </div>

        <Separator />

        <p className="text-muted-foreground text-sm">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'}
        </p>

        {posts.length === 0 ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
            <p className="text-muted-foreground text-lg font-medium">
              No posts yet — check back soon!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
