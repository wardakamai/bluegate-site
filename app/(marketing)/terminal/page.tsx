import type { Metadata } from 'next'
import Script from 'next/script'
import { TerminalHero } from '@/components/sections/terminal/Hero'
import { NetworkSummary } from '@/components/sections/terminal/NetworkSummary'
import { RotterdamFlagship } from '@/components/sections/terminal/RotterdamFlagship'
import { GlobalNetwork } from '@/components/sections/terminal/GlobalNetwork'
import { WhyNetwork } from '@/components/sections/terminal/WhyNetwork'
import { Certifications } from '@/components/sections/about/Certifications'
import { FinalCta } from '@/components/sections/FinalCta'
import { terminals } from '@/config/terminals'
import { site } from '@/config/site'

export const metadata: Metadata = {
  title: 'Terminal Network — Rotterdam, Fujairah, Houston, Jurong — Blue Gate',
  description:
    'Blue Gate operates four terminals worldwide, anchored by our Rotterdam flagship, with strategic extensions in Fujairah, Houston, and Jurong.',
  openGraph: {
    title: 'Terminal Network — Rotterdam, Fujairah, Houston, Jurong — Blue Gate',
    description:
      'Blue Gate operates four terminals worldwide, anchored by our Rotterdam flagship, with strategic extensions in Fujairah, Houston, and Jurong.',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://bluegou.com/#organization',
  name: site.name,
  url: 'https://bluegou.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    postalCode: site.address.postcode,
    addressLocality: site.address.city,
    addressCountry: 'NL',
  },
}

const placeJsonLd = terminals.map((t) => ({
  '@context': 'https://schema.org',
  '@type': 'Place',
  name: `Blue Gate ${t.city} Terminal`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: t.city,
    addressCountry: t.country,
  },
  containedInPlace: { '@id': 'https://bluegou.com/#organization' },
}))

export default function TerminalPage() {
  return (
    <>
      <Script
        id="terminal-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationJsonLd, ...placeJsonLd]),
        }}
      />

      <main>
        <TerminalHero />
        <NetworkSummary />
        <RotterdamFlagship />
        <GlobalNetwork />
        <WhyNetwork />

        {/* HSSE strip */}
        <div>
          <Certifications />
          <p className="text-center font-sans text-xs text-muted-foreground py-3 bg-brand/[0.04]">
            All four terminals operate under a unified HSE framework.{' '}
            {/* TODO: confirm with client */}
          </p>
        </div>

        <FinalCta
          heading={<>Schedule a <em className="text-brand">Vessel.</em></>}
          subline="48-hour booking lead time at Rotterdam. Network terminals quoted on request."
          primaryCta={{ label: 'Contact Operations →', href: '/contact' }}
          secondaryCta={{ label: 'View Storage Facility', href: '/storage-facility' }}
        />
      </main>
    </>
  )
}
