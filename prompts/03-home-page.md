# Prompt 03 — Home Page

Read `CLAUDE.md`. Build the home page in full, matching the toocrudeoil.com layout pattern with Blue Gate's content.

Do NOT build the live market ticker yet — use a static placeholder card. The real ticker comes in prompt 04.

## Tasks — build these sections in order

Place each as a separate component in `components/sections/`, then compose them in `app/(marketing)/page.tsx` (move the existing home page into the marketing route group).

### 1. `Hero.tsx`
- Full-viewport background image (use Unsplash placeholder — Rotterdam port at blue hour; suggested: `https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2` or similar industrial port photo). Use `next/image` with `fill` and `priority`
- Dark overlay `bg-ink/70` for legibility
- Container with vertical centring
- Pre-headline label (small-caps): `BULK LIQUID STORAGE · EST. 1964 · ROTTERDAM, NL`
- H1 (serif, two lines): `Petroleum Storage.` then on a new line `Engineered for ` + italic span `Reliability.`
- Sub-deck (~30 words, max-w-2xl, cream text):
  > Blue Gate Shipping and Trade B.V. delivers secure, ISO-certified storage and integrated terminal services for Jet A1, EN590 Diesel, Virgin Fuel Oil D6, and Crude Oil from our Rotterdam hub.
- Two CTAs: primary `Request a Quote →`, secondary `Explore Terminal` (ghost style)
- Four stat tiles directly below (in a strip): `60+ Years` · `3 Terminals` · `4 Core Products` · `24/7 Ops` — use the animated counter (Framer Motion `useInView`)

### 2. `TerminalNetwork.tsx`
- Section label: `STRATEGIC TERMINALS`
- H2: `Three Hubs.` + italic span `One Trusted Partner.`
- Card grid (3 columns on desktop, stacked on mobile), data from `config/terminals.ts`
- Each card: flag emoji (large), city, country, region tag, mini product-tag pills, capacity in m³, `Details →` link to `/terminal`
- Houston and Singapore cards display a small `Status: to be confirmed` badge (per the TODO in config)
- Hover: lift + shadow

### 3. `MarketTickerPlaceholder.tsx`
- Section label: `MARKET REFERENCE PRICES`
- H2: `Indicative Pricing.` + italic span `Transparent Benchmarks.`
- Static 4-card grid placeholder showing Brent, WTI, Gasoil, Natural Gas with dummy prices and a `Loading live data…` ribbon
- Below the grid: explanatory paragraph about Platts Rotterdam Barges / Argus NWE differentials (per `CLAUDE.md` §6.1 step 5)
- CTA: `Get a Storage Quote →`
- Add a `// TODO: replace with <MarketTicker /> in prompt 04` comment

### 4. `Services.tsx`
- Section label: `WHAT WE DO`
- H2: `End-to-End Storage` + italic span `& Trade Solutions.`
- 6-card grid (3×2 on desktop, stacked on mobile):
  1. Oil Storage Services — lucide icon `Database`
  2. Terminal Operations — `Anchor`
  3. Product Inspection — `ClipboardCheck`
  4. Laboratory Testing — `FlaskConical`
  5. Shipping & Logistics — `Truck`
  6. Quality Assurance & HSE — `ShieldCheck`
- Each card: icon, title, one-line description, hover lift, link to relevant service page
- CTA below: `View All Services →`

### 5. `FeaturedProducts.tsx`
- Section label: `OUR PRODUCTS`
- H2: `Four Core Products.` + italic span `Specification-Grade Storage.`
- 4-card grid (2×2 on tablet, 1 col mobile, 4 cols on wide desktop), data from `config/products.ts`
- Each card: category pill (top-left), product name (serif H3), one-line spec summary (e.g. `ASTM D1655 · Freeze Pt −47°C · CIS Refineries`), availability bar (use a fictional `availability` percentage `78%` for now — `// TODO: confirm with client`), `Spec Sheet →` link

### 6. `StrategicLocations.tsx`
- Section label: `GLOBAL PRESENCE`
- H2: `Positioned at the Heart` + italic span `of Energy Trade.`
- Two-column layout: left = narrative paragraph (rewrite from CLAUDE.md §6.1 step 8), right = simple SVG world map highlighting Rotterdam (gold), Houston and Singapore (steel)

### 7. `SustainabilityTriptych.tsx`
- Section label: `SUSTAINABILITY`
- H2: `Storage Today.` + italic span `Stewardship Tomorrow.`
- 3-card row:
  1. 🌿 Environmental Responsibility — emissions reduction, spill prevention, ecological assessment
  2. 🛡️ Health, Safety & Quality — rigorous HSE across every link of the chain
  3. 🤝 Community & Social Impact — Rotterdam Port partnerships, training, local employment

### 8. `FinalCta.tsx`
- Full-bleed section with a darker image overlay (Unsplash placeholder — tank close-up at night)
- Centred H2: `Reserve Your` + italic span `Capacity.`
- Sub-line: one sentence about 24-hour response from the operations team
- Two CTAs: `Contact Operations →`, `View Storage Facility` (ghost)

### 9. Compose in `app/(marketing)/page.tsx`
Import and stack the sections in the order above. Add subtle `scroll-mt-24` anchor offsets and section vertical spacing using `py-20 md:py-28`.

### 10. SEO
Export metadata for the home route:
- Title: `Blue Gate Shipping & Trade B.V. — Oil Storage Rotterdam`
- Description: `ISO-certified storage of Jet A1, EN590, D6 and crude oil in Rotterdam. 60+ years of bulk liquid expertise.`
- Open Graph image: `/images/og-home.jpg` (use a placeholder for now)

## Verification

- [ ] All 8 sections render with proper spacing and typography
- [ ] Stat counters animate once when scrolled into view (or are static if reduced-motion)
- [ ] Terminal cards display from config; Houston/Singapore show status badge
- [ ] Service cards link to their respective `/services/*` routes (404s expected — pages come later)
- [ ] Product cards link to their `/products/*` routes (also 404s for now)
- [ ] Lighthouse mobile ≥ 90 (true 95 after image optimisation in later prompts)
- [ ] No console errors
- [ ] All copy original — zero text lifted from toocrudeoil.com

Commit as `feat: home page sections and composition`. Await prompt 04.
