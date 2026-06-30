'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

/** Create-invoice dialog. Demo flow: validates and confirms (no persistence yet). */
export function NewInvoiceDialog() {
  const [open, setOpen] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOpen(false);
    toast.success('Fatura emitida', { description: 'Demonstração — sem persistência.' });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="brand" size="sm">
          <Plus className="h-4 w-4" /> Nova fatura
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova fatura</DialogTitle>
          <DialogDescription>Preencha os dados para emitir uma fatura.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="inv-customer">Cliente</Label>
            <Input id="inv-customer" required placeholder="Nome do cliente" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="inv-amount">Valor (R$)</Label>
              <Input
                id="inv-amount"
                type="number"
                min="0"
                step="0.01"
                required
                placeholder="0,00"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="inv-due">Vencimento</Label>
              <Input id="inv-due" type="date" required />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" variant="brand">
              Emitir fatura
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
