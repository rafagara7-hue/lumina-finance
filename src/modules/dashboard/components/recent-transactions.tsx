import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { formatDate, formatMoney } from '@/utils/format';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { recentTransactions } from '@/modules/finance/mock';

/** Server-rendered recent activity feed for the dashboard. */
export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Atividade recente</CardTitle>
        <CardDescription>Últimas movimentações da conta</CardDescription>
      </CardHeader>
      <ul className="divide-y">
        {recentTransactions.map((txn) => {
          const negative = txn.type === 'expense' || txn.type === 'refund';
          return (
            <li key={txn.id} className="flex items-center gap-3 px-6 py-3">
              <span
                className={cn(
                  'flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
                  negative ? 'bg-destructive/10 text-destructive' : 'bg-success/10 text-success',
                )}
              >
                {negative ? (
                  <ArrowDownLeft className="h-4 w-4" />
                ) : (
                  <ArrowUpRight className="h-4 w-4" />
                )}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{txn.description}</p>
                <p className="text-xs text-muted-foreground">{formatDate(txn.date)}</p>
              </div>
              <span
                className={cn(
                  'text-sm font-medium tabular-nums',
                  negative ? 'text-destructive' : 'text-success',
                )}
              >
                {negative ? '-' : '+'}
                {formatMoney(txn.amount)}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
