# Prompt 09 — Markets Page

Read `CLAUDE.md` §6.6. Expand the minimal Markets page created in prompt 04 into the full editorial markets view.

## Tasks

### 1. Route — `app/(marketing)/markets/page.tsx`

Replace the minimal placeholder with the following sections:

#### 1.1 Hero

- Label `MARKETS`
- H1: `Where Blue Gate` italic `Operates.`
- Sub-deck (~40 words): Blue Gate serves clients across NWE refined products, the Atlantic crude basin, Mediterranean re-export, the ARA blending hub, and Asian re-supply.

#### 1.2 Market territories — `components/sections/markets/Territories.tsx`

- Section label: `MARKET TERRITORIES`
- 5-card grid (3 + 2 on desktop):
  1. **Northwest Europe (NWE)** — refined products distribution into Germany, Belgium, Netherlands, France.
  2. **Atlantic Crude Basin** — crude flows between Africa, the Americas, and Europe.
  3. **Mediterranean Re-Export** — transshipment and blending serving Italian, Spanish, and North African ports.
  4. **ARA Blending Hub** — Antwerp–Rotterdam–Amsterdam blending and storage corridor.
  5. **Asian Re-Supply** — coordination with Singapore terminal for South-East Asia bunker and refined product flows.
- Each card: region tag, one-line positioning, 2 short bullets, no CTA (info-only).

#### 1.3 Extended market ticker

- Reuse `<MarketTicker />` built in prompt 04.
- Below it, add a "Spreads & Crack" mini-row showing:
  - Brent–WTI spread (already in ticker, surface it here too)
  - Gasoil crack spread (Gasoil price × conversion factor − Brent price) — clearly label as `Indicative`
- Add a `// TODO: expand with Platts/Argus reference rows when commercial subscription confirmed` comment.

#### 1.4 Tariff structure — `components/sections/markets/Tariffs.tsx`

- Section label: `HOW WE PRICE`
- H2: `Tariff Structure.` italic `Transparent and Benchmarked.`
- Three-block explanation:
  1. **Base storage tariff** — quoted per m³ per month
  2. **Throughput rebate** — volume-linked discount on tariff
  3. **Benchmark linkage** — pricing linked to Platts Rotterdam Barges, Argus NWE, or agreed differentials
- CTA below: `Request Tariff Schedule →`

#### 1.5 Market commentary — `components/sections/markets/Commentary.tsx`

- Section label: `MARKET COMMENTARY`
- Three placeholder commentary cards (CMS-style preview):
  - Each: date (mono, small), title (serif H3), 2-sentence excerpt, `Read more →` link (links to `#` for now)
- Add `// TODO: integrate Sanity or Payload CMS for weekly commentary` comment
- Note in code that this section should be wired to a CMS in a later iteration

#### 1.6 Final CTA

- H2: `Need a Market` italic `Briefing?`
- Sub-line: short prompt to engage trading desk
- CTA: `Request Market Briefing →` (links to `/contact?intent=briefing`)

### 2. SEO metadata

- Title: `Markets — Blue Gate Shipping & Trade`
- Description: `Indicative market pricing for Brent, WTI, Gasoil and Natural Gas. Storage tariffs linked to Platts and Argus benchmarks.`

## Verification

- [ ] `/markets` renders all 6 sections
- [ ] Market ticker shows live prices (same as on home)
- [ ] Crack spread displays a sensible value with the `Indicative` label
- [ ] Tariff structure block reads clearly to a non-technical reader
- [ ] Commentary cards render even though they link to `#`
- [ ] All `// TODO` markers in place
- [ ] Lighthouse mobile ≥ 90

Commit as `feat: full markets page with tariff structure and commentary`. Await prompt 10.
