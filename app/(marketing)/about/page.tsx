import type { Metadata } from 'next'
import Script from 'next/script'
import { pageMeta } from '@/lib/meta'
import { aboutPageSchema } from '@/lib/schema'
import { Hero } from '@/components/sections/about/Hero'
import { Narrative } from '@/components/sections/about/Narrative'
import { Timeline } from '@/components/sections/about/Timeline'
import { MVV } from '@/components/sections/about/MVV'
import { Leadership } from '@/components/sections/about/Leadership'
import { Certifications } from '@/components/sections/about/Certifications'
import { FinalCta } from '@/components/sections/FinalCta'
import { site } from '@/config/site'

export const metadata: Metadata = pageMeta({
  title: 'About Blue Gate | Oil Tank Farm Operator Since 1964',
  description:
    'Blue Gate Shipping and Trade B.V. — independent oil tank farm operator since 1964. Rotterdam-based, four global terminals, ISO-certified storage across four products.',
  path: 'about',
})

export default function AboutPage() {
  return (
    <>
      <Script
        id="about-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema()) }}
      />
      <Hero />
      <Narrative />
      <Timeline />
      <MVV />
      <Leadership />
      <Certifications />

      {/* §7 — Legal / registration strip */}
      <div className="bg-page py-8 border-t border-brand/[0.1]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs text-muted-foreground">
            {site.name}&nbsp;·&nbsp;KVK {site.legal.kvk}&nbsp;·&nbsp;SAFE {site.legal.safe}
            &nbsp;·&nbsp;Prinsenlaan 450, 3066 KD Rotterdam, Netherlands
          </p>
        </div>
      </div>

      <FinalCta
        heading={
          <>
            Partner With <em className="text-brand">Blue Gate.</em>
          </>
        }
        subline="Tell us your product, your timeline, and your volume. Our team will respond within 24 hours with a storage solution engineered to specification."
        primaryCta={{ label: 'Contact Operations →', href: '/contact?intent=quote' }}
        secondaryCta={{ label: 'Explore Services', href: '/services' }}
      />
    </>
  )
}
