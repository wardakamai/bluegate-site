import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlowCard } from '@/components/ui/GlowCard';

interface Pillar {
  emoji: string;
  tag: string;
  title: string;
  body: string;
}

const PILLARS: Pillar[] = [
  {
    emoji: '🌿',
    tag: 'ENVIRONMENT',
    title: 'Preference for Responsible Partners',
    body: 'Where we coordinate storage, terminal or logistics access, we prioritise working with facilities and partners that maintain sound environmental practices, rather than defaulting to whichever option is cheapest or fastest.',
  },
  {
    emoji: '🛡️',
    tag: 'PEOPLE',
    title: 'Safety-First Coordination',
    body: 'Every engagement we coordinate is expected to follow the safety procedures of the relevant facility. We do not compromise on this to accelerate a transaction.',
  },
  {
    emoji: '🏛️',
    tag: 'GOVERNANCE',
    title: 'Transparent, Accountable Practice',
    body: 'As a newly established business, we are building our governance and reporting practices from day one, with clear documentation and accountability for every engagement we take on.',
  },
];

export function Pillars() {
  return (
    <section className="bg-grad-2 py-20 md:py-28" aria-label="Sustainability principles">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Our Principles
          </p>
          <h2
            className="text-ink mb-14 font-serif leading-tight font-normal"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Three Principles. <em className="text-brand">One Standard.</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <ScrollReveal key={pillar.tag} delay={i * 0.1} className="h-full">
              <GlowCard className="bg-bg flex h-full flex-col rounded-xl p-7">
                <span className="mb-5 text-4xl leading-none" aria-hidden="true">
                  {pillar.emoji}
                </span>
                <span className="text-brand/70 mb-2 font-sans text-[10px] font-medium tracking-[0.12em] uppercase">
                  {pillar.tag}
                </span>
                <h3 className="text-ink mb-4 font-serif text-xl leading-snug font-normal">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
