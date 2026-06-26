import type { Metadata } from 'next';
import { Download } from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import {
  BreakdownCard,
  MetricsGrid,
  RecentTransactions,
  RevenueOverview,
} from '@/modules/dashboard';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Dashboard" description="Visão geral da saúde financeira da sua empresa.">
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4" /> Exportar
        </Button>
      </PageHeader>

      <MetricsGrid />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueOverview />
        </div>
        <BreakdownCard />
      </div>

      <RecentTransactions />
    </div>
  );
}
