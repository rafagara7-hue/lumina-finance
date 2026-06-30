'use client';

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import { formatCompactCurrency } from '@/utils/format';

import { chartColors, tooltipStyle } from './chart-theme';

export interface DonutDatum {
  label: string;
  value: number;
}

interface BreakdownDonutChartProps {
  data: DonutDatum[];
  height?: number;
}

/** Donut chart for revenue/category breakdowns, with currency-formatted tooltip. */
export function BreakdownDonutChart({ data, height = 260 }: BreakdownDonutChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="label"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={3}
          strokeWidth={0}
        >
          {data.map((entry, index) => (
            <Cell key={entry.label} fill={chartColors.series[index % chartColors.series.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={tooltipStyle}
          formatter={(value: number, name) => [formatCompactCurrency(value), name]}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
