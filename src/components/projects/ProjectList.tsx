import { cn } from '@/lib/utils';
import { type Project } from '@/types/project';
import React from 'react';

import DashedHorizontalRule from '../common/DashedHorizontalRule';
import { ProjectCard } from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
  className?: string;
  /** Draw mid vertical inside the grid (default true). Set false when parent draws it. */
  showMid?: boolean;
}

const COLS = 2;

function chunk<T>(items: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}

export function ProjectList({
  projects,
  className,
  showMid = true,
}: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No projects found.</p>
      </div>
    );
  }

  const rows = chunk(projects, COLS);

  return (
    <div className={cn('projects-grid relative', className)}>
      {showMid && (
        <div
          className="projects-grid-mid pointer-events-none absolute inset-y-0 left-1/2 z-[1] hidden w-px -translate-x-1/2 md:block"
          aria-hidden="true"
        />
      )}

      {/* Mobile: one card per row, full end-to-end rules between */}
      <div className="md:hidden">
        {projects.map((project, index) => (
          <React.Fragment key={project.title}>
            <div className="px-4 py-6">
              <ProjectCard project={project} index={index} />
            </div>
            {index < projects.length - 1 && <DashedHorizontalRule />}
          </React.Fragment>
        ))}
      </div>

      {/* Desktop: 2-col rows with full end-to-end rules between rows */}
      <div className="hidden md:block">
        {rows.map((row, rowIndex) => (
          <React.Fragment key={row.map((p) => p.title).join('-')}>
            <div className="grid grid-cols-2">
              {row.map((project, colIndex) => {
                const index = rowIndex * COLS + colIndex;
                return (
                  <div key={project.title} className="px-4 py-6">
                    <ProjectCard project={project} index={index} />
                  </div>
                );
              })}
            </div>
            {rowIndex < rows.length - 1 && <DashedHorizontalRule />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
