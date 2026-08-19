'use client';

import { heroConfig, socialLinks } from '@/config/Hero';
import { parseTemplate } from '@/lib/hero';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import { Pixelify_Sans } from 'next/font/google';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import DashedHorizontalRule from '../common/DashedHorizontalRule';
import { ThemeToggleButton } from '../common/ThemeSwitch';
import CV from '../svgs/CV';
import Calendar from '../svgs/Calender';
import { Button } from '../ui/button';
import ThermodynamicGrid from '../ui/interactive-thermodynamic-grid';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import CodingStatus from './CodingStatus';
import GithubHeatmap from './GithubHeatmap';
import SpotifyWidget from './SpotifyWidget';

const pixelify = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const buttonIcons = {
  Calendar: Calendar,
  CV: CV,
};

function RotatingTitle({ titles }: { titles: string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (titles.length <= 1) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % titles.length);
        setVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [titles]);

  const label = titles[index] ?? titles[0] ?? '';

  return (
    <p
      className={cn(
        'text-muted-foreground h-5 text-sm transition-all duration-300',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0',
      )}
      aria-live="polite"
    >
      {label}
    </p>
  );
}

function HeroBio() {
  const parts = parseTemplate(
    heroConfig.description.template,
    heroConfig.skills,
  );

  return (
    <p className="text-muted-foreground text-sm leading-relaxed">
      {parts.map((part) => {
        if (!part) return null;

        if (part.type === 'skill' && part.skill) {
          const name = part.skill.name;
          return (
            <strong key={part.key} className="text-foreground">
              {name}
            </strong>
          );
        }

        if (part.type === 'bold') {
          return (
            <strong key={part.key} className="text-foreground">
              {part.text}
            </strong>
          );
        }

        return <span key={part.key}>{part.text}</span>;
      })}
    </p>
  );
}

export default function Hero() {
  const { name, title, titles, avatar, buttons } = heroConfig;
  const rotatingTitles =
    titles?.length > 0 ? titles : title ? [title] : ['Engineer'];

  return (
    <div className="w-full">
      {/* ── SS Monogram Banner + interactive heat grid ── */}
      <div className="relative flex min-h-[200px] items-center justify-center overflow-hidden">
        <ThermodynamicGrid resolution={12} coolingFactor={0.96} />
        <div className="pointer-events-none relative z-10 flex flex-col items-center gap-2">
          <span
            className={cn(
              pixelify.className,
              'text-6xl font-bold text-white/90 select-none sm:text-7xl',
            )}
            style={{ letterSpacing: '0.12em' }}
          >
            SS
          </span>
          <span className="text-[11px] font-medium tracking-wide text-white/45">
            Hover me
          </span>
        </div>
      </div>

      <DashedHorizontalRule />

      <div className="px-6">
        {/* ── Profile Header Row ── */}
        <div className="flex items-center justify-between gap-4 py-5">
          <div className="flex items-center gap-4">
            <div className="relative inline-block shrink-0">
              <Image
                src={avatar}
                alt={name}
                width={96}
                height={96}
                className="bg-muted size-24 rounded-full object-cover"
                priority
              />
              <div className="absolute -right-0.5 -bottom-0.5">
                <CodingStatus />
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <h1 className="text-2xl leading-tight font-bold">{name}</h1>
              <RotatingTitle titles={rotatingTitles} />
            </div>
          </div>
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </div>

        <DashedHorizontalRule />

        {/* ── Bio + Buttons + Socials ── */}
        <div className="flex flex-col gap-5 py-6">
          <HeroBio />

          <SpotifyWidget />

          <div className="flex flex-wrap gap-3">
            {buttons.map((button, index) => {
              const IconComponent =
                buttonIcons[button.icon as keyof typeof buttonIcons];
              const isExternal =
                button.href.startsWith('http') ||
                button.href.startsWith('mailto') ||
                button.href.endsWith('.pdf');
              return (
                <Button
                  key={index}
                  variant={button.variant as 'outline' | 'default'}
                  size="sm"
                  className="rounded-full"
                  asChild
                >
                  <Link
                    href={button.href}
                    {...(isExternal
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="flex items-center gap-2"
                  >
                    {IconComponent && <IconComponent />}
                    {button.text}
                  </Link>
                </Button>
              );
            })}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-xs">Here are my socials</p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <Tooltip key={link.name} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:bg-muted flex items-center gap-1.5 rounded-full border border-[var(--dashed-border)] px-3 py-1.5 text-xs transition-colors"
                    >
                      <span className="size-3.5">{link.icon}</span>
                      <span>{link.name}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>

        <DashedHorizontalRule />

        <div className="py-6">
          <GithubHeatmap />
        </div>
      </div>
    </div>
  );
}
