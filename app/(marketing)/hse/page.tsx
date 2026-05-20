import type { Metadata } from 'next'
import Image from 'next/image'
import { Policy } from '@/components/sections/hse/Policy'
import { Certifications } from '@/components/sections/hse/Certifications'
import { Metrics } from '@/components/sections/hse/Metrics'
import { EmergencyResponse } from '@/components/sections/hse/EmergencyResponse'
import { FinalCta } from '@/components/sections/FinalCta'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2400&q=80'

export const metadata: Metadata = {
  title: 'Health, Safety & Environment — Blue Gate',
  description:
    "Blue Gate's HSE framework: ISO 45001, OCIMF SIRE, zero-spill operations, 24/7 emergency response.",
}

export default function HsePage() {
  return (
    <>
      {/* 1. Hero */}
      <section
        className="relative py-40 md:py-56 overflow-hidden"
        aria-label="Health, safety and environment"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src={HERO_IMAGE}
            alt="Industrial safety — worker in full PPE inspecting terminal pipework"
            fill
            priority
            quality={85}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-page/88" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-gradient-to-bl from-brand/[0.18] via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="font-sans text-[11px] uppercase tracking-[0.14em] font-medium text-brand/70 mb-6">
              Health, Safety &amp; Environment
            </p>
            <h1
              className="font-serif font-normal text-ink leading-none tracking-tight mb-8"
              style={{ fontSize: 'clamp(48px, 7vw, 92px)' }}
            >
              Safety is{' '}
              <em className="text-brand">Non-Negotiable.</em>
            </h1>
            <p className="font-sans text-lg md:text-xl text-ink/65 max-w-2xl leading-relaxed">
              Blue Gate&apos;s HSE framework governs every operation — from manual gauging to truck
              loading to bunker delivery. Zero spills and zero lost-time injuries is the standing
              target, reviewed against verified metrics every quarter.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. HSE policy — 4 pillars */}
      <Policy />

      {/* 3. Certifications */}
      <Certifications />

      {/* 4. Performance metrics — dark band */}
      <Metrics />

      {/* 5. Emergency response */}
      <EmergencyResponse />

      {/* 6. Permit-to-work and contractor management */}
      <section
        className="bg-grad-2 py-20 md:py-28"
        aria-label="Permit to work and contractor management"
      >
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
              Permit to Work
            </p>
            <h2
              className="font-serif font-normal text-ink leading-tight mb-8"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              Controlled Work. <em className="text-brand">Zero Assumptions.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl space-y-5 font-sans text-base text-muted-foreground leading-relaxed">
              <p>
                Every non-routine task on the Blue Gate terminal is governed by a formal
                Permit-to-Work (PTW) system. Hot work, confined space entry, line breaking, and
                electrical isolation each require a dedicated permit class — issued only once the
                relevant risk assessment has been reviewed and isolation verified by a competent
                person.
              </p>
              <p>
                Contractors undergo pre-qualification before site access is granted. The
                pre-qualification review covers HSE management system maturity, incident history,
                relevant certifications, and competency of key personnel. A contractor briefing
                session — including site-specific hazard identification — is mandatory before any
                work commences.
              </p>
              <p>
                Toolbox talks are held at the start of every operational shift and before any task
                with elevated risk. Behavioural safety observations are logged and reviewed monthly
                by the HSE team, with trends reported to senior management and used to target
                corrective interventions before incidents occur.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Final CTA */}
      <FinalCta
        heading={
          <>
            Contact our <em className="text-brand">HSE Lead.</em>
          </>
        }
        subline="Questions about our HSE management system, audit programme, or contractor pre-qualification? Our HSE lead responds within one business day."
        primaryCta={{ label: 'Speak to HSE →', href: '/contact?intent=hse' }}
        secondaryCta={{ label: 'Download HSE Policy (PDF) →', href: '/specs/hse-policy.pdf' }}
      />
    </>
  )
}
