import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { pageMeta } from '@/lib/meta';
import { breadcrumbSchema } from '@/lib/schema';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = pageMeta({
  title: 'What Is an Oil Tank Farm? Storage, Transfer & Leasing Guide',
  description:
    'A plain-language guide to what an oil tank farm is, how petroleum storage and transfer works, and what information is needed to request tank storage capacity.',
  path: 'guides/what-is-an-oil-tank-farm',
});

const BREADCRUMB_JSONLD = breadcrumbSchema([
  { name: 'Home', url: 'https://bluegou.com' },
  { name: 'Guides', url: 'https://bluegou.com/guides' },
  {
    name: 'What Is an Oil Tank Farm?',
    url: 'https://bluegou.com/guides/what-is-an-oil-tank-farm',
  },
]);

const FAQS = [
  {
    q: 'Is tank farm also written as tankfarm?',
    a: 'Yes. Tank farm is the standard spelling, while tankfarm is sometimes used as a compact industry variation. Both generally refer to a bulk-liquid storage facility containing multiple storage tanks.',
  },
  {
    q: "What's the difference between an oil terminal and a tank farm?",
    a: 'The terms are often used interchangeably. "Tank farm" typically emphasises the storage tanks themselves, while "terminal" can also include the marine, rail, road and pipeline infrastructure used to move product in and out. In practice, most facilities combine both.',
  },
  {
    q: 'What is the difference between short-term and long-term tank storage?',
    a: 'Short-term storage is generally used for seasonal positioning, arbitrage windows, or product awaiting onward transfer, typically on a month-to-month basis. Long-term storage involves a sustained commitment, usually under an annual or multi-year agreement with more predictable throughput.',
  },
  {
    q: 'What information do I need to request storage capacity?',
    a: 'Typically: the product and specification, the quantity and unit of measurement, the preferred port or market, the requested start date, the storage duration, and any vessel or delivery details. Submitting this information starts a commercial review — it does not guarantee acceptance, capacity or availability.',
  },
];

