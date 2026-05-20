# Prompt 07 — Terminal & Storage Facility Pages

Read `CLAUDE.md`. Build `/terminal` per §6.4 and `/storage-facility` per §6.5.

## Tasks

### 1. `/terminal` — `app/(marketing)/terminal/page.tsx`

Sections:

1. **Hero** — label `TERMINAL OPERATIONS`, H1: `24/7 Marine` italic `Terminal Access.`, sub-deck describing Rotterdam-anchored operations with Houston and Singapore extensions. Hero background: aerial Rotterdam port (Unsplash placeholder).

2. **Operations overview** — two-column block:
   - Left: narrative paragraph on 24/7 operations, manifold flexibility, multi-product capability, pipeline interconnects, vapour recovery.
   - Right: `SpecTable` (reuse from prompt 06) with rows:
     - Berths
     - Max LOA
     - Max draft
     - Loading rate (m³/hr)
     - Discharge rate (m³/hr)
     - Pipeline interconnects
     - Manifold connections
     - Vapour recovery
   - All values placeholders marked `// TODO: confirm with client`.

3. **Terminal cards** — render the 3 terminals from `config/terminals.ts` as expanded cards (one per row, alternating image left/right). Each card:
   - Hero strip with city, country, flag, status badge
   - Capacity in m³
   - Product compatibility tags
   - 3–4 bullet operational highlights
   - `Details →` (Rotterdam links here; Houston/Singapore show `Status to be confirmed`)

4. **Map** — `components/sections/MapEmbed.tsx`: embed Google Maps iframe centred on Prinsenlaan 450, 3066 KD Rotterdam. Wrap in a cream-bordered card. Add an `aria-label` and a fallback text link to Google Maps.

5. **HSSE certifications row** — reuse the certifications strip pattern from About.

6. **Final CTA** — H2: `Schedule a` italic `Vessel.` Sub-line about 48-hour booking lead time. CTA: `Contact Operations →`.

### 2. `/storage-facility` — `app/(marketing)/storage-facility/page.tsx`

Sections:

1. **Hero** — label `STORAGE FACILITY`, H1: `Rotterdam Tank Farm.` italic `Spec-Built Capacity.`

2. **Site overview** — two-column narrative + small SVG site-map illustration (use a simple stylised top-down rectangle layout showing tank clusters, jetty, manifold area, control room — pure SVG, no real geodata).

3. **Tank inventory table** — `components/sections/TankInventoryTable.tsx`. This is the key spec table for this page.

   Columns: **Tank ID · Capacity (m³) · Type · Product Compatibility · Status**

   Generate a placeholder data array of 14 tanks covering the realistic range, e.g.:
   ```ts
   const tanks = [
     { id: 'T-101', capacityM3: 25000, type: 'Internal Floating Roof', compatible: ['EN590', 'Jet A1'], status: 'Available' },
     { id: 'T-102', capacityM3: 50000, type: 'External Floating Roof', compatible: ['Crude'],            status: 'Leased' },
     { id: 'T-103', capacityM3: 80000, type: 'Heated Fixed Roof',      compatible: ['D6'],               status: 'Available' },
     // ... 11 more
   ];
   ```
   Add a `// TODO: confirm with client — actual tank inventory` comment above the array.

   The table should:
   - Use mono font for Tank ID and capacity numbers
   - Show status as a coloured pill (green = Available, gold = Leased, steel = Maintenance)
   - Be filterable client-side by product (small chip filter row above the table)
   - Be sortable by capacity
   - Be horizontally scrollable on mobile with a sticky first column

4. **Total capacity stat row** — 4 tiles: `Total Capacity (m³)` (sum from array) · `Tanks Available` (count) · `Largest Tank (m³)` · `Tanks under Lease`. Computed from the tank array — single source of truth.

5. **Safety systems** — `ServiceFeatureGrid` with 4 items:
   - Foam suppression — fire-water + foam network across all bunds
   - Bunding — secondary containment to 110% of largest tank
   - Leak detection — continuous interstitial and bund monitoring
   - Fire-water network — independent fire-water mains with mutual aid

6. **Inspection regime** — narrative block referencing API 653 (above-ground steel tanks), EEMUA 159 (in-service tank inspection), routine internal inspections, third-party verification.

7. **Downloads** — call-to-action card: `Download Facility Spec Sheet (PDF)` → `/specs/facility-spec.pdf`. Add `// TODO: produce PDF` comment. Create an empty placeholder file at `public/specs/facility-spec.pdf` if it doesn't exist.

8. **Final CTA** — H2: `Book a` italic `Site Visit.` CTA: `Book a Site Visit →` (links to `/contact?intent=visit`).

### 3. SEO metadata
- `/terminal` — Title: `Terminal Operations Rotterdam — Blue Gate`, description on 24/7 operations and jetty access.
- `/storage-facility` — Title: `Rotterdam Storage Facility — Tank Inventory & Capacity — Blue Gate`.

## Verification

- [ ] Both routes render correctly
- [ ] Tank inventory table sorts by capacity (asc/desc) on click
- [ ] Product chip filter narrows the table correctly
- [ ] Total capacity stat row updates from the same data source as the table (no double-source of truth)
- [ ] Table is horizontally scrollable on mobile, no overflow into the layout
- [ ] Map iframe loads and has accessible label
- [ ] Lighthouse mobile ≥ 90 on both pages
- [ ] All `// TODO: confirm with client` markers in place

Commit as `feat: terminal and storage facility pages with tank inventory`. Await prompt 08.
