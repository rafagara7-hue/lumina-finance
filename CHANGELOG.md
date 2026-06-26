# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/),
e o projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Não lançado]

### A fazer

- Integração com backend real (substituir os _seeds_ de demonstração).
- Autenticação e sessão (Auth.js/custom JWT).
- Persistência e _webhooks_ de pagamento.

## [0.1.0] - 2026-06-26

### Adicionado

- Arquitetura inicial do Lumina Finance (Next.js 15 + React 19 + TypeScript).
- Design system sobre Tailwind CSS e shadcn/ui com _tokens_ HSL e _dark mode_.
- Estrutura modular por domínio (`modules/`): auth, dashboard, finance, billing,
  customers, payments, reports, notifications, settings.
- Camada de dados com HTTP client, TanStack Query e _query keys_ centralizadas.
- Estado global com Zustand (auth, UI, notificações) e RBAC.
- Páginas: landing pública, login/cadastro e aplicação autenticada completa.
- Gráficos (Recharts), tabelas (TanStack Table), 3D (React Three Fiber) e
  animações (Framer Motion + GSAP).
- Ferramentas de qualidade: ESLint, Prettier, Husky, Commitlint, lint-staged,
  EditorConfig e organização automática de imports.
- Documentação: README, guias em `docs/`, contribuição, segurança e licença.

[Não lançado]: https://github.com/lumina-finance/lumina-finance/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/lumina-finance/lumina-finance/releases/tag/v0.1.0
