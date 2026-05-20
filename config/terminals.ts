export type TerminalStatus = 'active' | 'tbc';

export type Terminal = {
  id: string;
  flag: string;
  city: string;
  country: string;
  region: string;
  incoterm: string;
  productTags: string[];
  capacityM3: number;
  description: string;
  status: TerminalStatus;
};

export const terminals: Terminal[] = [
  {
    id: 'rotterdam',
    flag: '🇳🇱',
    city: 'Rotterdam',
    country: 'Netherlands',
    region: 'Europe',
    incoterm: 'Storage & Throughput',
    productTags: ['Jet A1', 'Diesel EN590', 'Fuel Oil D6', 'Crude Oil'],
    capacityM3: 80000,
    description:
      'Primary terminal on the Port of Rotterdam — Europe\'s largest cargo port. Fixed-roof, floating-roof, and heated tanks across a full product range. Direct pipeline access, road tanker bays, and vessel berths.',
    status: 'active',
  },
  {
    // TODO: confirm with client — operational status
    id: 'houston',
    flag: '🇺🇸',
    city: 'Houston',
    country: 'United States',
    region: 'North America',
    incoterm: 'Storage & Throughput',
    productTags: ['Crude Oil', 'Diesel EN590'],
    capacityM3: 0, // TODO: confirm with client
    description:
      'Gulf Coast terminal in the Houston Ship Channel corridor. Positioned for US crude and distillate storage pending final confirmation of operational status.', // TODO: confirm with client
    status: 'tbc',
  },
  {
    // TODO: confirm with client — operational status
    id: 'singapore',
    flag: '🇸🇬',
    city: 'Singapore',
    country: 'Singapore',
    region: 'Asia-Pacific',
    incoterm: 'Storage & Throughput',
    productTags: ['Jet A1', 'Fuel Oil D6'],
    capacityM3: 0, // TODO: confirm with client
    description:
      'Strategic Asia-Pacific hub at one of the world\'s busiest bunkering ports. Aviation fuel and residual fuel oil storage pending final confirmation of operational status.', // TODO: confirm with client
    status: 'tbc',
  },
];
