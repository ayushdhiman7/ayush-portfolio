import { getPublishedBlogPosts } from '@/lib/blog';
import { Link } from 'next-view-transitions';
import React from 'react';

import HoverArrow from '../common/HoverArrow';
import SectionTitle from '../common/SectionTitle';
import ViewAllButton from '../common/ViewAllButton';
import Calender from '../svgs/Calender';

export default async function Blog() {
  const posts = (await getPublishedBlogPosts()).slice(0, 2);

  return (
    <section className="pb-10">
      <SectionTitle>Blogs</SectionTitle>

      <div className="flex flex-col gap-2 px-6 pt-6">
        {posts.map((post) => {
          const { slug, frontmatter } = post;
          const { title, tags, date } = frontmatter;
          const formattedDate = new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
          });

          return (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="group card-flat-interactive flex items-center gap-3 px-4 py-3"
            >
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <h3 className="text-sm font-semibold leading-snug text-foreground">
                  {title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calender className="size-3.5" />
                  {formattedDate}
                </div>
                {tags?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[var(--dashed-border)] bg-muted/50 px-2 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <HoverArrow />
            </Link>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center px-6">
        <ViewAllButton href="/blog">View All</ViewAllButton>
      </div>
    </section>
  );
}
