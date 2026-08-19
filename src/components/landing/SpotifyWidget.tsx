'use client';

import { useEffect, useState } from 'react';

interface SpotifyTrack {
  track: string;
  artist: string;
  isPlaying: boolean;
}

const FALLBACK: SpotifyTrack = {
  track: 'Circuits',
  artist: 'C418',
  isPlaying: false,
};

export default function SpotifyWidget() {
  const [data, setData] = useState<SpotifyTrack | null>(null);

  useEffect(() => {
    async function fetchTrack() {
      try {
        const res = await fetch('/api/spotify/now-playing');
        if (!res.ok) throw new Error('non-ok');
        const json = await res.json();
        setData(json);
      } catch {
        setData(FALLBACK);
      }
    }
    fetchTrack();
  }, []);

  const track = data ?? FALLBACK;

  return (
    <div className="flex items-center gap-2">
      {/* Spotify logo */}
      <svg
        viewBox="0 0 24 24"
        fill="#1DB954"
        xmlns="http://www.w3.org/2000/svg"
        className="size-4 shrink-0"
        aria-label="Spotify"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.318a.747.747 0 0 1-1.028.25c-2.815-1.72-6.357-2.109-10.525-1.156a.748.748 0 0 1-.352-1.453c4.563-1.043 8.479-.594 11.657 1.337a.748.748 0 0 1 .248 1.022zm1.471-3.268a.935.935 0 0 1-1.285.308c-3.224-1.98-8.136-2.554-11.95-1.398a.934.934 0 0 1-.543-1.788c4.358-1.322 9.774-.682 13.47 1.593a.934.934 0 0 1 .308 1.285zm.126-3.402c-3.867-2.297-10.245-2.509-13.936-1.388a1.122 1.122 0 1 1-.652-2.148c4.244-1.287 11.3-1.04 15.757 1.606a1.122 1.122 0 0 1-1.169 1.93z" />
      </svg>

      <span className="text-xs text-muted-foreground">
        {track.isPlaying ? 'Now playing' : 'Last played'}{' '}
        <span className="text-foreground">—</span>{' '}
        <span className="font-medium text-foreground">{track.track}</span>
        <span className="text-muted-foreground"> · {track.artist}</span>
      </span>
    </div>
  );
}
