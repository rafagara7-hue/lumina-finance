import type { Report } from '@/types';

/** Deterministic demo reports catalog. */
export const reports: Report[] = [
  {
    id: 'rep_01',
    title: 'Demonstrativo de resultados (DRE)',
    description: 'Receitas, custos e lucro líquido consolidados do período.',
    period: 'Junho de 2026',
    generatedAt: '2026-06-25T09:00:00.000Z',
    format: 'pdf',
  },
  {
    id: 'rep_02',
    title: 'Fluxo de caixa',
    description: 'Entradas e saídas detalhadas por categoria.',
    period: '2º trimestre de 2026',
    generatedAt: '2026-06-24T09:00:00.000Z',
    format: 'xlsx',
  },
  {
    id: 'rep_03',
    title: 'Cohort de retenção',
    description: 'Retenção de receita por safra de clientes.',
    period: 'Últimos 12 meses',
    generatedAt: '2026-06-20T09:00:00.000Z',
    format: 'csv',
  },
  {
    id: 'rep_04',
    title: 'Inadimplência',
    description: 'Faturas vencidas e provisão para perdas.',
    period: 'Junho de 2026',
    generatedAt: '2026-06-18T09:00:00.000Z',
    format: 'pdf',
  },
];
