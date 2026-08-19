import { Link } from 'next-view-transitions';
import React from 'react';

import { cn } from '@/lib/utils';

import HoverArrow from './HoverArrow';

interface AboutMeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
  external?: boolean;
}

/** About Me row: icon box + title/description + hover arrow */
export default function AboutMeCard({
  title,
  description,
  icon,
  href,
  className,
  external = false,
}: AboutMeCardProps) {
  const inner = (
    <>
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-dashed border-[var(--dashed-border)] bg-muted/50 text-muted-foreground transition-colors duration-300 group-hover:border-foreground/25 group-hover:text-foreground">
        {icon}
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <HoverArrow />
    </>
  );

  const classes = cn('group card-flat-interactive flex w-full items-center gap-4 px-4 py-3', className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
