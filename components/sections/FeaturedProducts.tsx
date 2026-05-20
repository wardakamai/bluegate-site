import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlowCard } from '@/components/ui/GlowCard'
import { products } from '@/config/products'
import { cn } from '@/lib/utils'

// TODO: confirm with client — replace with live availability feed
const AVAILABILITY: Record<string, number> = {
  'jet-a1': 78,
  'diesel-en590': 62,
  'virgin-fuel-oil-d6': 45,
  'crude-oil': 91,
}

const CATEGORY_COLOURS: Record<string, string> = {
  AVIATION: 'bg-brand/[0.12] text-brand border-brand/25',
  DIESEL:   'bg-emerald-900/30 text-emerald-300 border-emerald-700/30',
  'FUEL OIL': 'bg-amber-900/30 text-amber-300 border-amber-700/30',
  CRUDE:    'bg-slate-800/30 text-slate-300 border-slate-600/30',
}

function AvailabilityBar({ pct, label }: { pct: number; label: string }) {
  return (
    <div className="mt-auto">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-sans text-[10px] uppercase tracking-[0.08em] text-muted-foreground font-medium">
          Est. Availability
        </span>
        <span className="font-mono text-xs text-ink font-medium">{pct}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden" aria-hidden="true">
        <div
          className="h-full rounded-full bg-brand transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="font-sans text-[9px] text-muted-foreground mt-1">{label}</p>
    </div>
  )
}

export function FeaturedProducts() {
  return (
    <section className="bg-page py-20 md:py-28" aria-label="Our products">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Our Products
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Four Core Products. <em className="text-brand">Specification-Grade Storage.</em>
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mb-14 text-base leading-relaxed">
            Every grade handled to its international standard — ASTM, EN 590, ISO 8217. Dedicated
            tank configurations for each product class.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-12">
          {products.map((product, i) => {
            const availability = AVAILABILITY[product.slug] ?? 70
            const catColour = CATEGORY_COLOURS[product.category] ?? CATEGORY_COLOURS.CRUDE
            const specSummary = product.atAGlance
              .slice(0, 2)
              .map((g) => `${g.label} ${g.value}`)
              .join(' · ')

            return (
              <ScrollReveal key={product.slug} delay={i * 0.08}>
                <GlowCard className="group rounded-xl bg-bg p-6 flex flex-col h-full">
                  <span
                    className={cn(
                      'inline-block text-[10px] uppercase tracking-[0.08em] font-medium border rounded px-2 py-0.5 w-fit mb-4',
                      catColour,
                    )}
                  >
                    {product.category}
                  </span>

                  <h3 className="font-serif text-xl font-normal text-ink leading-tight mb-2 group-hover:text-brand transition-colors">
                    {product.name}
                  </h3>

                  <p className="font-mono text-[11px] text-muted-foreground leading-relaxed mb-4 flex-1">
                    {specSummary}
                  </p>

                  <AvailabilityBar
                    pct={availability}
                    label="Indicative allocation — contact ops to confirm"
                  />

                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-steel transition-colors mt-5 group-hover:gap-2.5"
                  >
                    Spec Sheet <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                </GlowCard>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-steel transition-colors"
          >
            View All Products →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
