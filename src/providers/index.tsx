'use client';

import { Toaster } from '@/components/ui/sonner';

import { QueryProvider } from './query-provider';
import { ThemeProvider } from './theme-provider';

/**
 * Single composition root for every client provider. Mounted once in the root
 * layout so pages/components stay free of provider boilerplate.
 */
export function RootProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <QueryProvider>
        {children}
        <Toaster richColors position="top-right" />
      </QueryProvider>
    </ThemeProvider>
  );
}
