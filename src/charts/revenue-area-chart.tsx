'use client';

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { formatCompactCurrency } from '@/utils/format';

import { chartColors, tooltipStyle } from './chart-theme';

export interface AreaChartDatum {
  label: string;
  value: number;
  compare?: number;
}

interface RevenueAreaChartProps {
  data: AreaChartDatum[];
  height?: number;
}

/** Smooth gradient area chart, ideal for revenue / MRR trends. */
export function RevenueAreaChart({ data, height = 300 }: RevenueAreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={chartColors.series[0]} stopOpacity={0.35} />
            <stop offset="100%" stopColor={chartColors.series[0]} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} vertical={false} />
        <XAxis
          dataKey="label"
          tickLine={false}
          axisLine={false}
          tick={{ fill: chartColors.axis, fontSize: 12 }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fill: chartColors.axis, fontSize: 12 }}
          width={64}
          tickFormatter={(value: number) => formatCompactCurrency(value)}
        />
        <Tooltip
          contentStyle={tooltipStyle}
          formatter={(value: number, name) => [formatCompactCurrency(value), name]}
        />
        <Legend
          verticalAlign="top"
          align="right"
          height={36}
          iconType="circle"
          iconSize={9}
          wrapperStyle={{ fontSize: 12 }}
        />
        <Area
          type="monotone"
          dataKey="value"
          name="Receita"
          stroke={chartColors.series[0]}
          strokeWidth={2}
          fill="url(#revenueGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
