import { ProjectCaseStudyFrontmatter } from '@/types/project';
import rehypeHighlight from '@shikijs/rehype';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

import Github from '../svgs/Github';
import Website from '../svgs/Website';
import { ProjectComponents } from './ProjectComponents';

interface ProjectContentProps {
  frontmatter: ProjectCaseStudyFrontmatter;
  content: string;
}

export function ProjectContent({ frontmatter, content }: ProjectContentProps) {
  const {
    title,
    description,
    image,
    technologies,
    github,
    live,
    timeline,
    role,
    team,
    status,
    challenges,
    learnings,
  } = frontmatter;

  const isLive = status === 'completed' || status === 'in-progress';

  return (
    <article className="mx-auto max-w-3xl">
      {/* ── Navigation row ── */}
      <div className="mb-0 flex items-center justify-between border-b border-dashed border-gray-200 py-3 dark:border-gray-800">
        <Link
          href="/projects"
          className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Projects
        </Link>
        <Link
          href="/projects"
          className="text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </Link>
      </div>

      {/* ── Project Image ── */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-dashed border-gray-200 dark:border-gray-800">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ── Action Links Row ── */}
      <div className="flex items-center gap-0 border-b border-dashed border-gray-200 dark:border-gray-800">
        {github && (
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 border-r border-dashed border-gray-200 py-3 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground dark:border-gray-800"
          >
            <Github className="size-3.5" />
            Github
          </Link>
        )}
        {live && (
          <Link
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 border-r border-dashed border-gray-200 py-3 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground dark:border-gray-800"
          >
            <Website className="size-3.5" />
            Website
          </Link>
        )}
        <div className="flex flex-1 items-center justify-center gap-2 py-3 text-xs text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Post
        </div>
      </div>

      {/* ── Title + Status ── */}
      <div className="border-b border-dashed border-gray-200 px-0 py-5 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold">{title}</h1>
          {isLive && (
            <span className="flex items-center gap-1 rounded-full border border-green-300/50 bg-green-500/10 px-2 py-0.5 text-xs text-green-700 dark:text-green-400">
              <span className="size-1.5 animate-pulse rounded-full bg-green-500" />
              Live
            </span>
          )}
        </div>

        <p className="mt-2 text-sm text-muted-foreground">{description}</p>

        {/* Meta: timeline, role, team */}
        {(timeline || role || team) && (
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground">
            {timeline && (
              <span>
                <span className="font-medium text-foreground">Timeline:</span>{' '}
                {timeline}
              </span>
            )}
            {role && (
              <span>
                <span className="font-medium text-foreground">Role:</span>{' '}
                {role}
              </span>
            )}
            {team && (
              <span>
                <span className="font-medium text-foreground">Team:</span>{' '}
                {team}
              </span>
            )}
          </div>
        )}
      </div>

      {/* ── Stack Used ── */}
      <div className="border-b border-dashed border-gray-200 py-5 dark:border-gray-800">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Stack used
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-1.5 rounded-full border border-dashed border-gray-200 px-3 py-1 text-xs font-medium dark:border-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ── Challenges & Learnings ── */}
      {(challenges?.length || learnings?.length) && (
        <div className="border-b border-dashed border-gray-200 py-5 dark:border-gray-800">
          <div className="grid gap-4 md:grid-cols-2">
            {challenges && challenges.length > 0 && (
              <div className="rounded-lg border border-dashed border-yellow-300/60 bg-yellow-50/50 p-4 dark:border-yellow-800/40 dark:bg-yellow-950/10">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-yellow-700 dark:text-yellow-300">
                  Key Challenges
                </h3>
                <ul className="space-y-1.5">
                  {challenges.map((challenge, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-xs text-yellow-700 dark:text-yellow-300"
                    >
                      <span className="mt-1.5 block size-1 rounded-full bg-yellow-500" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {learnings && learnings.length > 0 && (
              <div className="rounded-lg border border-dashed border-green-300/60 bg-green-50/50 p-4 dark:border-green-800/40 dark:bg-green-950/10">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-green-700 dark:text-green-300">
                  Key Learnings
                </h3>
                <ul className="space-y-1.5">
                  {learnings.map((learning, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-xs text-green-700 dark:text-green-300"
                    >
                      <span className="mt-1.5 block size-1 rounded-full bg-green-500" />
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── MDX Content ── */}
      {content && content.trim() && (
        <div className="prose prose-sm prose-neutral dark:prose-invert max-w-none py-6">
          <MDXRemote
            source={content}
            components={ProjectComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [
                    rehypeHighlight,
                    {
                      theme: 'github-dark',
                    },
                  ],
                ],
              },
            }}
          />
        </div>
      )}
    </article>
  );
}
