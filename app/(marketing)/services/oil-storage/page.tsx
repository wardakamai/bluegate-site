import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMeta } from '@/lib/meta';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';
import Link from 'next/link';
import { Layers, Waves, Shield, Thermometer } from 'lucide-react';
import { ServiceHero } from '@/components/sections/services/ServiceHero';
import { ServiceFeatureGrid } from '@/components/sections/services/ServiceFeatureGrid';
import { OilStorageAccordion } from '@/components/sections/services/OilStorageAccordion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = pageMeta({
  title: 'Petroleum Storage Capacity & Tank Leasing | Blue Gate Tank Farm',
  description:
    'Blue Gate Tank Farm supports petroleum storage capacity enquiries and tank leasing for EN590, Jet A1, D6 and crude oil, for short and long-term requirements.',
  path: 'services/oil-storage',
});

const TANK_TYPES = [
  {
    icon: Layers,
    title: 'Fixed-Roof Tanks',
    body: 'Commonly used for low-vapour-pressure products and aviation-grade fuels requiring nitrogen blanketing.',
  },
  {
    icon: Waves,
    title: 'Floating-Roof Tanks',
    body: 'External floating-roof tanks with pontoon seals are a common configuration for diesel and crude storage.',
  },
  {
    icon: Shield,
    title: 'Internal Floating-Roof Tanks',
    body: 'A fixed outer shell with an internal floating pan is a common configuration for sensitive distillate and blendstock grades.',
  },
  {
    icon: Thermometer,
    title: 'Heated Tanks',
    body: 'Steam or thermal-oil heated fixed-roof tanks are typically used for high-viscosity fuel oils and heavy crude.',
  },
];

const SERVICE_JSONLD = serviceSchema({
  name: 'Petroleum Storage Services',
  description:
    'Blue Gate Tank Farm coordinates petroleum storage access and related commercial support for clients working with Jet A1, Diesel EN590, D6, and Crude Oil.',
  serviceType: 'Petroleum Storage Coordination',
  path: '/services/oil-storage',
});
const BREADCRUMB_JSONLD = breadcrumbSchema([
  { name: 'Home', url: 'https://bluegou.com' },
  { name: 'Services', url: 'https://bluegou.com/services' },
  { name: 'Oil Storage', url: 'https://bluegou.com/services/oil-storage' },
]);

export default function OilStoragePage() {
  return (
    <>
      <Script
        id="oil-storage-service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }}
      />
      <Script
        id="oil-storage-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }}
      />
      <main>
        <ServiceHero
          label="Petroleum Storage Services"
          headlinePlain="Petroleum Storage Capacity for"
          headlineItalic="Short and Long-Term Requirements."
          subdeck="Blue Gate Tank Farm supports petroleum storage capacity enquiries and tank leasing for EN590, Jet A1, D6 and crude oil, coordinating access and commercial terms for each requirement."
          imageUrl="/images/service-oil-storage.jpg"
          imageAlt="Oil tank farm and petroleum storage infrastructure"
        />

        {/* Intro paragraph */}
        <section
          className="bg-page border-border-soft border-b py-10 md:py-14"
          aria-label="Storage overview"
        >
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-ink/70 max-w-3xl font-sans text-base leading-relaxed">
              Blue Gate Tank Farm provides commercial support and coordination for clients seeking
              petroleum storage access. Service scope, available capacity and commercial terms are
              confirmed case by case and set out in the applicable executed agreement. Make an
              enquiry to discuss your product, volume and timeline.
            </p>
          </div>
        </section>

        {/* Tank typology — general industry information */}
        <section className="bg-page py-20 md:py-28" aria-label="Tank types">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
                Tank Infrastructure
              </p>
              <h2
                className="text-ink mb-4 font-serif leading-tight font-normal"
                style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
              >
                Common Tank <em className="text-brand">Configurations.</em>
              </h2>
              <p className="text-muted-foreground mb-12 max-w-2xl font-sans text-sm leading-relaxed">
                General information on tank types commonly used for petroleum storage across the
                industry. This describes typical infrastructure characteristics, not a specific
                facility operated by Blue Gate Tank Farm.
              </p>
            </ScrollReveal>
            <ServiceFeatureGrid items={TANK_TYPES} />
          </div>
        </section>

        {/* Access arrangements */}
        <section className="bg-page py-20 md:py-28" aria-label="Access arrangements">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
                Commercial Terms
              </p>
              <h2
                className="text-ink mb-12 font-serif leading-tight font-normal"
                style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
              >
                Access Arrangements. <em className="text-brand">Discussed Case by Case.</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <OilStorageAccordion />
            </ScrollReveal>
          </div>
        </section>

        {/* CTA band */}
        <section
          className="bg-grad-1 border-brand/[0.10] border-t py-16 md:py-20"
          aria-label="Make an enquiry"
        >
          <div className="mx-auto max-w-7xl px-6 text-center">
            <ScrollReveal>
              <h2
                className="text-ink mb-4 font-serif leading-tight font-normal"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
              >
                Ready to Discuss <em className="text-brand">Your Requirements?</em>
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-xl font-sans text-base leading-relaxed">
                Provide your product grade, volume requirement, and storage duration. Our team will
                respond within one business day to discuss available options and commercial terms.
              </p>
              <Button
                asChild
                className="bg-brand hover:bg-brand-steel h-11 px-8 text-sm font-medium text-white"
              >
                <Link href="/contact?intent=quote">Submit Storage Requirement →</Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
