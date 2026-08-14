# Prompt 02 — Layout, Navigation, Footer

Read `CLAUDE.md`. Build the global layout shell: top utility bar, main nav with mega-menu, mobile nav drawer, footer, floating WhatsApp button.

## Tasks

### 1. `components/layout/TopBar.tsx`

Thin utility strip above the main nav:

- Left: address (compact, one line)
- Right: email link, phone link
- Background: `var(--ink)`, text: cream, padding `py-2`, font size `text-xs`
- Hidden below `md` breakpoint
- All data from `config/site.ts`

### 2. `components/layout/Header.tsx`

Sticky header below the TopBar:

- Logo (use a placeholder `Logo.tsx` for now — text mark `BLUE GATE` in serif italic + `SHIPPING & TRADE B.V.` micro-label)
- Primary nav rendered from `primaryNav`
- Services item triggers a **mega-menu dropdown** on hover/focus with 4 columns (one per service), each showing icon + title + one-line description; shipping column lists its 4 sub-items
- Right side: `Request a Quote →` button (shadcn Button, brand colour)
- Hamburger toggle visible below `lg` breakpoint
- Background `var(--bg-cream)`, hairline bottom border `var(--border-soft)`, slight backdrop-blur when scrolled
- Active link state: underlined or accented in `var(--brand-gold)`

### 3. `components/layout/MobileNav.tsx`

Use shadcn `Sheet` from the right. Inside:

- Full nav as an accordion (Services expands to its 4 sub-items)
- CTA button at the bottom
- Contact details below the CTA

### 4. `components/layout/Footer.tsx`

Four columns on desktop, stacked on mobile:

- **Brand** (col 1): logo, 2-line blurb about Blue Gate's role since 1964, LinkedIn icon (use lucide `Linkedin`)
- **Navigation** (col 2): full primary nav
- **Services** (col 3): 4 service links + 4 product links
- **Contact** (col 4): address, both email contexts (storage & general), phone, WhatsApp deep link
- Sub-footer (single row across full width): `© 2026 Blue Gate Shipping and Trade B.V. · KVK 86686607 · SAFE NL06152688 · Privacy Policy · Terms · Refund Guarantee Policy (PDF)`
- Use `var(--ink)` as background, cream text, soft-border separators

### 5. `components/layout/WhatsAppFab.tsx`

Floating button bottom-right:

- Fixed position, `bottom-6 right-6`, `z-50`
- Circular, brand-green background, white WhatsApp icon (use lucide `MessageCircle`)
- Subtle pulse animation, disabled if `prefers-reduced-motion`
- Links to `site.contact.whatsapp`
- Hidden on print

### 6. `app/layout.tsx`

Wire it all together:

- TopBar → Header → `{children}` → Footer → WhatsAppFab
- Set `<html>` `lang="en"` and apply the font CSS variables to `<body>` className
- Add Plausible analytics script (conditionally if `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is set)
- Add OpenGraph/metadata defaults via `export const metadata: Metadata`

### 7. Animations

- Header should fade in on first load via Framer Motion
- Mega-menu fade + slight `translateY` on open
- All animations respect `prefers-reduced-motion`

### 8. Accessibility

- All nav links keyboard-reachable
- Mega-menu dismisses on Escape and click-outside
- `aria-current="page"` on the active link
- Visible focus rings using `focus-visible:ring-2 ring-brand`

### 9. Update `app/page.tsx`

Just render a placeholder `<main className="container py-24"><h1>Home placeholder</h1></main>` so we can verify header and footer wrap content correctly.

## Verification

- [ ] Header renders at the top with logo left and nav right
- [ ] Services menu opens on hover/focus and is keyboard navigable
- [ ] Mobile hamburger opens the drawer with full nav and CTA
- [ ] Footer renders 4 columns on desktop, stacks on mobile
- [ ] WhatsApp bubble visible bottom-right and links correctly
- [ ] Lighthouse Accessibility score on the placeholder page ≥ 95
- [ ] No console warnings
- [ ] All text and links pulled from `config/site.ts`, no hardcoded strings

Commit as `feat: global layout, navigation, footer`. Await prompt 03.
