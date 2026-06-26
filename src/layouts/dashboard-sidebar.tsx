'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { DASHBOARD_NAV } from '@/constants/navigation';
import { usePermissions } from '@/hooks/use-permissions';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

/** Navigation sections, RBAC-filtered. Shared between desktop rail and mobile sheet. */
export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { can } = usePermissions();

  return (
    <ScrollArea className="h-full">
      <nav className="flex flex-col gap-6 px-3 py-4">
        {DASHBOARD_NAV.map((section) => {
          const items = section.items.filter((item) => !item.permission || can(item.permission));
          if (items.length === 0) return null;

          return (
            <div key={section.label} className="space-y-1">
              <p className="px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {section.label}
              </p>
              {items.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onNavigate}
                    className={cn(
                      'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      active
                        ? 'bg-secondary text-foreground'
                        : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground',
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="flex-1">{item.title}</span>
                    {item.badge ? (
                      <Badge variant="brand" className="h-5 px-1.5 text-[10px]">
                        {item.badge}
                      </Badge>
                    ) : null}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </nav>
    </ScrollArea>
  );
}

/** Fixed desktop sidebar rail. */
export function DashboardSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r bg-card/40 lg:flex lg:flex-col">
      <div className="flex h-16 items-center border-b px-5">
        <Logo />
      </div>
      <div className="flex-1 overflow-hidden">
        <SidebarNav />
      </div>
      <div className="border-t p-4">
        <p className="text-xs text-muted-foreground">
          v0.1.0 · <span className="text-brand">Demo</span>
        </p>
      </div>
    </aside>
  );
}
