import SectionDivider from '@/components/common/SectionDivider';
import { Quote } from '@/components/common/Quote';
import AboutMe from '@/components/landing/AboutMe';
import Achievements from '@/components/landing/Achievements';
import Experience from '@/components/landing/Experience';
import Hero from '@/components/landing/Hero';
import OpenSourceContributions from '@/components/landing/OpenSourceContributions';
import Work from '@/components/landing/Projects';
import Skills from '@/components/landing/Skills';
import Testimonials from '@/components/landing/Testimonials';
import React from 'react';

/** Keep homepage blog preview fresh */
export const revalidate = 3600;

export default function page() {
  return (
    <main>
      <div className="content-column content-column-dashed relative mx-auto">
        <Hero />

        {/* Titled sections own their top/bottom rules — no extra dividers between them */}
        <Experience />
        <Work />
        <OpenSourceContributions />
        <Skills />
        <Achievements />
        <Testimonials />
        <AboutMe />

        <SectionDivider />
        <Quote />
      </div>
    </main>
  );
}
