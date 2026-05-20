import { ScrollReveal } from '@/components/ui/ScrollReveal'

const HIGHLIGHTS = [
  'Annual apprenticeship intake in partnership with Rotterdam port vocational networks',
  'Port skills training programme for gauging, sampling, and terminal safety operations',
  'STEM outreach partnerships with secondary schools in the Rotterdam–Dordrecht corridor',
  'Supplier development: preference for regional contractors and SME service providers',
  'Bursary scheme for terminal technician qualifications and operator certifications',
]

export function Community() {
  return (
    <section className="bg-grad-2 py-20 md:py-28" aria-label="Community programmes">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Community
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-12"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Rooted in <em className="text-brand">Rotterdam.</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — narrative */}
          <ScrollReveal>
            <div className="space-y-5 font-sans text-base text-muted-foreground leading-relaxed">
              <p>
                Blue Gate has operated from the Port of Rotterdam for over sixty years. That
                longevity carries a responsibility — to the port community, to the city, and to the
                people who choose careers in bulk liquid logistics.
              </p>
              <p>
                Through the port's vocational training networks and direct partnerships with
                Rotterdam's maritime educational institutions, Blue Gate funds competency
                development for the next generation of terminal operators, gaugers, and logistics
                professionals. We track apprenticeship outcomes and publish intake numbers in our
                annual ESG report.
              </p>
              <p>
                Community is not a CSR box to tick. For a facility of our scale — operating within
                a living, working port — good-neighbour practice is part of the social licence that
                lets us operate at all.
              </p>
            </div>
          </ScrollReveal>

          {/* Right — programme highlights */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-brand/[0.14] bg-bg p-7">
              <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-5">
                Programme Highlights
              </p>
              <ul className="space-y-4">
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-brand"
                      aria-hidden="true"
                    />
                    <span className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
