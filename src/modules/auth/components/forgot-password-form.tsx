'use client';

import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function ForgotPasswordForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    toast.success('Se o e-mail existir, enviaremos instruções de recuperação.');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="space-y-2">
        <Label htmlFor="fp-email">E-mail</Label>
        <Input id="fp-email" type="email" required placeholder="voce@empresa.com" disabled={sent} />
      </div>
      <Button type="submit" variant="brand" className="w-full" disabled={sent}>
        {sent ? 'Instruções enviadas' : 'Enviar instruções'}
      </Button>
    </form>
  );
}
