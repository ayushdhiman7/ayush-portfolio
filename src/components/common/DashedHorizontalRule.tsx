import { cn } from '@/lib/utils';
import React from 'react';

interface DashedHorizontalRuleProps {
  className?: string;
}

/**
 * Full-viewport horizontal dashed line — matches rudrakumar.in:
 * relative h-px wrapper + absolute w-[100vw] centered child.
 */
export default function DashedHorizontalRule({
  className,
}: DashedHorizontalRuleProps) {
  return (
    <div
      className={cn('relative h-px w-full', className)}
      aria-hidden="true"
    >
      <div className="border-dashed-horizontal absolute top-0 left-1/2 h-px w-[100vw] max-w-[100vw] -translate-x-1/2" />
    </div>
  );
}
