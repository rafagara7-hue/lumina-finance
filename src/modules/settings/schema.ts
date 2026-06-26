import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string().min(2, 'Informe seu nome'),
  email: z.string().email('E-mail inválido'),
  company: z.string().min(2, 'Informe a empresa'),
});

export type ProfileInput = z.infer<typeof profileSchema>;
