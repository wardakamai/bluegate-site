import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlowCard } from '@/components/ui/GlowCard';
import { Button } from '@/components/ui/button';
import { FinalCta } from '@/components/sections/FinalCta';
import { products } from '@/config/products';

export const metadata: Metadata = pageMeta({
  title: 'Petroleum Products | Blue Gate Tank Farm',
  description:
    'Blue Gate Tank Farm supports clients working with Jet A1, EN590 Diesel, Virgin Fuel Oil D6 and Crude Oil. Product specifications and enquiries.',
  path: 'products',
});

const CATEGORY_STYLES: Record<string, string> = {
  AVIATION: 'text-sky-400 bg-sky-400/10 border-sky-400/25',
  DIESEL: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/25',
  'FUEL OIL': 'text-amber-400 bg-amber-400/10 border-amber-400/25',
  CRUDE: 'text-brand bg-brand/10 border-brand/25',
};

export default function ProductsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-grad-2 py-20 md:py-28" aria-label="Products hero">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Our Products
          </p>
          <h1
            className="text-ink mb-6 font-serif leading-none font-normal tracking-tight"
            style={{ fontSize: 'clamp(44px, 6vw, 88px)' }}
          >
            Four Products. <em className="text-brand">Specification-Grade Storage.</em>
          </h1>
          <p className="text-ink/65 max-w-2xl font-sans text-lg leading-relaxed">
            Jet A1, EN590 Diesel, Virgin Fuel Oil D6, and Crude Oil — each held in dedicated tank
            infrastructure engineered to its physical and regulatory requirements, at Rotterdam and
            across our global network.
          </p>
        </div>
      </section>

      {/* Product card grid */}
      <section className="bg-grad-1 py-20 md:py-28" aria-label="Product range">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product, i) => {
              const pillClass =
                CATEGORY_STYLES[product.category] ?? 'text-brand bg-brand/10 border-brand/25';
              // Show first 3 atAGlance items as spec micro-list
              const specMicro = product.atAGlance.slice(0, 3);

              return (
                <ScrollReveal key={product.slug} delay={i * 0.08}>
                  <GlowCard className="group bg-bg flex h-full flex-col rounded-xl p-7">
                    {/* Category pill */}
                    <span
                      className={`mb-5 inline-flex w-fit items-center rounded border px-2.5 py-1 text-[10px] font-medium tracking-[0.10em] uppercase ${pillClass}`}
                    >
                      {product.category}
                    </span>

                    {/* Name */}
                    <h3 className="text-ink mb-3 font-serif text-2xl font-normal">
                      {product.name}
                    </h3>

                    {/* Short positioning */}
                    <p className="text-muted-foreground mb-5 flex-1 font-sans text-xs leading-relaxed">
                      {product.shortPositioning}
                    </p>

                    {/* 3-key spec micro-list */}
                    <ul className="border-border-soft mb-6 space-y-2 border-t pt-4">
                      {specMicro.map((spec) => (
                        <li key={spec.label} className="flex items-baseline justify-between gap-2">
                          <span className="text-muted-foreground shrink-0 font-sans text-[11px] tracking-[0.06em] uppercase">
                            {spec.label}
                          </span>
                          <span className="text-ink text-right font-mono text-xs">
                            {spec.value}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-brand hover:text-brand-steel inline-flex items-center gap-1.5 text-sm font-medium transition-colors group-hover:gap-2.5"
                    >
                      View Spec <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </GlowCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Explanatory paragraph */}
      <section className="bg-grad-2 py-16 md:py-20" aria-label="Storage infrastructure note">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-ink/70 mb-8 font-sans text-base leading-relaxed">
                Each product has its own physical and regulatory storage profile. Jet A1 typically
                requires nitrogen-blanketed or epoxy-lined fixed-roof tanks. EN590 is usually held
                in floating-roof vessels that control vapour emissions. Virgin Fuel Oil D6 needs
                thermally maintained heated tanks. Crude is typically stored in large
                external-floating-roof tanks with vapour recovery. Blue Gate Tank Farm coordinates
                storage access matched to the applicable product requirements.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-brand/40 text-brand hover:bg-brand/[0.08] hover:border-brand/60 h-10 bg-transparent px-5 text-sm font-medium"
              >
                <Link href="/services/oil-storage">Our Storage Services →</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FinalCta
        heading={
          <>
            Make an <em className="text-brand">Enquiry.</em>
          </>
        }
        subline="Our team responds within 24 hours. Tell us your volume, product, and timeline."
        primaryCta={{ label: 'Make an Enquiry →', href: '/contact?intent=quote' }}
        secondaryCta={{ label: 'Our Storage Services', href: '/services/oil-storage' }}
      />
    </main>
  );
}
