# Arquitetura

Lumina Finance é estruturado como um SaaS modular. O princípio central é a
**separação de responsabilidades em camadas**, de modo que cada parte possa
crescer (e ser substituída) de forma independente.

## Camadas

```
┌──────────────────────────────────────────────────────────────┐
│  app/            Rotas, layouts e route handlers (App Router)  │
├──────────────────────────────────────────────────────────────┤
│  modules/        Domínios (UI + dados + regras por contexto)   │
├──────────────────────────────────────────────────────────────┤
│  components/ charts/ tables/ layouts/   Apresentação reutilizável │
├──────────────────────────────────────────────────────────────┤
│  hooks/ store/ providers/   Estado e composição de cliente     │
├──────────────────────────────────────────────────────────────┤
│  services/ api/   Acesso a dados (HTTP, logger, storage)       │
├──────────────────────────────────────────────────────────────┤
│  types/ constants/ utils/ animations/   Núcleo transversal     │
└──────────────────────────────────────────────────────────────┘
```

### `app/`

App Router com três grupos de rota:

- `(marketing)` — landing page pública.
- `(auth)` — login e cadastro.
- `(dashboard)` — aplicação autenticada (sidebar + header + conteúdo).

Server Components por padrão; ilhas de interatividade marcadas com `'use client'`.

### `modules/`

Cada domínio é autocontido e expõe uma API pública via `index.ts`:

```
modules/finance/
├── mock.ts        # seeds determinísticos (substituíveis por API)
├── columns.tsx    # definição de colunas (TanStack Table)
├── queries.ts     # service + hooks TanStack Query
├── components/    # componentes específicos do domínio
└── index.ts       # barrel público
```

Domínios não importam o _interior_ de outros domínios — apenas o que está
exportado no barrel, evitando acoplamento.

### Acesso a dados

`api/client.ts` é o **único** ponto de integração HTTP. Os _services_ de cada
módulo chamam esse client; hoje resolvem _mocks_ locais. Trocar para um backend
real é alterar o corpo de uma função, sem tocar na UI.

`api/query-keys.ts` centraliza as chaves do TanStack Query, tornando a
invalidação de cache hierárquica e previsível.

### Estado

- **Servidor:** TanStack Query (dados remotos, cache, _revalidation_).
- **Cliente:** Zustand para estado de UI (`ui-store`), sessão (`auth-store`) e
  notificações (`notification-store`).

### Autenticação & permissões

O `auth-store` espelha a sessão; `constants/permissions.ts` define a matriz RBAC
(papel → permissões). A navegação e os _guards_ usam `usePermissions()` para
renderização condicional. O backend permanecerá a fonte da verdade.

### Theming

Tokens de cor em HSL (`styles/globals.css`) consumidos por Tailwind e Recharts.
Isso habilita _dark mode_ e _white-label_ sem alterar componentes.
