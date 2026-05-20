// Single source of truth for brand, contact, navigation.
// Never hardcode these values anywhere else — always import from here.

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
    phoneLink: 'tel:+3197005034730',
    whatsapp:
      'https://wa.me/3197005034730?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20storage%20capacity.',
  },
  legal: {
    kvk: '86686607',
    safe: 'NL06152688',
  },
  socials: {
    linkedin: '', // TODO: confirm with client
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

// §5.1 — 10 primary nav items (left-to-right); Services carries §5.2 children
export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Oil Storage Services', href: '/services/oil-storage' },
      { label: 'Product Inspection', href: '/services/product-inspection' },
      { label: 'Laboratory', href: '/services/laboratory' },
      { label: 'Shipping Services', href: '/services/shipping' },
    ],
  },
  { label: 'Terminal', href: '/terminal' },
  { label: 'Storage Facility', href: '/storage-facility' },
  { label: 'Markets', href: '/markets' },
  { label: 'Products', href: '/products' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'HSE', href: '/hse' },
  { label: 'Contact', href: '/contact' },
];

export const ctaPrimary = {
  label: 'Request a Quote →',
  href: '/contact?intent=quote',
} as const;

export const ctaVisit = {
  label: 'Book a Site Visit →',
  href: '/contact?intent=visit',
} as const;
