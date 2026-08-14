import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlowCard } from '@/components/ui/GlowCard';

interface PolicyPillar {
  tag: string;
  title: string;
  body: string;
}

const PILLARS: PolicyPillar[] = [
  {
    tag: 'PEOPLE',
    title: 'Safety comes first in every engagement.',
    body: 'We expect the same standard of care from every partner and facility we work with as we hold ourselves to.',
  },
  {
    tag: 'DOCUMENTATION',
    title: 'Clear records, every time.',
    body: 'Documentation accuracy and traceability are treated as a baseline requirement, not an afterthought, across every coordination we support.',
  },
  {
    tag: 'ENVIRONMENT',
    title: 'Preference for compliant, responsible operators.',
    body: 'Where we coordinate storage or logistics access, we prioritise facilities and partners that maintain sound environmental and safety practices.',
  },
  {
    tag: 'COMPLIANCE',
    title: 'Working within applicable regulation.',
    body: 'We operate within Dutch and EU regulatory requirements, and within the specific procedures of whichever terminal, port or marine facility a given engagement involves.',
  },
];

export function Policy() {
  return (
    <section className="bg-grad-1 py-20 md:py-28" aria-label="HSE approach">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Our Approach
          </p>
          <h2
            className="text-ink mb-14 font-serif leading-tight font-normal"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Four Principles. <em className="text-brand">No Exceptions.</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PILLARS.map((pillar, i) => (
            <ScrollReveal key={pillar.tag} delay={i * 0.08} className="h-full">
              <GlowCard className="bg-bg flex h-full flex-col rounded-xl p-7">
                <span className="text-brand/70 mb-3 font-sans text-[10px] font-medium tracking-[0.12em] uppercase">
                  {pillar.tag}
                </span>
                <h3 className="text-ink mb-3 font-serif text-lg leading-snug font-normal">
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
