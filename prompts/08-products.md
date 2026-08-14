# Prompt 08 — Products Hub and Four Product Detail Pages

Read `CLAUDE.md` §6 carefully — the product specs and matching-storage requirements are non-negotiable. Each product detail page MUST render both the specification table AND the matching storage facility card.

## Tasks

### 1. Products hub — `app/(marketing)/products/page.tsx`

- Hero — label `OUR PRODUCTS`, H1: `Four Products.` italic `Specification-Grade Storage.`, sub-deck (~30 words) introducing the range.
- 4-card grid (2×2 on tablet, 1 col mobile, 4 col on wide desktop) generated from `config/products.ts`:
  - Category pill top-left
  - Product name (serif H3)
  - One-line short positioning (from `shortPositioning` field)
  - 3-key spec micro-list: density · flash point · standard (pull from `atAGlance`)
  - `View Spec →` button linking to `/products/[slug]`
- Below the grid: explanatory paragraph about how each product is held in dedicated tank infrastructure with matched safety systems.
- Final CTA: `Request Allocation →`.

### 2. Dynamic detail route — `app/(marketing)/products/[slug]/page.tsx`

Use Next.js dynamic segment with `generateStaticParams` returning the 4 known slugs.

Structure of each detail page (use this order strictly):

#### 2.1 ProductHero — `components/products/ProductHero.tsx`

- Category pill (top, small-caps)
- H1: product name (serif)
- Short positioning line (~15 words)
- Hero image placeholder (Unsplash — close-up of tank, gauge, or product-relevant visual)
- Layout: image right (40%), text left (60%) on desktop; stacked on mobile

#### 2.2 AtAGlanceStrip — `components/products/AtAGlanceStrip.tsx`

- 4 key specs from `product.atAGlance` rendered as side-by-side stat blocks
- Each block: small label uppercase + large mono value
- Full-bleed dark band background (`var(--ink)`, cream text)

#### 2.3 SpecificationTable — `components/products/SpecificationTable.tsx`

- Columns: Property · Value · Method (test standard, where given)
- Mono font for value column
- Hairline rows
- For Crude Oil, render `GradeComparisonTable` instead — columns: Grade · API° · Sulphur % · Origin
- Section label above table: `FULL SPECIFICATION` (or `GRADE COMPARISON` for crude)

#### 2.4 MatchingStorageCard — `components/products/MatchingStorageCard.tsx`

**This is the critical product↔storage match.**

Render a prominent card linking the product to its matching tank infrastructure. Content:

- Section label: `MATCHING STORAGE FACILITY`
- H3 (serif): `Storage Specification for [Product Name]`
- Two-column body:
  - Left: tank type, capacity range, features list (from `product.matchingStorage`)
  - Right: a mini-table of relevant Tank IDs filtered from the storage-facility tank array (in prompt 07) by product compatibility — e.g. Jet A1 page shows only tanks where `compatible` includes `'Jet A1'`
- CTA at bottom: `View Full Tank Inventory →` linking to `/storage-facility`

To make this work, **promote the tank array to a config file**: move the placeholder tank list from prompt 07's `TankInventoryTable.tsx` into `config/tanks.ts`, exported as a typed array. Both the storage facility page and product detail pages import from there.

#### 2.5 Origins and uses — `components/products/OriginsUses.tsx`

- Two-column: left narrative paragraph (from `product.origins`), right small infographic listing 3 typical end-users (aviation operators / road transport / power generation / refinery feedstock — vary by product).

#### 2.6 Handling and safety — `components/products/HandlingSafety.tsx`

- 4 inline stat blocks: UN Number · Hazard Class · Packing Group · SDS download
- SDS shown as a button: `Download Safety Data Sheet →` linking to `product.handlingSafety.sdsUrl`
- Create empty placeholder PDFs at `public/specs/<slug>-sds.pdf` and `<slug>-spec.pdf` (zero-byte is fine — note as `// TODO: produce real PDFs`).

#### 2.7 Inspection and laboratory note — `components/products/InspectionNote.tsx`

- Small section: short paragraph explaining that every parcel of this product is inspected per the Product Inspection service and tested by the on-site Laboratory.
- Two inline links: `Product Inspection →` and `Laboratory →`.

#### 2.8 CTAs — final block on each detail page

- Two prominent buttons: `Request Allocation →` (primary, links to `/contact?intent=quote&product=<slug>`) and `Download Spec Sheet (PDF)` (secondary, links to `product.specSheetUrl`).

### 3. Compose detail page

```tsx
// app/(marketing)/products/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { products } from '@/config/products';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();
  return (
    <main>
      <ProductHero product={product} />
      <AtAGlanceStrip items={product.atAGlance} />
      {product.slug === 'crude-oil' ? (
        <GradeComparisonTable rows={product.gradeComparison} />
      ) : (
        <SpecificationTable rows={product.specifications} />
      )}
      <MatchingStorageCard product={product} />
      <OriginsUses product={product} />
      <HandlingSafety product={product} />
      <InspectionNote />
      <FinalCta
        heading="Request"
        headingItalic="Allocation."
        subline="Our trading desk replies within 24 hours."
        primary={{
          label: 'Request Allocation →',
          href: `/contact?intent=quote&product=${product.slug}`,
        }}
        secondary={{ label: 'Download Spec Sheet (PDF)', href: product.specSheetUrl }}
      />
    </main>
  );
}
```

### 4. SEO metadata via `generateMetadata`

Per `CLAUDE.md` §9. Each product page emits a title and description tailored to that product (e.g. Jet A1: `Jet A1 Fuel Storage Rotterdam — Blue Gate`).

Also emit `Product` JSON-LD schema on each detail page.

## Verification

- [ ] `/products` shows 4 cards linking to detail pages
- [ ] Each of the 4 detail pages renders all 8 sub-sections in order
- [ ] Specification table on Jet A1 / EN590 / D6 matches the spec verbatim from `CLAUDE.md` §6
- [ ] Crude Oil page renders the 7-grade comparison table, not a single spec table
- [ ] MatchingStorageCard on each product page lists only tanks whose `compatible` array contains that product
- [ ] Total tank list on `/storage-facility` and the filtered subset on each product page come from the same `config/tanks.ts` source
- [ ] `Download Spec Sheet` button links to a valid (even if empty) PDF in `public/specs/`
- [ ] Page validates as `Product` JSON-LD in Google Rich Results Test
- [ ] Mobile rendering: all tables horizontally scroll cleanly
- [ ] Lighthouse mobile ≥ 90 on each detail page

Commit as `feat: products hub and four detail pages with matching tanks`. Await prompt 09.
