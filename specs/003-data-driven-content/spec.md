# 003 — Conteúdo vindo de um arquivo de dados

- **Prioridade:** P1
- **Status:** Approved — D1 respondida em 2026-10-02
- **Código afetado:** `src/data/`, componentes e páginas, `README.md`

## Contexto

D1 (revista em 2026-10-02): o qa-portfolio é um **modelo** de página para profissionais de QA. O conteúdo vem de um único arquivo, e o que o repositório distribui são dados fictícios que mostram tudo o que cada seção oferece. Quem usa o modelo troca só o arquivo.

## Requisitos funcionais

- **FR-1** Todo o texto do site (perfil, contatos, projetos, ferramentas, métricas) MUST vir de `src/data/portfolio.json`.
- **FR-2** O arquivo MUST ser validado no CI: campos obrigatórios, tipos e URLs `https`; um erro MUST apontar o campo.
- **FR-3** Os dados distribuídos MUST ser fictícios (pessoa, empresas e contatos de exemplo), coerentes entre as seções e preencher todas elas; com `site.demo: true`, o site MUST mostrar um aviso de que os dados são de demonstração.
- **FR-4** O README MUST explicar como rodar, testar, publicar e adaptar o portfólio trocando só o arquivo de dados.

## Critérios de aceite

- **AC-1** Dado um `portfolio.json` com um campo obrigatório ausente, quando a validação roda, então falha citando o campo.
- **AC-2** Dado o `portfolio.json` distribuído, quando o site é renderizado, então todas as seções têm conteúdo, o aviso de demonstração aparece e nenhum contato aponta para um perfil real; com `site.demo: false`, o aviso some.
- **AC-3** Dado um fork que troca só o `portfolio.json` por um válido, quando `make ci` roda, então passa.

## Mudanças

- MODIFIED FR-3 e AC-2: dados fictícios de demonstração no lugar dos projetos reais do dono (D1 revista, #19).
