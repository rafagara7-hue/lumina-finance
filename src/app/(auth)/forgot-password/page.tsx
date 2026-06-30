import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import { ROUTES } from '@/constants/routes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ForgotPasswordForm } from '@/modules/auth';

export const metadata: Metadata = {
  title: 'Recuperar senha',
};

export default function ForgotPasswordPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Recuperar senha</CardTitle>
        <CardDescription>Informe seu e-mail para receber instruções.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ForgotPasswordForm />
        <Link
          href={ROUTES.login}
          className="flex items-center justify-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Voltar ao login
        </Link>
      </CardContent>
    </Card>
  );
}