export default function WhatIsAnOilTankFarmGuide() {
  return (
    <>
      <Script
        id="guide-tank-farm-bc-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }}
      />
      <main>
        <section className="bg-grad-2 py-24 md:py-32" aria-label="Guide hero">
          <div className="mx-auto max-w-4xl px-6">
            <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
              Guide
            </p>
            <h1
              className="text-ink mb-6 font-serif leading-tight font-normal tracking-tight"
              style={{ fontSize: 'clamp(36px, 5.5vw, 64px)' }}
            >
              What Is an <em className="text-brand">Oil Tank Farm?</em>
            </h1>
            <p className="text-ink/65 max-w-2xl font-sans text-lg leading-relaxed">
              A plain-language introduction to oil tank farms, petroleum storage and transfer, and
              what a buyer or seller needs to prepare before requesting tank storage capacity.
            </p>
          </div>
        </section>

        <section className="bg-page py-16 md:py-20" aria-label="Guide content">
          <div className="mx-auto max-w-4xl space-y-14 px-6">
            <ScrollReveal>
              <div className="text-ink/75 space-y-4 font-sans text-base leading-relaxed">
                <h2 className="text-ink mb-2 font-serif text-2xl">Definition</h2>
                <p>
                  An oil tank farm is a facility consisting of multiple large storage tanks used to
                  hold petroleum products in bulk — including crude oil, diesel, aviation fuel and
                  fuel oil — between production, import, or blending, and their eventual sale,
                  export or onward distribution. Tank farms are typically located at or near ports,
                  refineries or pipeline hubs to allow product to be received and dispatched by
                  vessel, pipeline, rail or road.
                </p>
                <p>
                  The terms &ldquo;tank farm,&rdquo; &ldquo;oil terminal&rdquo; and &ldquo;storage
                  terminal&rdquo; are often used interchangeably in the industry, though a
                  &ldquo;terminal&rdquo; more precisely refers to the wider site including marine
                  berths, pipeline connections and loading infrastructure, of which the tank farm
                  (the tanks themselves) is a core part.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="text-ink/75 space-y-4 font-sans text-base leading-relaxed">
                <h2 className="text-ink mb-2 font-serif text-2xl">Common Products Stored</h2>
                <p>
                  Tank farms commonly store: crude oil, diesel (including EN590-specification
                  ultra-low-sulphur diesel), aviation turbine fuel (Jet A1), and fuel oils including
                  heavier residual grades such as D6. Different products require different tank
                  configurations — see{' '}
                  <Link href="/products" className="text-brand hover:text-brand-steel underline">
                    our product pages
                  </Link>{' '}
                  for specification detail on each.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="text-ink/75 space-y-4 font-sans text-base leading-relaxed">
                <h2 className="text-ink mb-2 font-serif text-2xl">General Tank Types</h2>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-ink">Fixed-roof tanks</strong> — commonly used for
                    lower-vapour-pressure products and aviation fuels requiring nitrogen blanketing.
                  </li>
                  <li>
                    <strong className="text-ink">Floating-roof tanks</strong> — a roof that sits on
                    the product surface, commonly used for diesel and crude to reduce vapour loss.
                  </li>
                  <li>
                    <strong className="text-ink">Internal floating-roof tanks</strong> — a fixed
                    outer shell with an internal floating pan, often used for sensitive distillate
                    grades.
                  </li>
                  <li>
                    <strong className="text-ink">Heated tanks</strong> — steam or thermal-oil heated
                    tanks used for high-viscosity fuel oils and heavy crude that would otherwise be
                    too thick to pump.
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="text-ink/75 space-y-4 font-sans text-base leading-relaxed">
                <h2 className="text-ink mb-2 font-serif text-2xl">
                  Storage, Transfer and Throughput
                </h2>
                <p>
                  Product typically moves through a tank farm in stages: vessel-to-tank transfer
                  (discharging a ship&apos;s cargo into shore tanks), storage for the agreed period,
                  and tank-to-vessel loading (loading a ship for onward transport). Product can also
                  move tank-to-tank for blending or specification adjustment.
                  &ldquo;Throughput&rdquo; refers to the overall volume moving through a facility
                  over a given period, as distinct from the volume held in storage at any one time.
                </p>
                <p>
                  &ldquo;Product receipt&rdquo; describes the process of formally accepting and
                  recording incoming product, usually verified by independent inspection and
                  measurement before it is credited to the receiving party&apos;s account.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="text-ink/75 space-y-4 font-sans text-base leading-relaxed">
                <h2 className="text-ink mb-2 font-serif text-2xl">
                  Short-Term vs. Long-Term Storage
                </h2>
                <p>
                  Short-term storage generally suits seasonal positioning, arbitrage windows, or
                  product awaiting onward transfer, typically arranged month to month. Long-term
                  storage involves a sustained commitment — usually under an annual or multi-year
                  agreement — better suited to clients with recurring or predictable volume.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="text-ink/75 space-y-4 font-sans text-base leading-relaxed">
                <h2 className="text-ink mb-2 font-serif text-2xl">
                  What Information Is Needed to Request Storage Capacity
                </h2>
                <p>Buyers and sellers approaching a storage provider are typically asked for:</p>
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>The product and its specification</li>
                  <li>The quantity, with a clear unit of measurement</li>
                  <li>The preferred port or market</li>
                  <li>The requested start date</li>
                  <li>The intended storage duration</li>
                  <li>Vessel status and expected arrival, where applicable</li>
                  <li>Any transfer or throughput requirements</li>
                </ul>
                <p>
                  Submitting this information starts a commercial and operational review — it does
                  not, on its own, guarantee acceptance, capacity or availability.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="text-ink/75 space-y-4 font-sans text-base leading-relaxed">
                <h2 className="text-ink mb-2 font-serif text-2xl">
                  Verification and Due Diligence
                </h2>
                <p>
                  Petroleum trading and storage transactions are a well-known target for fraud,
                  including fabricated storage documents and requests for upfront fees without a
                  verifiable counterparty. As a general precaution, buyers and sellers should
                  independently verify a storage provider&apos;s registration, request references
                  where appropriate, and be cautious of any arrangement that asks for payment before
                  a properly executed, verifiable agreement is in place.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-ink mb-6 font-serif text-2xl">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {FAQS.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="border-border-soft bg-bg rounded-lg border px-6"
                    >
                      <AccordionTrigger className="text-ink py-5 text-left font-sans text-sm font-medium hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 font-sans text-sm leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="border-brand/[0.16] bg-grad-1 rounded-xl border p-8">
                <h2 className="text-ink mb-3 font-serif text-2xl">Related Pages</h2>
                <div className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm">
                  <Link href="/" className="text-brand hover:text-brand-steel underline">
                    Oil tank farm storage services
                  </Link>
                  <Link
                    href="/services/oil-storage"
                    className="text-brand hover:text-brand-steel underline"
                  >
                    Petroleum storage capacity &amp; tank leasing
                  </Link>
                  <Link href="/terminal" className="text-brand hover:text-brand-steel underline">
                    Rotterdam, Houston &amp; Jurong markets
                  </Link>
                  <Link
                    href="/products/diesel-en590"
                    className="text-brand hover:text-brand-steel underline"
                  >
                    EN590 tank farm storage
                  </Link>
                  <Link
                    href="/products/jet-a1"
                    className="text-brand hover:text-brand-steel underline"
                  >
                    Jet A1 tank farm storage
                  </Link>
                  <Link
                    href="/products/virgin-fuel-oil-d6"
                    className="text-brand hover:text-brand-steel underline"
                  >
                    D6 fuel oil tank farm
                  </Link>
                  <Link
                    href="/products/crude-oil"
                    className="text-brand hover:text-brand-steel underline"
                  >
                    Crude oil tank farm
                  </Link>
                  <Link href="/contact" className="text-brand hover:text-brand-steel underline">
                    Submit a tank farm requirement
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="pt-4 text-center">
                <Button
                  asChild
                  className="bg-brand text-primary-foreground hover:bg-brand-steel h-11 px-8 text-sm font-medium"
                >
                  <Link href="/contact?intent=quote">Submit Storage Requirement →</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
