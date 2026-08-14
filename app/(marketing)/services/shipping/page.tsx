import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMeta } from '@/lib/meta';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';
import Link from 'next/link';
import { ServiceHero } from '@/components/sections/services/ServiceHero';
import { ShippingTabs } from '@/components/sections/services/ShippingTabs';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = pageMeta({
  title: 'Oil Tanker Chartering & Marine Logistics | Blue Gate',
  description:
    'Blue Gate Tank Farm coordinates oil tanker chartering and petroleum marine logistics, plus road, rail and cargo movement. Based in Rotterdam. Make an enquiry.',
  path: 'services/shipping',
});

const SERVICE_JSONLD = serviceSchema({
  name: 'Oil Tanker Chartering & Marine Logistics',
  description:
    'Oil tanker chartering and petroleum marine logistics coordination from Rotterdam: road tankers, rail, cargo, and marine tanker logistics. ADR-compliant.',
  serviceType: 'Petroleum Shipping & Marine Logistics',
  path: '/services/shipping',
});
const BREADCRUMB_JSONLD = breadcrumbSchema([
  { name: 'Home', url: 'https://bluegou.com' },
  { name: 'Services', url: 'https://bluegou.com/services' },
  { name: 'Shipping', url: 'https://bluegou.com/services/shipping' },
]);

export default function ShippingPage() {
  return (
    <>
      <Script
        id="shipping-service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }}
      />
      <Script
        id="shipping-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }}
      />
      <main>
        <ServiceHero
          label="Marine Logistics"
          headlinePlain="Oil Tanker Chartering and"
          headlineItalic="Marine Logistics."
          subdeck="Blue Gate Tank Farm coordinates oil tanker chartering and marine logistics, working directly with shipowners and operators — alongside road, rail and cargo movement, all from a single point of contact in Rotterdam."
          imageUrl="/images/service-shipping.jpg"
          imageAlt="Oil tanker at an industrial marine terminal"
        />

        {/* Tabbed mode sections */}
        <section className="bg-page py-20 md:py-28" aria-label="Shipping modes">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
                Four Transport Modes
              </p>
              <h2
                className="text-ink mb-12 font-serif leading-tight font-normal"
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
            <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[2fr_3fr]">
              <ScrollReveal>
                <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
                  Integrated by Design
                </p>
                <h2
                  className="text-ink font-serif leading-tight font-normal"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
                >
                  Four Modes. <em className="text-brand">One Chain.</em>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="text-muted-foreground space-y-5 font-sans text-base leading-relaxed">
                  <p>
                    The four transport modes are not independent services — they are legs of the
                    same product movement. A VLCC discharges at Rotterdam. The product enters
                    storage, passes through the laboratory, and is released under an inspection
                    certificate. From there, it moves by road tanker to a regional depot, by ISO
                    tank container to an inland industrial customer, or by coastal tanker to a UK or
                    Scandinavian port.
                  </p>
                  <p>
                    All four legs are co-ordinated from Blue Gate&apos;s Rotterdam operations desk.
                    The same custody chain, the same documentation standard, and the same 24-hour
                    contact commitment applies whether the movement is a 28,000 L road tanker or a
                    150,000 DWT Suezmax parcel. Clients deal with one contact for scheduling,
                    documentation, and claim handling — regardless of mode.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="bg-page border-brand/[0.10] border-t py-16 md:py-20"
          aria-label="Plan a shipment"
        >
          <div className="mx-auto max-w-7xl px-6 text-center">
            <ScrollReveal>
              <h2
                className="text-ink mb-4 font-serif leading-tight font-normal"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
              >
                Ready to Plan <em className="text-brand">a Shipment?</em>
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-xl font-sans text-base leading-relaxed">
                Provide origin, destination, product grade, and required delivery window. Our
                logistics team will confirm mode availability and indicative transit times within 24
                hours.
              </p>
              <Button
                asChild
                className="bg-brand hover:bg-brand-steel h-11 px-8 text-sm font-medium text-white"
              >
                <Link href="/contact?intent=quote">Plan a Shipment →</Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
