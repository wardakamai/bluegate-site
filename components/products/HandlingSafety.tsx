import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';
import type { Product } from '@/config/products';

interface HandlingSafetyProps {
  product: Product;
}

export function HandlingSafety({ product }: HandlingSafetyProps) {
  const { handlingSafety } = product;

  const BLOCKS = [
    { label: 'UN Number', value: handlingSafety.unNumber },
    { label: 'Hazard Class', value: handlingSafety.class },
    { label: 'Packing Group', value: handlingSafety.packingGroup },
  ];

  return (
    <section className="bg-grad-2 py-20 md:py-24" aria-label="Handling and safety">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Handling &amp; Safety
          </p>
          <h2
            className="text-ink mb-10 font-serif leading-tight font-normal"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Safe <em className="text-brand">Custody.</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="border-border-soft bg-bg rounded-xl border p-8">
            {/* Stat blocks */}
            <div className="border-border-soft mb-8 grid grid-cols-1 gap-6 border-b pb-8 sm:grid-cols-3">
              {BLOCKS.map((block) => (
                <div key={block.label}>
                  <p className="text-muted-foreground mb-2 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
                    {block.label}
                  </p>
                  <p className="text-ink font-mono text-xl font-medium">{block.value}</p>
                </div>
              ))}
            </div>

            {/* SDS download */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-ink mb-1 font-sans text-sm font-medium">
                  Safety Data Sheet (SDS)
                </p>
                <p className="text-muted-foreground font-sans text-xs">
                  Full SDS per GHS / REACH regulation. {/* TODO: produce real SDS PDFs */}
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                className="border-brand/40 text-brand hover:bg-brand/[0.08] hover:border-brand/60 h-10 shrink-0 bg-transparent px-5 text-sm font-medium"
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
  );
}
