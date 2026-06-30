'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Terminal } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { loginSchema, type LoginInput } from '../schema';
import { demoCredentials } from '../seed';

export function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    // Prefilled with the DEV access so anyone can walk straight through the login.
    defaultValues: { email: demoCredentials.email, password: demoCredentials.password },
  });

  async function enterDashboard() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    toast.success('Bem-vindo de volta!');
    router.push(ROUTES.dashboard);
  }

  return (
    <div className="space-y-4">
      {/* DEV access — there is no real auth gate yet; these credentials just pass the login. */}
      <div className="rounded-lg border border-brand/30 bg-brand/5 p-3 text-xs">
        <p className="flex items-center gap-1.5 font-medium text-brand">
          <Terminal className="h-3.5 w-3.5" /> Acesso DEV (demonstração)
        </p>
        <p className="mt-1 text-muted-foreground">
          E-mail <span className="font-mono text-foreground">{demoCredentials.email}</span> · senha{' '}
          <span className="font-mono text-foreground">{demoCredentials.password}</span>
        </p>
        <p className="mt-1 text-muted-foreground">Já preenchido — clique em “Entrar”.</p>
      </div>

      <form onSubmit={handleSubmit(enterDashboard)} className="space-y-4" noValidate>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" placeholder="voce@empresa.com" {...register('email')} />
          {errors.email ? <p className="text-xs text-destructive">{errors.email.message}</p> : null}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Senha</Label>
            <Link href={ROUTES.forgotPassword} className="text-xs text-brand hover:underline">
              Esqueceu a senha?
            </Link>
          </div>
          <Input id="password" type="password" placeholder="••••••••" {...register('password')} />
          {errors.password ? (
            <p className="text-xs text-destructive">{errors.password.message}</p>
          ) : null}
        </div>

        <Button type="submit" variant="brand" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Entrar'}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">ou</span>
        </div>
      </div>

      <Button
        type="button"
        variant="outline"
        className="w-full"
        disabled={isSubmitting}
        onClick={() => void enterDashboard()}
      >
        <Terminal className="h-4 w-4" /> Entrar como DEV
      </Button>
    </div>
  );
}
