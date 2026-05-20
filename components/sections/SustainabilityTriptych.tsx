import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlowCard } from '@/components/ui/GlowCard'

const CARDS = [
  {
    emoji: '🌿',
    title: 'Environmental Responsibility',
    body: 'Rigorous spill prevention protocols, secondary containment on every tank, and on-going ecological assessment of terminal footprint. Blue Gate targets measurable emissions reductions across all throughput operations and partners with Rotterdam Port on sustainable energy initiatives.',
    pillars: ['Spill Prevention', 'Emissions Tracking', 'Ecological Surveys'],
  },
  {
    emoji: '🛡️',
    title: 'Health, Safety & Quality',
    body: 'HSE standards apply without exception — from the laboratory analyst to the vessel loading master. Routine third-party audits, competency assurance programmes, and a transparent near-miss reporting culture underpin our commitment to zero harm across every link of the chain.',
    pillars: ['Zero-Harm Target', 'Third-Party Audits', 'Competency Assurance'],
  },
  {
    emoji: '🤝',
    title: 'Community & Social Impact',
    body: 'As a long-standing operator in the Port of Rotterdam, Blue Gate invests in local employment, vocational training partnerships with the Albeda College network, and supply-chain engagement with regional businesses. We measure social value alongside financial performance.',
    pillars: ['Local Employment', 'Vocational Training', 'Port Partnerships'],
  },
] as const

export function SustainabilityTriptych() {
  return (
    <section className="bg-grad-2 py-20 md:py-28" aria-label="Sustainability">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Sustainability
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Storage Today. <em className="text-brand">Stewardship Tomorrow.</em>
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mb-14 text-base leading-relaxed">
            Responsible operations are not a differentiator — they are the baseline. Blue Gate
            holds itself accountable across three pillars.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <GlowCard className="flex flex-col h-full rounded-xl bg-bg p-7">
                <span className="text-4xl mb-5 leading-none" aria-hidden="true">
                  {card.emoji}
                </span>
                <h3 className="font-sans font-medium text-ink text-base mb-3">{card.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {card.body}
                </p>
                <ul className="flex flex-wrap gap-2" aria-label={`${card.title} pillars`}>
                  {card.pillars.map((pillar) => (
                    <li
                      key={pillar}
                      className="text-[10px] uppercase tracking-[0.07em] font-medium font-sans bg-brand/[0.1] text-brand/80 border border-brand/20 rounded px-2 py-1"
                    >
                      {pillar}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
