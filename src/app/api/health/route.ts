import { NextResponse } from 'next/server';

/**
 * Health-check endpoint. A small but real route handler that proves the API
 * surface is wired and gives uptime monitors something to ping.
 */
export const dynamic = 'force-dynamic';

export function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'lumina-finance',
    version: '0.1.0',
    timestamp: new Date().toISOString(),
  });
}
