export type ServiceSubSection = {
  anchor: string;
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  href: string;
  shortDescription: string;
  iconName: string;
  subSections?: ServiceSubSection[];
};

export const services: Service[] = [
  {
    slug: 'oil-storage',
    title: 'Oil Storage Services',
    href: '/services/oil-storage',
    shortDescription:
      'Fixed-roof, floating-roof, and heated tank storage for the full spectrum of bulk liquid petroleum products. Capacity from 5,000 to 80,000 m³ per tank.',
    iconName: 'Cylinder',
  },
  {
    slug: 'product-inspection',
    title: 'Product Inspection',
    href: '/services/product-inspection',
    shortDescription:
      'Independent quantity and quality inspection at all stages — ship, shore, and tank. Custody transfer measurements traceable to international standards.',
    iconName: 'ClipboardCheck',
  },
  {
    slug: 'laboratory',
    title: 'Laboratory',
    href: '/services/laboratory',
    shortDescription:
      'On-site analytical laboratory for product quality assurance. Testing against ASTM, EN, and ISO methods for all handled petroleum grades.',
    iconName: 'FlaskConical',
  },
  {
    slug: 'shipping',
    title: 'Shipping Services',
    href: '/services/shipping',
    shortDescription:
      'End-to-end logistics from terminal gate to final destination. Trucking, rail, coastal cargo, and ocean tanker coordination.',
    iconName: 'Ship',
    subSections: [
      {
        anchor: 'trucking',
        title: 'Road Tanker',
        description:
          'ADR-compliant road tanker dispatch direct from Rotterdam terminal. Loading slots bookable 48 hours in advance.',
      },
      {
        anchor: 'rail',
        title: 'Rail',
        description:
          'Tank-wagon loading for high-volume overland movements to Central and Eastern European markets.',
      },
      {
        anchor: 'cargo',
        title: 'Coastal Cargo',
        description:
          'Coaster and inland-waterway barge services connecting Rotterdam to ARA ports and Rhine-corridor terminals.',
      },
      {
        anchor: 'tanker',
        title: 'Ocean Tanker',
        description:
          'VLCC, Aframax, and product-tanker coordination for intercontinental shipments. Berth scheduling managed in-house.',
      },
    ],
  },
];
