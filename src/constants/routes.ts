/**
 * Centralized route map — the single source of truth for internal navigation.
 * Use these helpers instead of hardcoding strings so refactors stay safe.
 */

export const ROUTES = {
  home: '/',
  pricing: '/#pricing',
  features: '/#features',

  // Auth
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',

  // App (authenticated)
  dashboard: '/dashboard',
  finance: '/finance',
  billing: '/billing',
  customers: '/customers',
  customer: (id: string) => `/customers/${id}`,
  payments: '/payments',
  reports: '/reports',
  notifications: '/notifications',
  settings: '/settings',
  settingsTab: (tab: string) => `/settings?tab=${tab}`,
} as const;

export const PUBLIC_ROUTES: string[] = [ROUTES.home, ROUTES.login, ROUTES.register];

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
