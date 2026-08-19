import { NextResponse } from 'next/server';

const FALLBACK = {
  track: 'Circuits',
  artist: 'C418',
  isPlaying: false,
};

async function getAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return null;
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
    next: { revalidate: 0 },
  });

  if (!res.ok) return null;
  const data = await res.json();
  return data.access_token as string | null;
}

export async function GET() {
  try {
    const accessToken = await getAccessToken();

    if (!accessToken) {
      return NextResponse.json(FALLBACK);
    }

    // Try currently playing first
    const nowPlayingRes = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        next: { revalidate: 30 },
      },
    );

    if (nowPlayingRes.status === 200) {
      const nowPlaying = await nowPlayingRes.json();
      if (nowPlaying?.item) {
        return NextResponse.json({
          track: nowPlaying.item.name as string,
          artist: (nowPlaying.item.artists as { name: string }[])
            .map((a) => a.name)
            .join(', '),
          isPlaying: nowPlaying.is_playing as boolean,
        });
      }
    }

    // Fall back to recently played
    const recentRes = await fetch(
      'https://api.spotify.com/v1/me/player/recently-played?limit=1',
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        next: { revalidate: 60 },
      },
    );

    if (recentRes.ok) {
      const recent = await recentRes.json();
      const item = recent?.items?.[0]?.track;
      if (item) {
        return NextResponse.json({
          track: item.name as string,
          artist: (item.artists as { name: string }[])
            .map((a) => a.name)
            .join(', '),
          isPlaying: false,
        });
      }
    }

    return NextResponse.json(FALLBACK);
  } catch {
    return NextResponse.json(FALLBACK);
  }
}
