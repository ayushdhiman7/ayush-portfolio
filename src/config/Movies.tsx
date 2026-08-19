export interface Movie {
  title: string;
  year: string;
  description: string;
  image: string;
  type: 'movie' | 'series';
}

/**
 * Favorite films & shows — personal picks that shape how I think about
 * systems, craft, and obsession.
 */
export const movies: Movie[] = [
  {
    title: 'Dark',
    year: '2017',
    type: 'series',
    image: '/movies/dark.jpg',
    description:
      'An incredibly layered narrative that rewards attention, patience, and curiosity. I love how it treats time, causality, and choices like a complex system — every edge case eventually matters.',
  },
  {
    title: 'Interstellar',
    year: '2014',
    type: 'movie',
    image: '/movies/interstellar.jpg',
    description:
      'A rare blend of hard science and deep emotion, where love and logic coexist. It resonates with me for its ambition, scale, and belief that curiosity is worth the risk.',
  },
  {
    title: 'Inception',
    year: '2010',
    type: 'movie',
    image: '/movies/inception.jpg',
    description:
      'Dreams nested inside dreams feel a lot like building intelligent systems — layers of abstraction, careful architecture, and one wrong assumption cascading everywhere. Still one of my favorite mind puzzles.',
  },
  {
    title: 'Mission: Impossible – Fallout',
    year: '2018',
    type: 'movie',
    image: '/movies/mission-impossible.jpg',
    description:
      'Precision under pressure. Obsessive craft, relentless execution, and a team that ships when everything is on fire. Peak action filmmaking — and oddly motivating before a late-night coding session.',
  },
];
