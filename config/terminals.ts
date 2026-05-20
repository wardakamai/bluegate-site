export type Terminal = {
  id: string;
  city: string;
  country: string;
  flag: string;
  incoterms: string[];
  products: string[];
  capacityM3: number;
  // TODO: confirm with client — are Houston and Singapore currently active?
  active: boolean;
};

export const terminals: Terminal[] = [
  {
    id: 'rotterdam',
    city: 'Rotterdam',
    country: 'Netherlands',
    flag: '🇳🇱',
    incoterms: ['FOB', 'CIF', 'DAP', 'EXW'],
    products: ['Jet A1', 'Diesel EN590', 'Fuel Oil D6', 'Crude Oil'],
    capacityM3: 80000,
    active: true,
  },
  {
    id: 'houston',
    city: 'Houston',
    country: 'United States',
    flag: '🇺🇸',
    incoterms: ['FOB', 'CIF'],
    products: ['Crude Oil', 'Diesel EN590'],
    capacityM3: 0, // TODO: confirm with client
    active: false, // TODO: confirm with client
  },
  {
    id: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    flag: '🇸🇬',
    incoterms: ['FOB', 'CIF', 'DAP'],
    products: ['Jet A1', 'Fuel Oil D6'],
    capacityM3: 0, // TODO: confirm with client
    active: false, // TODO: confirm with client
  },
];
