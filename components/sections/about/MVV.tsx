import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlowCard } from '@/components/ui/GlowCard';

interface ValueItem {
  name: string;
  desc: string;
}

interface MvvCard {
  label: string;
  title: string;
  body?: string;
  values?: ValueItem[];
}

const CARDS: MvvCard[] = [
  {
    label: 'Mission',
    title: 'Precise, Accountable Logistics. Every Engagement.',
    body: 'To deliver petroleum logistics and commercial support services that clients rely on without reservation — clear documentation, clear communication, every engagement.',
  },
  {
    label: 'Vision',
    title: 'A Trusted Petroleum Logistics Partner.',
    body: 'To become a benchmark for reliability in petroleum logistics coordination — known for precision, transparency, and an unconditional commitment to doing what was agreed.',
  },
  {
    label: 'Values',
    title: 'The Standards We Hold Ourselves To.',
    values: [
      {
        name: 'Safety',
        desc: 'No shipment or schedule outweighs the safety of our people, our partners, or the environment around us.',
      },
      {
        name: 'Precision',
        desc: 'Specification compliance is not a target — it is the minimum acceptable outcome on every single batch.',
      },
      {
        name: 'Stewardship',
        desc: 'We take our responsibilities to our clients, the Rotterdam port community, and the natural environment seriously in everything we coordinate.',
      },
      {
        name: 'Partnership',
        desc: 'Long-term relationships are built on candour, consistent execution, and delivering what we promise.',
      },
    ],
  },
];

export function MVV() {
  return (
    <section className="bg-grad-1 py-20 md:py-28" aria-label="Mission, Vision, Values">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Our Foundation
          </p>
          <h2
            className="text-ink mb-14 font-serif leading-tight font-normal"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Mission. Vision. <em className="text-brand">Values.</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <ScrollReveal key={card.label} delay={i * 0.1}>
              <GlowCard className="bg-bg flex h-full flex-col rounded-xl p-7">
                <span className="text-brand/70 mb-4 font-sans text-[10px] font-medium tracking-[0.12em] uppercase">
                  {card.label}
                </span>
                <h3 className="text-ink mb-4 font-serif text-xl leading-snug font-normal">
                  {card.title}
                </h3>

                {card.body && (
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    {card.body}
                  </p>
                )}

                {card.values && (
                  <ul className="mt-1 space-y-4">
                    {card.values.map((v) => (
                      <li key={v.name}>
                        <span className="text-brand font-sans text-xs font-semibold tracking-[0.07em] uppercase">
                          {v.name}
                        </span>
                        <p className="text-muted-foreground mt-0.5 font-sans text-xs leading-relaxed">
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
  );
}
