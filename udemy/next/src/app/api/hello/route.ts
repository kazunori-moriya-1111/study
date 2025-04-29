import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    { id: 1, name: 'yamada' },
    { id: 2, name: 'suzuki' },
    { id: 3, name: 'takahashi' },
  ]);
}
