import { achievements } from '@/config/Achievements';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import React from 'react';

import HoverArrow from '../common/HoverArrow';
import SectionTitle from '../common/SectionTitle';

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

export default function Achievements() {
  return (
    <section className="pb-10">
      <SectionTitle>Achievements</SectionTitle>
      <div className="flex flex-col gap-2 px-6 pt-6">
        {achievements.map((item) => {
          const isExternal = item.href?.startsWith('http');
          const content = (
            <>
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-dashed border-[var(--dashed-border)] bg-muted/50 text-muted-foreground transition-colors duration-300 group-hover:border-foreground/25 group-hover:text-foreground">
                  <TrophyIcon className="size-4" />
                </div>
                <div className="flex min-w-0 flex-col">
                  <h3 className="text-sm font-semibold leading-snug text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    @{item.organization} | {item.date}
                  </p>
                </div>
              </div>
              <HoverArrow />
            </>
          );

          const classes = cn(
            'group card-flat-interactive flex w-full items-center justify-between gap-4 px-4 py-3',
          );

          if (!item.href) {
            return (
              <div key={item.title} className={classes}>
                {content}
              </div>
            );
          }

          if (isExternal) {
            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
              >
                {content}
              </a>
            );
          }

          return (
            <Link key={item.title} href={item.href} className={classes}>
              {content}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
