# Prompt 01 — Site Configuration

Read `CLAUDE.md` first. Then create the central configuration files that are the single source of truth for nav, brand, contact info, terminals, and products.

## Tasks

### 1. `config/site.ts`

Export typed objects:

```ts
export const site = {
  name: 'Blue Gate Shipping and Trade B.V.',
  shortName: 'Blue Gate',
  founded: 1964,
  address: {
    street: 'Prinsenlaan 450',
    postcode: '3066 KD',
    city: 'Rotterdam',
    country: 'Netherlands',
  },
  contact: {
    email: 'storage@bluegou.com',
    phone: '+31 97005034730',
    phoneLink: 'tel:+31970050347​30',
    whatsapp:
      'https://wa.me/31970050347​30?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20storage%20capacity.',
  },
  legal: {
    kvk: '86686607',
    safe: 'NL06152688',
  },
  socials: {
    linkedin: '', // TODO: confirm with client
  },
};

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const primaryNav: NavItem[] = [
  /* 10 items per CLAUDE.md §5.1, with Services children per §5.2 */
];

export const ctaPrimary = { label: 'Request a Quote →', href: '/contact?intent=quote' };
```

Build the full `primaryNav` array per `CLAUDE.md` §5.1 and §5.2.

### 2. `config/terminals.ts`

Export an array of terminals with: `id`, `flag`, `city`, `country`, `region`, `incoterm` (always `'Storage & Throughput'` for Blue Gate, not FOB — we're not toocrudeoil), `productTags`, `capacityM3`, `description`. Mark Houston and Singapore with a `// TODO: confirm with client — operational status` comment and a `status: 'tbc'` field; Rotterdam is `status: 'active'`.

### 3. `config/products.ts`

Export the 4 products exactly as specified in `CLAUDE.md` §6. Each product must have:

```ts
type Product = {
  slug: 'jet-a1' | 'diesel-en590' | 'virgin-fuel-oil-d6' | 'crude-oil';
  name: string;
  category: 'AVIATION' | 'DIESEL' | 'FUEL OIL' | 'CRUDE';
  shortPositioning: string; // one line
  atAGlance: { label: string; value: string }[]; // 4 entries
  specifications: { property: string; value: string; method?: string }[];
  matchingStorage: {
    tankType: string;
    capacityRange: string;
    features: string[];
  };
  origins: string; // narrative paragraph
  handlingSafety: {
    unNumber: string;
    class: string;
    packingGroup: string;
    sdsUrl: string; // '/specs/<slug>-sds.pdf'
  };
  specSheetUrl: string; // '/specs/<slug>-spec.pdf'
};
```

For the Crude Oil product, in place of a single `specifications` array, also include a `gradeComparison` table matching the 7-row table in `CLAUDE.md` §6.

Populate all four products with the data from `CLAUDE.md` §6 verbatim.

### 4. `config/services.ts`

Export the four service pillars: `oil-storage`, `product-inspection`, `laboratory`, `shipping`. Each with `slug`, `title`, `shortDescription`, `iconName` (lucide icon name as string), and optional `subSections` (for shipping: trucking, rail, cargo, tanker).

### 5. Typing

Add `tsconfig.json` path alias `@/*` → `./*` if not already present (Next.js default does this with `baseUrl: '.'`). Verify imports like `import { site } from '@/config/site'` work.

### 6. Smoke test

Update `app/page.tsx` to import from `@/config/site` and render `{site.name}` and `{site.contact.email}` to prove the config loads.

## Verification

- [ ] `pnpm dev` runs without errors
- [ ] Placeholder page now reads `Blue Gate Shipping and Trade B.V.` and the email from config
- [ ] `pnpm tsc --noEmit` passes with no type errors
- [ ] No `any` types anywhere in the config files

Commit as `feat: site, products, terminals, services config`. Await prompt 02.
