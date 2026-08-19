import React from 'react';

import { cn } from '@/lib/utils';

import DashedHorizontalRule from './DashedHorizontalRule';

interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({
  className = '',
}: SectionDividerProps) {
  return <DashedHorizontalRule className={cn('my-0', className)} />;
}
