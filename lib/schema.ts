import { site } from '@/config/site';
import type { Product } from '@/config/products';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bluegou.com';

type JsonLd = Record<string, unknown>;

// ─── Organisation ──────────────────────────────────────────────────────────────

export function organizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Blue Gate Tank Farm',
    legalName: 'Blue Gate Shipping and Trade B.V.',
    brand: {
      '@type': 'Brand',
      name: 'Blue Gate Tank Farm',
    },
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.svg`,
    },
    foundingDate: String(site.founded),
    description:
      'Blue Gate Tank Farm provides specialist petroleum logistics and commercial support services for energy-sector clients, based in Rotterdam, Netherlands.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postcode,
      addressCountry: 'NL',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: site.contact.phone,
        email: site.contact.email,
        contactType: 'customer service',
        areaServed: 'Worldwide',
        availableLanguage: 'English',
      },
    ],
    identifier: [
      { '@type': 'PropertyValue', name: 'KVK', value: site.legal.kvk },
      { '@type': 'PropertyValue', name: 'Vestigingsnummer', value: site.legal.vestigingsnummer },
    ],
    sameAs: [site.socials.linkedin || null].filter(Boolean),
  };
}

// ─── LocalBusiness ─────────────────────────────────────────────────────────────

export function localBusinessSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#local-business`,
    name: 'Blue Gate Tank Farm',
    legalName: 'Blue Gate Shipping and Trade B.V.',
    description:
      'Blue Gate Tank Farm provides specialist petroleum logistics and commercial support services for energy-sector clients.',
    url: SITE_URL,
    telephone: site.contact.phone,
    email: site.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postcode,
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.9225,
      longitude: 4.4792,
    },
    priceRange: '$$$$',
    currenciesAccepted: 'EUR, USD',
    paymentAccepted: 'Invoice',
    areaServed: {
      '@type': 'Country',
      name: 'Netherlands',
    },
  };
}

// ─── Product ───────────────────────────────────────────────────────────────────

export function productSchema(product: Product): JsonLd {
  const standard = product.specifications.find((s) => s.property === 'Standard')?.value ?? '';
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortPositioning,
    category: product.category,
    url: `${SITE_URL}/products/${product.slug}`,
    brand: {
      '@type': 'Brand',
      name: 'Blue Gate Tank Farm',
    },
    additionalProperty: [
      ...(standard
        ? [{ '@type': 'PropertyValue', name: 'Reference Standard', value: standard }]
        : []),
    ],
  };
}

// ─── Service ───────────────────────────────────────────────────────────────────

export function serviceSchema(service: {
  name: string;
  description: string;
  serviceType: string;
  path: string;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    url: `${SITE_URL}${service.path}`,
    provider: {
      '@type': 'Organization',
      name: 'Blue Gate Tank Farm',
      legalName: 'Blue Gate Shipping and Trade B.V.',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Netherlands',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE_URL}/contact`,
      servicePhone: site.contact.phone,
      servicePostalAddress: {
        '@type': 'PostalAddress',
        addressLocality: 'Rotterdam',
        addressCountry: 'NL',
      },
    },
  };
}

// ─── BreadcrumbList ────────────────────────────────────────────────────────────

export function breadcrumbSchema(items: { name: string; url: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── AboutPage ─────────────────────────────────────────────────────────────────

export function aboutPageSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${SITE_URL}/about`,
    name: 'About Blue Gate Tank Farm',
    mainEntity: { '@id': `${SITE_URL}/#organization` },
  };
}

// ─── ContactPage ───────────────────────────────────────────────────────────────

export function contactPageSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: `${SITE_URL}/contact`,
    name: 'Contact Blue Gate Tank Farm',
    mainEntity: {
      '@type': 'ContactPoint',
      telephone: site.contact.phone,
      email: site.contact.email,
      contactType: 'customer service',
      areaServed: 'Worldwide',
    },
  };
}
