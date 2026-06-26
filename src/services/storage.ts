import { logger } from './logger';

/**
 * SSR-safe, typed wrapper around `localStorage`. Never throws — returns the
 * fallback on any failure (private mode, quota, server render).
 */
export const storage = {
  get<T>(key: string, fallback: T): T {
    if (typeof window === 'undefined') return fallback;
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : fallback;
    } catch (error) {
      logger.warn('storage.get failed', { key, error });
      return fallback;
    }
  },

  set<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      logger.warn('storage.set failed', { key, error });
    }
  },

  remove(key: string): void {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      logger.warn('storage.remove failed', { key, error });
    }
  },
};
