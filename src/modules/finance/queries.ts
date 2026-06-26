import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/api/query-keys';
import { sleep } from '@/utils';

import { transactions } from './mock';

export const financeService = {
  async getTransactions() {
    await sleep(300);
    return transactions;
  },
};

export function useTransactions() {
  return useQuery({
    queryKey: queryKeys.finance.transactions(),
    queryFn: financeService.getTransactions,
  });
}
