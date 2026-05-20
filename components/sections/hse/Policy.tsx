import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlowCard } from '@/components/ui/GlowCard'

interface PolicyPillar {
  tag: string
  title: string
  body: string
}

const PILLARS: PolicyPillar[] = [
  {
    tag: 'PEOPLE',
    title: 'No operation is worth an injury.',
    body: 'Every person on our terminal — employee, contractor, or visitor — goes home in the same condition they arrived. Stop-work authority is universal and unconditional.',
  },
  {
    tag: 'PRODUCT',
    title: 'In-spec delivery, every cycle.',
    body: 'Product integrity from receipt to delivery is a non-negotiable commitment. Contamination events are investigated at root-cause level, not managed at the surface.',
  },
  {
    tag: 'ENVIRONMENT',
    title: 'Zero tolerance for uncontrolled releases.',
    body: 'Our secondary containment, bund integrity monitoring, and spill response procedures are designed so that a controlled failure never becomes an environmental incident.',
  },
  {
    tag: 'COMPLIANCE',
    title: 'Regulatory compliance is the floor, not the ceiling.',
    body: 'Blue Gate meets all applicable Dutch and EU environmental and safety regulations. Internal standards are set above the regulatory minimum in every measurable category.',
  },
]

export function Policy() {
  return (
    <section className="bg-grad-1 py-20 md:py-28" aria-label="HSE policy">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Our HSE Policy
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-14"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Four Pillars. <em className="text-brand">No Exceptions.</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {PILLARS.map((pillar, i) => (
            <ScrollReveal key={pillar.tag} delay={i * 0.08} className="h-full">
              <GlowCard className="rounded-xl bg-bg p-7 flex flex-col h-full">
                <span className="font-sans text-[10px] uppercase tracking-[0.12em] font-medium text-brand/70 mb-3">
                  {pillar.tag}
                </span>
                <h3 className="font-serif text-lg font-normal text-ink leading-snug mb-3">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {pillar.body}
                </p>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <Link
            href="/specs/hse-policy.pdf"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-ink transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download HSE Policy (PDF) →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
