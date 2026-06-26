import { create } from 'zustand';

import type { AppNotification } from '@/types';

interface NotificationState {
  notifications: AppNotification[];
  setNotifications: (notifications: AppNotification[]) => void;
  add: (notification: AppNotification) => void;
  markRead: (id: string) => void;
  markAllRead: () => void;
  remove: (id: string) => void;
  unreadCount: () => number;
}

export const useNotificationStore = create<NotificationState>((set, get) => ({
  notifications: [],
  setNotifications: (notifications) => set({ notifications }),
  add: (notification) =>
    set((state) => ({ notifications: [notification, ...state.notifications] })),
  markRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) => (n.id === id ? { ...n, read: true } : n)),
    })),
  markAllRead: () =>
    set((state) => ({ notifications: state.notifications.map((n) => ({ ...n, read: true })) })),
  remove: (id) =>
    set((state) => ({ notifications: state.notifications.filter((n) => n.id !== id) })),
  unreadCount: () => get().notifications.filter((n) => !n.read).length,
}));
