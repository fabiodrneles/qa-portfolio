# 002 — Testes e esteira de qualidade

- **Prioridade:** P0
- **Status:** Done — entregue na `v0.1.0`
- **Código afetado:** `src/**/*.test.jsx`, `e2e/`, `vite.config.js`, `playwright.config.js`, `.github/workflows/ci.yml`

## Contexto

Um portfólio de QA sem testes contradiz o que ele quer demonstrar. A esteira também valida a spec 010 do sdd-kit (cobertura mínima no `make ci`).

## Requisitos funcionais

- **FR-1** Os componentes e as páginas MUST ter testes unitários (Vitest e Testing Library); o `make ci` MUST falhar com cobertura de linhas abaixo de 80%.
- **FR-2** Testes E2E (Playwright, Chromium) MUST percorrer as três páginas pelo menu, sobre o build de produção.
- **FR-3** Cada página MUST passar no axe sem violações `serious` ou `critical`.
- **FR-4** O CI MUST rodar lint, testes unitários com cobertura, build e E2E em todo PR, e publicar o relatório do Playwright quando falhar.

## Critérios de aceite

- **AC-1** Dada a suíte unitária, quando `npm run test:coverage` roda, então todos os testes passam e a cobertura de linhas é ≥ 80%; abaixo disso o comando falha.
- **AC-2** Dado o build servido localmente, quando o E2E navega Home → Portfolio → About pelo menu, então cada página mostra o seu título e a URL muda.
- **AC-3** Dada cada página, quando o axe roda, então não há violações `serious` nem `critical`.
- **AC-4** Dado um PR, quando o CI roda, então os passos de FR-4 aparecem e falham o check se algum falhar.
