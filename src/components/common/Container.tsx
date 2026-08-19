import { cn } from '@/lib/utils';
import React from 'react';

export default function Container({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'animate-fade-in-blur container mx-auto max-w-[42rem] px-6',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
