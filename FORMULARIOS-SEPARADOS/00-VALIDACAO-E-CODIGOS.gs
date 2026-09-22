/**
 * FORMULARIO-PRINCIPAL.gs
 * CONSOLIDADO: Todos os 26 formulários de aulas em um único arquivo
 * Gerado automaticamente em 2026-09-21
 * 
 * Este arquivo contém:
 * - Validação de códigos de acesso (antes em CODIGOS.gs e VALIDADOR-CODIGO-UNICO.gs)
 * - 25 funções de criação de formulários (Aula 01 até Aula 25)
 * - 1 função de revisão integrada (Aulas 1-9)
 * - 26 funções de análise de respostas
 */

// ==========================================================================
// VALIDACAO DE CODIGOS DE ACESSO
// Consolidado de CODIGOS.gs e VALIDADOR-CODIGO-UNICO.gs.
// CODIGOS_VALIDOS era declarado nos dois (e em Codigo.js, copia identica
// do validador); aqui existe uma unica vez.
// ==========================================================================

var CODIGOS_VALIDOS = [
  '0077-PKEQ-0713',
  '05RR-HKD2-G983',
  '07PT-636V-UE2P',
  '0DSA-QA0A-PWZR',
  '0FV3-TV20-OXWT',
  '0GFM-PJN0-0DL0',
  '0GXB-2PC5-TBN5',
  '0JOS-7XLA-PXZ4',
  '0TFP-P2DH-N0NX',
  '0U2D-3K6D-88OX',
  '0UAL-GZ4N-YG6Y',
  '0UKX-U77Q-WGX8',
  '0UR0-DW6M-BMQI',
  '0XQ5-AB9H-BCLK',
  '12CS-FM1S-AMBV',
  '1JT0-3CIN-KR85',
  '1K79-3A3K-6BPG',
  '1NU5-AVLB-ONA4',
  '20UE-K7EO-BIBB',
  '2DWP-I6B7-ZTE3',
  '2N6S-1HQ0-KPBJ',
  '2Q0K-R7CI-RW2Z',
  '2UQD-2FBE-EUW6',
  '34YF-GG11-4XDF',
  '35WS-JUSW-3H9U',
  '36CD-4WV3-RIG7',
  '39MX-5B0D-OOOJ',
  '3G96-O9HL-RXTG',
  '3H2R-2Z2Y-63FF',
  '3HW1-U2FQ-KKF9',
  '3PEK-FIXR-R0AP',
  '3V8S-BPNA-1NQR',
  '3WQO-JFY6-UAD7',
  '3YKD-5CU3-35Q4',
  '41FT-36UT-2GRC',
  '4FGO-6DIJ-37RU',
  '4XG7-WG8L-SUDH',
  '4XWT-RA78-V1Y5',
  '4YN6-6576-OHPD',
  '4YXY-2JUG-OYA3',
  '57QN-O1LH-JNHX',
  '5AY1-FGI8-KQ4C',
  '5C36-S0HV-331I',
  '5CNF-0N5E-2YRX',
  '5LST-3GTY-XD5C',
  '5S6D-TWJJ-2GGH',
  '5SIS-DKJF-RDI4',
  '5ZER-H2X4-UMN1',
  '66N7-XM0O-UPDK',
  '67D5-PZ0N-GPR2',
  '681Q-2INI-NTJY',
  '68U7-7GYE-JBKD',
  '6BH6-O2KL-YPTU',
  '6LL3-JZ42-X74W',
  '6V0J-VGY5-WOAV',
  '75WP-TC22-OHQ9',
  '79QE-TWLC-8Z74',
  '7AVL-5SS3-35AY',
  '7D6E-UFVN-BDKD',
  '7HQE-ENA6-VBJ0',
  '7K07-P2KC-FY7U',
  '7KCM-7SNW-YE1V',
  '7Q0L-CDX8-WLVS',
  '7UDL-5407-W1H6',
  '7VI3-V7C2-HZ7R',
  '8040-YEUP-2KX5',
  '88UL-O199-EZ4R',
  '8FWD-MEL2-LF1H',
  '8GRO-EUQL-YEAZ',
  '8N7W-D4WR-AN2E',
  '8TCQ-5K1W-8OM4',
  '9E3D-M9ZM-0CHK',
  '9KYG-Z4AI-UDHB',
  '9N54-QGX1-XD6H',
  'A2PP-VIZW-43ZV',
  'A3GM-RNZS-YEGC',
  'A4HN-L81R-BI11',
  'A6OF-4HIT-U4B2',
  'AGMS-33PL-31LK',
  'AJ9K-FNN5-LV6W',
  'AK1H-LW4U-U2KB',
  'AKIY-H9ZV-O91A',
  'AN07-8KYC-Z8GB',
  'AQ2W-GCZ8-SG9Y',
  'ARF7-DU0Q-3F99',
  'B743-RT62-KRVF',
  'B8U2-3X7J-IJRZ',
  'BAXK-AAON-Z7BI',
  'BI3Y-XA68-1BIQ',
  'BL76-RLLR-RYDP',
  'BLQR-CV8C-L7M9',
  'BMTG-YOU8-NFIY',
  'BNBM-RGYS-3Z6G',
  'C2A7-XWFY-0Z71',
  'C9DM-8DGL-Y10O',
  'CAXI-2D2J-ZEJ2',
  'CCYI-BT6I-8VCM',
  'CDZ4-6RAP-DGDI',
  'CEF6-ZJ4Y-OZ4R',
  'CJCQ-CGOA-TZ2S',
  'CO92-B1PA-6LA2',
  'CRYX-S2QT-07L2',
  'CTS4-EMAO-1AHQ',
  'CWNS-XKHT-63IM',
  'D035-JR44-QW7I',
  'D1KY-M0LM-2R5G',
  'D3KG-HH1K-LK7H',
  'D6UA-C35X-9WVY',
  'DCHQ-MS6U-DE3L',
  'DEBY-LR1Q-DRLQ',
  'DJQE-2BDX-KY35',
  'DOGM-3NO0-5DAD',
  'DROR-0TEB-9E6D',
  'DUFP-W1XZ-F4EN',
  'DYM0-YM3M-L01N',
  'E07D-7MI9-XSE8',
  'E4J7-TH0A-4K8I',
  'E9YA-NXF4-30U5',
  'EH3A-RU3F-EHG3',
  'F180-6IY9-H9JI',
  'F2MV-HJEW-5XPQ',
  'F5VA-OP0Z-I1TZ',
  'F5ZZ-9JHA-KGGZ',
  'F8IL-YSKJ-OE3F',
  'FDY0-PZZ3-OSER',
  'FINX-GJET-0PM2',
  'FMN4-KQC6-A5Q4',
  'FQ8H-R2JJ-P4BA',
  'FRHP-LYI1-3YEE',
  'FX61-M41N-X9HL',
  'FYI9-XZ36-Q6TU',
  'FZER-T1AC-B0PJ',
  'G3K0-S2B8-ZRNL',
  'G9HY-S69I-UW35',
  'GD8O-YW2T-88UG',
  'GDHQ-EU8A-EFKN',
  'GJYC-KYGS-CUPI',
  'GLQL-4KTW-3M5Q',
  'GY7N-CUB8-9A48',
  'GZUO-KLH5-K1GX',
  'H6HO-0M1Z-ETVA',
  'H7EH-M840-YKGY',
  'HA19-OFT6-HPX1',
  'HF82-ZKC0-6RD5',
  'HMT4-QBAB-BIH4',
  'HNPF-CEEX-FL9I',
  'HYSR-1LDN-1J4U',
  'I30E-HHJX-OX1S',
  'I3EV-QY5X-HS8K',
  'I4OL-QBIZ-J9FP',
  'I948-YD12-YCHZ',
  'I9WG-7L8M-1ADC',
  'IKSW-YDR0-QD87',
  'ITDK-UK7Y-FJWP',
  'IU9U-AU6C-X7TE',
  'IXUU-YBEO-4L9J',
  'J250-BXIP-FO8P',
  'J418-8ZKF-YSGE',
  'J86E-6LXN-D8MN',
  'JDKI-1BU9-P7FO',
  'JGPZ-R17B-KQS6',
  'JJ2W-1Z1S-FYRV',
  'JMYU-OY2R-E1XT',
  'JOAV-3BGP-VTFB',
  'JQK4-I69J-CDBT',
  'JTDB-ABA8-WG9L',
  'K3M6-41L8-6AGX',
  'K65O-7J72-2A3E',
  'KCW1-T2S0-VP6R',
  'KH8P-9W4W-C18K',
  'KJQ1-7HHP-8KN4',
  'KLZX-HCNG-HGIK',
  'KSXG-42P0-2D3U',
  'KYKL-FOT4-35NE',
  'LBKX-FD1X-9COJ',
  'LBUW-8AF7-AT8S',
  'LCTQ-16EF-GKI5',
  'LEKX-5CMS-784I',
  'LI0G-4PPG-IJLA',
  'LNWV-UT7L-0SSJ',
  'LVOA-R9CE-NLUM',
  'M18V-2EFR-ET7H',
  'M323-I2EM-Z0GJ',
  'M67F-NIUQ-QHKU',
  'M9NP-2JTB-V2YU',
  'MABU-WKVH-A43K',
  'MIWO-03AQ-XHYH',
  'MS0W-IN95-C8YR',
  'MTTG-0AQK-073W',
  'MUZJ-XUJL-V0H0',
  'N4D0-ZUOQ-330Q',
  'N62M-HK0O-GS23',
  'NDD1-E22M-1Q3E',
  'NDQQ-VW0X-M8MW',
  'NE9E-Y600-CEKH',
  'NEXQ-A1I6-VCYV',
  'NGZ2-LF0M-IR5E',
  'NQL0-OZGU-E2I5',
  'NRXS-1JZ0-H38N',
  'NSHY-6HLS-RK1V',
  'NXIP-2NYZ-RQM8',
  'O08R-3CUC-300N',
  'O88T-JQ0H-QFFP',
  'O8DQ-1UWD-D4YQ',
  'ODPR-4BGC-G27U',
  'ODQA-TC0X-P990',
  'OI1N-7RV4-MDEO',
  'OLWA-P81X-FDRI',
  'OTGN-N43Q-1Y7N',
  'OUI3-D3VN-YX6D',
  'P6JV-30VG-2TXO',
  'PC1H-ESV3-RE0J',
  'PE3E-5LB0-KGL0',
  'PEVM-DZTD-X6WU',
  'PFGZ-KPNQ-QJMX',
  'PG3W-KBIQ-1RY0',
  'PGS7-VKTF-H02S',
  'PH8X-FTWG-OY3W',
  'PL0L-6KNK-K9C1',
  'PRAF-4X1A-9GOT',
  'PVRU-11LK-MW9F',
  'PWF7-56JI-R7OP',
  'Q0EK-8XBI-GJPU',
  'Q0F5-PXON-VY4Z',
  'Q5KM-DEAD-OLCK',
  'Q7GJ-PUCE-RJK7',
  'Q8V3-I6B8-1L9Z',
  'QSFC-MB42-3UHC',
  'RAQ4-6ED4-EQTJ',
  'RFAK-0FB5-AVUF',
  'RHC6-VTK6-EOBJ',
  'RO4V-QFI5-NGWI',
  'RPEG-4GBZ-ETD2',
  'RS04-KRB5-YJVB',
  'S1KX-T8OL-QCVG',
  'S6RZ-X5JS-VO8S',
  'SES0-9PGA-GNJ2',
  'SFPV-YHFD-JORY',
  'SJ61-3TOP-JP1Y',
  'SPFG-6713-MUWT',
  'SQ1D-KXEK-03Z0',
  'STSF-38GR-T6S1',
  'SW32-TZJP-F1VT',
  'SXI5-N8IP-XSKD',
  'T4BR-GZA9-AC04',
  'T70H-JNJ7-OQ3E',
  'T9HO-42L3-7NUQ',
  'TBDO-DF74-QCVP',
  'TD6B-KBTG-B39W',
  'TFQS-JLCG-SC9B',
  'TN6C-XS6B-MQSY',
  'UBB7-UL6B-0J85',
  'UH8U-71SD-7P37',
  'UN9B-IGMV-K16K',
  'UNH9-AAEE-E8YB',
  'UYTX-5I14-9MLF',
  'UZ0O-U0Y7-6WSC',
  'V63U-L0MD-NNCA',
  'VA44-WC4N-XOCG',
  'VBYK-SUCR-2TYR',
  'VQS9-NR3E-O7AR',
  'VRN4-6WL5-WWOX',
  'WDTT-HQXE-1XAV',
  'WELX-ME30-1CGP',
  'WFVU-M4XL-X6S3',
  'WG35-ORXJ-HNC0',
  'WU4J-E9FX-7GG9',
  'WWKH-8RB5-V968',
  'WXWD-H3D9-T6N0',
  'WZVF-BXLW-KZWE',
  'WZWA-PT25-UXDS',
  'X12I-MS8G-LVFU',
  'X1KV-LPI4-SXK4',
  'XG5S-VTTK-J5GL',
  'XKM5-PW10-BCWU',
  'XO4L-8CFB-2W92',
  'XYDE-MSCG-JL8M',
  'Y03U-DWFD-NYAL',
  'Y2KV-P181-L6SY',
  'Y2MN-BO7E-Z3C1',
  'Y3PM-9F42-UFDF',
  'Y40L-F254-WXO7',
  'Y4JN-FZW2-AO23',
  'Y8A2-D4TA-M5I6',
  'Y9O8-5RKH-E1A4',
  'YCJ7-D1U1-W4I8',
  'YGHI-G66S-8FPD',
  'YJCZ-CYPP-AT1D',
  'YK7F-KW52-7NRB',
  'YKEP-DHWH-NEBH',
  'Z3GC-0Y17-H333',
  'Z5FW-NTV6-YE4X',
  'ZAZP-LW48-PFU2',
  'ZBQF-US9H-BXGJ',
  'ZCN5-6K9L-9RX8',
  'ZJ7G-IYXH-HKUP',
  'ZOTZ-ZBG6-SFKI',
  'ZPRL-H7ZB-BN9Y',
  'ZXPS-3IQ1-KEAI',
  'ZZR1-552M-230J'
];

