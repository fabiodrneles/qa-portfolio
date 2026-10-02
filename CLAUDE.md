# CLAUDE.md

Guia rápido para agentes (Claude Code) trabalharem no qa-portfolio sem redescobrir o projeto a cada sessão. O processo é o da skill [`sdd-delivery`](https://github.com/fabiodrneles/sdd-kit).

## Retomar o trabalho (sessão nova ou contexto perdido)

1. Leia o **comentário "Estado da fase"** mais recente no épico aberto (issues com o label `épico`): PRs, estado do CI, decisões e próximo passo.
2. Liste os **PRs abertos** e o CI de cada um, e as **issues abertas** da fase.
3. Continue do próximo passo registrado. Não refaça análise que já está em specs, issues ou PRs.

O estado do trabalho vive no GitHub, e não na conversa. Abra o ticket e o PR assim que a tarefa começar e terminar, e atualize o comentário de estado do épico a cada marco.

## O projeto

Portfólio de QA em React 18 com Vite, publicado na Vercel. O conteúdo vem de um arquivo de dados (spec 003); quem fizer fork troca só esse arquivo.

| Caminho | O que tem |
|---|---|
| `src/pages/` | Home, Portfolio e About (rotas do `react-router-dom`) |
| `src/components/` | Header, Footer, TestReports, TestScenarios, Metrics |
| `src/data/` | Conteúdo do site |
| `specs/` | Constituição, specs `NNN-nome/spec.md`, `ROADMAP.md`, `ANALYSIS.md` |

## Comandos

```text
make ci     # lint + testes unitários com cobertura ≥ 80% + build (rode antes de todo push)
make e2e    # Playwright + axe sobre o build de produção (job separado no CI)
make docs   # markdownlint (os links são verificados no CI)
make sdd-check  # cada AC de spec In Progress/Done citado num teste ("NNN AC-n")
```

Numa sessão na web, o hook `.claude/hooks/session-start.sh` instala as dependências e as ferramentas do CI.

## Convenções

- **Idioma:** specs, issues, PRs e documentação em português; commits e código (identificadores) em inglês.
- **Commits:** Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`, `ci:`, `chore:`; `!` para mudança incompatível).
- **Branch:** uma por ticket, `<tipo>/<nº-da-issue>-<descrição>`, a partir da `main`.
- **PR:** começa com `Closes #N · Épico #M · Spec NNN` e segue o template.
- **Arquivos de status** (status das specs, checkboxes do ROADMAP, CHANGELOG) só mudam no PR de fechamento da fase.
- **Merge, tag e release** são do dono, salvo delegação explícita para uma rodada.

## Armadilhas já conhecidas

- **`npm ci` exige o lockfile em sincronia com o `package.json`.** Mudou dependência? Rode `npm install` e versione o `package-lock.json`.
- **O npm 10 quebra (`Cannot read properties of null (reading 'edgesOut')`) ao resolver as dependências do Vitest.** Gere o lockfile com `npx npm@11 install`; o `npm ci` do npm 10 funciona com ele.
- **Chromium já instalado (sessão na web):** `PW_CHROMIUM_PATH=/opt/pw-browsers/chromium make e2e` evita o `playwright install`.
- **Acessibilidade:** o axe reprova contraste abaixo de 4,5:1; teste a cor nova contra o fundo antes de trocar.
- **Rotas diretas na Vercel** dependem do `vercel.json` (reescrita para `index.html`).

## Economia de uso

- Leia trechos (`sed -n 'a,bp'`, `grep -n`) em vez de arquivos inteiros, e não releia o que já leu nesta sessão.
- Para conferir CI, peça só o resumo das conclusões dos checks. Para investigar uma falha, leia o fim do log do job que falhou.
- Junte a validação num comando só (`make ci`) em vez de rodar etapas avulsas.
- Detalhes vão nos PRs e nas issues; no chat, só o resumo e o próximo passo.
