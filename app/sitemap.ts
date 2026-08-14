import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bluegou.com';

type Route = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
};

const ROUTES: Route[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: 'about', priority: 0.7, changeFrequency: 'monthly' },
  { path: 'terminal', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'markets', priority: 0.8, changeFrequency: 'daily' },
  { path: 'products', priority: 0.9, changeFrequency: 'monthly' },
  { path: 'products/jet-a1', priority: 0.85, changeFrequency: 'monthly' },
  { path: 'products/diesel-en590', priority: 0.85, changeFrequency: 'monthly' },
  { path: 'products/crude-oil', priority: 0.85, changeFrequency: 'monthly' },
  { path: 'products/virgin-fuel-oil-d6', priority: 0.85, changeFrequency: 'monthly' },
  { path: 'services', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'services/oil-storage', priority: 0.9, changeFrequency: 'monthly' },
  { path: 'services/product-inspection', priority: 0.7, changeFrequency: 'monthly' },
  { path: 'services/laboratory', priority: 0.7, changeFrequency: 'monthly' },
  { path: 'services/shipping', priority: 0.7, changeFrequency: 'monthly' },
  { path: 'sustainability', priority: 0.6, changeFrequency: 'monthly' },
  { path: 'hse', priority: 0.6, changeFrequency: 'monthly' },
  { path: 'contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'guides/what-is-an-oil-tank-farm', priority: 0.7, changeFrequency: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${SITE_URL}/${path}` : SITE_URL,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
