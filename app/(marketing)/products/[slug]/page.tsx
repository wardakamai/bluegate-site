import type { Metadata } from 'next'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { pageMeta } from '@/lib/meta'
import { productSchema, breadcrumbSchema } from '@/lib/schema'
import { products } from '@/config/products'
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
    'jet-a1':             'Jet A1 Fuel Suppliers Rotterdam | Jet Fuel Storage',
    'diesel-en590':       'EN590 Diesel Storage Rotterdam | Houston Petroleum Storage',
    'virgin-fuel-oil-d6': 'Fuel Oil D6 Storage Terminal | Blue Gate Rotterdam',
    'crude-oil':          'Crude Oil Tank Farm Rotterdam & Houston | Blue Gate',
  }

  const DESCRIPTIONS: Record<string, string> = {
    'jet-a1':
      'Blue Gate are Jet A1 fuel suppliers in Rotterdam. ASTM D1655 specification, nitrogen-blanketed tank storage, independent inspection. Request allocation today.',
    'diesel-en590':
      'ULSD EN590 diesel storage in Rotterdam and Houston. Internal floating-roof tanks up to 50,000 m³. ISO-certified oil storage company. Enquire for availability.',
    'virgin-fuel-oil-d6':
      'Virgin Fuel Oil D6 storage at our Rotterdam fuel storage terminal. ASTM D396 heated tanks up to 80,000 m³. HSFO and LSFO. Request tank farm capacity today.',
    'crude-oil':
      'Crude oil tank farm storage for Brent, WTI, Urals, Bonny Light and more. Rotterdam and Houston locations. Floating-roof tanks with vapour recovery. Contact us.',
  }

  const title = TITLES[slug] ?? `${product.name} — Blue Gate`
  const description = DESCRIPTIONS[slug] ?? product.shortPositioning

  return pageMeta({ title, description, path: `products/${slug}` })
}

export default async function ProductDetail({ params }: Props) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const jsonLd = productSchema(product)
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: 'https://bluegou.com' },
    { name: 'Products', url: 'https://bluegou.com/products' },
    { name: product.name, url: `https://bluegou.com/products/${product.slug}` },
  ])

  return (
    <>
      <Script
        id={`product-jsonld-${product.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id={`product-bc-jsonld-${product.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <main>
        {/* 1 — Hero */}
        <ProductHero product={product} />

        {/* 2 — At a Glance Strip */}
        <AtAGlanceStrip items={product.atAGlance} />

        {/* Keyword intro for crude oil */}
        {product.slug === 'crude-oil' && (
          <section className="bg-page py-10 md:py-14 border-b border-border-soft" aria-label="Crude oil overview">
            <div className="mx-auto max-w-7xl px-6">
              <p className="font-sans text-base text-ink/70 leading-relaxed max-w-3xl">
                Blue Gate&apos;s crude oil tank farm in Rotterdam handles Brent Blend, WTI, Urals,
                Bonny Light, CPC Blend, Forties and Murban. Our crude oil storage terminal in Houston
                serves the US Gulf Coast market. All crude parcels are inspected on intake and
                outturn by independent inspectors. Floating-roof tanks with vapour recovery. Contact
                our trading desk for crude oil tank farm capacity and leasing enquiries.
              </p>
            </div>
          </section>
        )}

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
