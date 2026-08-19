'use client';

import { quotes } from '@/config/Quote';
import { useEffect, useState } from 'react';

export const Quote = () => {
  const [currentQuote, setCurrentQuote] = useState<{
    quote: string;
    author: string;
  } | null>(null);

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQuote);
  }, []);

  if (!currentQuote) return null;

  const { quote, author } = currentQuote;

  return (
    <div className="flex flex-col items-center gap-4 px-6 py-12 text-center">
      <span
        aria-hidden="true"
        className="select-none text-5xl leading-none text-muted-foreground/40"
      >
        &ldquo;
      </span>
      <p className="max-w-lg text-lg leading-relaxed text-foreground italic">
        {quote}
      </p>
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-[var(--dashed-border)]" />
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          {author}
        </p>
        <span className="h-px w-8 bg-[var(--dashed-border)]" />
      </div>
    </div>
  );
};
