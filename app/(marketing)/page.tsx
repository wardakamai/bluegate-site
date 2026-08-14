import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMeta } from '@/lib/meta';
import { localBusinessSchema } from '@/lib/schema';
import { Hero } from '@/components/sections/Hero';
import { HeroStats } from '@/components/sections/HeroStats';
import { TerminalNetwork } from '@/components/sections/TerminalNetwork';
import { MarketTicker } from '@/components/sections/MarketTicker';
import { Services } from '@/components/sections/Services';
import { SubmissionSteps } from '@/components/sections/SubmissionSteps';
import { HorizontalScroll } from '@/components/sections/HorizontalScroll';
import { StrategicLocations } from '@/components/sections/StrategicLocations';
import { SustainabilityTriptych } from '@/components/sections/SustainabilityTriptych';
import { FinalCta } from '@/components/sections/FinalCta';

// ISR: rebuild the home page every 15 minutes so live prices stay fresh
export const revalidate = 900;

export const metadata: Metadata = pageMeta({
  title: 'Oil Tank Farm Storage Services | Blue Gate Tank Farm',
  description:
    'Blue Gate Tank Farm provides petroleum tank-storage services and capacity enquiries for EN590, Jet A1, D6 and crude oil across major energy markets.',
  path: '',
});

export default function HomePage() {
  return (
    <>
      <Script
        id="local-business-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <section id="hero" aria-label="Hero" className="scroll-mt-24">
        <Hero />
        <HeroStats />
      </section>

      <section id="terminals" aria-label="Terminal network" className="scroll-mt-24">
        <TerminalNetwork />
      </section>

      <section id="markets" aria-label="Market prices" className="scroll-mt-24">
        <MarketTicker />
      </section>

      <section id="services" aria-label="Services" className="scroll-mt-24">
        <Services />
      </section>

      <SubmissionSteps />

      <section id="products" aria-label="Products">
        <HorizontalScroll />
      </section>

      <section id="locations" aria-label="Locations" className="scroll-mt-24">
        <StrategicLocations />
      </section>

      <section id="sustainability" aria-label="Sustainability" className="scroll-mt-24">
        <SustainabilityTriptych />
      </section>

      <FinalCta
        heading={
          <>
            Make an <em className="text-brand">Enquiry.</em>
          </>
        }
        subline="Our team responds within 24 hours. Tell us your product, your volume, and your timeline, and we will discuss how we can support your requirements."
        primaryCta={{ label: 'Contact Us →', href: '/contact?intent=quote' }}
        secondaryCta={{ label: 'Our Storage Services', href: '/services/oil-storage' }}
      />
    </>
  );
}
