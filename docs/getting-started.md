# Começando

## Requisitos

- **Node.js ≥ 20.11** (recomendado: a versão em [`.nvmrc`](../.nvmrc))
- **npm ≥ 10**

## Instalação

```bash
npm install
```

> O projeto usa `legacy-peer-deps=true` (em [`.npmrc`](../.npmrc)) durante a
> transição do ecossistema para o React 19. Bibliotecas maduras ainda declaram
> _peer ranges_ de React 18, mas são compatíveis em tempo de execução.

## Variáveis de ambiente

Copie o exemplo e ajuste conforme necessário:

```bash
cp .env.example .env.local
```

Variáveis prefixadas com `NEXT_PUBLIC_` são expostas ao navegador. As demais são
reservadas para o backend futuro (autenticação, banco, pagamentos).

## Desenvolvimento

```bash
npm run dev      # http://localhost:3000
```

Rotas úteis:

- `/` — landing page
- `/login` · `/register` — autenticação (demo)
- `/dashboard` — aplicação
- `/api/health` — health-check

## Verificação

```bash
npm run typecheck   # tipos
npm run lint        # padrões de código
npm run build       # build de produção
```

## Solução de problemas

- **Erro de _peer dependencies_:** confirme que o `.npmrc` está presente e
  reinstale com `npm install`.
- **Fontes não carregam no build offline:** o `next/font` baixa as fontes no
  build; garanta acesso à internet ou troque por fontes locais.
