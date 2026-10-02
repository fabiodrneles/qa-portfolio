# 001 — Base reproduzível com Vite

- **Prioridade:** P0
- **Status:** Done — entregue na `v0.1.0`
- **Código afetado:** `package.json`, `package-lock.json`, `index.html`, `vite.config.js`, `vercel.json`, `src/`

## Contexto

O `npm ci` falha, o Create React App está descontinuado e há sobras no repositório (ANALYSIS §3).

## Requisitos funcionais

- **FR-1** `npm ci` MUST instalar a partir do lockfile sem erro.
- **FR-2** O build e o servidor de desenvolvimento MUST usar o Vite (`npm run build` gera `dist/`, `npm run dev` serve o site).
- **FR-3** Abrir `/portfolio` ou `/about` direto na Vercel MUST mostrar a página, não um 404 (`vercel.json` reescreve para `index.html`).
- **FR-4** O repositório MUST NOT versionar binários; código sem uso MUST ser removido e o JSX MUST usar `className`.

## Critérios de aceite

- **AC-1** Dado um clone limpo, quando `make deps ci` roda, então instala, testa e gera `dist/index.html`.
- **AC-2** Dado o `vercel.json`, quando a configuração é lida, então toda rota sem arquivo é reescrita para `/index.html`.
- **AC-3** Dado o repositório, quando os arquivos versionados são listados, então não há `.exe` e nenhum JSX usa `class=`.
