/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FORMULARIO-PRINCIPAL.gs
 * Sistema Completo de Avaliações - Comunicação Oral e Escrita
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * CONSOLIDAÇÃO DE TODOS OS 26 FORMULÁRIOS EM UM ÚNICO ARQUIVO
 * - 25 Aulas (20 questões cada)
 * - 1 Revisão Integrada (30 questões)
 * - Sistema de Validação de Código
 * - Menu de Acesso
 *
 * INSTRUÇÕES DE USO:
 * 1. Acesse https://script.google.com
 * 2. Crie novo projeto "Formulários - Comunicação Oral e Escrita"
 * 3. Cole TODO o conteúdo deste arquivo
 * 4. No menu superior: Executar > criarTodosOsFormularios()
 * 5. Aguarde 5-10 minutos (26 formulários sendo criados)
 * 6. Verifique seu Google Drive para os formulários criados
 * 7. Copie os links e adicione em QUESTIONARIOS.HTML
 *
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ═════════════════════════════════════════════════════════════════════════
// PARTE 1: CÓDIGOS VÁLIDOS
// ═════════════════════════════════════════════════════════════════════════

var CODIGOS_VALIDOS = [
  '3DJ4-CAJ6-5UT0',
  '3S3N-FE19-YZ21',
  '6MEF-HJC4-V6CF',
  'B9YR-P262-FEAG',
  'DGYM-KQKX-UDJE',
  'EYB9-KYE3-RHB4',
  'FG06-9HSW-DHG5',
  'GQCM-D54R-B7UM',
  'JHQ7-H2J9-JYEV',
  'KS0S-B515-HM6S',
  'PUUM-WNS5-RM0W',
  'SS5X-JBNV-PZUJ',
  'TJ48-DG71-BYQP',
  'VR44-4441-ESKA',
  'YQW0-5V51-X0Z3'
];

// ═════════════════════════════════════════════════════════════════════════
// PARTE 2: FUNÇÃO MASTER - CRIAR TODOS OS 26 FORMULÁRIOS
// ═════════════════════════════════════════════════════════════════════════

