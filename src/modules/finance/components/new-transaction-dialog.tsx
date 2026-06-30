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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

/** Create-transaction dialog (demo flow). */
export function NewTransactionDialog() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('income');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOpen(false);
    toast.success('Transação registrada', { description: 'Demonstração — sem persistência.' });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="brand" size="sm">
          <Plus className="h-4 w-4" /> Nova transação
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova transação</DialogTitle>
          <DialogDescription>Registre uma receita ou despesa.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="txn-desc">Descrição</Label>
            <Input id="txn-desc" required placeholder="Ex.: Assinatura — Cliente X" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="txn-type">Tipo</Label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger id="txn-type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="income">Receita</SelectItem>
                  <SelectItem value="expense">Despesa</SelectItem>
                  <SelectItem value="refund">Reembolso</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="txn-amount">Valor (R$)</Label>
              <Input
                id="txn-amount"
                type="number"
                min="0"
                step="0.01"
                required
                placeholder="0,00"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" variant="brand">
              Registrar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
