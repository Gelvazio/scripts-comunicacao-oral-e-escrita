# CLAUDE.md — Scripts-Comunicacao

Instruções específicas deste projeto. Precedência máxima, acima do `CLAUDE.md` global.

---

## 🔴 COMMIT DE REFERÊNCIA — FORMATAÇÃO CORRETA

**`7f584fe` — `fix: corrigir sintaxe de FORMULARIO-PRINCIPAL.gs (versao de referencia)`**

Este é o **único** commit em que `FORMULARIO-PRINCIPAL.gs` tem sintaxe válida.
Toda alteração futura no arquivo parte dele, nunca de um commit anterior.

```bash
git show 7f584fe:FORMULARIO-PRINCIPAL.gs > referencia.gs
```

Estado validado em `7f584fe`:

| Métrica | Valor |
|---------|-------|
| Linhas | 7.256 |
| `node --check` | ✅ sintaxe válida |
| Linhas com erro (`revisao.json`) | 0 |
| Delimitadores não fechados | 0 |
| `function` | 52 |
| `createChoice(` | 2.120 |
| `setChoices([` | 530 |
| `setTitle(` | 663 |
| `setRequired(true)` | 582 |

Diagnóstico completo: [`docs/correcao-quebras-de-linha-formulario-principal.md`](docs/correcao-quebras-de-linha-formulario-principal.md).
Relatório linha a linha: `revisao.json`.

---

## ⛔ COMMITS QUEBRADOS — NÃO USAR COMO BASE

Dez tentativas anteriores de corrigir este mesmo arquivo falharam. **Todas** as
versões abaixo têm erro de sintaxe e não rodam no Apps Script:

| Commit | Mensagem | Por que falhou |
|--------|----------|----------------|
| `ea20ac7` | corrigir todas as quebras de linha faltantes | 369 linhas com erro |
| `85f5ead` | fechar setChoices na linha 54 | corrigiu 1 de 25 blocos |
| `8b1b093` | consolidar strings em uma linha com aspas corretas | quebras persistiram |
| `366fb55` | converter aspas simples internas para duplas | parcial |
| `dfa656f` | aspas duplas no meio das strings | parcial |
| `d20e826` | consolidar strings em uma linha sem quebras | parcial |
| `bb9a11e` | revert: restaurar arquivo original | voltou ao estado quebrado |
| `3f15381` | consolidar strings em uma linha unica | parcial |
| `9bbaaec` | converter strings para aspas duplas com escape correto | parcial |
| `39676a1` | substituir aspas simples por duplas | parcial |

**Causa das falhas repetidas:** cada tentativa atacou *um* dos três defeitos
isoladamente. Eles são encadeados e precisam ser corrigidos **na ordem certa**
— ver seção seguinte.

---

## 📐 OS TRÊS DEFEITOS E A ORDEM DE CORREÇÃO

Se o arquivo voltar a quebrar, corrija **nesta ordem**. Fora dela, um defeito
mascara o outro e a correção falha.

### 1º — Linhas de continuação
String de uma linha partida em duas linhas físicas:

```javascript
// ERRADO — erro de sintaxe
var form = FormApp.create('Avaliação — Aula 02 · Preparação para Entrevistas
Comunicação oral estratégica · SENAI');

// CERTO
var form = FormApp.create('Avaliação — Aula 02 · Preparação para Entrevistas Comunicação oral estratégica · SENAI');
```

**Detecção:** linha que **não** inicia um statement válido (`form.`, `var `,
`function `, `Logger.`, `}`, `]`, `.set`, `.add`, …) é continuação da anterior.

⚠️ **Não detecte por contagem de aspas.** O defeito 2 faz as aspas se parearem
por acaso e a quebra passa despercebida. Foi essa a armadilha das 10 tentativas.

### 2º — Aspas simples aninhadas
Aspas simples dentro de string delimitada por aspas simples:

```javascript
// ERRADO
.setTitle('16. Qual é a definição de 'Feche com pergunta'?')

// CERTO
.setTitle('16. Qual é a definição de "Feche com pergunta"?')
```

Aspas internas são sempre **duplas**. O delimitador externo é sempre simples.

### 3º — `setChoices([` sem fechamento
Só depois dos dois anteriores. Afetava a **questão 1 de cada função** (25×):

```javascript
form.addMultipleChoiceItem().setTitle('1. ...')
  .setChoices([
    form.addMultipleChoiceItem().createChoice('...', true),
    form.addMultipleChoiceItem().createChoice('...', false)
  ]).setRequired(true);        // <-- esta linha faltava
```

**Distinção:** linha com `.createChoice(` é alternativa (continua o bloco);
linha com `.setTitle(` é questão nova (o bloco anterior deveria ter fechado).

---

## ✅ VALIDAÇÃO OBRIGATÓRIA

Nenhuma alteração em `FORMULARIO-PRINCIPAL.gs` é dada por concluída sem os dois
comandos abaixo passando:

```bash
cp FORMULARIO-PRINCIPAL.gs /tmp/check.js && node --check /tmp/check.js
```

E a conferência de integridade contra o commit de referência — as contagens
precisam bater com a tabela do topo deste arquivo:

```bash
for p in "^function " "createChoice(" "setChoices(\[" "setTitle("; do grep -c "$p" FORMULARIO-PRINCIPAL.gs; done
```

Se qualquer contagem divergir, houve **perda de conteúdo**: reverta e refaça.

---

## 📝 PENDÊNCIAS CONHECIDAS

Estas são falhas de **conteúdo**, não de sintaxe. O arquivo roda com elas.

1. **Separador de subtítulo perdido.** O caractere que separava título e
   subtítulo foi destruído na consolidação original e não existe em nenhum
   commit. A junção usou espaço simples, gerando
   `Preparação para Entrevistas Comunicação oral estratégica`. Se o texto
   desejado levar `:` ou travessão, é preciso uma passada editorial nos 26
   títulos.

2. **Alternativas truncadas na origem.** Algumas opções já vinham cortadas do
   gerador (ex.: `'...precisa ter co'`). Defeito anterior a `7f584fe`, não
   corrigido.

---

## ⚠️ REGRA DE OURO

> O arquivo tem 7.256 linhas e 472 KB. **Nunca** edite `FORMULARIO-PRINCIPAL.gs`
> linha a linha nem o reescreva inteiro. Use um script que faça a transformação,
> com backup antes e `node --check` depois. Foi a edição manual que produziu os
> 10 commits quebrados.
