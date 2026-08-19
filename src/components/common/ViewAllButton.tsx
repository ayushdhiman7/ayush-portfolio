import { Link } from 'next-view-transitions';
import React from 'react';

import { cn } from '@/lib/utils';

interface ViewAllButtonProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  external?: boolean;
}

/** Off-white "View All →" button — small radius, taller hit area */
export default function ViewAllButton({
  href,
  children = 'View All',
  className,
  external = false,
}: ViewAllButtonProps) {
  const content = (
    <>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="size-3.5 transition-transform duration-300 group-hover/btn:-rotate-45"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </>
  );

  const classes = cn('view-all-btn group/btn', className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
