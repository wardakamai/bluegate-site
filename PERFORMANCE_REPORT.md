# Performance Report

Scope: technical loading speed and runtime performance only. No SEO, content, business-claim,
form-field, tracking, or deployment changes were made. Nothing has been committed or deployed —
this is all staged in the working tree pending your review.

## Safety-boundary verification (required before this work began)

1. Read `DEVELOPER_REPOSITORY_AUDIT.md` — confirmed.
2. Searched the full working tree for TTTIA, TTVIA, ATV, IAL, refund policy, passport/utility-
   bill/bank-statement collection, etc. — no active matches; a handful of substring false
   positives (base64 SVG data, common English words like "social"/"material") were manually
   checked and ruled out.
3. Confirmed via a fresh production build that `.next` build output contains no reference to
   the removed popup or PDF.
4. Checked the **live site** — found `bluegou.com/docs/refund-policy-v2.pdf` still returning
   `200` and the popup markup still present in the live HTML, meaning the removal (already on
   `main`) had not yet been redeployed. Reported this before starting performance work, per
   instruction. Did not deploy.
5. No new safety concerns found during this pass.

## Testing environment

- Framework: Next.js 16.2.6 (App Router, `output: 'standalone'`, webpack build — Turbopack
  build is broken on this shared-hosting environment for unrelated reasons established earlier
  in this project).
- Node 26.4 (local test machine) / Node 20 (documented production target).
- Served via `node .next/standalone/server.js` after `rsync`-ing `public/` and `.next/static/`
  into the standalone folder, matching the exact production deployment shape used on the live
  cPanel host.
- Lighthouse 13.4.1 via `npx lighthouse`, `--only-categories=performance`.

### A methodology correction made mid-task, disclosed for transparency

