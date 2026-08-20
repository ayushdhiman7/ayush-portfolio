const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

if (!clientId || !clientSecret || !refreshToken) {
  console.error(
    'Missing SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET / SPOTIFY_REFRESH_TOKEN in env',
  );
  process.exit(1);
}

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    Authorization: `Basic ${basic}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  }),
});

if (!tokenRes.ok) {
  console.error('Token refresh failed:', await tokenRes.text());
  process.exit(1);
}

const { access_token } = await tokenRes.json();

const nowPlayingRes = await fetch(
  'https://api.spotify.com/v1/me/player/currently-playing',
  {
    headers: { Authorization: `Bearer ${access_token}` },
  },
);

if (nowPlayingRes.status === 200) {
  const nowPlaying = await nowPlayingRes.json();
  if (nowPlaying?.item) {
    console.log(`\n▶ Now playing: "${nowPlaying.item.name}"`);
    console.log(
      `  Artist: ${nowPlaying.item.artists.map((a) => a.name).join(', ')}`,
    );
    console.log(`  Playing: ${nowPlaying.is_playing}\n`);
    process.exit(0);
  }
}

const recentRes = await fetch(
  'https://api.spotify.com/v1/me/player/recently-played?limit=1',
  {
    headers: { Authorization: `Bearer ${access_token}` },
  },
);

if (recentRes.ok) {
  const recent = await recentRes.json();
  const item = recent?.items?.[0]?.track;
  if (item) {
    console.log(`\n⏸ Last played: "${item.name}"`);
    console.log(`  Artist: ${item.artists.map((a) => a.name).join(', ')}\n`);
    process.exit(0);
  }
}

console.log('\nNo track found.\n');