// Planilha de rastreamento de codigos usados
var SHEET_NAME = 'Codigos-Utilizados';
var PROP_PLANILHA_ID = 'PLANILHA_RASTREAMENTO_ID';

function criarPlanilhaRastreamento() {
  var spreadsheet = SpreadsheetApp.create('Rastreamento-Codigos-Avaliacoes');
  var sheet = spreadsheet.getActiveSheet();
  sheet.setName(SHEET_NAME);

  // Headers
  sheet.appendRow(['Codigo', 'Data Uso', 'Hora', 'Nome Aluno', 'Questionario', 'Nota', 'Status']);

  // Inicializar com todos os codigos como "Disponivel"
  CODIGOS_VALIDOS.forEach(function(codigo) {
    sheet.appendRow([codigo, '', '', '', '', '', 'Disponivel']);
  });

  // Guardar o ID para as demais funcoes acharem a planilha
  // (script standalone nao tem "planilha ativa" - SpreadsheetApp.getActiveSpreadsheet()
  // so funciona em script vinculado a uma planilha como container)
  PropertiesService.getScriptProperties().setProperty(PROP_PLANILHA_ID, spreadsheet.getId());

  Logger.log('Planilha criada: ' + spreadsheet.getUrl());
  return spreadsheet.getId();
}

