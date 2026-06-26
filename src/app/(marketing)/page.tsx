import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Bell,
  CreditCard,
  LineChart,
  Lock,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

import { siteConfig } from '@/constants/app';
import { ROUTES } from '@/constants/routes';
import { Reveal } from '@/components/motion/reveal';
import { HeroCanvas } from '@/components/three/hero-canvas';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: LineChart,
    title: 'Receita em tempo real',
    description: 'Acompanhe MRR, ARR e fluxo de caixa com gráficos que respondem ao seu negócio.',
  },
  {
    icon: CreditCard,
    title: 'Faturamento sem atrito',
    description: 'Emita, cobre e concilie faturas com Pix, boleto e cartão em um só lugar.',
  },
  {
    icon: Users,
    title: 'Clientes 360°',
    description: 'LTV, plano e histórico de cada cliente, prontos para a sua equipe de receita.',
  },
  {
    icon: BarChart3,
    title: 'Relatórios prontos',
    description: 'DRE, fluxo de caixa e cohorts exportáveis em PDF, CSV e XLSX.',
  },
  {
    icon: Bell,
    title: 'Alertas inteligentes',
    description: 'Saiba na hora sobre inadimplência, falhas de cobrança e marcos de receita.',
  },
  {
    icon: ShieldCheck,
    title: 'Permissões granulares',
    description: 'Controle de acesso por papel (RBAC) pensado para times financeiros.',
  },
];

const stats = [
  { value: 'R$ 184k', label: 'MRR monitorado' },
  { value: '1.284', label: 'Clientes ativos' },
  { value: '99,98%', label: 'Disponibilidade' },
  { value: '1,8%', label: 'Churn médio' },
];

const plans = [
  {
    name: 'Starter',
    price: 'R$ 0',
    period: '/mês',
    description: 'Para times começando a organizar as finanças.',
    features: ['Até 100 clientes', 'Dashboard essencial', 'Relatórios em CSV'],
    cta: 'Começar grátis',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: 'R$ 349',
    period: '/mês',
    description: 'Para empresas em escala que precisam de controle total.',
    features: [
      'Clientes ilimitados',
      'Faturamento + pagamentos',
      'Relatórios avançados',
      'Alertas em tempo real',
    ],
    cta: 'Assinar Growth',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    period: '',
    description: 'Para operações que exigem governança e integrações.',
    features: ['SSO & RBAC avançado', 'Integrações dedicadas', 'SLA e suporte premium'],
    cta: 'Falar com vendas',
    highlighted: false,
  },
];

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--brand)/0.18),transparent_70%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div>
            <Reveal>
              <Badge variant="brand" className="mb-5 gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                Dashboard financeiro premium
              </Badge>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Clareza para cada número que <span className="text-brand">importa</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                {siteConfig.description}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button size="lg" variant="brand" asChild>
                  <Link href={ROUTES.dashboard}>
                    Acessar dashboard <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#features">Ver recursos</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                <Lock className="h-3.5 w-3.5" /> Demonstração pública · sem dados reais
              </p>
            </Reveal>
          </div>

          <div className="relative h-[340px] sm:h-[420px] lg:h-[480px]">
            <HeroCanvas className="absolute inset-0" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="metrics" className="border-y bg-card/30">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold tracking-tight text-brand sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tudo o que o financeiro precisa
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma plataforma única para enxergar, cobrar e crescer — com a sofisticação de um produto
            de verdade.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.05}>
              <Card className="h-full transition-colors hover:border-brand/40">
                <CardContent className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Planos para cada estágio
            </h2>
            <p className="mt-4 text-muted-foreground">
              Comece de graça e evolua conforme a sua operação cresce.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.05}>
                <Card
                  className={
                    plan.highlighted
                      ? 'relative h-full border-brand shadow-lg shadow-brand/10'
                      : 'h-full'
                  }
                >
                  {plan.highlighted ? (
                    <Badge variant="brand" className="absolute -top-3 left-6">
                      Mais popular
                    </Badge>
                  ) : null}
                  <CardContent className="flex h-full flex-col p-6">
                    <h3 className="font-semibold">{plan.name}</h3>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-3xl font-bold tracking-tight">{plan.price}</span>
                      <span className="text-sm text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                    <ul className="mt-6 space-y-2.5 text-sm">
                      {plan.features.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-brand" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="mt-8 w-full"
                      variant={plan.highlighted ? 'brand' : 'outline'}
                      asChild
                    >
                      <Link href={ROUTES.register}>{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-brand/10 via-background to-chart-2/10 p-10 text-center sm:p-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pronto para ver suas finanças com clareza?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Explore o dashboard de demonstração e descubra como a Lumina organiza receita,
            faturamento e clientes.
          </p>
          <Button size="lg" variant="brand" className="mt-8" asChild>
            <Link href={ROUTES.dashboard}>
              Explorar demonstração <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
