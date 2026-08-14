import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlowCard } from '@/components/ui/GlowCard';
import { markets } from '@/config/markets';
import { MapPin } from 'lucide-react';

export function TerminalNetwork() {
  return (
    <section className="bg-grad-1 py-20 md:py-28" aria-label="Energy markets">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Energy Markets
          </p>
          <h2
            className="text-ink mb-4 font-serif leading-tight font-normal"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Markets We Work <em className="text-brand">Across.</em>
          </h2>
          <p className="text-muted-foreground mb-14 max-w-2xl font-sans text-base leading-relaxed">
            Blue Gate Tank Farm provides petroleum logistics and commercial support services for
            clients active across the following energy markets.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {markets.map((market, i) => (
            <ScrollReveal key={market.id} delay={i * 0.1}>
              <GlowCard className="group bg-bg flex h-full flex-col rounded-xl p-7">
                <div className="mb-5">
                  <span className="text-5xl leading-none" aria-hidden="true">
                    {market.flag}
                  </span>
                </div>

                <h3 className="text-ink mb-1 font-serif text-2xl font-normal">{market.city}</h3>
                <p className="text-muted-foreground mb-4 font-sans text-sm">{market.country}</p>

                <span className="text-muted-foreground bg-muted mb-5 inline-flex w-fit items-center gap-1.5 rounded px-2 py-1 text-[10px] font-medium tracking-[0.08em] uppercase">
                  <MapPin size={9} aria-hidden="true" />
                  {market.region}
                </span>

                <p className="text-muted-foreground flex-1 font-sans text-xs leading-relaxed">
                  {market.description}
                </p>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
