// TODO: confirm with client — actual certifications held

import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface Certification {
  code: string
  name: string
  description: string
}

const CERTIFICATIONS: Certification[] = [
  {
    code: 'ISO 45001',
    name: 'Occupational Health & Safety',
    description:
      'Certified occupational health and safety management system governing risk assessment, incident investigation, and continual HSE improvement across all terminal operations.',
  },
  {
    code: 'ISO 14001',
    name: 'Environmental Management',
    description:
      'Certified environmental management system covering emissions, spill prevention, waste management, and ecological impact monitoring at the Rotterdam facility.',
  },
  {
    code: 'ISO 9001',
    name: 'Quality Management',
    description:
      'Quality management system ensuring consistent product handling, calibrated measurement equipment, and documented procedures from receipt to delivery.',
  },
  {
    code: 'SQAS',
    name: 'Safety & Quality Assessment System',
    description:
      'SQAS assessment validates safety, quality, and environmental performance for the chemical and petroleum distribution chain in line with CEFIC requirements.',
  },
  {
    code: 'OCIMF SIRE 2.0',
    name: 'Ship Inspection Report Programme',
    description:
      'SIRE 2.0 compatibility ensures terminal berths and loading/discharge operations meet the Oil Companies International Marine Forum inspection requirements for tanker operations.',
  },
  {
    code: 'ISGOTT',
    name: 'International Safety Guide for Oil Tankers and Terminals',
    description:
      'All berth operations, hose connections, and terminal-to-ship interfaces follow ISGOTT fifth edition protocols for safe bulk liquid transfer.',
  },
  {
    code: 'FETSA',
    name: 'Fuel & Energy Terminal Standards Association',
    description:
      'FETSA membership aligns Blue Gate with European fuel terminal storage and operational standards, including metering accuracy, product segregation, and tank integrity.',
  },
]

export function Certifications() {
  return (
    <section className="bg-grad-2 py-20 md:py-28" aria-label="Certifications">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Certified Operations
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Verified to <em className="text-brand">Industry Standard.</em>
          </h2>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Certifications confirm that operations meet documented external standards — not internal
            assertions. Client confirmation of exact certifications held required before publication.
          </p>
        </ScrollReveal>

        {/* Badge strip */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-3 mb-12">
            {CERTIFICATIONS.map((cert) => (
              <span
                key={cert.code}
                className="font-mono text-sm font-medium px-4 py-2 rounded-lg bg-bg border border-brand/[0.14] text-ink"
              >
                {cert.code}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Detail cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <ScrollReveal key={cert.code} delay={i * 0.06} className="h-full">
              <div className="rounded-xl border border-brand/[0.12] bg-bg p-6 h-full flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="font-mono text-sm font-semibold text-brand">{cert.code}</span>
                </div>
                <p className="font-sans text-xs text-muted-foreground font-medium mb-1">
                  {cert.name}
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
