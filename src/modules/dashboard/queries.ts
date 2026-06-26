import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/api/query-keys';
import { sleep } from '@/utils';

import { cashflowSeries, dashboardMetrics, revenueBreakdown, revenueSeries } from './mock';

/**
 * Service layer for the dashboard. Today it resolves the local mock after a tiny
 * delay (so loading states are exercised); swapping in `apiClient` later is a
 * one-line change per function.
 */
export const dashboardService = {
  async getMetrics() {
    await sleep(300);
    return dashboardMetrics;
  },
  async getRevenueSeries() {
    await sleep(300);
    return revenueSeries;
  },
  async getCashflow() {
    await sleep(300);
    return cashflowSeries;
  },
  async getBreakdown() {
    await sleep(300);
    return revenueBreakdown;
  },
};

export function useDashboardMetrics() {
  return useQuery({
    queryKey: queryKeys.dashboard.metrics(),
    queryFn: dashboardService.getMetrics,
  });
}

export function useRevenueSeries() {
  return useQuery({
    queryKey: queryKeys.dashboard.revenue('12m'),
    queryFn: dashboardService.getRevenueSeries,
  });
}

export function useCashflow() {
  return useQuery({
    queryKey: queryKeys.finance.cashflow('6m'),
    queryFn: dashboardService.getCashflow,
  });
}

export function useRevenueBreakdown() {
  return useQuery({
    queryKey: [...queryKeys.dashboard.all, 'breakdown'],
    queryFn: dashboardService.getBreakdown,
  });
}
