'use client';

import type { ColumnDef } from '@tanstack/react-table';

import type { Payment, PaymentMethod, PaymentStatus } from '@/types';
import { formatDateTime, formatMoney } from '@/utils/format';
import { Badge, type BadgeProps } from '@/components/ui/badge';
import { DataTableColumnHeader } from '@/tables/data-table-column-header';

const methodLabel: Record<PaymentMethod, string> = {
  card: 'Cartão',
  pix: 'Pix',
  boleto: 'Boleto',
  bank_transfer: 'Transferência',
  wallet: 'Carteira',
};

const statusVariant: Record<PaymentStatus, BadgeProps['variant']> = {
  succeeded: 'success',
  processing: 'warning',
  failed: 'destructive',
  refunded: 'secondary',
};

const statusLabel: Record<PaymentStatus, string> = {
  succeeded: 'Aprovado',
  processing: 'Processando',
  failed: 'Recusado',
  refunded: 'Estornado',
};

export const paymentColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'customerName',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Cliente" />,
    cell: ({ row }) => <span className="font-medium">{row.original.customerName}</span>,
  },
  {
    accessorKey: 'method',
    header: 'Método',
    cell: ({ row }) => <span className="text-sm">{methodLabel[row.original.method]}</span>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <Badge variant={statusVariant[row.original.status]}>{statusLabel[row.original.status]}</Badge>
    ),
  },
  {
    accessorKey: 'processedAt',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Processado em" />,
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {formatDateTime(row.original.processedAt)}
      </span>
    ),
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Valor" className="justify-end" />
    ),
    cell: ({ row }) => (
      <div className="text-right font-medium tabular-nums">{formatMoney(row.original.amount)}</div>
    ),
    sortingFn: (a, b) => a.original.amount.amount - b.original.amount.amount,
  },
];
