'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import SectionTitle from '../common/SectionTitle';

type PRState = 'open' | 'closed';

interface PullRequest {
  id: number;
  title: string;
  html_url: string;
  state: PRState;
  merged_at: string | null;
  created_at: string;
  updated_at: string;
  number: number;
  repository: string;
}

function MergedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      className="shrink-0 text-foreground"
      aria-label="Merged"
    >
      <path
        fill="currentColor"
        d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
      />
    </svg>
  );
}

function OpenPRIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      className="shrink-0 text-muted-foreground"
      aria-label="Open"
    >
      <path
        fill="currentColor"
        d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
      />
    </svg>
  );
}

function getPRStatus(pr: PullRequest): 'merged' | 'open' {
  if (pr.merged_at) return 'merged';
  return 'open';
}

function StatusBadge({ status }: { status: 'merged' | 'open' }) {
  if (status === 'merged') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-foreground/25 bg-foreground/10 px-2 py-0.5 text-[10px] font-medium text-foreground">
        <MergedIcon />
        Merged
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-muted-foreground/40 bg-transparent px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
      <OpenPRIcon />
      Open
    </span>
  );
}

function PRSkeleton() {
  return (
    <div className="animate-pulse space-y-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="card-flat flex items-center gap-3 p-4">
          <div className="h-4 w-4 shrink-0 rounded-full bg-muted" />
          <div className="flex-1 space-y-2">
            <div className="h-3.5 w-3/4 rounded bg-muted" />
            <div className="h-3 w-1/3 rounded bg-muted" />
          </div>
          <div className="h-5 w-16 rounded-full bg-muted" />
        </div>
      ))}
    </div>
  );
}

const GITHUB_USERNAME = 'Saurabhsing21';
const DEFAULT_VISIBLE = 10;

const SKIP_TITLES = new Set([
  'testing frontend',
  'testing backend',
  'fixed',
  'dashboard',
  'addded backend',
  'created pull request for saurabhsingh branch',
]);

export default function OpenSourceContributions() {
  const [prs, setPrs] = useState<PullRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function fetchPRs() {
      try {
        setIsLoading(true);

        const query = `author:${GITHUB_USERNAME}+type:pr+is:merged+-user:${GITHUB_USERNAME}`;
        const openQuery = `author:${GITHUB_USERNAME}+type:pr+is:open+-user:${GITHUB_USERNAME}`;

        const [mergedRes, openRes] = await Promise.all([
          fetch(
            `https://api.github.com/search/issues?q=${query}&per_page=30&sort=updated&order=desc`,
            { headers: { Accept: 'application/vnd.github+json' } },
          ),
          fetch(
            `https://api.github.com/search/issues?q=${openQuery}&per_page=10&sort=updated&order=desc`,
            { headers: { Accept: 'application/vnd.github+json' } },
          ),
        ]);

        if (!mergedRes.ok || !openRes.ok) throw new Error('GitHub API error');

        const [mergedData, openData] = await Promise.all([
          mergedRes.json(),
          openRes.json(),
        ]);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mapItem = (item: any): PullRequest => ({
          id: item.id,
          title: item.title,
          html_url: item.html_url,
          state: item.state as PRState,
          merged_at: item.pull_request?.merged_at ?? null,
          created_at: item.created_at,
          updated_at: item.updated_at,
          number: item.number,
          repository: item.repository_url.replace(
            'https://api.github.com/repos/',
            '',
          ),
        });

        const allItems: PullRequest[] = [
          ...(openData.items ?? []).map(mapItem),
          ...(mergedData.items ?? []).map(mapItem),
        ]
          .filter((pr) => !SKIP_TITLES.has(pr.title.toLowerCase().trim()))
          .sort(
            (a, b) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime(),
          );

        setPrs(allItems);
      } catch (err) {
        console.error('Failed to fetch OSS PRs:', err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPRs();
  }, []);

  const visiblePRs = prs.slice(0, DEFAULT_VISIBLE);

  return (
    <section className="pb-10">
      <SectionTitle>Open Source</SectionTitle>

      <div className="px-6 pt-6">
        {isLoading ? (
          <PRSkeleton />
        ) : hasError ? (
          <div className="card-flat p-8 text-center text-muted-foreground">
            <p className="font-medium">Unable to load contributions</p>
            <p className="mt-1 text-sm">
              Check out my{' '}
              <Link
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline-offset-4 hover:underline"
              >
                GitHub profile
              </Link>{' '}
              directly.
            </p>
          </div>
        ) : prs.length === 0 ? (
          <div className="card-flat p-8 text-center text-muted-foreground">
            <p className="text-sm">No public contributions found.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <ul className="space-y-2">
              {visiblePRs.map((pr) => {
                const status = getPRStatus(pr);

                return (
                  <li key={pr.id}>
                    <Link
                      href={pr.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group card-flat-interactive flex items-center gap-3 px-4 py-3"
                    >
                      <div className="shrink-0">
                        {status === 'merged' ? <MergedIcon /> : <OpenPRIcon />}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-foreground transition-colors group-hover:opacity-80">
                          {pr.title}
                        </p>
                        <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="font-mono">{pr.repository}</span>
                          <span>·</span>
                          <span>#{pr.number}</span>
                        </p>
                      </div>

                      <div className="shrink-0">
                        <StatusBadge status={status} />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="pt-2 text-center">
              <Link
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                See all contributions on GitHub →
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
