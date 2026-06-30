'use client';

import { Download } from 'lucide-react';
import { toast } from 'sonner';

import type { Report } from '@/types';
import { Button } from '@/components/ui/button';

/** Downloads a small CSV summary for a report (demo export). */
export function ReportDownloadButton({ report }: { report: Report }) {
  function handleDownload() {
    const csv = [
      ['Relatório', report.title],
      ['Descrição', report.description],
      ['Período', report.period],
      ['Formato', report.format],
      ['Gerado em', report.generatedAt],
    ]
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
      .join('\r\n');

    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${report.id}.csv`;
    anchor.click();
    URL.revokeObjectURL(url);
    toast.success(`"${report.title}" exportado`);
  }

  return (
    <Button variant="ghost" size="icon" aria-label="Baixar relatório" onClick={handleDownload}>
      <Download className="h-4 w-4" />
    </Button>
  );
}
