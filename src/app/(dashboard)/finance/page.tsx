import type { Metadata } from 'next';
import { ArrowDownUp, TrendingDown, TrendingUp } from 'lucide-react';

import { formatCompactCurrency } from '@/utils/format';
import { PageHeader } from '@/components/page-header';
import { StatCard } from '@/components/stat-card';
import { NewTransactionDialog, transactions, TransactionsTable } from '@/modules/finance';

export const metadata: Metadata = {
  title: 'Finanças',
};

const sumByType = (type: string) =>
  transactions.filter((t) => t.type === type).reduce((acc, t) => acc + t.amount.amount, 0) / 100;

export default function FinancePage() {
  const income = sumByType('income');
  const expense = sumByType('expense');
  const refund = sumByType('refund');
  const net = income - expense - refund;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Finanças"
        description="Todas as movimentações de receita e despesa da operação."
      >
        <NewTransactionDialog />
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Receitas" value={formatCompactCurrency(income)} icon={TrendingUp} />
        <StatCard label="Despesas" value={formatCompactCurrency(expense)} icon={TrendingDown} />
        <StatCard label="Saldo líquido" value={formatCompactCurrency(net)} icon={ArrowDownUp} />
      </div>

      <TransactionsTable />
    </div>
  );
}
