import { socialLinks } from '@/config/Hero';

export const footerConfig = {
  developer: 'Saurabh Singh',
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
  ['Github', 'LinkedIn', 'X'].includes(s.name),
);
