# Graph Report - Scripts-Comunicacao  (2026-09-21)

## Corpus Check
- 9 files · ~47,726 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 78 nodes · 73 edges · 9 communities (8 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d7902afc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]

## God Nodes (most connected - your core abstractions)
1. `🔄 FLUXO DO ORQUESTRADOR DE FORMULÁRIOS` - 9 edges
2. `Correção de Quebras de Linha — FORMULARIO-PRINCIPAL.gs` - 9 edges
3. `PLANO: Ajustar Scripts GS - Orquestrador Funcional` - 8 edges
4. `CLAUDE.md — Scripts-Comunicacao` - 7 edges
5. `📝 Ajustes Necessários` - 7 edges
6. `📊 Plano de Execução` - 5 edges
7. `📐 OS TRÊS DEFEITOS E A ORDEM DE CORREÇÃO` - 4 edges
8. `🚀 COMO USAR` - 4 edges
9. `🔧 TRATAMENTO DE ERROS` - 4 edges
10. `🎯 Estrutura Atual` - 4 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (9 total, 1 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.13
Nodes (14): 🎯 CHECKLIST DE SUCESSO, 📁 DEPENDÊNCIAS ENTRE SCRIPTS, 📊 Diagrama de Fluxo, 🔄 FLUXO DO ORQUESTRADOR DE FORMULÁRIOS, Hierarquia, 📝 LOG DE MUDANÇAS, 📈 MONITORAMENTO, Se Houver Timeout (+6 more)

### Community 1 - "Community 1"
Cohesion: 0.18
Nodes (10): 1º — Linhas de continuação, 2º — Aspas simples aninhadas, 3º — `setChoices([` sem fechamento, CLAUDE.md — Scripts-Comunicacao, 🔴 COMMIT DE REFERÊNCIA — FORMATAÇÃO CORRETA, ⛔ COMMITS QUEBRADOS — NÃO USAR COMO BASE, 📐 OS TRÊS DEFEITOS E A ORDEM DE CORREÇÃO, 📝 PENDÊNCIAS CONHECIDAS (+2 more)

### Community 2 - "Community 2"
Cohesion: 0.18
Nodes (10): 🔗 Dependências, 🎯 Estrutura Atual, Orquestrador, PLANO: Ajustar Scripts GS - Orquestrador Funcional, 📋 Resumo do Plano, ⚠️ Riscos, Scripts Auxiliares, Scripts de Aula (25 arquivos) (+2 more)

### Community 3 - "Community 3"
Cohesion: 0.22
Nodes (8): ✅ Checklist Final, Correção de Quebras de Linha — FORMULARIO-PRINCIPAL.gs, 🔍 Diagnóstico, 📋 Escopo, 📝 Notas, 📌 Objetivo, ⚠️ Riscos e Mitigações, ✅ Verificação de Integridade

### Community 4 - "Community 4"
Cohesion: 0.25
Nodes (7): dependencies, exceptionLogging, runtimeVersion, timeZone, webapp, access, executeAs

### Community 6 - "Community 6"
Cohesion: 0.29
Nodes (7): 📝 Ajustes Necessários, ✅ PASSO 1: Verificar Integridade, ✅ PASSO 2: Garantir Acessibilidade, ✅ PASSO 3: Melhorar Tratamento de Erros, ✅ PASSO 4: Consolidar Funções Comuns, ✅ PASSO 5: Criar Função de Teste, ✅ PASSO 6: Documentar

### Community 7 - "Community 7"
Cohesion: 0.40
Nodes (5): Etapa 1: Reunir linhas de continuação, Etapa 2: Converter aspas internas, Etapa 3: Fechar blocos `setChoices([` órfãos, Etapa 4: Validação, 📊 Plano de Execução

### Community 8 - "Community 8"
Cohesion: 0.50
Nodes (4): 🚀 COMO USAR, Opção 1: Teste Rápido, Opção 2: Criar Todos (Produção), Opção 3: Monitorar Resultado

## Knowledge Gaps
- **52 isolated node(s):** `timeZone`, `dependencies`, `exceptionLogging`, `runtimeVersion`, `executeAs` (+47 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `🔄 FLUXO DO ORQUESTRADOR DE FORMULÁRIOS` connect `Community 0` to `Community 8`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Why does `PLANO: Ajustar Scripts GS - Orquestrador Funcional` connect `Community 2` to `Community 6`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Why does `📝 Ajustes Necessários` connect `Community 6` to `Community 2`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **What connects `timeZone`, `dependencies`, `exceptionLogging` to the rest of the system?**
  _52 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._