# Convenções de código

## Nomenclatura

| Item                | Padrão            | Exemplo                      |
| ------------------- | ----------------- | ---------------------------- |
| Arquivos            | `kebab-case`      | `revenue-area-chart.tsx`     |
| Componentes React   | `PascalCase`      | `RevenueAreaChart`           |
| Hooks               | `camelCase` + use | `useDashboardMetrics`        |
| Tipos / interfaces  | `PascalCase`      | `Transaction`, `ApiResponse` |
| Constantes          | `UPPER_SNAKE`     | `ROLE_PERMISSIONS`, `ROUTES` |
| Variáveis / funções | `camelCase`       | `formatMoney`                |

## Imports

- Use sempre o alias `@/…`; evite `../../..`.
- A ordem é aplicada automaticamente pelo Prettier
  (`@ianvs/prettier-plugin-sort-imports`): React/Next → libs → `@/types`,
  `@/constants` → `@/lib`, `@/utils`, `@/services`, `@/api`, `@/store`,
  `@/hooks` → `@/components`, `@/charts`, `@/tables`, … → `@/modules` →
  relativos.

## Server vs. Client Components

- Server Component por padrão.
- Adicione `'use client'` apenas quando precisar de estado, efeitos, eventos ou
  APIs de browser.
- **Nunca** passe funções (ex.: `ColumnDef` com `cell`) de um Server Component
  para um Client Component — encapsule num componente cliente (ver
  `modules/*/components/*-table.tsx`).

## Dados e domínio

- Tipos de domínio em `src/types`, importados via `@/types`.
- Regras e dados de cada contexto em `src/modules/<dominio>`.
- Valores monetários são `Money` em **unidades menores** (centavos) para evitar
  imprecisão de ponto flutuante; formate com `formatMoney`.

## Estilo

- Tailwind com `cn()` para composição condicional de classes.
- Cores sempre via _tokens_ (`bg-brand`, `text-muted-foreground`), nunca
  hardcoded — garante _dark mode_ e _white-label_.

## Commits

[Conventional Commits](https://www.conventionalcommits.org/), validados por
Commitlint. Veja [`CONTRIBUTING.md`](../CONTRIBUTING.md).
