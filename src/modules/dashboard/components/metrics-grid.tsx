'use client';

import { ArrowDownUp, TrendingDown, Users, Wallet, type LucideIcon } from 'lucide-react';

import type { Metric, MetricId } from '@/types';
import { formatCompactCurrency, formatCompactNumber, formatPercent } from '@/utils/format';
import { StatCard } from '@/components/stat-card';
import { Skeleton } from '@/components/ui/skeleton';

import { useDashboardMetrics } from '../queries';

const icons: Partial<Record<MetricId, LucideIcon>> = {
  revenue: Wallet,
  'net-profit': ArrowDownUp,
  'active-customers': Users,
  'churn-rate': TrendingDown,
};

function formatMetric(metric: Metric): string {
  const value = typeof metric.value === 'number' ? metric.value : metric.value.amount / 100;
  switch (metric.format) {
    case 'currency':
      return formatCompactCurrency(value);
    case 'percent':
      return formatPercent(value);
    default:
      return formatCompactNumber(value);
  }
}

export function MetricsGrid() {
  const { data, isLoading } = useDashboardMetrics();

  if (isLoading || !data) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className="h-[116px] rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {data.map((metric) => (
        <StatCard
          key={metric.id}
          label={metric.label}
          value={formatMetric(metric)}
          trend={metric.trend}
          icon={icons[metric.id]}
        />
      ))}
    </div>
  );
}
