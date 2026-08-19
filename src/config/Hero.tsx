/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LeetCode from '@/components/svgs/LeetCode';
import LinkedIn from '@/components/svgs/LinkedIn';
import X from '@/components/svgs/X';
import AgenticAI from '@/components/technologies/AgenticAI';
import Bun from '@/components/technologies/Bun';
import Docker from '@/components/technologies/Docker';
import JavaScript from '@/components/technologies/JavaScript';
import LangChain from '@/components/technologies/LangChain';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
// Technology Components
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
  Python: Python,
  Docker: Docker,
  LangChain: LangChain,
  AgenticAI: AgenticAI,
};

export const heroConfig = {
  // Personal Information
  name: 'Saurabh Singh',
  title: 'AI Full Stack Engineer',
  /** Rotating roles under the name */
  titles: [
    'AI Engineer',
    'Full Stack Engineer',
    'Backend Engineer',
    'Freelancer',
  ],
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'Python',
      href: 'https://www.python.org/',
      component: 'Python',
    },
    {
      name: 'Typescript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Docker',
      href: 'https://www.docker.com/',
      component: 'Docker',
    },
    {
      name: 'LangChain',
      href: 'https://www.langchain.com/',
      component: 'LangChain',
    },
    {
      name: 'Agentic AI',
      href: 'https://www.anthropic.com/',
      component: 'AgenticAI',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I build <b>AI-powered applications</b> using {skills:0}, {skills:1}, {skills:2}, and {skills:3}. Specialized in <b>Applied AI</b> and <b>GenAI</b> with {skills:5}, mastering <b>{skills:6}</b> to create intelligent solutions. Passionate about building MVPs that solve real-world problems with {skills:4}.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'default',
      text: 'Book an intro call',
      href: 'https://cal.com/gitsaurabh/discovery-call',
      icon: 'Calendar',
    },
    {
      variant: 'outline',
      text: 'Check my resume',
      href: '/resume/Saurabh_singh_Ai%20engineer_resume.pdf',
      icon: 'CV',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'Github',
    href: 'https://github.com/Saurabhsing21',
    icon: <Github />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gitsaurabhsingh/',
    icon: <LinkedIn />,
  },
  {
    name: 'X',
    href: 'https://x.com/gitsaurabh0',
    icon: <X />,
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/saurabhsingh881888/',
    icon: <LeetCode />,
  },
];
