'use client';

import { useState } from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';

const preferences = [
  {
    id: 'email-billing',
    label: 'Alertas de faturamento',
    description: 'Faturas emitidas, pagas e vencidas.',
  },
  { id: 'email-payments', label: 'Pagamentos', description: 'Confirmações e falhas de cobrança.' },
  {
    id: 'email-product',
    label: 'Novidades do produto',
    description: 'Recursos e atualizações da Lumina.',
  },
];

export function PreferencesCard() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    'email-billing': true,
    'email-payments': true,
    'email-product': false,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notificações</CardTitle>
        <CardDescription>Escolha o que você quer receber por e-mail.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-1">
        {preferences.map((preference, index) => (
          <div key={preference.id}>
            {index > 0 ? <Separator className="my-1" /> : null}
            <div className="flex items-center justify-between py-3">
              <div className="space-y-0.5">
                <Label htmlFor={preference.id}>{preference.label}</Label>
                <p className="text-xs text-muted-foreground">{preference.description}</p>
              </div>
              <Switch
                id={preference.id}
                checked={enabled[preference.id]}
                onCheckedChange={(value) =>
                  setEnabled((prev) => ({ ...prev, [preference.id]: value }))
                }
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
