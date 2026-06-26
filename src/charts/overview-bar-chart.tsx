'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { formatCompactCurrency } from '@/utils/format';

import { chartColors, tooltipStyle } from './chart-theme';

export interface BarChartDatum {
  label: string;
  income: number;
  expenses: number;
}

interface OverviewBarChartProps {
  data: BarChartDatum[];
  height?: number;
}

/** Grouped bar chart comparing income vs. expenses per period. */
export function OverviewBarChart({ data, height = 300 }: OverviewBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} vertical={false} />
        <XAxis
          dataKey="label"
          tickLine={false}
          axisLine={false}
          stroke={chartColors.axis}
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke={chartColors.axis}
          fontSize={12}
          width={64}
          tickFormatter={(value: number) => formatCompactCurrency(value)}
        />
        <Tooltip
          cursor={{ fill: 'hsl(var(--muted) / 0.4)' }}
          contentStyle={tooltipStyle}
          formatter={(value: number) => formatCompactCurrency(value)}
        />
        <Bar dataKey="income" name="Receita" fill={chartColors.series[0]} radius={[4, 4, 0, 0]} />
        <Bar
          dataKey="expenses"
          name="Despesas"
          fill={chartColors.series[1]}
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
