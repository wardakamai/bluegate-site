import type { Metadata } from 'next'
import Script from 'next/script'
import { pageMeta } from '@/lib/meta'
import { TerminalHero } from '@/components/sections/terminal/Hero'
import { NetworkSummary } from '@/components/sections/terminal/NetworkSummary'
import { RotterdamFlagship } from '@/components/sections/terminal/RotterdamFlagship'
import { GlobalNetwork } from '@/components/sections/terminal/GlobalNetwork'
import { WhyNetwork } from '@/components/sections/terminal/WhyNetwork'
import { Certifications } from '@/components/sections/about/Certifications'
import { FinalCta } from '@/components/sections/FinalCta'
import { terminals } from '@/config/terminals'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = pageMeta({
  title: 'Oil Storage Terminal | Rotterdam, Fujairah, Houston, Jurong',
  description:
    'Blue Gate oil storage terminal network. Tank farm in Rotterdam, Fujairah, Houston and Jurong. 24/7 marine access, multi-product storage, vessel scheduling.',
  path: 'terminal',
})

// Organization schema is injected site-wide in layout.tsx — only Place data needed here
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
      <Script id="terminal-jsonld" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }} />
      <Script id="terminal-bc-jsonld" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', url: 'https://bluegou.com' },
          { name: 'Terminal Network', url: 'https://bluegou.com/terminal' },
        ])) }} />

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
