import type { Metadata } from 'next';
import { Plus } from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { CustomersTable } from '@/modules/customers';

export const metadata: Metadata = {
  title: 'Clientes',
};

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Clientes" description="Base de clientes, planos e valor de vida (LTV).">
        <Button variant="brand" size="sm">
          <Plus className="h-4 w-4" /> Novo cliente
        </Button>
      </PageHeader>

      <CustomersTable />
    </div>
  );
}
