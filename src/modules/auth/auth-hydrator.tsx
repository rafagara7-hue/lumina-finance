'use client';

import { useEffect } from 'react';

import { useAuthStore } from '@/store/auth-store';

import { demoSession } from './seed';

/**
 * Seeds the client auth store with the demo session on mount. When real
 * authentication arrives, replace this with a session fetched from the server.
 */
export function AuthHydrator() {
  const setSession = useAuthStore((state) => state.setSession);

  useEffect(() => {
    setSession(demoSession);
  }, [setSession]);

  return null;
}
