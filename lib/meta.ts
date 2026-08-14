import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bluegou.com';

/**
 * Builds a complete, consistent Metadata object for a page.
 * Adds canonical URL, OG type/url/images, and Twitter card automatically.
 *
 * @param path  URL path relative to site root, e.g. 'about', 'services/oil-storage'.
 *              Pass '' for the home page.
 */
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = path ? `${SITE_URL}/${path}` : SITE_URL;
  const ogImage = `${SITE_URL}/api/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
