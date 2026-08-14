import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlowCard } from '@/components/ui/GlowCard';

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
] as const;

export function SustainabilityTriptych() {
  return (
    <section className="bg-grad-2 py-20 md:py-28" aria-label="Sustainability">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Sustainability
          </p>
          <h2
            className="text-ink mb-4 font-serif leading-tight font-normal"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Storage Today. <em className="text-brand">Stewardship Tomorrow.</em>
          </h2>
          <p className="text-muted-foreground mb-14 max-w-2xl font-sans text-base leading-relaxed">
            Responsible operations are not a differentiator — they are the baseline. Blue Gate holds
            itself accountable across three pillars.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <GlowCard className="bg-bg flex h-full flex-col rounded-xl p-7">
                <span className="mb-5 text-4xl leading-none" aria-hidden="true">
                  {card.emoji}
                </span>
                <h3 className="text-ink mb-3 font-sans text-base font-medium">{card.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1 font-sans text-sm leading-relaxed">
                  {card.body}
                </p>
                <ul className="flex flex-wrap gap-2" aria-label={`${card.title} pillars`}>
                  {card.pillars.map((pillar) => (
                    <li
                      key={pillar}
                      className="bg-brand/[0.1] text-brand/80 border-brand/20 rounded border px-2 py-1 font-sans text-[10px] font-medium tracking-[0.07em] uppercase"
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
  );
}
