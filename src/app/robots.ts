import type { MetadataRoute } from 'next';

import { siteConfig } from '@/constants/app';

// Render once at build time so it works with `output: export` (GitHub Pages).
export const dynamic = 'force-static';

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
