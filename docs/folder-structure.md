# Estrutura de pastas

```text
lumina-finance/
├── docs/                      # Documentação técnica
├── public/                    # Assets estáticos
├── src/
│   ├── app/                   # App Router
│   │   ├── (marketing)/       # Landing pública
│   │   ├── (auth)/            # Login / cadastro
│   │   ├── (dashboard)/       # Aplicação autenticada
│   │   ├── api/               # Route handlers
│   │   ├── layout.tsx         # Root layout (fonts, metadata, providers)
│   │   ├── error.tsx          # Boundary de erro
│   │   ├── not-found.tsx      # 404
│   │   ├── loading.tsx        # Estado de carregamento
│   │   ├── sitemap.ts         # SEO
│   │   └── robots.ts          # SEO
│   ├── components/            # Componentes compartilhados
│   │   ├── ui/                # Primitivos shadcn/ui
│   │   ├── three/             # React Three Fiber
│   │   └── motion/            # Wrappers Framer Motion
│   ├── modules/               # Domínios de negócio
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── finance/
│   │   ├── billing/
│   │   ├── customers/
│   │   ├── payments/
│   │   ├── reports/
│   │   ├── notifications/
│   │   └── settings/
│   ├── layouts/               # App shell, sidebar, headers, footer
│   ├── charts/                # Gráficos (Recharts)
│   ├── tables/                # Tabelas (TanStack Table)
│   ├── providers/             # Providers de cliente
│   ├── hooks/                 # Hooks reutilizáveis
│   ├── services/              # Serviços transversais (logger, storage)
│   ├── api/                   # HTTP client, endpoints, query keys
│   ├── store/                 # Stores Zustand
│   ├── lib/                   # Utilitários de baixo nível (cn)
│   ├── types/                 # Tipos globais de domínio
│   ├── constants/             # Configuração, rotas, navegação, RBAC
│   ├── utils/                 # Formatadores e helpers
│   ├── animations/            # Variants Framer Motion + helpers GSAP
│   └── styles/                # CSS global e design tokens
├── .husky/                    # Git hooks
├── .github/                   # CI, templates, dependabot
└── (configs na raiz)          # tsconfig, eslint, prettier, tailwind, etc.
```

## Aliases de import

`@/*` aponta para `src/*` (configurado em `tsconfig.json`). Exemplos:

```ts
import { formatMoney } from '@/utils/format';
import { Button } from '@/components/ui/button';
import { useCustomers } from '@/modules/customers';
```
