import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ClipboardList,
  Droplets,
  Navigation,
  Anchor,
  FileCheck,
  Ruler,
  Gauge,
  Thermometer,
  Wind,
  Search,
} from 'lucide-react'
import { ServiceHero } from '@/components/sections/services/ServiceHero'
import { ServiceFeatureGrid } from '@/components/sections/services/ServiceFeatureGrid'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { FinalCta } from '@/components/sections/FinalCta'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Petroleum Product Inspection — Blue Gate',
  description:
    'Independent pre-loading, loading, discharge, and certification inspections to ASTM D4057 and ISO 3170. Quantity and quality surveys, sampling reports, and custody certificates.',
}

const WORKFLOW_STEPS = [
  {
    num: 1,
    label: 'Pre-loading',
    desc: 'Tank and vessel condition survey, ullage measurement, prior cargo verification.',
    icon: ClipboardList,
  },
  {
    num: 2,
    label: 'Loading',
    desc: 'Continuous witness of transfer operations. Real-time quantity monitoring.',
    icon: Droplets,
  },
  {
    num: 3,
    label: 'In-transit',
    desc: 'Seal verification, cargo monitoring, and interim sampling where applicable.',
    icon: Navigation,
  },
  {
    num: 4,
    label: 'Discharge',
    desc: 'Receiving vessel / tank gauging, discharge quantity verification.',
    icon: Anchor,
  },
  {
    num: 5,
    label: 'Certification',
    desc: 'Certificate of Quality and Certificate of Quantity issued on completion.',
    icon: FileCheck,
  },
]

const QUANTITY_SURVEYS = [
  {
    icon: Ruler,
    title: 'Ullage Measurement',
    body: 'Servo-gauge and manual dip measurement of shore tank ullage before and after transfer. Reported to API MPMS Chapter 17 standards.',
  },
  {
    icon: Droplets,
    title: 'Tank Dipping',
    body: 'Manual bottom dipping for sediment and free water detection. Conducted at start and end of each transfer and reported against baseline.',
  },
  {
    icon: Anchor,
    title: 'Draft Surveys',
    body: 'Marine draft surveys for bill-of-lading quantity determination on tanker cargoes. Constant and displacement calculations to ISO 15016.',
  },
  {
    icon: Gauge,
    title: 'Mass-Flow Meter Verification',
    body: 'Verification of pipeline mass-flow meters against certified references. Results reported alongside transfer totals on the custody-transfer certificate.',
  },
]

const QUALITY_MEASUREMENTS = [
  {
    icon: Gauge,
    title: 'Density',
    body: 'Density at 15°C measured to ASTM D4052 by digital density meter. Corrected volume calculated and reported on the certificate.',
  },
  {
    icon: Droplets,
    title: 'Water Content & Sediment',
    body: 'Free and dissolved water by ASTM D2709 / D95. Sediment by ASTM D473. Results determine whether a parcel meets on-spec thresholds before release.',
  },
  {
    icon: Search,
    title: 'Colour & Appearance',
    body: 'Visual and colorimetric assessment for haze, particulates, and off-colour product. Rapid indicator of cross-contamination or degradation.',
  },
  {
    icon: Thermometer,
    title: 'Temperature',
    body: 'Continuous and spot temperature measurement throughout transfer. Critical for volume correction and heated-product cargo documentation.',
  },
  {
    icon: Wind,
    title: 'Reid Vapour Pressure',
    body: 'RVP measured to ASTM D323 or ASTM D5191 where applicable. Mandatory for gasoline-blend components and certain crude grades.',
  },
]

const DOCS_ISSUED = [
  'Certificate of Quality (CoQ)',
  'Certificate of Quantity (CofQ)',
  'Bill of Lading appendix / Ullage report',
  'Composite sampling report',
  'Seal certificate (load and discharge)',
  'Draft survey report (marine cargoes)',
  'Non-conformance notice (if applicable)',
]

