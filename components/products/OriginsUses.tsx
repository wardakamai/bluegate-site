import { Users } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import type { Product } from '@/config/products'

interface OriginsUsesProps {
  product: Product
}

export function OriginsUses({ product }: OriginsUsesProps) {
  return (
    <section className="bg-grad-1 py-20 md:py-24" aria-label="Origins and typical uses">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Origins &amp; Typical Uses
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-12"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Supply Chain <em className="text-brand">Context.</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <p className="font-sans text-base text-ink/70 leading-relaxed">
              {product.origins}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="rounded-xl border border-border-soft bg-bg p-6">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-brand/[0.10] border border-brand/20 flex items-center justify-center shrink-0">
                  <Users size={16} className="text-brand" aria-hidden="true" />
                </div>
                <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-muted-foreground">
                  Typical End-Users
                </p>
              </div>

              <ul className="space-y-4">
                {product.endUsers.map((user, i) => (
                  <li key={user} className="flex items-start gap-3">
                    <span className="font-mono text-[10px] font-medium text-brand/60 mt-0.5 shrink-0 w-4">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-sans text-sm text-ink/80 leading-relaxed">{user}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