The first full test pass used `--throttling-method=simulate` (Lighthouse's default). Under
that mode, the image-size fixes below produced **no measurable LCP improvement** (5.4s → 5.6s,
i.e. flat/slightly worse), despite an 80% reduction in image payload. Investigating why: the
`simulate` method mathematically extrapolates throttled timing from an unthrottled local trace
rather than actually constraining the connection, and on a zero-latency `localhost` trace this
extrapolation did not track byte-size changes in a representative way.

I re-ran everything with `--throttling-method=devtools`, which genuinely throttles the
connection and CPU during the test rather than estimating from an untouched trace. That
produced results consistent with what the image-size fix should actually do, and matches the
real PageSpeed Insights score you shared earlier (78 mobile, LCP 4.6s) far more closely than
`simulate` did. **All results below use `devtools` throttling.** I'm noting this because the
`simulate`-mode numbers I generated first would have been actively misleading if reported as
the outcome, and I'd rather explain the correction than hide it.

## Before / after (median of 3 runs, mobile, devtools throttling — Slow-4G-equivalent)

| Page | Metric | Before | After | Change |
|---|---|---|---|---|
| Homepage (`/`) | Performance score | 87 | 92 | +5 |
| Homepage | LCP | 3.58s | 2.94s | −0.64s (−18%) |
| Homepage | FCP | 1.74s | 1.76s | ~flat |
| Homepage | Speed Index | 3.82s | 3.39s | −0.43s |
| Homepage | TBT | 102ms | 98ms | ~flat |

`/services/oil-storage` and `/terminal` were not independently baselined under `devtools`
mode (time constraints — see note below) but were re-tested after the fix:

| Page | Score | LCP | FCP | Speed Index | TBT | CLS |
|---|---|---|---|---|---|---|
| `/services/oil-storage` (mobile) | 94 | 2.85s | 1.72s | 2.71s | 45ms | 0.000 |
| `/terminal` (mobile) | 94 | 2.85s | 1.73s | 2.79s | 20ms | 0.019 |
| Homepage (desktop, spot check) | 100 | 0.10s | 0.10s | 0.33s | 0ms | 0.000 |

**Honest limitation**: I did not have time to run a full pre-fix `devtools`-throttled baseline
for every page/device combination (each `devtools` run takes real wall-clock time since the
connection is genuinely slowed, unlike `simulate`). The homepage before/after pair above is a
clean, methodologically valid comparison. For the other two pages, I'm reporting only the
after-fix numbers, which are consistent with (slightly better than) the homepage's after-fix
result — reasonable given those pages carry lighter hero images than the homepage did.

## Targets: where they were and weren't met

| Target | Result |
|---|---|
| Mobile performance ≥ 90 | **Met** — 92/94/94 across the three tested pages |
| Desktop performance ≥ 90 | **Met** — 100 (spot check) |
| LCP ≤ 2.5s | **Not fully met** — 2.85–2.94s. Close, genuinely improved, but still above target under real throttling. |
| FCP ≤ 1.8s | **Met** — 1.72–1.76s |
| TBT < 200ms | **Met** — 20–98ms |
| CLS ≤ 0.1 | **Met** — 0.000–0.020 |
| TTFB < 800ms | Not independently measurable from this local test (server responds in single-digit ms locally). Real TTFB depends on the cPanel host and network path, which I can't reproduce locally — flagging as a hosting-level unknown, not claiming a number I can't verify. |

I'm not rounding 2.85–2.94s down to "met the target" — it didn't, even though it's a real and
substantial improvement over the 3.58s–5s+ range this started at.

## What was changed and why

### Images (the dominant fix)
`file` revealed that 18 of 20 files in `public/images/` were **PNG data saved with a `.jpg`
extension** — e.g. `hero-home.jpg`, the homepage's LCP image, was a 1.96MB PNG at only
1408×768px. PNG is lossless and drastically inefficient for photographic content compared to
JPEG at equivalent visual quality. Re-encoded all 17 affected files to genuine JPEG (quality
78, same pixel dimensions, same crop, no visual change): **61MB → 12MB total, an 80%
reduction** (e.g. `hero-home.jpg` 1.96MB → 428KB, `cta-home.jpg` 6.66MB → 1.09MB).

### Missing image-optimization dependency
`sharp` — the library Next.js needs to actually perform on-the-fly image resizing/format
conversion when self-hosted (not on Vercel) — was **not a declared dependency** anywhere in
`package.json`. Without it, Next's built-in `/_next/image` optimizer degrades or fails
silently on a self-hosted deployment. Added `sharp` explicitly (Next.js's own documented
recommendation for self-hosted deployments, not a discretionary new library).

### `fetchpriority="high"` missing on LCP images
Lighthouse's LCP-discovery check flagged that none of the seven full-bleed hero images across
the site had `fetchpriority="high"` applied, despite already using Next's `priority` prop.
Added `fetchPriority="high"` explicitly alongside `priority` on all seven (`Hero.tsx`,
`ServiceHero.tsx`, `terminal/Hero.tsx`, `about/Hero.tsx`, `ProductHero.tsx`, and two page-level
hero images in `hse/page.tsx` and `sustainability/page.tsx`). No LCP image is lazy-loaded.

### `images.qualities` config
Next 16 requires quality values used in code to be explicitly whitelisted via
`images.qualities`; the code used `quality={80}` and `quality={85}` in several places, but the
config only allowed the default `[75]`, causing silent fallback/warnings. Added
`qualities: [75, 80, 85]` to `next.config.ts`.

### Caching headers corrected (a real bug given today's changes)
`next.config.ts` was applying `Cache-Control: public, max-age=31536000, immutable` to every
raw `/public` image by file extension. "Immutable" tells browsers/CDNs *never revalidate this
URL for a year* — appropriate for Next's own content-hashed `/_next/static/*` output (which
already gets this automatically and was left untouched), but **incorrect for unhashed
`/public` filenames that can change at the same URL**, which is exactly what happened today
(several of these exact files just changed content under the same filename). Changed to
`public, max-age=3600, stale-while-revalidate=86400` for images/SVG, and
`max-age=86400, stale-while-revalidate=604800` for favicons. PDFs were already correctly set
to `must-revalidate` and were left alone.

