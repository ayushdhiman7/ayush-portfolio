'use client';

import { type Experience } from '@/config/Experience';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

import Skill from '../common/Skill';

interface InlineExperienceCardProps {
  experience: Experience;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        'size-4 shrink-0 text-muted-foreground transition-transform duration-300',
        open && 'rotate-180',
      )}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

const parseDescription = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, '<b>$1</b>');
};

/** Format "March 2025" → "March, 2025" for reference style */
function formatDate(date: string): string {
  const match = date.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (match) return `${match[1]}, ${match[2]}`;
  return date;
}

export default function InlineExperienceCard({
  experience,
}: InlineExperienceCardProps) {
  const [open, setOpen] = useState(true);

  const dateRange = `${formatDate(experience.startDate)} - ${
    experience.isCurrent ? 'Present' : formatDate(experience.endDate)
  }`;

  return (
    <div className="w-full overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer items-center gap-3 py-4 transition-colors hover:opacity-90"
        aria-expanded={open}
      >
        <div className="size-9 shrink-0 overflow-hidden rounded-md border border-[var(--dashed-border)]">
          <Image
            src={experience.image}
            alt={experience.company}
            width={36}
            height={36}
            className={cn(
              'size-full object-cover',
              experience.isBlur && 'blur-[4px]',
            )}
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-start gap-0.5">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={cn(
                'text-sm font-bold leading-tight',
                experience.isBlur && 'blur-[5px]',
              )}
            >
              {experience.company}
            </span>
            {experience.employmentType && (
              <span className="rounded-full border border-[var(--dashed-border)] bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                {experience.employmentType}
              </span>
            )}
            {experience.isCurrent && (
              <span className="flex items-center gap-1 rounded-full border border-green-300/40 bg-green-500/10 px-2 py-0.5 text-[10px] font-medium text-green-500">
                <span className="size-1.5 animate-pulse rounded-full bg-green-500" />
                Active
              </span>
            )}
          </div>
          <span className="text-xs text-muted-foreground">
            {experience.position}
          </span>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-0.5">
          <span className="hidden text-xs text-muted-foreground sm:inline">
            {dateRange}
          </span>
          {experience.location && (
            <span className="hidden text-xs text-muted-foreground sm:inline">
              {experience.location}
            </span>
          )}
        </div>
        <ChevronIcon open={open} />
      </button>

      <div
        className={cn(
          'grid transition-all duration-300 ease-in-out',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-4 pb-5 pl-12">
            <p className="text-xs text-muted-foreground sm:hidden">
              {dateRange}
              {experience.location ? ` · ${experience.location}` : ''}
            </p>

            <ul className="flex flex-col gap-1.5">
              {experience.description?.map((desc, i) => (
                <li
                  key={i}
                  className="text-xs leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{
                    __html: `• ${parseDescription(desc)}`,
                  }}
                />
              ))}
            </ul>

            {experience.technologies?.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {experience.technologies.map((tech, i) => (
                  <Skill key={i} name={tech.name} href={tech.href}>
                    {tech.icon}
                  </Skill>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
