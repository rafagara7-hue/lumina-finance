import type { Payment } from '@/types';

/** Deterministic demo payments (amounts in minor units / cents). */
export const payments: Payment[] = [
  {
    id: 'pay_3001',
    invoiceId: 'inv_2001',
    customerName: 'Aurora Tech',
    method: 'pix',
    status: 'succeeded',
    amount: { amount: 1_840_000, currency: 'BRL' },
    processedAt: '2026-06-08T13:24:00.000Z',
  },
  {
    id: 'pay_3002',
    invoiceId: 'inv_2005',
    customerName: 'Umbrella Co.',
    method: 'card',
    status: 'succeeded',
    amount: { amount: 2_310_000, currency: 'BRL' },
    processedAt: '2026-06-11T09:10:00.000Z',
  },
  {
    id: 'pay_3003',
    customerName: 'Globex',
    method: 'boleto',
    status: 'processing',
    amount: { amount: 980_000, currency: 'BRL' },
    processedAt: '2026-06-23T18:00:00.000Z',
  },
  {
    id: 'pay_3004',
    invoiceId: 'inv_2002',
    customerName: 'Northwind',
    method: 'bank_transfer',
    status: 'succeeded',
    amount: { amount: 1_240_000, currency: 'BRL' },
    processedAt: '2026-06-20T15:42:00.000Z',
  },
  {
    id: 'pay_3005',
    customerName: 'Soylent',
    method: 'card',
    status: 'failed',
    amount: { amount: 654_000, currency: 'BRL' },
    processedAt: '2026-06-19T11:05:00.000Z',
  },
  {
    id: 'pay_3006',
    customerName: 'Initech',
    method: 'wallet',
    status: 'refunded',
    amount: { amount: 426_000, currency: 'BRL' },
    processedAt: '2026-06-15T08:30:00.000Z',
  },
];
