import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlowCard } from '@/components/ui/GlowCard'

const CARDS = [
  {
    flag: '🇳🇱',
    label: 'ARA Hub',
    city: 'Rotterdam',
    body: 'Europe\'s premier blending and redistribution centre. The ARA corridor is the reference-price market for European petroleum. Unmatched pipeline, marine, rail, and road connectivity.',
  },
  {
    flag: '🇦🇪',
    label: 'Hormuz-Free Bunkering',
    city: 'Fujairah',
    body: 'Strategic risk diversification — outside the Strait of Hormuz. Serves growing Indian Ocean crude flows and Middle East product demand. World-class bunkering and blending infrastructure.',
  },
  {
    flag: '🇺🇸',
    label: 'US Gulf Gateway',
    city: 'Houston',
    body: 'Americas refining and export epicentre. Direct pipeline access to US production basins. Marine infrastructure supporting both crude import and refined-product export to the Atlantic basin.',
  },
  {
    flag: '🇸🇬',
    label: 'Malacca Pivot',
    city: 'Jurong',
    body: 'Gateway to Asia-Pacific supply and bunkering. The Strait of Malacca carries over 40% of global seaborne trade. Jurong positions Blue Gate at the heart of Asian energy redistribution.',
  },
  {
    flag: '🇨🇳',
    label: 'East Asia Gateway',
    city: 'Zhoushan',
    body: "China's largest bonded bulk-liquid storage hub, off the Yangtze River Delta. Zhoushan gives Blue Gate direct deep-water access to East Asian crude and product blending flows.",
  },
]

export function WhyNetwork() {
  return (
    <section className="bg-grad-2 py-20 md:py-28" aria-label="Why five terminals">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Why Five Terminals
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-16"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Coverage Where <em className="text-brand">Trade Happens.</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">
          {CARDS.map((card, i) => (
            <ScrollReveal key={card.city} delay={i * 0.08}>
              <GlowCard className="rounded-xl bg-bg p-7 h-full flex flex-col">
                <span className="text-4xl mb-5 block" aria-hidden="true">{card.flag}</span>
                <span className="font-sans text-[10px] uppercase tracking-[0.08em] font-medium text-brand mb-2 block">
                  {card.label}
                </span>
                <h3 className="font-serif text-xl font-normal text-ink mb-3">{card.city}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed flex-1">
                  {card.body}
                </p>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
