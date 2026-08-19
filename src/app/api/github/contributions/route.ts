import { githubConfig } from '@/config/Github';
import { NextResponse } from 'next/server';

export const revalidate = 3600; // Refresh hourly so the heatmap stays current

/** Keep the graph to ~11 months so it fits without horizontal scrolling */
const MONTHS_TO_SHOW = 11;

type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type ContributionsApiResponse = {
  total: { lastYear?: number } | number;
  contributions: ContributionDay[];
};

function getCutoffDate() {
  const cutoff = new Date();
  cutoff.setHours(0, 0, 0, 0);
  cutoff.setMonth(cutoff.getMonth() - MONTHS_TO_SHOW);
  return cutoff;
}

export async function GET() {
  try {
    const response = await fetch(
      `${githubConfig.apiUrl}/${githubConfig.username}?y=last`,
      {
        headers: { Accept: 'application/json' },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      throw new Error(`Contributions API error: ${response.status}`);
    }

    const data: ContributionsApiResponse = await response.json();

    if (!Array.isArray(data.contributions) || data.contributions.length === 0) {
      throw new Error('No contribution data returned');
    }

    const cutoff = getCutoffDate();

    const contributions: ContributionDay[] = data.contributions
      .map((day) => ({
        date: day.date,
        count: Number(day.count) || 0,
        level: Math.min(
          4,
          Math.max(0, Number(day.level) || 0),
        ) as ContributionDay['level'],
      }))
      .filter((day) => new Date(day.date) >= cutoff);

    if (contributions.length === 0) {
      throw new Error('No contribution data in the selected range');
    }

    const total = contributions.reduce((sum, day) => sum + day.count, 0);

    return NextResponse.json(
      { total, contributions, months: MONTHS_TO_SHOW },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      },
    );
  } catch (error) {
    console.error('Failed to fetch GitHub contributions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub contributions' },
      { status: 502 },
    );
  }
}
