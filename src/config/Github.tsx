/*
 * GitHub Contribution Configuration
 *
 * This file contains the configuration for the GitHub contribution graph.
 * Update the username to match your GitHub profile.
 */

export const githubConfig = {
  username: 'Saurabhsing21',
  // Deno Deploy Classic sunset Jul 2026 — use jogruber's maintained API
  apiUrl: 'https://github-contributions-api.jogruber.de/v4',


  // Display settings
  title: 'GitHub Activity',
  subtitle: 'coding journey over the past year',

  // Chart settings
  blockSize: 11,
  blockMargin: 3,
  fontSize: 12,
  maxLevel: 4,

  // Month labels
  months: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],

  // Weekday labels (empty for weekends, M for Monday, etc.)
  weekdays: ['', 'M', '', 'W', '', 'F', ''],

  // Total count label template
  totalCountLabel: '{{count}} contributions in the last year',

  // Theme configuration for dark and light modes
  theme: {
    dark: [
      'rgb(30, 30, 30)',   // Level 0 — near-black background
      'rgb(80, 80, 80)',   // Level 1 — dark gray
      'rgb(130, 130, 130)', // Level 2 — medium gray
      'rgb(190, 190, 190)', // Level 3 — light gray
      'rgb(240, 240, 240)', // Level 4 — near-white
    ],
    light: [
      'rgb(235, 235, 235)', // Level 0 — very light gray
      'rgb(180, 180, 180)', // Level 1 — light gray
      'rgb(120, 120, 120)', // Level 2 — medium gray
      'rgb(70, 70, 70)',   // Level 3 — dark gray
      'rgb(20, 20, 20)',   // Level 4 — near-black
    ],
  },


  // Error state configuration
  errorState: {
    title: 'Unable to load GitHub contributions',
    description: 'Check out my profile directly for the latest activity',
    buttonText: 'View on GitHub',
  },

  // Loading state configuration
  loadingState: {
    title: 'Loading contributions...',
    description: 'Fetching your GitHub activity data',
  },
};
