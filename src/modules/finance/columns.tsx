'use client';

import type { ColumnDef } from '@tanstack/react-table';

import type { Transaction, TransactionStatus, TransactionType } from '@/types';
import { cn } from '@/lib/utils';
import { formatDate, formatMoney } from '@/utils/format';
import { Badge, type BadgeProps } from '@/components/ui/badge';
import { DataTableColumnHeader } from '@/tables/data-table-column-header';

const statusVariant: Record<TransactionStatus, BadgeProps['variant']> = {
  completed: 'success',
  pending: 'warning',
  scheduled: 'secondary',
  failed: 'destructive',
};

const statusLabel: Record<TransactionStatus, string> = {
  completed: 'Concluída',
  pending: 'Pendente',
  scheduled: 'Agendada',
  failed: 'Falhou',
};

const typeLabel: Record<TransactionType, string> = {
  income: 'Receita',
  expense: 'Despesa',
  transfer: 'Transferência',
  refund: 'Reembolso',
};

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'description',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Descrição" />,
    cell: ({ row }) => (
      <div>
        <p className="font-medium">{row.original.description}</p>
        <p className="text-xs text-muted-foreground">{row.original.category}</p>
      </div>
    ),
  },
  {
    accessorKey: 'type',
    header: 'Tipo',
    cell: ({ row }) => <span className="text-sm">{typeLabel[row.original.type]}</span>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <Badge variant={statusVariant[row.original.status]}>{statusLabel[row.original.status]}</Badge>
    ),
  },
  {
    accessorKey: 'date',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Data" />,
    cell: ({ row }) => <span className="text-sm">{formatDate(row.original.date)}</span>,
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Valor" className="justify-end" />
    ),
    cell: ({ row }) => {
      const { type, amount } = row.original;
      const negative = type === 'expense' || type === 'refund';
      return (
        <div
          className={cn(
            'text-right font-medium tabular-nums',
            negative ? 'text-destructive' : 'text-success',
          )}
        >
          {negative ? '-' : '+'}
          {formatMoney(amount)}
        </div>
      );
    },
    sortingFn: (a, b) => a.original.amount.amount - b.original.amount.amount,
  },
];
