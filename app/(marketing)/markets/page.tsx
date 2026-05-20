import type { Metadata } from 'next'
import { MarketTicker } from '@/components/sections/MarketTicker'

export const revalidate = 900

export const metadata: Metadata = {
  title: 'Market Reference Prices',
  description:
    'Indicative petroleum market prices for Brent Crude, WTI, Gasoil, and Natural Gas. Updated every 15 minutes.',
}

export default function MarketsPage() {
  return (
    <>
      <div className="bg-page pt-16 pb-0">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-muted-foreground mb-3">
            Markets
          </p>
          <h1
            className="font-serif font-normal text-ink leading-tight"
            style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}
          >
            Reference Prices.
          </h1>
        </div>
      </div>
      <MarketTicker />
    </>
  )
}
