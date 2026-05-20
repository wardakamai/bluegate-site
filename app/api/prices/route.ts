import { NextResponse } from 'next/server';
import { fetchPrices } from '@/lib/prices';

export const revalidate = 900; // 15 minutes

export async function GET() {
  const prices = await fetchPrices();
  return NextResponse.json(prices);
}
