# Blue Gate Shipping and Trade B.V. — Website

Modern, conversion-focused corporate site for **Blue Gate Shipping and Trade B.V.**, a bulk liquid petroleum storage and terminal operator headquartered in Rotterdam. Built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

> See [CLAUDE.md](./CLAUDE.md) for full project context, design system, copy rules, and acceptance criteria.

---

## Tech Stack

| Layer | Tooling |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript strict) |
| Styling | Tailwind CSS v4 + CSS custom properties |
| UI primitives | shadcn/ui (Button, Card, Select, Sheet, Tabs, Accordion) |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Email | Resend |
| Market data | yahoo-finance2, ISR `revalidate: 900` |
| Analytics | Plausible (optional) |
| Hosting | Vercel |
| Package manager | pnpm |

---

## Setup

### 1. Install dependencies

```bash
pnpm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Full URL of the deployed site, e.g. `https://bluegou.com` |
| `RESEND_API_KEY` | Yes (for contact form) | API key from [resend.com](https://resend.com/api-keys) |
| `CONTACT_EMAIL` | No | Destination for form submissions (defaults to `storage@bluegou.com`) |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | No | Plausible analytics domain; leave empty to skip the script |

### 3. Start the dev server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

```bash
pnpm dev        # start development server (Next.js Turbopack)
pnpm build      # production build
pnpm start      # serve production build locally
pnpm lint       # ESLint
pnpm tsc        # TypeScript type-check (no emit)
```

---

## Deploy to Vercel

1. Push the repository to GitHub / GitLab.
2. Import the project in [Vercel](https://vercel.com/new).
3. Set the following **Environment Variables** in Vercel → Project → Settings → Environment Variables:
   - `NEXT_PUBLIC_SITE_URL` → `https://bluegou.com`
   - `RESEND_API_KEY` → your Resend API key
   - `CONTACT_EMAIL` → `storage@bluegou.com`
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` → `bluegou.com` (optional)
4. Deploy. Vercel auto-detects Next.js and builds correctly.

### Resend sender domain

Before the contact form can deliver email, verify `bluegou.com` as a sending domain in **Resend → Domains → Add Domain**. Until then, substitute `onboarding@resend.dev` as a temporary sender in `app/api/contact/route.ts`.

### Rate limiting

The contact API uses an in-memory `Map` — acceptable for single-instance preview, but resets on cold starts. For production, replace it with [Upstash Redis](https://upstash.com/) or [Vercel KV](https://vercel.com/docs/storage/vercel-kv) and the `@upstash/ratelimit` package.

---

## How to Swap Copy

All brand data lives in **`config/`** — never hardcode addresses, phone numbers, or emails elsewhere:

| File | Contains |
|---|---|
| `config/site.ts` | Brand name, address, phone, email, WhatsApp link, social handles |
| `config/products.ts` | Product specs, storage descriptions, origins, safety data |
| `config/terminals.ts` | Terminal cities, capacities, status, Incoterm tags |
| `config/tanks.ts` | Tank inventory with IDs, types, capacity, compatible products |

Edit the relevant config file and the change propagates to every page that imports it.

---

## How to Swap Images

1. Drop new JPEG/WebP files into `public/images/`.
2. For hero images and product images, update the `heroImage` URL in `config/products.ts` (currently Unsplash placeholders).
3. For OG social images, the site generates them dynamically at `/api/og?title=...`. No static files needed unless you prefer static images — in that case, add them to `public/og/` and update `lib/meta.ts`.
4. Production photography should replace Unsplash placeholder URLs in components and config files before go-live.

---

## How to Add a New Product

1. Add an entry to the `products` array in **`config/products.ts`** following the existing `Product` type.
2. Add tank data to **`config/tanks.ts`** with `compatibleProducts` matching the new `tankCompatTag`.
3. That's it — the dynamic route `app/(marketing)/products/[slug]/page.tsx` and the Products hub page pick it up automatically.
4. Add a spec-sheet PDF placeholder to `public/specs/<slug>-spec.pdf` and an SDS PDF to `public/specs/<slug>-sds.pdf`.
5. Update `app/sitemap.ts` to include the new product path.

---

## Information Architecture

```
/                          Home
/about                     Company history, mission-vision-values
/services                  Services hub
  /services/oil-storage    Bulk liquid tank storage
  /services/product-inspection  Independent cargo inspection
  /services/laboratory     On-site petroleum testing lab
  /services/shipping       Multi-modal logistics
/terminal                  Four-terminal network overview
/storage-facility          Rotterdam tank inventory & capacity
/markets                   Live indicative prices + tariff context
/products                  Products hub
  /products/jet-a1         Jet A1 Fuel
  /products/diesel-en590   Diesel EN590
  /products/virgin-fuel-oil-d6  Virgin Fuel Oil D6
  /products/crude-oil      Crude Oil (7 benchmark grades)
/sustainability            ESG, emissions targets, community
/hse                       Health, Safety & Environment
/contact                   Contact form + office details
```

---

## Legacy URL Redirects

Configured in `next.config.ts`. All 301-redirect from legacy WordPress slugs:

| From | To |
|---|---|
| `/operations.html` | `/services/oil-storage` |
| `/pipeline-transport.html` | `/services/shipping` |
| `/logistics-solutions.html` | `/services/shipping` |
| `/terminal-operations.html` | `/terminal` |
| `/about-us.html` | `/about` |
| `/sustainability.html` | `/sustainability` |
| `/contact-us.html` | `/contact` |
| `/services.html` | `/services` |
| `/products.html` | `/products` |

---

## Assets to Replace Before Launch

The following placeholder files in `public/specs/` are **zero-byte stubs**. Replace each with the real document before going live:

| File | Description |
|---|---|
| `public/specs/jet-a1-spec.pdf` | Jet A1 Fuel — product spec sheet |
| `public/specs/jet-a1-sds.pdf` | Jet A1 Fuel — Safety Data Sheet |
| `public/specs/diesel-en590-spec.pdf` | Diesel EN590 — product spec sheet |
| `public/specs/diesel-en590-sds.pdf` | Diesel EN590 — Safety Data Sheet |
| `public/specs/virgin-fuel-oil-d6-spec.pdf` | Virgin Fuel Oil D6 — product spec sheet |
| `public/specs/virgin-fuel-oil-d6-sds.pdf` | Virgin Fuel Oil D6 — Safety Data Sheet |
| `public/specs/crude-oil-spec.pdf` | Crude Oil — product spec sheet |
| `public/specs/crude-oil-sds.pdf` | Crude Oil — Safety Data Sheet |
| `public/specs/rotterdam-facility-spec.pdf` | Rotterdam storage facility — site spec sheet |
| `public/specs/hse-policy.pdf` | HSE Policy document |
| `public/specs/esg-report.pdf` | ESG / Sustainability report |

Drop-in replacement: overwrite each file at the same path. No code changes needed — all `<a href="/specs/...">` links reference these paths directly.

Also replace OG images in `public/og/` if using static social images instead of the dynamic `/api/og` generator.

---

## Client Sign-Off Checklist

The following items are marked `// TODO: confirm with client` in the codebase. **Nothing should go live until these are resolved.**

### Company & Brand
- [ ] LinkedIn company page URL → `config/site.ts`
- [ ] Approved wordmark / logo file → `public/logo.svg`
- [ ] Production hero photography → `public/images/`

### Terminals & Capacity
- [ ] Confirm which terminals are currently active (Rotterdam confirmed; Fujairah, Houston, Jurong marked `tbc`)
- [ ] Confirm actual capacity figures for each terminal → `config/terminals.ts`
- [ ] Confirm exact terminal GPS coordinates → `lib/schema.ts`
- [ ] Confirm founding / onboarding dates for Houston, Fujairah, Jurong → `components/sections/about/Timeline.tsx`

### Storage Facility
- [ ] Confirm real tank IDs, tank types, and capacities → `config/tanks.ts`
- [ ] Confirm capacity stats (total m³, throughput m³/hr, etc.) → `components/sections/storage/CapacityStats.tsx`
- [ ] Facility spec sheet PDF → `public/specs/rotterdam-facility-spec.pdf`

### Certifications & Compliance
- [ ] Confirm certifications actually held (ISO 9001 / 14001 / 45001, OCIMF/SIRE, FETSA, SQAS, etc.) → `components/sections/about/Certifications.tsx`, `components/sections/hse/Certifications.tsx`
- [ ] Confirm HSE metrics (LTIF, spill count, audit frequency, toolbox talk cadence) → `components/sections/hse/Metrics.tsx`
- [ ] Reporting frameworks subscribed to (GRI, TCFD, etc.) → `components/sections/sustainability/Reporting.tsx`
- [ ] Emissions baselines and reduction targets → `components/sections/sustainability/EmissionsTable.tsx`

### Contact & Operations
- [ ] Commercial email address (if different from `storage@bluegou.com`) → `app/(marketing)/contact/page.tsx`
- [ ] Dedicated HSE contact email → `app/(marketing)/contact/page.tsx`
- [ ] Inspection / Laboratory contact email → `app/(marketing)/contact/page.tsx`

### Product Documents
- [ ] Real spec-sheet PDFs per product → `public/specs/`
- [ ] Real Safety Data Sheets (SDS) per product → `public/specs/`

### Leadership & Team
- [ ] Leadership team names, titles, and approved headshots → `components/sections/about/Leadership.tsx`

### Email / Deploy
- [ ] Verify `bluegou.com` as sending domain in Resend dashboard before contact form goes live
- [ ] Confirm `RESEND_API_KEY` and `CONTACT_EMAIL` set in Vercel environment variables

---

## Acceptance Criteria (CLAUDE.md §10)

- [ ] All 10 primary nav routes + 4 service sub-routes + 4 product detail routes are live and styled
- [ ] Market-price ticker fetches live data, ISR `revalidate: 900`
- [ ] Each product page renders spec table AND matching storage tank table
- [ ] Contact form submits to `storage@bluegou.com` and shows success/error states
- [ ] Lighthouse mobile on `/`: ≥95 Performance / 100 Accessibility / 100 Best-Practices / 100 SEO
- [ ] All copy original — zero text copied from competitor sites
- [ ] WCAG 2.2 AA — axe-core zero serious/critical violations
- [ ] Renders correctly from 375px (iPhone SE) to 2560px (4K)
- [ ] Legacy WordPress redirects return 301 to correct routes
