import Link from 'next/link';

import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="text-7xl font-bold tracking-tight text-brand">404</p>
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">Página não encontrada</h1>
        <p className="text-muted-foreground">A página que você procura não existe ou foi movida.</p>
      </div>
      <Button asChild variant="brand">
        <Link href={ROUTES.home}>Voltar ao início</Link>
      </Button>
    </div>
  );
}
