import { site } from '@/config/site'
import type { Product } from '@/config/products'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bluegou.com'

type JsonLd = Record<string, unknown>

export function organizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: site.name,
    legalName: site.name,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.svg`, // TODO: confirm with client — replace with production logo URL
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postcode,
      addressLocality: site.address.city,
      addressCountry: 'NL',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.contact.phone,
      email: site.contact.email,
      contactType: 'customer service',
      areaServed: 'Worldwide',
      availableLanguage: 'en',
    },
    foundingDate: String(site.founded),
    sameAs: [
      site.socials.linkedin || null, // TODO: confirm with client — LinkedIn URL
    ].filter(Boolean),
  }
}

export function localBusinessSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#local-business`,
    name: site.name,
    url: SITE_URL,
    telephone: site.contact.phone,
    email: site.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postcode,
      addressLocality: site.address.city,
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.9064, // TODO: confirm with client — exact terminal coordinates
      longitude: 4.5463,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$$$',
  }
}

export function serviceSchema(name: string, description: string, path: string): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: 'Worldwide',
    serviceType: name,
  }
}

export function productSchema(product: Product): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortPositioning,
    url: `${SITE_URL}/products/${product.slug}`,
    brand: { '@type': 'Brand', name: site.name },
    additionalProperty: product.specifications.map((spec) => ({
      '@type': 'PropertyValue',
      name: spec.property,
      value: spec.value,
      ...(spec.method ? { measurementTechnique: spec.method } : {}),
    })),
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/products/${product.slug}`,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: { '@id': `${SITE_URL}/#organization` },
    },
  }
}

export function aboutPageSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${SITE_URL}/about`,
    name: 'About Blue Gate Shipping and Trade B.V.',
    mainEntity: { '@id': `${SITE_URL}/#organization` },
  }
}

export function contactPageSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: `${SITE_URL}/contact`,
    name: 'Contact Blue Gate Shipping and Trade B.V.',
    mainEntity: {
      '@type': 'ContactPoint',
      telephone: site.contact.phone,
      email: site.contact.email,
      contactType: 'customer service',
      areaServed: 'Worldwide',
    },
  }
}
