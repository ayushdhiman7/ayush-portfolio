import ArrowLeft from '@/components/svgs/ArrowLeft';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import React from 'react';

import DashedHorizontalRule from './DashedHorizontalRule';

interface PageBackTitleProps {
  children: string;
  href?: string;
  className?: string;
}

/**
 * Back-linked page title with dashed rules.
 */
export default function PageBackTitle({
  children,
  href = '/',
  className,
}: PageBackTitleProps) {
  return (
    <div className={cn('w-full', className)}>
      <DashedHorizontalRule />
      <Link
        href={href}
        className="group section-heading flex items-center gap-2 px-6 py-4 transition-opacity hover:opacity-80"
      >
        <ArrowLeft className="size-5 shrink-0 transition-transform group-hover:-translate-x-0.5" />
        <span>{children}</span>
      </Link>
      <DashedHorizontalRule />
    </div>
  );
}
