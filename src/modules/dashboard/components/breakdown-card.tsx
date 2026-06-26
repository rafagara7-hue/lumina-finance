'use client';

import { formatCompactCurrency } from '@/utils/format';
import { BreakdownDonutChart, chartColors } from '@/charts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

import { useRevenueBreakdown } from '../queries';

export function BreakdownCard() {
  const { data, isLoading } = useRevenueBreakdown();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Composição da receita</CardTitle>
        <CardDescription>Distribuição por linha de produto</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading || !data ? (
          <Skeleton className="h-[260px] w-full" />
        ) : (
          <div className="space-y-4">
            <BreakdownDonutChart data={data} />
            <ul className="space-y-2">
              {data.map((item, index) => (
                <li key={item.label} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: chartColors.series[index % chartColors.series.length] }}
                    />
                    {item.label}
                  </span>
                  <span className="font-medium tabular-nums">
                    {formatCompactCurrency(item.value)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
