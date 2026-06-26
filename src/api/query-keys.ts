import type { PaginationParams } from '@/types';

/**
 * Centralized TanStack Query key factory.
 * Hierarchical keys make targeted cache invalidation trivial, e.g.
 * `queryClient.invalidateQueries({ queryKey: queryKeys.customers.all })`.
 */
export const queryKeys = {
  dashboard: {
    all: ['dashboard'] as const,
    metrics: () => [...queryKeys.dashboard.all, 'metrics'] as const,
    revenue: (range: string) => [...queryKeys.dashboard.all, 'revenue', range] as const,
  },
  finance: {
    all: ['finance'] as const,
    transactions: (params?: Partial<PaginationParams>) =>
      [...queryKeys.finance.all, 'transactions', params ?? {}] as const,
    cashflow: (range: string) => [...queryKeys.finance.all, 'cashflow', range] as const,
  },
  billing: {
    all: ['billing'] as const,
    invoices: (params?: Partial<PaginationParams>) =>
      [...queryKeys.billing.all, 'invoices', params ?? {}] as const,
  },
  customers: {
    all: ['customers'] as const,
    list: (params?: Partial<PaginationParams>) =>
      [...queryKeys.customers.all, 'list', params ?? {}] as const,
    detail: (id: string) => [...queryKeys.customers.all, 'detail', id] as const,
  },
  payments: {
    all: ['payments'] as const,
    list: (params?: Partial<PaginationParams>) =>
      [...queryKeys.payments.all, 'list', params ?? {}] as const,
  },
  reports: {
    all: ['reports'] as const,
    list: () => [...queryKeys.reports.all, 'list'] as const,
  },
  notifications: {
    all: ['notifications'] as const,
    list: () => [...queryKeys.notifications.all, 'list'] as const,
  },
} as const;
