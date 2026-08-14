import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import Image from 'next/image';
import { Policy } from '@/components/sections/hse/Policy';
import { FinalCta } from '@/components/sections/FinalCta';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const HERO_IMAGE = '/images/hero-hse.jpg';

export const metadata: Metadata = pageMeta({
  title: 'Health, Safety & Environment | Blue Gate Tank Farm',
  description:
    'How Blue Gate Tank Farm approaches health, safety and environmental responsibility when coordinating petroleum logistics and commercial support for energy-sector clients.',
  path: 'hse',
});

export default function HsePage() {
  return (
    <>
      {/* 1. Hero */}
      <section
        className="relative overflow-hidden py-40 md:py-56"
        aria-label="Health, safety and environment"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src={HERO_IMAGE}
            alt="Safety inspection equipment at an industrial petroleum facility"
            fill
            priority
            quality={85}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="bg-page/88 absolute inset-0" aria-hidden="true" />
          <div
            className="from-brand/[0.18] absolute inset-0 bg-gradient-to-bl via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="text-brand/70 mb-6 font-sans text-[11px] font-medium tracking-[0.14em] uppercase">
              Health, Safety &amp; Environment
            </p>
            <h1
              className="text-ink mb-8 font-serif leading-none font-normal tracking-tight"
              style={{ fontSize: 'clamp(48px, 7vw, 92px)' }}
            >
              Safety is <em className="text-brand">Non-Negotiable.</em>
            </h1>
            <p className="text-ink/65 max-w-2xl font-sans text-lg leading-relaxed md:text-xl">
              As a newly established business, Blue Gate Tank Farm is direct about its HSE approach:
              we work within applicable regulation and within the specific safety procedures of any
              terminal, port or marine facility involved in a given engagement, and we expect the
              same discipline from every partner we work with.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. HSE approach — 4 principles */}
      <Policy />

      {/* 3. Working with partner facilities */}
      <section className="bg-grad-2 py-20 md:py-28" aria-label="Working with partner facilities">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
              Working With Partner Facilities
            </p>
            <h2
              className="text-ink mb-8 font-serif leading-tight font-normal"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              Their Procedures. <em className="text-brand">Our Diligence.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-muted-foreground max-w-3xl space-y-5 font-sans text-base leading-relaxed">
              <p>
                Blue Gate Tank Farm does not operate its own terminal or storage infrastructure.
                Where we coordinate access to storage, terminal or marine services, physical
                operations are governed by the applicable host facility&apos;s own safety,
                environmental and permit-to-work procedures — not by a Blue Gate Tank Farm-issued
                standard.
              </p>
              <p>
                Our role is to work within that framework: confirming documentation is complete,
                communication between parties is clear, and coordination around scheduling and
                access is handled responsibly for every engagement.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Final CTA */}
      <FinalCta
        heading={
          <>
            Questions About Our <em className="text-brand">HSE Approach?</em>
          </>
        }
        subline="Our team responds within one business day to any HSE-related enquiry."
        primaryCta={{ label: 'Contact Us →', href: '/contact?intent=hse' }}
        secondaryCta={{ label: 'About Blue Gate Tank Farm', href: '/about' }}
      />
    </>
  );
}
