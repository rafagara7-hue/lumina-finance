import type { EntityStatus, ISODateString, Money, Trend } from './common';

/**
 * Core financial domain types powering the dashboard, billing, customers,
 * payments and reports modules.
 */

export type MetricId =
  | 'mrr'
  | 'revenue'
  | 'expenses'
  | 'net-profit'
  | 'active-customers'
  | 'churn-rate'
  | 'arpu'
  | 'outstanding';

export interface Metric {
  id: MetricId;
  label: string;
  value: Money | number;
  format: 'currency' | 'number' | 'percent';
  trend: Trend;
  /** Sparkline series for the metric card. */
  series?: number[];
}

export interface TimeSeriesPoint {
  date: ISODateString;
  value: number;
}

export interface RevenueBreakdown {
  label: string;
  value: number;
  color?: string;
}

export type TransactionType = 'income' | 'expense' | 'transfer' | 'refund';

export type TransactionStatus = 'completed' | 'pending' | 'failed' | 'scheduled';

export interface Transaction {
  id: string;
  description: string;
  type: TransactionType;
  status: TransactionStatus;
  amount: Money;
  category: string;
  customerId?: string;
  date: ISODateString;
}

export type InvoiceStatus = 'draft' | 'open' | 'paid' | 'overdue' | 'void';

export interface Invoice {
  id: string;
  number: string;
  customerId: string;
  customerName: string;
  status: InvoiceStatus;
  total: Money;
  issuedAt: ISODateString;
  dueAt: ISODateString;
  paidAt?: ISODateString;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  company?: string;
  avatarUrl?: string;
  status: EntityStatus;
  lifetimeValue: Money;
  plan: string;
  createdAt: ISODateString;
}

export type PaymentMethod = 'card' | 'pix' | 'boleto' | 'bank_transfer' | 'wallet';

export type PaymentStatus = 'succeeded' | 'processing' | 'failed' | 'refunded';

export interface Payment {
  id: string;
  invoiceId?: string;
  customerName: string;
  method: PaymentMethod;
  status: PaymentStatus;
  amount: Money;
  processedAt: ISODateString;
}

export interface Report {
  id: string;
  title: string;
  description: string;
  period: string;
  generatedAt: ISODateString;
  format: 'pdf' | 'csv' | 'xlsx';
}
