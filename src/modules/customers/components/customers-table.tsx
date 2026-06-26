'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { DataTable } from '@/tables/data-table';

import { customerColumns } from '../columns';
import { useCustomers } from '../queries';

export function CustomersTable() {
  const { data, isLoading } = useCustomers();

  if (isLoading || !data) {
    return <Skeleton className="h-96 w-full rounded-xl" />;
  }

  return <DataTable columns={customerColumns} data={data} emptyMessage="Nenhum cliente." />;
}
