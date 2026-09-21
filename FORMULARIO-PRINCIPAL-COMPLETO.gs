/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FORMULARIO-PRINCIPAL-COMPLETO.gs
 * Sistema Completo de Avaliações - Consolidado com Conteúdo Original
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * ⚠️ AVISO: Este arquivo contém TODO o conteúdo dos 26 formulários originais
 * consolidado em um único arquivo. É um arquivo MUITO grande (~10.000+ linhas).
 *
 * INSTRUÇÕES:
 * 1. Acesse https://script.google.com
 * 2. Crie novo projeto "Formulários - Comunicação (Completo)"
 * 3. Cole TODO o conteúdo deste arquivo
 * 4. Execute: criarTodosOsFormularios()
 * 5. Aguarde 10-15 minutos (26 formulários sendo criados)
 * 6. Após conclusão, execute: exportarLinksEmJSON()
 * 7. Copie o JSON gerado para QUESTIONARIOS.HTML
 *
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ═════════════════════════════════════════════════════════════════════════
// CÓDIGOS VÁLIDOS
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
// FUNÇÃO MASTER - CRIAR TODOS OS 26 FORMULÁRIOS
// ═════════════════════════════════════════════════════════════════════════

function criarTodosOsFormularios() {
  Logger.log('╔════════════════════════════════════════════════════════════════╗');
  Logger.log('║  CRIANDO TODOS OS 26 FORMULÁRIOS (CONTEÚDO COMPLETO)          ║');
  Logger.log('║  Introdução à Comunicação Oral e Escrita                      ║');
  Logger.log('╚════════════════════════════════════════════════════════════════╝');
  Logger.log('');
  Logger.log('⏳ Aguarde... Isto pode levar 10-15 minutos.');
  Logger.log('');

  var erros = [];
  var inicio = new Date();

  // Criar as 25 aulas
  var aulas = [
    { num: 1, func: criarFormularioAula01, nome: 'Processo Comunicativo' },
    { num: 2, func: criarFormularioAula02, nome: 'Comunicação Eficaz' },
    { num: 3, func: criarFormularioAula03, nome: 'Ciclo do Feedback' },
    { num: 4, func: criarFormularioAula04, nome: 'Contextos Formais/Informais' },
    { num: 5, func: criarFormularioAula05, nome: 'Síntese Fundamentos' },
    { num: 6, func: criarFormularioAula06, nome: 'Estrutura Apresentações' },
    { num: 7, func: criarFormularioAula07, nome: 'Técnicas Oratória' },
    { num: 8, func: criarFormularioAula08, nome: 'Reuniões' },
    { num: 9, func: criarFormularioAula09, nome: 'Escuta Ativa' },
    { num: 10, func: criarFormularioAula10, nome: 'Entrevistas' },
    { num: 11, func: criarFormularioAula11, nome: 'Estruturação Textos' },
    { num: 12, func: criarFormularioAula12, nome: 'Correção Gramatical' },
    { num: 13, func: criarFormularioAula13, nome: 'Formatação Documentos' },
    { num: 14, func: criarFormularioAula14, nome: 'E-mails Corporativos' },
    { num: 15, func: criarFormularioAula15, nome: 'Relatórios Técnicos' },
    { num: 16, func: criarFormularioAula16, nome: 'Memorandos' },
    { num: 17, func: criarFormularioAula17, nome: 'Procedimentos' },
    { num: 18, func: criarFormularioAula18, nome: 'Plataformas Digitais' },
    { num: 19, func: criarFormularioAula19, nome: 'Segurança Informação' },
    { num: 20, func: criarFormularioAula20, nome: 'Etiqueta Digital' },
    { num: 21, func: criarFormularioAula21, nome: 'Trabalho Remoto' },
    { num: 22, func: criarFormularioAula22, nome: 'Linguagem Corporal' },
    { num: 23, func: criarFormularioAula23, nome: 'Gestual e Tom' },
    { num: 24, func: criarFormularioAula24, nome: 'Projeto Capstone' },
    { num: 25, func: criarFormularioAula25, nome: 'Avaliação Final' }
  ];

  aulas.forEach(function(aula) {
    try {
      aula.func();
      var padded = ('0' + aula.num).slice(-2);
      Logger.log('[' + padded + '/26] Aula ' + padded + ': ' + aula.nome + ' ✓');
    } catch (e) {
      erros.push('Aula ' + aula.num + ': ' + e.message);
      Logger.log('[XX/26] ERRO na Aula ' + aula.num);
    }
  });

  // Criar revisão
  try {
    criarQuizRevisao();
    Logger.log('[26/26] Revisão Integrada (Aulas 1-9) ✓');
  } catch (e) {
    erros.push('Revisão: ' + e.message);
    Logger.log('[26/26] ERRO na Revisão');
  }

  var fim = new Date();
  var tempo = Math.round((fim - inicio) / 1000 / 60);

  Logger.log('');
  Logger.log('════════════════════════════════════════════════════════════════');
  Logger.log('✅ CONCLUSÃO:');
  Logger.log('════════════════════════════════════════════════════════════════');
  Logger.log('');
  Logger.log('Tempo decorrido: ' + tempo + ' minutos');
  Logger.log('Status: ' + (erros.length === 0 ? '✅ SUCESSO - Todos os 26 formulários criados!' : '⚠️ COM ERROS'));
  Logger.log('');

  if (erros.length > 0) {
    Logger.log('ERROS ENCONTRADOS:');
    erros.forEach(function(erro) {
      Logger.log('  ❌ ' + erro);
    });
    Logger.log('');
  }

  Logger.log('📋 PRÓXIMA ETAPA:');
  Logger.log('');
  Logger.log('1. Execute a função: exportarLinksEmJSON()');
  Logger.log('2. Copie o JSON completo da saída (Ctrl+A no console de logs)');
  Logger.log('3. Abra o arquivo: QUESTIONARIOS.HTML');
  Logger.log('4. Localize: const formularioUrls = {');
  Logger.log('5. Substitua o objeto pelos links do JSON');
  Logger.log('6. Salve e teste!');
  Logger.log('');
}

