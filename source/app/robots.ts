import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://city-on-a-hill-redesign.sammiedollar.chatgpt.site/sitemap.xml',
  };
}
