# Guia de contribuição

Obrigado por contribuir com o **Lumina Finance**! Este documento descreve o fluxo
de trabalho e os padrões que mantêm a base saudável e escalável.

## Pré-requisitos

- Node.js **≥ 20.11** e npm **≥ 10**
- Git

## Configuração

```bash
git clone https://github.com/lumina-finance/lumina-finance.git
cd lumina-finance
npm install
cp .env.example .env.local
npm run dev
```

## Fluxo de trabalho

1. Crie uma branch a partir de `main` seguindo o padrão:
   - `feat/<escopo>` — nova funcionalidade
   - `fix/<escopo>` — correção
   - `chore/<escopo>` / `docs/<escopo>` / `refactor/<escopo>`
2. Faça commits pequenos e descritivos.
3. Garanta que tudo passa antes de abrir o PR:
   ```bash
   npm run typecheck && npm run lint && npm run build
   ```
4. Abra um Pull Request para `main` descrevendo a mudança e o _porquê_.

## Padrão de commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/), validados
automaticamente por **Commitlint** no hook `commit-msg`.

```
<tipo>(escopo opcional): descrição no imperativo

feat(billing): adiciona exportação de faturas em CSV
fix(auth): corrige validação de senha no cadastro
```

Tipos aceitos: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`,
`build`, `ci`, `chore`, `revert`.

## Qualidade automática

- **lint-staged** roda ESLint + Prettier nos arquivos _staged_ a cada commit.
- **Husky** orquestra os hooks `pre-commit` e `commit-msg`.
- Imports são ordenados automaticamente pelo Prettier.

## Convenções de código

- Componentes em **PascalCase**, arquivos em **kebab-case**.
- Importe sempre via alias `@/…` (sem caminhos relativos profundos).
- Tipos de domínio vivem em `src/types`; regras de negócio em `src/modules`.
- Veja [`docs/conventions.md`](./docs/conventions.md) para o guia completo.
