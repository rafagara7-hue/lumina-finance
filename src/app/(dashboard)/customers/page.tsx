import type { Metadata } from 'next';

import { PageHeader } from '@/components/page-header';
import { CustomersTable, NewCustomerDialog } from '@/modules/customers';

export const metadata: Metadata = {
  title: 'Clientes',
};

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Clientes" description="Base de clientes, planos e valor de vida (LTV).">
        <NewCustomerDialog />
      </PageHeader>

      <CustomersTable />
    </div>
  );
}
