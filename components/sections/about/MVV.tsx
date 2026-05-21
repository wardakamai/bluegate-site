import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlowCard } from '@/components/ui/GlowCard'

interface ValueItem {
  name: string
  desc: string
}

interface MvvCard {
  label: string
  title: string
  body?: string
  values?: ValueItem[]
}

const CARDS: MvvCard[] = [
  {
    label: 'Mission',
    title: 'Safe, In-Spec Storage. Every Cycle.',
    body: 'To deliver safe, in-specification oil storage and bulk liquid terminal services that clients rely on without reservation — cycle after cycle, for as long as they need us.',
  },
  {
    label: 'Vision',
    title: "Europe's Most Trusted Bulk Liquid Partner.",
    body: 'To be the benchmark for bulk liquid storage integrity in Europe — known for precision, transparency, and an unconditional commitment to product quality at every throughput point.',
  },
  {
    label: 'Values',
    title: 'The Standards We Hold Ourselves To.',
    values: [
      {
        name: 'Safety',
        desc: 'No shipment or schedule outweighs the safety of our people, our terminal, or the environment around us.',
      },
      {
        name: 'Precision',
        desc: 'Specification compliance is not a target — it is the minimum acceptable outcome on every single batch.',
      },
      {
        name: 'Stewardship',
        desc: "We operate as custodians of our clients' product, our port community, and the natural environment.",
      },
      {
        name: 'Partnership',
        desc: 'Long-term relationships are built on candour, consistent execution, and delivering what we promise.',
      },
    ],
  },
]

export function MVV() {
  return (
    <section className="bg-grad-1 py-20 md:py-28" aria-label="Mission, Vision, Values">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Our Foundation
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-14"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Mission. Vision. <em className="text-brand">Values.</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <ScrollReveal key={card.label} delay={i * 0.1}>
              <GlowCard className="rounded-xl bg-bg p-7 flex flex-col h-full">
                <span className="font-sans text-[10px] uppercase tracking-[0.12em] font-medium text-brand/70 mb-4">
                  {card.label}
                </span>
                <h3 className="font-serif text-xl font-normal text-ink leading-snug mb-4">
                  {card.title}
                </h3>

                {card.body && (
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {card.body}
                  </p>
                )}

                {card.values && (
                  <ul className="space-y-4 mt-1">
                    {card.values.map((v) => (
                      <li key={v.name}>
                        <span className="font-sans text-xs font-semibold text-brand uppercase tracking-[0.07em]">
                          {v.name}
                        </span>
                        <p className="font-sans text-xs text-muted-foreground leading-relaxed mt-0.5">
                          {v.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
