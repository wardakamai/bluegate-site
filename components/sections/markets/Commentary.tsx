// TODO: integrate Sanity or Payload CMS for weekly commentary
// Replace ARTICLES with a CMS fetch (e.g. getCommentary()) in a future iteration.
// The card structure and layout below should remain unchanged — only the data source changes.

import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlowCard } from '@/components/ui/GlowCard'

interface Article {
  date: string
  title: string
  excerpt: string
  href: string
}

const ARTICLES: Article[] = [
  {
    date: '2025-05-14',
    title: 'ARA Gasoil Stocks Tighten as Inventory Draw Persists',
    excerpt:
      'Independent storage levels in the ARA region fell for a fifth consecutive week, driven by sustained heating demand across northern Germany and the Netherlands. Terminal utilisation rates have pushed above seasonal norms, compressing available spot capacity.',
    href: '#',
  },
  {
    date: '2025-05-07',
    title: 'Brent–WTI Spread Narrows on US Export Surge and North Sea Delays',
    excerpt:
      'A combination of record US crude export loadings and delayed Forties pipeline maintenance compressed the Brent–WTI spread to its tightest level in four months. Atlantic basin arbitrage flows responded quickly, redirecting West African barrels toward Asian buyers.',
    href: '#',
  },
  {
    date: '2025-04-30',
    title: 'Jet A1 Premium Holds Firm Despite Seasonal Capacity Additions',
    excerpt:
      'European Jet A1 differentials to Brent remained elevated through Q1 as transatlantic passenger demand outpaced refinery yield improvement. Rotterdam jet cargo premiums to Platts barges averaged USD 5.20/bbl through April — materially above the five-year seasonal mean.',
    href: '#',
  },
]

function fmtDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export function Commentary() {
  return (
    <section className="bg-grad-1 py-20 md:py-28" aria-label="Market commentary">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Market Commentary
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-14"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Market Desk. <em className="text-brand">Weekly Views.</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((article, i) => (
            <ScrollReveal key={article.date} delay={i * 0.1} className="h-full">
              <GlowCard className="rounded-xl bg-bg p-7 flex flex-col h-full">
                <time
                  dateTime={article.date}
                  className="font-mono text-[11px] text-muted-foreground mb-4 block"
                >
                  {fmtDate(article.date)}
                </time>
                <h3 className="font-serif text-lg font-normal text-ink leading-snug mb-3">
                  {article.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                  {article.excerpt}
                </p>
                <Link
                  href={article.href}
                  className="font-sans text-sm font-medium text-ink hover:text-brand transition-colors mt-auto"
                  aria-label={`Read more: ${article.title}`}
                >
                  Read more →
                </Link>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
