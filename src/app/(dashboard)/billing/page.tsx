import type { Metadata } from 'next';
import { AlertTriangle, CheckCircle2, Clock, Receipt } from 'lucide-react';

import { formatCompactCurrency } from '@/utils/format';
import { PageHeader } from '@/components/page-header';
import { StatCard } from '@/components/stat-card';
import { invoices, InvoicesTable, NewInvoiceDialog } from '@/modules/billing';

export const metadata: Metadata = {
  title: 'Faturamento',
};

const sumByStatus = (status: string) =>
  invoices
    .filter((invoice) => invoice.status === status)
    .reduce((acc, i) => acc + i.total.amount, 0) / 100;

export default function BillingPage() {
  const total = invoices.reduce((acc, i) => acc + i.total.amount, 0) / 100;
  const paid = sumByStatus('paid');
  const open = sumByStatus('open');
  const overdue = sumByStatus('overdue');

  return (
    <div className="space-y-6">
      <PageHeader title="Faturamento" description="Emita e acompanhe as faturas dos seus clientes.">
        <NewInvoiceDialog />
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total faturado" value={formatCompactCurrency(total)} icon={Receipt} />
        <StatCard label="Pago" value={formatCompactCurrency(paid)} icon={CheckCircle2} />
        <StatCard label="Em aberto" value={formatCompactCurrency(open)} icon={Clock} />
        <StatCard label="Vencido" value={formatCompactCurrency(overdue)} icon={AlertTriangle} />
      </div>

      <InvoicesTable />
    </div>
  );
}
