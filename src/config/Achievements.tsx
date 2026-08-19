export interface Achievement {
  title: string;
  organization: string;
  date: string;
  href?: string;
  icon?: 'trophy' | 'medal' | 'star';
}

export const achievements: Achievement[] = [
  {
    title: 'Obtained SSoC Certificate for open source contributions',
    organization: 'Summer of Code (SSoC)',
    date: '10 Oct, 2025',
    href: '/blog/frontend-part-1.png',
    icon: 'trophy',
  },
  {
    title: 'Active LeetCode problem solver — consistent DSA practice',
    organization: 'LeetCode',
    date: 'Ongoing',
    href: 'https://leetcode.com/u/saurabhsingh881888/',
    icon: 'medal',
  },
  {
    title: 'Built and shipped multiple AI-powered MVPs',
    organization: 'Personal Projects',
    date: '2024 - 2025',
    href: '/projects',
    icon: 'star',
  },
];

/** Legacy certificate gallery data (used on certificates page if needed) */
export const certificates = [
  {
    file: '/blog/frontend-part-1.png',
    title: 'SSoC Certificate',
    issuer: 'Summer of Code (SSoC)',
    date: '2025-10-10',
  },
  {
    file: '/blog/how-to-be-me.png',
    title: 'Example Certificate 1',
    issuer: 'Example Issuer',
    date: '2024-01-01',
  },
  {
    file: '/blog/frontend-part-1.png',
    title: 'Example Certificate 2',
    issuer: 'Example Issuer',
    date: '2023-08-01',
  },
  {
    file: '/blog/how-to-be-me.png',
    title: 'SSoC Participation Certificate',
    issuer: 'SSoC',
    date: '2025-10-10',
  },
];

const achievementsConfig = {
  achievements,
  certificates,
};

export default achievementsConfig;
