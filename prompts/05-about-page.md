# Prompt 05 — About Page

Read `CLAUDE.md`. Build `/about` per §6.2.

## Tasks

### 1. Route: `app/(marketing)/about/page.tsx`

Sections in order:

1. **Hero** — `components/sections/about/Hero.tsx`
   - Section label: `OUR STORY`
   - H1: `Six Decades of` + italic span `Trusted Storage.`
   - Sub-deck (40–60 words): rewrite of the founded-1964 narrative from the existing site, focusing on continuity, technical depth, and Rotterdam roots.
   - Background image: cream with a single architectural close-up of a tank (Unsplash placeholder).

2. **Narrative block** — `components/sections/about/Narrative.tsx`
   - Two-column editorial layout: pull-quote left (serif italic, large) + body copy right
   - Pull-quote example: *"Storage is the discipline of doing one thing — keeping product in spec — for decades on end."*
   - Body: 3–4 paragraphs covering heritage, technical evolution, and current mission. Original copy.

3. **Timeline** — `components/sections/about/Timeline.tsx`
   - Vertical timeline (alternate left/right cards on desktop, single column on mobile)
   - Milestones (write the copy yourself, one short sentence each):
     - 1964 — Founded in Rotterdam
     - 1980s — European expansion, first dedicated jet fuel storage
     - 2000s — Houston operations established *(mark as `// TODO: confirm with client`)*
     - 2010s — Singapore expansion *(mark as `// TODO: confirm with client`)*
     - 2020s — Sustainability programme launched, vapour recovery upgrades
     - 2026 — Modernised digital terminal management
   - Each entry: year (mono, large, brand-deep-blue), title (serif), one-line description
   - Subtle scroll-reveal as each item enters viewport

4. **Mission · Vision · Values triptych** — `components/sections/about/MVV.tsx`
   - 3-card row with section label `OUR FOUNDATION`
   - Mission: about delivering safe, in-spec storage
   - Vision: about being Europe's most trusted bulk liquid partner
   - Values: Safety · Precision · Stewardship · Partnership (as a sub-list inside the card)

5. **Leadership** — `components/sections/about/Leadership.tsx`
   - Grid of placeholder cards (4 placeholders), each with grey avatar, name `// TODO`, title `// TODO`, 2-line bio `// TODO`
   - Note in code: `// TODO: confirm with client — leadership team details and headshots`

6. **Certifications strip** — `components/sections/about/Certifications.tsx`
   - Horizontal logo row of certifications (use lucide `BadgeCheck` icons as placeholders)
   - Labels: `ISO 9001 · ISO 14001 · ISO 45001 · OCIMF/SIRE · ISGOTT · FETSA`
   - Add `// TODO: confirm with client — actual certifications held` above the array
   - Subtle background `var(--border-soft)` to distinguish

7. **Legal/registration footer block** — minimal section showing `KVK 86686607 · SAFE NL06152688` (read from `config/site.ts`)

8. **Final CTA** — reuse `<FinalCta />` from the home page but with different copy:
   - H2: `Partner With` + italic span `Blue Gate.`
   - Sub-line: one sentence inviting a conversation
   - CTAs: `Contact Operations →`, `Explore Services` (ghost)

### 2. SEO metadata
- Title: `About Blue Gate — 60 Years of Bulk Liquid Storage`
- Description: `Founded 1964 in Rotterdam. Blue Gate Shipping and Trade B.V. operates ISO-certified storage and terminal services across Europe and beyond.`

### 3. Refactor opportunity
The `FinalCta` component used here and on the home page should accept props (`heading`, `subline`, `primaryCta`, `secondaryCta`, `imageUrl`). Refactor it now so future pages can reuse it cleanly.

## Verification

- [ ] `/about` renders all 8 sections with proper spacing and typography
- [ ] Timeline animates on scroll (or static under reduced-motion)
- [ ] All `// TODO: confirm with client` comments visible in source
- [ ] FinalCta now props-driven and reused on both pages
- [ ] Lighthouse mobile ≥ 90
- [ ] All copy original

Commit as `feat: about page with timeline and mission-vision-values`. Await prompt 06.
