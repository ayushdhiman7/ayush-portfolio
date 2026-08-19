'use client';

import { devices, software, webExtensions } from '@/config/Gears';
import { Link } from 'next-view-transitions';
import React from 'react';

import DashedHorizontalRule from '../common/DashedHorizontalRule';

export default function GearsContent() {
  return (
    <div className="pb-12">
      {/* Devices */}
      <ul>
        {devices.map((device) => (
          <li
            key={device.name}
            className="flex items-center gap-4 border-b border-dashed border-[var(--dashed-border)] px-6 py-4 last:border-b-0"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-dashed border-[var(--dashed-border)] text-muted-foreground">
              {device.icon}
            </div>
            <span className="text-sm font-medium text-foreground">
              {device.name}
            </span>
          </li>
        ))}
      </ul>

      <DashedHorizontalRule />

      {/* Software */}
      <div className="px-6 py-6">
        <h3 className="mb-4 text-sm font-semibold text-foreground">Software</h3>
        <div className="flex flex-wrap gap-2">
          {software.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-dashed border-[var(--dashed-border)] px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <DashedHorizontalRule />

      {/* Extensions */}
      <div className="px-6 py-6">
        <h3 className="mb-4 text-sm font-semibold text-foreground">
          Browser Extensions
        </h3>
        <div className="flex flex-wrap gap-2">
          {webExtensions.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-dashed border-[var(--dashed-border)] px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
