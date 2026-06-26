import type { Metadata } from 'next';
import { Plus } from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { TransactionsTable } from '@/modules/finance';

export const metadata: Metadata = {
  title: 'Finanças',
};

export default function FinancePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Finanças"
        description="Todas as movimentações de receita e despesa da operação."
      >
        <Button variant="brand" size="sm">
          <Plus className="h-4 w-4" /> Nova transação
        </Button>
      </PageHeader>

      <TransactionsTable />
    </div>
  );
}
