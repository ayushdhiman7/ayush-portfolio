import { cn } from '@/lib/utils';
import React from 'react';

interface HoverArrowProps {
  className?: string;
}

/**
 * Consistent card arrow: points right by default, rotates to ↗ on group hover.
 */
export default function HoverArrow({ className }: HoverArrowProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn(
        'size-4 shrink-0 text-muted-foreground transition-all duration-300 ease-out',
        'group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:-rotate-45 group-hover:text-foreground',
        className,
      )}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
