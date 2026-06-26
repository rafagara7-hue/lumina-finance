'use client';

import { Bell, Menu, Search } from 'lucide-react';

import { useAuthStore } from '@/store/auth-store';
import { useNotificationStore } from '@/store/notification-store';
import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { UserNav } from '@/components/user-nav';

import { SidebarNav } from './dashboard-sidebar';

/** App top bar: mobile nav trigger, command/search, notifications, theme, account. */
export function DashboardHeader() {
  const user = useAuthStore((state) => state.session?.user);
  const logout = useAuthStore((state) => state.logout);
  const unread = useNotificationStore((state) => state.notifications.filter((n) => !n.read).length);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/80 px-4 backdrop-blur-md lg:px-6">
      {/* Mobile navigation */}
      <Sheet>
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
          <SidebarNav />
        </SheetContent>
      </Sheet>

      <div className="relative hidden max-w-sm flex-1 sm:block">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Buscar transações, clientes…" className="pl-9" />
      </div>

      <div className="ml-auto flex items-center gap-1.5">
        <Button variant="ghost" size="icon" aria-label="Notificações" className="relative">
          <Bell className="h-5 w-5" />
          {unread > 0 ? (
            <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-brand" />
          ) : null}
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
