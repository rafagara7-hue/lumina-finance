import { ArrowDownRight, ArrowRight, ArrowUpRight, type LucideIcon } from 'lucide-react';

import type { TrendDirection } from '@/types';
import { cn } from '@/lib/utils';
import { formatPercent } from '@/utils/format';
import { Card, CardContent } from '@/components/ui/card';

interface StatCardProps {
  label: string;
  value: string;
  trend?: { direction: TrendDirection; value: number; label?: string };
  icon?: LucideIcon;
  className?: string;
}

const trendStyles: Record<TrendDirection, string> = {
  up: 'text-success',
  down: 'text-destructive',
  flat: 'text-muted-foreground',
};

const trendIcons: Record<TrendDirection, LucideIcon> = {
  up: ArrowUpRight,
  down: ArrowDownRight,
  flat: ArrowRight,
};

/** KPI card with a labeled value and an optional period-over-period trend. */
export function StatCard({ label, value, trend, icon: Icon, className }: StatCardProps) {
  const TrendIcon = trend ? trendIcons[trend.direction] : null;

  return (
    <Card className={cn('overflow-hidden', className)}>
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          {Icon ? <Icon className="h-4 w-4 text-muted-foreground" /> : null}
        </div>
        <p className="mt-2 text-2xl font-semibold tabular-nums tracking-tight">{value}</p>
        {trend && TrendIcon ? (
          <p
            className={cn(
              'mt-1 flex items-center gap-1 text-xs font-medium',
              trendStyles[trend.direction],
            )}
          >
            <TrendIcon className="h-3.5 w-3.5" />
            {formatPercent(trend.value, { signed: true })}
            {trend.label ? <span className="text-muted-foreground">{trend.label}</span> : null}
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}
