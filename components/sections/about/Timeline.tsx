import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlowCard } from '@/components/ui/GlowCard'

interface Milestone {
  year: string
  title: string
  desc: string
}

// TODO: confirm with client — verify Houston and Singapore founding dates and active status
const MILESTONES: Milestone[] = [
  {
    year: '1964',
    title: 'Founded in Rotterdam',
    desc: 'Established as a bulk liquid storage and throughput operator serving the ARA refinery complex and the emerging European petroleum market.',
  },
  {
    year: '1980s',
    title: 'European Expansion',
    desc: 'Expanded fixed-roof and floating-roof tank infrastructure; commissioned first dedicated Jet A1 storage bays to meet rising aviation-fuel demand across European airports.',
  },
  {
    year: '2000s',
    title: 'Houston Operations Established', // TODO: confirm with client — founding date and operational scope
    desc: 'Extended throughput and custody-transfer services to the Gulf Coast refining complex, deepening Blue Gate\'s reach into North American commodity flows.',
  },
  {
    year: '2010s',
    title: 'Singapore Expansion', // TODO: confirm with client — founding date and operational scope
    desc: 'Opened Asia-Pacific capability at the world\'s leading bunkering hub, connecting Blue Gate to Asian petroleum trade flows and bunkering supply chains.',
  },
  {
    year: '2020s',
    title: 'Sustainability Programme',
    desc: 'Launched formal environmental programme; vapour recovery systems installed across all floating-roof tanks to measurably reduce hydrocarbon emissions across the Rotterdam terminal.',
  },
  {
    year: '2026',
    title: 'Digital Terminal Management',
    desc: 'Modernised terminal management platform deployed, integrating real-time metering, automated custody-transfer documentation, and live client reporting in a unified system.',
  },
]

function MilestoneCard({ item }: { item: Milestone }) {
  return (
    <GlowCard className="rounded-xl bg-bg p-6 h-full">
      <span className="font-mono text-3xl font-medium text-brand block mb-3">{item.year}</span>
      <h3 className="font-serif text-lg font-normal text-ink mb-2">{item.title}</h3>
      <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
    </GlowCard>
  )
}

const Dot = ({ large = false }: { large?: boolean }) => (
  <div
    className={`${large ? 'w-5 h-5' : 'w-4 h-4'} rounded-full bg-brand/25 border border-brand/60 flex items-center justify-center shrink-0`}
  >
    <div className={`${large ? 'w-2 h-2' : 'w-1.5 h-1.5'} rounded-full bg-brand`} />
  </div>
)

export function Timeline() {
  return (
    <section className="bg-grad-2 py-20 md:py-28" aria-label="Company timeline">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Our History
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-16"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Built Over <em className="text-brand">Six Decades.</em>
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Continuous vertical line — desktop only */}
          <div
            className="hidden md:block absolute inset-y-0 left-1/2 w-px -translate-x-1/2"
            style={{ background: 'rgba(197,3,55,0.15)' }}
            aria-hidden="true"
          />

          <div>
            {MILESTONES.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <ScrollReveal key={item.year} delay={i * 0.1}>
                  {/* Mobile: left dot + card */}
                  <div className="flex items-start gap-5 md:hidden mb-8">
                    <div className="mt-5 shrink-0">
                      <Dot />
                    </div>
                    <MilestoneCard item={item} />
                  </div>

                  {/* Desktop: alternating two-column */}
                  <div className="hidden md:grid grid-cols-[1fr_56px_1fr] items-start mb-10">
                    <div className={isLeft ? 'pr-8' : ''}>
                      {isLeft && <MilestoneCard item={item} />}
                    </div>
                    <div className="flex justify-center pt-5 relative z-10">
                      <Dot large />
                    </div>
                    <div className={!isLeft ? 'pl-8' : ''}>
                      {!isLeft && <MilestoneCard item={item} />}
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
