import type { AppNotification } from '@/types';

/** Deterministic demo notifications. */
export const notifications: AppNotification[] = [
  {
    id: 'ntf_01',
    type: 'warning',
    category: 'billing',
    title: 'Fatura vencida',
    message: 'A fatura INV-2026-0144 da Globex está vencida há 22 dias.',
    read: false,
    createdAt: '2026-06-26T08:30:00.000Z',
    href: '/billing',
  },
  {
    id: 'ntf_02',
    type: 'success',
    category: 'payments',
    title: 'Pagamento recebido',
    message: 'Aurora Tech pagou R$ 18.400,00 via Pix.',
    read: false,
    createdAt: '2026-06-25T13:24:00.000Z',
    href: '/payments',
  },
  {
    id: 'ntf_03',
    type: 'info',
    category: 'customers',
    title: 'Novo cliente',
    message: 'Soylent ativou o plano Growth.',
    read: true,
    createdAt: '2026-06-24T10:00:00.000Z',
    href: '/customers',
  },
  {
    id: 'ntf_04',
    type: 'error',
    category: 'payments',
    title: 'Pagamento recusado',
    message: 'A cobrança da Soylent foi recusada pela operadora.',
    read: true,
    createdAt: '2026-06-19T11:05:00.000Z',
    href: '/payments',
  },
  {
    id: 'ntf_05',
    type: 'info',
    category: 'security',
    title: 'Novo acesso',
    message: 'Login detectado em um novo dispositivo.',
    read: true,
    createdAt: '2026-06-18T20:11:00.000Z',
  },
];
