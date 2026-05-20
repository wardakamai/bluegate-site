import Link from 'next/link'
import { TrendingUp, TrendingDown, AlertCircle } from 'lucide-react'
import { fetchQuotes, brentWtiSpread, type Quote } from '@/lib/prices'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlowCard } from '@/components/ui/GlowCard'
import { ctaPrimary } from '@/config/site'

export const revalidate = 900

function fmtPrice(price: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)
}

function fmtDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

function PriceCard({ quote }: { quote: Quote }) {
  const up = quote.changePercent >= 0
  const sign = up ? '+' : ''
  const pctLabel = `${sign}${quote.changePercent.toFixed(2)}%`

  return (
    <GlowCard className="rounded-xl bg-bg flex flex-col gap-3 p-5">
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-0.5">
          <span className="font-sans text-sm font-medium text-ink">{quote.name}</span>
          <span className="font-mono text-[10px] text-muted-foreground leading-none">
            {quote.sourceCode}
          </span>
        </div>
        <span
          className="shrink-0 inline-flex items-center gap-1 font-mono text-[11px] font-medium px-2 py-1 rounded"
          style={{
            background: up ? 'rgba(34,197,94,0.15)' : 'rgba(197,3,55,0.20)',
            color: up ? 'var(--ok-green)' : 'var(--alert-red)',
          }}
          aria-label={`${pctLabel} change`}
        >
          {up ? <TrendingUp size={11} aria-hidden="true" /> : <TrendingDown size={11} aria-hidden="true" />}
          {pctLabel}
        </span>
      </div>

      <p
        className="font-mono font-medium text-ink tabular-nums leading-none"
        style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
      >
        {fmtPrice(quote.price)}
      </p>

      <p
        className="font-mono text-xs tabular-nums"
        style={{ color: up ? 'var(--ok-green)' : 'var(--alert-red)' }}
      >
        {sign}{fmtPrice(Math.abs(quote.change))} {quote.unit}
      </p>
    </GlowCard>
  )
}

function EmptyState() {
  return (
    <div className="col-span-full rounded-xl bg-bg p-8 text-center" style={{ boxShadow: '0 0 0 1px rgba(197,3,55,0.22)' }}>
      <AlertCircle size={28} className="mx-auto mb-3 text-muted-foreground" aria-hidden="true" />
      <p className="font-sans text-sm text-muted-foreground max-w-sm mx-auto">
        Market data temporarily unavailable — please contact our trading desk for indicative pricing.
      </p>
      <Link href={ctaPrimary.href} className="inline-flex mt-5 text-sm font-medium text-accent hover:text-ink transition-colors">
        Contact Operations →
      </Link>
    </div>
  )
}

export async function MarketTicker() {
  const quotes = await fetchQuotes()
  const spread = brentWtiSpread(quotes)
  const asOf = quotes[0]?.asOf ?? new Date().toISOString()
  const hasData = quotes.length > 0 && quotes.some((q) => q.price > 0)

  return (
    <section className="bg-grad-2 py-20 md:py-28" aria-label="Market reference prices">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Market Reference Prices
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-3"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Indicative Pricing. <em className="text-brand">Transparent Benchmarks.</em>
          </h2>
          <p className="font-sans text-xs text-muted-foreground mb-12 font-mono">
            Updated {fmtDate(asOf)}&nbsp;·&nbsp;Indicative only&nbsp;·&nbsp;Source: Yahoo Finance
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {hasData ? (
            quotes.map((quote, i) => (
              <ScrollReveal key={quote.symbol} delay={i * 0.08}>
                <PriceCard quote={quote} />
              </ScrollReveal>
            ))
          ) : (
            <EmptyState />
          )}
        </div>

        {spread !== null && (
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-3 border-t border-brand/[0.12] pt-5 mb-8">
              <span className="font-sans text-xs uppercase tracking-[0.08em] text-muted-foreground font-medium">
                Brent–WTI Spread
              </span>
              <span className="font-mono text-sm font-medium text-ink">
                {spread >= 0 ? '+' : ''}{fmtPrice(spread)}
              </span>
              <span className="font-sans text-xs text-muted-foreground">
                Brent {spread >= 0 ? 'premium' : 'discount'} over WTI per barrel
              </span>
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal>
          <p className="font-sans text-xs text-muted-foreground max-w-3xl leading-relaxed mb-6 italic">
            Indicative only. Not a firm offer. Storage tariffs are quoted on a per-m³/month basis
            with throughput rebates, linked to Platts Rotterdam Barges, Argus NWE, or agreed
            differentials. For binding pricing contact our trading desk.
          </p>
          <Link href={ctaPrimary.href} className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-ink transition-colors">
            Get a Storage Quote →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
