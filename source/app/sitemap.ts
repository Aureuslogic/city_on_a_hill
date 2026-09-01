import type { MetadataRoute } from 'next';
import { businesses } from '../lib/businesses';

const origin = 'https://city-on-a-hill-redesign.sammiedollar.chatgpt.site';

export default function sitemap(): MetadataRoute.Sitemap {
  const approvedBusinessPages = businesses
    .filter((business) => !business.isDemo)
    .map((business) => ({
      url: `${origin}/business/${business.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: business.featured ? 0.8 : 0.7,
    }));

  return [
    { url: origin, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${origin}/directory`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${origin}/events`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${origin}/join`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${origin}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${origin}/refund-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${origin}/data-protection`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    ...approvedBusinessPages,
  ];
}
