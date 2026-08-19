export interface ProjectDetails {
  /** Short “why this exists” paragraph shown under the title */
  overview: string;
  /** Optional lead-in before the feature list */
  highlightsLabel?: string;
  /** Concrete features / capabilities */
  highlights: string[];
  /** Closing line summarizing the goal */
  outcome?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  video?: string;
  link: string;
  technologies: { name: string; icon: React.ReactNode }[];
  github?: string;
  live: string;
  /** Optional write-up / blog URL shown in the Post action slot */
  post?: string;
  details: boolean;
  /** Curated case-study content for the project detail page */
  detailContent?: ProjectDetails;
  projectDetailsPageSlug: string;
  isWorking: boolean;
}

export interface ProjectCaseStudyFrontmatter {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  timeline: string;
  role: string;
  team?: string;
  status: 'completed' | 'in-progress' | 'archived';
  featured: boolean;
  challenges?: string[];
  learnings?: string[];
  isPublished: boolean;
}

export interface ProjectCaseStudy {
  slug: string;
  frontmatter: ProjectCaseStudyFrontmatter;
  content: string;
}

export interface ProjectCaseStudyPreview {
  slug: string;
  frontmatter: ProjectCaseStudyFrontmatter;
}
