import DashedHorizontalRule from '@/components/common/DashedHorizontalRule';
import SectionTitle from '@/components/common/SectionTitle';
import { ProjectList } from '@/components/projects/ProjectList';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { projects } from '@/config/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata('/projects');

export default function ProjectsPage() {
  return (
    <main>
      <div className="content-column content-column-dashed relative mx-auto">
        <SectionTitle>Projects</SectionTitle>

        <div className="space-y-4 px-6 pt-4 pb-4">
          <p className="text-muted-foreground text-sm">
            My projects and work across different technologies and domains.
          </p>
          <h2 className="text-foreground text-sm font-semibold">
            All Projects
            {projects.length > 0 && (
              <span className="text-muted-foreground ml-2 text-sm font-normal">
                ({projects.length}{' '}
                {projects.length === 1 ? 'project' : 'projects'})
              </span>
            )}
          </h2>
        </div>

        {/* Mid vertical flush between framing horizontal rules */}
        <DashedHorizontalRule />
        <div className="relative">
          <div
            className="projects-grid-mid pointer-events-none absolute inset-y-0 left-1/2 z-[1] hidden w-px -translate-x-1/2 md:block"
            aria-hidden="true"
          />
          <div className="px-6">
            <ProjectList projects={projects} showMid={false} />
          </div>
        </div>
        <DashedHorizontalRule />

        <div className="pb-12" />
      </div>
    </main>
  );
}
