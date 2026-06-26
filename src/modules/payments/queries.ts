import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/api/query-keys';
import { sleep } from '@/utils';

import { payments } from './mock';

export const paymentsService = {
  async getPayments() {
    await sleep(300);
    return payments;
  },
};

export function usePayments() {
  return useQuery({
    queryKey: queryKeys.payments.list(),
    queryFn: paymentsService.getPayments,
  });
}
