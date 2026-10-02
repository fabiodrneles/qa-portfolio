# 003 — Conteúdo vindo de um arquivo de dados

- **Prioridade:** P1
- **Status:** Approved — D1 respondida em 2026-10-02
- **Código afetado:** `src/data/`, componentes e páginas, `README.md`

## Contexto

D1: o site serve ao dono e a quem fizer fork. Hoje o conteúdo é fictício e está espalhado; o objetivo é um único arquivo com perfil, contatos e projetos, e os projetos reais do dono (go-release-manager, exemplo-automacao-page-object, sdd-kit-demo e sdd-kit) com links para CI, releases e relatórios.

## Requisitos funcionais

- **FR-1** Todo o texto do site (perfil, contatos, projetos, ferramentas, métricas) MUST vir de `src/data/portfolio.json`.
- **FR-2** O arquivo MUST ser validado no CI: campos obrigatórios, tipos e URLs `https`; um erro MUST apontar o campo.
- **FR-3** A instância do dono MUST listar os projetos reais com links para o repositório, o CI e a última release; números de testes e cobertura MUST ser reais e citados com a fonte.
- **FR-4** O README MUST explicar como rodar, testar, publicar e adaptar o portfólio trocando só o arquivo de dados.

## Critérios de aceite

- **AC-1** Dado um `portfolio.json` com um campo obrigatório ausente, quando a validação roda, então falha citando o campo.
- **AC-2** Dado o `portfolio.json` do dono, quando o site é renderizado, então cada projeto mostra os links de repositório, CI e release, e nenhum dado de demonstração aparece.
- **AC-3** Dado um fork que troca só o `portfolio.json` por um válido, quando `make ci` roda, então passa.
