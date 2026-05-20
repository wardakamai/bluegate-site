import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/button'
import type { Product } from '@/config/products'

interface HandlingSafetyProps {
  product: Product
}

export function HandlingSafety({ product }: HandlingSafetyProps) {
  const { handlingSafety } = product

  const BLOCKS = [
    { label: 'UN Number',      value: handlingSafety.unNumber },
    { label: 'Hazard Class',   value: handlingSafety.class },
    { label: 'Packing Group',  value: handlingSafety.packingGroup },
  ]

  return (
    <section className="bg-grad-2 py-20 md:py-24" aria-label="Handling and safety">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Handling &amp; Safety
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-10"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Safe <em className="text-brand">Custody.</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="rounded-xl border border-border-soft bg-bg p-8">
            {/* Stat blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 pb-8 border-b border-border-soft">
              {BLOCKS.map((block) => (
                <div key={block.label}>
                  <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-muted-foreground mb-2">
                    {block.label}
                  </p>
                  <p className="font-mono text-xl font-medium text-ink">{block.value}</p>
                </div>
              ))}
            </div>

            {/* SDS download */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-sans text-sm font-medium text-ink mb-1">
                  Safety Data Sheet (SDS)
                </p>
                <p className="font-sans text-xs text-muted-foreground">
                  Full SDS per GHS / REACH regulation.{' '}
                  {/* TODO: produce real SDS PDFs */}
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                className="border-brand/40 text-brand hover:bg-brand/[0.08] hover:border-brand/60 h-10 px-5 text-sm font-medium bg-transparent shrink-0"
              >
                <a href={handlingSafety.sdsUrl} download>
                  Download Safety Data Sheet →
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
