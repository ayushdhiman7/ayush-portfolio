import Image from 'next/image';
import React from 'react';

import { movies, type Movie } from '@/config/Movies';

import DashedHorizontalRule from '../common/DashedHorizontalRule';

function chunkPairs<T>(items: T[]): T[][] {
  const pairs: T[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    pairs.push(items.slice(i, i + 2));
  }
  return pairs;
}

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <article className="flex flex-col">
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-muted">
        <Image
          src={movie.image}
          alt={`${movie.title} poster`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 21rem"
        />
      </div>
      <div className="space-y-2 px-5 py-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-base font-semibold text-foreground">
            {movie.title}
          </h3>
          <span className="shrink-0 text-xs text-muted-foreground">
            {movie.year}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {movie.description}
        </p>
      </div>
    </article>
  );
}

/** 2-column movie poster grid with dashed vertical + horizontal dividers */
export default function MoviesGrid() {
  const rows = chunkPairs(movies);

  return (
    <div className="w-full">
      {rows.map((row, rowIndex) => (
        <React.Fragment key={row.map((m) => m.title).join('-')}>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {row.map((movie, colIndex) => (
              <div
                key={movie.title}
                className={
                  colIndex === 0 && row.length > 1
                    ? 'sm:border-r sm:border-dashed sm:border-[var(--dashed-border)]'
                    : undefined
                }
              >
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
          {rowIndex < rows.length - 1 && <DashedHorizontalRule />}
        </React.Fragment>
      ))}
    </div>
  );
}
