import { fetchQuotes } from '@/lib/prices'

export const revalidate = 900 // 15 minutes

export async function GET() {
  const quotes = await fetchQuotes()
  return Response.json(
    { quotes, asOf: new Date().toISOString() },
    {
      headers: {
        'Cache-Control': 's-maxage=900, stale-while-revalidate=1800',
      },
    },
  )
}
