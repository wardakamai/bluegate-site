import type { Metadata } from 'next'
import { pageMeta } from '@/lib/meta'
import Image from 'next/image'
import { Pillars } from '@/components/sections/sustainability/Pillars'
import { EmissionsTable } from '@/components/sections/sustainability/EmissionsTable'
import { Community } from '@/components/sections/sustainability/Community'
import { Reporting } from '@/components/sections/sustainability/Reporting'
import { FinalCta } from '@/components/sections/FinalCta'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const HERO_IMAGE = '/images/hero-sustainability.jpg'

export const metadata: Metadata = pageMeta({
  title: 'Sustainability | Blue Gate Oil Tank Farm Rotterdam',
  description:
    'ESG commitments from Blue Gate, Rotterdam oil storage company. Emissions reduction, vapour recovery upgrades, community programmes and GRI-aligned reporting.',
  path: 'sustainability',
})

export default function SustainabilityPage() {
  return (
    <>
      {/* 1. Hero */}
      <section
        className="relative py-40 md:py-56 overflow-hidden"
        aria-label="Sustainability — storage that respects the future"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src={HERO_IMAGE}
            alt="Blue Gate oil tank farm with solar panels and green infrastructure"
            fill
            priority
            quality={85}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-page/84" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-gradient-to-tr from-brand/[0.14] via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="font-sans text-[11px] uppercase tracking-[0.14em] font-medium text-brand/70 mb-6">
              Energy Today · Planet Tomorrow
            </p>
            <h1
              className="font-serif font-normal text-ink leading-none tracking-tight mb-8"
              style={{ fontSize: 'clamp(48px, 7vw, 92px)' }}
            >
              Storage that{' '}
              <em className="text-brand">Respects the Future.</em>
            </h1>
            <p className="font-sans text-lg md:text-xl text-ink/65 max-w-2xl leading-relaxed">
              Blue Gate operates with a measurable sustainability commitment — spanning emissions
              reduction, spill prevention, vapour recovery, pump electrification, solar PV
              readiness, and water recycling across our Rotterdam terminal.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. ESG pillars */}
      <Pillars />

      {/* 3. Emissions commitments table */}
      <EmissionsTable />

      {/* 4. Community programmes */}
      <Community />

      {/* 5. Reporting frameworks */}
      <Reporting />

      {/* 6. Final CTA */}
      <FinalCta
        heading={
          <>
            Read Our <em className="text-brand">ESG Report.</em>
          </>
        }
        subline="Our annual ESG report covers emissions performance, community investment, and governance disclosures aligned with GRI and TCFD frameworks."
        primaryCta={{ label: 'Download ESG Report (PDF) →', href: '/specs/esg-report.pdf' }}
        secondaryCta={{ label: 'Contact our ESG Lead →', href: '/contact?intent=esg' }}
      />
    </>
  )
}
