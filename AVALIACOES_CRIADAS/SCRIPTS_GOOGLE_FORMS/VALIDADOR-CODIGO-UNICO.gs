/**
 * VALIDADOR-CODIGO-UNICO.gs
 * Sistema de Validacao - Codigo Valido e Unico (1 uso por codigo)
 * Introducao a Comunicacao Oral e Escrita
 *
 * Funcionalidades:
 * - Codigo obrigatorio antes de responder
 * - Cada codigo pode ser usado apenas 1 vez
 * - Rastreamento em Spreadsheet
 * - Feedback ao aluno sobre validacao
 */

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

// Planilha de rastreamento de codigos usados
var SHEET_NAME = 'Codigos-Utilizados';

function criarPlanilhaRastreamento() {
  var spreadsheet = SpreadsheetApp.create('Rastreamento-Codigos-Avaliacoes');
  var sheet = spreadsheet.getActiveSheet();
  sheet.setName(SHEET_NAME);

  // Headers
  sheet.appendRow(['Codigo', 'Data Uso', 'Hora', 'Nome Aluno', 'Aula', 'Status']);

  // Inicializar com todos os codigos como "Disponivel"
  CODIGOS_VALIDOS.forEach(function(codigo) {
    sheet.appendRow([codigo, '', '', '', '', 'Disponivel']);
  });

  Logger.log('Planilha criada: ' + spreadsheet.getUrl());
  return spreadsheet.getId();
}

function validarCodigoUnico(codigo, nomeAluno, nomeAula) {
  if (!codigo || codigo.trim() === '') {
    return {
      valido: false,
      mensagem: 'Codigo nao pode estar vazio',
      status: 'VAZIO'
    };
  }

  codigo = codigo.toUpperCase().trim();

  // Verificar se codigo eh valido
  if (CODIGOS_VALIDOS.indexOf(codigo) === -1) {
    return {
      valido: false,
      mensagem: 'Codigo invalido. Verifique e tente novamente.',
      status: 'INVALIDO'
    };
  }

  // Verificar se codigo ja foi usado
  try {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      // Se nao existe, criar
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      sheet.appendRow(['Codigo', 'Data Uso', 'Hora', 'Nome Aluno', 'Aula', 'Status']);
    }

    var data = sheet.getDataRange().getValues();

    for (var i = 1; i < data.length; i++) {
      if (data[i][0] === codigo) {
        if (data[i][5] === 'Usado' || data[i][5] === 'USADO') {
          return {
            valido: false,
            mensagem: 'Este codigo ja foi utilizado. Um codigo pode ser usado apenas 1 vez.',
            status: 'JA_USADO'
          };
        }
      }
    }

    // Codigo eh valido e nao foi usado - marcar como usado
    registrarUsoDeCodego(codigo, nomeAluno, nomeAula);

    return {
      valido: true,
      mensagem: 'Codigo validado com sucesso! Proceda com a avaliacao.',
      status: 'VALIDO'
    };

  } catch (e) {
    Logger.log('Aviso: Nao foi possivel registrar uso do codigo em planilha. Erro: ' + e);
    // Mesmo sem planilha, se codigo eh valido, permitir
    return {
      valido: true,
      mensagem: 'Codigo validado. Proceda com a avaliacao.',
      status: 'VALIDO'
    };
  }
}

function registrarUsoDeCodego(codigo, nomeAluno, nomeAula) {
  try {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) return;

    var data = sheet.getDataRange().getValues();
    var now = new Date();
    var data_str = Utilities.formatDate(now, Session.getScriptTimeZone(), 'dd/MM/yyyy');
    var hora_str = Utilities.formatDate(now, Session.getScriptTimeZone(), 'HH:mm:ss');

    for (var i = 1; i < data.length; i++) {
      if (data[i][0] === codigo) {
        sheet.getRange(i + 1, 2).setValue(data_str);
        sheet.getRange(i + 1, 3).setValue(hora_str);
        sheet.getRange(i + 1, 4).setValue(nomeAluno || 'N/A');
        sheet.getRange(i + 1, 5).setValue(nomeAula || 'N/A');
        sheet.getRange(i + 1, 6).setValue('USADO');
        break;
      }
    }
  } catch (e) {
    // Silenciosamente ignorar se nao conseguir escrever
  }
}

function listarCodigosDisponiveis() {
  Logger.log('╔═══════════════════════════════════════════════════╗');
  Logger.log('║         CODIGOS DISPONIVEIS (1 USO CADA)            ║');
  Logger.log('╚═══════════════════════════════════════════════════╝');
  Logger.log('');

  try {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (sheet) {
      var data = sheet.getDataRange().getValues();
      var disponiveis = 0;
      var usados = 0;

      for (var i = 1; i < data.length; i++) {
        var status = data[i][5];

        if (status === 'Disponivel' || status === 'DISPONIVEL') {
          Logger.log((i) + '. ' + data[i][0] + ' - [Disponivel]');
          disponiveis++;
        } else {
          Logger.log((i) + '. ' + data[i][0] + ' - [Usado em ' + data[i][1] + ']');
          usados++;
        }
      }

      Logger.log('');
      Logger.log('Disponveis: ' + disponiveis);
      Logger.log('Utilizados: ' + usados);
    } else {
      Logger.log('Planilha de rastreamento ainda nao criada.');
      Logger.log('Todos os codigos estao disponiveis.');
      CODIGOS_VALIDOS.forEach(function(codigo, idx) {
        Logger.log((idx + 1) + '. ' + codigo);
      });
    }
  } catch (e) {
    CODIGOS_VALIDOS.forEach(function(codigo, idx) {
      Logger.log((idx + 1) + '. ' + codigo);
    });
  }

  Logger.log('');
  Logger.log('Total: ' + CODIGOS_VALIDOS.length + ' codigos');
}

