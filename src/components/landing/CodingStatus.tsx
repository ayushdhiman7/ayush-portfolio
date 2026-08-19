'use client';

import { useEffect, useState } from 'react';

interface CodingStats {
  isOnline: boolean;
  todayTime?: string;
  yesterdayTime?: string;
  currentEditor: string;
  hours?: number;
  minutes?: number;
  error?: string;
}

export default function CodingStatus() {
  const [stats, setStats] = useState<CodingStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/coding-stats');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch coding stats:', error);
        setStats({
          isOnline: false,
          todayTime: '0h 0m',
          currentEditor: 'Cursor',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();

    // Refresh every 5 minutes
    const interval = setInterval(fetchStats, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle click - show for 5 seconds
  const handleClick = () => {
    setShowDetails(true);
    setTimeout(() => {
      if (!isHovering) {
        setShowDetails(false);
      }
    }, 5000);
  };

  // Handle mouse enter
  const handleMouseEnter = () => {
    setIsHovering(true);
    setShowDetails(true);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setIsHovering(false);
    // Only hide if not clicked recently (handled by timeout)
    setTimeout(() => {
      if (!isHovering) {
        setShowDetails(false);
      }
    }, 100);
  };

  if (loading || !stats) return null;

  return (
    <div className="relative">
      {/* Small dot indicator - always visible */}
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center justify-center rounded-full p-1 transition-all hover:scale-110"
        aria-label="Coding status"
      >
        <div
          className={`size-3 rounded-full ${
            stats.isOnline
              ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]'
              : 'bg-gray-400 shadow-[0_0_6px_rgba(156,163,175,0.5)]'
          }`}
        />
      </button>

      {/* Details popup - shown on hover/click */}
      <div
        className={`absolute top-full left-0 z-50 mt-2 transition-all duration-200 ${
          showDetails
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <div className="flex items-center gap-3 rounded-lg border border-dashed border-[var(--dashed-border)] bg-background px-4 py-2 whitespace-nowrap shadow-sm">
          {/* Online/Offline Status */}
          <div className="flex items-center gap-2">
            <div
              className={`size-2 rounded-full ${
                stats.isOnline
                  ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]'
                  : 'bg-gray-400'
              }`}
            />
            <span className="text-sm font-medium text-foreground">
              {stats.isOnline ? 'Online' : 'Offline'} in{' '}
              <span className="inline-flex items-center gap-1">
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="3"
                    width="20"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 21h8M12 17v4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                {stats.currentEditor}
              </span>
            </span>
          </div>

          {/* Divider */}
          <div className="h-4 w-px bg-[var(--dashed-border)]" />

          {/* Today's Coding Time */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Today coded</span>
            <span className="font-bold text-foreground">
              {stats.todayTime || stats.yesterdayTime || '0h 0m'}
            </span>
          </div>
        </div>

        {/* Arrow pointer */}
        <div className="absolute -top-1 left-2 size-2 rotate-45 border-t border-l border-dashed border-[var(--dashed-border)] bg-background" />
      </div>
    </div>
  );
}
