import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import Laravel from '@/components/technologies/Laravel';
import MongoDB from '@/components/technologies/MongoDB';
import MySQL from '@/components/technologies/MySQL';
import NodeJs from '@/components/technologies/NodeJs';
import Php from '@/components/technologies/Php';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vue from '@/components/technologies/Vue';

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
    isCurrent: true,
    employmentType: 'Full Time',
    company: 'Uimatic',
    position: 'Software Engineer',
    location: 'Mohali',
    image: '/company/uimatic.jpeg',
    description: [
      'Developing and maintaining RESTful APIs using Laravel (PHP) for production e-commerce platforms, contributing to a multi-tenant architecture that enables multiple stores and clients to operate within a single platform. Building the e-commerce frontend using Vue.js with Pinia state management and integrating backend APIs to support core shopping functionality, along with online payments via PayMongo and delivery management through Lalamove services.',
    ],
    startDate: 'May 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'Laravel',
        href: 'https://laravel.com/',
        icon: <Laravel />,
      },
      {
        name: 'Vue',
        href: 'https://vuejs.org/',
        icon: <Vue />,
      },
      {
        name: 'PHP',
        href: 'https://www.php.net/',
        icon: <Php />,
      },
      {
        name: 'MySQL',
        href: 'https://www.mysql.com/',
        icon: <MySQL />,
      },
      {
        name: 'Docker',
        href: 'https://www.docker.com/',
        icon: <Docker />,
      },
    ],
    website: 'https://www.linkedin.com/in/ayush-kumar-47060a242',
  },
  {
    isCurrent: false,
    employmentType: 'Full Time',
    company: 'V Recruiters',
    position: 'Full Stack Developer',
    location: 'Zirakpur',
    image: '/company/vrecruiters.webp',
    description: [
      'Worked as a Full-Stack Developer focusing mainly on backend development, building RESTful APIs and contributing to dynamic web applications while ensuring clean, maintainable, and scalable code practices across the codebase.',
    ],
    startDate: 'November 2024',
    endDate: 'April 2025',
    technologies: [
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'Express.js',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'MongoDB',
        href: 'https://www.mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
    ],
    website: 'https://www.linkedin.com/in/ayush-kumar-47060a242',
  },
  {
    isCurrent: false,
    employmentType: 'Internship',
    company: 'Excellence Technology',
    position: 'MERN Stack Trainee',
    location: 'Mohali',
    image: '/company/excellence.png',
    description: [
      'During my MERN Stack training, I participated in code reviews, debugging, and optimizing code to improve performance and scalability. I gained hands-on experience with version control using GitHub and project management tools, and collaborated with team members to develop and maintain web applications using MongoDB, Express.js, React, and Node.js.',
    ],
    startDate: 'June 2024',
    endDate: 'November 2024',
    technologies: [
      {
        name: 'HTML',
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        icon: <Html />,
      },
      {
        name: 'JavaScript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        icon: <JavaScript />,
      },
      {
        name: 'MongoDB',
        href: 'https://www.mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'Express.js',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
    ],
    website: 'https://www.linkedin.com/in/ayush-kumar-47060a242',
  },
];