// Retorna a planilha de rastreamento, ou null se ainda nao foi criada.
// Centraliza o acesso para nao depender de SpreadsheetApp.getActiveSpreadsheet(),
// que retorna null neste script standalone.
function getPlanilhaRastreamento() {
  var id = PropertiesService.getScriptProperties().getProperty(PROP_PLANILHA_ID);
  if (!id) return null;

  try {
    return SpreadsheetApp.openById(id);
  } catch (e) {
    Logger.log('Aviso: planilha de rastreamento nao encontrada (ID salvo invalido): ' + e.message);
    return null;
  }
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
    var spreadsheet = getPlanilhaRastreamento();
    if (!spreadsheet) {
      throw new Error('Planilha de rastreamento nao encontrada. Rode criarPlanilhaRastreamento() primeiro.');
    }
    var sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      // Se nao existe, criar
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      sheet.appendRow(['Codigo', 'Data Uso', 'Hora', 'Nome Aluno', 'Questionario', 'Nota', 'Status']);
    }

    var data = sheet.getDataRange().getValues();

    for (var i = 1; i < data.length; i++) {
      if (data[i][0] === codigo) {
        if (data[i][6] === 'Usado' || data[i][6] === 'USADO') {
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
    var spreadsheet = getPlanilhaRastreamento();
    if (!spreadsheet) return;
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
        sheet.getRange(i + 1, 7).setValue('USADO');
        break;
      }
    }
  } catch (e) {
    // Silenciosamente ignorar se nao conseguir escrever
  }
}

