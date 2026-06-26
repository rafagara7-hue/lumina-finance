import { AppShell } from '@/layouts/app-shell';
import { AuthHydrator } from '@/modules/auth';
import { NotificationHydrator } from '@/modules/notifications';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Seed the demo session/notifications until a real backend is connected. */}
      <AuthHydrator />
      <NotificationHydrator />
      <AppShell>{children}</AppShell>
    </>
  );
}
