export type ProductSlug = 'jet-a1' | 'diesel-en590' | 'virgin-fuel-oil-d6' | 'crude-oil';

export type ProductCategory = 'AVIATION' | 'DIESEL' | 'FUEL OIL' | 'CRUDE';

export type TankCompatTag = 'Jet A1' | 'EN590' | 'D6' | 'Crude';

export type SpecRow = {
  property: string;
  value: string;
  method?: string;
};

export type GradeRow = {
  grade: string;
  api: string;
  sulphurPct: number;
  origin: string;
};

export type Product = {
  slug: ProductSlug;
  name: string;
  category: ProductCategory;
  tankCompatTag: TankCompatTag; // maps this product to config/tanks.ts compatible array
  shortPositioning: string;
  heroImage: string;
  heroImageAlt: string;
  atAGlance: { label: string; value: string }[];
  specifications: SpecRow[];
  gradeComparison?: GradeRow[]; // crude oil only
  matchingStorage: {
    tankType: string;
    capacityRange: string;
    features: string[];
  };
  origins: string;
  endUsers: string[]; // 3 typical end-user types
  handlingSafety: {
    unNumber: string;
    class: string;
    packingGroup: string;
    sdsUrl: string;
  };
  specSheetUrl: string;
};

export const products: Product[] = [
  {
    slug: 'jet-a1',
    name: 'Jet A1 Fuel',
    category: 'AVIATION',
    tankCompatTag: 'Jet A1',
    shortPositioning:
      'Aviation-grade kerosene compliant with ASTM D1655 and DEF STAN 91-091. Stored in dedicated tanks with nitrogen blanketing where required.',
    heroImage: '/images/product-jet-a1.jpg',
    heroImageAlt: 'Jet A1 aviation fuel sampling at Blue Gate laboratory',
    atAGlance: [
      { label: 'Density @15°C', value: '775–840 kg/m³' },
      { label: 'Flash Point', value: '≥38°C' },
      { label: 'Freeze Point', value: '≤ −47°C' },
      { label: 'Sulphur', value: '≤0.30% m/m' },
    ],
    specifications: [
      { property: 'Standard', value: 'ASTM D1655 / DEF STAN 91-091' },
      { property: 'Density @15°C', value: '775–840 kg/m³', method: 'ASTM D4052' },
      { property: 'Flash Point', value: '≥38°C', method: 'ASTM D56' },
      { property: 'Freeze Point', value: '≤ −47°C', method: 'ASTM D2386' },
      { property: 'Distillation 10% recovered', value: '≤205°C; FBP ≤300°C', method: 'ASTM D86' },
      { property: 'Sulphur', value: '≤0.30% m/m (≤10 ppm ULS option)', method: 'ASTM D1266' },
      { property: 'Aromatics', value: '≤25% v/v', method: 'ASTM D1319' },
      { property: 'UN Number', value: 'UN 1863' },
      { property: 'Hazard Class', value: '3' },
      { property: 'Packing Group', value: 'III' },
    ],
    matchingStorage: {
      tankType: 'Nitrogen-Blanketed Fixed Roof or Fixed Roof (stainless / epoxy-lined)',
      capacityRange: '5,000–25,000 m³',
      features: [
        'Nitrogen blanketing where required',
        'Dedicated product segregation — no cross-contamination',
        'Inline filtration and water separation',
        'Grounding and bonding for static control',
        'Compressed inspection cycle per DEF STAN 91-091',
      ],
    },
    origins:
      'Jet A1 is sourced from refineries across Northwestern Europe and the Middle East, with Rotterdam receiving product from Rotterdam-area refineries as well as ARA (Amsterdam-Rotterdam-Antwerp) hub pipelines. The product is suitable for international commercial aviation, military aviation, and ground support equipment fuelling.',
    endUsers: [
      'Commercial aviation operators',
      'Military aviation units',
      'Ground support equipment (GSE) fleets',
    ],
    handlingSafety: {
      unNumber: 'UN 1863',
      class: '3',
      packingGroup: 'III',
      sdsUrl: '/specs/jet-a1-sds.pdf',
    },
    specSheetUrl: '/specs/jet-a1-spec.pdf',
  },

  {
    slug: 'diesel-en590',
    name: 'Diesel EN590',
    category: 'DIESEL',
    tankCompatTag: 'EN590',
    shortPositioning:
      'Ultra-low-sulphur diesel (ULSD) compliant with EN 590:2022. Available in B0 and B7 FAME blends. Suitable for all European climate classes.',
    heroImage: '/images/product-diesel-en590.jpg',
    heroImageAlt: 'EN590 diesel fuel loading at Blue Gate Rotterdam terminal',
    atAGlance: [
      { label: 'Sulphur', value: '≤10 ppm (ULSD)' },
      { label: 'Cetane Number', value: '≥51' },
      { label: 'Density @15°C', value: '820–845 kg/m³' },
      { label: 'Flash Point', value: '≥55°C' },
    ],
    specifications: [
      { property: 'Standard', value: 'EN 590:2022' },
      { property: 'Sulphur', value: '≤10 ppm (ULSD)', method: 'EN ISO 20846' },
      { property: 'Cetane Number', value: '≥51', method: 'EN ISO 5165' },
      { property: 'Density @15°C', value: '820–845 kg/m³', method: 'EN ISO 12185' },
      { property: 'Flash Point', value: '≥55°C', method: 'EN ISO 2719' },
      { property: 'CFPP', value: 'Class 0 to F (climate grade)', method: 'EN 116' },
      { property: 'FAME content', value: '≤7% v/v (B7) or 0% (B0)', method: 'EN 14078' },
      { property: 'UN Number', value: 'UN 1202' },
      { property: 'Hazard Class', value: '3' },
      { property: 'Packing Group', value: 'III' },
    ],
    matchingStorage: {
      tankType: 'Floating-roof or internal-floating-roof tank',
      capacityRange: '5,000–50,000 m³',
      features: [
        'Floating roof for vapour emission control',
        'Internal floating roof option for high-vapour-pressure blends',
        'Dedicated ULSD segregation — prevents cross-contamination',
        'Heated trace lines for winter-grade (CFPP) product',
      ],
    },
    origins:
      'EN590 diesel is sourced from ARA-hub refineries and major European refinery groups. Rotterdam position allows rapid turnaround for road tanker, barge, and coaster delivery across the Northwest European market. Both B0 (biodiesel-free) and B7 (up to 7% FAME) blends are held in segregated tankage.',
    endUsers: [
      'Road transport operators and hauliers',
      'Agricultural machinery operators',
      'Industrial generators and standby power',
    ],
    handlingSafety: {
      unNumber: 'UN 1202',
      class: '3',
      packingGroup: 'III',
      sdsUrl: '/specs/diesel-en590-sds.pdf',
    },
    specSheetUrl: '/specs/diesel-en590-spec.pdf',
  },

  {
    slug: 'virgin-fuel-oil-d6',
    name: 'Virgin Fuel Oil D6',
    category: 'FUEL OIL',
    tankCompatTag: 'D6',
    shortPositioning:
      'Heavy residual fuel oil graded to ASTM D396 and ISO 8217 RMG-RMK. Stored in thermally maintained heated tanks with steam or thermal-oil coil systems.',
    heroImage: '/images/product-d6-fuel-oil.jpg',
    heroImageAlt: 'Virgin Fuel Oil D6 heated storage tank at Blue Gate',
    atAGlance: [
      { label: 'Density @15°C', value: '950–1010 kg/m³' },
      { label: 'Viscosity @50°C', value: 'Up to 380 cSt' },
      { label: 'Flash Point', value: '≥60°C' },
      { label: 'Sulphur', value: '0.5–3.5% m/m' },
    ],
    specifications: [
      { property: 'Standard', value: 'ASTM D396 / ISO 8217 RMG-RMK' },
      { property: 'Sulphur', value: '0.5–3.5% m/m (HSFO; LSFO variants available)', method: 'ISO 8754' },
      { property: 'Density @15°C', value: '950–1010 kg/m³', method: 'ISO 3675' },
      { property: 'Viscosity @50°C', value: 'Up to 380 cSt', method: 'ISO 3104' },
      { property: 'Flash Point', value: '≥60°C', method: 'ISO 2719' },
      { property: 'Pour Point', value: '≤30°C', method: 'ISO 3016' },
      { property: 'UN Number', value: 'UN 3082 / UN 1993 (flash-dependent)' },
      { property: 'Hazard Class', value: '3' },
      { property: 'Packing Group', value: 'III' },
    ],
    matchingStorage: {
      tankType: 'Heated Fixed Roof tank',
      capacityRange: '10,000–80,000 m³',
      features: [
        'Steam or thermal-oil heating coils',
        'Lagged (insulated) tank shell',
        'Circulation pumps for viscosity maintenance',
        'Temperature monitoring with high/low alarms',
      ],
    },
    origins:
      'Virgin Fuel Oil D6 is a straight-run residual fraction, sourced unblended from refinery bottoms. Rotterdam receives D6 from Middle Eastern, West African, and Russian-origin refineries via VLCC and Aframax tanker calls. The product serves power generation, industrial burner applications, and marine auxiliary fuel markets.',
    endUsers: [
      'Power generation utilities and IPPs',
      'Marine auxiliary fuel users',
      'Industrial process burners and boilers',
    ],
    handlingSafety: {
      unNumber: 'UN 3082 / UN 1993',
      class: '3',
      packingGroup: 'III',
      sdsUrl: '/specs/virgin-fuel-oil-d6-sds.pdf',
    },
    specSheetUrl: '/specs/virgin-fuel-oil-d6-spec.pdf',
  },

  {
    slug: 'crude-oil',
    name: 'Crude Oil',
    category: 'CRUDE',
    tankCompatTag: 'Crude',
    shortPositioning:
      'Multi-origin crude storage across seven benchmark grades. Floating-roof tanks with vapour recovery systems, scaled from 20,000 to 80,000 m³ per tank.',
    heroImage: '/images/product-crude-oil.jpg',
    heroImageAlt: 'Crude oil transfer at Blue Gate Rotterdam tank farm',
    atAGlance: [
      { label: 'API Gravity Range', value: '~31–46°API' },
      { label: 'Sulphur Range', value: '0.16–1.30% m/m' },
      { label: 'Tank Capacity', value: '20,000–80,000 m³' },
      { label: 'Grades Handled', value: '7 benchmark grades' },
    ],
    specifications: [
      { property: 'Brent Blend', value: 'API ~38 · Sulphur 0.40%', method: 'UK / Norway' },
      { property: 'WTI', value: 'API ~39.6 · Sulphur 0.24%', method: 'USA' },
      { property: 'Urals', value: 'API ~31 · Sulphur 1.30%', method: 'Russia' },
      { property: 'Bonny Light', value: 'API ~33 · Sulphur 0.16%', method: 'Nigeria' },
      { property: 'CPC Blend', value: 'API ~46 · Sulphur 0.55%', method: 'Kazakhstan' },
      { property: 'Forties', value: 'API ~40 · Sulphur 0.56%', method: 'UK' },
      { property: 'Murban', value: 'API ~40 · Sulphur 0.78%', method: 'UAE' },
    ],
    gradeComparison: [
      { grade: 'Brent Blend', api: '~38',   sulphurPct: 0.40, origin: 'UK / Norway'  },
      { grade: 'WTI',         api: '~39.6', sulphurPct: 0.24, origin: 'USA'          },
      { grade: 'Urals',       api: '~31',   sulphurPct: 1.30, origin: 'Russia'       },
      { grade: 'Bonny Light', api: '~33',   sulphurPct: 0.16, origin: 'Nigeria'      },
      { grade: 'CPC Blend',   api: '~46',   sulphurPct: 0.55, origin: 'Kazakhstan'   },
      { grade: 'Forties',     api: '~40',   sulphurPct: 0.56, origin: 'UK'           },
      { grade: 'Murban',      api: '~40',   sulphurPct: 0.78, origin: 'UAE'          },
    ],
    matchingStorage: {
      tankType: 'External Floating Roof tank with vapour recovery system',
      capacityRange: '20,000–80,000 m³',
      features: [
        'External floating roof with secondary seal',
        'Vapour recovery unit (VRU)',
        'Cathodic protection system',
        'Crude blending capability via manifold',
        'Custody transfer metering skids',
      ],
    },
    origins:
      'Blue Gate Rotterdam handles benchmark crude grades from seven origins: North Sea Brent and Forties via Sullom Voe and Hound Point; West Texas Intermediate (WTI) and Gulf Coast crudes via VLCC transhipment; Nigerian Bonny Light on direct West African tanker calls; Caspian CPC Blend via the Black Sea; Urals from Baltic Sea load ports; and Murban from Abu Dhabi via Strait of Hormuz routing.',
    endUsers: [
      'Refineries — feedstock for distillation',
      'Petrochemical complexes — naphtha and olefin feedstock',
      'Marine fuel blending and bunkering',
    ],
    handlingSafety: {
      unNumber: 'UN 1267',
      class: '3',
      packingGroup: 'I / II / III (grade-dependent)',
      sdsUrl: '/specs/crude-oil-sds.pdf',
    },
    specSheetUrl: '/specs/crude-oil-spec.pdf',
  },
];