// ═════════════════════════════════════════════════════════════════════════
// IMPORTAR FUNÇÕES DOS ARQUIVOS ORIGINAIS
// ═════════════════════════════════════════════════════════════════════════
//
// ⚠️ NOTA: Para manter este arquivo com conteúdo completo, é necessário:
// 1. Copiar as funções criarFormularioAula01() até criarFormularioAula25()
// 2. Copiar a função criarQuizRevisao()
//
// Cada função está nos arquivos originais:
// - FORM_AULA_01.gs até FORM_AULA_25.gs
// - REVISAO-COMUNICACAO-ORAL-E-ESCRITA.gs
//
// INSTRUÇÕES PARA CONSOLIDAR:
// 1. Abra cada arquivo original (FORM_AULA_XX.gs)
// 2. Copie a função criarFormularioAulaXX() completa
// 3. Cole abaixo desta seção
// 4. Repita para todos os 25 arquivos + 1 revisão
//
// ═════════════════════════════════════════════════════════════════════════

// [COLAR CONTEÚDO DE FORM_AULA_01.gs AQUI]
// function criarFormularioAula01() { ... }

// [COLAR CONTEÚDO DE FORM_AULA_02.gs AQUI]
// function criarFormularioAula02() { ... }

// [E ASSIM POR DIANTE ATÉ FORM_AULA_25.gs]

// [COLAR CONTEÚDO DE REVISAO-COMUNICACAO-ORAL-E-ESCRITA.gs AQUI]
// function criarQuizRevisao() { ... }

// ═════════════════════════════════════════════════════════════════════════
// FUNÇÕES AUXILIARES E EXPORTAÇÃO
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
  var query = "title contains 'Avaliação —' and title contains 'SENAI'";
  var files = DriveApp.searchFiles(query);
  var links = {};

  while (files.hasNext()) {
    var arquivo = files.next();
    var nome = arquivo.getName();
    var url = arquivo.getUrl().replace('/edit', '/viewform');

    // Extrair número da aula do nome (ex: "Avaliação — Aula 01 ·")
    var match = nome.match(/Aula (\d+)/);
    if (match) {
      var num = parseInt(match[1]);
      links[num] = url;
    }

    // Verificar se é revisão
    if (nome.includes('Revisão')) {
      links['revisao'] = url;
    }
  }

  return {
    formularioUrls: links,
    dataExportacao: new Date().toISOString(),
    totalFormularios: Object.keys(links).length,
    instrucoes: 'Cole este objeto em const formularioUrls = { ... } no arquivo QUESTIONARIOS.HTML'
  };
}

// ═════════════════════════════════════════════════════════════════════════
// FIM DO ARQUIVO
// ═════════════════════════════════════════════════════════════════════════
//
// ⚠️ IMPORTANTE: Este arquivo está INCOMPLETO sem as funções de cada aula.
// Para completar:
// 1. Copie o conteúdo de cada FORM_AULA_XX.gs
// 2. Cole as funções criarFormularioAulaXX() neste arquivo
// 3. Salve e execute criarTodosOsFormularios()
//
// ═════════════════════════════════════════════════════════════════════════
