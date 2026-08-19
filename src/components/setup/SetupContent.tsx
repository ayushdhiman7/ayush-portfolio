'use client';

import { settingsJson, steps } from '@/config/Setup';
import { Link } from 'next-view-transitions';
import React, { useState } from 'react';

import DashedHorizontalRule from '../common/DashedHorizontalRule';

export default function SetupContent() {
  const [copied, setCopied] = useState(false);

  async function copySettings() {
    try {
      await navigator.clipboard.writeText(settingsJson);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="pb-12">
      <p className="px-6 py-4 text-sm text-muted-foreground">
        My daily VS Code / Cursor setup — fonts, extensions, and settings I
        actually use while building AI apps.
      </p>

      <DashedHorizontalRule />

      {steps.map((step, index) => (
        <div key={step.id}>
          <div className="px-6 py-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-dashed border-[var(--dashed-border)] text-muted-foreground">
                {step.icon}
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {step.id}. {step.title}
              </h3>
            </div>

            <ul className="space-y-3 pl-11">
              {step.content.map((item, i) => {
                if (item.type === 'download') {
                  return (
                    <li key={i} className="text-sm text-muted-foreground">
                      Download{' '}
                      <Link
                        href={item.href!}
                        className="font-medium text-foreground underline-offset-4 hover:underline"
                      >
                        {item.name}
                      </Link>
                      {item.description ? ` — ${item.description}` : null}
                    </li>
                  );
                }

                if (item.type === 'shortcut' || item.type === 'prompt') {
                  return (
                    <li key={i}>
                      <code className="rounded border border-dashed border-[var(--dashed-border)] bg-muted/50 px-2 py-1 font-mono text-xs text-foreground">
                        {item.text}
                      </code>
                    </li>
                  );
                }

                return (
                  <li key={i} className="text-sm text-muted-foreground">
                    {item.text}
                  </li>
                );
              })}
            </ul>
          </div>
          {index < steps.length - 1 && <DashedHorizontalRule />}
        </div>
      ))}

      <DashedHorizontalRule />

      <div className="px-6 py-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="text-sm font-semibold text-foreground">
            settings.json
          </h3>
          <button
            type="button"
            onClick={copySettings}
            className="rounded-full border border-dashed border-[var(--dashed-border)] px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <pre className="max-h-[28rem] overflow-auto rounded-lg border border-dashed border-[var(--dashed-border)] bg-muted/30 p-4 text-xs leading-relaxed text-muted-foreground">
          {settingsJson}
        </pre>
      </div>
    </div>
  );
}
