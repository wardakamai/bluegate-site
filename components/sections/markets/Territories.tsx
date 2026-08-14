import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlowCard } from '@/components/ui/GlowCard';

interface Territory {
  tag: string;
  region: string;
  positioning: string;
  bullets: [string, string];
}

const TERRITORIES: Territory[] = [
  {
    tag: 'EUROPE',
    region: 'Northwest Europe (NWE)',
    positioning: 'Core refined-products distribution hub for four major economies.',
    bullets: [
      'Distribution into Germany, Belgium, Netherlands, and France via the Amsterdam–Rotterdam–Antwerp corridor.',
      'Diesel EN590, Jet A1, and heating oil flows serving road transport, aviation, and power generation.',
    ],
  },
  {
    tag: 'ATLANTIC',
    region: 'Atlantic Crude Basin',
    positioning: 'Crude sourcing across the Atlantic, aligned to Rotterdam pricing benchmarks.',
    bullets: [
      'Crude flows from West Africa, the Americas, and North Sea fields to European refineries.',
      'Multi-grade origination spanning Brent Blend, WTI, Bonny Light, and Forties.',
    ],
  },
  {
    tag: 'MEDITERRANEAN',
    region: 'Mediterranean Re-Export',
    positioning: 'Transshipment and blending hub for Southern European and North African markets.',
    bullets: [
      'Re-export flows serving Italian, Spanish, Tunisian, and Algerian ports.',
      'Blending operations to meet local fuel specifications and climate-grade requirements.',
    ],
  },
  {
    tag: 'ARA',
    region: 'ARA Blending Hub',
    positioning: "Europe's primary blending and arbitrage corridor anchored at Rotterdam.",
    bullets: [
      'Antwerp–Rotterdam–Amsterdam corridor handles the largest concentration of refined product storage in Europe.',
      'Blend-to-spec capability for ULSD, Jet A1, and fuel oil grades within our Rotterdam terminal.',
    ],
  },
  {
    tag: 'ASIA',
    region: 'Asian Re-Supply',
    positioning: 'East–West product arbitrage via Jurong, Zhoushan, and Fujairah relay nodes.',
    bullets: [
      'Coordination with the Jurong (Singapore) and Zhoushan (China) terminals for South-East and East Asian bunker and refined product flows.',
      'Fujairah hub bridges Middle East crude origination with Asian refinery demand and European re-export.',
    ],
  },
];

export function Territories() {
  return (
    <section className="bg-grad-1 py-20 md:py-28" aria-label="Market territories">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Market Territories
          </p>
          <h2
            className="text-ink mb-14 font-serif leading-tight font-normal"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Markets We <em className="text-brand">Serve.</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TERRITORIES.map((t, i) => (
            <ScrollReveal key={t.region} delay={i * 0.08} className="h-full">
              <GlowCard className="bg-bg flex h-full flex-col rounded-xl p-7">
                <span className="text-brand/70 mb-3 font-sans text-[10px] font-medium tracking-[0.12em] uppercase">
                  {t.tag}
                </span>
                <h3 className="text-ink mb-2 font-serif text-xl leading-snug font-normal">
                  {t.region}
                </h3>
                <p className="text-muted-foreground border-brand/10 mb-5 border-b pb-5 font-sans text-sm leading-relaxed">
                  {t.positioning}
                </p>
                <ul className="space-y-3">
                  {t.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <span
                        className="bg-brand mt-2 h-1 w-1 shrink-0 rounded-full"
                        aria-hidden="true"
                      />
                      <span className="text-muted-foreground font-sans text-xs leading-relaxed">
                        {bullet}
                      </span>
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