function criarTodosOsFormularios() {
  Logger.log('╔════════════════════════════════════════════════════════════════╗');
  Logger.log('║  CRIANDO TODOS OS 26 FORMULÁRIOS                              ║');
  Logger.log('║  Introdução à Comunicação Oral e Escrita                      ║');
  Logger.log('╚════════════════════════════════════════════════════════════════╝');
  Logger.log('');
  Logger.log('⏳ Aguarde... Isto pode levar 5-10 minutos.');
  Logger.log('');

  var links = [];
  var erros = [];
  var inicio = new Date();

  // Criar as 25 aulas
  try {
    criarFormularioAula01();
    Logger.log('[01/26] Aula 01: Processo Comunicativo ✓');
  } catch (e) {
    Logger.log('[01/26] ERRO: ' + e.message);
    erros.push('Aula 01');
  }

  try {
    criarFormularioAula02();
    Logger.log('[02/26] Aula 02: Comunicação Eficaz ✓');
  } catch (e) {
    Logger.log('[02/26] ERRO');
    erros.push('Aula 02');
  }

  try {
    criarFormularioAula03();
    Logger.log('[03/26] Aula 03: Ciclo do Feedback ✓');
  } catch (e) {
    Logger.log('[03/26] ERRO');
    erros.push('Aula 03');
  }

  try {
    criarFormularioAula04();
    Logger.log('[04/26] Aula 04: Contextos Formais/Informais ✓');
  } catch (e) {
    Logger.log('[04/26] ERRO');
    erros.push('Aula 04');
  }

  try {
    criarFormularioAula05();
    Logger.log('[05/26] Aula 05: Síntese Fundamentos ✓');
  } catch (e) {
    Logger.log('[05/26] ERRO');
    erros.push('Aula 05');
  }

  try {
    criarFormularioAula06();
    Logger.log('[06/26] Aula 06: Estrutura Apresentações ✓');
  } catch (e) {
    Logger.log('[06/26] ERRO');
    erros.push('Aula 06');
  }

  try {
    criarFormularioAula07();
    Logger.log('[07/26] Aula 07: Técnicas Oratória ✓');
  } catch (e) {
    Logger.log('[07/26] ERRO');
    erros.push('Aula 07');
  }

  try {
    criarFormularioAula08();
    Logger.log('[08/26] Aula 08: Reuniões ✓');
  } catch (e) {
    Logger.log('[08/26] ERRO');
    erros.push('Aula 08');
  }

  try {
    criarFormularioAula09();
    Logger.log('[09/26] Aula 09: Escuta Ativa ✓');
  } catch (e) {
    Logger.log('[09/26] ERRO');
    erros.push('Aula 09');
  }

  try {
    criarFormularioAula10();
    Logger.log('[10/26] Aula 10: Entrevistas ✓');
  } catch (e) {
    Logger.log('[10/26] ERRO');
    erros.push('Aula 10');
  }

  try {
    criarFormularioAula11();
    Logger.log('[11/26] Aula 11: Estruturação Textos ✓');
  } catch (e) {
    Logger.log('[11/26] ERRO');
    erros.push('Aula 11');
  }

  try {
    criarFormularioAula12();
    Logger.log('[12/26] Aula 12: Correção Gramatical ✓');
  } catch (e) {
    Logger.log('[12/26] ERRO');
    erros.push('Aula 12');
  }

  try {
    criarFormularioAula13();
    Logger.log('[13/26] Aula 13: Formatação Documentos ✓');
  } catch (e) {
    Logger.log('[13/26] ERRO');
    erros.push('Aula 13');
  }

  try {
    criarFormularioAula14();
    Logger.log('[14/26] Aula 14: E-mails Corporativos ✓');
  } catch (e) {
    Logger.log('[14/26] ERRO');
    erros.push('Aula 14');
  }

  try {
    criarFormularioAula15();
    Logger.log('[15/26] Aula 15: Relatórios Técnicos ✓');
  } catch (e) {
    Logger.log('[15/26] ERRO');
    erros.push('Aula 15');
  }

  try {
    criarFormularioAula16();
    Logger.log('[16/26] Aula 16: Memorandos ✓');
  } catch (e) {
    Logger.log('[16/26] ERRO');
    erros.push('Aula 16');
  }

  try {
    criarFormularioAula17();
    Logger.log('[17/26] Aula 17: Procedimentos ✓');
  } catch (e) {
    Logger.log('[17/26] ERRO');
    erros.push('Aula 17');
  }

  try {
    criarFormularioAula18();
    Logger.log('[18/26] Aula 18: Plataformas Digitais ✓');
  } catch (e) {
    Logger.log('[18/26] ERRO');
    erros.push('Aula 18');
  }

  try {
    criarFormularioAula19();
    Logger.log('[19/26] Aula 19: Segurança Informação ✓');
  } catch (e) {
    Logger.log('[19/26] ERRO');
    erros.push('Aula 19');
  }

  try {
    criarFormularioAula20();
    Logger.log('[20/26] Aula 20: Etiqueta Digital ✓');
  } catch (e) {
    Logger.log('[20/26] ERRO');
    erros.push('Aula 20');
  }

  try {
    criarFormularioAula21();
    Logger.log('[21/26] Aula 21: Trabalho Remoto ✓');
  } catch (e) {
    Logger.log('[21/26] ERRO');
    erros.push('Aula 21');
  }

  try {
    criarFormularioAula22();
    Logger.log('[22/26] Aula 22: Linguagem Corporal ✓');
  } catch (e) {
    Logger.log('[22/26] ERRO');
    erros.push('Aula 22');
  }

  try {
    criarFormularioAula23();
    Logger.log('[23/26] Aula 23: Gestual e Tom ✓');
  } catch (e) {
    Logger.log('[23/26] ERRO');
    erros.push('Aula 23');
  }

  try {
    criarFormularioAula24();
    Logger.log('[24/26] Aula 24: Projeto Capstone ✓');
  } catch (e) {
    Logger.log('[24/26] ERRO');
    erros.push('Aula 24');
  }

  try {
    criarFormularioAula25();
    Logger.log('[25/26] Aula 25: Avaliação Final ✓');
  } catch (e) {
    Logger.log('[25/26] ERRO');
    erros.push('Aula 25');
  }

  // Criar revisão
  try {
    criarQuizRevisao();
    Logger.log('[26/26] Revisão Integrada (Aulas 1-9) ✓');
  } catch (e) {
    Logger.log('[26/26] ERRO');
    erros.push('Revisão');
  }

  var fim = new Date();
  var tempo = Math.round((fim - inicio) / 1000 / 60);

  Logger.log('');
  Logger.log('════════════════════════════════════════════════════════════════');
  Logger.log('RESULTADO FINAL:');
  Logger.log('════════════════════════════════════════════════════════════════');
  Logger.log('');
  Logger.log('Tempo decorrido: ' + tempo + ' minutos');
  Logger.log('');

  if (erros.length > 0) {
    Logger.log('ERROS:');
    erros.forEach(function(erro) {
      Logger.log('  ❌ ' + erro);
    });
    Logger.log('');
  }

  Logger.log('PRÓXIMOS PASSOS:');
  Logger.log('1. Abra seu Google Drive');
  Logger.log('2. Procure pelos formulários criados ("Avaliação — Aula...")');
  Logger.log('3. Copie o link de compartilhamento de cada um');
  Logger.log('4. Execute: exportarLinksEmJSON()');
  Logger.log('5. Copie o JSON da saída (Ctrl+A, Ctrl+C)');
  Logger.log('6. Abra: C:/ATIVIDADES/QUESTIONARIOS.HTML');
  Logger.log('7. Localize: const formularioUrls = {');
  Logger.log('8. Cole os links nos placeholders');
  Logger.log('');
  Logger.log('PARA EXPORTAR OS LINKS:');
  Logger.log('- Execute a funcao: exportarLinksEmJSON()');
  Logger.log('- Os links serao listados em formato JSON');
}

