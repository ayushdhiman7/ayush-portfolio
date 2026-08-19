import AWS from '@/components/technologies/AWS';
import Bun from '@/components/technologies/Bun';
import ChatGPT from '@/components/technologies/ChatGPT';
import Docker from '@/components/technologies/Docker';
import FastAPI from '@/components/technologies/FastAPI';
import Figma from '@/components/technologies/Figma';
import GCloud from '@/components/technologies/GCloud';
import Git from '@/components/technologies/Git';
import Github from '@/components/technologies/Github';
import Golang from '@/components/technologies/Golang';
import HuggingFace from '@/components/technologies/HuggingFace';
import Java from '@/components/technologies/Java';
import JavaScript from '@/components/technologies/JavaScript';
import LangChain from '@/components/technologies/LangChain';
import Linux from '@/components/technologies/Linux';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import Python from '@/components/technologies/Python';
import RabbitMQ from '@/components/technologies/RabbitMQ';
import ReactIcon from '@/components/technologies/ReactIcon';
import Redis from '@/components/technologies/Redis';
import Shadcn from '@/components/technologies/Shadcn';
import SQL from '@/components/technologies/SQL';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import type { ReactNode } from 'react';

export interface SkillItem {
  name: string;
  href: string;
  icon: ReactNode;
}

export const skills: SkillItem[] = [
  {
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    icon: <TypeScript />,
  },
  {
    name: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: <JavaScript />,
  },
  {
    name: 'Python',
    href: 'https://www.python.org/',
    icon: <Python />,
  },
  {
    name: 'Java',
    href: 'https://www.java.com/',
    icon: <Java />,
  },
  {
    name: 'Golang',
    href: 'https://go.dev/',
    icon: <Golang />,
  },
  {
    name: 'Node.js',
    href: 'https://nodejs.org/',
    icon: <NodeJs />,
  },
  {
    name: 'React',
    href: 'https://react.dev/',
    icon: <ReactIcon />,
  },
  {
    name: 'Next.js',
    href: 'https://nextjs.org/',
    icon: <NextJs />,
  },
  {
    name: 'Nest.js',
    href: 'https://nestjs.com/',
    icon: <NestJs />,
  },
  {
    name: 'Langchain',
    href: 'https://www.langchain.com/',
    icon: <LangChain />,
  },
  {
    name: 'FastAPI',
    href: 'https://fastapi.tiangolo.com/',
    icon: <FastAPI />,
  },
  {
    name: 'Bun',
    href: 'https://bun.sh/',
    icon: <Bun />,
  },
  {
    name: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
    icon: <TailwindCss />,
  },
  {
    name: 'shadcn/ui',
    href: 'https://ui.shadcn.com/',
    icon: <Shadcn />,
  },
  {
    name: 'PostgreSQL',
    href: 'https://www.postgresql.org/',
    icon: <PostgreSQL />,
  },
  {
    name: 'MongoDB',
    href: 'https://www.mongodb.com/',
    icon: <MongoDB />,
  },
  {
    name: 'SQL',
    href: 'https://en.wikipedia.org/wiki/SQL',
    icon: <SQL />,
  },
  {
    name: 'Redis',
    href: 'https://redis.io/',
    icon: <Redis />,
  },
  {
    name: 'RabbitMQ',
    href: 'https://www.rabbitmq.com/',
    icon: <RabbitMQ />,
  },
  {
    name: 'Prisma',
    href: 'https://www.prisma.io/',
    icon: <Prisma />,
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
    name: 'GCloud',
    href: 'https://cloud.google.com/',
    icon: <GCloud />,
  },
  {
    name: 'AWS',
    href: 'https://aws.amazon.com/',
    icon: <AWS />,
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
  {
    name: 'Hugging Face',
    href: 'https://huggingface.co/',
    icon: <HuggingFace />,
  },
  {
    name: 'ChatGPT',
    href: 'https://chatgpt.com/',
    icon: <ChatGPT />,
  },
];
