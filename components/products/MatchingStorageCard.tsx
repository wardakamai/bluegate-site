import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import type { Product } from '@/config/products';

interface MatchingStorageCardProps {
  product: Product;
}

export function MatchingStorageCard({ product }: MatchingStorageCardProps) {
  return (
    <section className="bg-grad-2 py-20 md:py-24" aria-label="Storage specification">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Storage Specification
          </p>
          <h2
            className="text-ink mb-10 font-serif leading-tight font-normal"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Typical Storage for <em className="text-brand">{product.name}.</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="border-brand/[0.16] bg-bg overflow-hidden rounded-xl border">
            <div className="p-8">
              <h3 className="text-ink mb-1 font-serif text-xl font-normal">
                {product.matchingStorage.tankType}
              </h3>
              <p className="text-brand mb-6 font-mono text-sm">
                {product.matchingStorage.capacityRange} per tank (typical industry range)
              </p>

              <ul className="space-y-3">
                {product.matchingStorage.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <CheckCircle2
                      size={15}
                      className="text-ok mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-ink/70 font-sans text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="border-brand/[0.12] flex flex-wrap items-center justify-between gap-4 border-t px-8 py-5">
              <p className="text-muted-foreground font-sans text-sm">
                Discuss storage access and commercial terms for {product.name}.
              </p>
              <Link
                href="/services/oil-storage"
                className="text-brand hover:text-brand-steel group inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
              >
                Our Storage Services{' '}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
