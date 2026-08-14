import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlowCard } from '@/components/ui/GlowCard';
import { markets } from '@/config/markets';

export function MarketsOverview() {
  return (
    <section id="markets" className="bg-grad-1 py-20 md:py-28" aria-label="Energy markets overview">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Markets Overview
          </p>
          <h2
            className="text-ink mb-4 font-serif leading-tight font-normal"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Energy Markets <em className="text-brand">at a Glance.</em>
          </h2>
          <p className="text-muted-foreground mb-14 max-w-2xl font-sans text-base leading-relaxed">
            General background on the energy markets Blue Gate Tank Farm works across. This is
            descriptive market information, not a representation of facilities owned or operated by
            Blue Gate Tank Farm.
          </p>
        </ScrollReveal>

        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {markets.map((market, i) => (
            <ScrollReveal key={market.id} delay={i * 0.1}>
              <GlowCard className="bg-bg flex h-full flex-col rounded-xl p-7">
                <span className="mb-5 text-5xl leading-none" aria-hidden="true">
                  {market.flag}
                </span>
                <h3 className="text-ink mb-1 font-serif text-2xl font-normal">{market.keyword}</h3>
                <p className="text-muted-foreground mb-4 font-sans text-sm">{market.region}</p>
                <p className="text-ink/65 flex-1 font-sans text-sm leading-relaxed">
                  {market.description}
                </p>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground border-border-soft max-w-3xl border-t pt-6 font-sans text-xs">
            The descriptions above characterise the wider port, terminal or regional market. They do
            not represent capacity, infrastructure or facilities owned, controlled or immediately
            available through Blue Gate Tank Farm. Service scope and contractual responsibilities
            for any specific engagement are defined in the applicable executed agreement.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
