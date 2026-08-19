import ProjectDetail from '@/components/projects/ProjectDetail';
import { siteConfig } from '@/config/Meta';
import { getProjectBySlug, getProjectDetailSlugs } from '@/lib/project';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  return getProjectDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    metadataBase: new URL(siteConfig.url),
    title: `${project.title} – Project`,
    description: project.description,
    openGraph: {
      title: `${project.title} – Project`,
      description: project.description,
      images: [project.image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} – Project`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.details) {
    notFound();
  }

  return (
    <main>
      <div className="content-column content-column-dashed relative mx-auto">
        <ProjectDetail project={project} />
      </div>
    </main>
  );
}
