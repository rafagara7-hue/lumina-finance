'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { DataTable } from '@/tables/data-table';

import { invoiceColumns } from '../columns';
import { useInvoices } from '../queries';

export function InvoicesTable() {
  const { data, isLoading } = useInvoices();

  if (isLoading || !data) {
    return <Skeleton className="h-96 w-full rounded-xl" />;
  }

  return <DataTable columns={invoiceColumns} data={data} emptyMessage="Nenhuma fatura." />;
}
