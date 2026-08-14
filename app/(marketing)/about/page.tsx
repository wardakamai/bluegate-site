import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMeta } from '@/lib/meta';
import { aboutPageSchema } from '@/lib/schema';
import { Hero } from '@/components/sections/about/Hero';
import { Narrative } from '@/components/sections/about/Narrative';
import { MVV } from '@/components/sections/about/MVV';
import { Leadership } from '@/components/sections/about/Leadership';
import { FinalCta } from '@/components/sections/FinalCta';
import { site } from '@/config/site';

export const metadata: Metadata = pageMeta({
  title: 'About Blue Gate Tank Farm | Established in 2025',
  description:
    'Blue Gate Tank Farm is the petroleum logistics and commercial support business operated by Blue Gate Shipping and Trade B.V., established in Rotterdam in 2025.',
  path: 'about',
});

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
      <MVV />
      <Leadership />

      {/* §7 — Legal / registration strip */}
      <div className="bg-page border-brand/[0.1] border-t py-8">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-muted-foreground font-mono text-xs">
            {site.name}&nbsp;·&nbsp;KVK {site.legal.kvk}&nbsp;·&nbsp;Vestigingsnummer{' '}
            {site.legal.vestigingsnummer}
            &nbsp;·&nbsp;Prinsenlaan 450, 3066 KD Rotterdam, Netherlands
          </p>
        </div>
      </div>

      <FinalCta
        heading={
          <>
            Work With <em className="text-brand">Blue Gate Tank Farm.</em>
          </>
        }
        subline="Tell us your product, your timeline, and your requirements. Our team will respond within 24 hours to discuss how we can support your logistics needs."
        primaryCta={{ label: 'Make an Enquiry →', href: '/contact?intent=quote' }}
        secondaryCta={{ label: 'Explore Services', href: '/services' }}
      />
    </>
  );
}
