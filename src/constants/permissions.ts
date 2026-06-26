import type { Permission, Role } from '@/types';

/**
 * Role-Based Access Control matrix.
 * The backend will remain the source of truth at runtime, but mirroring the
 * matrix here lets the UI render the correct affordances without a round-trip.
 */
export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  owner: [
    'dashboard:view',
    'finance:view',
    'finance:manage',
    'billing:view',
    'billing:manage',
    'customers:view',
    'customers:manage',
    'payments:view',
    'payments:manage',
    'reports:view',
    'reports:export',
    'settings:view',
    'settings:manage',
    'members:manage',
  ],
  admin: [
    'dashboard:view',
    'finance:view',
    'finance:manage',
    'billing:view',
    'billing:manage',
    'customers:view',
    'customers:manage',
    'payments:view',
    'payments:manage',
    'reports:view',
    'reports:export',
    'settings:view',
    'members:manage',
  ],
  finance: [
    'dashboard:view',
    'finance:view',
    'finance:manage',
    'billing:view',
    'billing:manage',
    'payments:view',
    'payments:manage',
    'reports:view',
    'reports:export',
  ],
  analyst: [
    'dashboard:view',
    'finance:view',
    'billing:view',
    'customers:view',
    'payments:view',
    'reports:view',
    'reports:export',
  ],
  viewer: ['dashboard:view', 'finance:view', 'billing:view', 'customers:view', 'reports:view'],
};

/** Pure RBAC check used by guards, hooks and conditional rendering. */
export function hasPermission(role: Role, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}

export function hasAnyPermission(role: Role, permissions: Permission[]): boolean {
  return permissions.some((permission) => hasPermission(role, permission));
}
