import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import Image from 'next/image';
import { Pillars } from '@/components/sections/sustainability/Pillars';
import { Community } from '@/components/sections/sustainability/Community';
import { FinalCta } from '@/components/sections/FinalCta';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const HERO_IMAGE = '/images/hero-sustainability.jpg';

export const metadata: Metadata = pageMeta({
  title: 'Sustainability | Blue Gate Tank Farm',
  description:
    'How Blue Gate Tank Farm approaches responsible business practice as a newly established petroleum logistics and commercial support business based in Rotterdam.',
  path: 'sustainability',
});

export default function SustainabilityPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden py-40 md:py-56" aria-label="Sustainability">
        <div className="absolute inset-0 -z-10">
          <Image
            src={HERO_IMAGE}
            alt="Industrial petroleum infrastructure at a port facility"
            fill
            priority
            quality={85}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="bg-page/84 absolute inset-0" aria-hidden="true" />
          <div
            className="from-brand/[0.14] absolute inset-0 bg-gradient-to-tr via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="text-brand/70 mb-6 font-sans text-[11px] font-medium tracking-[0.14em] uppercase">
              Responsible Practice
            </p>
            <h1
              className="text-ink mb-8 font-serif leading-none font-normal tracking-tight"
              style={{ fontSize: 'clamp(48px, 7vw, 92px)' }}
            >
              Building Responsibly <em className="text-brand">From Day One.</em>
            </h1>
            <p className="text-ink/65 max-w-2xl font-sans text-lg leading-relaxed md:text-xl">
              As a newly established business, Blue Gate Tank Farm does not have a legacy
              sustainability track record to report on yet. What we can commit to is how we work:
              prioritising responsible partners, efficient coordination, and transparent practice
              from the outset.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Principles */}
      <Pillars />

      {/* 3. Community */}
      <Community />

      {/* 4. Final CTA */}
      <FinalCta
        heading={
          <>
            Questions About Our <em className="text-brand">Approach?</em>
          </>
        }
        subline="Our team responds within one business day to any sustainability-related enquiry."
        primaryCta={{ label: 'Contact Us →', href: '/contact?intent=esg' }}
        secondaryCta={{ label: 'About Blue Gate Tank Farm →', href: '/about' }}
      />
    </>
  );
}
