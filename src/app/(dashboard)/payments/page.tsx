import type { Metadata } from 'next';
import { CheckCircle2, Clock, RotateCcw, XCircle } from 'lucide-react';

import { formatCompactCurrency } from '@/utils/format';
import { PageHeader } from '@/components/page-header';
import { StatCard } from '@/components/stat-card';
import { payments, PaymentsTable } from '@/modules/payments';

export const metadata: Metadata = {
  title: 'Pagamentos',
};

const sumByStatus = (status: string) =>
  payments.filter((p) => p.status === status).reduce((acc, p) => acc + p.amount.amount, 0) / 100;

export default function PaymentsPage() {
  const approved = sumByStatus('succeeded');
  const processing = sumByStatus('processing');
  const failed = sumByStatus('failed');
  const refunded = sumByStatus('refunded');

  return (
    <div className="space-y-6">
      <PageHeader
        title="Pagamentos"
        description="Histórico de cobranças por Pix, cartão, boleto e transferência."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Aprovado" value={formatCompactCurrency(approved)} icon={CheckCircle2} />
        <StatCard label="Processando" value={formatCompactCurrency(processing)} icon={Clock} />
        <StatCard label="Recusado" value={formatCompactCurrency(failed)} icon={XCircle} />
        <StatCard label="Estornado" value={formatCompactCurrency(refunded)} icon={RotateCcw} />
      </div>

      <PaymentsTable />
    </div>
  );
}
