import type { ISODateString } from './common';

/**
 * Authentication & authorization domain types.
 * The RBAC matrix that backs these lives in `@/constants/permissions`.
 */

export type Role = 'owner' | 'admin' | 'finance' | 'analyst' | 'viewer';

export type Permission =
  | 'dashboard:view'
  | 'finance:view'
  | 'finance:manage'
  | 'billing:view'
  | 'billing:manage'
  | 'customers:view'
  | 'customers:manage'
  | 'payments:view'
  | 'payments:manage'
  | 'reports:view'
  | 'reports:export'
  | 'settings:view'
  | 'settings:manage'
  | 'members:manage';

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: Role;
  organizationId: string;
  createdAt: ISODateString;
  lastActiveAt?: ISODateString;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
  plan: 'free' | 'starter' | 'growth' | 'enterprise';
  seats: number;
}

export interface Session {
  user: User;
  organization: Organization;
  permissions: Permission[];
  expiresAt: ISODateString;
}

export interface AuthCredentials {
  email: string;
  password: string;
}
