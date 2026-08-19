'use client';

import { newsletterConfig } from '@/config/Newsletter';
import React, { FormEvent, useState } from 'react';

import SectionTitle from '../common/SectionTitle';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'done'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder — wire to Mailchimp / API later
    console.log('Newsletter subscribe:', email);
    setStatus('done');
    setEmail('');
  };

  return (
    <section className="pb-10">
      <SectionTitle>{newsletterConfig.heading}</SectionTitle>
      <div className="hatch-bg px-6 py-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={newsletterConfig.placeholder}
            className="w-full flex-1 rounded-lg border border-dashed border-[var(--dashed-border)] bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20"
          />
          <button type="submit" className="view-all-btn shrink-0 justify-center">
            {newsletterConfig.buttonText}
          </button>
        </form>
        {status === 'done' && (
          <p className="mt-2 text-xs text-muted-foreground">
            Thanks — you&apos;ll hear from me soon.
          </p>
        )}
      </div>
    </section>
  );
}
