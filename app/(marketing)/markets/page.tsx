import type { Metadata } from 'next'
import { pageMeta } from '@/lib/meta'
import { MarketTicker } from '@/components/sections/MarketTicker'
import { Territories } from '@/components/sections/markets/Territories'
import { SpreadsAndCrack } from '@/components/sections/markets/SpreadsAndCrack'
import { Tariffs } from '@/components/sections/markets/Tariffs'
import { Commentary } from '@/components/sections/markets/Commentary'
import { FinalCta } from '@/components/sections/FinalCta'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export const revalidate = 900

export const metadata: Metadata = pageMeta({
  title: 'Markets — Blue Gate Shipping & Trade',
  description:
    'Live indicative pricing for Brent, WTI, Gasoil and Natural Gas. Storage tariffs linked to Platts and Argus benchmarks. Updated every 15 minutes.',
  path: 'markets',
})

export default function MarketsPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-page pt-24 pb-16 md:pt-32 md:pb-20" aria-label="Markets hero">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
              Markets
            </p>
            <h1
              className="font-serif font-normal text-ink leading-tight mb-6"
              style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}
            >
              Where Blue Gate{' '}
              <em className="text-brand">Operates.</em>
            </h1>
            <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-2xl">
              Blue Gate serves clients across Northwest European refined products, the Atlantic crude
              basin, Mediterranean re-export, the ARA blending hub, and Asian re-supply — backed by
              live indicative pricing and tariffs benchmarked to Platts and Argus references.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Market territories */}
      <Territories />

      {/* 3. Market ticker + spreads & crack */}
      <MarketTicker />
      <SpreadsAndCrack />

      {/* 4. Tariff structure */}
      <Tariffs />

      {/* 5. Market commentary */}
      <Commentary />

      {/* 6. Final CTA */}
      <FinalCta
        heading={
          <>
            Need a Market{' '}
            <em className="text-brand">Briefing?</em>
          </>
        }
        subline="Speak with our trading desk for indicative pricing, spread analysis, and capacity availability across our terminal network."
        primaryCta={{ label: 'Request Market Briefing →', href: '/contact?intent=briefing' }}
        secondaryCta={{ label: 'View Terminal Network →', href: '/terminal' }}
      />
    </>
  )
}
