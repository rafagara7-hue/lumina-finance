import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/api/query-keys';
import { sleep } from '@/utils';

import { customers } from './mock';

export const customersService = {
  async getCustomers() {
    await sleep(300);
    return customers;
  },
  async getCustomer(id: string) {
    await sleep(200);
    return customers.find((customer) => customer.id === id) ?? null;
  },
};

export function useCustomers() {
  return useQuery({
    queryKey: queryKeys.customers.list(),
    queryFn: customersService.getCustomers,
  });
}

export function useCustomer(id: string) {
  return useQuery({
    queryKey: queryKeys.customers.detail(id),
    queryFn: () => customersService.getCustomer(id),
  });
}
