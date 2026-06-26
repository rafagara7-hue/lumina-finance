'use client';

import type { ColumnDef } from '@tanstack/react-table';

import type { Invoice, InvoiceStatus } from '@/types';
import { formatDate, formatMoney } from '@/utils/format';
import { Badge, type BadgeProps } from '@/components/ui/badge';
import { DataTableColumnHeader } from '@/tables/data-table-column-header';

const statusVariant: Record<InvoiceStatus, BadgeProps['variant']> = {
  paid: 'success',
  open: 'secondary',
  overdue: 'destructive',
  draft: 'outline',
  void: 'outline',
};

const statusLabel: Record<InvoiceStatus, string> = {
  paid: 'Paga',
  open: 'Em aberto',
  overdue: 'Vencida',
  draft: 'Rascunho',
  void: 'Cancelada',
};

export const invoiceColumns: ColumnDef<Invoice>[] = [
  {
    accessorKey: 'number',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Fatura" />,
    cell: ({ row }) => <span className="font-medium">{row.original.number}</span>,
  },
  {
    accessorKey: 'customerName',
    header: 'Cliente',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <Badge variant={statusVariant[row.original.status]}>{statusLabel[row.original.status]}</Badge>
    ),
  },
  {
    accessorKey: 'dueAt',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Vencimento" />,
    cell: ({ row }) => <span className="text-sm">{formatDate(row.original.dueAt)}</span>,
  },
  {
    accessorKey: 'total',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total" className="justify-end" />
    ),
    cell: ({ row }) => (
      <div className="text-right font-medium tabular-nums">{formatMoney(row.original.total)}</div>
    ),
    sortingFn: (a, b) => a.original.total.amount - b.original.total.amount,
  },
];
