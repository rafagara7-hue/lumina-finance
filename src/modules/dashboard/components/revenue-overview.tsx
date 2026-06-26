'use client';

import { OverviewBarChart, RevenueAreaChart } from '@/charts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { useCashflow, useRevenueSeries } from '../queries';

export function RevenueOverview() {
  const revenue = useRevenueSeries();
  const cashflow = useCashflow();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Visão financeira</CardTitle>
        <CardDescription>Receita recorrente e fluxo de caixa do período</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="revenue">
          <TabsList>
            <TabsTrigger value="revenue">Receita</TabsTrigger>
            <TabsTrigger value="cashflow">Fluxo de caixa</TabsTrigger>
          </TabsList>
          <TabsContent value="revenue">
            {revenue.isLoading || !revenue.data ? (
              <Skeleton className="h-[300px] w-full" />
            ) : (
              <RevenueAreaChart data={revenue.data} />
            )}
          </TabsContent>
          <TabsContent value="cashflow">
            {cashflow.isLoading || !cashflow.data ? (
              <Skeleton className="h-[300px] w-full" />
            ) : (
              <OverviewBarChart data={cashflow.data} />
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
