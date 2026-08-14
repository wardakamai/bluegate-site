# Prompt 12 — SEO, Structured Data, Sitemap, Redirects, Deploy

Read `CLAUDE.md` §9 and §10. Final pass: lock down SEO, structured data, sitemap, legacy redirects, image optimisation, and deployment.

## Tasks

### 1. Per-page metadata audit

For **every route**, ensure `generateMetadata` (or static `metadata`) returns:

- `title` (≤ 60 chars, unique per page)
- `description` (130–155 chars, unique per page)
- `openGraph` with `title`, `description`, `url`, `type`, and an `images` entry referencing `/og/<slug>.jpg`
- `twitter` card type `summary_large_image`
- `alternates.canonical` set explicitly

Create placeholder OG images at `public/og/` (single neutral cream image with the Blue Gate wordmark — 1200×630). Generate one default `og-default.jpg` if specific ones aren't ready, and reference it as a fallback.

### 2. Structured data (JSON-LD)

Inject the following via `<script type="application/ld+json">` blocks (use Next.js `Script` component or inline in `<head>`):

**Site-wide (in `app/layout.tsx`):**

- `Organization` schema with: name, legalName, url, logo, address (PostalAddress), contactPoint (telephone, email, contactType `customer service`, areaServed `Worldwide`, availableLanguage `en`), sameAs (LinkedIn, when confirmed).

**Home page (`/`):**

- `LocalBusiness` schema with full address, geo, openingHoursSpecification (24/7), telephone.
- `WebSite` schema with `potentialAction` SearchAction (even if site has no internal search, you can omit this if not relevant).

**Service pages (`/services/*`):**

- `Service` schema for each: serviceType, provider (link to Organization), areaServed, description.

**Product pages (`/products/*`):**

- `Product` schema: name, description, brand, image, additionalProperty array carrying the spec table values.

**About page (`/about`):**

- `AboutPage` schema linked to the Organization.

**Contact page (`/contact`):**

- `ContactPage` schema with `mainEntity` referencing Organization contactPoint.

Centralise the JSON-LD builders in `lib/schema.ts` with typed builder functions:

```ts
export function organizationSchema(): WithContext<Organization> { ... }
export function productSchema(product: Product): WithContext<Product> { ... }
// etc.
```

Use the `schema-dts` npm package for typing if useful, otherwise plain typed objects.

### 3. Sitemap and robots

- `app/sitemap.ts` — generate sitemap from a single array of routes (home, about, services hub + 4 sub-pages, terminal, storage-facility, markets, products hub + 4 detail pages, sustainability, hse, contact). Use `MetadataRoute.Sitemap`.
- `app/robots.ts` — allow all, point to sitemap, set host.
- Confirm sitemap renders at `/sitemap.xml` and robots at `/robots.txt`.

### 4. Legacy redirects

In `next.config.js`, configure `async redirects()`:

```js
async redirects() {
  return [
    { source: '/operations.html',          destination: '/services/oil-storage',    permanent: true },
    { source: '/pipeline-transport.html',  destination: '/services/shipping',       permanent: true },
    { source: '/logistics-solutions.html', destination: '/services/shipping',       permanent: true },
    { source: '/terminal-operations.html', destination: '/terminal',                permanent: true },
    { source: '/about-us.html',            destination: '/about',                   permanent: true },
    { source: '/sustainability.html',      destination: '/sustainability',          permanent: true },
    { source: '/contact-us.html',          destination: '/contact',                 permanent: true },
  ];
}
```

### 5. Image optimisation

- Audit all `<img>` tags; replace any remaining with `next/image`.
- Set `priority` only on hero images above the fold.
- Set explicit `sizes` props on responsive images.
- Verify `next.config.js` has `images.formats: ['image/avif', 'image/webp']`.
- For external Unsplash placeholders, add `images.remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }]`.

### 6. Performance pass

- Run Lighthouse mobile on `/`, `/about`, `/products/jet-a1`, `/contact`.
- Target: ≥95 Performance / 100 Accessibility / 100 Best-Practices / 100 SEO on `/`.
- Common fixes if missed:
  - Defer Plausible script with `strategy="lazyOnload"`
  - Compress hero images further (target ≤200KB each)
  - Ensure no client-side data fetching for above-the-fold content
  - Remove any unused shadcn components or icon imports

### 7. Accessibility pass

- Install `axe-core` or run via Chrome DevTools.
- Verify zero serious/critical violations on every route.
- Confirm focus ring visible on every interactive element.
- Confirm reduced-motion media query disables all motion.

### 8. 404 and 500 pages

- `app/not-found.tsx` — branded 404 with helpful nav links.
- `app/global-error.tsx` — branded 500 with mailto fallback to `storage@bluegou.com`.

### 9. README finalisation

Update `README.md` with:

- Project overview (links to design rationale and CLAUDE.md)
- Setup: `pnpm install`, env vars (`.env.example` reference)
- Scripts: `pnpm dev`, `pnpm build`, `pnpm lint`, `pnpm tsc`
- Deploy: Vercel one-click instructions + env vars to set
- How to swap copy (edit `config/site.ts`, `config/products.ts`, etc.)
- How to swap images (replace files in `public/images/`)
- How to add a new product (extend `config/products.ts`, the dynamic route picks it up automatically)
- TODO list — every `// TODO: confirm with client` aggregated into a single checklist

### 10. Deploy to Vercel

- Connect the repo to Vercel.
- Set env vars: `RESEND_API_KEY`, `CONTACT_EMAIL`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`.
- Verify staging deployment URL works end-to-end.
- Verify form submission delivers an email.
- Verify market ticker shows live prices.
- Verify redirects work (e.g. visit `/operations.html` on staging → should 301 to `/services/oil-storage`).

## Verification — final acceptance criteria from CLAUDE.md §10

Tick each off:

- [ ] All 10 primary nav routes + 4 service sub-routes + 4 product detail routes are live and styled
- [ ] Market-price ticker fetches and displays live indicative data with 15-min ISR
- [ ] Each product detail page renders both spec table AND matching storage tank table
- [ ] Contact form submits to `storage@bluegou.com` and shows success/error states
- [ ] Lighthouse mobile on `/` ≥95 Performance / 100 Accessibility / 100 Best-Practices / 100 SEO
- [ ] All copy original — zero text copied from competitor sites
- [ ] WCAG 2.2 AA verified with axe-core (zero serious/critical violations)
- [ ] Renders correctly from 375px to 2560px
- [ ] README explains setup, dev, deploy, and how to swap copy/images
- [ ] 301 redirect map from legacy WordPress URLs configured

Commit as `feat: seo, structured data, sitemap, redirects, deploy config`.

Final commit message after deploy verification: `chore: production ready — awaiting client sign-off on TODO items`.

---

**End of build sequence.** Aggregate every remaining `// TODO: confirm with client` into a single list in the README and send to the client for confirmation before going live.
