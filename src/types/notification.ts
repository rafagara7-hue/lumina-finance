import type { ISODateString } from './common';

export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export type NotificationCategory = 'billing' | 'payments' | 'customers' | 'system' | 'security';

export interface AppNotification {
  id: string;
  type: NotificationType;
  category: NotificationCategory;
  title: string;
  message: string;
  read: boolean;
  createdAt: ISODateString;
  href?: string;
}
