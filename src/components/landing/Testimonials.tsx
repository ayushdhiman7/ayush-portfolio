import DashedHorizontalRule from '@/components/common/DashedHorizontalRule';
import TestimonialMarquee from '@/components/ui/marquee-01';
import React from 'react';

/**
 * Testimonials — section word title replaced by the newsletter hatch /
 * cross-line band between dashed rules.
 */
export default function Testimonials() {
  return (
    <section>
      <div className="w-full">
        <DashedHorizontalRule />
        <div
          className="hatch-bg min-h-[3.25rem] w-full"
          role="presentation"
          aria-hidden="true"
        />
        <h2 className="sr-only">Testimonials</h2>
        <DashedHorizontalRule />
      </div>
      <div className="py-6">
        <TestimonialMarquee />
      </div>
    </section>
  );
}
