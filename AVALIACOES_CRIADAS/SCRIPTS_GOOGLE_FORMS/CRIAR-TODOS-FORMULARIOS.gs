/**
 * CRIAR-TODOS-FORMULARIOS.gs
 * Script para Criar Todos os 26 Formularios de Uma Vez
 * Introducao a Comunicacao Oral e Escrita
 *
 * INSTRUCOES:
 * 1. Acesse https://script.google.com
 * 2. Crie novo projeto e cole este ARQUIVO INTEIRO
 * 3. Copie TODOS os codigos dos 26 arquivos FORM_AULA_*.gs e REVISAO-*.gs
 * 4. Cole aqui neste arquivo
 * 5. Execute: criarTodosOsFormularios()
 * 6. Aguarde 5-10 minutos (27 formularios sendo criados)
 * 7. Verifique no Drive - todos os formularios estarao la!
 *
 * OU USE A SOLUCAO ALTERNATIVA ABAIXO:
 */

// ============================================================
// SOLUCAO ALTERNATIVA E MAIS SIMPLES:
// Cole todos os 26 scripts em UM UNICO projeto
// ============================================================

// Copie os CODIGOS DE CRIACAO das 26 funcoes:
// - criarFormularioAula01() ate criarFormularioAula25()
// - criarQuizRevisao()

// Apos copiar TODOS, execute ESTA funcao:

