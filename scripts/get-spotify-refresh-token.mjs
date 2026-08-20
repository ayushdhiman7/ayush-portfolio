const args = process.argv.slice(2);
const code = args[0];

if (!code) {
  console.log('Usage: node scripts/get-spotify-refresh-token.mjs <AUTHORIZATION_CODE>');
  process.exit(1);
}

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  console.error('Missing SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET in env');
  process.exit(1);
}

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

const res = await fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    Authorization: `Basic ${basic}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: 'http://127.0.0.1:3000/callback',
  }),
});

const data = await res.json();

if (!res.ok || !data.refresh_token) {
  console.error('Exchange failed:', JSON.stringify(data, null, 2));
  process.exit(1);
}

console.log(`\nSPOTIFY_REFRESH_TOKEN="${data.refresh_token}"\n`);