'use client';

import { Download } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';

import { dashboardMetrics, revenueSeries } from '../mock';

function toCsv(rows: (string | number)[][]): string {
  return rows
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    .join('\r\n');
}

function downloadCsv(filename: string, csv: string) {
  // Prepend BOM so Excel renders BRL/accented characters correctly.
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

/** Real CSV export of the dashboard metrics and revenue series. */
export function ExportButton() {
  function handleExport() {
    const csv = toCsv([
      ['Métrica', 'Valor', 'Tendência (%)'],
      ...dashboardMetrics.map((metric) => [
        metric.label,
        typeof metric.value === 'number' ? metric.value : metric.value.amount / 100,
        metric.trend.value,
      ]),
      [],
      ['Mês', 'Receita'],
      ...revenueSeries.map((point) => [point.label, point.value]),
    ]);
    downloadCsv('lumina-dashboard.csv', csv);
    toast.success('Exportação concluída', { description: 'lumina-dashboard.csv' });
  }

  return (
    <Button variant="outline" size="sm" type="button" onClick={handleExport}>
      <Download className="h-4 w-4" /> Exportar
    </Button>
  );
}
