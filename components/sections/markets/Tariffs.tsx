import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlowCard } from '@/components/ui/GlowCard'

interface TariffBlock {
  number: string
  title: string
  body: string
}

const BLOCKS: TariffBlock[] = [
  {
    number: '01',
    title: 'Base Storage Tariff',
    body: 'All storage contracts begin with a per-m³/month base rate, negotiated at inception and fixed for the contract term. The rate reflects tank type (fixed-roof, floating-roof, heated), product category, and minimum throughput commitment.',
  },
  {
    number: '02',
    title: 'Throughput Rebate',
    body: 'Clients who move higher volumes through the terminal within a defined period receive a volume-linked discount applied against the base tariff. Rebate thresholds are set at contract signature and reviewed at each renewal.',
  },
  {
    number: '03',
    title: 'Benchmark Linkage',
    body: 'Where agreed, pricing may be linked to third-party industry references — typically Platts Rotterdam Barges, Argus NWE, or a mutually agreed product differential — so tariff adjustments track transparent, published benchmarks rather than internal discretion.',
  },
]

export function Tariffs() {
  return (
    <section className="bg-grad-2 py-20 md:py-28" aria-label="Tariff structure">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            How We Price
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-14"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Tariff Structure. <em className="text-brand">Transparent and Benchmarked.</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {BLOCKS.map((block, i) => (
            <ScrollReveal key={block.number} delay={i * 0.1} className="h-full">
              <GlowCard className="rounded-xl bg-bg p-7 flex flex-col h-full">
                <span className="font-mono text-xs text-brand/50 mb-5 tabular-nums">
                  {block.number}
                </span>
                <h3 className="font-serif text-xl font-normal text-ink leading-snug mb-3">
                  {block.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {block.body}
                </p>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <Link
            href="/contact?intent=tariff"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-brand transition-colors"
          >
            Request Tariff Schedule →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
