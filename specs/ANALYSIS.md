# Análise e verificação do qa-portfolio

Feita em 2026-10-02 na adoção do sdd-kit (estudo de caso Node do sdd-kit, épico fabiodrneles/sdd-kit#59).

## 1. Resumo executivo

Portfólio em React 18 (Create React App) com três páginas (Home, Portfolio, About) e o conteúdo fixo em `src/data/testData.js`. O site está publicado na Vercel (`qa-portfolio-sigma.vercel.app`). Não há testes nem CI, o `npm ci` falha e todos os números do portfólio são fictícios. Para um portfólio de QA, a falta de testes é a observação mais grave.

## 2. O que foi verificado

| Comando | Resultado |
|---|---|
| `npm ci` | Falha: o lockfile fixa `react@19.2.0` e o `package.json` pede `^18.2.0` |
| `npm install && CI=true npx react-scripts build` | Passa (62 kB de JS) |
| `npm test` | Nenhum teste |
| `git tag` | `v0.1.0` já existe (commit inicial, 2025); as fases começam em `v0.2.0` |

## 3. Observações por severidade

### Críticas

- Nenhum teste e nenhum CI num portfólio que demonstra qualidade de software.
- `npm ci` falha: o build não é reproduzível.

### Altas

- `react-scripts` (Create React App) está descontinuado.
- O conteúdo (relatórios, métricas, contato `qa.engineer@example.com`) é de demonstração e está espalhado em `testData.js` e nos componentes.
- `BrowserRouter` sem regra de reescrita: abrir `/portfolio` direto na Vercel pode dar 404.

### Médias

- `go-release-manager.exe` (binário) versionado no repositório.
- `Contact` não é usado por nenhuma página.

### Baixas

- `Footer.jsx` usa `class` em vez de `className`.
- README só com capturas de tela, sem instruções.

## 4. Pontos positivos (manter)

- Visual completo e já publicado; dados separados dos componentes num módulo.
- Navegação simples, poucas dependências.

## 5. Avaliação do README

Mostra o resultado, mas não diz como rodar, testar, publicar nem como adaptar para outro QA.

## 6. Melhorias recomendadas (priorizadas)

1. Build reproduzível, Vite e limpeza (spec 001).
2. Testes unitários, E2E e de acessibilidade no CI com cobertura mínima (spec 002).
3. Conteúdo num arquivo de dados validado, com os projetos reais do dono (spec 003).

## 7. Decisões em aberto

Respondidas pelo dono em 2026-10-02, todas conforme recomendado:

- [x] **D1** Propósito → **template**: todo o conteúdo vem de um arquivo validado, com dados **fictícios** que demonstram cada seção; quem usa o modelo troca só o arquivo. *(Revista pelo dono em 2026-10-02: a primeira versão previa os projetos reais do dono.)*
- [x] **D2** Build → **Vite** com Vitest, mantendo JavaScript e React 18.
- [x] **D3** Testes → **unitários + E2E + acessibilidade** (Vitest com Testing Library, Playwright, axe), no CI com cobertura mínima.
- [x] **D4** Deploy → **Vercel**, com `vercel.json` para as rotas diretas.
