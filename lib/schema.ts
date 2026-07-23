import { site } from '@/config/site'
import type { Product } from '@/config/products'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bluegou.com'

type JsonLd = Record<string, unknown>

// ─── Organisation ──────────────────────────────────────────────────────────────

export function organizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Blue Gate Shipping and Trade B.V.',
    legalName: 'Blue Gate Shipping and Trade B.V.',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.svg`, // TODO: confirm with client — replace with production logo URL
    },
    foundingDate: String(site.founded),
    description:
      'Independent oil tank farm operator and oil storage terminal company based in Rotterdam, Netherlands. Providing ISO-certified storage for Jet A1, EN590 Diesel, Virgin Fuel Oil D6 and Crude Oil across five global terminals.',
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
      {
        '@type': 'ContactPoint',
        telephone: site.contact.phone,
        email: site.contact.email,
        contactType: 'sales',
        areaServed: ['NL', 'US', 'AE', 'SG'],
        availableLanguage: 'English',
      },
    ],
    identifier: [
      { '@type': 'PropertyValue', name: 'KVK', value: site.legal.kvk },
      { '@type': 'PropertyValue', name: 'Vestigingsnummer', value: site.legal.vestigingsnummer },
    ],
    sameAs: [
      site.socials.linkedin || null, // TODO: confirm with client — LinkedIn URL
    ].filter(Boolean),
  }
}

// ─── LocalBusiness ─────────────────────────────────────────────────────────────

export function localBusinessSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#local-business`,
    name: 'Blue Gate Shipping and Trade B.V.',
    description:
      'Oil tank farm and oil storage terminal in Rotterdam. Storage for Jet A1, EN590, D6 and Crude Oil.',
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
      latitude: 51.9225, // TODO: confirm with client — exact terminal coordinates
      longitude: 4.4792,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$$$',
    currenciesAccepted: 'EUR, USD',
    paymentAccepted: 'Invoice',
    areaServed: [
      { '@type': 'Country', name: 'Netherlands' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Singapore' },
      { '@type': 'Country', name: 'China' },
    ],
  }
}

// ─── Product ───────────────────────────────────────────────────────────────────

export function productSchema(product: Product): JsonLd {
  const standard = product.specifications.find((s) => s.property === 'Standard')?.value ?? ''
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortPositioning,
    category: product.category,
    url: `${SITE_URL}/products/${product.slug}`,
    brand: {
      '@type': 'Brand',
      name: 'Blue Gate Shipping and Trade B.V.',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Blue Gate Shipping and Trade B.V.',
      },
      areaServed: 'Worldwide',
      description: 'Storage allocation available. Contact trading desk for tariffs.',
    },
    additionalProperty: [
      ...(standard
        ? [{ '@type': 'PropertyValue', name: 'Storage Standard', value: standard }]
        : []),
      {
        '@type': 'PropertyValue',
        name: 'Terminal Location',
        value: 'Rotterdam, Netherlands',
      },
    ],
  }
}

// ─── Service ───────────────────────────────────────────────────────────────────

export function serviceSchema(service: {
  name: string
  description: string
  serviceType: string
  path: string
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
      name: 'Blue Gate Shipping and Trade B.V.',
      url: SITE_URL,
    },
    areaServed: ['Rotterdam', 'Houston', 'Fujairah', 'Jurong', 'Zhoushan', 'Worldwide'],
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
  }
}

// ─── FAQPage ───────────────────────────────────────────────────────────────────

export function storageFaqSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the Rotterdam oil storage capacity at Blue Gate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Blue Gate operates a Rotterdam oil tank farm with a total nominal capacity of approximately 2.8 million m³ across 14+ tanks. Tanks range from 10,000 m³ to 80,000 m³. Available capacity can be confirmed by contacting our operations desk at storage@bluegou.com.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I lease storage tanks at the Blue Gate Rotterdam terminal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Blue Gate offers short-term and long-term tank leasing at our Rotterdam oil tank farm. Tank leasing rates are quoted per m³ per month with throughput rebates for volume commitments. Contact us for a tariff schedule.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is tank farm storage available in Houston?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Blue Gate operates a petroleum storage terminal on the US Gulf Coast in Houston. Contact our operations desk to enquire about available tank farm capacity in Houston and current leasing rates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Blue Gate supply Jet A1 fuel in Rotterdam?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Blue Gate is an oil storage company and Jet A1 fuel storage specialist in Rotterdam. We store Jet A1 to ASTM D1655 and DEF STAN 91-091 specification in nitrogen-blanketed fixed-roof tanks. We work with Jet A1 fuel suppliers and off-takers. Contact us to discuss storage allocation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I contact Blue Gate for a petroleum storage enquiry in Fujairah?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For petroleum storage enquiries at our Fujairah terminal, contact us at storage@bluegou.com or call +31 97005033211. Our Fujairah operations provide crude oil and refined product storage outside the Strait of Hormuz.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Blue Gate operate a storage terminal in Zhoushan, China?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Blue Gate operates a bonded bulk-liquid storage terminal in Zhoushan, China, serving East Asian crude and refined product flows. Contact our operations desk to enquire about available tank farm capacity in Zhoushan.',
        },
      },
      {
        '@type': 'Question',
        name: 'What products does Blue Gate store at its oil tank farm?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Blue Gate stores four core products: Jet A1 aviation fuel (ASTM D1655), EN590 Diesel (ULSD, ≤10 ppm sulphur), Virgin Fuel Oil D6 (ASTM D396), and Crude Oil of various origins including Brent, WTI, Urals, Bonny Light and CPC Blend.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Blue Gate a listed oil and gas storage company?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Blue Gate Shipping and Trade B.V. is an independent oil and gas storage company registered in the Netherlands (KVK 98572695, Vestigingsnummer 000063726912). We operate oil tank farms in Rotterdam, Fujairah, Houston, Jurong and Zhoushan.',
        },
      },
    ],
  }
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
  }
}

// ─── AboutPage ─────────────────────────────────────────────────────────────────

export function aboutPageSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${SITE_URL}/about`,
    name: 'About Blue Gate Shipping and Trade B.V.',
    mainEntity: { '@id': `${SITE_URL}/#organization` },
  }
}

// ─── ContactPage ───────────────────────────────────────────────────────────────

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
