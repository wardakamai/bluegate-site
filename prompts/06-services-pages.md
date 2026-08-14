# Prompt 06 — Services Hub and Four Sub-Pages

Read `CLAUDE.md`. Build the services hub at `/services` and four sub-pages: oil-storage, product-inspection, laboratory, shipping.

## Tasks

### 1. Shared components first (build once, reuse on every service page)

- `components/sections/services/ServiceHero.tsx` — props: `label`, `headlinePlain`, `headlineItalic`, `subdeck`, `imageUrl`. Standard hero pattern matching Home/About.
- `components/sections/services/ServiceFeatureGrid.tsx` — props: `items: { icon: LucideIcon, title: string, body: string }[]`. Renders 3×N grid.
- `components/sections/services/SpecTable.tsx` — props: `rows: { property: string; value: string; method?: string }[]`. Mono-typed value column.
- Reuse `<FinalCta />` from prompt 05 for each service page.

### 2. `/services` hub — `app/(marketing)/services/page.tsx`

- Hero — label `WHAT WE DO`, H1: `Four Disciplines.` italic `One Operating Standard.`, sub-deck (~30 words) summarising the four pillars.
- 4 large editorial cards (2×2 grid, generous spacing), one per service:
  - Each card spans roughly half the row, with a small visual on one side and headline/body/CTA on the other
  - Cards: Oil Storage Services / Product Inspection / Laboratory / Shipping Services
  - Card CTA: `Explore →` linking to the sub-page
- Below the grid: short narrative paragraph about how the four work as a single integrated chain.
- Final CTA band reused.

### 3. `/services/oil-storage` — `app/(marketing)/services/oil-storage/page.tsx`

Per `CLAUDE.md` §6.3.1.

Sections:

1. **Hero** — label `OIL STORAGE SERVICES`, H1: `Bulk Liquid Storage,` italic `Built for Spec.`
2. **Tank typology** — `ServiceFeatureGrid` with 4 items: Fixed-roof tanks · Floating-roof tanks · Internal-floating-roof tanks · Heated tanks. Each: lucide icon + 2-sentence description.
3. **Throughput & blending** — two-column block: left text on throughput rates, manifold flexibility, in-line blending; right `SpecTable` showing example throughput specs (`Max throughput: 4,500 m³/hr`, `Manifold connections: 12`, `Blending tolerance: ±0.5%`).
4. **Tank leasing terms** — accordion (shadcn) with items: Short-term leasing · Long-term leasing · Throughput agreements · Storage + blending packages. Each expanded item explains the terms.
5. **Custody transfer & telemetry** — narrative + bullets: 24/7 tank gauging, mass-flow metering, automated inventory APIs, daily/weekly stock reports, third-party inspector access.
6. **Spec table** — `SpecTable` listing: tank sizes (1,000–80,000 m³), product compatibility, jetty draft, manifold count, pipeline interconnects.
7. **CTA** — `Request Tank Allocation →`.

### 4. `/services/product-inspection` — `app/(marketing)/services/product-inspection/page.tsx`

Per `CLAUDE.md` §6.3.2.

Sections:

1. Hero — label `PRODUCT INSPECTION`, H1: `Independent Inspection.` italic `Verifiable Outcomes.`
2. **Inspection workflow** — visual numbered steps: Pre-loading → Loading → In-transit → Discharge → Certification. Use icons + connecting line on desktop.
3. **Sampling protocols** — text block referencing ASTM D4057 and ISO 3170. List of sampling techniques: bottom-running, all-levels, spot, composite.
4. **Quantity surveys** — feature grid: Ullage measurement · Tank dipping · Draft surveys · Mass-flow meter verification.
5. **Quality measurements** — feature grid: Density · Water content · Sediment · Temperature · Reid Vapour Pressure (where applicable).
6. **Documentation issued** — list of certificates: Certificate of Quality, Certificate of Quantity, Bill of Lading appendix, sampling report.
7. **Partner network** — small row of inspector partner logos / names (SGS, Intertek, Bureau Veritas) — note in code as `// TODO: confirm partnership status with client`.
8. CTA: `Request Inspection →`.

### 5. `/services/laboratory` — `app/(marketing)/services/laboratory/page.tsx`

Per `CLAUDE.md` §6.3.3.

Sections:

1. Hero — label `LABORATORY`, H1: `On-Site Testing.` italic `ASTM-Grade Results.`
2. **Test capabilities** — `SpecTable` with rows like:
   - Distillation — ASTM D86
   - Flash point — ASTM D93
   - Sulphur content — ASTM D5453
   - Density — ASTM D4052
   - Kinematic viscosity — ASTM D445
   - Water & sediment — ASTM D2709 / D473
   - Cetane index — ASTM D976
   - Freeze point (Jet A1) — ASTM D2386
   - Copper strip corrosion — ASTM D130
3. **Equipment** — feature grid (4 cards): Gas chromatograph · ICP spectrometer · Automatic distillation unit · CFPP analyser.
4. **Turnaround time** — narrative block stating typical turnaround windows (state as ranges, mark as `// TODO: confirm with client`).
5. **Chain of custody** — short paragraph on sample handling.
6. CTA: `Submit Sample →`.

### 6. `/services/shipping` — `app/(marketing)/services/shipping/page.tsx`

Per `CLAUDE.md` §6.3.4. This page uses a **tabbed sub-section pattern**.

Sections:

1. Hero — label `SHIPPING SERVICES`, H1: `Move Product` italic `Without Friction.`
2. **Tabs** (shadcn `Tabs`): Trucking · Rail · Cargo · Tanker (Marine). Each tab renders:
   - Headline + short positioning line
   - 3-card feature grid relevant to that mode (e.g. Trucking: ADR fleet · Benelux/DACH reach · Real-time tracking)
   - Spec/route block: route map placeholder + capacity table
   - Compliance row (icons): ADR / RID / SOLAS / MARPOL etc. as appropriate
3. **Integrated logistics** — wrap-up paragraph below the tabs explaining how the four modes combine.
4. CTA: `Plan a Shipment →`.

### 7. SEO metadata for each page

- `/services` — Title: `Services — Blue Gate Shipping & Trade`, description summarising the 4 pillars
- `/services/oil-storage` — Title: `Oil Storage Services Rotterdam — Blue Gate`
- `/services/product-inspection` — Title: `Petroleum Product Inspection — Blue Gate`
- `/services/laboratory` — Title: `Fuel Testing Laboratory Rotterdam — Blue Gate`
- `/services/shipping` — Title: `Shipping Services — Trucking, Rail, Cargo, Tanker — Blue Gate`

Each description 130–155 chars, original copy.

## Verification

- [ ] All 5 routes load without errors
- [ ] Service hub cards link to correct sub-pages
- [ ] Mega-menu in the header (built in prompt 02) now resolves to all working routes
- [ ] Tabbed shipping page switches cleanly on click and keyboard
- [ ] All accordion and tab components are keyboard-accessible
- [ ] Mobile rendering tested at 375px — no horizontal scroll
- [ ] Lighthouse mobile ≥ 90 on each page

Commit as `feat: services hub and four service sub-pages`. Await prompt 07.
