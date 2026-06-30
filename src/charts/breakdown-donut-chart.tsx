'use client';

import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

import { chartColors } from './chart-theme';

export interface DonutDatum {
  label: string;
  value: number;
}

interface BreakdownDonutChartProps {
  data: DonutDatum[];
  height?: number;
}

/**
 * Donut chart for revenue/category breakdowns. No hover tooltip on purpose — it
 * would overlap the ring, and the accompanying legend already lists every value.
 */
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
      </PieChart>
    </ResponsiveContainer>
  );
}
