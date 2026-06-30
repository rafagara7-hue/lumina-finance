// When building for GitHub Pages we produce a static export served from a
// project subpath (https://<user>.github.io/lumina-finance). Gated behind an
// env var so local dev, `next start` and Vercel keep their full server feature set.
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoBasePath = '/lumina-finance';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['lucide-react', 'recharts', 'date-fns'],
  },
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'i.pravatar.cc' },
    ],
  },
};

if (isGithubPages) {
  nextConfig.output = 'export';
  nextConfig.basePath = repoBasePath;
  nextConfig.assetPrefix = repoBasePath;
  nextConfig.trailingSlash = true;
} else {
  // Security headers are not applied by a static host, so only register them
  // for the server runtime (dev / `next start` / Vercel).
  nextConfig.headers = async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    },
  ];
}

export default nextConfig;
