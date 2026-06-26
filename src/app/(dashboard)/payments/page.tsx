import type { Metadata } from 'next';

import { PageHeader } from '@/components/page-header';
import { PaymentsTable } from '@/modules/payments';

export const metadata: Metadata = {
  title: 'Pagamentos',
};

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Pagamentos"
        description="Histórico de cobranças por Pix, cartão, boleto e transferência."
      />

      <PaymentsTable />
    </div>
  );
}
