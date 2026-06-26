import type { Permission } from '@/types';
import { useAuthStore } from '@/store/auth-store';

/**
 * RBAC hook for conditional rendering and route guards.
 *
 * @example
 * const { can } = usePermissions();
 * if (can('billing:manage')) renderInvoiceActions();
 */
export function usePermissions() {
  const can = useAuthStore((state) => state.can);
  const role = useAuthStore((state) => state.session?.user.role);

  return {
    role,
    can,
    canAny: (permissions: Permission[]) => permissions.some((permission) => can(permission)),
    canAll: (permissions: Permission[]) => permissions.every((permission) => can(permission)),
  };
}
