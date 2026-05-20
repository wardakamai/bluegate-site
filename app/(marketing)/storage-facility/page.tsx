import type { Metadata } from 'next'
import Script from 'next/script'
import { pageMeta } from '@/lib/meta'
import { localBusinessSchema } from '@/lib/schema'
import Link from 'next/link'
import { Flame, Shield, Activity, Waves } from 'lucide-react'
import { StorageHero } from '@/components/sections/storage/Hero'
import { SiteOverview } from '@/components/sections/storage/SiteOverview'
import { TankInventoryTable } from '@/components/sections/storage/TankInventoryTable'
import { CapacityStats } from '@/components/sections/storage/CapacityStats'
import { NetworkContext } from '@/components/sections/storage/NetworkContext'
import { ServiceFeatureGrid, type FeatureItem } from '@/components/sections/services/ServiceFeatureGrid'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { FinalCta } from '@/components/sections/FinalCta'

export const metadata: Metadata = pageMeta({
  title: 'Rotterdam Storage Facility — Tank Inventory & Capacity — Blue Gate',
  description:
    'Full tank inventory at our Rotterdam flagship: Jet A1, EN590, Virgin Fuel Oil D6, and crude oil in dedicated matched infrastructure. Capacity from 1,000 to 80,000 m³.',
  path: 'storage-facility',
})

const SAFETY_FEATURES: FeatureItem[] = [
  {
    icon: Flame,
    title: 'Foam Suppression',
    body: 'Fire-water and foam injection network across all bunded tank clusters. Sub-surface foam application to floating-roof tanks compliant with EN 13565.',
  },
  {
    icon: Shield,
    title: 'Secondary Bunding',
    body: 'Full secondary containment to 110% of the largest tank in each cluster, engineered to Port of Rotterdam Authority standards.',
  },
  {
    icon: Activity,
    title: 'Leak Detection',
    body: 'Continuous interstitial monitoring and bund-floor sensors across all tanks. Real-time alerts integrated into the 24/7 control room dashboard.',
  },
  {
    icon: Waves,
    title: 'Fire-Water Network',
    body: 'Independent fire-water mains with mutual aid from the Port of Rotterdam Authority. Redundant pump sets with dedicated diesel backup.',
  },
]

export default function StorageFacilityPage() {
  return (
    <>
      <Script
        id="storage-facility-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />

      <main>
        <StorageHero />
        <SiteOverview />

        {/* Tank inventory */}
        <section className="bg-grad-2 py-20 md:py-28" aria-label="Rotterdam tank inventory">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
                Tank Inventory
              </p>
              <h2
                className="font-serif font-normal text-ink leading-tight mb-3"
                style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
              >
                Rotterdam <em className="text-brand">Tank Register.</em>
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-xl mb-10 leading-relaxed">
                14 tanks across five construction types. Filter by product and sort by capacity to
                find your match.
              </p>
            </ScrollReveal>

            <TankInventoryTable />
          </div>
        </section>

        <CapacityStats />

        {/* Safety systems */}
        <section className="bg-grad-1 py-20 md:py-28" aria-label="Safety systems">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
                Safety Systems
              </p>
              <h2
                className="font-serif font-normal text-ink leading-tight mb-12"
                style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
              >
                Protection <em className="text-brand">By Design.</em>
              </h2>
            </ScrollReveal>
            <ServiceFeatureGrid items={SAFETY_FEATURES} />
          </div>
        </section>

        {/* Inspection regime */}
        <section className="bg-grad-2 py-20 md:py-24" aria-label="Inspection regime">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="max-w-3xl">
                <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
                  Inspection Regime
                </p>
                <h2
                  className="font-serif font-normal text-ink leading-tight mb-6"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
                >
                  Verified. <em className="text-brand">Every Cycle.</em>
                </h2>
                <div className="space-y-4 font-sans text-sm text-ink/65 leading-relaxed">
                  <p>
                    All above-ground storage tanks are inspected to <strong className="text-ink">API 653</strong> (above-ground
                    steel storage tanks), with in-service monitoring conforming to{' '}
                    <strong className="text-ink">EEMUA Publication 159</strong>. Inspection intervals are
                    risk-ranked: critical tanks carrying aviation fuel (Jet A1) are inspected
                    on a compressed cycle given the sensitivity of the product and the regulatory
                    requirements of ASTM D1655 / DEF STAN 91-091.
                  </p>
                  <p>
                    Internal inspections are carried out by certified tank inspectors. Third-party
                    verification by independent surveyors is required for all custody-transfer
                    tanks and for tanks returning from maintenance. Inspection records are
                    retained and available to long-term lessees.
                  </p>
                  <p>
                    {/* TODO: confirm with client */}
                    The same inspection regime and standards are applied across all four network
                    terminals. Clients operating across multiple sites receive a unified inspection
                    summary on request.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <NetworkContext />

        {/* Downloads */}
        <section className="bg-grad-1 py-16" aria-label="Downloads">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="rounded-xl border border-border-soft bg-bg p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-2">
                    Documentation
                  </p>
                  <h3 className="font-serif text-2xl font-normal text-ink mb-1">
                    Rotterdam Facility Spec Sheet
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    {/* TODO: produce PDF */}
                    Full tank register, safety systems, and infrastructure specifications.
                  </p>
                </div>
                <div className="flex flex-col sm:items-end gap-3 shrink-0">
                  <a
                    href="/specs/rotterdam-facility-spec.pdf"
                    className="inline-flex items-center gap-2 bg-brand text-primary-foreground hover:bg-brand-steel transition-colors h-10 px-5 text-sm font-medium rounded-md"
                  >
                    Download Rotterdam Spec Sheet (PDF)
                  </a>
                  <Link
                    href="/contact?intent=quote&topic=facility-sheets"
                    className="font-sans text-xs text-brand hover:text-brand-steel transition-colors"
                  >
                    Request facility sheets for Fujairah, Houston, or Jurong →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <FinalCta
          heading={<>Book a <em className="text-brand">Site Visit.</em></>}
          subline="Schedule a guided walkthrough of our Rotterdam facility. Our operations team will arrange access and briefing materials."
          primaryCta={{ label: 'Book a Site Visit →', href: '/contact?intent=visit' }}
          secondaryCta={{ label: 'View Terminal Network', href: '/terminal' }}
        />
      </main>
    </>
  )
}
