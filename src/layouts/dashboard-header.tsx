'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bell, Menu } from 'lucide-react';

import { ROUTES } from '@/constants/routes';
import { useAuthStore } from '@/store/auth-store';
import { useNotificationStore } from '@/store/notification-store';
import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { UserNav } from '@/components/user-nav';

import { SidebarNav } from './dashboard-sidebar';

/** App top bar: mobile nav trigger, notifications, theme, account. */
export function DashboardHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const user = useAuthStore((state) => state.session?.user);
  const logout = useAuthStore((state) => state.logout);
  const unread = useNotificationStore((state) => state.notifications.filter((n) => !n.read).length);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/80 px-4 backdrop-blur-md lg:px-6">
      {/* Mobile navigation — closes itself on navigation. */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-0">
          <SheetTitle className="sr-only">Navegação</SheetTitle>
          <div className="flex h-16 items-center border-b px-5">
            <Logo />
          </div>
          <SidebarNav onNavigate={() => setMobileOpen(false)} />
        </SheetContent>
      </Sheet>

      <div className="ml-auto flex items-center gap-1.5">
        <Button variant="ghost" size="icon" aria-label="Notificações" className="relative" asChild>
          <Link href={ROUTES.notifications}>
            <Bell className="h-5 w-5" />
            {unread > 0 ? (
              <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-brand" />
            ) : null}
          </Link>
        </Button>
        <ThemeToggle />
        <div className="mx-1 h-6 w-px bg-border" />
        <UserNav
          name={user?.name ?? 'Convidado'}
          email={user?.email ?? 'demo@lumina.finance'}
          avatarUrl={user?.avatarUrl}
          onLogout={logout}
        />
      </div>
    </header>
  );
}
