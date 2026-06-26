import type { Metadata } from 'next';
import Link from 'next/link';

import { ROUTES } from '@/constants/routes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LoginForm } from '@/modules/auth';

export const metadata: Metadata = {
  title: 'Entrar',
};

export default function LoginPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Bem-vindo de volta</CardTitle>
        <CardDescription>Entre para acessar o seu dashboard financeiro.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <LoginForm />
        <p className="text-center text-sm text-muted-foreground">
          Não tem uma conta?{' '}
          <Link href={ROUTES.register} className="font-medium text-brand hover:underline">
            Criar conta
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
