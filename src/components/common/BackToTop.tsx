'use client';

import { useHapticFeedback } from '@/hooks/use-haptic-feedback';
import { ArrowUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function BackToTop() {
  const { triggerHaptic, isMobile } = useHapticFeedback();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isMobile()) {
      triggerHaptic('light');
    }
  };

  if (!visible) return null;

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={handleClick}
          className="fixed right-5 bottom-5 z-50 flex size-10 items-center justify-center rounded-lg bg-foreground text-background shadow-md transition-opacity hover:opacity-90"
          aria-label="Back to top"
        >
          <ArrowUp className="size-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Back to top</p>
      </TooltipContent>
    </Tooltip>
  );
}
