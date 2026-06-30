import { create } from 'zustand';

import { hasPermission } from '@/constants/permissions';
import type { Permission, Session, User } from '@/types';
import { demoSession } from '@/modules/auth/seed';

interface AuthState {
  session: Session | null;
  isAuthenticated: boolean;
  setSession: (session: Session | null) => void;
  logout: () => void;
  /** RBAC check against the current user's role. */
  can: (permission: Permission) => boolean;
  user: () => User | null;
}

/**
 * Client-side auth store. The server session remains the source of truth; this
 * mirror lets components read the current user and permissions synchronously.
 */
export const useAuthStore = create<AuthState>((set, get) => ({
  // Seeded with the demo session so the shell (nav, user, permissions) renders
  // immediately on first paint — no hydration flash. Swap for a real session later.
  session: demoSession,
  isAuthenticated: true,
  setSession: (session) => set({ session, isAuthenticated: Boolean(session) }),
  logout: () => set({ session: null, isAuthenticated: false }),
  can: (permission) => {
    const role = get().session?.user.role;
    return role ? hasPermission(role, permission) : false;
  },
  user: () => get().session?.user ?? null,
}));
