import { socialLinks } from '@/config/Hero';

export const footerConfig = {
  developer: 'Ayush Kumar',
  text: '©',
  copyright: 'All rights reserved.',
  showVisitorCount: true,
  visitorCountPlaceholder: 1028,
  links: [
    {
      name: 'llms.txt',
      href: '/llms.txt',
      label: 'llms.txt',
    },
  ],
};

export const footerSocials = socialLinks.filter((s) =>
  ['Github', 'LinkedIn', 'LeetCode'].includes(s.name),
);
