'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { DataTable } from '@/tables/data-table';

import { paymentColumns } from '../columns';
import { usePayments } from '../queries';

export function PaymentsTable() {
  const { data, isLoading } = usePayments();

  if (isLoading || !data) {
    return <Skeleton className="h-96 w-full rounded-xl" />;
  }

  return <DataTable columns={paymentColumns} data={data} emptyMessage="Nenhum pagamento." />;
}
