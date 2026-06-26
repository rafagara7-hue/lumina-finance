import type { MetadataRoute } from 'next';

import { siteConfig } from '@/constants/app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/dashboard',
        '/finance',
        '/billing',
        '/customers',
        '/payments',
        '/reports',
        '/notifications',
        '/settings',
        '/api/',
      ],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
