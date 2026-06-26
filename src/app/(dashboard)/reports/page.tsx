import type { Metadata } from 'next';
import { Download, FileText } from 'lucide-react';

import { formatDate } from '@/utils/format';
import { PageHeader } from '@/components/page-header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { reports } from '@/modules/reports';

export const metadata: Metadata = {
  title: 'Relatórios',
};

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Relatórios"
        description="Exporte demonstrativos financeiros prontos para auditoria."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reports.map((report) => (
          <Card key={report.id} className="flex flex-col">
            <CardContent className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <FileText className="h-5 w-5" />
                </div>
                <Badge variant="outline" className="uppercase">
                  {report.format}
                </Badge>
              </div>
              <h3 className="mt-4 font-semibold">{report.title}</h3>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">{report.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {report.period} · {formatDate(report.generatedAt)}
                </span>
                <Button variant="ghost" size="icon" aria-label="Baixar relatório">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
