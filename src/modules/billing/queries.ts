import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/api/query-keys';
import { sleep } from '@/utils';

import { invoices } from './mock';

export const billingService = {
  async getInvoices() {
    await sleep(300);
    return invoices;
  },
};

export function useInvoices() {
  return useQuery({
    queryKey: queryKeys.billing.invoices(),
    queryFn: billingService.getInvoices,
  });
}
