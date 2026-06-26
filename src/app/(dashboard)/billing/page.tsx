import type { Metadata } from 'next';
import { Plus } from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { InvoicesTable } from '@/modules/billing';

export const metadata: Metadata = {
  title: 'Faturamento',
};

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Faturamento" description="Emita e acompanhe as faturas dos seus clientes.">
        <Button variant="brand" size="sm">
          <Plus className="h-4 w-4" /> Nova fatura
        </Button>
      </PageHeader>

      <InvoicesTable />
    </div>
  );
}
