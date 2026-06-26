'use client';

import type { ColumnDef } from '@tanstack/react-table';

import type { Customer, EntityStatus } from '@/types';
import { formatMoney, getInitials } from '@/utils/format';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge, type BadgeProps } from '@/components/ui/badge';
import { DataTableColumnHeader } from '@/tables/data-table-column-header';

const statusVariant: Record<EntityStatus, BadgeProps['variant']> = {
  active: 'success',
  inactive: 'secondary',
  pending: 'warning',
  archived: 'outline',
};

const statusLabel: Record<EntityStatus, string> = {
  active: 'Ativo',
  inactive: 'Inativo',
  pending: 'Pendente',
  archived: 'Arquivado',
};

export const customerColumns: ColumnDef<Customer>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Cliente" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          {row.original.avatarUrl ? (
            <AvatarImage src={row.original.avatarUrl} alt={row.original.name} />
          ) : null}
          <AvatarFallback>{getInitials(row.original.name)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{row.original.name}</p>
          <p className="text-xs text-muted-foreground">{row.original.email}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'plan',
    header: 'Plano',
    cell: ({ row }) => <Badge variant="brand">{row.original.plan}</Badge>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <Badge variant={statusVariant[row.original.status]}>{statusLabel[row.original.status]}</Badge>
    ),
  },
  {
    accessorKey: 'lifetimeValue',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="LTV" className="justify-end" />
    ),
    cell: ({ row }) => (
      <div className="text-right font-medium tabular-nums">
        {formatMoney(row.original.lifetimeValue)}
      </div>
    ),
    sortingFn: (a, b) => a.original.lifetimeValue.amount - b.original.lifetimeValue.amount,
  },
];
