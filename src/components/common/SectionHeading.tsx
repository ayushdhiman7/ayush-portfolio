import React from 'react';

interface SectionHeadingProps {
  subHeading: string;
  heading: string;
}

export default function SectionHeading({
  subHeading,
  heading,
}: SectionHeadingProps) {
  return (
    <div className="mb-6">
      <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {subHeading}
      </p>
      <h2 className="text-xl font-bold">{heading}</h2>
    </div>
  );
}