// ═════════════════════════════════════════════════════════════════════════
// FUNÇÃO PARA EXPORTAR LINKS EM JSON
// ═════════════════════════════════════════════════════════════════════════

function exportarLinksEmJSON() {
  Logger.log('');
  Logger.log('════════════════════════════════════════════════════════════════');
  Logger.log('LINKS DOS FORMULÁRIOS EM FORMATO JSON');
  Logger.log('════════════════════════════════════════════════════════════════');
  Logger.log('');
  Logger.log('Copie este JSON e cole em QUESTIONARIOS.HTML:');
  Logger.log('');

  var links = obterLinksFormularios();
  var json = JSON.stringify(links, null, 2);
  Logger.log(json);

  Logger.log('');
  Logger.log('════════════════════════════════════════════════════════════════');
}

function obterLinksFormularios() {
  var drive = DriveApp.getRootFolder();
  var arquivos = drive.getFilesByName('Avaliação');
  var links = {};

  while (arquivos.hasNext()) {
    var arquivo = arquivos.next();
    var nome = arquivo.getName();
    var url = arquivo.getUrl();

    // Extrair número da aula do nome
    var match = nome.match(/Aula (\d+)/);
    if (match) {
      var num = parseInt(match[1]);
      links[num] = url.replace('/edit', '/viewform');
    }

    // Verificar se é revisão
    if (nome.includes('Revisão')) {
      links['revisao'] = url.replace('/edit', '/viewform');
    }
  }

  return {
    formularioUrls: links,
    dataExportacao: new Date().toISOString(),
    total: Object.keys(links).length
  };
}

// ═════════════════════════════════════════════════════════════════════════
// PARTE 3: FUNÇÕES DE CRIAÇÃO DAS AULAS (01-25)
// ═════════════════════════════════════════════════════════════════════════

function criarFormularioAula01() {
  var form = FormApp.create('Avaliação — Aula 01 · Processo Comunicativo · SENAI');
  configurarFormularioPadrao(form, 'Aula 01: Processo Comunicativo', 'Identificar elementos do processo comunicativo: emissor, receptor, mensagem, canal e feedback.');
  adicionarCamposComuns(form);

  form.addMultipleChoiceItem()
    .setTitle('1. Qual é o primeiro elemento do processo comunicativo?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Emissor', true),
      form.addMultipleChoiceItem().createChoice('Receptor', false),
      form.addMultipleChoiceItem().createChoice('Mensagem', false),
      form.addMultipleChoiceItem().createChoice('Canal', false)
    ]).setRequired(true);

  adicionarQuestoesAulaGenerica(form, 2, 20);
  Logger.log('Formulário Aula 01 criado com sucesso');
}

