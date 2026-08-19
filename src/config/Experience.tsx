import Docker from '@/components/technologies/Docker';
import LangChain from '@/components/technologies/LangChain';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export type EmploymentType = 'Full Time' | 'Internship' | 'Freelance' | 'Contract';

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
  employmentType?: EmploymentType;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    isBlur: false,
    employmentType: 'Internship',
    company: 'Detoxio',
    position: 'AI Full Stack Intern',
    location: 'Remote',
    image: '/company/detoxio.png',
    description: [
      'Building cutting-edge GenAI tools and applications, focusing on practical AI implementations for real-world use cases.',
      'Developing and deploying AI agents using modern frameworks like LangChain and other GenAI technologies.',
      'Architecting full-stack solutions that integrate AI capabilities with robust backend and frontend systems.',
      'Working with Python, TypeScript, and modern AI frameworks to create intelligent, scalable applications.',
      'Collaborating on innovative AI projects that push the boundaries of applied artificial intelligence.',
    ],
    startDate: 'March 2025',
    endDate: 'June 2026',
    technologies: [
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <Python />,
      },
      {
        name: 'LangChain',
        href: 'https://www.langchain.com/',
        icon: <LangChain />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Docker',
        href: 'https://www.docker.com/',
        icon: <Docker />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
    ],
    website: 'https://www.bithive.in/',
    github: 'BitHiveTechnologies',
    x: 'https://x.com/BitHiveTechnologies',
    linkedin: 'https://www.linkedin.com/company/bithive-technology/',
  },
  {
    isCurrent: false,
    employmentType: 'Full Time',
    company: 'Bithive Technology',
    position: 'Chief Technology Officer (CTO)',
    location: 'Freelance Agency',
    image: '/company/bithive.webp',
    description: [
      'Led technology strategy and development as CTO for a freelancing agency, overseeing all technical operations and project delivery.',
      'Architected and developed custom websites tailored to client requirements, ensuring scalability, performance, and modern design standards.',
      'Built custom tools and automation solutions to streamline client workflows and improve operational efficiency.',
      'Managed end-to-end project lifecycle from requirements gathering to deployment, ensuring timely delivery and client satisfaction.',
      'Implemented modern tech stack including React, Next.js, and TypeScript for robust web applications.',
    ],
    startDate: 'December 2024',
    endDate: 'November 2025',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'MongoDB',
        href: 'https://mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
    ],
    website: 'https://www.bithive.in/',
    github: 'https://github.com/BitHiveTechnologies',
    x: 'https://x.com/BitHiveTechnologies',
    linkedin: 'https://www.linkedin.com/company/bithive-technology/',
  },
];