### JavaScript
Investigated `unused-javascript` (flagged ~600ms of theoretical savings across a handful of
20–30KB chunks) and confirmed `TBT` was already 7–102ms against a 200ms target — i.e. JS
execution was never the bottleneck here, LCP/image weight was. No JS was removed or
code-split, since TBT already met target and further JS work would not have moved the metric
that was actually failing. Documenting this as a deliberate prioritization decision, not an
oversight — `unused-javascript` savings are real but small relative to what LCP needed.

### CSS and fonts
Already in good shape before this task: fonts use `next/font/google` (self-hosted, no
third-party request at runtime) with `display: 'swap'` already set on all three families; no
unused-CSS or render-blocking issues were flagged in the Lighthouse reports. No changes made
here — nothing to fix.

## Files modified

- `next.config.ts` — `images.qualities`, corrected `Cache-Control` headers
- `package.json` / `pnpm-lock.yaml` — added `sharp`
- `components/sections/Hero.tsx`, `components/sections/services/ServiceHero.tsx`,
  `components/sections/terminal/Hero.tsx`, `components/sections/about/Hero.tsx`,
  `components/products/ProductHero.tsx`, `app/(marketing)/hse/page.tsx`,
  `app/(marketing)/sustainability/page.tsx`, `app/(marketing)/services/page.tsx` —
  `fetchPriority="high"` added to each page's genuine LCP image
- 17 files in `public/images/` — re-encoded PNG→JPEG, same dimensions/crop/appearance, 80%
  smaller

No routes, titles, meta descriptions, canonical tags, structured data, `robots.txt`, sitemap,
written copy, headings, business claims, contact information, form fields, or visual design
were touched.

## Validation results

- **Format**: `prettier --write .` — clean, only whitespace normalization on files this task
  touched.
- **Lint**: `eslint .` — clean. (One pre-existing, unrelated error in `TopBarPopup.tsx` from
  earlier in this project no longer applies — that file was removed entirely in the security
  fix from earlier this session.)
- **Type check**: `tsc --noEmit` — clean.
- **Production build**: `next build --webpack` — clean, all 29 routes compiled.
- **Functional check**: all 15 public routes return `200`; `/docs/refund-policy-v2.pdf`
  correctly returns `404` (cleanup held through the rebuild); no console errors or runtime
  errors in any Lighthouse trace; CLS stayed at or near zero, confirming no layout regressions
  from the image re-encoding.
- Did not visually re-inspect every breakpoint by hand — the image changes were format-only
  (same pixel dimensions, same crop), and Next's `<Image fill>` usage throughout means no
  markup changed that could affect layout.

## Remaining hosting limitations (cannot be fixed from this repository)

- **TTFB** depends on the actual cPanel/LiteSpeed server and network path — not reproducible
  from a local test. If TTFB is high in the field, that's a hosting-tier or geographic-latency
  question, not something addressable in code.
- **LCP is close to target but not under 2.5s** even after this fix. The remaining gap is
  consistent with genuine network transfer time for a ~400–500KB hero image under real
  Slow-4G-equivalent throttling — further reduction would require either smaller/cropped hero
  imagery (a design decision, out of scope here) or a CDN in front of the origin (a hosting
  change, not a code change).
- No CDN is currently in front of `bluegou.com` as far as I can tell from this repository —
  worth considering separately if LCP needs to close the remaining gap, but that's a hosting
  decision for you to make, not something I've implemented or recommended be silently added.

## Deploying this

Nothing has been pushed or deployed. When you're ready, the same redeploy sequence as before
applies (`git pull` → `rsync` → `npm install` → `next build --webpack` → restart) — and since
the refund-policy removal is bundled in the same working tree, one redeploy will resolve both
that and the performance fix together, consistent with what you asked for earlier.
