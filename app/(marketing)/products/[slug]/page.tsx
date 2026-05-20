import type { Metadata } from 'next'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { products } from '@/config/products'
import { site } from '@/config/site'
import { ProductHero } from '@/components/products/ProductHero'
import { AtAGlanceStrip } from '@/components/products/AtAGlanceStrip'
import { SpecificationTable, GradeComparisonTable } from '@/components/products/SpecificationTable'
import { MatchingStorageCard } from '@/components/products/MatchingStorageCard'
import { OriginsUses } from '@/components/products/OriginsUses'
import { HandlingSafety } from '@/components/products/HandlingSafety'
import { InspectionNote } from '@/components/products/InspectionNote'
import { FinalCta } from '@/components/sections/FinalCta'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return {}

  const TITLES: Record<string, string> = {
    'jet-a1':             'Jet A1 Fuel Storage Rotterdam — Blue Gate',
    'diesel-en590':       'Diesel EN590 Storage Rotterdam — Blue Gate',
    'virgin-fuel-oil-d6': 'Virgin Fuel Oil D6 Storage Rotterdam — Blue Gate',
    'crude-oil':          'Crude Oil Storage Rotterdam — Blue Gate',
  }

  const DESCRIPTIONS: Record<string, string> = {
    'jet-a1':
      'ASTM D1655 / DEF STAN 91-091 Jet A1 fuel storage at Rotterdam. Nitrogen-blanketed fixed-roof tanks, 5,000–25,000 m³. Blue Gate.',
    'diesel-en590':
      'EN 590:2022 ultra-low-sulphur diesel (ULSD) storage Rotterdam. Floating-roof tanks, B0 and B7 blends. Blue Gate.',
    'virgin-fuel-oil-d6':
      'Virgin Fuel Oil D6 — ASTM D396 / ISO 8217 — heated fixed-roof tank storage at Rotterdam. 10,000–80,000 m³. Blue Gate.',
    'crude-oil':
      'Multi-origin crude oil storage Rotterdam — seven benchmark grades. Floating-roof tanks with VRU, 20,000–80,000 m³. Blue Gate.',
  }

  const title = TITLES[slug] ?? `${product.name} — Blue Gate`
  const description = DESCRIPTIONS[slug] ?? product.shortPositioning

  return {
    title,
    description,
    openGraph: { title, description },
  }
}

export default async function ProductDetail({ params }: Props) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortPositioning,
    brand: {
      '@type': 'Brand',
      name: site.name,
    },
    offers: {
      '@type': 'Offer',
      url: `https://bluegou.com/products/${product.slug}`,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: site.name,
        url: 'https://bluegou.com',
      },
    },
  }

  return (
    <>
      <Script
        id={`product-jsonld-${product.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <main>
        {/* 1 — Hero */}
        <ProductHero product={product} />

        {/* 2 — At a Glance Strip */}
        <AtAGlanceStrip items={product.atAGlance} />

        {/* 3 — Specification table or Grade comparison */}
        {product.slug === 'crude-oil' && product.gradeComparison ? (
          <GradeComparisonTable rows={product.gradeComparison} />
        ) : (
          <SpecificationTable rows={product.specifications} />
        )}

        {/* 4 — Matching Storage Card */}
        <MatchingStorageCard product={product} />

        {/* 5 — Origins & Uses */}
        <OriginsUses product={product} />

        {/* 6 — Handling & Safety */}
        <HandlingSafety product={product} />

        {/* 7 — Inspection note */}
        <InspectionNote />

        {/* 8 — CTAs */}
        <section className="bg-grad-2 py-16 md:py-20" aria-label="Product call to action">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  asChild
                  className="bg-brand text-primary-foreground hover:bg-brand-steel h-11 px-7 text-sm font-medium"
                >
                  <Link href={`/contact?intent=quote&product=${product.slug}`}>
                    Request Allocation →
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-ink/25 text-ink hover:bg-ink/[0.08] hover:border-ink/40 h-11 px-7 text-sm font-medium bg-transparent"
                >
                  <a href={product.specSheetUrl} download>
                    {/* TODO: produce real spec sheet PDFs */}
                    Download Spec Sheet (PDF)
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <FinalCta
          heading={<>Ready to <em className="text-brand">Allocate.</em></>}
          subline="Our trading desk replies within 24 hours. Bring your volume, your product, and your timeline."
          primaryCta={{
            label: 'Contact Operations →',
            href: `/contact?intent=quote&product=${product.slug}`,
          }}
          secondaryCta={{ label: 'View Storage Facility', href: '/storage-facility' }}
        />
      </main>
    </>
  )
}
