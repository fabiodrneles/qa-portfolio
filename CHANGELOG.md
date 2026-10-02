# Changelog

Formato: [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/); versões em [SemVer](https://semver.org/lang/pt-BR/).

## [Unreleased]

## [0.2.0] - 2026-10-02

### Adicionado

- Processo SDD do sdd-kit: specs, ROADMAP, CI, verificação de docs e links (#6).
- Testes unitários com Vitest e Testing Library e cobertura mínima de 80% de linhas (#11).
- Testes E2E com Playwright e de acessibilidade com axe, num job próprio do CI; ESLint (#13).
- Workflow "Release tag" para criar a tag e a release pelo GitHub.

### Mudado

- Create React App → Vite; `vercel.json` com o preset do Vite e rotas diretas (#8, #9).
- Cores de destaque, botão e rótulos escurecidas para contraste ≥ 4,5:1; links sociais com nome acessível (#13).

### Corrigido

- `npm ci` falhava com o lockfile fora de sincronia (#6).

### Removido

- Binário `go-release-manager.exe` e o componente `Contact` sem uso (#6).
