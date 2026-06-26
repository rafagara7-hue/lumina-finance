import type { Metadata } from 'next';
import Link from 'next/link';

import { ROUTES } from '@/constants/routes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RegisterForm } from '@/modules/auth';

export const metadata: Metadata = {
  title: 'Criar conta',
};

export default function RegisterPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Crie sua conta</CardTitle>
        <CardDescription>Comece a organizar as finanças da sua empresa.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <RegisterForm />
        <p className="text-center text-sm text-muted-foreground">
          Já tem uma conta?{' '}
          <Link href={ROUTES.login} className="font-medium text-brand hover:underline">
            Entrar
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
