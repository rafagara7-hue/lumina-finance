'use client';

import { useEffect } from 'react';

import { logger } from '@/services/logger';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error('Unhandled route error', { message: error.message, digest: error.digest });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">Algo deu errado</h1>
        <p className="text-muted-foreground">
          Ocorreu um erro inesperado. Tente novamente em alguns instantes.
        </p>
      </div>
      <Button variant="brand" onClick={reset}>
        Tentar novamente
      </Button>
    </div>
  );
}