// Registra a nota de um questionario na linha do codigo correspondente.
// Chamada automaticamente pelo trigger aoSubmeterFormulario() quando o aluno envia a resposta.
function registrarNotaNoRastreamento(codigo, nomeQuestionario, nota, notaMaxima) {
  try {
    if (!codigo) {
      Logger.log('Aviso: submissao sem codigo de acesso, nota nao registrada. Questionario: ' + nomeQuestionario);
      return;
    }
    codigo = codigo.toUpperCase().trim();

    var spreadsheet = getPlanilhaRastreamento();
    if (!spreadsheet) {
      Logger.log('Aviso: planilha de rastreamento nao encontrada. Nota nao registrada.');
      return;
    }
    var sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) return;

    var data = sheet.getDataRange().getValues();
    var notaFormatada = nota + (notaMaxima ? ' / ' + notaMaxima : '');

    for (var i = 1; i < data.length; i++) {
      if (data[i][0] === codigo) {
        sheet.getRange(i + 1, 5).setValue(nomeQuestionario || 'N/A'); // Questionario
        sheet.getRange(i + 1, 6).setValue(notaFormatada);              // Nota
        Logger.log('Nota registrada: ' + codigo + ' - ' + nomeQuestionario + ' - ' + notaFormatada);
        return;
      }
    }

    Logger.log('Aviso: codigo ' + codigo + ' nao encontrado na planilha de rastreamento.');
  } catch (e) {
    Logger.log('Erro ao registrar nota: ' + e.message);
  }
}

