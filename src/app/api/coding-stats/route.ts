import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 300; // Cache for 5 minutes

interface WakatimeResponse {
  data: {
    grand_total: {
      digital: string;
      hours: number;
      minutes: number;
      text: string;
      total_seconds: number;
    };
  };
}

export async function GET() {
  const apiKey = process.env.WAKATIME_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        isOnline: false,
        yesterdayTime: '0h 0m',
        error: 'Wakatime API key not configured',
      },
      { status: 200 },
    );
  }

  try {
    // Fetch today's coding stats (real-time)
    const response = await fetch(
      'https://wakatime.com/api/v1/users/current/summaries?range=today',
      {
        headers: {
          Authorization: `Basic ${Buffer.from(apiKey).toString('base64')}`,
        },
        next: { revalidate: 300 }, // Cache for 5 minutes
      },
    );

    if (!response.ok) {
      throw new Error(`Wakatime API error: ${response.status}`);
    }

    const data: WakatimeResponse = await response.json();
    const grandTotal = data.data?.grand_total;

    // Format time
    const hours = grandTotal?.hours || 0;
    const minutes = grandTotal?.minutes || 0;
    const todayTime = `${hours}h ${minutes}m`;

    // Check if user is currently online (has coded in last 15 minutes)
    const statusResponse = await fetch(
      'https://wakatime.com/api/v1/users/current/heartbeats?date=today',
      {
        headers: {
          Authorization: `Basic ${Buffer.from(apiKey).toString('base64')}`,
        },
        next: { revalidate: 60 }, // Cache for 1 minute for online status
      },
    );

    let isOnline = false;
    let currentEditor = 'Cursor';

    if (statusResponse.ok) {
      const statusData = await statusResponse.json();
      const heartbeats = statusData.data || [];

      if (heartbeats.length > 0) {
        const lastHeartbeat = heartbeats[heartbeats.length - 1];
        const lastTime = new Date(lastHeartbeat.time * 1000);
        const now = new Date();
        const diffMinutes = (now.getTime() - lastTime.getTime()) / (1000 * 60);

        isOnline = diffMinutes < 15;
        currentEditor = lastHeartbeat.editor || 'Cursor';
      }
    }

    return NextResponse.json({
      isOnline,
      todayTime,
      currentEditor,
      hours,
      minutes,
    });
  } catch (error) {
    console.error('Wakatime API error:', error);
    return NextResponse.json(
      {
        isOnline: false,
        yesterdayTime: '0h 0m',
        error: 'Failed to fetch coding stats',
      },
      { status: 200 },
    );
  }
}
