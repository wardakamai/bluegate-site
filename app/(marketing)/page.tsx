import type { Metadata } from 'next'
import Script from 'next/script'
import { pageMeta } from '@/lib/meta'
import { localBusinessSchema } from '@/lib/schema'
import { Hero } from '@/components/sections/Hero'
import { HeroStats } from '@/components/sections/HeroStats'
import { TerminalNetwork } from '@/components/sections/TerminalNetwork'
import { MarketTicker } from '@/components/sections/MarketTicker'
import { Services } from '@/components/sections/Services'
import { FeaturedProducts } from '@/components/sections/FeaturedProducts'
import { StrategicLocations } from '@/components/sections/StrategicLocations'
import { SustainabilityTriptych } from '@/components/sections/SustainabilityTriptych'
import { FinalCta } from '@/components/sections/FinalCta'

// ISR: rebuild the home page every 15 minutes so live prices stay fresh
export const revalidate = 900

export const metadata: Metadata = pageMeta({
  title: 'Oil Tank Farm Rotterdam — Blue Gate Shipping & Trade B.V.',
  description:
    'ISO-certified oil tank farm and storage for Jet A1, EN590, D6 and crude oil in Rotterdam. 60+ years of oil storage expertise. Request allocation in 24 hours.',
  path: '',
})

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
