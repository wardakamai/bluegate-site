# Prompt 04 — Live Market Ticker

Read `CLAUDE.md`. Replace the placeholder ticker with a real component that fetches indicative prices for Brent, WTI, Gasoil, and Natural Gas, cached with ISR.

## Tasks

### 1. Server-side fetcher: `lib/prices.ts`

```ts
import yahooFinance from 'yahoo-finance2';

export type Instrument = {
  symbol: string; // Yahoo ticker
  name: string;
  sourceCode: string;
  unit: string; // 'per barrel' | 'per gallon' | 'per MMBtu'
};

export const instruments: Instrument[] = [
  {
    symbol: 'BZ=F',
    name: 'Brent Crude',
    sourceCode: 'ICE Brent Futures (BZ=F)',
    unit: 'per barrel',
  },
  { symbol: 'CL=F', name: 'WTI Crude', sourceCode: 'NYMEX WTI Futures (CL=F)', unit: 'per barrel' },
  {
    symbol: 'HO=F',
    name: 'Gasoil / Heating Oil',
    sourceCode: 'NYMEX Heating Oil (HO=F)',
    unit: 'per gallon',
  },
  { symbol: 'NG=F', name: 'Natural Gas', sourceCode: 'NYMEX Henry Hub (NG=F)', unit: 'per MMBtu' },
];

export type Quote = {
  symbol: string;
  name: string;
  sourceCode: string;
  unit: string;
  price: number;
  change: number;
  changePercent: number;
  asOf: string; // ISO timestamp
};

export async function fetchQuotes(): Promise<Quote[]> {
  // Use yahooFinance.quote(symbols) — returns regularMarketPrice, regularMarketChange, regularMarketChangePercent
  // Map to Quote[]. Wrap in try/catch; on error, return an empty array so the UI can show a fallback message.
}

export function brentWtiSpread(quotes: Quote[]): number | null {
  const brent = quotes.find((q) => q.symbol === 'BZ=F')?.price;
  const wti = quotes.find((q) => q.symbol === 'CL=F')?.price;
  return brent && wti ? +(brent - wti).toFixed(2) : null;
}
```

### 2. API route: `app/api/prices/route.ts`

```ts
export const revalidate = 900; // 15 minutes

export async function GET() {
  const quotes = await fetchQuotes();
  return Response.json(
    { quotes, asOf: new Date().toISOString() },
    {
      headers: { 'Cache-Control': 's-maxage=900, stale-while-revalidate=1800' },
    },
  );
}
```

### 3. Server component: `components/sections/MarketTicker.tsx`

This is a **server component** that calls `fetchQuotes()` directly at request time (with ISR caching). It does **not** call the API route from the client — that route exists for any future external consumers.

```tsx
export const revalidate = 900;

export async function MarketTicker() {
  const quotes = await fetchQuotes();
  const spread = brentWtiSpread(quotes);
  // Render 4 cards + spread strip below + disclaimer
}
```

UI requirements (match the toocrudeoil pattern):

- Section label: `MARKET REFERENCE PRICES`
- H2: `Indicative Pricing.` + italic span `Transparent Benchmarks.`
- Sub-line: `Updated [DD MMM YYYY] · Indicative only · Source: Yahoo Finance`
- 4-card grid:
  - Card top row: instrument name + source code (mono, small)
  - Big price (mono, large): `$XX.XX` with currency formatted via `Intl.NumberFormat`
  - Delta line: `+$0.67 per barrel` or `-$2.54 per barrel`
  - Percentage badge top-right: `+0.61%` (green) or `-2.41%` (red) — green = `var(--ok-green)`, red = `var(--alert-red)`
- Below the cards: spread strip — `Brent–WTI Spread  $7.05  Brent premium over WTI per barrel`
- Disclaimer paragraph (smaller, muted): _"Indicative only. Not a firm offer. Storage tariffs are quoted on a per-m³/month basis with throughput rebates, linked to Platts Rotterdam Barges, Argus NWE, or agreed differentials. For binding pricing contact our trading desk."_
- CTA: `Get a Storage Quote →`

### 4. Error / empty state

If `quotes.length === 0`, render a friendly fallback card with `Market data temporarily unavailable — please contact our trading desk for indicative pricing.` and the contact CTA.

### 5. Replace placeholder on home page

In `app/(marketing)/page.tsx`, swap `<MarketTickerPlaceholder />` for `<MarketTicker />`. Delete `MarketTickerPlaceholder.tsx`.

### 6. Optional: Markets page preview

Create a minimal `app/(marketing)/markets/page.tsx` that just renders `<MarketTicker />` with a heading. Full Markets page comes in prompt 09.

## Verification

- [ ] Visit `/` — the ticker section shows 4 real prices that match the current market
- [ ] Wait 15 minutes (or trigger redeploy) — prices update
- [ ] Visit `/api/prices` — JSON response with quotes array
- [ ] Disconnect network and rebuild — fallback message renders cleanly, no exceptions thrown
- [ ] Lighthouse Performance on `/` still ≥ 90
- [ ] No client-side fetch waterfalls — confirm in Network panel that prices are rendered server-side

Commit as `feat: live market ticker with ISR cache`. Await prompt 05.
