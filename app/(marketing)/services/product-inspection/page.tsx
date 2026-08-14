import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMeta } from '@/lib/meta';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';
import Link from 'next/link';
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
} from 'lucide-react';
import { ServiceHero } from '@/components/sections/services/ServiceHero';
import { ServiceFeatureGrid } from '@/components/sections/services/ServiceFeatureGrid';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = pageMeta({
  title: 'Petroleum Product Inspection | Blue Gate Rotterdam',
  description:
    'Independent petroleum product inspection at Blue Gate Rotterdam oil terminal. ASTM D4057 sampling, quantity and quality surveys, certificates issued same day.',
  path: 'services/product-inspection',
});

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
];

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
];

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
];

const DOCS_ISSUED = [
  'Certificate of Quality (CoQ)',
  'Certificate of Quantity (CofQ)',
  'Bill of Lading appendix / Ullage report',
  'Composite sampling report',
  'Seal certificate (load and discharge)',
  'Draft survey report (marine cargoes)',
  'Non-conformance notice (if applicable)',
];

const SERVICE_JSONLD = serviceSchema({
  name: 'Petroleum Product Inspection',
  description:
    'Independent petroleum product inspection at Blue Gate Rotterdam oil terminal. ASTM D4057 sampling, quantity surveys, quality measurements, and signed certificates.',
  serviceType: 'Petroleum Inspection',
  path: '/services/product-inspection',
});
const BREADCRUMB_JSONLD = breadcrumbSchema([
  { name: 'Home', url: 'https://bluegou.com' },
  { name: 'Services', url: 'https://bluegou.com/services' },
  { name: 'Product Inspection', url: 'https://bluegou.com/services/product-inspection' },
]);

export default function ProductInspectionPage() {
  return (
    <>
      <Script
        id="inspection-service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }}
      />
      <Script
        id="inspection-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }}
      />
      <main>
        <ServiceHero
          label="Product Inspection"
          headlinePlain="Independent Inspection."
          headlineItalic="Verifiable Outcomes."
          subdeck="Pre-loading through to certification — every parcel inspected to ASTM D4057 and ISO 3170 with quantity surveys, sampling, and signed certificates issued on completion."
          imageUrl="/images/service-inspection.jpg"
          imageAlt="Blue Gate petroleum product inspection at Rotterdam tank farm"
        />

        {/* Inspection workflow */}
        <section className="bg-page py-20 md:py-28" aria-label="Inspection workflow">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
                Five-Stage Workflow
              </p>
              <h2
                className="text-ink mb-14 font-serif leading-tight font-normal"
                style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
              >
                From Receipt to <em className="text-brand">Signed Certificate.</em>
              </h2>
            </ScrollReveal>

            {/* Desktop: horizontal steps */}
            <ScrollReveal delay={0.08}>
              <div className="relative hidden md:block" aria-hidden="false">
                {/* Connecting line */}
                <div
                  className="absolute top-6 right-0 left-0 h-px"
                  style={{ background: 'rgba(208,0,24,0.20)' }}
                  aria-hidden="true"
                />
                <ol className="relative grid grid-cols-5 gap-4">
                  {WORKFLOW_STEPS.map((step) => {
                    const Icon = step.icon;
                    return (
                      <li key={step.num} className="flex flex-col items-center text-center">
                        <div className="bg-bg border-brand/30 relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border">
                          <Icon size={20} className="text-brand" aria-hidden="true" />
                        </div>
                        <span className="text-brand/60 mb-1 font-mono text-xs">0{step.num}</span>
                        <span className="text-ink mb-2 font-serif text-base font-normal">
                          {step.label}
                        </span>
                        <p className="text-muted-foreground font-sans text-xs leading-relaxed">
                          {step.desc}
                        </p>
                      </li>
                    );
                  })}
                </ol>
              </div>

              {/* Mobile: vertical steps */}
              <ol className="space-y-6 md:hidden">
                {WORKFLOW_STEPS.map((step) => {
                  const Icon = step.icon;
                  return (
                    <li key={step.num} className="flex items-start gap-4">
                      <div className="bg-bg border-brand/30 mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border">
                        <Icon size={18} className="text-brand" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="text-brand/60 mb-0.5 block font-mono text-[10px]">
                          0{step.num}
                        </span>
                        <span className="text-ink mb-1 block font-serif text-base font-normal">
                          {step.label}
                        </span>
                        <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </ScrollReveal>
          </div>
        </section>

        {/* Sampling protocols */}
        <section className="bg-grad-1 py-20 md:py-28" aria-label="Sampling protocols">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
              <ScrollReveal>
                <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
                  Sampling Protocols
                </p>
                <h2
                  className="text-ink mb-6 font-serif leading-tight font-normal"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
                >
                  ASTM D4057 / <em className="text-brand">ISO 3170 Methods.</em>
                </h2>
                <p className="text-muted-foreground mb-6 font-sans text-base leading-relaxed">
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
                        className="bg-brand mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        aria-hidden="true"
                      />
                      <span className="text-muted-foreground font-sans text-sm">{technique}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              {/* Quantity surveys grid */}
              <ScrollReveal delay={0.1}>
                <p className="text-brand/70 mb-6 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
                  Quantity Survey Methods
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {QUANTITY_SURVEYS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="bg-bg border-brand/[0.12] rounded-xl border p-5"
                      >
                        <Icon size={18} className="text-brand mb-3" aria-hidden="true" />
                        <p className="text-ink mb-1.5 font-serif text-base font-normal">
                          {item.title}
                        </p>
                        <p className="text-muted-foreground font-sans text-xs leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    );
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
              <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
                Quality Parameters
              </p>
              <h2
                className="text-ink mb-12 font-serif leading-tight font-normal"
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
            <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
              <ScrollReveal>
                <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
                  Documentation Issued
                </p>
                <h2
                  className="text-ink mb-6 font-serif leading-tight font-normal"
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
                      <span className="text-muted-foreground font-sans text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                {/* TODO: confirm partnership status with client */}
                <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
                  Inspector Partners
                </p>
                <p className="text-muted-foreground mb-6 font-sans text-sm leading-relaxed">
                  Blue Gate works with internationally accredited independent inspection bodies.
                  Clients may nominate their preferred inspector or request arrangement through our
                  operations team.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['SGS', 'Intertek', 'Bureau Veritas'].map((partner) => (
                    <span
                      key={partner}
                      className="text-ink border-brand/20 bg-brand/[0.06] rounded-lg border px-4 py-2 font-mono text-sm font-medium"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mt-4 font-sans text-[10px] italic">
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
          className="bg-page border-brand/[0.10] border-t py-16 md:py-20"
          aria-label="Request inspection"
        >
          <div className="mx-auto max-w-7xl px-6 text-center">
            <ScrollReveal>
              <h2
                className="text-ink mb-4 font-serif leading-tight font-normal"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
              >
                Need Inspection <em className="text-brand">Coverage?</em>
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-xl font-sans text-base leading-relaxed">
                Provide cargo details, port of loading or discharge, and intended transfer date. Our
                operations team will confirm inspector deployment within 24 hours.
              </p>
              <Button
                asChild
                className="bg-brand hover:bg-brand-steel h-11 px-8 text-sm font-medium text-white"
              >
                <Link href="/contact?intent=quote">Request Inspection →</Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
