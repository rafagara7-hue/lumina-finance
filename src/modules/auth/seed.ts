import { ROLE_PERMISSIONS } from '@/constants/permissions';
import type { Organization, Session, User } from '@/types';

/**
 * Demo identity for the public showcase. Clearly synthetic seed data — it only
 * exists so the dashboard renders a believable session before a backend lands.
 */
export const demoOrganization: Organization = {
  id: 'org_demo',
  name: 'Aurora Tech',
  slug: 'aurora-tech',
  plan: 'growth',
  seats: 24,
};

export const demoUser: User = {
  id: 'usr_demo',
  name: 'Helena Castro',
  email: 'helena@aurora.tech',
  avatarUrl: 'https://i.pravatar.cc/120?img=47',
  role: 'owner',
  organizationId: demoOrganization.id,
  createdAt: '2024-01-12T09:00:00.000Z',
  lastActiveAt: '2026-06-26T12:00:00.000Z',
};

export const demoSession: Session = {
  user: demoUser,
  organization: demoOrganization,
  permissions: ROLE_PERMISSIONS[demoUser.role],
  expiresAt: '2026-12-31T23:59:59.000Z',
};

/**
 * Demo/DEV credentials shown on the login screen. There is no real auth gate yet,
 * so these simply let anyone walk through the login into the dashboard demo.
 */
export const demoCredentials = {
  email: 'dev@lumina.finance',
  password: 'lumina-dev-2026',
} as const;
