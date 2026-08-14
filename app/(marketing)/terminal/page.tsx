import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMeta } from '@/lib/meta';
import { TerminalHero } from '@/components/sections/terminal/Hero';
import { MarketsOverview } from '@/components/sections/terminal/MarketsOverview';
import { FinalCta } from '@/components/sections/FinalCta';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMeta({
  title: 'Oil Tank Farm Locations | Rotterdam, Houston & Jurong',
  description:
    'Oil tank farm and petroleum storage markets Blue Gate Tank Farm works across, including Rotterdam, Houston and Jurong, Singapore.',
  path: 'terminal',
});

export default function TerminalPage() {
  return (
    <>
      <Script
        id="terminal-bc-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: 'https://bluegou.com' },
              { name: 'Energy Markets', url: 'https://bluegou.com/terminal' },
            ]),
          ),
        }}
      />

      <main>
        <TerminalHero />
        <MarketsOverview />

        <FinalCta
          heading={
            <>
              Discuss Your <em className="text-brand">Requirements.</em>
            </>
          }
          subline="Tell us your product, your market, and your timeline. Our team will respond within 24 hours."
          primaryCta={{ label: 'Make an Enquiry →', href: '/contact' }}
          secondaryCta={{ label: 'Explore Services', href: '/services' }}
        />
      </main>
    </>
  );
}
