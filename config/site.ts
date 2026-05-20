export const siteConfig = {
  name: 'Blue Gate Shipping and Trade B.V.',
  shortName: 'Blue Gate',
  description:
    'Bulk liquid petroleum storage, terminal operations, and shipping. Rotterdam primary terminal with global reach.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bluegou.com',
  founded: 1964,

  contact: {
    email: 'storage@bluegou.com',
    phone: '+31 97005034730',
    whatsapp: 'https://wa.me/31970050347​30',
    address: {
      street: 'Prinsenlaan 450',
      city: 'Rotterdam',
      postcode: '3066 KD',
      country: 'Netherlands',
    },
  },

  legal: {
    kvk: '86686607',
    safeNo: 'NL06152688',
  },

  nav: [
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
  ],
} as const;