function criarTodosOsFormularios() {
  Logger.log('╔═══════════════════════════════════════════════════╗');
  Logger.log('║  CRIANDO TODOS OS 26 FORMULARIOS                  ║');
  Logger.log('║  Introducao a Comunicacao Oral e Escrita          ║');
  Logger.log('╚═══════════════════════════════════════════════════╝');
  Logger.log('');
  Logger.log('Aguarde... Isto pode levar 5-10 minutos.');
  Logger.log('');

  var links = [];
  var erros = [];
  var inicio = new Date();

  // Aula 1
  try {
    criarFormularioAula01();
    Logger.log('[01/26] Aula 01: Processo Comunicativo ✓');
    links.push('Aula 01: Processo Comunicativo');
  } catch (e) {
    erros.push('Aula 01: ' + e.message);
    Logger.log('[01/26] Aula 01: ERRO - ' + e.message);
  }

  // Aula 2
  try {
    criarFormularioAula02();
    Logger.log('[02/26] Aula 02: Comunicacao Eficaz ✓');
    links.push('Aula 02: Comunicacao Eficaz');
  } catch (e) {
    erros.push('Aula 02: ' + e.message);
    Logger.log('[02/26] Aula 02: ERRO');
  }

  // Aula 3
  try {
    criarFormularioAula03();
    Logger.log('[03/26] Aula 03: O Ciclo do Feedback ✓');
    links.push('Aula 03: O Ciclo do Feedback');
  } catch (e) {
    erros.push('Aula 03: ' + e.message);
    Logger.log('[03/26] Aula 03: ERRO');
  }

  // Aula 4
  try {
    criarFormularioAula04();
    Logger.log('[04/26] Aula 04: Contextos Formais vs Informais ✓');
    links.push('Aula 04: Contextos Formais vs Informais');
  } catch (e) {
    erros.push('Aula 04: ' + e.message);
    Logger.log('[04/26] Aula 04: ERRO');
  }

  // Aula 5
  try {
    criarFormularioAula05();
    Logger.log('[05/26] Aula 05: Sintese dos Fundamentos ✓');
    links.push('Aula 05: Sintese dos Fundamentos');
  } catch (e) {
    erros.push('Aula 05: ' + e.message);
    Logger.log('[05/26] Aula 05: ERRO');
  }

  // Aula 6
  try {
    criarFormularioAula06();
    Logger.log('[06/26] Aula 06: Estrutura de Apresentacoes ✓');
    links.push('Aula 06: Estrutura de Apresentacoes');
  } catch (e) {
    erros.push('Aula 06: ' + e.message);
    Logger.log('[06/26] Aula 06: ERRO');
  }

  // Aula 7
  try {
    criarFormularioAula07();
    Logger.log('[07/26] Aula 07: Tecnicas de Oratoria ✓');
    links.push('Aula 07: Tecnicas de Oratoria');
  } catch (e) {
    erros.push('Aula 07: ' + e.message);
    Logger.log('[07/26] Aula 07: ERRO');
  }

  // Aula 8
  try {
    criarFormularioAula08();
    Logger.log('[08/26] Aula 08: Participacao em Reunioes ✓');
    links.push('Aula 08: Participacao em Reunioes');
  } catch (e) {
    erros.push('Aula 08: ' + e.message);
    Logger.log('[08/26] Aula 08: ERRO');
  }

  // Aula 9
  try {
    criarFormularioAula09();
    Logger.log('[09/26] Aula 09: Atendimento e Escuta Ativa ✓');
    links.push('Aula 09: Atendimento e Escuta Ativa');
  } catch (e) {
    erros.push('Aula 09: ' + e.message);
    Logger.log('[09/26] Aula 09: ERRO');
  }

  // Aula 10
  try {
    criarFormularioAula10();
    Logger.log('[10/26] Aula 10: Preparacao para Entrevistas ✓');
    links.push('Aula 10: Preparacao para Entrevistas');
  } catch (e) {
    erros.push('Aula 10: ' + e.message);
    Logger.log('[10/26] Aula 10: ERRO');
  }

  // Aula 11
  try {
    criarFormularioAula11();
    Logger.log('[11/26] Aula 11: Estruturacao de Textos ✓');
    links.push('Aula 11: Estruturacao de Textos');
  } catch (e) {
    erros.push('Aula 11: ' + e.message);
    Logger.log('[11/26] Aula 11: ERRO');
  }

  // Aula 12
  try {
    criarFormularioAula12();
    Logger.log('[12/26] Aula 12: Correcao Gramatical ✓');
    links.push('Aula 12: Correcao Gramatical');
  } catch (e) {
    erros.push('Aula 12: ' + e.message);
    Logger.log('[12/26] Aula 12: ERRO');
  }

  // Aula 13
  try {
    criarFormularioAula13();
    Logger.log('[13/26] Aula 13: Formatacao de Documentos ✓');
    links.push('Aula 13: Formatacao de Documentos');
  } catch (e) {
    erros.push('Aula 13: ' + e.message);
    Logger.log('[13/26] Aula 13: ERRO');
  }

  // Aula 14
  try {
    criarFormularioAula14();
    Logger.log('[14/26] Aula 14: Redacao de E-mails ✓');
    links.push('Aula 14: Redacao de E-mails');
  } catch (e) {
    erros.push('Aula 14: ' + e.message);
    Logger.log('[14/26] Aula 14: ERRO');
  }

  // Aula 15
  try {
    criarFormularioAula15();
    Logger.log('[15/26] Aula 15: Relatorios Tecnicos ✓');
    links.push('Aula 15: Relatorios Tecnicos');
  } catch (e) {
    erros.push('Aula 15: ' + e.message);
    Logger.log('[15/26] Aula 15: ERRO');
  }

  // Aula 16
  try {
    criarFormularioAula16();
    Logger.log('[16/26] Aula 16: Memorandos e Comunicacoes ✓');
    links.push('Aula 16: Memorandos e Comunicacoes');
  } catch (e) {
    erros.push('Aula 16: ' + e.message);
    Logger.log('[16/26] Aula 16: ERRO');
  }

  // Aula 17
  try {
    criarFormularioAula17();
    Logger.log('[17/26] Aula 17: Procedimentos e Instrucoes ✓');
    links.push('Aula 17: Procedimentos e Instrucoes');
  } catch (e) {
    erros.push('Aula 17: ' + e.message);
    Logger.log('[17/26] Aula 17: ERRO');
  }

  // Aula 18
  try {
    criarFormularioAula18();
    Logger.log('[18/26] Aula 18: Plataformas Digitais ✓');
    links.push('Aula 18: Plataformas Digitais');
  } catch (e) {
    erros.push('Aula 18: ' + e.message);
    Logger.log('[18/26] Aula 18: ERRO');
  }

  // Aula 19
  try {
    criarFormularioAula19();
    Logger.log('[19/26] Aula 19: Seguranca da Informacao ✓');
    links.push('Aula 19: Seguranca da Informacao');
  } catch (e) {
    erros.push('Aula 19: ' + e.message);
    Logger.log('[19/26] Aula 19: ERRO');
  }

  // Aula 20
  try {
    criarFormularioAula20();
    Logger.log('[20/26] Aula 20: Etiqueta Digital ✓');
    links.push('Aula 20: Etiqueta Digital');
  } catch (e) {
    erros.push('Aula 20: ' + e.message);
    Logger.log('[20/26] Aula 20: ERRO');
  }

  // Aula 21
  try {
    criarFormularioAula21();
    Logger.log('[21/26] Aula 21: Trabalho Remoto ✓');
    links.push('Aula 21: Trabalho Remoto');
  } catch (e) {
    erros.push('Aula 21: ' + e.message);
    Logger.log('[21/26] Aula 21: ERRO');
  }

  // Aula 22
  try {
    criarFormularioAula22();
    Logger.log('[22/26] Aula 22: Linguagem Corporal ✓');
    links.push('Aula 22: Linguagem Corporal');
  } catch (e) {
    erros.push('Aula 22: ' + e.message);
    Logger.log('[22/26] Aula 22: ERRO');
  }

  // Aula 23
  try {
    criarFormularioAula23();
    Logger.log('[23/26] Aula 23: Gestual e Tom de Voz ✓');
    links.push('Aula 23: Gestual e Tom de Voz');
  } catch (e) {
    erros.push('Aula 23: ' + e.message);
    Logger.log('[23/26] Aula 23: ERRO');
  }

  // Aula 24
  try {
    criarFormularioAula24();
    Logger.log('[24/26] Aula 24: Projeto Capstone ✓');
    links.push('Aula 24: Projeto Capstone');
  } catch (e) {
    erros.push('Aula 24: ' + e.message);
    Logger.log('[24/26] Aula 24: ERRO');
  }

  // Aula 25
  try {
    criarFormularioAula25();
    Logger.log('[25/26] Aula 25: Avaliacao Final ✓');
    links.push('Aula 25: Avaliacao Final');
  } catch (e) {
    erros.push('Aula 25: ' + e.message);
    Logger.log('[25/26] Aula 25: ERRO');
  }

  // Revisao
  try {
    criarQuizRevisao();
    Logger.log('[26/26] Revisao Integrada (Aulas 1-9) ✓');
    links.push('Revisao Integrada');
  } catch (e) {
    erros.push('Revisao: ' + e.message);
    Logger.log('[26/26] Revisao: ERRO');
  }

  var fim = new Date();
  var tempo = Math.round((fim - inicio) / 1000 / 60);

  Logger.log('');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('RESULTADO FINAL:');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('');
  Logger.log('Formularios criados: ' + links.length + '/26');
  Logger.log('Tempo decorrido: ' + tempo + ' minutos');
  Logger.log('');

  if (erros.length > 0) {
    Logger.log('ERROS:');
    erros.forEach(function(erro) {
      Logger.log('  ❌ ' + erro);
    });
    Logger.log('');
  }

  Logger.log('ACESSE SEU GOOGLE DRIVE:');
  Logger.log('Todos os formularios foram criados e estao em:');
  Logger.log('Google Drive > Meus arquivos');
  Logger.log('');
  Logger.log('Procure pelos nomes:');
  Logger.log('  Avaliacao — Aula XX · ...');
  Logger.log('  Revisao Integrada — Aulas 1 a 9 · ...');
  Logger.log('');
  Logger.log('Copie os links e compartilhe com os alunos!');
}
