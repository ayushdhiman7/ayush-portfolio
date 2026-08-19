import CSS from '@/components/technologies/CSS';
import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Git from '@/components/technologies/Git';
import Github from '@/components/technologies/Github';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import Laravel from '@/components/technologies/Laravel';
import Linux from '@/components/technologies/Linux';
import MongoDB from '@/components/technologies/MongoDB';
import MySQL from '@/components/technologies/MySQL';
import NodeJs from '@/components/technologies/NodeJs';
import Php from '@/components/technologies/Php';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vue from '@/components/technologies/Vue';
import type { ReactNode } from 'react';

export interface SkillItem {
  name: string;
  href: string;
  icon: ReactNode;
}

export const skills: SkillItem[] = [
  {
    name: 'HTML',
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    icon: <Html />,
  },
  {
    name: 'CSS',
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    icon: <CSS />,
  },
  {
    name: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: <JavaScript />,
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
    name: 'Vue',
    href: 'https://vuejs.org/',
    icon: <Vue />,
  },
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
    name: 'PHP',
    href: 'https://www.php.net/',
    icon: <Php />,
  },
  {
    name: 'Laravel',
    href: 'https://laravel.com/',
    icon: <Laravel />,
  },
  {
    name: 'MongoDB',
    href: 'https://www.mongodb.com/',
    icon: <MongoDB />,
  },
  {
    name: 'MySQL',
    href: 'https://www.mysql.com/',
    icon: <MySQL />,
  },
  {
    name: 'PostgreSQL',
    href: 'https://www.postgresql.org/',
    icon: <PostgreSQL />,
  },
  {
    name: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
    icon: <TailwindCss />,
  },
  {
    name: 'Git',
    href: 'https://git-scm.com/',
    icon: <Git />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/',
    icon: <Github />,
  },
  {
    name: 'Docker',
    href: 'https://www.docker.com/',
    icon: <Docker />,
  },
  {
    name: 'Linux',
    href: 'https://www.kernel.org/',
    icon: <Linux />,
  },
  {
    name: 'Postman',
    href: 'https://www.postman.com/',
    icon: <Postman />,
  },
  {
    name: 'Figma',
    href: 'https://www.figma.com/',
    icon: <Figma />,
  },
];
