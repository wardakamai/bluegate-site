import type { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { pageMeta } from '@/lib/meta';
import { productSchema, breadcrumbSchema } from '@/lib/schema';
import { products } from '@/config/products';
import { ProductHero } from '@/components/products/ProductHero';
import { AtAGlanceStrip } from '@/components/products/AtAGlanceStrip';
import { SpecificationTable, GradeComparisonTable } from '@/components/products/SpecificationTable';
import { MatchingStorageCard } from '@/components/products/MatchingStorageCard';
import { OriginsUses } from '@/components/products/OriginsUses';
import { HandlingSafety } from '@/components/products/HandlingSafety';
import { InspectionNote } from '@/components/products/InspectionNote';
import { FinalCta } from '@/components/sections/FinalCta';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

type Props = { params: Promise<{ slug: string }> };

const TITLES: Record<string, string> = {
  'jet-a1': 'Jet A1 Tank Farm Storage & Marine Logistics | Blue Gate',
  'diesel-en590': 'EN590 Tank Farm Storage & Capacity Enquiries | Blue Gate',
  'virgin-fuel-oil-d6': 'D6 Fuel Oil Tank Farm Storage | Blue Gate Tank Farm',
  'crude-oil': 'Crude Oil Tank Farm Storage & Logistics | Blue Gate',
};

const DESCRIPTIONS: Record<string, string> = {
  'jet-a1':
    'Blue Gate Tank Farm supports Jet A1 aviation fuel tank farm storage enquiries to ASTM D1655 specification, coordinating storage access and independent inspection.',
  'diesel-en590':
    'Blue Gate Tank Farm supports EN590 tank farm storage and capacity enquiries for ULSD diesel, coordinating storage access and commercial support.',
  'virgin-fuel-oil-d6':
    'Blue Gate Tank Farm supports D6 fuel oil tank farm storage enquiries to ASTM D396 specification, covering HSFO and LSFO grades.',
  'crude-oil':
    'Blue Gate Tank Farm supports crude oil tank farm storage enquiries for grades including Brent, WTI, Urals and Bonny Light.',
};

const H1S: Record<string, string> = {
  'jet-a1': 'Jet A1 Aviation Fuel Tank Farm Storage',
  'diesel-en590': 'EN590 Diesel Tank Farm Storage',
  'virgin-fuel-oil-d6': 'D6 and Heavy Fuel Oil Tank Farm Storage',
  'crude-oil': 'Crude Oil Tank Farm Storage',
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  const title = TITLES[slug] ?? `${product.name} — Blue Gate Tank Farm`;
  const description = DESCRIPTIONS[slug] ?? product.shortPositioning;

  return pageMeta({ title, description, path: `products/${slug}` });
}

export default async function ProductDetail({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const jsonLd = productSchema(product);
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: 'https://bluegou.com' },
    { name: 'Products', url: 'https://bluegou.com/products' },
    { name: product.name, url: `https://bluegou.com/products/${product.slug}` },
  ]);

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
        <ProductHero product={product} heading={H1S[slug]} />

        {/* 2 — At a Glance Strip */}
        <AtAGlanceStrip items={product.atAGlance} />

        {/* Keyword intro for crude oil */}
        {product.slug === 'crude-oil' && (
          <section
            className="bg-page border-border-soft border-b py-10 md:py-14"
            aria-label="Crude oil overview"
          >
            <div className="mx-auto max-w-7xl px-6">
              <p className="text-ink/70 max-w-3xl font-sans text-base leading-relaxed">
                Blue Gate Tank Farm supports clients working with crude oil grades including Brent
                Blend, WTI, Urals, Bonny Light, CPC Blend, Forties and Murban, across Rotterdam and
                US Gulf Coast markets. We coordinate independent inspection on intake and outturn.
                Contact our team to discuss storage access and logistics for your crude oil
                requirements.
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
              <div className="flex flex-wrap justify-center gap-4">
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
                  className="border-ink/25 text-ink hover:bg-ink/[0.08] hover:border-ink/40 h-11 bg-transparent px-7 text-sm font-medium"
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
          heading={
            <>
              Make an <em className="text-brand">Enquiry.</em>
            </>
          }
          subline="Our team replies within 24 hours. Tell us your volume, your product, and your timeline."
          primaryCta={{
            label: 'Make an Enquiry →',
            href: `/contact?intent=quote&product=${product.slug}`,
          }}
          secondaryCta={{ label: 'Our Storage Services', href: '/services/oil-storage' }}
        />
      </main>
    </>
  );
}
