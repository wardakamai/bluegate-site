// TODO: confirm with client — actual reporting frameworks subscribed to

import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface Framework {
  code: string
  name: string
  description: string
}

const FRAMEWORKS: Framework[] = [
  {
    code: 'GRI',
    name: 'Global Reporting Initiative',
    description:
      'Blue Gate aligns its ESG disclosures with GRI Standards, reporting material topics including energy consumption, water use, occupational health, and community engagement.',
  },
  {
    code: 'TCFD',
    name: 'Task Force on Climate-Related Financial Disclosures',
    description:
      'Climate risk is assessed across governance, strategy, risk management, and metrics — consistent with TCFD recommendations. Physical and transition risks relevant to ARA terminal operations are disclosed annually.',
  },
  {
    code: 'CDP',
    name: 'Carbon Disclosure Project',
    description:
      'Scope 1, 2, and material Scope 3 emissions data are disclosed through the CDP platform, supporting investor and client transparency on carbon performance.',
  },
  {
    code: 'ISO 14001',
    name: 'Environmental Management System',
    description:
      'Our environmental management system is structured around ISO 14001, providing a certified framework for identifying, managing, and continuously improving environmental impacts at the Rotterdam terminal.',
  },
]

export function Reporting() {
  return (
    <section className="bg-grad-1 py-20 md:py-28" aria-label="Reporting frameworks">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Reporting Frameworks
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Disclosed Against <em className="text-brand">Global Standards.</em>
          </h2>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-2xl mb-12">
            Blue Gate aligns its ESG reporting with internationally recognised frameworks. Actual
            subscription status is subject to confirmation with the client before publication.
          </p>
        </ScrollReveal>

        {/* Framework badge row */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-3 mb-12">
            {FRAMEWORKS.map((fw) => (
              <span
                key={fw.code}
                className="font-mono text-sm font-medium px-4 py-2 rounded-lg bg-bg border border-brand/[0.14] text-ink"
              >
                {fw.code}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Framework detail grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FRAMEWORKS.map((fw, i) => (
            <ScrollReveal key={fw.code} delay={i * 0.08} className="h-full">
              <div className="rounded-xl border border-brand/[0.12] bg-bg p-6 h-full flex flex-col gap-2">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-mono text-sm font-semibold text-brand">{fw.code}</span>
                  <span className="font-sans text-xs text-muted-foreground">{fw.name}</span>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {fw.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
