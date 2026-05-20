import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlowCard } from '@/components/ui/GlowCard'

interface Pillar {
  emoji: string
  tag: string
  title: string
  body: string
  pillars: readonly string[]
}

const PILLARS: Pillar[] = [
  {
    emoji: '🌿',
    tag: 'ENVIRONMENT',
    title: 'Emissions, Spills, and the Terminal Footprint',
    body: 'Blue Gate targets measurable scope 1 and 2 reductions across all throughput operations. Vapour recovery units reduce VOC emissions at tank vent points. Secondary containment and bund integrity monitoring prevent hydrocarbon release to soil or waterway. Biodiversity surveys of the terminal boundary are conducted annually.',
    pillars: ['Vapour Recovery', 'Spill Prevention', 'Secondary Containment', 'Biodiversity'],
  },
  {
    emoji: '🛡️',
    tag: 'SOCIAL',
    title: 'Workforce Safety and Community Commitment',
    body: 'Safe operations begin with people. Every Blue Gate employee completes role-specific competency assurance and participates in a weekly toolbox talk programme. Through partnerships with Rotterdam Port vocational networks, Blue Gate funds apprenticeships and skills training that feeds the wider port community.',
    pillars: ['Zero-Harm Target', 'Competency Assurance', 'Apprenticeships', 'Port Partnerships'],
  },
  {
    emoji: '🏛️',
    tag: 'GOVERNANCE',
    title: 'Board Oversight and Transparent Reporting',
    body: 'ESG accountability sits at board level. Progress against targets is reviewed quarterly and reported annually in alignment with GRI and TCFD frameworks. Blue Gate maintains a public incident register and publishes near-miss statistics to reinforce a culture where transparency is non-negotiable.',
    pillars: ['Board Oversight', 'GRI Alignment', 'TCFD Alignment', 'Incident Register'],
  },
]

export function Pillars() {
  return (
    <section className="bg-grad-2 py-20 md:py-28" aria-label="ESG pillars">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            ESG Framework
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-14"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Three Pillars. <em className="text-brand">One Standard.</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => (
            <ScrollReveal key={pillar.tag} delay={i * 0.1} className="h-full">
              <GlowCard className="rounded-xl bg-bg p-7 flex flex-col h-full">
                <span className="text-4xl mb-5 leading-none" aria-hidden="true">
                  {pillar.emoji}
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.12em] font-medium text-brand/70 mb-2">
                  {pillar.tag}
                </span>
                <h3 className="font-serif text-xl font-normal text-ink leading-snug mb-4">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {pillar.body}
                </p>
                <ul className="flex flex-wrap gap-2" aria-label={`${pillar.tag} focus areas`}>
                  {pillar.pillars.map((item) => (
                    <li
                      key={item}
                      className="font-sans text-[10px] uppercase tracking-[0.07em] font-medium bg-brand/[0.1] text-brand/80 border border-brand/20 rounded px-2 py-1"
                    >
                      {item}
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
