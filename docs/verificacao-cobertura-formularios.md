# Verificação de Cobertura — Formulários × Conteúdo das Aulas

**Data:** 2026-09-21
**Status:** ✅ Verificação concluída
**Veredito:** ⚠️ Requisito quantitativo atendido, cobertura de conteúdo reprovada

---

## 📌 O que foi verificado

Para cada um dos 25 markdowns extraídos de `VERSAO-POWERPOINT/`, conferir se o
formulário correspondente em `FORMULARIO-PRINCIPAL.gs`:

1. tem **no mínimo 20 questões**;
2. **contempla integralmente** o conteúdo da aula.

---

## ✅ Resultado 1 — Quantidade de questões: APROVADO

**Todos os 25 formulários têm exatamente 20 questões.** Nenhum fica abaixo do mínimo.

---

## ❌ Resultado 2 — Cobertura do conteúdo: REPROVADO

**Cobertura média: 17,9% dos tópicos.** Nenhuma aula chega a 30%.

As 20 questões incidem sempre sobre os **primeiros 5 ou 6 slides**. Todo o miolo
da aula — que é onde está a matéria — fica sem avaliação.

| # | Markdown | Aula | Questões | Tópicos | Cobertos | % |
|---|----------|------|----------|---------|----------|---|
| 1 | Processo Comunicativo | 01 | 20 | 35 | 10 | 29% |
| 10 | Preparação para Entrevistas | 02 | 20 | 35 | 7 | 20% |
| 11 | Estruturação de Textos Profissionais | 03 | 20 | 35 | 8 | 23% |
| 12 | Correção Gramatical Aplicada ao Trabalho | 04 | 20 | 35 | 3 | **9%** |
| 13 | Formatação e Padronização de Documentos | 05 | 20 | 35 | 5 | 14% |
| 14 | Redação de E-mails Corporativos | 06 | 20 | 35 | 8 | 23% |
| 15 | Elaboração de Relatórios Técnicos | 07 | 20 | 35 | 9 | 26% |
| 16 | Redação de Memorandos e Comunicações Internas | 08 | 20 | 35 | 7 | 20% |
| 17 | Procedimentos e Instruções | 09 | 20 | 35 | 6 | 17% |
| 18 | Plataformas Digitais de Comunicação | 10 | 20 | 35 | 5 | 14% |
| 19 | Segurança da Informação e Privacidade | 11 | 20 | 35 | 5 | 14% |
| 2 | Comunicação Eficaz | 12 | 20 | 35 | 7 | 20% |
| 20 | Etiqueta Digital e Netiqueta | 13 | 20 | 35 | 6 | 17% |
| 21 | Trabalho Remoto e Colaboração | 14 | 20 | 35 | 7 | 20% |
| 22 | Linguagem Corporal e Comunicação | 15 | 20 | 35 | 6 | 17% |
| 23 | Gestual, Tom de Voz e Sincronismo | 16 | 20 | 35 | 4 | **11%** |
| 24 | Integração Prática: O Projeto Capstone | 17 | 20 | 35 | 5 | 14% |
| 25 | Avaliação Final e Encerramento | 18 | 20 | 32 | 6 | 19% |
| 3 | O Ciclo do Feedback na Comunicação | 19 | 20 | 35 | 8 | 23% |
| 4 | Contextos Formais versus Informais | 20 | 20 | 35 | 5 | 14% |
| 5 | Síntese dos Fundamentos da Comunicação | 21 | 20 | 35 | 4 | **11%** |
| 6 | Estrutura de Apresentações | 22 | 20 | 35 | 8 | 23% |
| 7 | Técnicas de Oratória e Expressão Vocal | 23 | 20 | 35 | 4 | **11%** |
| 8 | Participação e Condução de Reuniões | 24 | 20 | 35 | 6 | 17% |
| 9 | Atendimento e Escuta Ativa | 25 | 20 | 35 | 7 | 20% |

---

## 🔍 Causa: questões geradas por template

Todos os 25 formulários seguem o **mesmo molde**, com o tema encaixado num
texto fixo. As assinaturas são idênticas em todas as aulas:

