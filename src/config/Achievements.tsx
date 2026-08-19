export interface Achievement {
  title: string;
  organization: string;
  date: string;
  href?: string;
  icon?: 'trophy' | 'medal' | 'star';
}

export const achievements: Achievement[] = [
  {
    title: 'Employee of the Month',
    organization: 'Uimatic',
    date: 'July 2026',
    icon: 'trophy',
  },
  {
    title: 'Completed GitHub Copilot course',
    organization: 'Udemy',
    date: '2026',
    icon: 'medal',
  },
  {
    title: 'Built and shipped multiple production-ready full-stack applications',
    organization: 'Personal Projects',
    date: '2024 - 2025',
    icon: 'star',
  },
];

const achievementsConfig = {
  achievements,
};

export default achievementsConfig;