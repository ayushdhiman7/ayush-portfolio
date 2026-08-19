import DashedHorizontalRule from '@/components/common/DashedHorizontalRule';
import Github from '@/components/svgs/Github';
import Website from '@/components/svgs/Website';
import { cn } from '@/lib/utils';
import { Project } from '@/types/project';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

interface ProjectDetailProps {
  project: Project;
}

/** Simple left chevron — not the curved reply-style arrow */
function BackChevron({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function PostIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}

function ActionCell({
  href,
  icon,
  label,
  disabled,
  showDivider,
}: {
  href?: string;
  icon: React.ReactNode;
  label: string;
  disabled?: boolean;
  showDivider?: boolean;
}) {
  const classes = cn(
    'flex flex-1 items-center justify-center gap-2 py-3.5 text-sm transition-colors',
    showDivider && 'border-r border-dashed border-[var(--dashed-border)]',
    disabled
      ? 'cursor-default text-muted-foreground/40'
      : 'text-muted-foreground hover:bg-muted/40 hover:text-foreground',
  );

  if (!href || disabled) {
    return (
      <div className={classes} aria-disabled="true">
        {icon}
        {label}
      </div>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {icon}
      {label}
    </Link>
  );
}

/**
 * Lexem-style project detail with curated write-ups (not raw README dumps).
 */
export default function ProjectDetail({ project }: ProjectDetailProps) {
  const {
    title,
    description,
    image,
    video,
    github,
    live,
    post,
    technologies,
    isWorking,
    detailContent,
  } = project;

  const overview = detailContent?.overview ?? description;
  const highlights = detailContent?.highlights ?? [];
  const highlightsLabel = detailContent?.highlightsLabel;
  const outcome = detailContent?.outcome;

  return (
    <article className="w-full">
      <div className="flex items-center justify-between px-6 py-3">
        <Link
          href="/projects"
          className="group flex items-center gap-1.5 text-sm font-medium text-foreground transition-opacity hover:opacity-80"
        >
          <BackChevron className="size-4" />
          Projects
        </Link>
      </div>

      <DashedHorizontalRule />

      <div className="px-6 py-6">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-dashed border-[var(--dashed-border)] bg-muted">
          {video ? (
            <video
              className="h-full w-full object-cover"
              src={video}
              controls
              playsInline
              poster={image}
            />
          ) : (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 42rem"
            />
          )}
        </div>
      </div>

      <DashedHorizontalRule />

      <div className="flex items-stretch">
        <ActionCell
          href={github}
          icon={<Github className="size-3.5" />}
          label="Github"
          disabled={!github}
          showDivider
        />
        <ActionCell
          href={live || project.link}
          icon={<Website className="size-3.5" />}
          label="Website"
          disabled={!live && !project.link}
          showDivider
        />
        <ActionCell
          href={post}
          icon={<PostIcon className="size-3.5" />}
          label="Post"
          disabled={!post}
        />
      </div>

      <DashedHorizontalRule />

      <div className="space-y-5 px-6 py-6">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
          <span
            className={cn(
              'inline-flex items-center gap-1.5 text-sm',
              isWorking ? 'text-green-500' : 'text-muted-foreground',
            )}
          >
            <span
              className={cn(
                'size-2 rounded-full',
                isWorking ? 'animate-pulse bg-green-500' : 'bg-muted-foreground',
              )}
            />
            {isWorking ? 'Live' : 'Building'}
          </span>
        </div>

        <p className="text-base leading-relaxed text-muted-foreground">
          {overview}
        </p>

        {highlights.length > 0 && (
          <div className="space-y-3">
            {highlightsLabel && (
              <p className="text-sm font-medium text-foreground">
                {highlightsLabel}
              </p>
            )}
            <ul className="space-y-2.5">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {outcome && (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {outcome}
          </p>
        )}
      </div>

      <DashedHorizontalRule />

      <div className="px-6 py-6">
        <h2 className="mb-4 text-lg font-semibold text-foreground">
          Stack used
        </h2>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-2 rounded-lg border border-dashed border-[var(--dashed-border)] bg-muted/40 px-3 py-1.5 text-sm text-foreground"
            >
              <span className="flex size-4 items-center justify-center [&>svg]:size-4">
                {tech.icon}
              </span>
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom spacer — dashed rules + dotted grid (reference footer) */}
      <DashedHorizontalRule />
      <div className="bg-dot-grid min-h-[14rem] w-full" aria-hidden="true" />
      <DashedHorizontalRule />
    </article>
  );
}
