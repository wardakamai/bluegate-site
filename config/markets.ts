// General, publicly-known information about energy markets Blue Gate Tank Farm works across.
// These are facts about the wider port/region — not claims about Blue Gate Tank Farm-owned
// or Blue Gate Tank Farm-operated infrastructure at these locations.

export type Market = {
  id: string;
  flag: string;
  city: string;
  country: string;
  region: string;
  keyword: string;
  description: string;
};

export const markets: Market[] = [
  {
    id: 'rotterdam',
    flag: '🇳🇱',
    city: 'Rotterdam',
    country: 'Netherlands',
    region: 'Northwest Europe',
    keyword: 'Oil Tank Farm Rotterdam',
    description:
      "Europe's largest port and a leading oil tank farm, refined-products and crude-oil " +
      'trading hub, anchoring the Amsterdam–Rotterdam–Antwerp (ARA) pricing region. A major ' +
      'market for EN590 diesel, Jet A1 and crude oil tank storage.',
  },
  {
    id: 'houston',
    flag: '🇺🇸',
    city: 'Houston',
    country: 'United States',
    region: 'US Gulf Coast',
    keyword: 'Oil Tank Farm Houston',
    description:
      'The primary US Gulf Coast energy hub, home to extensive oil tank farm and refining ' +
      'infrastructure serving Atlantic Basin and global petroleum markets, including crude ' +
      'oil and diesel tank storage.',
  },
  {
    id: 'jurong',
    flag: '🇸🇬',
    city: 'Jurong, Singapore',
    country: 'Singapore',
    region: 'Asia-Pacific',
    keyword: 'Jurong Oil Tank Farm',
    description:
      "Asia-Pacific's leading bunkering and petroleum trading hub, positioned on the Strait " +
      'of Malacca. Jurong Island is a major bulk liquid storage and oil tank farm location ' +
      'for the region.',
  },
];
