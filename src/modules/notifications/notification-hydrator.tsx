'use client';

import { useEffect } from 'react';

import { useNotificationStore } from '@/store/notification-store';

import { notifications } from './mock';

/** Seeds the notification store with demo data on mount. */
export function NotificationHydrator() {
  const setNotifications = useNotificationStore((state) => state.setNotifications);

  useEffect(() => {
    setNotifications(notifications);
  }, [setNotifications]);

  return null;
}
