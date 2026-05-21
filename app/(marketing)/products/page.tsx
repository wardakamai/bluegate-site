import type { Metadata } from 'next'
import { pageMeta } from '@/lib/meta'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlowCard } from '@/components/ui/GlowCard'
import { Button } from '@/components/ui/button'
import { FinalCta } from '@/components/sections/FinalCta'
import { products } from '@/config/products'

export const metadata: Metadata = pageMeta({
  title: 'Oil Storage Products — Jet A1, EN590, Fuel Oil D6, Crude Oil — Blue Gate',
  description:
    'Four specification-grade oil storage products: Jet A1, Diesel EN590, Virgin Fuel Oil D6, and Crude Oil — each stored in matched, dedicated tank farm infrastructure.',
  path: 'products',
})

const CATEGORY_STYLES: Record<string, string> = {
  AVIATION:   'text-sky-400 bg-sky-400/10 border-sky-400/25',
  DIESEL:     'text-emerald-400 bg-emerald-400/10 border-emerald-400/25',
  'FUEL OIL': 'text-amber-400 bg-amber-400/10 border-amber-400/25',
  CRUDE:      'text-brand bg-brand/10 border-brand/25',
}

export default function ProductsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-grad-2 py-20 md:py-28" aria-label="Products hero">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Our Products
          </p>
          <h1
            className="font-serif font-normal text-ink leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(44px, 6vw, 88px)' }}
          >
            Four Products.{' '}
            <em className="text-brand">Specification-Grade Storage.</em>
          </h1>
          <p className="font-sans text-lg text-ink/65 max-w-2xl leading-relaxed">
            Jet A1, EN590 Diesel, Virgin Fuel Oil D6, and Crude Oil — each held in dedicated tank
            infrastructure engineered to its physical and regulatory requirements, at Rotterdam and
            across our global network.
          </p>
        </div>
      </section>

      {/* Product card grid */}
      <section className="bg-grad-1 py-20 md:py-28" aria-label="Product range">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {products.map((product, i) => {
              const pillClass = CATEGORY_STYLES[product.category] ?? 'text-brand bg-brand/10 border-brand/25'
              // Show first 3 atAGlance items as spec micro-list
              const specMicro = product.atAGlance.slice(0, 3)

              return (
                <ScrollReveal key={product.slug} delay={i * 0.08}>
                  <GlowCard className="group rounded-xl bg-bg p-7 flex flex-col h-full">
                    {/* Category pill */}
                    <span
                      className={`inline-flex items-center text-[10px] uppercase tracking-[0.10em] font-medium border rounded px-2.5 py-1 w-fit mb-5 ${pillClass}`}
                    >
                      {product.category}
                    </span>

                    {/* Name */}
                    <h3 className="font-serif text-2xl font-normal text-ink mb-3">
                      {product.name}
                    </h3>

                    {/* Short positioning */}
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-5 flex-1">
                      {product.shortPositioning}
                    </p>

                    {/* 3-key spec micro-list */}
                    <ul className="space-y-2 mb-6 border-t border-border-soft pt-4">
                      {specMicro.map((spec) => (
                        <li key={spec.label} className="flex justify-between items-baseline gap-2">
                          <span className="font-sans text-[11px] uppercase tracking-[0.06em] text-muted-foreground shrink-0">
                            {spec.label}
                          </span>
                          <span className="font-mono text-xs text-ink text-right">
                            {spec.value}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-steel transition-colors group-hover:gap-2.5"
                    >
                      View Spec <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </GlowCard>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Explanatory paragraph */}
      <section className="bg-grad-2 py-16 md:py-20" aria-label="Storage infrastructure note">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-sans text-base text-ink/70 leading-relaxed mb-8">
                Each product is held in dedicated tank infrastructure matched to its physical
                and regulatory profile. Jet A1 in nitrogen-blanketed or epoxy-lined fixed-roof
                tanks. EN590 in floating-roof vessels that control vapour emissions. Virgin Fuel
                Oil D6 in thermally maintained heated tanks. Crude in large external-floating-roof
                tanks with vapour recovery units. Segregation is absolute — no shared tankage, no
                cross-contamination risk.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-brand/40 text-brand hover:bg-brand/[0.08] hover:border-brand/60 h-10 px-5 text-sm font-medium bg-transparent"
              >
                <Link href="/storage-facility">Explore the Rotterdam Tank Inventory →</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FinalCta
        heading={<>Request an <em className="text-brand">Allocation.</em></>}
        subline="Our trading desk responds within 24 hours. Bring your volume, product, and timeline."
        primaryCta={{ label: 'Request Allocation →', href: '/contact?intent=quote' }}
        secondaryCta={{ label: 'View Storage Facility', href: '/storage-facility' }}
      />
    </main>
  )
}
