/**
 * Shared Recharts theming. Colors reference the same CSS variables as the rest
 * of the design system, so charts re-theme automatically with light/dark mode.
 */
export const chartColors = {
  brand: 'hsl(var(--brand))',
  series: [
    'hsl(var(--chart-1))',
    'hsl(var(--chart-2))',
    'hsl(var(--chart-3))',
    'hsl(var(--chart-4))',
    'hsl(var(--chart-5))',
  ],
  grid: 'hsl(var(--border))',
  axis: 'hsl(var(--muted-foreground))',
};

export const tooltipStyle = {
  borderRadius: 8,
  border: '1px solid hsl(var(--border))',
  background: 'hsl(var(--popover))',
  color: 'hsl(var(--popover-foreground))',
  fontSize: 12,
  boxShadow: '0 4px 16px rgb(0 0 0 / 0.12)',
} as const;
