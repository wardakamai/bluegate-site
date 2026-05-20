# Prompt 10 — Sustainability & HSE Pages

Read `CLAUDE.md` §6.9 and §6.10. Build `/sustainability` and `/hse`.

## Tasks

### 1. `/sustainability` — `app/(marketing)/sustainability/page.tsx`

#### 1.1 Hero
- Label: `ENERGY TODAY · PLANET TOMORROW`
- H1: `Storage that` italic `Respects the Future.`
- Sub-deck (~40 words): Blue Gate operates with a measurable sustainability commitment — emissions reduction, spill prevention, vapour recovery, pump electrification, solar PV, water recycling.
- Hero image: cream background with a single nature/industrial juxtaposition photo (Unsplash — wind turbines or green-roofed industrial building).

#### 1.2 ESG pillars — `components/sections/sustainability/Pillars.tsx`
3-card row:
- 🌿 **Environment** — emissions, spill prevention, vapour recovery, biodiversity around the terminal
- 🛡️ **Social** — workforce safety, community partnerships, training programmes
- 🏛️ **Governance** — board oversight, ESG reporting alignment, transparent reporting

#### 1.3 Emissions and operations — `components/sections/sustainability/EmissionsTable.tsx`
A clear, simple commitments table:

| Metric | 2026 baseline | 2030 target | Status |
|---|---|---|---|
| Scope 1 (tCO₂e) | `// TODO` | `-30% vs baseline` | In progress |
| Scope 2 (tCO₂e) | `// TODO` | `100% renewable electricity` | In progress |
| Vapour recovery efficiency | 92% | ≥98% | Upgrade underway |
| Water recycled (%) | 40% | 75% | Phase 1 complete |
| Spills (per million m³) | 0 | 0 | Maintained |

Add `// TODO: confirm with client — real baselines and targets` above the table.

#### 1.4 Community programmes — `components/sections/sustainability/Community.tsx`
- Section label: `COMMUNITY`
- 2-column layout: narrative left on Rotterdam Port partnerships and training; right `Programme highlights` bullet list (apprenticeship intake, port skills training, school STEM partnerships).

#### 1.5 Reporting alignment — `components/sections/sustainability/Reporting.tsx`
- Section label: `REPORTING FRAMEWORKS`
- Logo/badge row: GRI · TCFD · CDP · ISO 14001
- Short paragraph noting alignment with each (mark with `// TODO: confirm with client — actual reporting frameworks subscribed to`).

#### 1.6 Final CTA
- H2: `Read Our` italic `ESG Report.`
- Two CTAs: `Download ESG Report (PDF)` (placeholder PDF at `public/specs/esg-report.pdf`) and `Contact our ESG Lead →`

#### 1.7 SEO
- Title: `Sustainability — Blue Gate Shipping & Trade`
- Description: `ESG commitments, emissions targets, and community programmes from Blue Gate Shipping and Trade B.V.`

### 2. `/hse` — `app/(marketing)/hse/page.tsx`

#### 2.1 Hero
- Label: `HEALTH, SAFETY & ENVIRONMENT`
- H1: `Safety is` italic `Non-Negotiable.`
- Sub-deck (~40 words): Blue Gate's HSE framework governs every operation, from gauging to truck loading to bunker delivery. Zero spills, zero LTIs is the standing target.

#### 2.2 HSE policy summary — `components/sections/hse/Policy.tsx`
- Section label: `OUR HSE POLICY`
- 4-bullet pillar block: People · Product · Environment · Compliance. Each pillar one short sentence.
- Below: download button `Download HSE Policy (PDF)` linking to `/specs/hse-policy.pdf` (create empty placeholder file).

#### 2.3 Certifications and compatibility — `components/sections/hse/Certifications.tsx`
- Section label: `CERTIFIED OPERATIONS`
- Logo/badge row: ISO 45001 · ISO 14001 · ISO 9001 · SQAS · OCIMF SIRE 2.0 · ISGOTT · FETSA
- Each with a 1-line description on hover or below.
- `// TODO: confirm with client — actual certifications held` comment.

#### 2.4 Performance metrics — `components/sections/hse/Metrics.tsx`
4 stat tiles (cream-on-ink dark band, like home-page At-A-Glance):
- **LTIF**: `0.00` (Lost Time Injury Frequency per million hours) — `// TODO: confirm`
- **Spills**: `0` (releases to environment, last 12 months) — `// TODO: confirm`
- **HSE audits/year**: `12` — `// TODO: confirm`
- **Toolbox talks**: `weekly` — `// TODO: confirm`

#### 2.5 Emergency response — `components/sections/hse/EmergencyResponse.tsx`
- Section label: `EMERGENCY RESPONSE`
- 2-column block:
  - Left narrative: on-site fire team, foam stocks, mutual aid with Port of Rotterdam Authority, 24/7 control room with direct comms to harbour master.
  - Right `ServiceFeatureGrid` (reuse from prompt 06) with 4 items: Fire team · Foam stocks · Mutual aid · Control room

#### 2.6 Permit-to-work and contractor management — narrative section
Short paragraph on PTW system, contractor pre-qualification, toolbox talks, behavioural safety observations.

#### 2.7 Final CTA
- H2: `Contact our` italic `HSE Lead.`
- Single CTA: `Speak to HSE →` linking to `/contact?intent=hse`

#### 2.8 SEO
- Title: `Health, Safety & Environment — Blue Gate`
- Description: `Blue Gate's HSE framework: ISO 45001, OCIMF SIRE, zero-spill operations, 24/7 emergency response.`

## Verification

- [ ] Both routes render all sub-sections
- [ ] Emissions table renders cleanly with TODO comments visible in code
- [ ] HSE metrics tiles show in dark-band style consistent with home At-A-Glance
- [ ] Both pages have placeholder PDFs available at the linked paths (zero-byte fine)
- [ ] Lighthouse mobile ≥ 90 on both
- [ ] All copy original

Commit as `feat: sustainability and hse pages`. Await prompt 11.