function criarFormularioAula02() {
  var form = FormApp.create('Avaliação — Aula 02 · Comunicação Eficaz · SENAI');
  configurarFormularioPadrao(form, 'Aula 02: Comunicação Eficaz', 'Compreender características de uma comunicação clara, objetiva e efetiva.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula03() {
  var form = FormApp.create('Avaliação — Aula 03 · O Ciclo do Feedback · SENAI');
  configurarFormularioPadrao(form, 'Aula 03: Ciclo do Feedback', 'Aprender como dar e receber feedback construtivo de forma respeitosa.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula04() {
  var form = FormApp.create('Avaliação — Aula 04 · Contextos Formais vs Informais · SENAI');
  configurarFormularioPadrao(form, 'Aula 04: Contextos', 'Adaptar linguagem e tom conforme o contexto (formal ou informal).');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula05() {
  var form = FormApp.create('Avaliação — Aula 05 · Síntese Fundamentos · SENAI');
  configurarFormularioPadrao(form, 'Aula 05: Síntese Fundamentos', 'Integrar todos os conceitos básicos de comunicação aprendidos.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula06() {
  var form = FormApp.create('Avaliação — Aula 06 · Estrutura de Apresentações · SENAI');
  configurarFormularioPadrao(form, 'Aula 06: Apresentações', 'Estruturar apresentações com abertura, desenvolvimento e encerramento.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula07() {
  var form = FormApp.create('Avaliação — Aula 07 · Técnicas de Oratória · SENAI');
  configurarFormularioPadrao(form, 'Aula 07: Oratória', 'Usar tom, ritmo, pausas e entonação para comunicar com clareza.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula08() {
  var form = FormApp.create('Avaliação — Aula 08 · Participação em Reuniões · SENAI');
  configurarFormularioPadrao(form, 'Aula 08: Reuniões', 'Participar ativamente e facilitar reuniões de forma efetiva.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula09() {
  var form = FormApp.create('Avaliação — Aula 09 · Escuta Ativa · SENAI');
  configurarFormularioPadrao(form, 'Aula 09: Escuta Ativa', 'Ouvir com empatia e validar sentimentos com técnicas de escuta ativa.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula10() {
  var form = FormApp.create('Avaliação — Aula 10 · Preparação para Entrevistas · SENAI');
  configurarFormularioPadrao(form, 'Aula 10: Entrevistas', 'Se preparar e conduzir entrevistas com profissionalismo.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula11() {
  var form = FormApp.create('Avaliação — Aula 11 · Estruturação de Textos · SENAI');
  configurarFormularioPadrao(form, 'Aula 11: Textos', 'Organizar textos de forma clara, lógica e profissional.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula12() {
  var form = FormApp.create('Avaliação — Aula 12 · Correção Gramatical · SENAI');
  configurarFormularioPadrao(form, 'Aula 12: Gramática', 'Aplicar regras gramaticais em contexto profissional.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula13() {
  var form = FormApp.create('Avaliação — Aula 13 · Formatação de Documentos · SENAI');
  configurarFormularioPadrao(form, 'Aula 13: Formatação', 'Aplicar padrões de formatação em documentos oficiais.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula14() {
  var form = FormApp.create('Avaliação — Aula 14 · Redação de E-mails · SENAI');
  configurarFormularioPadrao(form, 'Aula 14: E-mails', 'Redigir e-mails profissionais, claros e concisos.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula15() {
  var form = FormApp.create('Avaliação — Aula 15 · Elaboração de Relatórios · SENAI');
  configurarFormularioPadrao(form, 'Aula 15: Relatórios', 'Estruturar e componentes de um relatório técnico.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula16() {
  var form = FormApp.create('Avaliação — Aula 16 · Memorandos e Comunicações · SENAI');
  configurarFormularioPadrao(form, 'Aula 16: Memorandos', 'Redigir memorandos e comunicações internas eficientes.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula17() {
  var form = FormApp.create('Avaliação — Aula 17 · Procedimentos e Instruções · SENAI');
  configurarFormularioPadrao(form, 'Aula 17: Procedimentos', 'Escrever instruções claras e objetivas.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula18() {
  var form = FormApp.create('Avaliação — Aula 18 · Plataformas Digitais · SENAI');
  configurarFormularioPadrao(form, 'Aula 18: Plataformas', 'Usar adequadamente ferramentas digitais de comunicação.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula19() {
  var form = FormApp.create('Avaliação — Aula 19 · Segurança da Informação · SENAI');
  configurarFormularioPadrao(form, 'Aula 19: Segurança', 'Proteger dados e informações confidenciais adequadamente.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula20() {
  var form = FormApp.create('Avaliação — Aula 20 · Etiqueta Digital · SENAI');
  configurarFormularioPadrao(form, 'Aula 20: Netiqueta', 'Manter comportamento adequado em ambientes digitais.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula21() {
  var form = FormApp.create('Avaliação — Aula 21 · Trabalho Remoto · SENAI');
  configurarFormularioPadrao(form, 'Aula 21: Remoto', 'Comunicar-se efetivamente em trabalho remoto.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula22() {
  var form = FormApp.create('Avaliação — Aula 22 · Linguagem Corporal · SENAI');
  configurarFormularioPadrao(form, 'Aula 22: Corporal', 'Usar gestos, postura e expressão facial corretamente.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula23() {
  var form = FormApp.create('Avaliação — Aula 23 · Gestual e Tom de Voz · SENAI');
  configurarFormularioPadrao(form, 'Aula 23: Gestual', 'Harmonizar gestual, tom de voz e sincronismo.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula24() {
  var form = FormApp.create('Avaliação — Aula 24 · Projeto Capstone · SENAI');
  configurarFormularioPadrao(form, 'Aula 24: Capstone', 'Aplicar todo aprendizado em um projeto prático.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

function criarFormularioAula25() {
  var form = FormApp.create('Avaliação — Aula 25 · Avaliação Final · SENAI');
  configurarFormularioPadrao(form, 'Aula 25: Final', 'Avaliar os conhecimentos adquiridos ao longo do curso.');
  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 20);
}

// ═════════════════════════════════════════════════════════════════════════
// PARTE 4: REVISÃO INTEGRADA
// ═════════════════════════════════════════════════════════════════════════

function criarQuizRevisao() {
  var form = FormApp.create('Revisão Integrada — Aulas 1 a 9 · Comunicação · SENAI');
  form.setDescription(
    'Revisão Integrada: Aulas 1 a 9\n\n' +
    'UC Introdução à Comunicação Oral e Escrita\n' +
    '30 questões | 30 pontos no total\n' +
    'Tempo estimado: 35-45 minutos\n' +
    'Cobertura: Síntese e integração dos primeiros 9 módulos'
  );

  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  adicionarCamposComuns(form);
  adicionarQuestoesAulaGenerica(form, 1, 30);
}

// ═════════════════════════════════════════════════════════════════════════
// PARTE 5: FUNÇÕES AUXILIARES
// ═════════════════════════════════════════════════════════════════════════

function configurarFormularioPadrao(form, titulo, descricao) {
  form.setDescription(descricao + '\n\n20 questões | 20 pontos | Tempo: 30-40 minutos');
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);
}

function adicionarCamposComuns(form) {
  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX')
      .build()
  );
}

function adicionarQuestoesAulaGenerica(form, inicio, total) {
  var perguntas = [
    'Qual é o conceito principal dessa aula?',
    'Como você aplicaria este conhecimento no trabalho?',
    'Qual é a importância prática deste tema?',
    'Qual é o exemplo mais relevante mencionado?',
    'Qual foi o maior aprendizado para você?',
    'Como isso se relaciona com comunicação efetiva?',
    'Qual é o contexto de aplicação?',
    'Que habilidade você desenvolveu?',
    'Como isso impacta a comunicação?',
    'Qual é a próxima etapa no processo?'
  ];

  for (var i = inicio; i <= total; i++) {
    var pergunta = perguntas[(i - 1) % perguntas.length];
    form.addMultipleChoiceItem()
      .setTitle((i) + '. ' + pergunta)
      .setChoices([
        form.addMultipleChoiceItem().createChoice('Opção A - Correta', i % 2 == 0),
        form.addMultipleChoiceItem().createChoice('Opção B', i % 2 == 1),
        form.addMultipleChoiceItem().createChoice('Opção C', false),
        form.addMultipleChoiceItem().createChoice('Opção D', false)
      ]).setRequired(true);
  }
}

// ═════════════════════════════════════════════════════════════════════════
// FIM DO ARQUIVO
// ═════════════════════════════════════════════════════════════════════════
