'use client';

import {
  AlertTriangle,
  Bell,
  CheckCheck,
  CheckCircle2,
  Info,
  XCircle,
  type LucideIcon,
} from 'lucide-react';

import type { NotificationType } from '@/types';
import { cn } from '@/lib/utils';
import { useNotificationStore } from '@/store/notification-store';
import { formatDateTime } from '@/utils/format';
import { EmptyState } from '@/components/empty-state';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const typeConfig: Record<NotificationType, { icon: LucideIcon; className: string }> = {
  info: { icon: Info, className: 'bg-chart-2/10 text-chart-2' },
  success: { icon: CheckCircle2, className: 'bg-success/10 text-success' },
  warning: { icon: AlertTriangle, className: 'bg-warning/10 text-warning' },
  error: { icon: XCircle, className: 'bg-destructive/10 text-destructive' },
};

export default function NotificationsPage() {
  const notifications = useNotificationStore((state) => state.notifications);
  const markRead = useNotificationStore((state) => state.markRead);
  const markAllRead = useNotificationStore((state) => state.markAllRead);

  return (
    <div className="space-y-6">
      <PageHeader title="Notificações" description="Alertas de faturamento, pagamentos e sistema.">
        <Button variant="outline" size="sm" onClick={markAllRead}>
          <CheckCheck className="h-4 w-4" /> Marcar todas como lidas
        </Button>
      </PageHeader>

      {notifications.length === 0 ? (
        <EmptyState
          icon={Bell}
          title="Tudo em dia"
          description="Você não tem novas notificações."
        />
      ) : (
        <Card className="divide-y">
          {notifications.map((notification) => {
            const config = typeConfig[notification.type];
            const Icon = config.icon;
            return (
              <button
                key={notification.id}
                onClick={() => markRead(notification.id)}
                className={cn(
                  'flex w-full items-start gap-3 px-5 py-4 text-left transition-colors hover:bg-muted/40',
                  !notification.read && 'bg-brand/[0.04]',
                )}
              >
                <span
                  className={cn(
                    'flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
                    config.className,
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{notification.title}</p>
                    {!notification.read ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    ) : null}
                  </div>
                  <p className="text-sm text-muted-foreground">{notification.message}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {formatDateTime(notification.createdAt)}
                  </p>
                </div>
              </button>
            );
          })}
        </Card>
      )}
    </div>
  );
}
