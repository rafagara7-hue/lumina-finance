'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { DataTable } from '@/tables/data-table';

import { transactionColumns } from '../columns';
import { useTransactions } from '../queries';

export function TransactionsTable() {
  const { data, isLoading } = useTransactions();

  if (isLoading || !data) {
    return <Skeleton className="h-96 w-full rounded-xl" />;
  }

  return <DataTable columns={transactionColumns} data={data} emptyMessage="Nenhuma transação." />;
}
