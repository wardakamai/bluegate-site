export type TerminalStatus = 'active' | 'tbc';

export type Terminal = {
  id: 'rotterdam' | 'fujairah' | 'houston' | 'jurong';
  flag: string;
  city: string;
  country: string;
  region: string;
  incoterm: string;
  productTags: string[];
  capacityM3: number;
  description: string;
  flagship: boolean;
  status: TerminalStatus;
  image: string;
  imageAlt: string;
};

export const terminals: Terminal[] = [
  {
    id: 'rotterdam',
    flag: '🇳🇱',
    city: 'Rotterdam',
    country: 'Netherlands',
    region: 'Northwest Europe',
    incoterm: 'Storage & Throughput',
    productTags: ['Jet A1', 'EN590', 'D6', 'Crude'],
    capacityM3: 2_800_000, // TODO: confirm with client
    description:
      "Our flagship terminal at the Port of Rotterdam — Europe's largest energy hub. " +
      'Deep-water marine access, dedicated jetties, and pipeline interconnection across the ARA blending corridor.',
    flagship: true,
    status: 'active',
    image: '/images/terminal-rotterdam.jpg',
    imageAlt: 'Aerial view of Blue Gate Rotterdam flagship oil terminal',
  },
  {
    id: 'fujairah',
    flag: '🇦🇪',
    city: 'Fujairah',
    country: 'United Arab Emirates',
    region: 'Middle East / Indian Ocean',
    incoterm: 'Storage & Throughput',
    productTags: ['Crude', 'D6', 'EN590', 'Jet A1'],
    capacityM3: 1_400_000, // TODO: confirm with client
    description:
      'Strategic position on the Arabian Sea outside the Strait of Hormuz. ' +
      'World-class bunkering and crude-blending hub serving Middle East and Indian Ocean flows.',
    flagship: false,
    status: 'tbc', // TODO: confirm with client
    image: '/images/terminal-fujairah.jpg',
    imageAlt: 'Blue Gate Fujairah oil terminal and Arabian Sea anchorage',
  },
  {
    id: 'houston',
    flag: '🇺🇸',
    city: 'Houston',
    country: 'United States',
    region: 'US Gulf Coast',
    incoterm: 'Storage & Throughput',
    productTags: ['Crude', 'EN590', 'Jet A1'],
    capacityM3: 1_600_000, // TODO: confirm with client
    description:
      'Gulf Coast position with direct pipeline connectivity to US refineries and extensive marine export infrastructure.',
    flagship: false,
    status: 'tbc', // TODO: confirm with client
    image: '/images/terminal-houston.jpg',
    imageAlt: 'Blue Gate Houston Ship Channel petroleum terminal',
  },
  {
    id: 'jurong',
    flag: '🇸🇬',
    city: 'Jurong',
    country: 'Singapore',
    region: 'Asia-Pacific',
    incoterm: 'Storage & Throughput',
    productTags: ['D6', 'Jet A1', 'EN590'],
    capacityM3: 1_200_000, // TODO: confirm with client
    description:
      'Asia-Pacific bunkering and bulk-liquid specialist with direct access to the Strait of Malacca trade routes.',
    flagship: false,
    status: 'tbc', // TODO: confirm with client
    image: '/images/terminal-jurong.jpg',
    imageAlt: 'Blue Gate Jurong Island petroleum terminal Singapore',
  },
];

export const flagshipTerminal = terminals.find((t) => t.flagship)!; // Rotterdam
export const secondaryTerminals = terminals.filter((t) => !t.flagship);
