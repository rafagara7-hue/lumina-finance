import type { Metric, RevenueBreakdown } from '@/types';
import type { AreaChartDatum, BarChartDatum, DonutDatum } from '@/charts';

/**
 * Static, deterministic demo data for the dashboard. Deterministic on purpose:
 * stable values avoid SSR/CSR hydration mismatches and keep the showcase honest.
 */

export const dashboardMetrics: Metric[] = [
  {
    id: 'revenue',
    label: 'Receita (MRR)',
    value: 184_200,
    format: 'currency',
    trend: { direction: 'up', value: 12.4, label: 'vs. mês anterior' },
  },
  {
    id: 'net-profit',
    label: 'Lucro líquido',
    value: 72_850,
    format: 'currency',
    trend: { direction: 'up', value: 8.1, label: 'vs. mês anterior' },
  },
  {
    id: 'active-customers',
    label: 'Clientes ativos',
    value: 1_284,
    format: 'number',
    trend: { direction: 'up', value: 3.2, label: 'vs. mês anterior' },
  },
  {
    id: 'churn-rate',
    label: 'Churn',
    value: 1.8,
    format: 'percent',
    trend: { direction: 'down', value: -0.4, label: 'vs. mês anterior' },
  },
];

export const revenueSeries: AreaChartDatum[] = [
  { label: 'Jan', value: 128_000 },
  { label: 'Fev', value: 132_500 },
  { label: 'Mar', value: 141_000 },
  { label: 'Abr', value: 138_900 },
  { label: 'Mai', value: 152_400 },
  { label: 'Jun', value: 161_200 },
  { label: 'Jul', value: 169_800 },
  { label: 'Ago', value: 172_300 },
  { label: 'Set', value: 178_100 },
  { label: 'Out', value: 181_700 },
  { label: 'Nov', value: 183_500 },
  { label: 'Dez', value: 184_200 },
];

export const cashflowSeries: BarChartDatum[] = [
  { label: 'Jan', income: 128_000, expenses: 82_000 },
  { label: 'Fev', income: 132_500, expenses: 85_400 },
  { label: 'Mar', income: 141_000, expenses: 88_900 },
  { label: 'Abr', income: 138_900, expenses: 90_100 },
  { label: 'Mai', income: 152_400, expenses: 93_700 },
  { label: 'Jun', income: 161_200, expenses: 96_300 },
];

export const revenueBreakdown: (RevenueBreakdown & DonutDatum)[] = [
  { label: 'Assinaturas', value: 118_400 },
  { label: 'Serviços', value: 41_900 },
  { label: 'Add-ons', value: 16_300 },
  { label: 'Outros', value: 7_600 },
];
