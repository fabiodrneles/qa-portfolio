# Constituição do qa-portfolio

Princípios que toda spec e todo PR devem respeitar. Mudá-los exige uma spec própria.

1. **Testado.** Todo critério de aceite tem teste automatizado; o CI bloqueia merge vermelho.
2. **Falhar alto.** Erros são reportados com contexto e código de saída diferente de zero; nada é descartado em silêncio.
3. **Conteúdo é dado.** Texto do site vem do arquivo de dados validado, nunca fixo em componente (spec 003).
4. **Verdadeiro.** Números e projetos mostrados são reais e citam a fonte; dados de demonstração não vão para a instância do dono.
5. **Acessível.** Nenhuma página com violação `serious` ou `critical` do axe.
6. **Reproduzível.** `npm ci` e `make ci` funcionam num clone limpo, sem passo manual.
