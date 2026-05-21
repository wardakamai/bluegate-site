import type { Metadata } from 'next'
import { pageMeta } from '@/lib/meta'
import Link from 'next/link'
import { Layers, Waves, Shield, Thermometer } from 'lucide-react'
import { ServiceHero } from '@/components/sections/services/ServiceHero'
import { ServiceFeatureGrid } from '@/components/sections/services/ServiceFeatureGrid'
import { SpecTable } from '@/components/sections/services/SpecTable'
import { OilStorageAccordion } from '@/components/sections/services/OilStorageAccordion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = pageMeta({
  title: 'Oil Storage Services Rotterdam — Blue Gate',
  description:
    'Bulk liquid tank storage for Jet A1, Diesel EN590, D6, and Crude Oil at Rotterdam. Fixed-roof, floating-roof, heated tanks from 1,000 to 80,000 m³ with throughput and blending.',
  path: 'services/oil-storage',
})

const TANK_TYPES = [
  {
    icon: Layers,
    title: 'Fixed-Roof Tanks',
    body: 'Suitable for low-vapour-pressure products and aviation-grade fuels requiring nitrogen blanketing. Available in 1,000 – 25,000 m³ configurations with stainless or epoxy-lined interiors.',
  },
  {
    icon: Waves,
    title: 'Floating-Roof Tanks',
    body: 'External floating-roof tanks with pontoon seals for diesel, gasoline-component, and crude storage. Vapour recovery systems installed across all floating-roof units.',
  },
  {
    icon: Shield,
    title: 'Internal Floating-Roof Tanks',
    body: 'Fixed outer shell with internal floating pan — dual vapour barrier for sensitive distillate and blendstock grades. Preferred configuration for Diesel EN590 storage.',
  },
  {
    icon: Thermometer,
    title: 'Heated Tanks',
    body: 'Steam and thermal-oil heated fixed-roof tanks for high-viscosity fuel oils and heavy crude. Operating temperatures maintained to ±2°C. Capacity: 10,000 – 80,000 m³.',
  },
]

const THROUGHPUT_SPECS = [
  { property: 'Max throughput', value: '4,500 m³/hr' },
  { property: 'Manifold connections', value: '12 (product-segregated)' },
  { property: 'Blending tolerance', value: '±0.5% v/v' },
  { property: 'Pipeline interconnects', value: 'ARA grid + Rhine barge' },
  { property: 'Marine berth draft', value: '22.5 m (VLCC-capable)' },
]

const TANK_SPECS = [
  { property: 'Tank sizes available', value: '1,000 – 80,000 m³' },
  { property: 'Product compatibility', value: 'Jet A1, EN590, D6, Crude Oil' },
  { property: 'Jetty draft', value: '22.5 m' },
  { property: 'Manifold connections', value: '12' },
  { property: 'Pipeline interconnects', value: 'ARA pipeline grid, Rhine inland waterways' },
  { property: 'Blending capability', value: 'In-line, ±0.5% tolerance' },
  { property: 'Heated tanks', value: 'Yes (steam / thermal-oil coils)' },
  { property: 'Vapour recovery', value: 'Installed on all floating-roof units' },
  { property: 'Nitrogen blanketing', value: 'Available on fixed-roof Jet A1 tanks' },
]

const TELEMETRY = [
  '24/7 continuous tank gauging (servo-gauge and radar)',
  'Mass-flow metering on all product lines',
  'Automated inventory reporting via API (JSON / XML)',
  'Daily and weekly stock reports by email',
  'Third-party inspector access with advance notification',
  'Electronic custody-transfer certificates issued at completion',
]

export default function OilStoragePage() {
  return (
    <main>
      <ServiceHero
        label="Oil Storage Services"
        headlinePlain="Bulk Liquid Storage,"
        headlineItalic="Built for Spec."
        subdeck="Dedicated tank capacity at Rotterdam for the four major petroleum grades — with throughput, in-line blending, and independent custody transfer as standard."
        imageUrl="https://images.unsplash.com/photo-1581093803537-1e54f5a78ad4?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Tank typology */}
      <section className="bg-page py-20 md:py-28" aria-label="Tank types">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
              Tank Infrastructure
            </p>
            <h2
              className="font-serif font-normal text-ink leading-tight mb-12"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              Four Tank Types. <em className="text-brand">One Grade Each.</em>
            </h2>
          </ScrollReveal>
          <ServiceFeatureGrid items={TANK_TYPES} />
        </div>
      </section>

      {/* Throughput & blending */}
      <section className="bg-grad-1 py-20 md:py-28" aria-label="Throughput and blending">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal>
              <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
                Throughput & Blending
              </p>
              <h2
                className="font-serif font-normal text-ink leading-tight mb-6"
                style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
              >
                High-Volume Throughput. <em className="text-brand">Precise Blending.</em>
              </h2>
              <div className="space-y-4 font-sans text-base text-muted-foreground leading-relaxed">
                <p>
                  The Rotterdam terminal handles up to 4,500 m³/hr peak throughput across twelve
                  product-segregated manifold connections. Pipeline feeds from the ARA grid and Rhine
                  barge berths allow continuous receipt without interrupting active storage.
                </p>
                <p>
                  In-line blending is available for grade production and specification adjustment.
                  Blending tolerance is held to ±0.5% v/v across all components. Products are
                  blended in the line or in dedicated blend tanks, with mass-flow metering on every
                  outlet.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <SpecTable rows={THROUGHPUT_SPECS} showMethod={false} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Tank leasing terms */}
      <section className="bg-page py-20 md:py-28" aria-label="Leasing terms">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
              Commercial Terms
            </p>
            <h2
              className="font-serif font-normal text-ink leading-tight mb-12"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              Leasing Structures. <em className="text-brand">Built Around Your Programme.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <OilStorageAccordion />
          </ScrollReveal>
        </div>
      </section>

      {/* Custody transfer & telemetry */}
      <section className="bg-grad-2 py-20 md:py-28" aria-label="Custody transfer and telemetry">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal>
              <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
                Measurement & Reporting
              </p>
              <h2
                className="font-serif font-normal text-ink leading-tight mb-6"
                style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
              >
                Real-time Custody Transfer. <em className="text-brand">Zero Ambiguity.</em>
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                Every tank movement is measured and documented under a continuous chain of custody.
                Clients and their nominated inspectors have access to live inventory data, movement
                logs, and custody-transfer certificates as transactions complete.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ul className="space-y-3" aria-label="Telemetry and reporting features">
                {TELEMETRY.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 w-1.5 h-1.5 rounded-full bg-brand shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Full spec table */}
      <section className="bg-page py-20 md:py-28" aria-label="Terminal specifications">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
              Terminal Specifications
            </p>
            <h2
              className="font-serif font-normal text-ink leading-tight mb-12"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              Capacity & <em className="text-brand">Capabilities.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <SpecTable rows={TANK_SPECS} showMethod={false} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-grad-1 py-16 md:py-20 border-t border-brand/[0.10]" aria-label="Request allocation">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <ScrollReveal>
            <h2
              className="font-serif font-normal text-ink leading-tight mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            >
              Ready to Secure <em className="text-brand">Tank Capacity?</em>
            </h2>
            <p className="font-sans text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Provide your product grade, volume requirement, and storage duration. Our team will
              confirm available allocation and commercial terms within one business day.
            </p>
            <Button
              asChild
              className="bg-brand text-white hover:bg-brand-steel h-11 px-8 text-sm font-medium"
            >
              <Link href="/contact?intent=quote">Request Tank Allocation →</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