- `1.` Qual é o tema principal da Aula N?
- `2.–6.` De acordo com a aula, qual é a relevância de: "…"?
- `7.–11.` Como você aplicaria "…" em sua rotina profissional?
- `12.–16.` Qual é a definição correta de "…"?
- `17.` Qual é o objetivo principal ao estudar "…"?
- `18.` Qual conceito foi o mais importante para você nesta aula?
- `19.` Como você se sente preparado para aplicar estes conhecimentos?
- `20.` Resumindo, qual é a mensagem-chave…?

### Três defeitos decorrentes

**1. Alternativas genéricas — 800 de 2.000 (40%).** Exatamente 32 das 80
alternativas de cada formulário são de descarte óbvio, iguais em todas as aulas:
`Não tem relevância prática`, `Apenas para contexto acadêmico`,
`É um conceito desatualizado`, `Memorizar datas e eventos históricos`,
`Aprender fórmulas matemáticas`. O aluno acerta por eliminação, sem ter estudado.

**2. Questões que não avaliam nada.** As de número 18 e 19 pedem opinião e
autoavaliação (`Qual conceito foi o mais importante para você?`,
`Como você se sente preparado?`). Valem ponto sem medir aprendizado.

**3. Fragmentos de frase tratados como conceito.** O gerador recortou trechos
arbitrários dos slides e os tratou como termos técnicos. Na Aula 04:

> `12. Qual é a definição correta de "Imagine enviar uma proposta comercial dizendo"?`

Isso não é um conceito — é o começo de uma frase de abertura do slide.

---

## 📉 Caso exemplar: Aula 04 — Correção Gramatical (9%)

A aula ensina, ao longo de 35 tópicos: coesão e coerência, tópico frasal,
conectivos, norma-padrão, vírgula, pontuação, concordância verbal e nominal,
`haver` vs. `fazer`, regência verbal e nominal, crase (três slides),
ortografia, acentuação, revisores digitais, autocorreção e checklist pré-envio.

**Nenhum desses 32 tópicos tem questão.** As 20 questões cobrem apenas o título,
o subtítulo e a frase de abertura. Um aluno pode gabaritar a prova sem saber
usar crase — que é o assunto central da aula.

---

## 🛠️ Recomendação

Os formulários **não servem como avaliação** no estado atual: medem se o aluno
leu o título do slide, não se aprendeu a matéria.

Para corrigir, é preciso **regerar as questões a partir do conteúdo dos `.md`**,
agora que eles existem. Diretrizes:

1. Distribuir as questões pelos ~35 tópicos, não concentrar nos 5 primeiros.
2. Extrair os conceitos dos slides de vocabulário e de definição, que já trazem
   termo e significado prontos (ex.: `Emissor`, `Ruído`, `Regência Nominal`).
3. Aproveitar os slides de quiz e exercício já presentes nas aulas
   (`Quiz de Conectivos`, `Complete a Concordância`, `Uso Correto da Crase`,
   `Oficina de Caça aos Erros`) — são questões prontas, escritas pelo professor.
4. Escrever distratores plausíveis, extraídos do próprio conteúdo, em vez das
   alternativas de descarte.
5. Substituir as questões 18 e 19 por questões avaliativas. Se a percepção do
   aluno for desejada, deixá-la como item sem pontuação.

---

## 📋 Mapeamento markdown → aula

A numeração dos slides **não corresponde** à numeração das aulas. Os 25 temas
têm correspondência 1:1, mas fora de ordem:

| Slide | Aula | Slide | Aula | Slide | Aula |
|-------|------|-------|------|-------|------|
| 1 | 01 | 10 | 02 | 19 | 11 |
| 2 | 12 | 11 | 03 | 20 | 13 |
| 3 | 19 | 12 | 04 | 21 | 14 |
| 4 | 20 | 13 | 05 | 22 | 15 |
| 5 | 21 | 14 | 06 | 23 | 16 |
| 6 | 22 | 15 | 07 | 24 | 17 |
| 7 | 23 | 16 | 08 | 25 | 18 |
| 8 | 24 | 17 | 09 | | |
| 9 | 25 | 18 | 10 | | |

Nenhum markdown ficou sem formulário e nenhum formulário ficou sem markdown.

---

## ✅ Checklist

- [x] 25 markdowns lidos
- [x] 25 formulários analisados
- [x] Contagem de questões conferida — todos com 20
- [x] Cobertura de tópicos medida — média de 17,9%
- [x] Mapeamento markdown ↔ aula estabelecido
- [ ] Regeneração das questões — **aguarda decisão**
