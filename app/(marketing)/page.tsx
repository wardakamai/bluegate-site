import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { TerminalNetwork } from '@/components/sections/TerminalNetwork'
import { MarketTicker } from '@/components/sections/MarketTicker'
import { Services } from '@/components/sections/Services'
import { FeaturedProducts } from '@/components/sections/FeaturedProducts'
import { StrategicLocations } from '@/components/sections/StrategicLocations'
import { SustainabilityTriptych } from '@/components/sections/SustainabilityTriptych'
import { FinalCta } from '@/components/sections/FinalCta'

// ISR: rebuild the home page every 15 minutes so live prices stay fresh
export const revalidate = 900

export const metadata: Metadata = {
  title: 'Blue Gate Shipping & Trade B.V. — Oil Storage Rotterdam',
  description:
    'ISO-certified storage of Jet A1, EN590, D6 and crude oil in Rotterdam. 60+ years of bulk liquid expertise.',
  openGraph: {
    title: 'Blue Gate Shipping & Trade B.V. — Oil Storage Rotterdam',
    description:
      'ISO-certified storage of Jet A1, EN590, D6 and crude oil in Rotterdam. 60+ years of bulk liquid expertise.',
    images: [{ url: '/images/og-home.jpg', width: 1200, height: 630 }],
  },
}

export default function HomePage() {
  return (
    <>
      <section id="hero" aria-label="Hero" className="scroll-mt-24">
        <Hero />
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

      <section id="products" aria-label="Products" className="scroll-mt-24">
        <FeaturedProducts />
      </section>

      <section id="locations" aria-label="Locations" className="scroll-mt-24">
        <StrategicLocations />
      </section>

      <section id="sustainability" aria-label="Sustainability" className="scroll-mt-24">
        <SustainabilityTriptych />
      </section>

      <FinalCta
        heading={<>Reserve Your <em className="text-brand">Capacity.</em></>}
        subline="Our operations team responds within 24 hours. Bring your volume, your product, and your timeline — we will engineer the storage solution around them."
        primaryCta={{ label: 'Contact Operations →', href: '/contact?intent=quote' }}
        secondaryCta={{ label: 'View Storage Facility', href: '/storage-facility' }}
      />
    </>
  )
}
