# SEO Implementation Report (2026-08)

## Research methodology

No Search Console, Keyword Planner or other keyword-volume tool was available in this
environment. No search volume, keyword difficulty, competition score, CTR or traffic figure
in this report or in any page copy is fabricated — none is quoted anywhere. Keyword targeting
below is based on: standard industry terminology ("tank farm," "oil tank farm," "bulk liquid
storage," "throughput," "vessel-to-tank transfer," etc.), the product/location scope already
established for this site (EN590, Jet A1, D6, crude oil; Rotterdam, Houston, Jurong/Singapore),
and general SEO best practice (unique titles/descriptions, one H1 per page, avoiding
cannibalisation, internal linking, structured data hygiene).

## Scope decisions (and why)

Two things requested were **not** built, because your own instructions made them conditional
on content that doesn't exist:

- **No `/services/terminal-management` page.** "Terminal management services" was part of the
  earlier ownership/TSA narrative that was explicitly declined this session — it was never
  built into the approved content, so there's nothing to "optimise."
- **No dedicated transfer/throughput service page.** Same reasoning — vessel discharge/
  throughput coordination as a _company capability_ was never approved content.
- **No separate `/rotterdam`, `/houston`, `/jurong` landing pages.** Your instructions made
  Houston and Jurong pages conditional on "existing approved content confirms service
  coverage" — it doesn't, beyond the general market descriptions already on `/terminal`. Three
  new near-identical commercial location pages would also be exactly the cannibalisation/
  duplicate-page risk your own instructions warn against. Instead, `/terminal` now carries
  clear, distinctly-keyworded sections for all three markets.

## Keyword-to-page map (as implemented)

| Page                               | Primary keyword                                          | Title                                                            |
| ---------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------- |
| `/`                                | Oil tank farm storage services                           | Oil Tank Farm Storage Services \| Blue Gate Tank Farm            |
| `/services/oil-storage`            | Petroleum storage capacity and tank leasing              | Petroleum Storage Capacity & Tank Leasing \| Blue Gate Tank Farm |
| `/terminal`                        | Oil tank farm locations (Rotterdam/Houston/Jurong index) | Oil Tank Farm Locations \| Rotterdam, Houston & Jurong           |
| `/products/diesel-en590`           | EN590 tank farm storage                                  | EN590 Tank Farm Storage & Capacity Enquiries \| Blue Gate        |
| `/products/jet-a1`                 | Jet A1 tank farm storage                                 | Jet A1 Tank Farm Storage & Marine Logistics \| Blue Gate         |
| `/products/virgin-fuel-oil-d6`     | D6 fuel oil tank farm                                    | D6 Fuel Oil Tank Farm Storage \| Blue Gate Tank Farm             |
| `/products/crude-oil`              | Crude oil tank farm                                      | Crude Oil Tank Farm Storage & Logistics \| Blue Gate             |
| `/services/shipping`               | Oil tanker chartering services                           | Oil Tanker Chartering & Marine Logistics \| Blue Gate            |
| `/guides/what-is-an-oil-tank-farm` | What is an oil tank farm                                 | What Is an Oil Tank Farm? Storage, Transfer & Leasing Guide      |

No two pages target the same primary keyword. `/terminal` deliberately does **not** compete
with `/services/oil-storage` — one is location/market information, the other is the
commercial storage-capacity page.

## Modified files (selection — see git diff for full list)

`app/(marketing)/page.tsx`, `components/sections/Hero.tsx`, new
`components/sections/SubmissionSteps.tsx`, `app/(marketing)/services/oil-storage/page.tsx`,
`app/(marketing)/terminal/page.tsx`, `components/sections/terminal/Hero.tsx`,
`components/sections/terminal/MarketsOverview.tsx`, `config/markets.ts`,
`app/(marketing)/products/[slug]/page.tsx`, `components/products/ProductHero.tsx`,
`app/(marketing)/services/shipping/page.tsx`, `components/forms/contact-schema.ts`,
`components/forms/ContactForm.tsx`, `app/api/contact/route.ts`, `components/layout/Footer.tsx`,
`app/sitemap.ts`.

## New page

`/guides/what-is-an-oil-tank-farm` — educational guide covering the definition, common
products, general tank types, transfer/throughput terminology, short vs. long-term storage,
what information a storage request needs, and a due-diligence/fraud-caution note (petroleum
storage is a known fraud target; buyers are advised to verify counterparties independently).
Contains the one permitted "tankfarm" spelling reference, in FAQ form as specified. Links to
homepage, storage services, terminal/markets, all four product pages, and the enquiry form.

## Enquiry form

Rebuilt to RFQ-style: name, company, company website, business email, phone/WhatsApp, product,
product specification, quantity + unit, preferred port (Rotterdam/Houston/Jurong-Singapore/
Other), requested start date, storage duration, vessel status, expected vessel arrival,
transfer/throughput requirements, message, and a required consent checkbox. Submit label is
"Submit Storage Requirement." No passport, banking, proof-of-funds, cryptocurrency or KYC
fields were added, per instruction — confirmed by reading `contact-schema.ts` field-by-field.

## Structured data

`Organization`/`LocalBusiness`/`Service` schema already separates `name` (Blue Gate Tank Farm)
from `legalName` (Blue Gate Shipping and Trade B.V.) from the branding-correction pass earlier
this session — left as-is, no capacity/ownership/review/award data added.

## Claims deliberately not added

No new or stronger claims were introduced anywhere in this pass about: tank or terminal
ownership, current tank availability, TSA/TSR issuance, product ownership, shipowner
contracts, certifications, exact controlled storage capacity, guaranteed injection, or
guaranteed port acceptance. CTAs use "Submit Storage Requirement" / "Request Capacity Review"
style language throughout, not "guaranteed," "instant," or "available" phrasing.

## Validation

- **Formatter**: `prettier --write .` — ran clean.
- **Lint**: `eslint .` — one pre-existing error in `TopBarPopup.tsx` (a React `setState`-in-
  effect issue), present before this session's changes and unrelated to SEO work; not fixed as
  out of scope for this pass.
- **Type check**: `tsc --noEmit` — clean.
- **Production build**: `next build --webpack` — clean, all routes compiled (see below for
  count).

## Remaining recommendations requiring Search Console access

- Submit the updated sitemap and request indexing for `/`, `/services/oil-storage`,
  `/terminal`, the four product pages, `/services/shipping`, and the new guide.
- Once indexed, monitor Queries/Impressions/CTR/Average Position in Search Console to see
  which of the targeted phrases are actually being searched and adjust — none of that data
  exists yet to act on.
- Consider the three remaining guides (leasing guide, Rotterdam guide, transfer/throughput
  guide) as a follow-up pass — not built in this session given time constraints; only "What Is
  an Oil Tank Farm?" was completed as agreed scope for one guide.