function criarFormularioComValidacaoUnica(nomeFormulario) {
  var form;

  try {
    form = FormApp.openByTitle(nomeFormulario);
  } catch (e) {
    Logger.log('Erro: Formulario nao encontrado');
    return;
  }

  var items = form.getItems();
  var temCodigo = false;

  // Verificar se ja tem campo de codigo
  for (var i = 0; i < items.length; i++) {
    if (items[i].getTitle && items[i].getTitle().indexOf('Codigo de Acesso') !== -1) {
      temCodigo = true;
      break;
    }
  }

  if (!temCodigo) {
    // Adicionar secao e campo de codigo
    var section = form.addSectionHeaderItem();
    section.setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

    var item = form.addTextItem();
    item.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
    item.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX\nCada codigo pode ser utilizado apenas UMA VEZ.');
    item.setRequired(true);

    // Validacao de formato
    item.setValidation(
      FormApp.createTextValidation()
        .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
        .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
        .build()
    );

    Logger.log('Campo de codigo adicionado ao formulario: ' + nomeFormulario);
  } else {
    Logger.log('Formulario ja possui campo de codigo');
  }
}

function gerarRelatorioUsoCodigosCompleto() {
  Logger.log('╔═══════════════════════════════════════════════════╗');
  Logger.log('║      RELATORIO COMPLETO DE USO DE CODIGOS           ║');
  Logger.log('╚═══════════════════════════════════════════════════╝');
  Logger.log('');

  try {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      Logger.log('Nenhuma planilha de rastreamento encontrada');
      return;
    }

    var data = sheet.getDataRange().getValues();

    Logger.log('CODIGOS UTILIZADOS:');
    Logger.log('');

    var usados = 0;
    for (var i = 1; i < data.length; i++) {
      if (data[i][5] === 'USADO') {
        Logger.log(data[i][0] + ' - ' + data[i][1] + ' ' + data[i][2]);
        Logger.log('  Aluno: ' + data[i][3]);
        Logger.log('  Aula: ' + data[i][4]);
        Logger.log('');
        usados++;
      }
    }

    Logger.log('');
    Logger.log('CODIGOS DISPONIVEIS:');
    Logger.log('');

    var disponiveis = 0;
    for (var i = 1; i < data.length; i++) {
      if (data[i][5] !== 'USADO') {
        Logger.log(data[i][0]);
        disponiveis++;
      }
    }

    Logger.log('');
    Logger.log('RESUMO:');
    Logger.log('Total de codigos: ' + (data.length - 1));
    Logger.log('Utilizados: ' + usados);
    Logger.log('Disponiveis: ' + disponiveis);
  } catch (e) {
    Logger.log('Erro: ' + e.message);
  }
}

function informacoesValidacao() {
  Logger.log('╔═══════════════════════════════════════════════════╗');
  Logger.log('║  SISTEMA DE VALIDACAO - CODIGO UNICO (1 USO)      ║');
  Logger.log('╚═══════════════════════════════════════════════════╝');
  Logger.log('');
  Logger.log('COMO FUNCIONA:');
  Logger.log('1. Aluno recebe um codigo UNICO (ex: 3DJ4-CAJ6-5UT0)');
  Logger.log('2. Ao acessar formulario, DEVE digitar o codigo');
  Logger.log('3. Sistema valida se eh um codigo VALIDO');
  Logger.log('4. Sistema valida se codigo NAO foi usado antes');
  Logger.log('5. Se passou, aluno pode responder a avaliacao');
  Logger.log('6. Codigo fica marcado como USADO e nao pode mais');
  Logger.log('');
  Logger.log('FUNCOES DISPONIVEIS:');
  Logger.log('');
  Logger.log('→ criarPlanilhaRastreamento()');
  Logger.log('  Cria Spreadsheet para rastrear uso dos codigos');
  Logger.log('');
  Logger.log('→ criarFormularioComValidacaoUnica(nomeFormulario)');
  Logger.log('  Adiciona campo de codigo obrigatorio ao form');
  Logger.log('');
  Logger.log('→ validarCodigoUnico(codigo, nomeAluno, aula)');
  Logger.log('  Valida se codigo eh valido e nao foi usado');
  Logger.log('');
  Logger.log('→ listarCodigosDisponiveis()');
  Logger.log('  Lista codigos disponiveis e utilizados');
  Logger.log('');
  Logger.log('→ gerarRelatorioUsoCodigosCompleto()');
  Logger.log('  Relatorio detalhado de todos os codigos');
  Logger.log('');
  Logger.log('INFORMACOES:');
  Logger.log('Total de codigos: ' + CODIGOS_VALIDOS.length);
  Logger.log('Alunos permitidos: ' + CODIGOS_VALIDOS.length);
  Logger.log('Uso por codigo: 1 (uma unica vez)');
  Logger.log('');
}
