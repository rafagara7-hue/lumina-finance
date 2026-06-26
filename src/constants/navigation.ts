import {
  CreditCard,
  LayoutDashboard,
  LineChart,
  Receipt,
  Settings,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react';

import type { Permission } from '@/types';

import { ROUTES } from './routes';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  /** Permission required to see this entry (RBAC-aware sidebar). */
  permission?: Permission;
  badge?: string;
}

export interface NavSection {
  label: string;
  items: NavItem[];
}

/** Primary sidebar navigation for the authenticated app shell. */
export const DASHBOARD_NAV: NavSection[] = [
  {
    label: 'Visão geral',
    items: [
      {
        title: 'Dashboard',
        href: ROUTES.dashboard,
        icon: LayoutDashboard,
        permission: 'dashboard:view',
      },
      { title: 'Finanças', href: ROUTES.finance, icon: LineChart, permission: 'finance:view' },
    ],
  },
  {
    label: 'Operações',
    items: [
      { title: 'Faturamento', href: ROUTES.billing, icon: Receipt, permission: 'billing:view' },
      { title: 'Clientes', href: ROUTES.customers, icon: Users, permission: 'customers:view' },
      { title: 'Pagamentos', href: ROUTES.payments, icon: CreditCard, permission: 'payments:view' },
      { title: 'Relatórios', href: ROUTES.reports, icon: Wallet, permission: 'reports:view' },
    ],
  },
  {
    label: 'Conta',
    items: [
      {
        title: 'Configurações',
        href: ROUTES.settings,
        icon: Settings,
        permission: 'settings:view',
      },
    ],
  },
];

/** Marketing/public site navigation. */
export const MARKETING_NAV: { title: string; href: string }[] = [
  { title: 'Recursos', href: '#features' },
  { title: 'Métricas', href: '#metrics' },
  { title: 'Preços', href: '#pricing' },
  { title: 'Documentação', href: ROUTES.dashboard },
];
