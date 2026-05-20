# CLAUDE.md — Blue Gate Shipping and Trade B.V. Website

> This file is automatically read by Claude Code at the start of every session. It is the **single source of truth** for project context. Always honour it. If a user prompt conflicts with this file, ask before deviating.

---

## 1. Project mission

Rebuild the website of **Blue Gate Shipping and Trade B.V.** (legacy site: https://bluegou.com — outdated WordPress/Elementor) into a **modern, premium, conversion-focused corporate site**, **structurally and visually modelled on https://www.toocrudeoil.com** (Next.js, editorial typography, dark-on-cream palette, terminal-grid layout, live market-price ticker).

**You must replicate the structure and aesthetic patterns** of toocrudeoil.com. **You must NOT copy text, logos, or proprietary assets** from it. All copy is original, written for Blue Gate.

---

## 2. Company facts (use these verbatim)

| Field | Value |
|---|---|
| Legal name | Blue Gate Shipping and Trade B.V. |
| Short brand | Blue Gate / BlueGate |
| Founded | 1964 |
| HQ | Prinsenlaan 450, 3066 KD Rotterdam, Netherlands |
| Email | storage@bluegou.com |
| Phone | +31 97005034730 |
| KVK | 86686607 |
| SAFE No. | NL06152688 |
| Sector | Bulk liquid / petroleum storage, terminal operations, shipping & trade |
| Specialisation | Storage of Jet A1 Fuel, Diesel EN590, Virgin Fuel Oil D6, Crude Oil (various origins) |
| Terminals | Rotterdam (primary) + Houston + Singapore (verify status before publish) |

---

## 3. Tech stack (do not deviate without asking)

- **Framework**: Next.js 14+ (App Router) with TypeScript (strict mode)
- **Styling**: Tailwind CSS + CSS custom properties for design tokens
- **UI primitives**: shadcn/ui (Button, Card, Sheet, Tabs, Accordion)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Email**: Resend (env var `RESEND_API_KEY`, target `storage@bluegou.com`)
- **Hosting**: Vercel (with `next/image`, ISR enabled)
- **Analytics**: Plausible (env var `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`)
- **Market data**: `yahoo-finance2` npm package, cached via ISR `revalidate: 900`
- **Node**: 20 LTS minimum
- **Package manager**: pnpm

---

## 4. Design system

### 4.1 Colour tokens (CSS custom properties in `globals.css`)

```css
:root {
  --bg-cream:        #FAF8F4;
  --ink:             #0B1220;
  --brand-deep-blue: #0E3A5F;
  --brand-steel:     #3A6F94;
  --brand-gold:      #B8893B;
  --ok-green:        #1F7A4D;
  --alert-red:       #B33A2F;
  --border-soft:     #E6E1D6;
}
```

Map these into `tailwind.config.ts` as semantic colour names: `bg`, `ink`, `brand`, `brand-steel`, `accent`, `ok`, `alert`, `border-soft`.

### 4.2 Typography

- **Display serif** (headlines, italic accents): `Fraunces` via `next/font/google`
- **Body grotesque** (UI, body): `Inter`
- **Monospace** (prices, specs, codes): `JetBrains Mono`

Sizes:
- H1: `clamp(48px, 7vw, 96px)`, display serif, weight 400, slight negative tracking
- H2: `clamp(32px, 4vw, 56px)`, display serif
- Section labels: 11px, uppercase, letter-spacing `+0.08em`, weight 500
- Body: 16px / 1.6, Inter, weight 400

### 4.3 Visual motifs (replicate from toocrudeoil)

- Sticky top utility bar with address · email · phone
- Section labels in small-caps above each H2 (e.g. `STRATEGIC TERMINALS`)
- Headlines with italicised accent words (e.g. `Petroleum Storage. Engineered for *Reliability.*`)
- Terminal cards as a row with flag emoji, city, country, Incoterm tag, product tags, capacity in m³
- Stat tiles under hero (4 columns): big number + small label
- Product cards with percentage-available bar + category pill
- Sustainability triptych (Environment · HSE · Community)
- Full-bleed final CTA band with overlay
- 4-column footer (Brand · Navigation · Services · Contact)
- Floating WhatsApp bubble bottom-right

### 4.4 Motion

- Scroll-reveal fades with Framer Motion + `useInView`
- Hover lift on cards: `translateY(-4px)` + soft shadow
- Animated number counters on first viewport entry
- Respect `prefers-reduced-motion` — disable all motion when set
- **No carousels. No parallax. No autoplay video. No load-time modals.**

### 4.5 Accessibility

- WCAG 2.2 AA, axe-core zero serious/critical violations
- Keyboard reachable, visible focus rings
- Alt text on every image
- Semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`)

---

## 5. Information architecture

### 5.1 Primary nav (left-to-right)
`Home · About · Services ▾ · Terminal · Storage Facility · Markets · Products · Sustainability · HSE · Contact · [Request a Quote →]`

### 5.2 Services dropdown (mega-menu)
1. **Oil Storage Services** → `/services/oil-storage`
2. **Product Inspection** → `/services/product-inspection`
3. **Laboratory** → `/services/laboratory`
4. **Shipping Services** → `/services/shipping` (sub-anchors: trucking, rail, cargo, tanker)

### 5.3 Products
`/products/jet-a1` · `/products/diesel-en590` · `/products/virgin-fuel-oil-d6` · `/products/crude-oil`

### 5.4 Global CTA conventions
- Primary CTA text: `Request a Quote →` → `/contact?intent=quote`
- Spec CTA: `Download Spec Sheet` (PDF per product)
- Visit CTA: `Book a Site Visit` → `/contact?intent=visit`
- Floating WhatsApp deep link: `https://wa.me/31970050347​30` with pre-filled message

---

## 6. Product specifications (use these verbatim on product detail pages)

### Jet A1 Fuel
- Standard: **ASTM D1655 / DEF STAN 91-091**
- Density @15°C: 775–840 kg/m³
- Flash point: ≥38°C
- Freeze point: ≤ −47°C
- Distillation 10% recovered: ≤205°C; FBP ≤300°C
- Sulphur: ≤0.30% m/m (≤10 ppm ULS option)
- Aromatics: ≤25% v/v
- UN 1863, Class 3, PG III
- **Matching storage**: dedicated stainless or epoxy-lined fixed-roof tanks, nitrogen-blanketed where required, 5,000–25,000 m³

### Diesel EN590
- Standard: **EN 590:2022**
- Sulphur: ≤10 ppm (ULSD)
- Cetane number: ≥51
- Density @15°C: 820–845 kg/m³
- Flash point: ≥55°C
- CFPP grade per climate (Class 0 to F)
- FAME: ≤7% v/v (B7) or 0% (B0)
- UN 1202, Class 3, PG III
- **Matching storage**: floating-roof or internal-floating-roof tanks, 5,000–50,000 m³

### Virgin Fuel Oil D6
- Standard: **ASTM D396 / ISO 8217 RMG-RMK** (D6 is a US grading)
- Sulphur: 0.5–3.5% m/m (HSFO; LSFO variants available)
- Density @15°C: 950–1010 kg/m³
- Viscosity @50°C: up to 380 cSt
- Flash point: ≥60°C
- Pour point: ≤30°C
- UN 3082 / UN 1993 (flash-dependent)
- **Matching storage**: heated fixed-roof tanks with steam or thermal-oil coils, 10,000–80,000 m³

### Crude Oil (multi-origin comparison table)
| Grade | API° | Sulphur % | Origin |
|---|---|---|---|
| Brent Blend | ~38 | 0.40 | UK / Norway |
| WTI | ~39.6 | 0.24 | USA |
| Urals | ~31 | 1.30 | Russia |
| Bonny Light | ~33 | 0.16 | Nigeria |
| CPC Blend | ~46 | 0.55 | Kazakhstan |
| Forties | ~40 | 0.56 | UK |
| Murban | ~40 | 0.78 | UAE |

**Matching storage**: floating-roof tanks with vapour recovery system, 20,000–80,000 m³

Every product detail page MUST include:
1. Hero (name, category, positioning line)
2. At-a-glance strip (4 key specs)
3. Full specification table
4. Matching storage facility card (tank IDs, capacity range, type)
5. Typical origins & uses paragraph
6. Handling & safety (UN no., class, PG, SDS link)
7. Inspection & laboratory note linking to Services
8. CTA: `Request Allocation →` + `Download Spec Sheet (PDF)`

---

## 7. Voice & copy rules

- Confident, technical, never marketing-fluff
- Short declarative sentences, alternate with one longer technical sentence
- Concrete numbers everywhere — m³, m³/hr, ppm, °C, °API
- **Banned words**: world-class, cutting-edge, synergy, leverage, best-in-class, innovative (used hollowly), passionate
- Headline pattern: `Plain Statement. *Italicised Promise.*`
- CTAs: action verb + arrow → `Request a Quote →`

---

## 8. Repository conventions

- Folder structure:
  ```
  app/
    (marketing)/        # all marketing routes
      page.tsx          # home
      about/page.tsx
      services/
        page.tsx
        oil-storage/page.tsx
        product-inspection/page.tsx
        laboratory/page.tsx
        shipping/page.tsx
      terminal/page.tsx
      storage-facility/page.tsx
      markets/page.tsx
      products/
        page.tsx
        [slug]/page.tsx
      sustainability/page.tsx
      hse/page.tsx
      contact/page.tsx
    api/
      prices/route.ts   # market ticker data
      contact/route.ts  # form submission
    layout.tsx
    globals.css
  components/
    layout/             # Header, Footer, TopBar, MobileNav
    sections/           # Hero, TerminalGrid, MarketTicker, ServiceGrid, ProductGrid, SustainabilityTriptych, FinalCta
    ui/                 # shadcn/ui primitives
    products/           # SpecTable, MatchingStorageCard, ProductHero
  config/
    site.ts             # nav, contact, brand — SINGLE SOURCE OF TRUTH
    products.ts         # product data with specs and matching tanks
    terminals.ts        # terminal data
  lib/
    utils.ts
    prices.ts           # Yahoo Finance fetcher
  public/
    specs/              # PDF spec sheets per product
    images/             # photography
  ```

- Code style: TypeScript strict, ESLint + Prettier, named exports preferred over default for components.
- Commits: Conventional Commits (`feat:`, `fix:`, `chore:`, `style:`, `docs:`).
- No `any`. No `// @ts-ignore`. No inline styles unless absolutely necessary.
- Every component file ≤ 200 lines — split when larger.

---

## 9. Things to NEVER do

- ❌ Copy text, images, or logos from toocrudeoil.com
- ❌ Use carousels, autoplay video, modal pop-ups on load, or aggressive chat widgets
- ❌ Ship without alt text, focus-visible styles, or reduced-motion handling
- ❌ Hardcode prices, emails, phone numbers, or addresses inline — pull from `config/site.ts`
- ❌ Invent certifications Blue Gate may not hold — leave as `// TODO: confirm with client`
- ❌ Use `any` in TypeScript
- ❌ Edit multiple unrelated areas in a single prompt — keep changes scoped

---

## 10. Acceptance criteria (all must be true before sign-off)

1. All 10 primary nav routes + 4 service sub-routes + 4 product detail routes are live and styled per §4 and §6.
2. Market-price ticker fetches and displays live indicative data with auto-revalidation (15 min).
3. Each product detail page renders both spec table AND matching storage tank table.
4. Contact form submits to `storage@bluegou.com` and shows success/error states.
5. Lighthouse mobile: ≥95 Performance / 100 Accessibility / 100 Best-Practices / 100 SEO on `/`.
6. All copy original — zero text copied from competitor sites.
7. WCAG 2.2 AA verified with axe-core (zero serious/critical violations).
8. Renders correctly from 375px (iPhone SE) to 2560px (4K).
9. README explains setup, dev, deploy, and how to swap copy/images.
10. 301 redirect map from legacy WordPress URLs (`/operations.html` → `/services/oil-storage`, etc.) is configured in `next.config.js`.

---

## 11. Open items flagged for client confirmation

Before publish, confirm with client:
- [ ] Are Houston and Singapore terminals currently active, or Rotterdam-only?
- [ ] Confirmed certifications held (ISO 9001/14001/45001, OCIMF/SIRE, FETSA, SQAS, etc.)
- [ ] Approved hero photography
- [ ] Final legal/privacy/refund policy PDFs
- [ ] LinkedIn handle and any other socials
- [ ] Real tank IDs and capacities for the Storage Facility page

Mark all such items with `// TODO: confirm with client` in code.
