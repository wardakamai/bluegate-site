import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlowCard } from '@/components/ui/GlowCard';
import { products } from '@/config/products';
import { cn } from '@/lib/utils';

// TODO: confirm with client — replace with live availability feed
const AVAILABILITY: Record<string, number> = {
  'jet-a1': 78,
  'diesel-en590': 62,
  'virgin-fuel-oil-d6': 45,
  'crude-oil': 91,
};

const CATEGORY_COLOURS: Record<string, string> = {
  AVIATION: 'bg-brand/[0.12] text-brand border-brand/25',
  DIESEL: 'bg-emerald-900/30 text-emerald-300 border-emerald-700/30',
  'FUEL OIL': 'bg-amber-900/30 text-amber-300 border-amber-700/30',
  CRUDE: 'bg-slate-800/30 text-slate-300 border-slate-600/30',
};

function AvailabilityBar({ pct, label }: { pct: number; label: string }) {
  return (
    <div className="mt-auto">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-muted-foreground font-sans text-[10px] font-medium tracking-[0.08em] uppercase">
          Est. Availability
        </span>
        <span className="text-ink font-mono text-xs font-medium">{pct}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]" aria-hidden="true">
        <div
          className="bg-brand h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-muted-foreground mt-1 font-sans text-[9px]">{label}</p>
    </div>
  );
}

export function FeaturedProducts() {
  return (
    <section className="bg-page py-20 md:py-28" aria-label="Our products">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Our Products
          </p>
          <h2
            className="text-ink mb-4 font-serif leading-tight font-normal"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Four Core Products. <em className="text-brand">Tank Farm-Grade Storage.</em>
          </h2>
          <p className="text-muted-foreground mb-14 max-w-2xl font-sans text-base leading-relaxed">
            Every grade handled to its international standard — ASTM, EN 590, ISO 8217. Dedicated
            tank configurations for each product class.
          </p>
        </ScrollReveal>

        <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product, i) => {
            const availability = AVAILABILITY[product.slug] ?? 70;
            const catColour = CATEGORY_COLOURS[product.category] ?? CATEGORY_COLOURS.CRUDE;
            const specSummary = product.atAGlance
              .slice(0, 2)
              .map((g) => `${g.label} ${g.value}`)
              .join(' · ');

            return (
              <ScrollReveal key={product.slug} delay={i * 0.08}>
                <GlowCard className="group bg-bg flex h-full flex-col rounded-xl p-6">
                  <span
                    className={cn(
                      'mb-4 inline-block w-fit rounded border px-2 py-0.5 text-[10px] font-medium tracking-[0.08em] uppercase',
                      catColour,
                    )}
                  >
                    {product.category}
                  </span>

                  <h3 className="text-ink group-hover:text-brand mb-2 font-serif text-xl leading-tight font-normal transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-muted-foreground mb-4 flex-1 font-mono text-[11px] leading-relaxed">
                    {specSummary}
                  </p>

                  <AvailabilityBar
                    pct={availability}
                    label="Indicative allocation — contact ops to confirm"
                  />

                  <Link
                    href={`/products/${product.slug}`}
                    className="text-brand hover:text-brand-steel mt-5 inline-flex items-center gap-1.5 text-sm font-medium transition-colors group-hover:gap-2.5"
                  >
                    Spec Sheet <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                </GlowCard>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <Link
            href="/products"
            className="text-brand hover:text-brand-steel inline-flex items-center gap-2 text-sm font-medium transition-colors"
          >
            View All Products →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
