/**
 * API endpoint path builders. Keeping URLs here (not inline) makes the eventual
 * backend contract explicit and refactors mechanical.
 */
export const endpoints = {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    session: '/auth/session',
  },
  dashboard: {
    metrics: '/dashboard/metrics',
    revenue: '/dashboard/revenue',
  },
  finance: {
    transactions: '/finance/transactions',
    cashflow: '/finance/cashflow',
  },
  billing: {
    invoices: '/billing/invoices',
    invoice: (id: string) => `/billing/invoices/${id}`,
  },
  customers: {
    list: '/customers',
    detail: (id: string) => `/customers/${id}`,
  },
  payments: {
    list: '/payments',
  },
  reports: {
    list: '/reports',
  },
  notifications: {
    list: '/notifications',
    read: (id: string) => `/notifications/${id}/read`,
  },
} as const;
