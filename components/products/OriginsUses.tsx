import { Users } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import type { Product } from '@/config/products';

interface OriginsUsesProps {
  product: Product;
}

export function OriginsUses({ product }: OriginsUsesProps) {
  return (
    <section className="bg-grad-1 py-20 md:py-24" aria-label="Origins and typical uses">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Origins &amp; Typical Uses
          </p>
          <h2
            className="text-ink mb-12 font-serif leading-tight font-normal"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Supply Chain <em className="text-brand">Context.</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <p className="text-ink/70 font-sans text-base leading-relaxed">{product.origins}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="border-border-soft bg-bg rounded-xl border p-6">
              <div className="mb-5 flex items-center gap-2.5">
                <div className="bg-brand/[0.10] border-brand/20 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border">
                  <Users size={16} className="text-brand" aria-hidden="true" />
                </div>
                <p className="text-muted-foreground font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
                  Typical End-Users
                </p>
              </div>

              <ul className="space-y-4">
                {product.endUsers.map((user, i) => (
                  <li key={user} className="flex items-start gap-3">
                    <span className="text-brand/60 mt-0.5 w-4 shrink-0 font-mono text-[10px] font-medium">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-ink/80 font-sans text-sm leading-relaxed">{user}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
