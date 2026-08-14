import Link from 'next/link';
import { TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import { fetchQuotes, brentWtiSpread, type Quote } from '@/lib/prices';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlowCard } from '@/components/ui/GlowCard';
import { ctaPrimary } from '@/config/site';

export const revalidate = 900;

function fmtPrice(price: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}

function fmtDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function PriceCard({ quote }: { quote: Quote }) {
  const up = quote.changePercent >= 0;
  const sign = up ? '+' : '';
  const pctLabel = `${sign}${quote.changePercent.toFixed(2)}%`;

  return (
    <GlowCard className="bg-bg flex flex-col gap-3 rounded-xl p-5">
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-0.5">
          <span className="text-ink font-sans text-sm font-medium">{quote.name}</span>
          <span className="text-muted-foreground font-mono text-[10px] leading-none">
            {quote.sourceCode}
          </span>
        </div>
        <span
          className="inline-flex shrink-0 items-center gap-1 rounded px-2 py-1 font-mono text-[11px] font-medium"
          style={{
            background: up ? 'rgba(34,197,94,0.15)' : 'rgba(208,0,24,0.20)',
            color: up ? 'var(--ok-green)' : 'var(--alert-red)',
          }}
          aria-label={`${pctLabel} change`}
        >
          {up ? (
            <TrendingUp size={11} aria-hidden="true" />
          ) : (
            <TrendingDown size={11} aria-hidden="true" />
          )}
          {pctLabel}
        </span>
      </div>

      <p
        className="text-ink font-mono leading-none font-medium tabular-nums"
        style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
      >
        {fmtPrice(quote.price)}
      </p>

      <p
        className="font-mono text-xs tabular-nums"
        style={{ color: up ? 'var(--ok-green)' : 'var(--alert-red)' }}
      >
        {sign}
        {fmtPrice(Math.abs(quote.change))} {quote.unit}
      </p>
    </GlowCard>
  );
}

function EmptyState() {
  return (
    <div
      className="bg-bg col-span-full rounded-xl p-8 text-center"
      style={{ boxShadow: '0 0 0 1px rgba(208,0,24,0.22)' }}
    >
      <AlertCircle size={28} className="text-muted-foreground mx-auto mb-3" aria-hidden="true" />
      <p className="text-muted-foreground mx-auto max-w-sm font-sans text-sm">
        Market data temporarily unavailable — please contact our trading desk for indicative
        pricing.
      </p>
      <Link
        href={ctaPrimary.href}
        className="text-ink hover:text-brand mt-5 inline-flex text-sm font-medium transition-colors"
      >
        Contact Operations →
      </Link>
    </div>
  );
}

export async function MarketTicker() {
  const quotes = await fetchQuotes();
  const spread = brentWtiSpread(quotes);
  const asOf = quotes[0]?.asOf ?? new Date().toISOString();
  const hasData = quotes.length > 0 && quotes.some((q) => q.price > 0);

  return (
    <section className="bg-grad-2 py-20 md:py-28" aria-label="Market reference prices">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Market Reference Prices
          </p>
          <h2
            className="text-ink mb-3 font-serif leading-tight font-normal"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Indicative Pricing. <em className="text-brand">Transparent Benchmarks.</em>
          </h2>
          <p className="text-muted-foreground mb-12 font-mono font-sans text-xs">
            Updated {fmtDate(asOf)}&nbsp;·&nbsp;Indicative only&nbsp;·&nbsp;Source: Yahoo Finance
          </p>
        </ScrollReveal>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
            <div className="border-brand/[0.12] mb-8 flex flex-wrap items-center gap-3 border-t pt-5">
              <span className="text-muted-foreground font-sans text-xs font-medium tracking-[0.08em] uppercase">
                Brent–WTI Spread
              </span>
              <span className="text-ink font-mono text-sm font-medium">
                {spread >= 0 ? '+' : ''}
                {fmtPrice(spread)}
              </span>
              <span className="text-muted-foreground font-sans text-xs">
                Brent {spread >= 0 ? 'premium' : 'discount'} over WTI per barrel
              </span>
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal>
          <p className="text-muted-foreground mb-6 max-w-3xl font-sans text-xs leading-relaxed italic">
            Indicative only. Not a firm offer. Storage tariffs are quoted on a per-m³/month basis
            with throughput rebates, linked to Platts Rotterdam Barges, Argus NWE, or agreed
            differentials. For binding pricing contact our trading desk.
          </p>
          <Link
            href={ctaPrimary.href}
            className="text-ink hover:text-brand inline-flex items-center gap-2 text-sm font-medium transition-colors"
          >
            Get a Storage Quote →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