export default function ProductInspectionPage() {
  return (
    <main>
      <ServiceHero
        label="Product Inspection"
        headlinePlain="Independent Inspection."
        headlineItalic="Verifiable Outcomes."
        subdeck="Pre-loading through to certification — every parcel inspected to ASTM D4057 and ISO 3170 with quantity surveys, sampling, and signed certificates issued on completion."
        imageUrl="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Inspection workflow */}
      <section className="bg-page py-20 md:py-28" aria-label="Inspection workflow">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
              Five-Stage Workflow
            </p>
            <h2
              className="font-serif font-normal text-ink leading-tight mb-14"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              From Receipt to <em className="text-brand">Signed Certificate.</em>
            </h2>
          </ScrollReveal>

          {/* Desktop: horizontal steps */}
          <ScrollReveal delay={0.08}>
            <div className="hidden md:block relative" aria-hidden="false">
              {/* Connecting line */}
              <div
                className="absolute top-6 left-0 right-0 h-px"
                style={{ background: 'rgba(208,0,24,0.20)' }}
                aria-hidden="true"
              />
              <ol className="relative grid grid-cols-5 gap-4">
                {WORKFLOW_STEPS.map((step) => {
                  const Icon = step.icon
                  return (
                    <li key={step.num} className="flex flex-col items-center text-center">
                      <div className="relative z-10 w-12 h-12 rounded-full bg-bg border border-brand/30 flex items-center justify-center mb-4">
                        <Icon size={20} className="text-brand" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-xs text-brand/60 mb-1">
                        0{step.num}
                      </span>
                      <span className="font-serif text-base font-normal text-ink mb-2">
                        {step.label}
                      </span>
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </li>
                  )
                })}
              </ol>
            </div>

            {/* Mobile: vertical steps */}
            <ol className="md:hidden space-y-6">
              {WORKFLOW_STEPS.map((step) => {
                const Icon = step.icon
                return (
                  <li key={step.num} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-bg border border-brand/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={18} className="text-brand" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-brand/60 block mb-0.5">
                        0{step.num}
                      </span>
                      <span className="font-serif text-base font-normal text-ink block mb-1">
                        {step.label}
                      </span>
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </ScrollReveal>
        </div>
      </section>

      {/* Sampling protocols */}
      <section className="bg-grad-1 py-20 md:py-28" aria-label="Sampling protocols">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal>
              <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
                Sampling Protocols
              </p>
              <h2
                className="font-serif font-normal text-ink leading-tight mb-6"
                style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
              >
                ASTM D4057 / <em className="text-brand">ISO 3170 Methods.</em>
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-6">
                All sampling is conducted in strict accordance with ASTM D4057 (Petroleum Liquids)
                and ISO 3170 (Petroleum and Natural Gas), with technique selected to match the
                product grade, vessel type, and transfer method.
              </p>
              <ul className="space-y-2.5" aria-label="Sampling techniques">
                {[
                  'Bottom-running composite (shore tanks)',
                  'All-levels sample (tank gauging operations)',
                  'Spot samples at defined intervals (pipeline)',
                  'Inline automatic proportional composite (metered lines)',
                  'Top, middle, and bottom individual samples for stratification checks',
                ].map((technique) => (
                  <li key={technique} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-sans text-sm text-muted-foreground">
                      {technique}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Quantity surveys grid */}
            <ScrollReveal delay={0.1}>
              <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-6">
                Quantity Survey Methods
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {QUANTITY_SURVEYS.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="rounded-xl bg-bg border border-brand/[0.12] p-5"
                    >
                      <Icon size={18} className="text-brand mb-3" aria-hidden="true" />
                      <p className="font-serif text-base font-normal text-ink mb-1.5">
                        {item.title}
                      </p>
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quality measurements */}
      <section className="bg-page py-20 md:py-28" aria-label="Quality measurements">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
              Quality Parameters
            </p>
            <h2
              className="font-serif font-normal text-ink leading-tight mb-12"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              What We <em className="text-brand">Measure.</em>
            </h2>
          </ScrollReveal>
          <ServiceFeatureGrid items={QUALITY_MEASUREMENTS} />
        </div>
      </section>

      {/* Documentation + partner network */}
      <section className="bg-grad-2 py-20 md:py-28" aria-label="Documentation and partners">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal>
              <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
                Documentation Issued
              </p>
              <h2
                className="font-serif font-normal text-ink leading-tight mb-6"
                style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
              >
                Every Parcel. <em className="text-brand">Full Paper Trail.</em>
              </h2>
              <ul className="space-y-3" aria-label="Documents issued per inspection">
                {DOCS_ISSUED.map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <FileCheck
                      size={15}
                      className="text-brand mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-sans text-sm text-muted-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              {/* TODO: confirm partnership status with client */}
              <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
                Inspector Partners
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                Blue Gate works with internationally accredited independent inspection bodies.
                Clients may nominate their preferred inspector or request arrangement through our
                operations team.
              </p>
              <div className="flex flex-wrap gap-3">
                {['SGS', 'Intertek', 'Bureau Veritas'].map((partner) => (
                  <span
                    key={partner}
                    className="font-mono text-sm font-medium text-ink px-4 py-2 rounded-lg border border-brand/20 bg-brand/[0.06]"
                  >
                    {partner}
                  </span>
                ))}
              </div>
              <p className="font-sans text-[10px] text-muted-foreground mt-4 italic">
                {/* TODO: confirm partnership status with client */}
                Partnership arrangements subject to confirmation. Contact operations to verify
                current approved inspector list.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-page py-16 md:py-20 border-t border-brand/[0.10]"
        aria-label="Request inspection"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <ScrollReveal>
            <h2
              className="font-serif font-normal text-ink leading-tight mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            >
              Need Inspection <em className="text-brand">Coverage?</em>
            </h2>
            <p className="font-sans text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Provide cargo details, port of loading or discharge, and intended transfer date.
              Our operations team will confirm inspector deployment within 24 hours.
            </p>
            <Button
              asChild
              className="bg-brand text-white hover:bg-brand-steel h-11 px-8 text-sm font-medium"
            >
              <Link href="/contact?intent=quote">Request Inspection →</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
