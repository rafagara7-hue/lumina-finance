<div align="center">

# Lumina Finance

**Clareza para cada número que importa.**

Dashboard financeiro premium para empresas modernas — receita, faturamento, clientes e pagamentos em um único centro de controle luminoso.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149eca?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

</div>

---

> **Status:** demonstração pública / arquitetura inicial. O backend ainda não existe — todos os dados são _seeds_ determinísticos e claramente sintéticos. A base foi desenhada para receber milhares de linhas de código de produto.

## ✨ Visão geral

Lumina Finance é a fundação de um produto SaaS comercial. O objetivo deste repositório **não** é ser um template de estudo, e sim uma arquitetura modular pronta para escalar, com qualidade de engenharia desde o primeiro commit:

- **Arquitetura modular** orientada a domínios (`modules/`), com camadas claras de UI, dados e regras de negócio.
- **Design system** sobre Tailwind + shadcn/ui (estilo _new-york_), com _tokens_ HSL para _white-label_ e _dark mode_.
- **Camada de dados** desacoplada (HTTP client + TanStack Query) — trocar _mocks_ por um backend real é uma mudança de uma linha por serviço.
- **RBAC** (controle de acesso por papel) já modelado na navegação e nos _guards_.
- **Experiência premium**: animações (Framer Motion + GSAP), 3D (React Three Fiber) e gráficos (Recharts).

## 🧱 Stack

| Camada         | Tecnologias                                                      |
| -------------- | ---------------------------------------------------------------- |
| Framework      | Next.js 15 (App Router, RSC), React 19, TypeScript 5             |
| Estilo         | Tailwind CSS 3, shadcn/ui, `tailwindcss-animate`, `next-themes`  |
| Dados & estado | TanStack Query, Zustand, TanStack Table                          |
| Formulários    | React Hook Form, Zod                                             |
| Visualização   | Recharts, React Three Fiber + drei, Framer Motion, GSAP          |
| Ícones         | Lucide                                                           |
| Qualidade      | ESLint 9, Prettier, Husky, Commitlint, lint-staged, EditorConfig |

## 🚀 Começando

> Requer **Node.js ≥ 20.11** e **npm ≥ 10**. Veja [`docs/getting-started.md`](./docs/getting-started.md) para detalhes.

```bash
# 1. Instale as dependências
npm install

# 2. Configure as variáveis de ambiente
cp .env.example .env.local

# 3. Suba o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000). A demonstração do dashboard fica em [`/dashboard`](http://localhost:3000/dashboard).

## 📜 Scripts

| Script                 | Descrição                          |
| ---------------------- | ---------------------------------- |
| `npm run dev`          | Servidor de desenvolvimento        |
| `npm run build`        | Build de produção                  |
| `npm run start`        | Sobe o build de produção           |
| `npm run lint`         | ESLint                             |
| `npm run lint:fix`     | ESLint com correção automática     |
| `npm run typecheck`    | Checagem de tipos (`tsc --noEmit`) |
| `npm run format`       | Formata o projeto com Prettier     |
| `npm run format:check` | Verifica formatação                |

## 🗂️ Estrutura

```text
src/
├── app/            # App Router: rotas, layouts, route handlers
│   ├── (marketing) # Landing page pública
│   ├── (auth)      # Login / cadastro
│   └── (dashboard) # Aplicação autenticada
├── components/     # Componentes compartilhados + ui/ (shadcn)
├── modules/        # Domínios: auth, dashboard, finance, billing, customers…
├── layouts/        # App shell, sidebar, headers, footer
├── charts/         # Gráficos (Recharts)
├── tables/         # Tabelas (TanStack Table)
├── providers/      # Providers de cliente (Query, Theme)
├── hooks/          # Hooks reutilizáveis
├── services/       # Serviços transversais (logger, storage)
├── api/            # HTTP client, endpoints, query keys
├── store/          # Stores Zustand
├── types/          # Tipos globais de domínio
├── constants/      # Configuração, rotas, navegação, RBAC
├── utils/          # Formatadores e helpers
├── animations/     # Variants Framer Motion + helpers GSAP
└── styles/         # CSS global e design tokens
```

A descrição completa está em [`docs/folder-structure.md`](./docs/folder-structure.md) e a visão arquitetural em [`docs/architecture.md`](./docs/architecture.md).

## 🧭 Roadmap

A base já contempla autenticação, permissões, dashboard, faturamento, clientes, pagamentos, relatórios, notificações e configurações. Os próximos passos estão em [`docs/roadmap.md`](./docs/roadmap.md).

## 🤝 Contribuição

Leia o [guia de contribuição](./CONTRIBUTING.md) e o [código de conduta](./CODE_OF_CONDUCT.md). Commits seguem [Conventional Commits](https://www.conventionalcommits.org/), validados por Commitlint.

## 🔒 Segurança

Encontrou uma vulnerabilidade? Veja a [política de segurança](./SECURITY.md).

## 📄 Licença

Distribuído sob a licença [MIT](./LICENSE).
