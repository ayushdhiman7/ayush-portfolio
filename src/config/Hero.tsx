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
import ExpressJs from '@/components/technologies/ExpressJs';
import JavaScript from '@/components/technologies/JavaScript';
import Laravel from '@/components/technologies/Laravel';
import MySQL from '@/components/technologies/MySQL';
import NodeJs from '@/components/technologies/NodeJs';
import Php from '@/components/technologies/Php';
import ReactIcon from '@/components/technologies/ReactIcon';
import SQL from '@/components/technologies/SQL';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vue from '@/components/technologies/Vue';
// Technology Components

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  JavaScript: JavaScript,
  ReactIcon: ReactIcon,
  Vue: Vue,
  NodeJs: NodeJs,
  ExpressJs: ExpressJs,
  Laravel: Laravel,
  Php: Php,
  SQL: SQL,
  MySQL: MySQL,
  TailwindCss: TailwindCss,
};

export const heroConfig = {
  // Personal Information
  name: 'Ayush Kumar',
  title: 'Software Engineer',
  /** Rotating roles under the name */
  titles: [
    'Software Engineer',
    'Full Stack Developer',
    'Backend Developer',
    'Frontend Developer',
  ],
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'JavaScript',
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      component: 'JavaScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Vue',
      href: 'https://vuejs.org/',
      component: 'Vue',
    },
    {
      name: 'Laravel',
      href: 'https://laravel.com/',
      component: 'Laravel',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
    {
      name: 'SQL',
      href: 'https://en.wikipedia.org/wiki/SQL',
      component: 'SQL',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I build <b>full-stack web applications</b> using {skills:0}, {skills:1}, {skills:2}, and {skills:3}. Specialized in <b>backend APIs</b>  and <b>scalable systems</b> with {skills:5}, backed by {skills:6} for production-ready products.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'default',
      text: 'Book an intro call',
      href: 'https://cal.com/gitayush/contact',
      icon: 'Calendar',
    },
    {
      variant: 'outline',
      text: 'Check my resume',
      href: '/resume/Ayush_Kumar_resume.pdf',
      icon: 'CV',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'Github',
    href: 'https://github.com/ayushdhiman7',
    icon: <Github />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ayush-kumar-47060a242',
    icon: <LinkedIn />,
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/BKOHeebYsT/',
    icon: <LeetCode />,
  },
];
