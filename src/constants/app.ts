/**
 * Static application/site metadata. Values that may differ per environment are
 * read from `NEXT_PUBLIC_*` env vars with safe fallbacks.
 */

export const siteConfig = {
  name: 'Lumina Finance',
  shortName: 'Lumina',
  description:
    'Premium financial dashboard for modern companies — revenue, billing, customers and payments in one luminous control center.',
  tagline: 'Clarity for every number that matters.',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  locale: 'pt-BR',
  defaultCurrency: 'BRL' as const,
  links: {
    docs: '/docs',
    github: 'https://github.com/lumina-finance/lumina-finance',
    support: 'mailto:support@lumina.finance',
  },
  creator: 'Lumina Finance',
} as const;

export const appConfig = {
  /** Default page size for paginated tables. */
  defaultPageSize: 10,
  pageSizeOptions: [10, 20, 50, 100],
  /** Default stale time for TanStack Query (ms). */
  queryStaleTime: 60_000,
  /** Sidebar persisted-state key. */
  sidebarStorageKey: 'lumina:sidebar',
  themeStorageKey: 'lumina:theme',
  featureFlags: {
    enable3D: process.env.NEXT_PUBLIC_ENABLE_3D !== 'false',
    enableNotifications: process.env.NEXT_PUBLIC_ENABLE_NOTIFICATIONS !== 'false',
  },
} as const;

export type SiteConfig = typeof siteConfig;
export type AppConfig = typeof appConfig;
