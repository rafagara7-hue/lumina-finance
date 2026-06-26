# Roadmap

A arquitetura já contempla os pilares de um SaaS financeiro. Este roadmap mostra
o caminho de evolução — a base foi desenhada para absorver cada item com mudança
local e mínima.

## Fundação (✅ concluído)

- [x] Arquitetura modular e design system
- [x] Landing pública + fluxo de auth (demo)
- [x] Dashboard, finanças, faturamento, clientes, pagamentos, relatórios,
      notificações e configurações
- [x] RBAC, camada de dados e ferramentas de qualidade

## Próximos passos

### Backend & dados

- [ ] Conectar `api/client.ts` a uma API real
- [ ] Substituir os `mock.ts` por serviços remotos (mutations + cache)
- [ ] Banco de dados e camada de persistência

### Autenticação & contas

- [ ] Login real (Auth.js / JWT), refresh de sessão e _middleware_ de rota
- [ ] Convites de membros e gestão de papéis (RBAC server-side)
- [ ] Multi-organização / multi-tenant

### Faturamento & pagamentos

- [ ] Integração com processador de pagamentos (ex.: Stripe)
- [ ] _Webhooks_ de cobrança e conciliação
- [ ] Emissão fiscal e exportações contábeis

### Produto

- [ ] Filtros e busca server-side nas tabelas
- [ ] Detalhe de cliente e _drill-down_ de métricas
- [ ] Notificações em tempo real (WebSocket/SSE)
- [ ] Internacionalização (i18n) e múltiplas moedas

### Qualidade & operação

- [ ] Testes (Vitest + Testing Library + Playwright)
- [ ] Observabilidade (Sentry) e analytics
- [ ] Storybook para o design system
