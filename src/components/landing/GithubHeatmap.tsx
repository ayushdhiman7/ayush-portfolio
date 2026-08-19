'use client';

import { githubConfig } from '@/config/Github';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import GithubIcon from '../svgs/Github';
import { Button } from '../ui/button';

const ActivityCalendar = dynamic(
  () => import('react-activity-calendar').then((mod) => mod.default),
  { ssr: false },
);

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export default function GithubHeatmap() {
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setHasError(false);

        const response = await fetch('/api/github/contributions', {
          cache: 'no-store',
        });

        if (!response.ok) {
          throw new Error(`Failed to load contributions: ${response.status}`);
        }

        const data: {
          total?: number;
          contributions?: ContributionItem[];
          months?: number;
        } = await response.json();

        if (!data.contributions?.length) {
          throw new Error('Empty contribution payload');
        }

        setContributions(data.contributions);
        setTotalContributions(
          typeof data.total === 'number'
            ? data.total
            : data.contributions.reduce((sum, day) => sum + day.count, 0),
        );
      } catch (err) {
        console.error('Failed to fetch GitHub contributions:', err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="border-primary h-6 w-6 animate-spin rounded-full border-2 border-t-transparent" />
      </div>
    );
  }

  if (hasError || contributions.length === 0) {
    return (
      <div className="text-muted-foreground rounded-lg border border-dashed border-gray-200 p-6 text-center dark:border-gray-800">
        <div className="bg-muted mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full">
          <GithubIcon className="h-6 w-6" />
        </div>
        <p className="mb-1 text-sm font-medium">{githubConfig.errorState.title}</p>
        <p className="mb-3 text-xs">{githubConfig.errorState.description}</p>
        <Button variant="outline" size="sm" asChild>
          <Link
            href={`https://github.com/${githubConfig.username}`}
            className="inline-flex items-center gap-2"
          >
            <GithubIcon className="h-3 w-3" />
            {githubConfig.errorState.buttonText}
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="w-full overflow-x-auto">
        <ActivityCalendar
          data={contributions}
          blockSize={10}
          blockMargin={3}
          fontSize={githubConfig.fontSize}
          colorScheme={theme === 'dark' ? 'dark' : 'light'}
          maxLevel={githubConfig.maxLevel}
          hideTotalCount={true}
          hideColorLegend={true}
          hideMonthLabels={false}
          theme={githubConfig.theme}
          labels={{
            months: githubConfig.months,
            weekdays: githubConfig.weekdays,
            totalCount: githubConfig.totalCountLabel,
          }}
        />
      </div>

      <div className="flex items-center justify-between">
        {totalContributions > 0 && (
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">
              {totalContributions.toLocaleString()}
            </span>{' '}
            contributions in the last 11 months
          </p>
        )}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <span
              key={level}
              className="inline-block size-2.5 rounded-sm"
              style={{
                backgroundColor:
                  theme === 'dark'
                    ? (githubConfig.theme.dark?.[level] ?? '#161b22')
                    : (githubConfig.theme.light?.[level] ?? '#ebedf0'),
              }}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
