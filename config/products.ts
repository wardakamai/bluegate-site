export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductStorage = {
  type: string;
  capacityRange: string;
  // TODO: confirm with client — real tank IDs
  tankIds: string[];
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  standard: string;
  keySpecs: ProductSpec[];
  fullSpecs: ProductSpec[];
  storage: ProductStorage;
  unNumber: string;
  hazClass: string;
  packingGroup: string;
};

export const products: Product[] = [
  {
    slug: 'jet-a1',
    name: 'Jet A1 Fuel',
    category: 'Aviation Fuel',
    tagline: 'Aviation-grade kerosene. Certified to ASTM D1655 and DEF STAN 91-091.',
    standard: 'ASTM D1655 / DEF STAN 91-091',
    keySpecs: [
      { label: 'Density @15°C', value: '775–840 kg/m³' },
      { label: 'Flash Point', value: '≥38°C' },
      { label: 'Freeze Point', value: '≤ −47°C' },
      { label: 'Sulphur', value: '≤0.30% m/m' },
    ],
    fullSpecs: [
      { label: 'Standard', value: 'ASTM D1655 / DEF STAN 91-091' },
      { label: 'Density @15°C', value: '775–840 kg/m³' },
      { label: 'Flash Point', value: '≥38°C' },
      { label: 'Freeze Point', value: '≤ −47°C' },
      { label: 'Distillation 10% recovered', value: '≤205°C; FBP ≤300°C' },
      { label: 'Sulphur', value: '≤0.30% m/m (≤10 ppm ULS option)' },
      { label: 'Aromatics', value: '≤25% v/v' },
      { label: 'UN Number', value: 'UN 1863' },
      { label: 'Hazard Class', value: '3' },
      { label: 'Packing Group', value: 'III' },
    ],
    storage: {
      type: 'Dedicated stainless or epoxy-lined fixed-roof tanks, nitrogen-blanketed where required',
      capacityRange: '5,000–25,000 m³',
      tankIds: [], // TODO: confirm with client
    },
    unNumber: 'UN 1863',
    hazClass: '3',
    packingGroup: 'III',
  },
  {
    slug: 'diesel-en590',
    name: 'Diesel EN590',
    category: 'Road Fuel',
    tagline: 'Ultra-low-sulphur diesel. Compliant with EN 590:2022.',
    standard: 'EN 590:2022',
    keySpecs: [
      { label: 'Sulphur', value: '≤10 ppm (ULSD)' },
      { label: 'Cetane Number', value: '≥51' },
      { label: 'Density @15°C', value: '820–845 kg/m³' },
      { label: 'Flash Point', value: '≥55°C' },
    ],
    fullSpecs: [
      { label: 'Standard', value: 'EN 590:2022' },
      { label: 'Sulphur', value: '≤10 ppm (ULSD)' },
      { label: 'Cetane Number', value: '≥51' },
      { label: 'Density @15°C', value: '820–845 kg/m³' },
      { label: 'Flash Point', value: '≥55°C' },
      { label: 'CFPP', value: 'Class 0 to F (climate grade)' },
      { label: 'FAME', value: '≤7% v/v (B7) or 0% (B0)' },
      { label: 'UN Number', value: 'UN 1202' },
      { label: 'Hazard Class', value: '3' },
      { label: 'Packing Group', value: 'III' },
    ],
    storage: {
      type: 'Floating-roof or internal-floating-roof tanks',
      capacityRange: '5,000–50,000 m³',
      tankIds: [], // TODO: confirm with client
    },
    unNumber: 'UN 1202',
    hazClass: '3',
    packingGroup: 'III',
  },
  {
    slug: 'virgin-fuel-oil-d6',
    name: 'Virgin Fuel Oil D6',
    category: 'Residual Fuel',
    tagline: 'Heavy residual fuel oil. Stored in heated, thermally maintained tanks.',
    standard: 'ASTM D396 / ISO 8217 RMG-RMK',
    keySpecs: [
      { label: 'Sulphur', value: '0.5–3.5% m/m' },
      { label: 'Density @15°C', value: '950–1010 kg/m³' },
      { label: 'Viscosity @50°C', value: 'Up to 380 cSt' },
      { label: 'Flash Point', value: '≥60°C' },
    ],
    fullSpecs: [
      { label: 'Standard', value: 'ASTM D396 / ISO 8217 RMG-RMK' },
      { label: 'Sulphur', value: '0.5–3.5% m/m (HSFO; LSFO variants available)' },
      { label: 'Density @15°C', value: '950–1010 kg/m³' },
      { label: 'Viscosity @50°C', value: 'Up to 380 cSt' },
      { label: 'Flash Point', value: '≥60°C' },
      { label: 'Pour Point', value: '≤30°C' },
      { label: 'UN Number', value: 'UN 3082 / UN 1993 (flash-dependent)' },
    ],
    storage: {
      type: 'Heated fixed-roof tanks with steam or thermal-oil coils',
      capacityRange: '10,000–80,000 m³',
      tankIds: [], // TODO: confirm with client
    },
    unNumber: 'UN 3082',
    hazClass: '3',
    packingGroup: 'III',
  },
  {
    slug: 'crude-oil',
    name: 'Crude Oil',
    category: 'Crude',
    tagline: 'Multi-origin crude handling. From Brent to Murban, stored at scale.',
    standard: 'Grade-specific — see specification table',
    keySpecs: [
      { label: 'API Range', value: '31–46°' },
      { label: 'Sulphur Range', value: '0.16–1.30%' },
      { label: 'Storage Capacity', value: '20,000–80,000 m³' },
      { label: 'Origins', value: 'UK, USA, Nigeria, Kazakhstan, UAE' },
    ],
    fullSpecs: [
      { label: 'Brent Blend', value: 'API ~38 · Sulphur 0.40% · UK/Norway' },
      { label: 'WTI', value: 'API ~39.6 · Sulphur 0.24% · USA' },
      { label: 'Urals', value: 'API ~31 · Sulphur 1.30% · Russia' },
      { label: 'Bonny Light', value: 'API ~33 · Sulphur 0.16% · Nigeria' },
      { label: 'CPC Blend', value: 'API ~46 · Sulphur 0.55% · Kazakhstan' },
      { label: 'Forties', value: 'API ~40 · Sulphur 0.56% · UK' },
      { label: 'Murban', value: 'API ~40 · Sulphur 0.78% · UAE' },
    ],
    storage: {
      type: 'Floating-roof tanks with vapour recovery system',
      capacityRange: '20,000–80,000 m³',
      tankIds: [], // TODO: confirm with client
    },
    unNumber: 'UN 1267',
    hazClass: '3',
    packingGroup: 'I / II / III (grade-dependent)',
  },
];
