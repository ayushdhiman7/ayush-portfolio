'use client';

import { projects } from '@/config/Projects';
import React from 'react';

import DashedHorizontalRule from '../common/DashedHorizontalRule';
import SectionTitle from '../common/SectionTitle';
import ViewAllButton from '../common/ViewAllButton';
import { ProjectList } from '../projects/ProjectList';

export default function Projects() {
  return (
    <section className="pb-10">
      <SectionTitle>Projects</SectionTitle>

      {/* Mid vertical lives here so it spans flush from title rule → View All rule */}
      <div className="relative">
        <div
          className="projects-grid-mid pointer-events-none absolute inset-y-0 left-1/2 z-[1] hidden w-px -translate-x-1/2 md:block"
          aria-hidden="true"
        />

        <div className="px-6">
          <ProjectList projects={projects.slice(0, 4)} showMid={false} />
        </div>
      </div>

      {/* End-to-end dashed rules (same as section headings) */}
      <DashedHorizontalRule />
      <div className="flex justify-center py-4">
        <ViewAllButton href="/projects">View All</ViewAllButton>
      </div>
      <DashedHorizontalRule />
    </section>
  );
}
