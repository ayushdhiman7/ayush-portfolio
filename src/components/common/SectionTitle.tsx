import { cn } from '@/lib/utils';
import React from 'react';

import DashedHorizontalRule from './DashedHorizontalRule';

interface SectionTitleProps {
  children: string;
  className?: string;
}

/**
 * Bold section heading sandwiched between two
 * full-viewport dashed horizontal rules.
 */
export default function SectionTitle({
  children,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn('w-full', className)}>
      <DashedHorizontalRule />
      <h2 className="section-heading px-6 py-4">{children}</h2>
      <DashedHorizontalRule />
    </div>
  );
}
