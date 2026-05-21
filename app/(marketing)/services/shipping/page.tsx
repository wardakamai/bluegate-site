import type { Metadata } from 'next'
import { pageMeta } from '@/lib/meta'
import Link from 'next/link'
import { ServiceHero } from '@/components/sections/services/ServiceHero'
import { ShippingTabs } from '@/components/sections/services/ShippingTabs'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = pageMeta({
  title: 'Shipping Services — Trucking, Rail, Cargo, Tanker — Blue Gate',
  description:
    'Multi-modal petroleum logistics from Rotterdam: ADR road tankers, ISO tank rail, containerised deep-sea cargo, and marine tanker co-ordination from VLCC to coastal.',
  path: 'services/shipping',
})

export default function ShippingPage() {
  return (
    <main>
      <ServiceHero
        label="Shipping Services"
        headlinePlain="Move Product"
        headlineItalic="Without Friction."
        subdeck="Four transport modes — road, rail, cargo, and marine — managed from a single operations desk in Rotterdam with full documentation on every movement."
        imageUrl="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Tabbed mode sections */}
      <section className="bg-page py-20 md:py-28" aria-label="Shipping modes">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
              Four Transport Modes
            </p>
            <h2
              className="font-serif font-normal text-ink leading-tight mb-12"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              One Operations Desk. <em className="text-brand">All Modes Covered.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <ShippingTabs />
          </ScrollReveal>
        </div>
      </section>

      {/* Integrated logistics narrative */}
      <section className="bg-grad-1 py-20 md:py-28" aria-label="Integrated logistics">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-14 items-start">
            <ScrollReveal>
              <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
                Integrated by Design
              </p>
              <h2
                className="font-serif font-normal text-ink leading-tight"
                style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
              >
                Four Modes. <em className="text-brand">One Chain.</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-5 font-sans text-base text-muted-foreground leading-relaxed">
                <p>
                  The four transport modes are not independent services — they are legs of the
                  same product movement. A VLCC discharges at Rotterdam. The product enters storage,
                  passes through the laboratory, and is released under an inspection certificate.
                  From there, it moves by road tanker to a regional depot, by ISO tank container to
                  an inland industrial customer, or by coastal tanker to a UK or Scandinavian port.
                </p>
                <p>
                  All four legs are co-ordinated from Blue Gate&apos;s Rotterdam operations desk. The
                  same custody chain, the same documentation standard, and the same 24-hour contact
                  commitment applies whether the movement is a 28,000 L road tanker or a 150,000 DWT
                  Suezmax parcel. Clients deal with one contact for scheduling, documentation, and
                  claim handling — regardless of mode.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-page py-16 md:py-20 border-t border-brand/[0.10]"
        aria-label="Plan a shipment"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <ScrollReveal>
            <h2
              className="font-serif font-normal text-ink leading-tight mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            >
              Ready to Plan <em className="text-brand">a Shipment?</em>
            </h2>
            <p className="font-sans text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Provide origin, destination, product grade, and required delivery window. Our logistics
              team will confirm mode availability and indicative transit times within 24 hours.
            </p>
            <Button
              asChild
              className="bg-brand text-white hover:bg-brand-steel h-11 px-8 text-sm font-medium"
            >
              <Link href="/contact?intent=quote">Plan a Shipment →</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