// Trigger instalavel (onFormSubmit) - precisa ser instalado em cada formulario
// via ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create()
// (ja incluido automaticamente em cada criarFormularioAulaXX()).
function aoSubmeterFormulario(e) {
  try {
    var form = e.source;
    var response = e.response;
    var itemResponses = response.getItemResponses();

    var codigo = null;
    var nomeAluno = null;

    itemResponses.forEach(function(itemResponse) {
      var titulo = itemResponse.getItem().getTitle();
      if (titulo.indexOf('Codigo de Acesso') !== -1) {
        codigo = itemResponse.getResponse();
      } else if (titulo.indexOf('Nome Completo') !== -1) {
        nomeAluno = itemResponse.getResponse();
      }
    });

    var nota = response.getTotalScore(); // calculo nativo do quiz (setIsQuiz + setPoints)
    var nomeQuestionario = form.getTitle();

    registrarNotaNoRastreamento(codigo, nomeQuestionario, nota, null);

    if (nomeAluno && codigo) {
      // Garante Nome Aluno preenchido mesmo se validarCodigoUnico nao rodou antes
      registrarUsoDeCodego(codigo.toUpperCase().trim(), nomeAluno, nomeQuestionario);
    }
  } catch (err) {
    Logger.log('Erro no trigger aoSubmeterFormulario: ' + err.message);
  }
}

function listarCodigosDisponiveis() {
  Logger.log('╔═══════════════════════════════════════════════════╗');
  Logger.log('║         CODIGOS DISPONIVEIS (1 USO CADA)            ║');
  Logger.log('╚═══════════════════════════════════════════════════╝');
  Logger.log('');

  try {
    var spreadsheet = getPlanilhaRastreamento();
    var sheet = spreadsheet ? spreadsheet.getSheetByName(SHEET_NAME) : null;

    if (sheet) {
      var data = sheet.getDataRange().getValues();
      var disponiveis = 0;
      var usados = 0;

      for (var i = 1; i < data.length; i++) {
        var status = data[i][6];

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
    var spreadsheet = getPlanilhaRastreamento();
    var sheet = spreadsheet ? spreadsheet.getSheetByName(SHEET_NAME) : null;

    if (!sheet) {
      Logger.log('Nenhuma planilha de rastreamento encontrada');
      return;
    }

    var data = sheet.getDataRange().getValues();

    Logger.log('CODIGOS UTILIZADOS:');
    Logger.log('');

    var usados = 0;
    for (var i = 1; i < data.length; i++) {
      if (data[i][6] === 'USADO') {
        Logger.log(data[i][0] + ' - ' + data[i][1] + ' ' + data[i][2]);
        Logger.log('  Aluno: ' + data[i][3]);
        Logger.log('  Questionario: ' + data[i][4]);
        Logger.log('  Nota: ' + data[i][5]);
        Logger.log('');
        usados++;
      }
    }

    Logger.log('');
    Logger.log('CODIGOS DISPONIVEIS:');
    Logger.log('');

    var disponiveis = 0;
    for (var i = 1; i < data.length; i++) {
      if (data[i][6] !== 'USADO') {
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


// Validacao simples, sem controle de uso unico.
function validarCodigo(codigo) {
  if (!codigo || codigo.trim() === '') return false;
  return CODIGOS_VALIDOS.indexOf(codigo.toUpperCase().trim()) !== -1;
}


// ==========================================================================
// FORMULARIOS DE AVALIACAO
// ==========================================================================
// ════════════════════════════════════════════════════════════
// AULA 01
// ════════════════════════════════════════════════════════════


