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

function criarFormularioAula01() {
  var form = FormApp.create('Avaliação — Aula 01 · Processo Comunicativo · SENAI');

  form.setDescription( 'Avaliação Completa: Processo Comunicativo\n\nAula 01 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Processo Comunicativo');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. Segundo a aula, o que é "Eficiência"?');
  q1.setChoices([
    q1.createChoice('Projetos complexos exigem alinhamento constante entre setores', false),
    q1.createChoice('E-mails objetivos evitam retrabalho e desperdício de tempo', true),
    q1.createChoice('Ajuste o vocabulário e o tom ao contexto social e ao interlocutor', false),
    q1.createChoice('o receptor precisa interpretar os sinais com atenção para reconstruir o sentido original da mensagem', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "O Modelo Geral do Processo"?');
  q2.setChoices([
    q2.createChoice('Ao longo desta disciplina, você aprenderá a se expressar com clareza, segurança e ética no colégio e na futura vida profissional', false),
    q2.createChoice('Gestos involuntários, suspiros e olhares para o relógio que revelam tédio ou nervosismo sem querer', false),
    q2.createChoice('Toda comunicação humana estrutura-se pela interação coordenada de elementos essenciais', true),
    q2.createChoice('Expressar sentimentos, negociar tarefas e resolver atritos em casa e com amigos', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "O Emissor: A Origem"?');
  q3.setChoices([
    q3.createChoice('O emissor traduz sua ideia em palavras, sinais ou imagens compreensíveis', false),
    q3.createChoice('Expressar sentimentos, negociar tarefas e resolver atritos em casa e com amigos', false),
    q3.createChoice('Folha de papel impressa, cabos de internet, sinais de rádio, aplicativos e telefonia', false),
    q3.createChoice('Ele é responsável por selecionar as palavras certas, organizar o pensamento e adequar a linguagem à pessoa que vai ouvi-lo', true)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Cooperação"?');
  q4.setChoices([
    q4.createChoice('Projetos complexos exigem alinhamento constante entre setores', true),
    q4.createChoice('Não propagar informações falsas ou dados distorcidos', false),
    q4.createChoice('o receptor precisa interpretar os sinais com atenção para reconstruir o sentido original da mensagem', false),
    q4.createChoice('médico; Receptor: paciente; Código: termos acessíveis; Canal: ar e receita impressa', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "Pontuação Falha"?');
  q5.setChoices([
    q5.createChoice('A falta de uma vírgula pode alterar radicalmente ordens e avisos contratuais', true),
    q5.createChoice('Usar siglas técnicas com quem não é da área isola o receptor e paralisa decisões', false),
    q5.createChoice('O contexto (ou referente) é a situação real que envolve a conversa: o lugar, o momento histórico e as relações sociais entre os participantes', false),
    q5.createChoice('Folha de papel impressa, cabos de internet, sinais de rádio, aplicativos e telefonia', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Segundo a aula, o que é "Clareza"?');
  q6.setChoices([
    q6.createChoice('Escolha palavras simples e diretas, eliminando rodeios desnecessários', true),
    q6.createChoice('médico; Receptor: paciente; Código: termos acessíveis; Canal: ar e receita impressa', false),
    q6.createChoice('E-mails objetivos evitam retrabalho e desperdício de tempo', false),
    q6.createChoice('Rejeitar agressões verbais, ironias cruéis e ofensas preconceituosas', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. De acordo com a aula, o que caracteriza "Comunicação no Trabalho"?');
  q7.setChoices([
    q7.createChoice('Focar apenas na própria resposta antes de ouvir o que a outra pessoa tem a dizer', false),
    q7.createChoice('Empresas e equipes dependem de informações precisas para operar com segurança e produtividade', true),
    q7.createChoice('Gestos involuntários, suspiros e olhares para o relógio que revelam tédio ou nervosismo sem querer', false),
    q7.createChoice('Expressar sentimentos, negociar tarefas e resolver atritos em casa e com amigos', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Qual conceito a aula define como: "o receptor precisa interpretar os sinais com atenção para reconstruir o sentido original da mensagem"?');
  q8.setChoices([
    q8.createChoice('Cooperação', false),
    q8.createChoice('Eficiência', false),
    q8.createChoice('Respeito', false),
    q8.createChoice('Ouvir passivamente não é suficiente', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Canais Tecnológicos"?');
  q9.setChoices([
    q9.createChoice('Folha de papel impressa, cabos de internet, sinais de rádio, aplicativos e telefonia', true),
    q9.createChoice('Usar siglas técnicas com quem não é da área isola o receptor e paralisa decisões', false),
    q9.createChoice('A falta de uma vírgula pode alterar radicalmente ordens e avisos contratuais', false),
    q9.createChoice('Empresas e equipes dependem de informações precisas para operar com segurança e produtividade', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Segundo a aula, o que é "Adequação"?');
  q10.setChoices([
    q10.createChoice('Proteger conversas confidenciais e dados pessoais alheios', false),
    q10.createChoice('Projetos complexos exigem alinhamento constante entre setores', false),
    q10.createChoice('Ajuste o vocabulário e o tom ao contexto social e ao interlocutor', true),
    q10.createChoice('Preste atenção genuína ao feedback recebido para validar o entendimento', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "A Mensagem: O Conteúdo"?');
  q11.setChoices([
    q11.createChoice('A mensagem é o objeto concreto da transmissão: o conjunto de ideias, sentimentos, instruções ou dados enviados', true),
    q11.createChoice('A falta de uma vírgula pode alterar radicalmente ordens e avisos contratuais', false),
    q11.createChoice('Quem tem empatia não presume que o outro sabe tudo o que ele sabe. Explica com paciência, escolhe termos acessíveis e confere se foi compreendido', false),
    q11.createChoice('Folha de papel impressa, cabos de internet, sinais de rádio, aplicativos e telefonia', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "O Poder da Empatia"?');
  q12.setChoices([
    q12.createChoice('Folha de papel impressa, cabos de internet, sinais de rádio, aplicativos e telefonia', false),
    q12.createChoice('Quem tem empatia não presume que o outro sabe tudo o que ele sabe. Explica com paciência, escolhe termos acessíveis e confere se foi compreendido', true),
    q12.createChoice('A falta de uma vírgula pode alterar radicalmente ordens e avisos contratuais', false),
    q12.createChoice('Expressar sentimentos, negociar tarefas e resolver atritos em casa e com amigos', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. Segundo a aula, o que é "Segurança"?');
  q13.setChoices([
    q13.createChoice('médico; Receptor: paciente; Código: termos acessíveis; Canal: ar e receita impressa', false),
    q13.createChoice('o receptor precisa interpretar os sinais com atenção para reconstruir o sentido original da mensagem', false),
    q13.createChoice('Uma instrução técnica confusa pode causar acidentes graves', true),
    q13.createChoice('Projetos complexos exigem alinhamento constante entre setores', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Tipos de Ruído e Barreiras"?');
  q14.setChoices([
    q14.createChoice('O comunicador habilidoso avalia constantemente o ambiente físico, o grau de intimidade e a hierarquia social antes de escolher suas expressões', false),
    q14.createChoice('O receptor (ou interlocutor) capta os sinais transmitidos e realiza a decodificação da mensagem', false),
    q14.createChoice('Termos técnicos desconhecidos, gírias regionais e ambiguidades gramaticais', true),
    q14.createChoice('Uma piada descontraída que funciona perfeitamente no recreio pode ser considerada desrespeitosa durante uma entrevista de trabalho formal', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Segundo a aula, o que é "Emissor"?');
  q15.setChoices([
    q15.createChoice('E-mails objetivos evitam retrabalho e desperdício de tempo', false),
    q15.createChoice('Não propagar informações falsas ou dados distorcidos', false),
    q15.createChoice('médico; Receptor: paciente; Código: termos acessíveis; Canal: ar e receita impressa', true),
    q15.createChoice('Preste atenção genuína ao feedback recebido para validar o entendimento', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "Comunicação no Dia a Dia"?');
  q16.setChoices([
    q16.createChoice('Folha de papel impressa, cabos de internet, sinais de rádio, aplicativos e telefonia', false),
    q16.createChoice('Empresas e equipes dependem de informações precisas para operar com segurança e produtividade', false),
    q16.createChoice('Toda comunicação humana estrutura-se pela interação coordenada de elementos essenciais', false),
    q16.createChoice('Expressar sentimentos, negociar tarefas e resolver atritos em casa e com amigos', true)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Bem-vindos ao Curso!"?');
  q17.setChoices([
    q17.createChoice('Folha de papel impressa, cabos de internet, sinais de rádio, aplicativos e telefonia', false),
    q17.createChoice('É por meio do feedback que o emissor verifica se a mensagem foi decodificada corretamente ou se precisa corrigir ruídos e reformular explicações', false),
    q17.createChoice('Ao longo desta disciplina, você aprenderá a se expressar com clareza, segurança e ética no colégio e na futura vida profissional', true),
    q17.createChoice('O contexto (ou referente) é a situação real que envolve a conversa: o lugar, o momento histórico e as relações sociais entre os participantes', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Respeito"?');
  q18.setChoices([
    q18.createChoice('Proteger conversas confidenciais e dados pessoais alheios', false),
    q18.createChoice('Uma instrução técnica confusa pode causar acidentes graves', false),
    q18.createChoice('Rejeitar agressões verbais, ironias cruéis e ofensas preconceituosas', true),
    q18.createChoice('Projetos complexos exigem alinhamento constante entre setores', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "O Ambiente Determina o Tom"?');
  q19.setChoices([
    q19.createChoice('Termos técnicos desconhecidos, gírias regionais e ambiguidades gramaticais', false),
    q19.createChoice('Uma piada descontraída que funciona perfeitamente no recreio pode ser considerada desrespeitosa durante uma entrevista de trabalho formal', true),
    q19.createChoice('Empresas e equipes dependem de informações precisas para operar com segurança e produtividade', false),
    q19.createChoice('Ele não se limita a barulho de trânsito ou música alta: pode ser letra ilegível, conexão lenta, desatenção mental ou palavras com duplo sentido', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Segundo a aula, o que é "Veracidade"?');
  q20.setChoices([
    q20.createChoice('Uma instrução técnica confusa pode causar acidentes graves', false),
    q20.createChoice('Não propagar informações falsas ou dados distorcidos', true),
    q20.createChoice('Projetos complexos exigem alinhamento constante entre setores', false),
    q20.createChoice('Preste atenção genuína ao feedback recebido para validar o entendimento', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 01 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 01 — Processo Comunicativo');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula01() {
  var form = FormApp.openByTitle('Avaliação — Aula 01 · Processo Comunicativo · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 01: Processo Comunicativo');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Processo Comunicativo', 'Processo Comunicativo', 'É um conceito importante apresentado na aula', 'Por que nos desentendemos?', 'É um conceito importante apresentado na aula', 'Objetivos da Aula de Hoje', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'é um conjunto de técnicas treináveis que transformam oportunidades. Ao longo desta disciplina, você ', 'A Origem', 'O Destino', 'O Conteúdo', 'o conjunto de ideias, sentimentos, instruções ou dados enviados. Para ser eficaz, ela precisa ter co', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 02
// ════════════════════════════════════════════════════════════


function criarFormularioAula02() {
  var form = FormApp.create('Avaliação — Aula 02 · Preparação para Entrevistas Comunicação oral estratégica e postura profissional · SENAI');

  form.setDescription( 'Avaliação Completa: Preparação para Entrevistas Comunicação oral estratégica e postura profissional\n\nAula 02 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Preparação para Entrevistas Comunicação oral estratégica e postura profissional');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. Qual conceito a aula define como: "se não souber um termo técnico, admita com disposição para aprender"?');
  q1.setChoices([
    q1.createChoice('Entrevista', false),
    q1.createChoice('Tom de voz moderado', false),
    q1.createChoice('Honestidade', true),
    q1.createChoice('Quem você é hoje', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Qual conceito a aula define como: "área de estudo atual e interesses gerais"?');
  q2.setChoices([
    q2.createChoice('Validação emocional', false),
    q2.createChoice('Quem você é hoje', true),
    q2.createChoice('Água à mão', false),
    q2.createChoice('Suas principais habilidades', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "Gestão da Ansiedade e Respiração"?');
  q3.setChoices([
    q3.createChoice('Fale em velocidade controlada. Articular cada palavra evita que o nervosismo acelere sua fala', false),
    q3.createChoice('Sente-se ocupando o encosto da cadeira. Evite debruçar-se sobre a mesa ou recostar desleixadamente', false),
    q3.createChoice('Sentir nervosismo antes de uma entrevista é perfeitamente normal. O objetivo não é extinguir a emoção, mas sim gerenciá-la fisiologicamente', true),
    q3.createChoice('Uma boa entrevista não se improvisa na hora: ela é resultado de preparação anterior, presença consciente durante o diálogo e acompanhamento responsável depois do...', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Compartilhe o método"?');
  q4.setChoices([
    q4.createChoice('explique como superou a dificuldade em vez de exaltar seu talento natural', true),
    q4.createChoice('transformar reclamações em acordos colaborativos', false),
    q4.createChoice('pontos fortes comprovados por projetos práticos', false),
    q4.createChoice('Expressão corporal que transmite segurança e receptividade', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "Entrevista Formal"?');
  q5.setChoices([
    q5.createChoice('Norma culta acessível, escuta focada, tempo delimitado e avaliação explícita de atitudes e habilidades', true),
    q5.createChoice('Muitos candidatos temem parecer convencidos e acabam diminuindo o próprio esforço. O segredo está na atribuição justa', false),
    q5.createChoice('Uso espontâneo de gírias, ritmo flexível, temas livres e ausência de critérios formais de avaliação', false),
    q5.createChoice('Cumprimente com um sorriso educado. A simpatia autêntica quebra o gelo logo nos primeiros segundos', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Verificação: Perguntas Finais"?');
  q6.setChoices([
    q6.createChoice('Sente-se ocupando o encosto da cadeira. Evite debruçar-se sobre a mesa ou recostar desleixadamente', false),
    q6.createChoice('Fazer perguntas sobre o funcionamento da equipe ao final da entrevista demonstra falta de atenção ao que já foi falado', true),
    q6.createChoice('Muitos candidatos temem parecer convencidos e acabam diminuindo o próprio esforço. O segredo está na atribuição justa', false),
    q6.createChoice('Cumprimente com um sorriso educado. A simpatia autêntica quebra o gelo logo nos primeiros segundos', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Qual conceito a aula define como: "beber um gole d"água oferece uma pausa natural para organizar pensamentos"?');
  q7.setChoices([
    q7.createChoice('Tom de voz moderado', false),
    q7.createChoice('Argumentação', false),
    q7.createChoice('Água à mão', true),
    q7.createChoice('Clareza', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Segundo a aula, o que é "Postura"?');
  q8.setChoices([
    q8.createChoice('se não souber um termo técnico, admita com disposição para aprender', false),
    q8.createChoice('desacelerar o ritmo reduz o estresse da conversa', false),
    q8.createChoice('pontos fortes comprovados por projetos práticos', false),
    q8.createChoice('Expressão corporal que transmite segurança e receptividade', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Notícias Recentes"?');
  q9.setChoices([
    q9.createChoice('Essa é quase sempre a pergunta de abertura. O maior erro é contar a vida inteira cronologicamente desde a infância', false),
    q9.createChoice('Sentir nervosismo antes de uma entrevista é perfeitamente normal. O objetivo não é extinguir a emoção, mas sim gerenciá-la fisiologicamente', false),
    q9.createChoice('Identifique prêmios, lançamentos ou parcerias públicas que mostram seu interesse genuíno', true),
    q9.createChoice('Sente-se ocupando o encosto da cadeira. Evite debruçar-se sobre a mesa ou recostar desleixadamente', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Segundo a aula, o que é "Entrevista"?');
  q10.setChoices([
    q10.createChoice('inspire pelo nariz em 4 segundos, segure 4 segundos e solte pela boca em 4 segundos', false),
    q10.createChoice('Diálogo intencional para avaliar competências e perfil', true),
    q10.createChoice('área de estudo atual e interesses gerais', false),
    q10.createChoice('desacelerar o ritmo reduz o estresse da conversa', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. Qual conceito a aula define como: "desacelerar o ritmo reduz o estresse da conversa"?');
  q11.setChoices([
    q11.createChoice('Tom de voz moderado', true),
    q11.createChoice('Água à mão', false),
    q11.createChoice('Destaque o aprendizado', false),
    q11.createChoice('Apoio dos pés', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Segundo a aula, o que é "Honestidade"?');
  q12.setChoices([
    q12.createChoice('explique como superou a dificuldade em vez de exaltar seu talento natural', false),
    q12.createChoice('Apresentação lógica de fatos e aprendizados reais', false),
    q12.createChoice('Expressão corporal que transmite segurança e receptividade', false),
    q12.createChoice('se não souber um termo técnico, admita com disposição para aprender', true)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. Qual conceito a aula define como: "Diálogo intencional para avaliar competências e perfil"?');
  q13.setChoices([
    q13.createChoice('Entrevista', true),
    q13.createChoice('Honestidade', false),
    q13.createChoice('Destaque o aprendizado', false),
    q13.createChoice('Argumentação', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Revisão: Escuta Ativa e Atendimento"?');
  q14.setChoices([
    q14.createChoice('Antes da entrevista, monte um inventário de realizações. Mesmo sem experiência formal registrada, você já acumulou experiências valiosas', false),
    q14.createChoice('A estrutura definitiva para responder a perguntas comportamentais com coerência e dados concretos', false),
    q14.createChoice('Descubra a missão, visão, história e os principais projetos em andamento da instituição', false),
    q14.createChoice('Na aula anterior, estudamos o atendimento profissional. Vimos que ouvir ativamente não é apenas esperar a sua vez de falar, mas compreender o objetivo da outra...', true)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Segundo a aula, o que é "Apoio dos pés"?');
  q15.setChoices([
    q15.createChoice('manter os pés firmes no chão ancora o corpo e reduz tremores', true),
    q15.createChoice('Certeza consciente sobre o próprio valor e esforço', false),
    q15.createChoice('pontos fortes comprovados por projetos práticos', false),
    q15.createChoice('Apresentação lógica de fatos e aprendizados reais', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Segundo a aula, o que é "Foco em soluções práticas"?');
  q16.setChoices([
    q16.createChoice('transformar reclamações em acordos colaborativos', true),
    q16.createChoice('valorize o que aquela experiência ensinou para o seu futuro', false),
    q16.createChoice('vá direto ao ponto sem rodeios excessivos', false),
    q16.createChoice('desacelerar o ritmo reduz o estresse da conversa', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "O Método STAR"?');
  q17.setChoices([
    q17.createChoice('Sentir nervosismo antes de uma entrevista é perfeitamente normal. O objetivo não é extinguir a emoção, mas sim gerenciá-la fisiologicamente', false),
    q17.createChoice('No ambiente corporativo, situações de tensão exigem desescalada', false),
    q17.createChoice('Organize os quatro passos do Método STAR na sequência correta de argumentação', false),
    q17.createChoice('A estrutura definitiva para responder a perguntas comportamentais com coerência e dados concretos', true)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Quem você é hoje"?');
  q18.setChoices([
    q18.createChoice('área de estudo atual e interesses gerais', true),
    q18.createChoice('vá direto ao ponto sem rodeios excessivos', false),
    q18.createChoice('Diálogo intencional para avaliar competências e perfil', false),
    q18.createChoice('Apresentação lógica de fatos e aprendizados reais', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "Dica Prática"?');
  q19.setChoices([
    q19.createChoice('Essa é quase sempre a pergunta de abertura. O maior erro é contar a vida inteira cronologicamente desde a infância', false),
    q19.createChoice('Uma pausa silenciosa de dois segundos demonstra reflexão e segurança, enquanto vícios sonoros transmitem insegurança', true),
    q19.createChoice('Identifique prêmios, lançamentos ou parcerias públicas que mostram seu interesse genuíno', false),
    q19.createChoice('Na aula anterior, estudamos o atendimento profissional. Vimos que ouvir ativamente não é apenas esperar a sua vez de falar, mas compreender o objetivo da outra...', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "Mãos Visíveis"?');
  q20.setChoices([
    q20.createChoice('Fale em velocidade controlada. Articular cada palavra evita que o nervosismo acelere sua fala', false),
    q20.createChoice('Hoje, a maior parte das seleções iniciais ocorre por videoconferência. Essa modalidade exige os mesmos cuidados da entrevista presencial, somados a aspectos...', false),
    q20.createChoice('Mantenha as mãos sobre a mesa ou colo. Escondê-las nos bolsos transmite hesitação ou desinteresse', true),
    q20.createChoice('Norma culta acessível, escuta focada, tempo delimitado e avaliação explícita de atitudes e habilidades', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 02 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 02 — Preparação para Entrevistas Comunicação oral estratégica e postura profissional');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula02() {
  var form = FormApp.openByTitle('Avaliação — Aula 02 · Preparação para Entrevistas Comunicação oral estratégica e postura profissional · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 02: Preparação para Entrevistas Comunicação oral estratégica e postura profissional');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Preparação para Entrevistas Comunicação oral estratégica e postura profissional', 'É um conceito importante apresentado na aula', 'O que define uma contratação?', 'É um conceito importante apresentado na aula', 'Objetivos da Nossa Aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Diálogo intencional para avaliar competências e perfil.', 'Expressão corporal que transmite segurança e receptividade.', 'Apresentação lógica de fatos e aprendizados reais.', 'Certeza consciente sobre o próprio valor e esforço.', 'Escuta Ativa e Atendimento', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 03
// ════════════════════════════════════════════════════════════

function criarFormularioAula03() {
  var form = FormApp.create('Avaliação — Aula 03 · Estruturação de Textos Profissionais · SENAI');

  form.setDescription( 'Avaliação Completa: Estruturação de Textos Profissionais\n\nAula 03 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Estruturação de Textos Profissionais');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Coesão: a costura do texto"?');
  q1.setChoices([
    q1.createChoice('Construir períodos de seis ou sete linhas sem ponto final obriga o leitor a reler o trecho várias vezes para reencontrar o sujeito da ação', false),
    q1.createChoice('Omitir intencionalmente uma palavra já evidente no contexto para tornar o texto mais leve e enxuto', false),
    q1.createChoice('Prefira frases com 15 a 25 palavras. Ao terminar uma ideia completa, utilize ponto final em vez de encadear vírgulas infinitas', false),
    q1.createChoice('A coesão textual é a amarração gramatical explícita na superfície do texto. Sem ela, frases soltas parecem uma lista desconectada de compras', true)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Texto profissional"?');
  q2.setChoices([
    q2.createChoice('Defina em uma frase o que o leitor deve saber ou fazer após ler o texto', false),
    q2.createChoice('Defende uma tese pessoal por meio de juízos de valor e argumentação crítica', false),
    q2.createChoice('A capacidade de redigir textos claros, objetivos e coesos é uma das competências mais valorizadas em qualquer carreira. Na próxima aula (Aula 12), exploraremos a...', false),
    q2.createChoice('Exige objetividade, clareza absoluta, vocabulário formal e neutralidade informativa', true)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Segundo a aula, o que é "Conexão direta"?');
  q3.setChoices([
    q3.createChoice('Respostas alinhadas aos objetivos da pergunta', true),
    q3.createChoice('Sem gírias excessivas ou insegurança vocal', false),
    q3.createChoice('Conduzem o leitor sem solavancos de uma ideia à seguinte', false),
    q3.createChoice('Indicam causa, oposição, conclusão ou acréscimo', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Credibilidade pessoal"?');
  q4.setChoices([
    q4.createChoice('Demonstra rigor técnico, organização de ideias e respeito pelo leitor', true),
    q4.createChoice('Harmonia lógica de sentido global sem contradições internas', false),
    q4.createChoice('Organização lógica das ideias para orientar o leitor com clareza', false),
    q4.createChoice('as medidas práticas tomadas pelo candidato', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Qual conceito a aula define como: "Respostas alinhadas aos objetivos da pergunta"?');
  q5.setChoices([
    q5.createChoice('Estruturação', false),
    q5.createChoice('Credibilidade pessoal', false),
    q5.createChoice('Coerência', false),
    q5.createChoice('Conexão direta', true)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Segundo a aula, o que é "Coerência"?');
  q6.setChoices([
    q6.createChoice('Respostas alinhadas aos objetivos da pergunta', false),
    q6.createChoice('Indicam causa, oposição, conclusão ou acréscimo', false),
    q6.createChoice('Harmonia lógica de sentido global sem contradições internas', true),
    q6.createChoice('as medidas práticas tomadas pelo candidato', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Qual conceito a aula define como: "Ligação gramatical entre frases e palavras com conectivos precisos"?');
  q7.setChoices([
    q7.createChoice('Conectivos adequados', false),
    q7.createChoice('Estruturação', false),
    q7.createChoice('Coerência', false),
    q7.createChoice('Coesão', true)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "O perigo das ambiguidades"?');
  q8.setChoices([
    q8.createChoice('A ambiguidade ocorre quando a pontuação incorreta ou o mau posicionamento dos pronomes deixa o sentido incerto', true),
    q8.createChoice('Privilegia a estética, figuras de linguagem, subjetividade e emoção poética', false),
    q8.createChoice('A primeira frase, direta e afirmativa, que sintetiza o tema central que será tratado', false),
    q8.createChoice('A diretora pediu que o assistente enviasse o relatório elaborado por ela', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Qual conceito a aula define como: "Textos bem estruturados evitam trocas intermináveis de mensagens"?');
  q9.setChoices([
    q9.createChoice('Linguagem profissional', false),
    q9.createChoice('Conexão direta', false),
    q9.createChoice('Fluidez na leitura', false),
    q9.createChoice('Economia de tempo', true)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Segundo a aula, o que é "Coesão"?');
  q10.setChoices([
    q10.createChoice('Organização lógica das ideias para orientar o leitor com clareza', false),
    q10.createChoice('Ligação gramatical entre frases e palavras com conectivos precisos', true),
    q10.createChoice('Unidade textual básica em torno de uma ideia central condutora', false),
    q10.createChoice('Harmonia lógica de sentido global sem contradições internas', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. Segundo a aula, o que é "Parágrafo"?');
  q11.setChoices([
    q11.createChoice('Conduzem o leitor sem solavancos de uma ideia à seguinte', false),
    q11.createChoice('Unidade textual básica em torno de uma ideia central condutora', true),
    q11.createChoice('Textos bem estruturados evitam trocas intermináveis de mensagens', false),
    q11.createChoice('Respostas alinhadas aos objetivos da pergunta', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Qual conceito a aula define como: "Harmonia lógica de sentido global sem contradições internas"?');
  q12.setChoices([
    q12.createChoice('Credibilidade pessoal', false),
    q12.createChoice('Coerência', true),
    q12.createChoice('Coesão', false),
    q12.createChoice('Conexão direta', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Evitando a Ambiguidade"?');
  q13.setChoices([
    q13.createChoice('Dessa forma, todos os relatórios foram plenamente regularizados dentro do prazo legal', false),
    q13.createChoice('A diretora pediu que o assistente enviasse o relatório elaborado por ela', true),
    q13.createChoice('Você já recebeu uma mensagem tão confusa que não soube o que responder? No ambiente profissional, um e-mail desordenado causa retrabalho, perda de prazos e ruídos...', false),
    q13.createChoice('Construir períodos de seis ou sete linhas sem ponto final obriga o leitor a reler o trecho várias vezes para reencontrar o sujeito da ação', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Anatomia do parágrafo padrão"?');
  q14.setChoices([
    q14.createChoice('A primeira frase, direta e afirmativa, que sintetiza o tema central que será tratado', true),
    q14.createChoice('A ambiguidade ocorre quando a pontuação incorreta ou o mau posicionamento dos pronomes deixa o sentido incerto', false),
    q14.createChoice('Defende uma tese pessoal por meio de juízos de valor e argumentação crítica', false),
    q14.createChoice('Fica registrada de forma permanente e depende unicamente da ordem visual e semântica das frases escritas', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Segundo a aula, o que é "Linguagem profissional"?');
  q15.setChoices([
    q15.createChoice('Indicam causa, oposição, conclusão ou acréscimo', false),
    q15.createChoice('Sem gírias excessivas ou insegurança vocal', true),
    q15.createChoice('Textos bem estruturados evitam trocas intermináveis de mensagens', false),
    q15.createChoice('as medidas práticas tomadas pelo candidato', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Qual conceito a aula define como: "Organização lógica das ideias para orientar o leitor com clareza"?');
  q16.setChoices([
    q16.createChoice('Linguagem profissional', false),
    q16.createChoice('Coesão', false),
    q16.createChoice('Ação', false),
    q16.createChoice('Estruturação', true)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. Qual conceito a aula define como: "Indicam causa, oposição, conclusão ou acréscimo"?');
  q17.setChoices([
    q17.createChoice('Estruturação', false),
    q17.createChoice('Fluidez na leitura', false),
    q17.createChoice('Conectivos adequados', true),
    q17.createChoice('Coesão', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "O impacto do texto no trabalho"?');
  q18.setChoices([
    q18.createChoice('Permite correções instantâneas, entonação vocal, pausas de respiração e gestos para apoiar a compreensão mútua', false),
    q18.createChoice('Exige objetividade, clareza absoluta, vocabulário formal e neutralidade informativa', false),
    q18.createChoice('No ambiente profissional contemporâneo, a maioria das decisões diárias circula por escrito em e-mails, relatórios, atas e comunicados corporativos', true),
    q18.createChoice('Comunicação escrita com clareza, coesão e impacto no ambiente corporativo', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "O poderoso Método STAR"?');
  q19.setChoices([
    q19.createChoice('Na aula anterior, estudamos o preparo para processos seletivos. Em entrevistas de emprego, a clareza verbal reflete organização mental prévia', false),
    q19.createChoice('Defina em uma frase o que o leitor deve saber ou fazer após ler o texto', false),
    q19.createChoice('A implementação da coleta seletiva na unidade reduziu em 35% o descarte inadequado', false),
    q19.createChoice('O método STAR é a fórmula perfeita para narrar experiências: Situação (contexto), Tarefa (desafio colocado), Ação (sua iniciativa prática) e Resultado (impacto...', true)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Segundo a aula, o que é "Ação"?');
  q20.setChoices([
    q20.createChoice('Demonstra rigor técnico, organização de ideias e respeito pelo leitor', false),
    q20.createChoice('Conduzem o leitor sem solavancos de uma ideia à seguinte', false),
    q20.createChoice('Ligação gramatical entre frases e palavras com conectivos precisos', false),
    q20.createChoice('as medidas práticas tomadas pelo candidato', true)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 03 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 03 — Estruturação de Textos Profissionais');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula03() {
  var form = FormApp.openByTitle('Avaliação — Aula 03 · Estruturação de Textos Profissionais · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 03: Estruturação de Textos Profissionais');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Estruturação de Textos Profissionais', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos de aprendizagem', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'a costura do texto', 'o sentido global', 'Unidade textual básica em torno de uma ideia central condutora.', 'Organização lógica das ideias para orientar o leitor com clareza.', 'Método STAR', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 04
// ════════════════════════════════════════════════════════════

function criarFormularioAula04() {
  var form = FormApp.create('Avaliação — Aula 04 · Correção Gramatical Aplicada ao Trabalho · SENAI');

  form.setDescription( 'Avaliação Completa: Correção Gramatical Aplicada ao Trabalho\n\nAula 04 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Correção Gramatical Aplicada ao Trabalho');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Acentuação Gráfica"?');
  q1.setChoices([
    q1.createChoice('O Acordo Ortográfico eliminou acentos que muitos profissionais ainda usam por desatenção', true),
    q1.createChoice('Adjetivos concordam em gênero e número com o substantivo a que se referem', false),
    q1.createChoice('Use além disso, ademais ou outrossim para somar argumentos sem cansar o leitor com repetições', false),
    q1.createChoice('O verbo concorda em número (singular/plural) e pessoa com o núcleo do sujeito, mesmo com palavras intermediárias intercaladas', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Anexo, incluso e obrigado"?');
  q2.setChoices([
    q2.createChoice('Perceba a ausência de vírgula no vocativo, erro de concordância em anexo, crase indevida em à vista (locução feminina tem crase, mas atenção às combinações) e...', false),
    q2.createChoice('Adjetivos concordam em gênero e número com o substantivo a que se referem', true),
    q2.createChoice('Relação de dependência e preposição exigida por um verbo', false),
    q2.createChoice('Quando nos comunicamos no ambiente de trabalho, o texto representa nossa postura profissional e a própria organização', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Segundo a aula, o que é "Concordância"?');
  q3.setChoices([
    q3.createChoice('Ajuste harmônico de flexão entre termos da frase', true),
    q3.createChoice('Regras formais para a escrita pública oficial', false),
    q3.createChoice('Frases bem construídas reduzem e-mails desnecessários de esclarecimento', false),
    q3.createChoice('Clientes e líderes confiam mais em dados apresentados sem falhas gramaticais', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Pontuação"?');
  q4.setChoices([
    q4.createChoice('Apresente a informação principal na primeira frase', false),
    q4.createChoice('Sinais que organizam pausas e sentidos das orações', true),
    q4.createChoice('Sem acento circunflexo: leem, veem, voo (e não *vôo)', false),
    q4.createChoice('Regras formais para a escrita pública oficial', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Segundo a aula, o que é "Desenvolvimento"?');
  q5.setChoices([
    q5.createChoice('Os relatórios financeiros do trimestre passado revelaram alta', false),
    q5.createChoice('Traga dados, justificativas e exemplos em seguida', true),
    q5.createChoice('Conecte a frase seguinte por meio de pronomes ou conjunções', false),
    q5.createChoice('Perderam o acento: ideia, assembleia, coreia (e não *idéia)', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "A Vírgula no Trabalho"?');
  q6.setChoices([
    q6.createChoice('Sempre grafados separadamente. Evite aglutinações inadequadas', false),
    q6.createChoice('Nunca coloque vírgula entre quem realiza a ação e a própria ação, por mais longa que a frase pareça', true),
    q6.createChoice('Por que para perguntas e motivos. Porque para respostas explicativas', false),
    q6.createChoice('Adjetivos concordam em gênero e número com o substantivo a que se referem', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Qual conceito a aula define como: "Traga dados, justificativas e exemplos em seguida"?');
  q7.setChoices([
    q7.createChoice('Incorreto', false),
    q7.createChoice('Pontuação', false),
    q7.createChoice('Desenvolvimento', true),
    q7.createChoice('Confiança imediata', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "Coesão e Coerência"?');
  q8.setChoices([
    q8.createChoice('Use contudo, entretanto ou não obstante quando for necessário pontuar divergências com elegância', false),
    q8.createChoice('Um texto profissional precisa ser uma ponte sólida. A coesão é a costura gramatical (pronomes, conectivos e pontuação), enquanto a coerência é a lógica interna que...', true),
    q8.createChoice('Use além disso, ademais ou outrossim para somar argumentos sem cansar o leitor com repetições', false),
    q8.createChoice('Em documentos de trabalho, cada parágrafo deve girar em torno de uma ideia central declarada claramente no início: o tópico frasal', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Concordância Verbal"?');
  q9.setChoices([
    q9.createChoice('Alguns verbos alteram totalmente de significado no meio corporativo caso recebam ou dispensem preposição', false),
    q9.createChoice('Quando nos comunicamos no ambiente de trabalho, o texto representa nossa postura profissional e a própria organização', false),
    q9.createChoice('Separe itens extensos de uma listagem em propostas ou orações já divididas internamente por vírgulas', false),
    q9.createChoice('O verbo concorda em número (singular/plural) e pessoa com o núcleo do sujeito, mesmo com palavras intermediárias intercaladas', true)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Segundo a aula, o que é "Regência"?');
  q10.setChoices([
    q10.createChoice('Sem acento circunflexo: leem, veem, voo (e não *vôo)', false),
    q10.createChoice('Relação em que um termo exige preposição própria', true),
    q10.createChoice('Ajuste harmônico de flexão entre termos da frase', false),
    q10.createChoice('Permanece em pôde (passado) vs. pode (presente) e no verbo pôr', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. Segundo a aula, o que é "Objetividade"?');
  q11.setChoices([
    q11.createChoice('Perderam o acento: ideia, assembleia, coreia (e não *idéia)', false),
    q11.createChoice('Os relatórios financeiros do trimestre passado, revelaram alta', false),
    q11.createChoice('Frases bem construídas reduzem e-mails desnecessários de esclarecimento', true),
    q11.createChoice('Sinais que organizam pausas e sentidos das orações', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Qual conceito a aula define como: "Sinais que organizam pausas e sentidos das orações"?');
  q12.setChoices([
    q12.createChoice('Universalidade', false),
    q12.createChoice('Confiança imediata', false),
    q12.createChoice('Correto', false),
    q12.createChoice('Pontuação', true)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. Segundo a aula, o que é "Confiança imediata"?');
  q13.setChoices([
    q13.createChoice('Relação em que um termo exige preposição própria', false),
    q13.createChoice('Clientes e líderes confiam mais em dados apresentados sem falhas gramaticais', true),
    q13.createChoice('Evita gírias regionais que podem ser mal interpretadas em equipes diversas', false),
    q13.createChoice('Conecte a frase seguinte por meio de pronomes ou conjunções', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "Vogais duplicadas"?');
  q14.setChoices([
    q14.createChoice('Relação em que um termo exige preposição própria', false),
    q14.createChoice('Perderam o acento: ideia, assembleia, coreia (e não *idéia)', false),
    q14.createChoice('Sem acento circunflexo: leem, veem, voo (e não *vôo)', true),
    q14.createChoice('Os relatórios financeiros do trimestre passado revelaram alta', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Contraste e Ressalva"?');
  q15.setChoices([
    q15.createChoice('Use portanto, por conseguinte ou dessa forma para consolidar decisões e próximos passos', false),
    q15.createChoice('Use contudo, entretanto ou não obstante quando for necessário pontuar divergências com elegância', true),
    q15.createChoice('Em documentos de trabalho, cada parágrafo deve girar em torno de uma ideia central declarada claramente no início: o tópico frasal', false),
    q15.createChoice('Um texto profissional precisa ser uma ponte sólida. A coesão é a costura gramatical (pronomes, conectivos e pontuação), enquanto a coerência é a lógica interna que...', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Qual conceito a aula define como: "Os relatórios financeiros do trimestre passado, revelaram alta"?');
  q16.setChoices([
    q16.createChoice('Incorreto', true),
    q16.createChoice('Regência', false),
    q16.createChoice('Confiança imediata', false),
    q16.createChoice('Declaração direta', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. Qual conceito a aula define como: "Perderam o acento: ideia, assembleia, coreia (e não *idéia)"?');
  q17.setChoices([
    q17.createChoice('Concordância', false),
    q17.createChoice('Ditongos abertos em paroxítonas', true),
    q17.createChoice('Desenvolvimento', false),
    q17.createChoice('Pontuação', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Correto"?');
  q18.setChoices([
    q18.createChoice('Permanece em pôde (passado) vs. pode (presente) e no verbo pôr', false),
    q18.createChoice('Clientes e líderes confiam mais em dados apresentados sem falhas gramaticais', false),
    q18.createChoice('Os relatórios financeiros do trimestre passado revelaram alta', true),
    q18.createChoice('Evita gírias regionais que podem ser mal interpretadas em equipes diversas', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "E-mails Corporativos Reais"?');
  q19.setChoices([
    q19.createChoice('Assim como os verbos, certos substantivos e adjetivos exigem preposições fixas para ligar seus complementos', false),
    q19.createChoice('Separe itens extensos de uma listagem em propostas ou orações já divididas internamente por vírgulas', false),
    q19.createChoice('Por que para perguntas e motivos. Porque para respostas explicativas', false),
    q19.createChoice('Perceba a ausência de vírgula no vocativo, erro de concordância em anexo, crase indevida em à vista (locução feminina tem crase, mas atenção às combinações) e...', true)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Qual conceito a aula define como: "Clientes e líderes confiam mais em dados apresentados sem falhas gramaticais"?');
  q20.setChoices([
    q20.createChoice('Vogais duplicadas', false),
    q20.createChoice('Confiança imediata', true),
    q20.createChoice('Ditongos abertos em paroxítonas', false),
    q20.createChoice('Desenvolvimento', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 04 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 04 — Correção Gramatical Aplicada ao Trabalho');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula04() {
  var form = FormApp.openByTitle('Avaliação — Aula 04 · Correção Gramatical Aplicada ao Trabalho · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 04: Correção Gramatical Aplicada ao Trabalho');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Correção Gramatical Aplicada ao Trabalho', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', '“Não vamos cobrar taxa adicional”, mas esquecer o acento ou trocar uma vírgula de lugar, alterando o', 'Regras formais para a escrita pública oficial.', 'Sinais que organizam pausas e sentidos das orações.', 'Ajuste harmônico de flexão entre termos da frase.', 'Relação em que um termo exige preposição própria.', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 05
// ════════════════════════════════════════════════════════════


function criarFormularioAula05() {
  var form = FormApp.create('Avaliação — Aula 05 · Formatação e Padronização de Documentos Apresentação visual e clareza na escrita formal · SENAI');

  form.setDescription( 'Avaliação Completa: Formatação e Padronização de Documentos Apresentação visual e clareza na escrita formal\n\nAula 05 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Formatação e Padronização de Documentos Apresentação visual e clareza na escrita formal');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. Qual conceito a aula define como: "preparam o leitor para citações, listagens ou conclusões"?');
  q1.setChoices([
    q1.createChoice('Dois-pontos', true),
    q1.createChoice('Layout', false),
    q1.createChoice('Vossa Excelência', false),
    q1.createChoice('Itálico', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Estudo de Caso: O Comunicado Escolar"?');
  q2.setChoices([
    q2.createChoice('Na aula anterior, estudamos correção gramatical. Antes de pensar no visual, o texto deve estar impecável', false),
    q2.createChoice('Documentos bem formatados perdem credibilidade se houver falhas de concordância', false),
    q2.createChoice('O formato PDF foi criado para assegurar que um documento seja impresso e visualizado de forma idêntica em qualquer dispositivo ou sistema operacional', false),
    q2.createChoice('O Grêmio Estudantil precisa enviar um comunicado para toda a escola sobre as eleições', true)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Segundo a aula, o que é "Prevenção de erros"?');
  q3.setChoices([
    q3.createChoice('estilos de parágrafo vêm travados com medidas recomendadas', true),
    q3.createChoice('Times New Roman, Georgia. Possuem pequenos traços (serifas) nas pontas; excelentes para livros impressos', false),
    q3.createChoice('forma cordial e amplamente aceita no ambiente corporativo privado', false),
    q3.createChoice('organiza termos de mesma função sintática', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Qual conceito a aula define como: "palavras estrangeiras (ex.: feedback, compliance), títulos de obras ou termos técnicos específicos"?');
  q4.setChoices([
    q4.createChoice('Dois-pontos', false),
    q4.createChoice('Itálico', true),
    q4.createChoice('Hierarquia', false),
    q4.createChoice('Ponto e vírgula', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "Acessibilidade Visual em Textos Longos"?');
  q5.setChoices([
    q5.createChoice('Margens simétricas de 2 cm a 2,5 cm em todas as bordas', false),
    q5.createChoice('Versões diferentes de editores trocam fontes não instaladas e quebram quebras de linha e tabelas', false),
    q5.createChoice('Linhas com 60 a 80 caracteres são ideais. Linhas excessivamente longas fazem o leitor se perder ao mudar de linha', true),
    q5.createChoice('Identifica a empresa ou setor emissor. Posiciona-se sempre no topo, centralizado ou à esquerda', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Segundo a aula, o que é "Hierarquia"?');
  q6.setChoices([
    q6.createChoice('enviaram uma foto de um texto digitado no bloco de notas do celular', false),
    q6.createChoice('Níveis visuais entre títulos, subtítulos e texto', true),
    q6.createChoice('a primeira linha de um parágrafo que fica isolada no final de uma página', false),
    q6.createChoice('a última linha de um parágrafo que passa sozinha para o topo da página seguinte', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Segundo a aula, o que é "A maioria dos colaboradores"?');
  q7.setChoices([
    q7.createChoice('empregado para autoridades de hierarquia superior à de quem assina (inclusive o Presidente da República)', false),
    q7.createChoice('estilos de parágrafo vêm travados com medidas recomendadas', false),
    q7.createChoice('moderno, muito usado em relatórios corporativos e na web por manter espaçamento uniforme entre palavras', false),
    q7.createChoice('aceita verbo no singular ou no plural (concordância atrativa)', true)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "Destaques: Negrito, Itálico e Sublinhado"?');
  q8.setChoices([
    q8.createChoice('Destaques servem para guiar o olhar. Se tudo estiver destacado, nada se destaca', true),
    q8.createChoice('Documentos bem formatados perdem credibilidade se houver falhas de concordância', false),
    q8.createChoice('Empresas e escolas utilizam templates (modelos prontos) para garantir que ninguém precise recriar estilos do zero', false),
    q8.createChoice('Na aula anterior, estudamos correção gramatical. Antes de pensar no visual, o texto deve estar impecável', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Padronização Institucional de Documentos"?');
  q9.setChoices([
    q9.createChoice('Esses manuais definem regras para pronomes de tratamento, formatação de cabeçalhos, vocativos e estruturas formais, garantindo uniformidade em toda a comunicação...', true),
    q9.createChoice('Fontes com caracteres bem distintos (como Arial, Verdana ou Lexend) auxiliam pessoas com dislexia ou baixa visão', false),
    q9.createChoice('Use quando houver sequência obrigatória ou hierarquia: etapas de um processo, instruções de manual ou prioridades', false),
    q9.createChoice('Organize os elementos estruturais de uma carta de solicitação oficial na ordem correta de cima para baixo', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Segundo a aula, o que é "Respeitosamente"?');
  q10.setChoices([
    q10.createChoice('empregado para autoridades de hierarquia superior à de quem assina (inclusive o Presidente da República)', true),
    q10.createChoice('ideal para separar itens longos em listas numeradas', false),
    q10.createChoice('Distribuição dos elementos na área de leitura', false),
    q10.createChoice('estilos de parágrafo vêm travados com medidas recomendadas', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Identidade Visual e Organização Espacial"?');
  q11.setChoices([
    q11.createChoice('Esses manuais definem regras para pronomes de tratamento, formatação de cabeçalhos, vocativos e estruturas formais, garantindo uniformidade em toda a comunicação...', false),
    q11.createChoice('Use quando a ordem dos itens não importa: listas de materiais, vantagens, participantes ou tópicos de discussão', false),
    q11.createChoice('O Manual da Presidência simplificou os fechos de documentos em duas únicas modalidades', false),
    q11.createChoice('Espaço em branco não é desperdício de papel: é área de respiro para os olhos. Um layout equilibrado separa tópicos, conduz o olhar e reduz a fadiga visual durante a...', true)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "O Risco de Enviar Arquivos Editáveis"?');
  q12.setChoices([
    q12.createChoice('Fontes manuscritas ou góticas devem ser evitadas em textos formais. Dificultam a leitura rápida', false),
    q12.createChoice('Empresas e escolas utilizam templates (modelos prontos) para garantir que ninguém precise recriar estilos do zero', false),
    q12.createChoice('Versões diferentes de editores trocam fontes não instaladas e quebram quebras de linha e tabelas', true),
    q12.createChoice('Na aula anterior, estudamos correção gramatical. Antes de pensar no visual, o texto deve estar impecável', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. Segundo a aula, o que é "Alinhado à esquerda"?');
  q13.setChoices([
    q13.createChoice('enviaram uma foto de um texto digitado no bloco de notas do celular', false),
    q13.createChoice('organiza termos de mesma função sintática', false),
    q13.createChoice('moderno, muito usado em relatórios corporativos e na web por manter espaçamento uniforme entre palavras', true),
    q13.createChoice('alinha ambas as margens, comum em normas formais (cuidado com grandes espaços vazios entre palavras)', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "Linha Viúva"?');
  q14.setChoices([
    q14.createChoice('a última linha de um parágrafo que passa sozinha para o topo da página seguinte', true),
    q14.createChoice('uso de papel timbrado da escola, títulos destacados e exportação em PDF via mural', false),
    q14.createChoice('11 a 12 pt. Notas de rodapé e legendas: 10 pt. Títulos: 14 a 18 pt', false),
    q14.createChoice('empregado para autoridades de hierarquia superior à de quem assina (inclusive o Presidente da República)', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Segundo a aula, o que é "Padronização"?');
  q15.setChoices([
    q15.createChoice('Distribuição dos elementos na área de leitura', false),
    q15.createChoice('forma cordial e amplamente aceita no ambiente corporativo privado', false),
    q15.createChoice('Regras unificadas para consistência institucional', true),
    q15.createChoice('a primeira linha de um parágrafo que fica isolada no final de uma página', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Qual conceito a aula define como: "enviaram uma foto de um texto digitado no bloco de notas do celular"?');
  q16.setChoices([
    q16.createChoice('Atenciosamente', false),
    q16.createChoice('Problema inicial', true),
    q16.createChoice('Formatação', false),
    q16.createChoice('Prezado(a) Senhor(a)', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. Segundo a aula, o que é "Vossa Excelência"?');
  q17.setChoices([
    q17.createChoice('empregado para autoridades de mesma hierarquia ou de nível inferior, e nas relações corporativas comuns', false),
    q17.createChoice('reduz alterações acidentais no texto por terceiros', false),
    q17.createChoice('para chefes de poderes executivo, legislativo e judiciário', true),
    q17.createChoice('forma cordial e amplamente aceita no ambiente corporativo privado', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Qual conceito a aula define como: "11 a 12 pt. Notas de rodapé e legendas: 10 pt. Títulos: 14 a 18 pt"?');
  q18.setChoices([
    q18.createChoice('Corpo de texto', true),
    q18.createChoice('Inalterabilidade visual', false),
    q18.createChoice('Vossa Senhoria', false),
    q18.createChoice('Produtividade', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Qual conceito a aula define como: "organiza termos de mesma função sintática"?');
  q19.setChoices([
    q19.createChoice('Vírgula em enumerações', true),
    q19.createChoice('Prevenção de erros', false),
    q19.createChoice('Padronização', false),
    q19.createChoice('Exemplos', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "Análise de Vocativos e Tratamentos"?');
  q20.setChoices([
    q20.createChoice('Documentos bem formatados perdem credibilidade se houver falhas de concordância', false),
    q20.createChoice('Área central onde a mensagem ou relatório é detalhadamente exposto', false),
    q20.createChoice('Fontes manuscritas ou góticas devem ser evitadas em textos formais. Dificultam a leitura rápida', false),
    q20.createChoice('Em documentos oficiais e corporativos, o vocativo demonstra respeito à função do destinatário', true)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 05 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 05 — Formatação e Padronização de Documentos Apresentação visual e clareza na escrita formal');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula05() {
  var form = FormApp.openByTitle('Avaliação — Aula 05 · Formatação e Padronização de Documentos Apresentação visual e clareza na escrita formal · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 05: Formatação e Padronização de Documentos Apresentação visual e clareza na escrita formal');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Formatação e Padronização de Documentos Apresentação visual e clareza na escrita formal', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos da Nossa Aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'aplicar margens, fontes institucionais, espaçamentos e alinhamentos corretos.', 'usar títulos, subtítulos, ênfases e listas com intencionalidade clara.', 'produzir documentos limpos e salvá-los com segurança em formato PDF.', 'Ajuste visual de fontes, margens e parágrafos.', 'Regras unificadas para consistência institucional.', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 06
// ════════════════════════════════════════════════════════════


function criarFormularioAula06() {
  var form = FormApp.create('Avaliação — Aula 06 · Redação de E-mails Corporativos Comunicação escrita eficaz e profissional no ambiente de trabalho · SENAI');

  form.setDescription( 'Avaliação Completa: Redação de E-mails Corporativos Comunicação escrita eficaz e profissional no ambiente de trabalho\n\nAula 06 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Redação de E-mails Corporativos Comunicação escrita eficaz e profissional no ambiente de trabalho');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Prazos e Entregas"?');
  q1.setChoices([
    q1.createChoice('Um e-mail eficiente responde rapidamente a três perguntas que o leitor faz inconscientemente', false),
    q1.createChoice('Organize os elementos abaixo na sequência lógica de um e-mail profissional', false),
    q1.createChoice('Protege a privacidade ao enviar para múltiplos destinatários externos', false),
    q1.createChoice('Envio de relatórios, arquivos pesados e alinhamento de cronogramas', true)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Verificação de Etiqueta Corporativa"?');
  q2.setChoices([
    q2.createChoice('Assunto vago, gírias inapropriadas, sem especificação de documento ou prazo e sem assinatura', false),
    q2.createChoice('Protege a privacidade ao enviar para múltiplos destinatários externos', false),
    q2.createChoice('Isso polui desnecessariamente a caixa de entrada de 49 pessoas que não precisam dessa confirmação', true),
    q2.createChoice('Um e-mail eficiente responde rapidamente a três perguntas que o leitor faz inconscientemente', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "CCO (Cópia Oculta)"?');
  q3.setChoices([
    q3.createChoice('Um e-mail eficiente responde rapidamente a três perguntas que o leitor faz inconscientemente', false),
    q3.createChoice('Pessoas incluídas apenas para acompanhamento e ciência do tema', true),
    q3.createChoice('Diferente de aplicativos de mensagens instantâneas, o e-mail corporativo funciona como um registro oficial e documental de acordos e decisões', false),
    q3.createChoice('Pessoas que precisam acompanhar o assunto por ciência, sem obrigação de responder diretamente à mensagem', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. De acordo com a aula, o que caracteriza "O Poder do Assunto"?');
  q4.setChoices([
    q4.createChoice('O campo Assunto define se o seu e-mail será aberto agora, arquivado ou ignorado', true),
    q4.createChoice('Enviar mensagens sob estresse emocional gera registros irreversíveis', false),
    q4.createChoice('Na próxima aula, daremos um passo além na escrita profissional: aprenderemos a estruturar Relatórios Técnicos com precisão e síntese', false),
    q4.createChoice('A assinatura institucional comprova a legitimidade do emissor e facilita o contato imediato', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "PADRÃO CORPORATIVO"?');
  q5.setChoices([
    q5.createChoice('Isso polui desnecessariamente a caixa de entrada de 49 pessoas que não precisam dessa confirmação', false),
    q5.createChoice('O campo Assunto define se o seu e-mail será aberto agora, arquivado ou ignorado', false),
    q5.createChoice('A assinatura institucional comprova a legitimidade do emissor e facilita o contato imediato', true),
    q5.createChoice('Na aula anterior, estudamos como a hierarquia visual orienta os olhos do leitor por títulos, tópicos e espaçamentos equilibrados', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "A Anatomia do Corpo do E-mail"?');
  q6.setChoices([
    q6.createChoice('Um e-mail eficiente responde rapidamente a três perguntas que o leitor faz inconscientemente', true),
    q6.createChoice('Diferente de aplicativos de mensagens instantâneas, o e-mail corporativo funciona como um registro oficial e documental de acordos e decisões', false),
    q6.createChoice('Assunto vago, gírias inapropriadas, sem especificação de documento ou prazo e sem assinatura', false),
    q6.createChoice('Contato com clientes, fornecedores e parceiros institucionais', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. De acordo com a aula, o que caracteriza "Evite para Imediato"?');
  q7.setChoices([
    q7.createChoice('Na próxima aula, daremos um passo além na escrita profissional: aprenderemos a estruturar Relatórios Técnicos com precisão e síntese', false),
    q7.createChoice('Organize os elementos abaixo na sequência lógica de um e-mail profissional', false),
    q7.createChoice('Para dúvidas de resposta em 2 minutos, use chat corporativo ou ligação', true),
    q7.createChoice('Diferente de aplicativos de mensagens instantâneas, o e-mail corporativo funciona como um registro oficial e documental de acordos e decisões', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "Comparativo: Para vs. CC"?');
  q8.setChoices([
    q8.createChoice('Diferente de aplicativos de mensagens instantâneas, o e-mail corporativo funciona como um registro oficial e documental de acordos e decisões', false),
    q8.createChoice('Contato com clientes, fornecedores e parceiros institucionais', false),
    q8.createChoice('Pessoas que precisam acompanhar o assunto por ciência, sem obrigação de responder diretamente à mensagem', true),
    q8.createChoice('Na aula anterior, estudamos como a hierarquia visual orienta os olhos do leitor por títulos, tópicos e espaçamentos equilibrados', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Registros Formais"?');
  q9.setChoices([
    q9.createChoice('Pessoas incluídas apenas para acompanhamento e ciência do tema', false),
    q9.createChoice('Pessoas que precisam acompanhar o assunto por ciência, sem obrigação de responder diretamente à mensagem', false),
    q9.createChoice('O campo Assunto define se o seu e-mail será aberto agora, arquivado ou ignorado', false),
    q9.createChoice('Formalização de contratos, atas e diretrizes operacionais', true)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "Campos de Destinatários: Para, CC e CCO"?');
  q10.setChoices([
    q10.createChoice('Isso polui desnecessariamente a caixa de entrada de 49 pessoas que não precisam dessa confirmação', false),
    q10.createChoice('O campo Assunto define se o seu e-mail será aberto agora, arquivado ou ignorado', false),
    q10.createChoice('Colocar a pessoa errada no campo inadequado pode sobrecarregar caixas de entrada ou violar leis de privacidade de dados (como a LGPD)', true),
    q10.createChoice('Envio de relatórios, arquivos pesados e alinhamento de cronogramas', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Falhas Graves"?');
  q11.setChoices([
    q11.createChoice('Envio de relatórios, arquivos pesados e alinhamento de cronogramas', false),
    q11.createChoice('Na aula anterior, estudamos como a hierarquia visual orienta os olhos do leitor por títulos, tópicos e espaçamentos equilibrados', false),
    q11.createChoice('Assunto vago, gírias inapropriadas, sem especificação de documento ou prazo e sem assinatura', true),
    q11.createChoice('Para agradecimentos ou dúvidas individuais, responda apenas ao remetente original', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Recapitulação: Hierarquia Visual"?');
  q12.setChoices([
    q12.createChoice('Diferente de aplicativos de mensagens instantâneas, o e-mail corporativo funciona como um registro oficial e documental de acordos e decisões', false),
    q12.createChoice('Na aula anterior, estudamos como a hierarquia visual orienta os olhos do leitor por títulos, tópicos e espaçamentos equilibrados', true),
    q12.createChoice('Assunto vago, gírias inapropriadas, sem especificação de documento ou prazo e sem assinatura', false),
    q12.createChoice('A assinatura institucional comprova a legitimidade do emissor e facilita o contato imediato', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Vocativo e Saudação Inicial"?');
  q13.setChoices([
    q13.createChoice('A saudação estabelece a conexão interpessoal e o grau correto de respeito na hierarquia profissional', true),
    q13.createChoice('Pessoas incluídas apenas para acompanhamento e ciência do tema', false),
    q13.createChoice('Pessoas que precisam acompanhar o assunto por ciência, sem obrigação de responder diretamente à mensagem', false),
    q13.createChoice('Informa urgência ou data limite. Ex: Aprovação até 15/10', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Comunicação Externa"?');
  q14.setChoices([
    q14.createChoice('Envio de relatórios, arquivos pesados e alinhamento de cronogramas', false),
    q14.createChoice('Contato com clientes, fornecedores e parceiros institucionais', true),
    q14.createChoice('A assinatura institucional comprova a legitimidade do emissor e facilita o contato imediato', false),
    q14.createChoice('Protege a privacidade ao enviar para múltiplos destinatários externos', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Prazo ou Versão"?');
  q15.setChoices([
    q15.createChoice('Pessoas que precisam acompanhar o assunto por ciência, sem obrigação de responder diretamente à mensagem', false),
    q15.createChoice('Protege a privacidade ao enviar para múltiplos destinatários externos', false),
    q15.createChoice('Informa urgência ou data limite. Ex: Aprovação até 15/10', true),
    q15.createChoice('Para dúvidas de resposta em 2 minutos, use chat corporativo ou ligação', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "O Risco do "Responder a Todos""?');
  q16.setChoices([
    q16.createChoice('Para agradecimentos ou dúvidas individuais, responda apenas ao remetente original', true),
    q16.createChoice('Colocar a pessoa errada no campo inadequado pode sobrecarregar caixas de entrada ou violar leis de privacidade de dados (como a LGPD)', false),
    q16.createChoice('A saudação estabelece a conexão interpessoal e o grau correto de respeito na hierarquia profissional', false),
    q16.createChoice('Pessoas que precisam acompanhar o assunto por ciência, sem obrigação de responder diretamente à mensagem', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "CC (Com Cópia)"?');
  q17.setChoices([
    q17.createChoice('Protege a privacidade ao enviar para múltiplos destinatários externos', true),
    q17.createChoice('Informa urgência ou data limite. Ex: Aprovação até 15/10', false),
    q17.createChoice('Contato com clientes, fornecedores e parceiros institucionais', false),
    q17.createChoice('A assinatura institucional comprova a legitimidade do emissor e facilita o contato imediato', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "Campo "Para" (To)"?');
  q18.setChoices([
    q18.createChoice('Organize os elementos abaixo na sequência lógica de um e-mail profissional', false),
    q18.createChoice('Destinatário principal. A pessoa de quem se espera a resposta direta ou a execução da tarefa solicitada', true),
    q18.createChoice('Informa urgência ou data limite. Ex: Aprovação até 15/10', false),
    q18.createChoice('Assunto vago, gírias inapropriadas, sem especificação de documento ou prazo e sem assinatura', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "CONCEITO-CHAVE"?');
  q19.setChoices([
    q19.createChoice('Diferente de aplicativos de mensagens instantâneas, o e-mail corporativo funciona como um registro oficial e documental de acordos e decisões', true),
    q19.createChoice('A assinatura institucional comprova a legitimidade do emissor e facilita o contato imediato', false),
    q19.createChoice('Pessoas incluídas apenas para acompanhamento e ciência do tema', false),
    q19.createChoice('Informa urgência ou data limite. Ex: Aprovação até 15/10', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "Responder com Raiva"?');
  q20.setChoices([
    q20.createChoice('Pessoas incluídas apenas para acompanhamento e ciência do tema', false),
    q20.createChoice('Envio de relatórios, arquivos pesados e alinhamento de cronogramas', false),
    q20.createChoice('A assinatura institucional comprova a legitimidade do emissor e facilita o contato imediato', false),
    q20.createChoice('Enviar mensagens sob estresse emocional gera registros irreversíveis', true)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 06 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 06 — Redação de E-mails Corporativos Comunicação escrita eficaz e profissional no ambiente de trabalho');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula06() {
  var form = FormApp.openByTitle('Avaliação — Aula 06 · Redação de E-mails Corporativos Comunicação escrita eficaz e profissional no ambiente de trabalho · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 06: Redação de E-mails Corporativos Comunicação escrita eficaz e profissional no ambiente de trabalho');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Redação de E-mails Corporativos Comunicação escrita eficaz e profissional no ambiente de trabalho', 'É um conceito importante apresentado na aula', 'Você abriria esta mensagem?', 'É um conceito importante apresentado na aula', 'Objetivos de Aprendizagem', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Hierarquia Visual', 'Normas de Apresentação Textual', 'Qual é a principal função da hierarquia visual em textos corporativos?', 'Por que devemos evitar parágrafos excessivamente longos em telas?', 'Como o negrito deve ser empregado em documentos formais?', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 07
// ════════════════════════════════════════════════════════════


function criarFormularioAula07() {
  var form = FormApp.create('Avaliação — Aula 07 · Elaboração de Relatórios Técnicos Estrutura, objetividade e análise prática no mundo profissional · SENAI');

  form.setDescription( 'Avaliação Completa: Elaboração de Relatórios Técnicos Estrutura, objetividade e análise prática no mundo profissional\n\nAula 07 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Elaboração de Relatórios Técnicos Estrutura, objetividade e análise prática no mundo profissional');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Finalidade do relatório nas organizações"?');
  q1.setChoices([
    q1.createChoice('Deve sugerir alternativas escalonadas (ex.: reparo ou troca em 60 dias)', false),
    q1.createChoice('Identificação da Caldeira B-04, do setor térmico e da solicitação de vistoria preventiva', false),
    q1.createChoice('Subsidia gestores com dados sólidos para aprovar investimentos ou interromper riscos', true),
    q1.createChoice('O desenvolvimento é a parte mais volumosa do documento. É aqui que os dados brutos são organizados, descritos e analisados com profundidade técnica', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Objetividade"?');
  q2.setChoices([
    q2.createChoice('Comprova conformidade com leis ambientais, trabalhistas e normas regulamentadoras', false),
    q2.createChoice('Uma conclusão técnica bem elaborada não encerra o assunto no vazio: ela estabelece as bases lógicas para as medidas corretivas que a organização deve adotar', false),
    q2.createChoice('Toda afirmação deve remeter a uma fonte verificável: um teste de laboratório, uma medição ou uma norma oficial da ABNT', true),
    q2.createChoice('Nós vimos que a tubulação estava quase explodindo devido ao excesso absurdo de vapor', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Segundo a aula, o que é "Nexo causal"?');
  q3.setChoices([
    q3.createChoice('Comparação de resultados com metas de projeto ou limites regulamentares', false),
    q3.createChoice('Exame da correlação entre variáveis (ex.: aumento de temperatura x queda de tensão)', false),
    q3.createChoice('Destinatários invisíveis para os demais. Preserva a privacidade em listas externas ou registra envios com confidencialidade', false),
    q3.createChoice('Justificativa direta em dados e fatos apresentados', true)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. De acordo com a aula, o que caracteriza "Identificando as partes no laudo da caldeira"?');
  q4.setChoices([
    q4.createChoice('Verifique se o seu texto utilizou verbos impessoais, apresentou os números com clareza e encerrou com uma solução prática', false),
    q4.createChoice('Nesta seção, listam-se detalhadamente os instrumentos de medição utilizados, o período exato das coletas e os critérios de amostragem adotados', false),
    q4.createChoice('O desenvolvimento é a parte mais volumosa do documento. É aqui que os dados brutos são organizados, descritos e analisados com profundidade técnica', false),
    q4.createChoice('Identificação da Caldeira B-04, do setor térmico e da solicitação de vistoria preventiva', true)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Segundo a aula, o que é "Organização visual"?');
  q5.setChoices([
    q5.createChoice('Comparação de resultados com metas de projeto ou limites regulamentares', false),
    q5.createChoice('Uso mandatório de gráficos, tabelas e fluxogramas para tornar os padrões visíveis de imediato', true),
    q5.createChoice('Documento formal que expõe fatos apurados e conclusões técnicas', false),
    q5.createChoice('data explícita, número do equipamento, medida em milímetros e menção exata à norma regulamentadora que rege a segurança', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Qual conceito a aula define como: "Durante a semana de provas eletrônicas, o sinal Wi-Fi caiu 6 vezes. Você foi escalado para elaborar a síntese técnica para a diretoria"?');
  q6.setChoices([
    q6.createChoice('Imagine a situação', true),
    q6.createChoice('CCO (Cópia Oculta)', false),
    q6.createChoice('CC (Cópia Carbono)', false),
    q6.createChoice('Relatório', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Segundo a aula, o que é "Introdução"?');
  q7.setChoices([
    q7.createChoice('delimitação do problema e objetivos da análise', true),
    q7.createChoice('Exame da correlação entre variáveis (ex.: aumento de temperatura x queda de tensão)', false),
    q7.createChoice('Destinatário principal, responsável direto pela resposta ou ação solicitada', false),
    q7.createChoice('Comparação de resultados com metas de projeto ou limites regulamentares', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "Indicação de fonte"?');
  q8.setChoices([
    q8.createChoice('Abaixo da figura, registre sempre a procedência (ex.: Fonte: Laboratório de Metrologia (2026))', true),
    q8.createChoice('Nós vimos que a tubulação estava quase explodindo devido ao excesso absurdo de vapor', false),
    q8.createChoice('Ser concisa, específica e informar o tema central do e-mail de imediato (ex.: Relatório Financeiro: Balanço de Outubro)', false),
    q8.createChoice('Com base nos dados da queda de rede (capacidade: 80 acessos; pico real: 210 dispositivos; 6 quedas em 20/03/2026), redija uma Síntese Executiva de 3 a 5 linhas...', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Segundo a aula, o que é "Relatório"?');
  q9.setChoices([
    q9.createChoice('Indicação explícita de responsáveis e urgência', false),
    q9.createChoice('Documento formal que expõe fatos apurados e conclusões técnicas', true),
    q9.createChoice('Durante a semana de provas eletrônicas, o sinal Wi-Fi caiu 6 vezes. Você foi escalado para elaborar a síntese técnica para a diretoria', false),
    q9.createChoice('Destinatários invisíveis para os demais. Preserva a privacidade em listas externas ou registra envios com confidencialidade', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "Redação de Síntese Executiva"?');
  q10.setChoices([
    q10.createChoice('Nós vimos que a tubulação estava quase explodindo devido ao excesso absurdo de vapor', false),
    q10.createChoice('Com base nos dados da queda de rede (capacidade: 80 acessos; pico real: 210 dispositivos; 6 quedas em 20/03/2026), redija uma Síntese Executiva de 3 a 5 linhas...', true),
    q10.createChoice('Todo recurso visual deve ter identificador e legenda superior (ex.: Tabela 1 – Índice de Ruído por Sala)', false),
    q10.createChoice('Um dos maiores equívocos é emitir um diagnóstico ou proposta de solução sem apresentar os dados que justifiquem a medida na seção anterior', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Aplicação da Impessoalidade"?');
  q11.setChoices([
    q11.createChoice('Nós vimos que a tubulação estava quase explodindo devido ao excesso absurdo de vapor', true),
    q11.createChoice('Todo recurso visual deve ter identificador e legenda superior (ex.: Tabela 1 – Índice de Ruído por Sala)', false),
    q11.createChoice('Ser concisa, específica e informar o tema central do e-mail de imediato (ex.: Relatório Financeiro: Balanço de Outubro)', false),
    q11.createChoice('Dado mensurável ou registro material que comprova o fato', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Conclusões técnicas"?');
  q12.setChoices([
    q12.createChoice('A linguagem técnica é estritamente denotativa, ou seja, as palavras são empregadas em seu sentido próprio, literal e de dicionário', false),
    q12.createChoice('Uma conclusão técnica bem elaborada não encerra o assunto no vazio: ela estabelece as bases lógicas para as medidas corretivas que a organização deve adotar', true),
    q12.createChoice('Todo recurso visual deve ter identificador e legenda superior (ex.: Tabela 1 – Índice de Ruído por Sala)', false),
    q12.createChoice('Nesta seção, listam-se detalhadamente os instrumentos de medição utilizados, o período exato das coletas e os critérios de amostragem adotados', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Revisão: A redação no ambiente de trabalho"?');
  q13.setChoices([
    q13.createChoice('Toda afirmação deve remeter a uma fonte verificável: um teste de laboratório, uma medição ou uma norma oficial da ABNT', false),
    q13.createChoice('Todo recurso visual deve ter identificador e legenda superior (ex.: Tabela 1 – Índice de Ruído por Sala)', false),
    q13.createChoice('Uma conclusão técnica bem elaborada não encerra o assunto no vazio: ela estabelece as bases lógicas para as medidas corretivas que a organização deve adotar', false),
    q13.createChoice('Na aula anterior, estudamos os e-mails corporativos. Eles são rápidos e voltados à ação diária. Aprendemos que o assunto deve antecipar o tema sem rodeios e o texto...', true)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "CCO (Cópia Oculta)"?');
  q14.setChoices([
    q14.createChoice('Destinatário principal, responsável direto pela resposta ou ação solicitada', false),
    q14.createChoice('Destinatários invisíveis para os demais. Preserva a privacidade em listas externas ou registra envios com confidencialidade', true),
    q14.createChoice('delimitação do problema e objetivos da análise', false),
    q14.createChoice('Documento formal que expõe fatos apurados e conclusões técnicas', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Etapa 1: A Introdução técnica"?');
  q15.setChoices([
    q15.createChoice('A linguagem técnica é estritamente denotativa, ou seja, as palavras são empregadas em seu sentido próprio, literal e de dicionário', false),
    q15.createChoice('O desenvolvimento é a parte mais volumosa do documento. É aqui que os dados brutos são organizados, descritos e analisados com profundidade técnica', false),
    q15.createChoice('Especifique sempre a marca, o modelo e a data da última calibração dos aparelhos empregados nos testes', false),
    q15.createChoice('A introdução situa o leitor no tempo, no espaço e no motivo da elaboração do documento. Ela deve responder com exatidão: o quê, por quê e para quem', true)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Qual conceito a aula define como: "data explícita, número do equipamento, medida em milímetros e menção exata à norma regulamentadora que rege a segurança"?');
  q16.setChoices([
    q16.createChoice('CC (Cópia Carbono)', false),
    q16.createChoice('Relatório', false),
    q16.createChoice('Prazos e atores', false),
    q16.createChoice('Note a precisão', true)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Checagem de E-mails Corporativos"?');
  q17.setChoices([
    q17.createChoice('Todo recurso visual deve ter identificador e legenda superior (ex.: Tabela 1 – Índice de Ruído por Sala)', false),
    q17.createChoice('Ser concisa, específica e informar o tema central do e-mail de imediato (ex.: Relatório Financeiro: Balanço de Outubro)', true),
    q17.createChoice('Identificação das 6 interrupções ocorridas em 20/03/2026 durante a avaliação bimestral online', false),
    q17.createChoice('Em relatórios corporativos, qualquer dedução sem evidência física ou numérica é desconsiderada. Observe o contraste', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Metodologia"?');
  q18.setChoices([
    q18.createChoice('Justificativa direta em dados e fatos apresentados', false),
    q18.createChoice('Descrição clara dos métodos e passos usados para investigar o caso', true),
    q18.createChoice('data explícita, número do equipamento, medida em milímetros e menção exata à norma regulamentadora que rege a segurança', false),
    q18.createChoice('diagnóstico final e proposições práticas', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Segundo a aula, o que é "Para"?');
  q19.setChoices([
    q19.createChoice('Destinatário principal, responsável direto pela resposta ou ação solicitada', true),
    q19.createChoice('Dado mensurável, fato auditável ou registro que comprova a ocorrência', false),
    q19.createChoice('Documento formal que expõe fatos apurados e conclusões técnicas', false),
    q19.createChoice('Exame da correlação entre variáveis (ex.: aumento de temperatura x queda de tensão)', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Segundo a aula, o que é "Prazos e atores"?');
  q20.setChoices([
    q20.createChoice('Indicação explícita de responsáveis e urgência', true),
    q20.createChoice('Exame da correlação entre variáveis (ex.: aumento de temperatura x queda de tensão)', false),
    q20.createChoice('Postura comunicativa neutra, focada no fato e isenta de opiniões', false),
    q20.createChoice('Destinatário principal, responsável direto pela resposta ou ação solicitada', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 07 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 07 — Elaboração de Relatórios Técnicos Estrutura, objetividade e análise prática no mundo profissional');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula07() {
  var form = FormApp.openByTitle('Avaliação — Aula 07 · Elaboração de Relatórios Técnicos Estrutura, objetividade e análise prática no mundo profissional · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 07: Elaboração de Relatórios Técnicos Estrutura, objetividade e análise prática no mundo profissional');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Elaboração de Relatórios Técnicos Estrutura, objetividade e análise prática no mundo profissional', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Documento formal que expõe fatos apurados e conclusões técnicas.', 'instrumentos, ferramentas e etapas do procedimento.', 'Dado mensurável, fato auditável ou registro que comprova a ocorrência.', 'Postura comunicativa neutra, focada no fato e isenta de opiniões.', 'A redação no ambiente de trabalho', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 08
// ════════════════════════════════════════════════════════════


function criarFormularioAula08() {
  var form = FormApp.create('Avaliação — Aula 08 · Redação de Memorandos e Comunicações Internas Agilidade, clareza e alinhamento na rotina corporativa · SENAI');

  form.setDescription( 'Avaliação Completa: Redação de Memorandos e Comunicações Internas Agilidade, clareza e alinhamento na rotina corporativa\n\nAula 08 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Redação de Memorandos e Comunicações Internas Agilidade, clareza e alinhamento na rotina corporativa');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Excesso de Detalhes"?');
  q1.setChoices([
    q1.createChoice('Todos exigem clareza documental, datação e linguagem objetiva para evitar dúvidas', false),
    q1.createChoice('Algumas pessoas acreditam que escrever bem no trabalho significa usar termos arcaicos ou palavras difíceis que ninguém entende', false),
    q1.createChoice('Textos quilométricos fazem com que o leitor desista da leitura antes de chegar às orientações cruciais', true),
    q1.createChoice('Explique o motivo coletivo das mudanças para que os colaboradores compreendam o benefício do alinhamento', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Segundo a aula, o que é "Registro e Rastreabilidade"?');
  q2.setChoices([
    q2.createChoice('Cria comprovação formal de que um pedido ou aviso foi entregue entre setores', true),
    q2.createChoice('Departamento ou cargo de destino', false),
    q2.createChoice('Aviso oficial voltado para toda a equipe ou empresa', false),
    q2.createChoice('de um departamento para outro específico (ex: RH para Compras)', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "Três Formatos de Comunicação Interna"?');
  q3.setChoices([
    q3.createChoice('Vá direto ao ponto no primeiro parágrafo: indique o fato, a razão e a necessidade da comunicação em uma ou duas frases diretas', false),
    q3.createChoice('Sua missão é redigir um memorando oficial convocando os Líderes de Turma do 8º e 9º Anos para uma reunião de planejamento do Grêmio Estudantil', false),
    q3.createChoice('Texto idêntico distribuído simultaneamente a múltiplos setores para uniformizar uma norma ou instrução geral', true),
    q3.createChoice('O cabeçalho do memorando deve responder imediatamente a quatro perguntas essenciais do leitor', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. De acordo com a aula, o que caracteriza "O Cabeçalho Padrão"?');
  q4.setChoices([
    q4.createChoice('O cabeçalho do memorando deve responder imediatamente a quatro perguntas essenciais do leitor', true),
    q4.createChoice('Trata de demandas práticas entre setores. Exemplo: Solicitação de computadores para a recepção', false),
    q4.createChoice('Demandas formais exigem memorando ou e-mail documentado; mensagens instantâneas perdem o registro oficial', false),
    q4.createChoice('Mesmo ao cobrar tarefas atrasadas ou apontar erros, o texto corporativo mantém a cordialidade e evita ataques pessoais', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "CONCEITO CHAVE"?');
  q5.setChoices([
    q5.createChoice('Diferente de relatórios extensos, sua finalidade principal é acionar: solicitar providências, informar decisões imediatas ou alinhar processos pontuais de forma...', true),
    q5.createChoice('Demandas formais exigem memorando ou e-mail documentado; mensagens instantâneas perdem o registro oficial', false),
    q5.createChoice('Se um termo técnico for indispensável, explique-o brevemente entre parênteses', false),
    q5.createChoice('Quando a gestão demora para avisar sobre mudanças, boatos ocupam o espaço da informação oficial', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Estrutura do Memorando"?');
  q6.setChoices([
    q6.createChoice('Textos curtos, objetivos e bem estruturados economizam tempo, evitam retrabalho e constroem equipes mais alinhadas e colaborativas', false),
    q6.createChoice('O cabeçalho do memorando indica o ____ e o remetente, enquanto o corpo do texto exige ____ para focar diretamente na solicitação principal', true),
    q6.createChoice('Demandas formais exigem memorando ou e-mail documentado; mensagens instantâneas perdem o registro oficial', false),
    q6.createChoice('Quando a gestão demora para avisar sobre mudanças, boatos ocupam o espaço da informação oficial', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. De acordo com a aula, o que caracteriza "Empatia e Cooperação"?');
  q7.setChoices([
    q7.createChoice('Explique o motivo coletivo das mudanças para que os colaboradores compreendam o benefício do alinhamento', true),
    q7.createChoice('Solicitamos o envio dos pedidos até 22/04, às 16h, via formulário eletrônico padrão', false),
    q7.createChoice('Usar termos muito rebuscados e arcaicos torna o memorando mais eficiente e respeitado no ambiente de trabalho', false),
    q7.createChoice('Texto idêntico distribuído simultaneamente a múltiplos setores para uniformizar uma norma ou instrução geral', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Qual conceito a aula define como: "de um departamento para outro específico (ex: RH para Compras)"?');
  q8.setChoices([
    q8.createChoice('Concisão', false),
    q8.createChoice('Regra geral obrigatória. Exemplo', false),
    q8.createChoice('Registro e Rastreabilidade', false),
    q8.createChoice('Comunicação horizontal ou vertical pontual', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Segundo a aula, o que é "Comunicado"?');
  q9.setChoices([
    q9.createChoice('Departamento ou cargo de destino', false),
    q9.createChoice('Elimina formalidades cerimoniais em excesso para focar diretamente na ação esperada', false),
    q9.createChoice('Aviso oficial voltado para toda a equipe ou empresa', true),
    q9.createChoice('de um departamento para outro específico (ex: RH para Compras)', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "Comparativo Rápido dos Formatos"?');
  q10.setChoices([
    q10.createChoice('O cabeçalho do memorando deve responder imediatamente a quatro perguntas essenciais do leitor', false),
    q10.createChoice('Gostaríamos de avisar que os materiais estão acabando rápido demais e quem quiser coisas precisa mandar o papel logo, senão vai ficar sem nada na semana que vem', false),
    q10.createChoice('Trata de demandas práticas entre setores. Exemplo: Solicitação de computadores para a recepção', true),
    q10.createChoice('Algumas pessoas acreditam que escrever bem no trabalho significa usar termos arcaicos ou palavras difíceis que ninguém entende', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. Segundo a aula, o que é "Número"?');
  q11.setChoices([
    q11.createChoice('Exemplo: Coordenador de Logística', false),
    q11.createChoice('Cria comprovação formal de que um pedido ou aviso foi entregue entre setores', false),
    q11.createChoice('Define com exatidão quem deve fazer o quê e até que momento', false),
    q11.createChoice('Identificador oficial (ex: Mem. nº 042/2026)', true)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Segundo a aula, o que é "Para"?');
  q12.setChoices([
    q12.createChoice('Identificador oficial (ex: Mem. nº 042/2026)', false),
    q12.createChoice('Departamento ou cargo de destino', true),
    q12.createChoice('Aviso oficial voltado para toda a equipe ou empresa', false),
    q12.createChoice('Elimina formalidades cerimoniais em excesso para focar diretamente na ação esperada', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "RECAPITULAÇÃO"?');
  q13.setChoices([
    q13.createChoice('Quando os colaboradores compreendem as decisões da diretoria, os boatos de corredor perdem força e o foco na produtividade aumenta', false),
    q13.createChoice('Trata de demandas práticas entre setores. Exemplo: Solicitação de computadores para a recepção', false),
    q13.createChoice('Mesmo ao cobrar tarefas atrasadas ou apontar erros, o texto corporativo mantém a cordialidade e evita ataques pessoais', false),
    q13.createChoice('O relatório técnico investiga situações complexas com introdução, desenvolvimento, conclusão e recomendações', true)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Qual conceito a aula define como: "Exemplo: Coordenador de Logística"?');
  q14.setChoices([
    q14.createChoice('Memorando', false),
    q14.createChoice('Para', false),
    q14.createChoice('Cargo ou Função', true),
    q14.createChoice('Registro e Rastreabilidade', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Segundo a aula, o que é "Alinhamento Operacional"?');
  q15.setChoices([
    q15.createChoice('Cria comprovação formal de que um pedido ou aviso foi entregue entre setores', false),
    q15.createChoice('de um departamento para outro específico (ex: RH para Compras)', false),
    q15.createChoice('Texto ágil entre setores para pedidos ou avisos internos', false),
    q15.createChoice('Define com exatidão quem deve fazer o quê e até que momento', true)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "Transparência Gera Alinhamento"?');
  q16.setChoices([
    q16.createChoice('Demandas formais exigem memorando ou e-mail documentado; mensagens instantâneas perdem o registro oficial', false),
    q16.createChoice('Se uma palavra pode ser cortada sem alterar o sentido do pedido, corte-a', false),
    q16.createChoice('Algumas pessoas acreditam que escrever bem no trabalho significa usar termos arcaicos ou palavras difíceis que ninguém entende', false),
    q16.createChoice('Quando os colaboradores compreendem as decisões da diretoria, os boatos de corredor perdem força e o foco na produtividade aumenta', true)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Leitura Comparativa"?');
  q17.setChoices([
    q17.createChoice('Quais elementos tornam a segunda versão do memorando mais eficaz do que a primeira? (Mais de uma opção está correta)', true),
    q17.createChoice('Vá direto ao ponto no primeiro parágrafo: indique o fato, a razão e a necessidade da comunicação em uma ou duas frases diretas', false),
    q17.createChoice('Explique o motivo coletivo das mudanças para que os colaboradores compreendam o benefício do alinhamento', false),
    q17.createChoice('Quando os colaboradores compreendem as decisões da diretoria, os boatos de corredor perdem força e o foco na produtividade aumenta', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Regra geral obrigatória. Exemplo"?');
  q18.setChoices([
    q18.createChoice('Capacidade de transmitir o essencial com poucas palavras exatas', false),
    q18.createChoice('Registro cronológico exato (ex: 15 de abril de 2026)', false),
    q18.createChoice('Normas de segurança para crachás em todas as unidades', true),
    q18.createChoice('Elimina formalidades cerimoniais em excesso para focar diretamente na ação esperada', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Segundo a aula, o que é "Orientação"?');
  q19.setChoices([
    q19.createChoice('Capacidade de transmitir o essencial com poucas palavras exatas', false),
    q19.createChoice('Departamento ou cargo de destino', false),
    q19.createChoice('Instrução prática que guia o cumprimento de uma tarefa', true),
    q19.createChoice('Exemplo: Coordenador de Logística', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Segundo a aula, o que é "Memorando"?');
  q20.setChoices([
    q20.createChoice('Normas de segurança para crachás em todas as unidades', false),
    q20.createChoice('Identificador oficial (ex: Mem. nº 042/2026)', false),
    q20.createChoice('Texto ágil entre setores para pedidos ou avisos internos', true),
    q20.createChoice('Elimina formalidades cerimoniais em excesso para focar diretamente na ação esperada', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 08 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 08 — Redação de Memorandos e Comunicações Internas Agilidade, clareza e alinhamento na rotina corporativa');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula08() {
  var form = FormApp.openByTitle('Avaliação — Aula 08 · Redação de Memorandos e Comunicações Internas Agilidade, clareza e alinhamento na rotina corporativa · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 08: Redação de Memorandos e Comunicações Internas Agilidade, clareza e alinhamento na rotina corporativa');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Redação de Memorandos e Comunicações Internas Agilidade, clareza e alinhamento na rotina corporativa', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos da Nossa Aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Texto ágil entre setores para pedidos ou avisos internos.', 'Aviso oficial voltado para toda a equipe ou empresa.', 'Capacidade de transmitir o essencial com poucas palavras exatas.', 'Instrução prática que guia o cumprimento de uma tarefa.', 'Relatório Técnico', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 09
// ════════════════════════════════════════════════════════════


function criarFormularioAula09() {
  var form = FormApp.create('Avaliação — Aula 09 · Procedimentos e Instruções Como escrever passos claros, sequenciais e sem erros · SENAI');

  form.setDescription( 'Avaliação Completa: Procedimentos e Instruções Como escrever passos claros, sequenciais e sem erros\n\nAula 09 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Procedimentos e Instruções Como escrever passos claros, sequenciais e sem erros');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Dúvidas Levantadas"?');
  q1.setChoices([
    q1.createChoice('Ao escrever instruções, coloque-se sempre no lugar de quem está executando aquela ação pela primeira vez na vida', false),
    q1.createChoice('O relatório documenta e analisa fatos e dados detalhados, enquanto o comunicado apenas transmite avisos imediatos', false),
    q1.createChoice('Identifica os trechos específicos em que o leitor solicitou ajuda externa', true),
    q1.createChoice('Indicados para inventários, listas de materiais, EPIs ou alertas em que a ordem não interfere no resultado', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Segundo a aula, o que é "Objetivo"?');
  q2.setChoices([
    q2.createChoice('novos colaboradores aprendem a rotina com autonomia e rapidez', false),
    q2.createChoice('garantia de uso correto de equipamentos de proteção individual', false),
    q2.createChoice('informe segundos, gramas, litros, graus ou milímetros', false),
    q2.createChoice('Salvar cópias seguras dos projetos no servidor nuvem', true)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Qual conceito a aula define como: "menos erros de montagem e menor perda de matéria-prima"?');
  q3.setChoices([
    q3.createChoice('Substitua adjetivos por grandezas', false),
    q3.createChoice('Redução de desperdícios', true),
    q3.createChoice('Objetivo', false),
    q3.createChoice('Segurança no trabalho', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Qual conceito a aula define como: "Salvar cópias seguras dos projetos no servidor nuvem"?');
  q4.setChoices([
    q4.createChoice('Segurança no trabalho', false),
    q4.createChoice('Objetivo', true),
    q4.createChoice('Substitua adjetivos por grandezas', false),
    q4.createChoice('Facilidade no treinamento', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Qual conceito a aula define como: "garantia de uso correto de equipamentos de proteção individual"?');
  q5.setChoices([
    q5.createChoice('Objetivo', false),
    q5.createChoice('Substitua adjetivos por grandezas', false),
    q5.createChoice('Facilidade no treinamento', false),
    q5.createChoice('Segurança no trabalho', true)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Modo Infinitivo"?');
  q6.setChoices([
    q6.createChoice('Sua estrutura exige cabeçalho fixo (Para, De, Assunto, Data), parágrafos curtos e objetivo direto. Hoje, avançamos para textos que não apenas informam, mas ensinam...', false),
    q6.createChoice('Usabilidade - Facilidade com que o leitor compreende e executa o texto', false),
    q6.createChoice('Apresenta o procedimento de maneira neutra e impessoal', true),
    q6.createChoice('Se uma cola precisa de 10 minutos para secar antes do aperto final, ou se a energia precisa ser cortada antes de abrir a tampa, isso deve constar no momento exato', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Segundo a aula, o que é "Redução de desperdícios"?');
  q7.setChoices([
    q7.createChoice('informe segundos, gramas, litros, graus ou milímetros', false),
    q7.createChoice('garantia de uso correto de equipamentos de proteção individual', false),
    q7.createChoice('Salvar cópias seguras dos projetos no servidor nuvem', false),
    q7.createChoice('menos erros de montagem e menor perda de matéria-prima', true)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Segundo a aula, o que é "Facilidade no treinamento"?');
  q8.setChoices([
    q8.createChoice('menos erros de montagem e menor perda de matéria-prima', false),
    q8.createChoice('novos colaboradores aprendem a rotina com autonomia e rapidez', true),
    q8.createChoice('informe segundos, gramas, litros, graus ou milímetros', false),
    q8.createChoice('Salvar cópias seguras dos projetos no servidor nuvem', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Qual conceito a aula define como: "novos colaboradores aprendem a rotina com autonomia e rapidez"?');
  q9.setChoices([
    q9.createChoice('Facilidade no treinamento', true),
    q9.createChoice('Objetivo', false),
    q9.createChoice('Substitua adjetivos por grandezas', false),
    q9.createChoice('Redução de desperdícios', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Qual conceito a aula define como: "informe segundos, gramas, litros, graus ou milímetros"?');
  q10.setChoices([
    q10.createChoice('Facilidade no treinamento', false),
    q10.createChoice('Segurança no trabalho', false),
    q10.createChoice('Redução de desperdícios', false),
    q10.createChoice('Substitua adjetivos por grandezas', true)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Objetivo"?');
  q11.setChoices([
    q11.createChoice('Assinale a alternativa que mantém a consistência gramatical adequada para um manual de instruções', false),
    q11.createChoice('Ao escrever instruções, coloque-se sempre no lugar de quem está executando aquela ação pela primeira vez na vida', false),
    q11.createChoice('Enumera equipamentos, EPIs, ferramentas e insumos necessários antes do início', true),
    q11.createChoice('Análise detalhada de fatos já ocorridos, dados estatísticos, causas, impactos e recomendações técnicas', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Vocabulário Essencial"?');
  q12.setChoices([
    q12.createChoice('Usabilidade - Facilidade com que o leitor compreende e executa o texto', true),
    q12.createChoice('Ao escrever instruções, coloque-se sempre no lugar de quem está executando aquela ação pela primeira vez na vida', false),
    q12.createChoice('Sua estrutura exige cabeçalho fixo (Para, De, Assunto, Data), parágrafos curtos e objetivo direto. Hoje, avançamos para textos que não apenas informam, mas ensinam...', false),
    q12.createChoice('Mede quanto tempo o usuário levou e se houve paradas demoradas para decifrar frases', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Recapitulando: O Memorando"?');
  q13.setChoices([
    q13.createChoice('Em um manual de procedimentos bem elaborado, se um operador comete um erro ao seguir o texto pela primeira vez, a falha quase sempre decorre da ambiguidade ou...', false),
    q13.createChoice('Dominar a redação de procedimentos e instruções é a base da segurança, qualidade e eficiência no mundo profissional', false),
    q13.createChoice('Se uma cola precisa de 10 minutos para secar antes do aperto final, ou se a energia precisa ser cortada antes de abrir a tampa, isso deve constar no momento exato', false),
    q13.createChoice('Sua estrutura exige cabeçalho fixo (Para, De, Assunto, Data), parágrafos curtos e objetivo direto. Hoje, avançamos para textos que não apenas informam, mas ensinam...', true)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Listas Numeradas (1, 2, 3...)"?');
  q14.setChoices([
    q14.createChoice('Exclusivas para etapas cronológicas onde a ordem de execução é obrigatória e inalterável', true),
    q14.createChoice('Apresenta o procedimento de maneira neutra e impessoal', false),
    q14.createChoice('Usabilidade - Facilidade com que o leitor compreende e executa o texto', false),
    q14.createChoice('Sua estrutura exige cabeçalho fixo (Para, De, Assunto, Data), parágrafos curtos e objetivo direto. Hoje, avançamos para textos que não apenas informam, mas ensinam...', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Segundo a aula, o que é "Segurança no trabalho"?');
  q15.setChoices([
    q15.createChoice('novos colaboradores aprendem a rotina com autonomia e rapidez', false),
    q15.createChoice('garantia de uso correto de equipamentos de proteção individual', true),
    q15.createChoice('Salvar cópias seguras dos projetos no servidor nuvem', false),
    q15.createChoice('menos erros de montagem e menor perda de matéria-prima', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "O Risco da Vagueza"?');
  q16.setChoices([
    q16.createChoice('Indicados para inventários, listas de materiais, EPIs ou alertas em que a ordem não interfere no resultado', false),
    q16.createChoice('O relatório documenta e analisa fatos e dados detalhados, enquanto o comunicado apenas transmite avisos imediatos', false),
    q16.createChoice('Se dois leitores podem interpretar o mesmo passo de formas diferentes, a instrução precisa ser reescrita', true),
    q16.createChoice('Mede quanto tempo o usuário levou e se houve paradas demoradas para decifrar frases', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Técnico Especialista"?');
  q17.setChoices([
    q17.createChoice('Enumera equipamentos, EPIs, ferramentas e insumos necessários antes do início', false),
    q17.createChoice('Exige parâmetros exatos, normas técnicas regulamentadoras (ABNT/ISO), unidades de medida precisas e termos da área', true),
    q17.createChoice('O manual presume que o usuário já sabe como encaixar uma peça e omite o passo básico', false),
    q17.createChoice('Usabilidade - Facilidade com que o leitor compreende e executa o texto', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "Tradução Literal"?');
  q18.setChoices([
    q18.createChoice('Exclusivas para etapas cronológicas onde a ordem de execução é obrigatória e inalterável', false),
    q18.createChoice('Especifica os setores, equipamentos e cargos aos quais a norma se aplica', false),
    q18.createChoice('Traduções automáticas que geram termos sem sentido prático na língua do leitor', true),
    q18.createChoice('Em um manual de procedimentos bem elaborado, se um operador comete um erro ao seguir o texto pela primeira vez, a falha quase sempre decorre da ambiguidade ou...', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Segundo a aula, o que é "Substitua adjetivos por grandezas"?');
  q19.setChoices([
    q19.createChoice('Salvar cópias seguras dos projetos no servidor nuvem', false),
    q19.createChoice('garantia de uso correto de equipamentos de proteção individual', false),
    q19.createChoice('menos erros de montagem e menor perda de matéria-prima', false),
    q19.createChoice('informe segundos, gramas, litros, graus ou milímetros', true)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "Gêneros Técnicos em Paralelo"?');
  q20.setChoices([
    q20.createChoice('Para isso, as frases devem ser curtas, diretas e eliminar termos poéticos, opiniões ou comentários subjetivos que distraiam o executor', false),
    q20.createChoice('Análise detalhada de fatos já ocorridos, dados estatísticos, causas, impactos e recomendações técnicas', true),
    q20.createChoice('Assinale a alternativa que mantém a consistência gramatical adequada para um manual de instruções', false),
    q20.createChoice('Instruções em bloco corrido de texto, sem numeração ou destaque visual para alertas', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 09 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 09 — Procedimentos e Instruções Como escrever passos claros, sequenciais e sem erros');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula09() {
  var form = FormApp.openByTitle('Avaliação — Aula 09 · Procedimentos e Instruções Como escrever passos claros, sequenciais e sem erros · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 09: Procedimentos e Instruções Como escrever passos claros, sequenciais e sem erros');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Procedimentos e Instruções Como escrever passos claros, sequenciais e sem erros', 'É um conceito importante apresentado na aula', 'O que acontece na falha?', 'É um conceito importante apresentado na aula', 'Objetivos da Nossa Aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'O Memorando', 'Qual é a finalidade central de um relatório técnico em comparação a um comunicado interno?', 'Qual documento deve ser consultado quando um funcionário precisa aprender o passo a passo de uma tar', 'Qual é o foco principal do memorando corporativo?', 'O relatório documenta e analisa fatos e dados detalhados, enquanto o comunicado apenas transmite avi', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 10
// ════════════════════════════════════════════════════════════


function criarFormularioAula10() {
  var form = FormApp.create('Avaliação — Aula 10 · Plataformas Digitais de Comunicação Conectando equipes com eficiência, agilidade e clareza no trabalho. · SENAI');

  form.setDescription( 'Avaliação Completa: Plataformas Digitais de Comunicação Conectando equipes com eficiência, agilidade e clareza no trabalho.\n\nAula 10 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Plataformas Digitais de Comunicação Conectando equipes com eficiência, agilidade e clareza no trabalho.');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Recapitulação: Procedimentos e Manuais"?');
  q1.setChoices([
    q1.createChoice('Na aula anterior, aprendemos a redigir manuais e Procedimentos Operacionais Padrão (POP). Documentos operacionais exigem clareza absoluta, sequência cronológica...', true),
    q1.createChoice('Dá tempo para pesquisar dados, revisar cálculos e estruturar argumentos com calma', false),
    q1.createChoice('Ao enviar um relatório pronto para clientes externos, o link de acesso deve ser configurado como Editor para facilitar o download', false),
    q1.createChoice('Acionar notificações gerais no chat para assuntos que competem a apenas uma pessoa', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Segundo a aula, o que é "Ferramenta"?');
  q2.setChoices([
    q2.createChoice('Ambiente digital integrado para gestão e mensagens', false),
    q2.createChoice('Chat interno ou comentário no cartão da tarefa', false),
    q2.createChoice('o líder enviou para a avaliação a versão antiga e incompleta, perdendo notas por pura falha no uso das plataformas colaborativas', false),
    q2.createChoice('Aplicativo específico que executa funções operacionais e facilita fluxos', true)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "Autenticação em 2 Etapas"?');
  q3.setChoices([
    q3.createChoice('Um dos maiores problemas no ambiente profissional é nomear arquivos de forma amadora ou confusa, o que impede a busca automatizada e gera erros de versão', false),
    q3.createChoice('Proteja todas as suas contas corporativas e escolares com código no celular', true),
    q3.createChoice('Na aula anterior, aprendemos a redigir manuais e Procedimentos Operacionais Padrão (POP). Documentos operacionais exigem clareza absoluta, sequência cronológica...', false),
    q3.createChoice('Decisões e orientações ficam arquivadas para consulta futura de novos membros da equipe', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Qual conceito a aula define como: "Troca de mensagens sem necessidade de resposta imediata ou simultaneidade"?');
  q4.setChoices([
    q4.createChoice('Assíncrono', true),
    q4.createChoice('Contrato', false),
    q4.createChoice('Queda de servidores', false),
    q4.createChoice('Mensagem Completa', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Segundo a aula, o que é "Mensagem Completa"?');
  q5.setChoices([
    q5.createChoice('Ambiente digital integrado para gestão e mensagens', false),
    q5.createChoice('Forneça contexto, objetivo e prazos claros para evitar trocas excessivas e improdutivas', true),
    q5.createChoice('E-mail ou plataforma de assinatura para valor legal', false),
    q5.createChoice('[PROJETO]_[DOCUMENTO]_[VERSAO]_[DATA]', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Qual conceito a aula define como: "Comunicação em tempo real, exigindo presença simultânea dos participantes"?');
  q6.setChoices([
    q6.createChoice('Assíncrono', false),
    q6.createChoice('Síncrono', true),
    q6.createChoice('Resultado', false),
    q6.createChoice('Exemplo recomendado', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Qual conceito a aula define como: "[PROJETO]_[DOCUMENTO]_[VERSAO]_[DATA]"?');
  q7.setChoices([
    q7.createChoice('Imagem do post', false),
    q7.createChoice('Adote a fórmula padrão', true),
    q7.createChoice('Organização e Segurança', false),
    q7.createChoice('Canal Adequado', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "Compartilhamento e Permissões Seguras"?');
  q8.setChoices([
    q8.createChoice('Acesso apenas para leitura e download. Ideal para relatórios finalizados e manuais corporativos', true),
    q8.createChoice('Ferramentas como Slack e Teams organizam discussões por canais temáticos dedicados a cada projeto específico', false),
    q8.createChoice('Registros oficiais, comunicações formais externas e arquivos que demandam histórico auditável', false),
    q8.createChoice('O e-mail permanece indispensável no mundo corporativo para formalizar combinados, enviar orçamentos e arquivar decisões com valor jurídico ou institucional', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Segundo a aula, o que é "Síncrono"?');
  q9.setChoices([
    q9.createChoice('E-mail ou plataforma de assinatura para valor legal', false),
    q9.createChoice('o líder enviou para a avaliação a versão antiga e incompleta, perdendo notas por pura falha no uso das plataformas colaborativas', false),
    q9.createChoice('Comunicação em tempo real, exigindo presença simultânea dos participantes', true),
    q9.createChoice('Chat interno ou comentário no cartão da tarefa', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Qual conceito a aula define como: "o líder enviou para a avaliação a versão antiga e incompleta, perdendo notas por pura falha no uso das plataformas colaborativas"?');
  q10.setChoices([
    q10.createChoice('Adote a fórmula padrão', false),
    q10.createChoice('Síncrono', false),
    q10.createChoice('Resultado', true),
    q10.createChoice('Canal Adequado', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Etapa 2"?');
  q11.setChoices([
    q11.createChoice('Nunca exponha CPF, senhas ou dados bancários em canais abertos ou chats de grupo', false),
    q11.createChoice('Atribuição ao responsável e envio à coluna Em Produção', true),
    q11.createChoice('Ao usar computadores da escola ou biblioteca, encerre a sessão de todas as plataformas', false),
    q11.createChoice('Facilita a colaboração entre pessoas que possuem turnos ou rotinas de estudo distintas', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Correspondência de Canais"?');
  q12.setChoices([
    q12.createChoice('Dá tempo para pesquisar dados, revisar cálculos e estruturar argumentos com calma', false),
    q12.createChoice('Uma equipe de quatro pessoas combinou a entrega de um trabalho escolar importante. No entanto, usaram o grupo pessoal de mensagens para enviar 12 versões diferentes...', false),
    q12.createChoice('Na aula anterior, aprendemos a redigir manuais e Procedimentos Operacionais Padrão (POP). Documentos operacionais exigem clareza absoluta, sequência cronológica...', false),
    q12.createChoice('Canal assíncrono para formalização de acordos e envio de documentos oficiais', true)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. Segundo a aula, o que é "Adote a fórmula padrão"?');
  q13.setChoices([
    q13.createChoice('Forneça contexto, objetivo e prazos claros para evitar trocas excessivas e improdutivas', false),
    q13.createChoice('Ambiente digital integrado para gestão e mensagens', false),
    q13.createChoice('[PROJETO]_[DOCUMENTO]_[VERSAO]_[DATA]', true),
    q13.createChoice('Troca de mensagens sem necessidade de resposta imediata ou simultaneidade', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "Organização e Segurança"?');
  q14.setChoices([
    q14.createChoice('Escolha entre síncrono ou assíncrono conforme a urgência, formalidade e complexidade', false),
    q14.createChoice('Nomeie arquivos com padrão e configure permissões rigorosas de nuvem', true),
    q14.createChoice('E-mail ou plataforma de assinatura para valor legal', false),
    q14.createChoice('Chat interno ou comentário no cartão da tarefa', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "E-mail Corporativo"?');
  q15.setChoices([
    q15.createChoice('Ordene as etapas corretas para resolver um problema técnico com a equipe de TI da empresa', false),
    q15.createChoice('A evolução tecnológica redefiniu tanto os escritórios modernos quanto os ambientes acadêmicos. Relatórios físicos e memorandos impressos deram lugar a ecossistemas...', false),
    q15.createChoice('Registros oficiais, comunicações formais externas e arquivos que demandam histórico auditável', true),
    q15.createChoice('Decisões e orientações ficam arquivadas para consulta futura de novos membros da equipe', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Qual conceito a aula define como: "Forneça contexto, objetivo e prazos claros para evitar trocas excessivas e improdutivas"?');
  q16.setChoices([
    q16.createChoice('Contrato', false),
    q16.createChoice('Exemplo recomendado', false),
    q16.createChoice('Assíncrono', false),
    q16.createChoice('Mensagem Completa', true)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "O custo da desorganização digital"?');
  q17.setChoices([
    q17.createChoice('Proteja todas as suas contas corporativas e escolares com código no celular', false),
    q17.createChoice('Decisões e orientações ficam arquivadas para consulta futura de novos membros da equipe', false),
    q17.createChoice('Registros oficiais, comunicações formais externas e arquivos que demandam histórico auditável', false),
    q17.createChoice('Uma equipe de quatro pessoas combinou a entrega de um trabalho escolar importante. No entanto, usaram o grupo pessoal de mensagens para enviar 12 versões diferentes...', true)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Contrato"?');
  q18.setChoices([
    q18.createChoice('Comunicação em tempo real, exigindo presença simultânea dos participantes', false),
    q18.createChoice('Ambiente digital integrado para gestão e mensagens', false),
    q18.createChoice('E-mail ou plataforma de assinatura para valor legal', true),
    q18.createChoice('Forneça contexto, objetivo e prazos claros para evitar trocas excessivas e improdutivas', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Segundo a aula, o que é "Resultado"?');
  q19.setChoices([
    q19.createChoice('[PROJETO]_[DOCUMENTO]_[VERSAO]_[DATA]', false),
    q19.createChoice('Comunicação em tempo real, exigindo presença simultânea dos participantes', false),
    q19.createChoice('Aplicativo específico que executa funções operacionais e facilita fluxos', false),
    q19.createChoice('o líder enviou para a avaliação a versão antiga e incompleta, perdendo notas por pura falha no uso das plataformas colaborativas', true)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "Flexibilidade de Horário"?');
  q20.setChoices([
    q20.createChoice('Facilita a colaboração entre pessoas que possuem turnos ou rotinas de estudo distintas', true),
    q20.createChoice('Ordene as etapas corretas para resolver um problema técnico com a equipe de TI da empresa', false),
    q20.createChoice('Canal assíncrono para formalização de acordos e envio de documentos oficiais', false),
    q20.createChoice('Alinhamentos rápidos, trocas dinâmicas em equipe e avisos operacionais do dia a dia', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 10 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 10 — Plataformas Digitais de Comunicação Conectando equipes com eficiência, agilidade e clareza no trabalho.');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula10() {
  var form = FormApp.openByTitle('Avaliação — Aula 10 · Plataformas Digitais de Comunicação Conectando equipes com eficiência, agilidade e clareza no trabalho. · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 10: Plataformas Digitais de Comunicação Conectando equipes com eficiência, agilidade e clareza no trabalho.');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Plataformas Digitais de Comunicação Conectando equipes com eficiência, agilidade e clareza no trabalho.', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos de Aprendizagem', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Ambiente digital integrado para gestão e mensagens.', 'Comunicação em tempo real, exigindo presença simultânea dos participantes.', 'Troca de mensagens sem necessidade de resposta imediata ou simultaneidade.', 'Aplicativo específico que executa funções operacionais e facilita fluxos.', 'Procedimentos e Manuais', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 11
// ════════════════════════════════════════════════════════════


function criarFormularioAula11() {
  var form = FormApp.create('Avaliação — Aula 11 · Segurança da Informação e Privacidade Protegendo dados, canais e reputação no ambiente digital corporativo · SENAI');

  form.setDescription( 'Avaliação Completa: Segurança da Informação e Privacidade Protegendo dados, canais e reputação no ambiente digital corporativo\n\nAula 11 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Segurança da Informação e Privacidade Protegendo dados, canais e reputação no ambiente digital corporativo');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Canais de Comunicação: Revisão"?');
  q1.setChoices([
    q1.createChoice('Sistemas de proteção previnem que ataques derrubem servidores escolares ou empresariais', false),
    q1.createChoice('Na aula anterior, exploramos plataformas corporativas. Agora, relembramos a distinção vital entre canais síncronos (tempo real) e assíncronos (tempo diferido)...', true),
    q1.createChoice('O texto do botão diz um site conhecido, mas a URL real direciona para servidor desconhecido', false),
    q1.createChoice('Você é dono dos seus dados e tem o direito de saber por que e como estão sendo utilizados', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Processos e Multas"?');
  q2.setChoices([
    q2.createChoice('Conexões secundárias garantem acesso a canais corporativos mesmo em manutenções', false),
    q2.createChoice('Sanções milionárias da Autoridade Nacional de Proteção de Dados (ANPD) e ações civis', true),
    q2.createChoice('Ao acessar contas corporativas fora de casa, prefira a rede 4G/5G do celular ou uma VPN segura', false),
    q2.createChoice('Você é dono dos seus dados e tem o direito de saber por que e como estão sendo utilizados', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Segundo a aula, o que é "Phishing"?');
  q3.setChoices([
    q3.createChoice('Proteção de sistemas e dados contra acessos não autorizados', false),
    q3.createChoice('senso de urgência, medo de punição ou ofertas milagrosas. O objetivo é induzir o destinatário a clicar em links clonados ou baixar arquivos infectados', false),
    q3.createChoice('nome completo, RG, CPF, e-mail, telefone e endereço residencial. Exigem autorização expressa para coleta', false),
    q3.createChoice('Golpe eletrônico que usa mensagens falsas para roubar senhas e dados', true)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Informações que identificam a pessoa"?');
  q4.setChoices([
    q4.createChoice('Golpe eletrônico que usa mensagens falsas para roubar senhas e dados', false),
    q4.createChoice('ligações telefônicas, reuniões em vídeo e salas de chat ao vivo. Ideais para alinhamentos rápidos ou crises emergenciais', false),
    q4.createChoice('nome completo, RG, CPF, e-mail, telefone e endereço residencial. Exigem autorização expressa para coleta', true),
    q4.createChoice('e-mails formais, fóruns, relatórios e memorandos. Permitem registro documentado e reflexão detalhada', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Segundo a aula, o que é "Segurança"?');
  q5.setChoices([
    q5.createChoice('Garantia de que a informação só é acessível por pessoas autorizadas', false),
    q5.createChoice('Golpe eletrônico que usa mensagens falsas para roubar senhas e dados', false),
    q5.createChoice('senso de urgência, medo de punição ou ofertas milagrosas. O objetivo é induzir o destinatário a clicar em links clonados ou baixar arquivos infectados', false),
    q5.createChoice('Proteção de sistemas e dados contra acessos não autorizados', true)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Segundo a aula, o que é "Exigem conexão simultânea"?');
  q6.setChoices([
    q6.createChoice('Golpe eletrônico que usa mensagens falsas para roubar senhas e dados', false),
    q6.createChoice('senso de urgência, medo de punição ou ofertas milagrosas. O objetivo é induzir o destinatário a clicar em links clonados ou baixar arquivos infectados', false),
    q6.createChoice('ligações telefônicas, reuniões em vídeo e salas de chat ao vivo. Ideais para alinhamentos rápidos ou crises emergenciais', true),
    q6.createChoice('Direito do indivíduo de controlar o uso de seus dados pessoais', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. De acordo com a aula, o que caracteriza "A Tríade Fundamental: CIA"?');
  q7.setChoices([
    q7.createChoice('A Lei nº 13.709/2018 regula o tratamento e trânsito de dados de cidadãos por empresas e escolas', false),
    q7.createChoice('A informação está sempre acessível aos usuários autorizados no momento em que necessitam', true),
    q7.createChoice('Conexões secundárias garantem acesso a canais corporativos mesmo em manutenções', false),
    q7.createChoice('Defina links restritos para usuários específicos com data limite de expiração automática', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "Engenharia Social no Trabalho"?');
  q8.setChoices([
    q8.createChoice('Garantia de acesso à informação sempre que for legitimamente necessário', false),
    q8.createChoice('Sanções milionárias da Autoridade Nacional de Proteção de Dados (ANPD) e ações civis', false),
    q8.createChoice('O assistente realizou o depósito de R$ 45.000 sem telefonar para o contato oficial da distribuidora. A verificação síncrona teria evitado a fraude em dois minutos', false),
    q8.createChoice('Engenharia social é a técnica de enganar pessoas para que quebrem regras de segurança por boa vontade, simpatia ou medo da autoridade. O criminoso estuda a vítima...', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Garantindo a Integridade dos Documentos"?');
  q9.setChoices([
    q9.createChoice('Informações que identificam a pessoa: nome completo, RG, CPF, e-mail, telefone e endereço residencial. Exigem autorização expressa para coleta', false),
    q9.createChoice('Quando uma solicitação financeira ou confidencial chegar por e-mail, valide as informações por um segundo canal independente, utilizando um número de telefone...', false),
    q9.createChoice('Se uma ata de reunião ou relatório financeiro for alterado secretamente por um terceiro, perde-se a confiabilidade institucional. A integridade assegura histórico...', true),
    q9.createChoice('Você é dono dos seus dados e tem o direito de saber por que e como estão sendo utilizados', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "Backups Periódicos"?');
  q10.setChoices([
    q10.createChoice('Se uma ata de reunião ou relatório financeiro for alterado secretamente por um terceiro, perde-se a confiabilidade institucional. A integridade assegura histórico...', false),
    q10.createChoice('A Lei nº 13.709/2018 regula o tratamento e trânsito de dados de cidadãos por empresas e escolas', false),
    q10.createChoice('O texto do botão diz um site conhecido, mas a URL real direciona para servidor desconhecido', false),
    q10.createChoice('Cópias regulares na nuvem evitam a perda definitiva em caso de falha física do computador', true)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Escolha do Canal Correto"?');
  q11.setChoices([
    q11.createChoice('Ao negociar um mal-entendido urgente entre dois colegas em reunião presencial', true),
    q11.createChoice('Se uma ata de reunião ou relatório financeiro for alterado secretamente por um terceiro, perde-se a confiabilidade institucional. A integridade assegura histórico...', false),
    q11.createChoice('Manchetes negativas na imprensa e perda imediata de confiança de clientes e famílias', false),
    q11.createChoice('Cópias regulares na nuvem evitam a perda definitiva em caso de falha física do computador', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Criação de Senhas Fortes"?');
  q12.setChoices([
    q12.createChoice('Elimine datas de nascimento, sequências de teclado e nomes de familiares ou animais', true),
    q12.createChoice('Informações que identificam a pessoa: nome completo, RG, CPF, e-mail, telefone e endereço residencial. Exigem autorização expressa para coleta', false),
    q12.createChoice('Arquivos com extensão .exe, .scr ou .zip compactados enviados sem solicitação prévia', false),
    q12.createChoice('Cópias regulares na nuvem evitam a perda definitiva em caso de falha física do computador', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Sinais de Alerta no E-mail"?');
  q13.setChoices([
    q13.createChoice('Manchetes negativas na imprensa e perda imediata de confiança de clientes e famílias', false),
    q13.createChoice('Informações que identificam a pessoa: nome completo, RG, CPF, e-mail, telefone e endereço residencial. Exigem autorização expressa para coleta', false),
    q13.createChoice('Domínios alterados discretamente (ex: @banc0-brasil.net em vez do oficial)', false),
    q13.createChoice('O texto do botão diz um site conhecido, mas a URL real direciona para servidor desconhecido', true)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "Não exigem resposta imediata"?');
  q14.setChoices([
    q14.createChoice('Golpe eletrônico que usa mensagens falsas para roubar senhas e dados', false),
    q14.createChoice('@banc0-brasil.net em vez do oficial)', false),
    q14.createChoice('e-mails formais, fóruns, relatórios e memorandos. Permitem registro documentado e reflexão detalhada', true),
    q14.createChoice('Proteção de sistemas e dados contra acessos não autorizados', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Qual conceito a aula define como: "@banc0-brasil.net em vez do oficial)"?');
  q15.setChoices([
    q15.createChoice('Confidencialidade', false),
    q15.createChoice('Domínios alterados discretamente (ex', true),
    q15.createChoice('Não exigem resposta imediata', false),
    q15.createChoice('Informações que identificam a pessoa', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Segundo a aula, o que é "Confidencialidade"?');
  q16.setChoices([
    q16.createChoice('nome completo, RG, CPF, e-mail, telefone e endereço residencial. Exigem autorização expressa para coleta', false),
    q16.createChoice('Direito do indivíduo de controlar o uso de seus dados pessoais', false),
    q16.createChoice('ligações telefônicas, reuniões em vídeo e salas de chat ao vivo. Ideais para alinhamentos rápidos ou crises emergenciais', false),
    q16.createChoice('Garantia de que a informação só é acessível por pessoas autorizadas', true)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. Segundo a aula, o que é "Privacidade"?');
  q17.setChoices([
    q17.createChoice('Direito do indivíduo de controlar o uso de seus dados pessoais', true),
    q17.createChoice('Proteção de sistemas e dados contra acessos não autorizados', false),
    q17.createChoice('ligações telefônicas, reuniões em vídeo e salas de chat ao vivo. Ideais para alinhamentos rápidos ou crises emergenciais', false),
    q17.createChoice('Golpe eletrônico que usa mensagens falsas para roubar senhas e dados', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "Cuidados com Aparelhos de Trabalho"?');
  q18.setChoices([
    q18.createChoice('O elo mais vulnerável da segurança digital é o comportamento humano; atenção e validação são a melhor blindagem', false),
    q18.createChoice('Notebooks e celulares corporativos ou escolares devem ser utilizados exclusivamente para fins de estudo e trabalho. O uso indevido para jogos, torrents ou sites não...', true),
    q18.createChoice('Mensagens exigindo ação imediata em menos de 2 horas sob ameaça de perda', false),
    q18.createChoice('Conexões secundárias garantem acesso a canais corporativos mesmo em manutenções', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "Dados Comuns vs Sensíveis"?');
  q19.setChoices([
    q19.createChoice('Mensagens exigindo ação imediata em menos de 2 horas sob ameaça de perda', false),
    q19.createChoice('Origem racial, convicção religiosa, opinião política, biometria e dados de saúde médica. Seu vazamento pode gerar discriminação direta e punições gravíssimas', true),
    q19.createChoice('Quando uma solicitação financeira ou confidencial chegar por e-mail, valide as informações por um segundo canal independente, utilizando um número de telefone...', false),
    q19.createChoice('Arquivos com extensão .exe, .scr ou .zip compactados enviados sem solicitação prévia', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Segundo a aula, o que é "O phishing explora gatilhos psicológicos"?');
  q20.setChoices([
    q20.createChoice('e-mails formais, fóruns, relatórios e memorandos. Permitem registro documentado e reflexão detalhada', false),
    q20.createChoice('Garantia de que a informação só é acessível por pessoas autorizadas', false),
    q20.createChoice('senso de urgência, medo de punição ou ofertas milagrosas. O objetivo é induzir o destinatário a clicar em links clonados ou baixar arquivos infectados', true),
    q20.createChoice('nome completo, RG, CPF, e-mail, telefone e endereço residencial. Exigem autorização expressa para coleta', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 11 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 11 — Segurança da Informação e Privacidade Protegendo dados, canais e reputação no ambiente digital corporativo');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula11() {
  var form = FormApp.openByTitle('Avaliação — Aula 11 · Segurança da Informação e Privacidade Protegendo dados, canais e reputação no ambiente digital corporativo · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 11: Segurança da Informação e Privacidade Protegendo dados, canais e reputação no ambiente digital corporativo');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Segurança da Informação e Privacidade Protegendo dados, canais e reputação no ambiente digital corporativo', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos da Nossa Aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Proteção de sistemas e dados contra acessos não autorizados.', 'Direito do indivíduo de controlar o uso de seus dados pessoais.', 'Garantia de que a informação só é acessível por pessoas autorizadas.', 'Golpe eletrônico que usa mensagens falsas para roubar senhas e dados.', 'Revisão', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 12
// ════════════════════════════════════════════════════════════


function criarFormularioAula12() {
  var form = FormApp.create('Avaliação — Aula 12 · Comunicação Eficaz Como transformar ideias em mensagens claras, precisas e compreensíveis · SENAI');

  form.setDescription( 'Avaliação Completa: Comunicação Eficaz Como transformar ideias em mensagens claras, precisas e compreensíveis\n\nAula 12 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Comunicação Eficaz Como transformar ideias em mensagens claras, precisas e compreensíveis');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Registro Informal"?');
  q1.setChoices([
    q1.createChoice('Falar ou escrever muito não garante entendimento. Comunicar com eficácia significa assegurar que a intenção original chegue intacta ao interlocutor', false),
    q1.createChoice('Usado entre pares, familiares e colegas de equipe em conversas cotidianas. Aceita coloquialismo sem perder clareza', true),
    q1.createChoice('O ruído representa qualquer interferência no canal ou código que distorça essa transmissão. Uma comunicação verdadeiramente eficaz neutraliza o ruído antes que ele...', false),
    q1.createChoice('Orações no gerúndio ou particípio sem sujeito expresso criam dependências dúbias na oração principal', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Desgaste da Confiança"?');
  q2.setChoices([
    q2.createChoice('Escrever bem exige cortar o excesso. O primeiro rascunho serve para colocar as ideias no papel; a segunda leitura serve para lapidar o vocabulário e a estrutura', false),
    q2.createChoice('A ambiguidade estrutural nasce da posição inadequada de pronomes, termos modificadores ou adjuntos na frase', false),
    q2.createChoice('Mensagens ambíguas geram frustração mútua e acusações entre setores da equipe', true),
    q2.createChoice('Uso de termos exatos que não deixam margem para interpretações opostas ou duvidosas', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Segundo a aula, o que é "Objetividade"?');
  q3.setChoices([
    q3.createChoice('Harmonia lógica e integridade estrutural das ideias', false),
    q3.createChoice('Transmissão do máximo de ideias com o mínimo de termos', false),
    q3.createChoice('Ausência de obscuridade; mensagem sem margem a dúvidas', false),
    q3.createChoice('Foco direto no propósito sem rodeios desnecessários', true)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Clareza"?');
  q4.setChoices([
    q4.createChoice('Foco direto no propósito sem rodeios desnecessários', false),
    q4.createChoice('Harmonia lógica e integridade estrutural das ideias', false),
    q4.createChoice('Ausência de obscuridade; mensagem sem margem a dúvidas', true),
    q4.createChoice('Transmissão do máximo de ideias com o mínimo de termos', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "Validando a Compreensão"?');
  q5.setChoices([
    q5.createChoice('Emissores eficazes utilizam perguntas de checagem e solicitam paráfrases amigáveis antes de encerrar o contato', true),
    q5.createChoice('Ser conciso não significa ser telegráfico ou grosseiro. Trata-se de eliminar redundâncias e rodeios vazios para valorizar o tempo do leitor', false),
    q5.createChoice('A pontuação organiza a respiração mental do leitor e estrutura as relações lógicas da sentença', false),
    q5.createChoice('Orações no gerúndio ou particípio sem sujeito expresso criam dependências dúbias na oração principal', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Retomada: O Processo Comunicativo"?');
  q6.setChoices([
    q6.createChoice('O ruído representa qualquer interferência no canal ou código que distorça essa transmissão. Uma comunicação verdadeiramente eficaz neutraliza o ruído antes que ele...', true),
    q6.createChoice('Falta de clareza sobre quem é o responsável pela entrega causa paralisia operacional', false),
    q6.createChoice('A ambiguidade ocorre quando uma palavra, oração ou frase permite mais de um sentido legítimo dentro do mesmo contexto', false),
    q6.createChoice('Usado entre pares, familiares e colegas de equipe em conversas cotidianas. Aceita coloquialismo sem perder clareza', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. De acordo com a aula, o que caracteriza "CONCEITO-CHAVE"?');
  q7.setChoices([
    q7.createChoice('Como transformar ideias em mensagens claras, precisas e compreensíveis', false),
    q7.createChoice('Falta de clareza sobre quem é o responsável pela entrega causa paralisia operacional', false),
    q7.createChoice('Empregado em documentos oficiais, relações com clientes e relatórios acadêmicos. Exige norma-padrão rigorosa', false),
    q7.createChoice('Na literatura, a ambiguidade pode ser um recurso poético expressivo. No entanto, na redação escolar, profissional e técnica, ela representa uma falha crítica que...', true)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Segundo a aula, o que é "Concisão"?');
  q8.setChoices([
    q8.createChoice('Ausência de obscuridade; mensagem sem margem a dúvidas', false),
    q8.createChoice('Harmonia lógica e integridade estrutural das ideias', false),
    q8.createChoice('Foco direto no propósito sem rodeios desnecessários', false),
    q8.createChoice('Transmissão do máximo de ideias com o mínimo de termos', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "O Custo de um Mal-entendido"?');
  q9.setChoices([
    q9.createChoice('A pontuação organiza a respiração mental do leitor e estrutura as relações lógicas da sentença', false),
    q9.createChoice('Emissores eficazes utilizam perguntas de checagem e solicitam paráfrases amigáveis antes de encerrar o contato', false),
    q9.createChoice('Uso de termos exatos que não deixam margem para interpretações opostas ou duvidosas', false),
    q9.createChoice('Falar ou escrever muito não garante entendimento. Comunicar com eficácia significa assegurar que a intenção original chegue intacta ao interlocutor', true)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Qual conceito a aula define como: "Harmonia lógica e integridade estrutural das ideias"?');
  q10.setChoices([
    q10.createChoice('Clareza', false),
    q10.createChoice('Coerência', true),
    q10.createChoice('Objetividade', false),
    q10.createChoice('Concisão', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Ambiguidade Estrutural"?');
  q11.setChoices([
    q11.createChoice('A ambiguidade estrutural nasce da posição inadequada de pronomes, termos modificadores ou adjuntos na frase', true),
    q11.createChoice('Orações no gerúndio ou particípio sem sujeito expresso criam dependências dúbias na oração principal', false),
    q11.createChoice('Falta de clareza sobre quem é o responsável pela entrega causa paralisia operacional', false),
    q11.createChoice('Ser conciso não significa ser telegráfico ou grosseiro. Trata-se de eliminar redundâncias e rodeios vazios para valorizar o tempo do leitor', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Pilares da Comunicação Eficaz"?');
  q12.setChoices([
    q12.createChoice('Tarefas executadas incorretamente precisam ser refeitas do zero, consumindo horas extras', false),
    q12.createChoice('Uso de termos exatos que não deixam margem para interpretações opostas ou duvidosas', true),
    q12.createChoice('Dizer a um colega que sua opinião é valorizada, mas interrompê-lo a cada três segundos durante a reunião, gera um ruído irremediável de credibilidade', false),
    q12.createChoice('A pontuação organiza a respiração mental do leitor e estrutura as relações lógicas da sentença', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. Qual conceito a aula define como: "Foco direto no propósito sem rodeios desnecessários"?');
  q13.setChoices([
    q13.createChoice('Clareza', false),
    q13.createChoice('Coerência', false),
    q13.createChoice('Concisão', false),
    q13.createChoice('Objetividade', true)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "A Natureza da Ambiguidade"?');
  q14.setChoices([
    q14.createChoice('Tarefas executadas incorretamente precisam ser refeitas do zero, consumindo horas extras', false),
    q14.createChoice('A ambiguidade ocorre quando uma palavra, oração ou frase permite mais de um sentido legítimo dentro do mesmo contexto', true),
    q14.createChoice('A eficácia da mensagem depende da capacidade de decodificação de quem a recebe. Adequar a linguagem não é empobrecer o conteúdo, mas garantir o acesso pleno à...', false),
    q14.createChoice('Dizer a um colega que sua opinião é valorizada, mas interrompê-lo a cada três segundos durante a reunião, gera um ruído irremediável de credibilidade', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "O Perfil do Receptor"?');
  q15.setChoices([
    q15.createChoice('Usado entre pares, familiares e colegas de equipe em conversas cotidianas. Aceita coloquialismo sem perder clareza', false),
    q15.createChoice('A eficácia da mensagem depende da capacidade de decodificação de quem a recebe. Adequar a linguagem não é empobrecer o conteúdo, mas garantir o acesso pleno à...', true),
    q15.createChoice('Erro em memorando hospitalar gera suspensão indevida de leitos pediátricos', false),
    q15.createChoice('Como transformar ideias em mensagens claras, precisas e compreensíveis', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "Coerência: Discurso e Ação"?');
  q16.setChoices([
    q16.createChoice('A pontuação organiza a respiração mental do leitor e estrutura as relações lógicas da sentença', false),
    q16.createChoice('Erro em memorando hospitalar gera suspensão indevida de leitos pediátricos', false),
    q16.createChoice('Dizer a um colega que sua opinião é valorizada, mas interrompê-lo a cada três segundos durante a reunião, gera um ruído irremediável de credibilidade', true),
    q16.createChoice('Ser conciso não significa ser telegráfico ou grosseiro. Trata-se de eliminar redundâncias e rodeios vazios para valorizar o tempo do leitor', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Comunicação Eficaz"?');
  q17.setChoices([
    q17.createChoice('A ausência ou o deslocamento de vírgulas altera por completo a função do vocativo e do aposto', false),
    q17.createChoice('Tarefas executadas incorretamente precisam ser refeitas do zero, consumindo horas extras', false),
    q17.createChoice('Como transformar ideias em mensagens claras, precisas e compreensíveis', true),
    q17.createChoice('Usado entre pares, familiares e colegas de equipe em conversas cotidianas. Aceita coloquialismo sem perder clareza', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Coerência"?');
  q18.setChoices([
    q18.createChoice('Ausência de obscuridade; mensagem sem margem a dúvidas', false),
    q18.createChoice('Transmissão do máximo de ideias com o mínimo de termos', false),
    q18.createChoice('Foco direto no propósito sem rodeios desnecessários', false),
    q18.createChoice('Harmonia lógica e integridade estrutural das ideias', true)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Qual conceito a aula define como: "Transmissão do máximo de ideias com o mínimo de termos"?');
  q19.setChoices([
    q19.createChoice('Objetividade', false),
    q19.createChoice('Clareza', false),
    q19.createChoice('Coerência', false),
    q19.createChoice('Concisão', true)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Qual conceito a aula define como: "Ausência de obscuridade; mensagem sem margem a dúvidas"?');
  q20.setChoices([
    q20.createChoice('Objetividade', false),
    q20.createChoice('Concisão', false),
    q20.createChoice('Clareza', true),
    q20.createChoice('Coerência', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 12 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 12 — Comunicação Eficaz Como transformar ideias em mensagens claras, precisas e compreensíveis');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula12() {
  var form = FormApp.openByTitle('Avaliação — Aula 12 · Comunicação Eficaz Como transformar ideias em mensagens claras, precisas e compreensíveis · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 12: Comunicação Eficaz Como transformar ideias em mensagens claras, precisas e compreensíveis');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Comunicação Eficaz Como transformar ideias em mensagens claras, precisas e compreensíveis', 'É um conceito importante apresentado na aula', 'O Custo de um Mal-entendido', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Ausência de obscuridade; mensagem sem margem a dúvidas.', 'Foco direto no propósito sem rodeios desnecessários.', 'Transmissão do máximo de ideias com o mínimo de termos.', 'Discurso e Ação', 'O Processo Comunicativo', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 13
// ════════════════════════════════════════════════════════════


function criarFormularioAula13() {
  var form = FormApp.create('Avaliação — Aula 13 · Etiqueta Digital e Netiqueta Convivência e postura ética no ambiente virtual · SENAI');

  form.setDescription( 'Avaliação Completa: Etiqueta Digital e Netiqueta Convivência e postura ética no ambiente virtual\n\nAula 13 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Etiqueta Digital e Netiqueta Convivência e postura ética no ambiente virtual');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. Qual conceito a aula define como: "contexto é tudo. Conheça seu público antes de usar elementos visuais descontraídos"?');
  q1.setChoices([
    q1.createChoice('Netiqueta', false),
    q1.createChoice('Impacto', false),
    q1.createChoice('Desvio ético', false),
    q1.createChoice('A regra de ouro é', true)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Segundo a aula, o que é "Lição"?');
  q2.setChoices([
    q2.createChoice('Clima tóxico, ressentimento e desagregação do grupo', false),
    q2.createChoice('Confidencialidade é direito e dever inegociável', true),
    q2.createChoice('a maneira como tratamos os outros e compartilhamos dados alheios define nossa cidadania online', false),
    q2.createChoice('contexto é tudo. Conheça seu público antes de usar elementos visuais descontraídos', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Segundo a aula, o que é "Etiqueta"?');
  q3.setChoices([
    q3.createChoice('Letras maiúsculas, pontuação exagerada e emojis fora de hora alteram drasticamente o sentido da sua fala', false),
    q3.createChoice('Posturas preconceituosas ou difamações em perfis abertos impactam seleções de estágio e emprego', false),
    q3.createChoice('Convenções sociais de respeito mútuo', true),
    q3.createChoice('Respeite horários de descanso, preserve dados de terceiros e evite expor erros dos colegas em público', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Qual conceito a aula define como: "Respeite horários de descanso, preserve dados de terceiros e evite expor erros dos colegas em público"?');
  q4.setChoices([
    q4.createChoice('Em chats de equipes', false),
    q4.createChoice('Pratique a comunicação assíncrona respeitosa', false),
    q4.createChoice('Proteja a privacidade coletiva', true),
    q4.createChoice('Etiqueta', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Qual conceito a aula define como: "Letras maiúsculas, pontuação exagerada e emojis fora de hora alteram drasticamente o sentido da sua fala"?');
  q5.setChoices([
    q5.createChoice('Convivência', false),
    q5.createChoice('O formato comunica intenção', true),
    q5.createChoice('A regra de ouro é', false),
    q5.createChoice('Vestimenta adequada', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Recapitulando: Segurança e Privacidade"?');
  q6.setChoices([
    q6.createChoice('A reputação construída ao longo de anos pode ser desfeita por uma postagem imprudente de poucos segundos', false),
    q6.createChoice('O espaço ao nosso redor transmite mensagens sobre nosso compromisso com o encontro', false),
    q6.createChoice('O phishing utiliza mensagens fraudulentas com tom de urgência para induzir o usuário ao erro e roubar credenciais confidenciais', false),
    q6.createChoice('Na aula anterior, aprendemos que nossa pegada digital exige cautela permanente. Proteger dados pessoais, criar senhas robustas e não compartilhar informações...', true)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. De acordo com a aula, o que caracteriza "Comparando Estilos de Escrita"?');
  q7.setChoices([
    q7.createChoice('Preserva o respeito, estabelece clareza e facilita a colaboração voluntária', true),
    q7.createChoice('Pratique a comunicação assíncrona respeitosa: envie dentro do período comercial ou deixe claro que a resposta pode aguardar o dia seguinte', false),
    q7.createChoice('Ordene os passos recomendados ao lidar com uma mensagem que pareceu rude em um grupo de trabalho escolar', false),
    q7.createChoice('Impressão e emoção transmitidas por pontuação e escolha de palavras', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Segundo a aula, o que é "Mas segurança técnica não basta"?');
  q8.setChoices([
    q8.createChoice('Exposição pública humilhante do erro alheio', false),
    q8.createChoice('Coabitar pacificamente espaços comuns', false),
    q8.createChoice('a maneira como tratamos os outros e compartilhamos dados alheios define nossa cidadania online', true),
    q8.createChoice('Letras maiúsculas, pontuação exagerada e emojis fora de hora alteram drasticamente o sentido da sua fala', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Segundo a aula, o que é "Desvio ético"?');
  q9.setChoices([
    q9.createChoice('Suspensão disciplinar e possibilidade de processo por danos morais na justiça comum', false),
    q9.createChoice('Exposição pública humilhante do erro alheio', true),
    q9.createChoice('contexto é tudo. Conheça seu público antes de usar elementos visuais descontraídos', false),
    q9.createChoice('Uma piada privada sobre um professor feita em um aplicativo de mensagens é printada e postada nos Stories públicos de outra rede social', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Segundo a aula, o que é "Plano de fundo"?');
  q10.setChoices([
    q10.createChoice('Respeite horários de descanso, preserve dados de terceiros e evite expor erros dos colegas em público', false),
    q10.createChoice('Atitude ética e responsabilidade ativa', false),
    q10.createChoice('Prefira paredes neutras ou use fundos desfocados para resguardar sua privacidade familiar', true),
    q10.createChoice('Confidencialidade é direito e dever inegociável', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Verificação de Postura em Vídeo"?');
  q11.setChoices([
    q11.createChoice('Alguns gestos e emojis têm significados diferentes dependendo da faixa etária e cultura corporativa', false),
    q11.createChoice('Valorize o tempo alheio sem exigir respostas imediatas fora do expediente ou das aulas', false),
    q11.createChoice('Verificar o remetente oficial e jamais clicar em links com tom de urgência imediata', false),
    q11.createChoice('Durante uma aula online com 30 colegas, manter o microfone sempre aberto facilita a participação espontânea de todos', true)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Segundo a aula, o que é "Netiqueta"?');
  q12.setChoices([
    q12.createChoice('Respeite horários de descanso, preserve dados de terceiros e evite expor erros dos colegas em público', false),
    q12.createChoice('Boas maneiras e respeito na internet', true),
    q12.createChoice('Prefira paredes neutras ou use fundos desfocados para resguardar sua privacidade familiar', false),
    q12.createChoice('Exposição pública humilhante do erro alheio', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "A Visão de um Especialista"?');
  q13.setChoices([
    q13.createChoice('Essa máxima pioneira formulada nos primórdios da internet permanece como a regra de convivência mais atual e essencial para todos nós', true),
    q13.createChoice('Alguns gestos e emojis têm significados diferentes dependendo da faixa etária e cultura corporativa', false),
    q13.createChoice('Preserva o respeito, estabelece clareza e facilita a colaboração voluntária', false),
    q13.createChoice('Desative notificações de grupos não essenciais enquanto realiza leituras ou tarefas que exigem concentração profunda', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Qual conceito a aula define como: "Um emoji pontual de positivo (👍) ou sorriso confirma leitura sem gerar ruído"?');
  q14.setChoices([
    q14.createChoice('Pratique a comunicação assíncrona respeitosa', false),
    q14.createChoice('Convivência', false),
    q14.createChoice('O formato comunica intenção', false),
    q14.createChoice('Em chats de equipes', true)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Segundo a aula, o que é "Cenário"?');
  q15.setChoices([
    q15.createChoice('Prefira paredes neutras ou use fundos desfocados para resguardar sua privacidade familiar', false),
    q15.createChoice('Uma piada privada sobre um professor feita em um aplicativo de mensagens é printada e postada nos Stories públicos de outra rede social', true),
    q15.createChoice('a maneira como tratamos os outros e compartilhamos dados alheios define nossa cidadania online', false),
    q15.createChoice('Vista-se de maneira condizente com a aula ou trabalho, evitando roupas inadequadas', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "Tom de Voz Escrito"?');
  q16.setChoices([
    q16.createChoice('Impressão e emoção transmitidas por pontuação e escolha de palavras', true),
    q16.createChoice('A reputação construída ao longo de anos pode ser desfeita por uma postagem imprudente de poucos segundos', false),
    q16.createChoice('Para celebrar conquistas de equipe, demonstrar acolhimento ou confirmar recebimento rápido de tarefa', false),
    q16.createChoice('Valorize o tempo alheio sem exigir respostas imediatas fora do expediente ou das aulas', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Pilares das Relações Virtuais"?');
  q17.setChoices([
    q17.createChoice('Durante uma aula online com 30 colegas, manter o microfone sempre aberto facilita a participação espontânea de todos', false),
    q17.createChoice('Pratique a comunicação assíncrona respeitosa: envie dentro do período comercial ou deixe claro que a resposta pode aguardar o dia seguinte', false),
    q17.createChoice('Ordene os passos recomendados ao lidar com uma mensagem que pareceu rude em um grupo de trabalho escolar', false),
    q17.createChoice('Lembre-se de que há um ser humano real do outro lado da tela, com sentimentos e limitações', true)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "Canais Estruturados (E-mail)"?');
  q18.setChoices([
    q18.createChoice('Desative notificações de grupos não essenciais enquanto realiza leituras ou tarefas que exigem concentração profunda', false),
    q18.createChoice('Adequados para arquivos formais, relatórios ou solicitações complexas', true),
    q18.createChoice('Para celebrar conquistas de equipe, demonstrar acolhimento ou confirmar recebimento rápido de tarefa', false),
    q18.createChoice('Vazamentos de conversas quebram a confiança e geram repercussão pública', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Segundo a aula, o que é "Pratique a comunicação assíncrona respeitosa"?');
  q19.setChoices([
    q19.createChoice('envie dentro do período comercial ou deixe claro que a resposta pode aguardar o dia seguinte', true),
    q19.createChoice('Exposição pública humilhante do erro alheio', false),
    q19.createChoice('a maneira como tratamos os outros e compartilhamos dados alheios define nossa cidadania online', false),
    q19.createChoice('Suspensão disciplinar e possibilidade de processo por danos morais na justiça comum', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "Quando Evitar"?');
  q20.setChoices([
    q20.createChoice('Em conversas sobre temas delicados, críticas construtivas ou reclamações sérias de serviço', true),
    q20.createChoice('Ao receber uma advertência formal do coordenador escolar ou gestor sobre prazos', false),
    q20.createChoice('Pratique a netiqueta diariamente e construa uma presença online ética, respeitosa e admirável!', false),
    q20.createChoice('Adequados para arquivos formais, relatórios ou solicitações complexas', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 13 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 13 — Etiqueta Digital e Netiqueta Convivência e postura ética no ambiente virtual');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula13() {
  var form = FormApp.openByTitle('Avaliação — Aula 13 · Etiqueta Digital e Netiqueta Convivência e postura ética no ambiente virtual · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 13: Etiqueta Digital e Netiqueta Convivência e postura ética no ambiente virtual');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Etiqueta Digital e Netiqueta Convivência e postura ética no ambiente virtual', 'É um conceito importante apresentado na aula', 'O peso das palavras na tela', 'É um conceito importante apresentado na aula', 'Objetivos da Nossa Aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Boas maneiras e respeito na internet.', 'Convenções sociais de respeito mútuo.', 'Coabitar pacificamente espaços comuns.', 'Atitude ética e responsabilidade ativa.', 'Segurança e Privacidade', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 14
// ════════════════════════════════════════════════════════════


function criarFormularioAula14() {
  var form = FormApp.create('Avaliação — Aula 14 · Trabalho Remoto e Colaboração Práticas e ferramentas para produzir em equipe digital · SENAI');

  form.setDescription( 'Avaliação Completa: Trabalho Remoto e Colaboração Práticas e ferramentas para produzir em equipe digital\n\nAula 14 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Trabalho Remoto e Colaboração Práticas e ferramentas para produzir em equipe digital');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Controle de Versões"?');
  q1.setChoices([
    q1.createChoice('Se surgir um imprevisto técnico ou pessoal, comunicar a equipe antes do horário limite', false),
    q1.createChoice('Definir horários específicos para ler, redigir e revisar, em vez de deixar tudo para a última noite', false),
    q1.createChoice('Isso transforma uma observação genérica em uma atribuição clara de responsabilidade, indicando exatamente quem deve responder àquela pendência', false),
    q1.createChoice('O histórico de versões funciona como uma verdadeira máquina do tempo dentro de ferramentas em nuvem', true)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "ROTINA DE TRABALHO"?');
  q2.setChoices([
    q2.createChoice('Inserir um comentário na tabela marcando o colega com @ e explicando o pedido', false),
    q2.createChoice('Uma daily (ou check-in rápido) é uma reunião muito curta, de 10 a 15 minutos, usada por equipes modernas para manter o alinhamento sem tomar o dia de ninguém', true),
    q2.createChoice('Sinalizar dúvidas ou bloqueios que dependem de outra pessoa para que o grupo ajude a resolver', false),
    q2.createChoice('Selecionar todo o texto e colar algo por cima. Resolva usando o atalho de desfazer (Ctrl+Z) ou restaurando a versão anterior', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "Comunicação Síncrona"?');
  q3.setChoices([
    q3.createChoice('Produção contínua de relatórios, atas e textos com escrita colaborativa', false),
    q3.createChoice('Ocorre em tempo real. Exige presença simultânea em videochamadas ou chamadas rápidas para decisões urgentes', true),
    q3.createChoice('Atualizar o status das tarefas no quadro virtual assim que concluir uma etapa combinada', false),
    q3.createChoice('Pode apenas ler o arquivo. Ideal para divulgar regulamentos, roteiros e textos finais concluídos', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. De acordo com a aula, o que caracteriza "Documentos de Texto"?');
  q4.setChoices([
    q4.createChoice('Notificar diretamente um membro da equipe em um comentário', false),
    q4.createChoice('Pode apenas ler o arquivo. Ideal para divulgar regulamentos, roteiros e textos finais concluídos', false),
    q4.createChoice('Definir horários específicos para ler, redigir e revisar, em vez de deixar tudo para a última noite', false),
    q4.createChoice('Produção contínua de relatórios, atas e textos com escrita colaborativa', true)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "Vocabulário Fundamental"?');
  q5.setChoices([
    q5.createChoice('Produção contínua de relatórios, atas e textos com escrita colaborativa', false),
    q5.createChoice('Assíncrono - Diálogo que ocorre em tempos diferentes, sem resposta imediata', true),
    q5.createChoice('Quando várias pessoas estão no mesmo documento, os cursores coloridos mostram onde cada colega está lendo ou escrevendo', false),
    q5.createChoice('Em vez de modificar diretamente o parágrafo escrito por um colega, a melhor prática assíncrona é destacar o trecho e inserir um comentário', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "CONCEITO-CHAVE"?');
  q6.setChoices([
    q6.createChoice('Selecionar todo o texto e colar algo por cima. Resolva usando o atalho de desfazer (Ctrl+Z) ou restaurando a versão anterior', false),
    q6.createChoice('Ambientes virtuais de trabalho colaborativo são plataformas em nuvem que permitem que várias pessoas visualizem, escrevam e organizem projetos em um único lugar', true),
    q6.createChoice('Quando você digita o símbolo @ seguido do nome do colega em um comentário, a plataforma envia uma notificação direta para o e-mail dele', false),
    q6.createChoice('No ambiente digital, cada demanda precisa de três elementos obrigatórios: o que fazer, quem é o responsável único e a data e hora limite exatas', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. De acordo com a aula, o que caracteriza "Poder dos Comentários"?');
  q7.setChoices([
    q7.createChoice('No ambiente digital, cada demanda precisa de três elementos obrigatórios: o que fazer, quem é o responsável único e a data e hora limite exatas', false),
    q7.createChoice('Cada modificação é salva automaticamente com registro de horário e nome de quem realizou a edição, permitindo comparar alterações ou desfazer erros graves', false),
    q7.createChoice('Selecionar todo o texto e colar algo por cima. Resolva usando o atalho de desfazer (Ctrl+Z) ou restaurando a versão anterior', false),
    q7.createChoice('Em vez de modificar diretamente o parágrafo escrito por um colega, a melhor prática assíncrona é destacar o trecho e inserir um comentário', true)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "Comunicação no Documento"?');
  q8.setChoices([
    q8.createChoice('Manter um local limpo, organizado e livre de distrações imediatas para estudar e produzir', false),
    q8.createChoice('Painéis visuais para tempestade de ideias, mapas conceituais e fluxogramas', false),
    q8.createChoice('Isso transforma uma observação genérica em uma atribuição clara de responsabilidade, indicando exatamente quem deve responder àquela pendência', false),
    q8.createChoice('Inserir um comentário na tabela marcando o colega com @ e explicando o pedido', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Trabalhar Junto Sem Estar Perto"?');
  q9.setChoices([
    q9.createChoice('Quadros tipo Kanban para acompanhar o status e o responsável por cada etapa', false),
    q9.createChoice('Definir horários específicos para ler, redigir e revisar, em vez de deixar tudo para a última noite', false),
    q9.createChoice('Manter um local limpo, organizado e livre de distrações imediatas para estudar e produzir', false),
    q9.createChoice('Imagine escrever um trabalho escolar em grupo onde quatro pessoas editam o mesmo parágrafo ao mesmo tempo, sem conversar antes', true)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "Planilhas Online"?');
  q10.setChoices([
    q10.createChoice('Se surgir um imprevisto técnico ou pessoal, comunicar a equipe antes do horário limite', false),
    q10.createChoice('Selecionar todo o texto e colar algo por cima. Resolva usando o atalho de desfazer (Ctrl+Z) ou restaurando a versão anterior', false),
    q10.createChoice('Notificar diretamente um membro da equipe em um comentário', false),
    q10.createChoice('Controle conjunto de prazos, divisões orçamentárias e dados de pesquisa', true)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Revisando Netiqueta e Postura"?');
  q11.setChoices([
    q11.createChoice('Pode apenas ler o arquivo. Ideal para divulgar regulamentos, roteiros e textos finais concluídos', false),
    q11.createChoice('Ocorre em tempo real. Exige presença simultânea em videochamadas ou chamadas rápidas para decisões urgentes', false),
    q11.createChoice('O histórico de versões funciona como uma verdadeira máquina do tempo dentro de ferramentas em nuvem', false),
    q11.createChoice('Na aula anterior, vimos que a netiqueta é o conjunto de boas maneiras na internet. No trabalho remoto, nossa presença se manifesta principalmente pelo que escrevemos', true)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Comunicação Assíncrona"?');
  q12.setChoices([
    q12.createChoice('Imagine escrever um trabalho escolar em grupo onde quatro pessoas editam o mesmo parágrafo ao mesmo tempo, sem conversar antes', false),
    q12.createChoice('Produção contínua de relatórios, atas e textos com escrita colaborativa', false),
    q12.createChoice('Ocorre com respostas em tempos diferentes. Permite reflexão profunda, respeita ritmos e fica registrada por escrito', true),
    q12.createChoice('Nunca comece a digitar dentro do mesmo parágrafo em que outro cursor já está ativo. Espere o colega concluir o raciocínio ou trabalhe em outra seção', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "SEGURANÇA DE DADOS"?');
  q13.setChoices([
    q13.createChoice('Quando você digita o símbolo @ seguido do nome do colega em um comentário, a plataforma envia uma notificação direta para o e-mail dele', false),
    q13.createChoice('Uma daily (ou check-in rápido) é uma reunião muito curta, de 10 a 15 minutos, usada por equipes modernas para manter o alinhamento sem tomar o dia de ninguém', false),
    q13.createChoice('Cada modificação é salva automaticamente com registro de horário e nome de quem realizou a edição, permitindo comparar alterações ou desfazer erros graves', true),
    q13.createChoice('Notificar diretamente um membro da equipe em um comentário', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "RECURSO DIGITAL"?');
  q14.setChoices([
    q14.createChoice('Reunião curta focada em progresso e remoção de bloqueios', false),
    q14.createChoice('Imagine escrever um trabalho escolar em grupo onde quatro pessoas editam o mesmo parágrafo ao mesmo tempo, sem conversar antes', false),
    q14.createChoice('Na aula anterior, vimos que a netiqueta é o conjunto de boas maneiras na internet. No trabalho remoto, nossa presença se manifesta principalmente pelo que escrevemos', false),
    q14.createChoice('Isso transforma uma observação genérica em uma atribuição clara de responsabilidade, indicando exatamente quem deve responder àquela pendência', true)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Marcações Direcionadas com @"?');
  q15.setChoices([
    q15.createChoice('No ambiente digital, cada demanda precisa de três elementos obrigatórios: o que fazer, quem é o responsável único e a data e hora limite exatas', false),
    q15.createChoice('Manter um local limpo, organizado e livre de distrações imediatas para estudar e produzir', false),
    q15.createChoice('Na aula anterior, vimos que a netiqueta é o conjunto de boas maneiras na internet. No trabalho remoto, nossa presença se manifesta principalmente pelo que escrevemos', false),
    q15.createChoice('Quando você digita o símbolo @ seguido do nome do colega em um comentário, a plataforma envia uma notificação direta para o e-mail dele', true)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "Tipos de Ferramentas em Nuvem"?');
  q16.setChoices([
    q16.createChoice('Produção contínua de relatórios, atas e textos com escrita colaborativa', false),
    q16.createChoice('Quadros tipo Kanban para acompanhar o status e o responsável por cada etapa', true),
    q16.createChoice('Quais das seguintes afirmações sobre colaboração em ambientes digitais são verdadeiras? (Mais de uma está correta)', false),
    q16.createChoice('Ocorre com respostas em tempos diferentes. Permite reflexão profunda, respeita ritmos e fica registrada por escrito', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Etiqueta na Edição Simultânea"?');
  q17.setChoices([
    q17.createChoice('Ocorre em tempo real. Exige presença simultânea em videochamadas ou chamadas rápidas para decisões urgentes', false),
    q17.createChoice('Quais das seguintes afirmações sobre colaboração em ambientes digitais são verdadeiras? (Mais de uma está correta)', false),
    q17.createChoice('Quando várias pessoas estão no mesmo documento, os cursores coloridos mostram onde cada colega está lendo ou escrevendo', true),
    q17.createChoice('Três pessoas pesquisando a introdução e ninguém cuidando da conclusão. Evite isso distribuindo seções antes de abrir o arquivo', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "Quadros Virtuais"?');
  q18.setChoices([
    q18.createChoice('Manter um local limpo, organizado e livre de distrações imediatas para estudar e produzir', false),
    q18.createChoice('Definir horários específicos para ler, redigir e revisar, em vez de deixar tudo para a última noite', false),
    q18.createChoice('Reunião curta focada em progresso e remoção de bloqueios', false),
    q18.createChoice('Painéis visuais para tempestade de ideias, mapas conceituais e fluxogramas', true)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "Falta de Divisão Prévia"?');
  q19.setChoices([
    q19.createChoice('Três pessoas pesquisando a introdução e ninguém cuidando da conclusão. Evite isso distribuindo seções antes de abrir o arquivo', true),
    q19.createChoice('Em vez de modificar diretamente o parágrafo escrito por um colega, a melhor prática assíncrona é destacar o trecho e inserir um comentário', false),
    q19.createChoice('Se surgir um imprevisto técnico ou pessoal, comunicar a equipe antes do horário limite', false),
    q19.createChoice('No ambiente digital, cada demanda precisa de três elementos obrigatórios: o que fazer, quem é o responsável único e a data e hora limite exatas', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "Transparência Ativa"?');
  q20.setChoices([
    q20.createChoice('Nunca comece a digitar dentro do mesmo parágrafo em que outro cursor já está ativo. Espere o colega concluir o raciocínio ou trabalhe em outra seção', false),
    q20.createChoice('Três pessoas pesquisando a introdução e ninguém cuidando da conclusão. Evite isso distribuindo seções antes de abrir o arquivo', false),
    q20.createChoice('Atualizar o status das tarefas no quadro virtual assim que concluir uma etapa combinada', true),
    q20.createChoice('Manter um local limpo, organizado e livre de distrações imediatas para estudar e produzir', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 14 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 14 — Trabalho Remoto e Colaboração Práticas e ferramentas para produzir em equipe digital');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula14() {
  var form = FormApp.openByTitle('Avaliação — Aula 14 · Trabalho Remoto e Colaboração Práticas e ferramentas para produzir em equipe digital · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 14: Trabalho Remoto e Colaboração Práticas e ferramentas para produzir em equipe digital');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Trabalho Remoto e Colaboração Práticas e ferramentas para produzir em equipe digital', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos da Nossa Aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Por que devemos evitar escrever frases inteiras em letras maiúsculas no chat de trabalho?', 'Qual é o papel do microfone mudo durante uma videoconferência com muitas pessoas?', 'O que devemos checar antes de enviar uma mensagem com dúvidas em grupo?', 'Porque letras maiúsculas transmitem a impressão de grito ou agressividade.', 'Evitar que ruídos do ambiente atrapalhem quem está com a palavra.', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 15
// ════════════════════════════════════════════════════════════


function criarFormularioAula15() {
  var form = FormApp.create('Avaliação — Aula 15 · Linguagem Corporal e Comunicação O poder dos sinais não-verbais no ambiente profissional · SENAI');

  form.setDescription( 'Avaliação Completa: Linguagem Corporal e Comunicação O poder dos sinais não-verbais no ambiente profissional\n\nAula 15 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Linguagem Corporal e Comunicação O poder dos sinais não-verbais no ambiente profissional');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. Segundo a aula, o que é "Proxêmica"?');
  q1.setChoices([
    q1.createChoice('Gestual e modulação do tom de voz para apresentações dinâmicas e persuasivas', false),
    q1.createChoice('Todo sinal comunicado sem palavras faladas ou escritas', false),
    q1.createChoice('Estudo do uso do espaço físico e da distância interpessoal', true),
    q1.createChoice('Descobrimos como postura, olhar, proxêmica e congruência fundamentam a credibilidade', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Qual conceito a aula define como: "Posição sustentada do corpo que reflete estados internos e atitude"?');
  q2.setChoices([
    q2.createChoice('Congruência', false),
    q2.createChoice('Próxima Aula', false),
    q2.createChoice('Postura', true),
    q2.createChoice('Proxêmica', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Qual conceito a aula define como: "Harmonia precisa entre o que a voz diz e o corpo expressa"?');
  q3.setChoices([
    q3.createChoice('Proxêmica', false),
    q3.createChoice('Postura', false),
    q3.createChoice('Congruência', true),
    q3.createChoice('Hoje', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Próxima Aula"?');
  q4.setChoices([
    q4.createChoice('Posição sustentada do corpo que reflete estados internos e atitude', false),
    q4.createChoice('Descobrimos como postura, olhar, proxêmica e congruência fundamentam a credibilidade', false),
    q4.createChoice('Gestual e modulação do tom de voz para apresentações dinâmicas e persuasivas', true),
    q4.createChoice('Harmonia precisa entre o que a voz diz e o corpo expressa', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Segundo a aula, o que é "Hoje"?');
  q5.setChoices([
    q5.createChoice('Posição sustentada do corpo que reflete estados internos e atitude', false),
    q5.createChoice('Descobrimos como postura, olhar, proxêmica e congruência fundamentam a credibilidade', true),
    q5.createChoice('Gestual e modulação do tom de voz para apresentações dinâmicas e persuasivas', false),
    q5.createChoice('Estudo do uso do espaço físico e da distância interpessoal', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Expressões Faciais e Fala"?');
  q6.setChoices([
    q6.createChoice('O rosto possui dezenas de músculos que reagem a microemoções. Em conversas formais, expressões relaxadas e pequenos sorrisos de acolhimento desarmam tensões e...', true),
    q6.createChoice('A congruência ocorre quando voz, palavras e corpo contam exatamente a mesma história. Quando há conflito entre o que se fala e como o corpo se comporta, as pessoas...', false),
    q6.createChoice('Balance suavemente a cabeça enquanto o entrevistador faz as perguntas', false),
    q6.createChoice('Indicam pressa, perda de foco ou necessidade de sintetizar o assunto', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Segundo a aula, o que é "Congruência"?');
  q7.setChoices([
    q7.createChoice('Estudo do uso do espaço físico e da distância interpessoal', false),
    q7.createChoice('Harmonia precisa entre o que a voz diz e o corpo expressa', true),
    q7.createChoice('Descobrimos como postura, olhar, proxêmica e congruência fundamentam a credibilidade', false),
    q7.createChoice('Gestual e modulação do tom de voz para apresentações dinâmicas e persuasivas', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "Linguagem Corporal em Entrevistas"?');
  q8.setChoices([
    q8.createChoice('Segurar pastas ou cadernos como escudos na frente do tórax', false),
    q8.createChoice('Comunicação não-verbal abrange todos os estímulos emitidos durante uma interação que não dependem do vocabulário verbal: expressões do rosto, gestos de mãos...', false),
    q8.createChoice('Como raramente vemos a nossa própria postura enquanto falamos, ter um parceiro de treino para apontar tiques nervosos, velocidade de gestos e desvios de olhar é a...', false),
    q8.createChoice('Cumprimente olhando nos olhos com passo firme e sorriso de boas-vindas', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Ritmo Compartilhado"?');
  q9.setChoices([
    q9.createChoice('Sente-se ocupando o encosto; sentar na ponta transmite fuga iminente', false),
    q9.createChoice('Deixe as mãos sobre a mesa ou no colo, sem sumir com elas sob o tampo', false),
    q9.createChoice('Comprime a respiração diafragmática e reduz a projeção da voz', false),
    q9.createChoice('Ajustar a velocidade da sua fala à de quem ouve gera acolhimento sem pressão', true)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "O Impacto na Percepção Oral"?');
  q10.setChoices([
    q10.createChoice('O contato visual direto e equilibrado sinaliza atenção honesta e consideração. Quem evita olhar transmite evasão ou insegurança; quem fixa o olhar sem piscar pode...', false),
    q10.createChoice('Dizer que está muito feliz com o projeto enquanto franze a testa gera desconfiança imediata no ouvinte', false),
    q10.createChoice('Sente-se ocupando o encosto; sentar na ponta transmite fuga iminente', false),
    q10.createChoice('Quando alguém sobe ao palco para falar, o público formula uma primeira impressão sobre credibilidade e entusiasmo antes mesmo da conclusão do primeiro parágrafo. O...', true)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Inclinação da Cabeça"?');
  q11.setChoices([
    q11.createChoice('Sintonia e harmonia perfeita entre o discurso falado e os gestos corporais', false),
    q11.createChoice('Cumprimente olhando nos olhos com passo firme e sorriso de boas-vindas', false),
    q11.createChoice('Demonstra curiosidade genuína e escuta ativa ativa na conversa', true),
    q11.createChoice('Gesticule preferencialmente entre a linha da cintura e a altura do peito. Mãos muito altas distraem os ouvintes; mãos imóveis nos bolsos transmitem apatia e...', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Qual conceito a aula define como: "Estudo do uso do espaço físico e da distância interpessoal"?');
  q12.setChoices([
    q12.createChoice('Proxêmica', true),
    q12.createChoice('Não-verbal', false),
    q12.createChoice('Congruência', false),
    q12.createChoice('Postura', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. Qual conceito a aula define como: "Gestual e modulação do tom de voz para apresentações dinâmicas e persuasivas"?');
  q13.setChoices([
    q13.createChoice('Postura', false),
    q13.createChoice('Proxêmica', false),
    q13.createChoice('Próxima Aula', true),
    q13.createChoice('Não-verbal', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Dicas para o Contato Visual"?');
  q14.setChoices([
    q14.createChoice('Como raramente vemos a nossa própria postura enquanto falamos, ter um parceiro de treino para apontar tiques nervosos, velocidade de gestos e desvios de olhar é a...', false),
    q14.createChoice('Sustentar o olhar em um interlocutor por 3 a 5 segundos enquanto conclui um argumento demonstra domínio e gera conexão imediata com quem ouve', true),
    q14.createChoice('Estudos em psicologia comportamental mostram que a postura não apenas expressa o que sentimos, mas também envia sinais químicos ao cérebro. Adotar posturas...', false),
    q14.createChoice('Quais dos seguintes comportamentos corporais indicam abertura e segurança durante uma exposição em grupo? Selecione as opções corretas', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Muito além das palavras escritas"?');
  q15.setChoices([
    q15.createChoice('O contato visual direto e equilibrado sinaliza atenção honesta e consideração. Quem evita olhar transmite evasão ou insegurança; quem fixa o olhar sem piscar pode...', false),
    q15.createChoice('Como raramente vemos a nossa própria postura enquanto falamos, ter um parceiro de treino para apontar tiques nervosos, velocidade de gestos e desvios de olhar é a...', false),
    q15.createChoice('Comunicação não-verbal abrange todos os estímulos emitidos durante uma interação que não dependem do vocabulário verbal: expressões do rosto, gestos de mãos...', true),
    q15.createChoice('Cumprimente olhando nos olhos com passo firme e sorriso de boas-vindas', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Qual conceito a aula define como: "Descobrimos como postura, olhar, proxêmica e congruência fundamentam a credibilidade"?');
  q16.setChoices([
    q16.createChoice('Próxima Aula', false),
    q16.createChoice('Postura', false),
    q16.createChoice('Não-verbal', false),
    q16.createChoice('Hoje', true)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Olhar o Celular"?');
  q17.setChoices([
    q17.createChoice('Cria uma base de confiança mútua indispensável para negociações e feedback', false),
    q17.createChoice('Sintonia e harmonia perfeita entre o discurso falado e os gestos corporais', false),
    q17.createChoice('Rompe imediatamente o vínculo e denota desrespeito a quem fala', true),
    q17.createChoice('A mensagem perde credibilidade porque as pessoas tendem a confiar prioritariamente nos sinais corporais incongruentes', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Não-verbal"?');
  q18.setChoices([
    q18.createChoice('Gestual e modulação do tom de voz para apresentações dinâmicas e persuasivas', false),
    q18.createChoice('Estudo do uso do espaço físico e da distância interpessoal', false),
    q18.createChoice('Harmonia precisa entre o que a voz diz e o corpo expressa', false),
    q18.createChoice('Todo sinal comunicado sem palavras faladas ou escritas', true)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Segundo a aula, o que é "Postura"?');
  q19.setChoices([
    q19.createChoice('Estudo do uso do espaço físico e da distância interpessoal', false),
    q19.createChoice('Gestual e modulação do tom de voz para apresentações dinâmicas e persuasivas', false),
    q19.createChoice('Posição sustentada do corpo que reflete estados internos e atitude', true),
    q19.createChoice('Harmonia precisa entre o que a voz diz e o corpo expressa', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Qual conceito a aula define como: "Todo sinal comunicado sem palavras faladas ou escritas"?');
  q20.setChoices([
    q20.createChoice('Hoje', false),
    q20.createChoice('Congruência', false),
    q20.createChoice('Não-verbal', true),
    q20.createChoice('Postura', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 15 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 15 — Linguagem Corporal e Comunicação O poder dos sinais não-verbais no ambiente profissional');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula15() {
  var form = FormApp.openByTitle('Avaliação — Aula 15 · Linguagem Corporal e Comunicação O poder dos sinais não-verbais no ambiente profissional · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 15: Linguagem Corporal e Comunicação O poder dos sinais não-verbais no ambiente profissional');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Linguagem Corporal e Comunicação O poder dos sinais não-verbais no ambiente profissional', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos de Aprendizagem', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Todo sinal comunicado sem palavras faladas ou escritas.', 'Posição sustentada do corpo que reflete estados internos e atitude.', 'Estudo do uso do espaço físico e da distância interpessoal.', 'Harmonia precisa entre o que a voz diz e o corpo expressa.', 'Aulas Anteriores', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 16
// ════════════════════════════════════════════════════════════


function criarFormularioAula16() {
  var form = FormApp.create('Avaliação — Aula 16 · Gestual, Tom de Voz e Sincronismo A harmonia perfeita entre corpo, voz e mensagem profissional · SENAI');

  form.setDescription( 'Avaliação Completa: Gestual, Tom de Voz e Sincronismo A harmonia perfeita entre corpo, voz e mensagem profissional\n\nAula 16 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Gestual, Tom de Voz e Sincronismo A harmonia perfeita entre corpo, voz e mensagem profissional');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "A Harmonia entre Corpo e Voz"?');
  q1.setChoices([
    q1.createChoice('Gesticular sem parar durante toda a fala torna a apresentação mais clara e atraente para o público', false),
    q1.createChoice('Para manter a gesticulação elegante e controlada, oradores profissionais operam na chamada caixa de gestos', false),
    q1.createChoice('O gesto deve atingir seu ápice exatamente no mesmo instante em que a palavra principal é pronunciada com destaque', false),
    q1.createChoice('A fala impactante não depende apenas do vocabulário escolhido: a modulação da voz e os gestos corporais devem se mover como uma coreografia orquestrada e precisa', true)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Qual conceito a aula define como: "Olhar para o teto ou para o chão sinaliza insegurança ou desinteresse"?');
  q2.setChoices([
    q2.createChoice('Largura', false),
    q2.createChoice('Presença', false),
    q2.createChoice('Ponto neutro', false),
    q2.createChoice('Evite fugas', true)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Qual conceito a aula define como: "Respeite a cultura da organização ou do evento (formal, casual ou técnico)"?');
  q3.setChoices([
    q3.createChoice('Conforto postural', false),
    q3.createChoice('Evite distrações visuais', false),
    q3.createChoice('Presença', false),
    q3.createChoice('Coerência com o ambiente', true)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Aponte uma melhoria prioritária"?');
  q4.setChoices([
    q4.createChoice('Coincidência temporal perfeita entre gesto, palavra e respiração', false),
    q4.createChoice('Sorrisos congelados ou mecânicos despertam desconfiança imediata', false),
    q4.createChoice('Focar em uma única mudança por vez acelera a evolução', true),
    q4.createChoice('Domínio consciente do espaço físico, olhar firme e segurança corporal', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "Picos Dramáticos"?');
  q5.setChoices([
    q5.createChoice('Ajustado ao tamanho da sala, garantindo que o fundo do auditório escute sem esforço', false),
    q5.createChoice('Movimentos muito rápidos viram borrões digitais em conexões fracas de internet', false),
    q5.createChoice('Nos momentos decisivos da narrativa, o gesto manual sustenta e expande a energia da voz', true),
    q5.createChoice('Quando existe conflito entre o que é falado e a expressão não-verbal, o público sempre opta por acreditar no corpo', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Qual conceito a aula define como: "Distribua o olhar por quadrantes da sala sem fixar em uma só pessoa"?');
  q6.setChoices([
    q6.createChoice('Firmeza verbal com recuo físico', false),
    q6.createChoice('Ênfase', false),
    q6.createChoice('Coerência com o ambiente', false),
    q6.createChoice('Varredura ampla', true)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Segundo a aula, o que é "Voz alegre com semblante rígido"?');
  q7.setChoices([
    q7.createChoice('Mantenha a cabeça e o tronco superior visíveis para que os gestos manuais possam aparecer na tela', false),
    q7.createChoice('Apoie as pontas dos dedos suavemente à altura do umbigo ou deixe os braços descerem soltos ao lado do corpo', false),
    q7.createChoice('Soa forçado, irônico ou falso', true),
    q7.createChoice('Olhar para o teto ou para o chão sinaliza insegurança ou desinteresse', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Segundo a aula, o que é "Olho na lente"?');
  q8.setChoices([
    q8.createChoice('Distribua o olhar por quadrantes da sala sem fixar em uma só pessoa', false),
    q8.createChoice('A base corporal estável projeta clareza e autoridade imediata', false),
    q8.createChoice('Olhar para a câmera equivale a olhar nos olhos dos participantes virtuais', true),
    q8.createChoice('A amplitude dos ombros, evitando braços excessivamente abertos', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Segundo a aula, o que é "Sorriso acolhedor"?');
  q9.setChoices([
    q9.createChoice('Domínio consciente do espaço físico, olhar firme e segurança corporal', false),
    q9.createChoice('Soa forçado, irônico ou falso', false),
    q9.createChoice('Reduz a tensão inicial no início de conversas ou entrevistas formais', true),
    q9.createChoice('A confiança só surge quando expressão facial, gestos e palavras contam rigorosamente a mesma história', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Segundo a aula, o que é "Ênfase"?');
  q10.setChoices([
    q10.createChoice('Mantenha a cabeça e o tronco superior visíveis para que os gestos manuais possam aparecer na tela', false),
    q10.createChoice('A confiança só surge quando expressão facial, gestos e palavras contam rigorosamente a mesma história', false),
    q10.createChoice('Olhar para a câmera equivale a olhar nos olhos dos participantes virtuais', false),
    q10.createChoice('Destaque vocal ou gestual dado a palavras-chave estratégicas', true)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Mãos nos Bolsos"?');
  q11.setChoices([
    q11.createChoice('O gesto deve atingir seu ápice exatamente no mesmo instante em que a palavra principal é pronunciada com destaque', false),
    q11.createChoice('Ocultar as mãos reduz a credibilidade intuitiva percebida pelos ouvintes na apresentação', true),
    q11.createChoice('O silêncio consciente não é sinal de esquecimento; é a ferramenta mais refinada de um orador habilidoso', false),
    q11.createChoice('O vestuário compõe o quadro da comunicação antes mesmo da primeira palavra ser dita', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Qual conceito a aula define como: "Roupas que apertam restringem a respiração diafragmática e a liberdade gestual"?');
  q12.setChoices([
    q12.createChoice('Conforto postural', true),
    q12.createChoice('Limite inferior', false),
    q12.createChoice('Firmeza verbal com recuo físico', false),
    q12.createChoice('Voz alegre com semblante rígido', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Iluminação Facial"?');
  q13.setChoices([
    q13.createChoice('Gesticular sem parar durante toda a fala torna a apresentação mais clara e atraente para o público', false),
    q13.createChoice('Clicar canetas ou mexer em anéis denuncia tensão interna e distrai o público do raciocínio', false),
    q13.createChoice('Ajustado ao tamanho da sala, garantindo que o fundo do auditório escute sem esforço', false),
    q13.createChoice('A luz frontal revela expressões faciais indispensáveis para a empatia e o entendimento', true)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "Gesto intencional"?');
  q14.setChoices([
    q14.createChoice('Distribua o olhar por quadrantes da sala sem fixar em uma só pessoa', false),
    q14.createChoice('Eleve as mãos apenas quando houver um argumento específico a marcar', true),
    q14.createChoice('Focar em uma única mudança por vez acelera a evolução', false),
    q14.createChoice('Olhar para o teto ou para o chão sinaliza insegurança ou desinteresse', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Qual conceito a aula define como: "A base corporal estável projeta clareza e autoridade imediata"?');
  q15.setChoices([
    q15.createChoice('Postura Firme', true),
    q15.createChoice('Gestual', false),
    q15.createChoice('Sincronia Mãos-Voz', false),
    q15.createChoice('Gesto intencional', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "A Sincronia entre Tom e Gestual"?');
  q16.setChoices([
    q16.createChoice('A luz frontal revela expressões faciais indispensáveis para a empatia e o entendimento', false),
    q16.createChoice('O gesto deve atingir seu ápice exatamente no mesmo instante em que a palavra principal é pronunciada com destaque', true),
    q16.createChoice('Variação tonal e de pitch na voz para evitar monotonia', false),
    q16.createChoice('Avaliar a linguagem corporal de um colega exige sensibilidade, generosidade e objetividade prática', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. Segundo a aula, o que é "Limite superior"?');
  q17.setChoices([
    q17.createChoice('Sustente de 2 a 3 segundos por ouvinte para gerar conexão natural', false),
    q17.createChoice('A altura do peito e queixo. Gestos acima do rosto tapam a expressão e passam desespero', true),
    q17.createChoice('Conjunto de movimentos de braços e mãos que acompanham o discurso', false),
    q17.createChoice('Sorrisos congelados ou mecânicos despertam desconfiança imediata', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "Gestos Enfáticos"?');
  q18.setChoices([
    q18.createChoice('Pontuam momentos cruciais do discurso com toques precisos no ar, sincronizados exatamente com as sílabas tônicas', true),
    q18.createChoice('Para manter a gesticulação elegante e controlada, oradores profissionais operam na chamada caixa de gestos', false),
    q18.createChoice('Variação tonal e de pitch na voz para evitar monotonia', false),
    q18.createChoice('Clicar canetas ou mexer em anéis denuncia tensão interna e distrai o público do raciocínio', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Segundo a aula, o que é "Sincronismo"?');
  q19.setChoices([
    q19.createChoice('Assentir com a cabeça e manter o semblante receptivo valida o interlocutor', false),
    q19.createChoice('A altura do peito e queixo. Gestos acima do rosto tapam a expressão e passam desespero', false),
    q19.createChoice('Coincidência temporal perfeita entre gesto, palavra e respiração', true),
    q19.createChoice('Estampas excessivas ou barulhos de joias desviam a atenção do conteúdo', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "Caixa de Gestos"?');
  q20.setChoices([
    q20.createChoice('Silêncio proposital inserido para gerar reflexão ou suspense', true),
    q20.createChoice('Elevar os gestos para a linha do peito para que não fiquem escondidos abaixo do corte da tela', false),
    q20.createChoice('O silêncio consciente não é sinal de esquecimento; é a ferramenta mais refinada de um orador habilidoso', false),
    q20.createChoice('Ocultar as mãos reduz a credibilidade intuitiva percebida pelos ouvintes na apresentação', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 16 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 16 — Gestual, Tom de Voz e Sincronismo A harmonia perfeita entre corpo, voz e mensagem profissional');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula16() {
  var form = FormApp.openByTitle('Avaliação — Aula 16 · Gestual, Tom de Voz e Sincronismo A harmonia perfeita entre corpo, voz e mensagem profissional · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 16: Gestual, Tom de Voz e Sincronismo A harmonia perfeita entre corpo, voz e mensagem profissional');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Gestual, Tom de Voz e Sincronismo A harmonia perfeita entre corpo, voz e mensagem profissional', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos de Aprendizagem', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Conjunto de movimentos de braços e mãos que acompanham o discurso.', 'Coincidência temporal perfeita entre gesto, palavra e respiração.', 'Destaque vocal ou gestual dado a palavras-chave estratégicas.', 'Domínio consciente do espaço físico, olhar firme e segurança corporal.', 'pés alinhados à largura dos ombros distribuem o peso com equilíbrio, abrindo a caixa torácica e faci', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 17
// ════════════════════════════════════════════════════════════


function criarFormularioAula17() {
  var form = FormApp.create('Avaliação — Aula 17 · Integração Prática: O Projeto Capstone Unindo escrita técnica, oratória e ferramentas digitais · SENAI');

  form.setDescription( 'Avaliação Completa: Integração Prática: O Projeto Capstone Unindo escrita técnica, oratória e ferramentas digitais\n\nAula 17 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Integração Prática: O Projeto Capstone Unindo escrita técnica, oratória e ferramentas digitais');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Entregável 2: Memorando Interno"?');
  q1.setChoices([
    q1.createChoice('Netiqueta, segurança de dados em nuvem e congruência postural ativa', false),
    q1.createChoice('Enquanto o relatório detalha o problema para os diretores, o memorando interno atua diretamente na operação diária com rapidez e objetividade', true),
    q1.createChoice('Na aula anterior, vimos que o sincronismo não-verbal valida a mensagem falada. Quando o tom de voz e os gestos contradizem as palavras, o público perde a confiança...', false),
    q1.createChoice('Observe a objetividade do parágrafo de encaminhamento do memorando interno', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Segundo a aula, o que é "Projeto"?');
  q2.setChoices([
    q2.createChoice('Esforço temporário planejado para criar um resultado ou solução específica', true),
    q2.createChoice('Instruções operacionais sem rodeios', false),
    q2.createChoice('Gestual congruente, tom de voz audível e seguro, respeito ao tempo', false),
    q2.createChoice('Braços relaxados e olhar firme demonstram clareza', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Qual conceito a aula define como: "Braços relaxados e olhar firme demonstram clareza"?');
  q3.setChoices([
    q3.createChoice('Performance Oral', false),
    q3.createChoice('Crítica construtiva', false),
    q3.createChoice('Postura aberta', true),
    q3.createChoice('Qualidade Redacional', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Texto direto"?');
  q4.setChoices([
    q4.createChoice('Slides com parágrafos inteiros copiados do relatório', false),
    q4.createChoice('Braços relaxados e olhar firme demonstram clareza', false),
    q4.createChoice('Diagnóstico preciso e soluções aplicáveis com fundamentação real', false),
    q4.createChoice('Instruções operacionais sem rodeios', true)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Segundo a aula, o que é "Clareza no assunto"?');
  q5.setChoices([
    q5.createChoice('Instruções operacionais sem rodeios', false),
    q5.createChoice('Nomeie documentos de modo inequívoco', true),
    q5.createChoice('Pausas e variações de volume evitam a monotonia', false),
    q5.createChoice('Diagnóstico preciso e soluções aplicáveis com fundamentação real', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Qual conceito a aula define como: "Dividir papéis claros na equipe garante produtividade sem retrabalho ou sobreposição"?');
  q6.setChoices([
    q6.createChoice('Consistência Técnica', false),
    q6.createChoice('Diagnóstico da Falha', false),
    q6.createChoice('Integração', false),
    q6.createChoice('Cooperação Estruturada', true)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Qual conceito a aula define como: "Pausas e variações de volume evitam a monotonia"?');
  q7.setChoices([
    q7.createChoice('Elogio sincero', false),
    q7.createChoice('Cabeçalho formal', false),
    q7.createChoice('Texto direto', false),
    q7.createChoice('Inflexão vocal', true)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "Suporte Visual"?');
  q8.setChoices([
    q8.createChoice('O termo capstone refere-se à pedra angular que coroa uma cúpula ou monumento arquitetônico. No ambiente educacional e profissional, representa a síntese culminante...', false),
    q8.createChoice('Slides objetivos sem excesso de texto, priorizando diagramas e métricas essenciais', true),
    q8.createChoice('Netiqueta, segurança de dados em nuvem e congruência postural ativa', false),
    q8.createChoice('Observe a objetividade do parágrafo de encaminhamento do memorando interno', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Segundo a aula, o que é "Falta de ensaio conjunto"?');
  q9.setChoices([
    q9.createChoice('Revisões criteriosas entre pares aperfeiçoam a proposta antes da entrega definitiva', false),
    q9.createChoice('senhas bloqueadas, suporte sobrecarregado e mensagens agressivas em redes sociais', false),
    q9.createChoice('Apontar uma ambiguidade ou lacuna técnica', false),
    q9.createChoice('Transições desajeitadas entre os oradores', true)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Segundo a aula, o que é "Crítica construtiva"?');
  q10.setChoices([
    q10.createChoice('União harmoniosa de diferentes partes em um sistema único e funcional', false),
    q10.createChoice('Ações preventivas de longo prazo', false),
    q10.createChoice('Apontar uma ambiguidade ou lacuna técnica', true),
    q10.createChoice('Atividade coordenada com empenho físico e mental para atingir um objetivo', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. Qual conceito a aula define como: "A comunicação profissional eficaz exige o alinhamento simultâneo de texto técnico, ferramentas e fala"?');
  q11.setChoices([
    q11.createChoice('O resultado foi imediato', false),
    q11.createChoice('Integração de Competências', true),
    q11.createChoice('Sobrecarga visual', false),
    q11.createChoice('Confidencialidade', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Comunicação Oral"?');
  q12.setChoices([
    q12.createChoice('Oratória, reuniões participativas, ritmo vocal e técnicas de apresentação', true),
    q12.createChoice('Identificar pontos fortes do texto e sugerir ajustes objetivos nas partes que apresentarem ambiguidade', false),
    q12.createChoice('Seu plano está delineado, seus documentos redigidos e sua oratória calibrada. Na Aula 25, sua equipe defenderá o Projeto Capstone perante a banca examinadora', false),
    q12.createChoice('Durante a oficina, cada grupo examinará a proposta de outra equipe utilizando o método sanduíche', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. Qual conceito a aula define como: "Ações preventivas de longo prazo"?');
  q13.setChoices([
    q13.createChoice('Recomendações Finais', true),
    q13.createChoice('Evitar caixa alta', false),
    q13.createChoice('Diagnóstico da Falha', false),
    q13.createChoice('Rigor e Feedback', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "Performance Oral"?');
  q14.setChoices([
    q14.createChoice('Instruções operacionais sem rodeios', false),
    q14.createChoice('Gestual congruente, tom de voz audível e seguro, respeito ao tempo', true),
    q14.createChoice('Ações preventivas de longo prazo', false),
    q14.createChoice('Identificação dos canais rompidos', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Discussão: Integração Comunicativa"?');
  q15.setChoices([
    q15.createChoice('Alinhamento rápido com tópicos organizados e respeito aos horários da equipe', false),
    q15.createChoice('Slides objetivos sem excesso de texto, priorizando diagramas e métricas essenciais', false),
    q15.createChoice('A comunicação deixa de ser ato espontâneo e vira processo estratégico', true),
    q15.createChoice('O termo capstone refere-se à pedra angular que coroa uma cúpula ou monumento arquitetônico. No ambiente educacional e profissional, representa a síntese culminante...', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "O Conceito do Projeto Capstone"?');
  q16.setChoices([
    q16.createChoice('Identificar pontos fortes do texto e sugerir ajustes objetivos nas partes que apresentarem ambiguidade', false),
    q16.createChoice('Edição simultânea de textos para garantir que todos contribuam com dados consistentes', false),
    q16.createChoice('O termo capstone refere-se à pedra angular que coroa uma cúpula ou monumento arquitetônico. No ambiente educacional e profissional, representa a síntese culminante...', true),
    q16.createChoice('Slides objetivos sem excesso de texto, priorizando diagramas e métricas essenciais', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Evitando Falhas Comuns"?');
  q17.setChoices([
    q17.createChoice('Em projetos integradores, as equipes frequentemente tropeçam nos mesmos pontos cegos', true),
    q17.createChoice('Oratória, reuniões participativas, ritmo vocal e técnicas de apresentação', false),
    q17.createChoice('Observe a objetividade do parágrafo de encaminhamento do memorando interno', false),
    q17.createChoice('O relatório precisa seguir o padrão formal estudado no Módulo 4', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Aplicação"?');
  q18.setChoices([
    q18.createChoice('Ações preventivas de longo prazo', false),
    q18.createChoice('senhas bloqueadas, suporte sobrecarregado e mensagens agressivas em redes sociais', false),
    q18.createChoice('União harmoniosa de diferentes partes em um sistema único e funcional', false),
    q18.createChoice('Uso concreto de teorias e regras em situações reais e práticas', true)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Segundo a aula, o que é "O resultado foi imediato"?');
  q19.setChoices([
    q19.createChoice('Dados simulados devem ser protegidos', false),
    q19.createChoice('senhas bloqueadas, suporte sobrecarregado e mensagens agressivas em redes sociais', true),
    q19.createChoice('Destacar um ponto forte da análise apresentada', false),
    q19.createChoice('Oferecer uma recomendação viável de melhoria', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Qual conceito a aula define como: "Identificação dos canais rompidos"?');
  q20.setChoices([
    q20.createChoice('Inflexão vocal', false),
    q20.createChoice('Diagnóstico da Falha', true),
    q20.createChoice('O resultado foi imediato', false),
    q20.createChoice('Consistência Técnica', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 17 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 17 — Integração Prática: O Projeto Capstone Unindo escrita técnica, oratória e ferramentas digitais');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula17() {
  var form = FormApp.openByTitle('Avaliação — Aula 17 · Integração Prática: O Projeto Capstone Unindo escrita técnica, oratória e ferramentas digitais · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 17: Integração Prática: O Projeto Capstone Unindo escrita técnica, oratória e ferramentas digitais');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Integração Prática: O Projeto Capstone Unindo escrita técnica, oratória e ferramentas digitais', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos de Aprendizagem', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'O Projeto Capstone Unindo escrita técnica, oratória e ferramentas digitais', 'União harmoniosa de diferentes partes em um sistema único e funcional.', 'Esforço temporário planejado para criar um resultado ou solução específica.', 'Uso concreto de teorias e regras em situações reais e práticas.', 'Atividade coordenada com empenho físico e mental para atingir um objetivo.', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 18
// ════════════════════════════════════════════════════════════

function criarFormularioAula18() {
  var form = FormApp.create('Avaliação — Aula 18 · Avaliação Final e Encerramento · SENAI');

  form.setDescription( 'Avaliação Completa: Avaliação Final e Encerramento\n\nAula 18 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Avaliação Final e Encerramento');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Clareza Estrutural"?');
  q1.setChoices([
    q1.createChoice('Minhas frases foram coesas ou deixei lacunas de sentido para o leitor?', true),
    q1.createChoice('Técnicas de coesão e proposta de intervenção direta aplicadas ao texto dissertativo', false),
    q1.createChoice('Contato visual firme, gesticulação aberta e coerência com a fala', false),
    q1.createChoice('Postura em redes corporativas, netiqueta e segurança de dados', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Segundo a aula, o que é "Equipe 3"?');
  q2.setChoices([
    q2.createChoice('Atendimento Eficaz e Escuta Ativa na Escola', true),
    q2.createChoice('Releia cada e-mail e mensagem profissional com olhar crítico antes do clique final', false),
    q2.createChoice('Relatório de Diagnóstico de Comunicação Interna', false),
    q2.createChoice('barreiras que distorcem o sentido pretendido', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "FUNDAMENTOS"?');
  q3.setChoices([
    q3.createChoice('Contato visual firme, gesticulação aberta e coerência com a fala', false),
    q3.createChoice('Minhas frases foram coesas ou deixei lacunas de sentido para o leitor?', false),
    q3.createChoice('A Equipe 3 realiza uma breve simulação de atendimento cordial demonstrando escuta ativa resolutiva', false),
    q3.createChoice('No início, descobrimos que falar ou escrever não basta: comunicar exige que a mensagem chegue intacta ao destinatário e produza compreensão mútua', true)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. De acordo com a aula, o que caracteriza "Expressão Oral"?');
  q4.setChoices([
    q4.createChoice('Minhas frases foram coesas ou deixei lacunas de sentido para o leitor?', false),
    q4.createChoice('Agora que finalizamos as apresentações em equipe, cada estudante verificará a consolidação dos conceitos teóricos fundamentais do curso', false),
    q4.createChoice('Apresentação oral para avaliadores com clareza conceitual e postura segura', false),
    q4.createChoice('Modulação vocal, pausas planejadas e controle emocional sob pressão', true)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Qual conceito a aula define como: "Domínio sólido das regras formais e digitais"?');
  q5.setChoices([
    q5.createChoice('Equipe 4', false),
    q5.createChoice('Critério de aprovação', false),
    q5.createChoice('Retenção', true),
    q5.createChoice('Evolução Notável', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Qual conceito a aula define como: "identificação de tom em e-mails e memorandos"?');
  q6.setChoices([
    q6.createChoice('Casos práticos', true),
    q6.createChoice('Equipe 1', false),
    q6.createChoice('Participação', false),
    q6.createChoice('Retenção', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Qual conceito a aula define como: "Ato de expor ideias a um público com clareza, técnica e empatia"?');
  q7.setChoices([
    q7.createChoice('Feedback', false),
    q7.createChoice('Apresentação', true),
    q7.createChoice('Ruídos', false),
    q7.createChoice('Leia diariamente', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Segundo a aula, o que é "Apresentação"?');
  q8.setChoices([
    q8.createChoice('confirmação explícita de eficácia comunicativa', false),
    q8.createChoice('Estudantes que superaram o receio do palco com treino constante', false),
    q8.createChoice('aproveitamento mínimo fixado em 60%', false),
    q8.createChoice('Ato de expor ideias a um público com clareza, técnica e empatia', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Postura Não-Verbal"?');
  q9.setChoices([
    q9.createChoice('Minhas frases foram coesas ou deixei lacunas de sentido para o leitor?', false),
    q9.createChoice('Modulação vocal, pausas planejadas e controle emocional sob pressão', false),
    q9.createChoice('Contato visual firme, gesticulação aberta e coerência com a fala', true),
    q9.createChoice('Agora que finalizamos as apresentações em equipe, cada estudante verificará a consolidação dos conceitos teóricos fundamentais do curso', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Qual conceito a aula define como: "Manual de Procedimento para Reuniões Escolares"?');
  q10.setChoices([
    q10.createChoice('Equipe 2', true),
    q10.createChoice('Ruídos', false),
    q10.createChoice('Pratique a escuta ativa', false),
    q10.createChoice('Retenção', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. Segundo a aula, o que é "Avaliação"?');
  q11.setChoices([
    q11.createChoice('barreiras que distorcem o sentido pretendido', false),
    q11.createChoice('Releia cada e-mail e mensagem profissional com olhar crítico antes do clique final', false),
    q11.createChoice('Medição sistemática de conhecimentos e habilidades com critérios claros', true),
    q11.createChoice('Demonstração prática e observável das competências exigidas', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Segundo a aula, o que é "Evolução Notável"?');
  q12.setChoices([
    q12.createChoice('Ato de expor ideias a um público com clareza, técnica e empatia', false),
    q12.createChoice('Manual de Procedimento para Reuniões Escolares', false),
    q12.createChoice('Estudantes que superaram o receio do palco com treino constante', true),
    q12.createChoice('Relatório de Diagnóstico de Comunicação Interna', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Estrutura da Avaliação Escrita"?');
  q13.setChoices([
    q13.createChoice('O maior comunicador não é aquele que apenas fala alto, mas aquele que compreende o contexto e ajusta sua mensagem com sensibilidade e respeito', false),
    q13.createChoice('A disciplina termina aqui, mas sua expressão continua em cada trabalho acadêmico, entrevista e conversa cidadã', false),
    q13.createChoice('A prova somativa individual verifica a retenção duradoura dos padrões de comunicação profissional aprendidos em 6 módulos', true),
    q13.createChoice('Coesão sintática, precisão gramatical e formatação adequada ao leitor', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Apresentações 3 e 4"?');
  q14.setChoices([
    q14.createChoice('Como lidei com a ansiedade antes e durante as falas públicas?', false),
    q14.createChoice('Agora que finalizamos as apresentações em equipe, cada estudante verificará a consolidação dos conceitos teóricos fundamentais do curso', false),
    q14.createChoice('No início, descobrimos que falar ou escrever não basta: comunicar exige que a mensagem chegue intacta ao destinatário e produza compreensão mútua', false),
    q14.createChoice('A Equipe 4 encerra expondo os resultados de um relatório técnico com dados analíticos sobre comunicação escolar', true)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Redações do ENEM"?');
  q15.setChoices([
    q15.createChoice('Técnicas de coesão e proposta de intervenção direta aplicadas ao texto dissertativo', true),
    q15.createChoice('Contribuí ativamente na divisão das tarefas e ouvi os colegas com respeito?', false),
    q15.createChoice('No início, descobrimos que falar ou escrever não basta: comunicar exige que a mensagem chegue intacta ao destinatário e produza compreensão mútua', false),
    q15.createChoice('A prova somativa individual verifica a retenção duradoura dos padrões de comunicação profissional aprendidos em 6 módulos', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Segundo a aula, o que é "Feedback"?');
  q16.setChoices([
    q16.createChoice('confirmação explícita de eficácia comunicativa', true),
    q16.createChoice('Manual de Procedimento para Reuniões Escolares', false),
    q16.createChoice('Medição sistemática de conhecimentos e habilidades com critérios claros', false),
    q16.createChoice('100% dos grupos concluíram o projeto no prazo', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. Qual conceito a aula define como: "Demonstração prática e observável das competências exigidas"?');
  q17.setChoices([
    q17.createChoice('Equipe 1', false),
    q17.createChoice('Apresentações', false),
    q17.createChoice('Desempenho', true),
    q17.createChoice('Casos práticos', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Participação"?');
  q18.setChoices([
    q18.createChoice('Mais de 90% de engajamento ativo nas práticas', true),
    q18.createChoice('identificação de tom em e-mails e memorandos', false),
    q18.createChoice('Ato de expor ideias a um público com clareza, técnica e empatia', false),
    q18.createChoice('Estudantes que superaram o receio do palco com treino constante', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "Impacto no Mundo do Trabalho"?');
  q19.setChoices([
    q19.createChoice('No ambiente profissional, a competência comunicativa é frequentemente apontada como o diferencial mais decisivo entre jovens profissionais', true),
    q19.createChoice('Vocabulário preciso, ideias compreensíveis e ausência de jargão desnecessário', false),
    q19.createChoice('Apresentação oral para avaliadores com clareza conceitual e postura segura', false),
    q19.createChoice('Técnicas de coesão e proposta de intervenção direta aplicadas ao texto dissertativo', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Qual conceito a aula define como: "Equipes que sintetizaram conceitos complexos em linguagem acessível"?');
  q20.setChoices([
    q20.createChoice('Clareza Exemplar', true),
    q20.createChoice('Apresentação', false),
    q20.createChoice('Equipe 1', false),
    q20.createChoice('Evolução', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 18 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 18 — Avaliação Final e Encerramento');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula18() {
  var form = FormApp.openByTitle('Avaliação — Aula 18 · Avaliação Final e Encerramento · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 18: Avaliação Final e Encerramento');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Avaliação Final e Encerramento', 'Avaliação Final e Encerramento', 'É um conceito importante apresentado na aula', 'O que mudou na sua voz?', 'É um conceito importante apresentado na aula', 'Objetivos da Nossa Aula Final', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'o nervosismo diante de uma pergunta, a dúvida ao estruturar um e-mail formal ou a insegurança ao fal', 'Medição sistemática de conhecimentos e habilidades com critérios claros.', 'Ato de expor ideias a um público com clareza, técnica e empatia.', 'Demonstração prática e observável das competências exigidas.', 'Progresso contínuo verificado entre o ponto de partida e o atual.', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 19
// ════════════════════════════════════════════════════════════


function criarFormularioAula19() {
  var form = FormApp.create('Avaliação — Aula 19 · O Ciclo do Feedback na Comunicação Como transformar respostas em ferramentas de crescimento e alinhamento · SENAI');

  form.setDescription( 'Avaliação Completa: O Ciclo do Feedback na Comunicação Como transformar respostas em ferramentas de crescimento e alinhamento\n\nAula 19 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — O Ciclo do Feedback na Comunicação Como transformar respostas em ferramentas de crescimento e alinhamento');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. Segundo a aula, o que é "Objetividade"?');
  q1.setChoices([
    q1.createChoice('Retorno com avaliação sobre mensagem ou tarefa realizada', false),
    q1.createChoice('Encerramento com incentivo e confiança', false),
    q1.createChoice('Fluxo contínuo que vai e volta entre os dois interlocutores', false),
    q1.createChoice('foco direto naquilo que realmente importa', true)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "A Função no Ciclo Comunicativo"?');
  q2.setChoices([
    q2.createChoice('Como transformar respostas em ferramentas de crescimento e alinhamento', false),
    q2.createChoice('Profissionais excelentes não encaram o retorno como julgamento final, mas como um mapa gratuito que revela ângulos cegos do próprio trabalho', false),
    q2.createChoice('Quando a equipe troca retornos sinceros e respeitosos, o medo de errar dá lugar à inovação e à melhoria coletiva contínua', false),
    q2.createChoice('Sem retorno, a comunicação é apenas um disparo no escuro. O feedback fecha o circuito e permite corrigir rotas em tempo real', true)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Segundo a aula, o que é "Clareza"?');
  q3.setChoices([
    q3.createChoice('Reconhecimento sincero de um ponto forte', false),
    q3.createChoice('vocabulário exato, sem duplo sentido', true),
    q3.createChoice('O aspecto específico que precisa de melhoria', false),
    q3.createChoice('Fluxo contínuo que vai e volta entre os dois interlocutores', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Camada inferior"?');
  q4.setChoices([
    q4.createChoice('Fluxo contínuo que vai e volta entre os dois interlocutores', false),
    q4.createChoice('Encerramento com incentivo e confiança', true),
    q4.createChoice('Reconhecimento sincero de um ponto forte', false),
    q4.createChoice('foco direto naquilo que realmente importa', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "A Técnica do Feedback Sanduíche"?');
  q5.setChoices([
    q5.createChoice('Uma reunião em que o líder apenas dita ordens sem abrir espaço para perguntas é um exemplo eficaz de comunicação bidirecional', false),
    q5.createChoice('Na escola, a nota é apenas um registro final. O feedback formativo fornecido durante a escrita é o verdadeiro motor de desenvolvimento', false),
    q5.createChoice('Reagir ao retorno apontando de imediato falhas alheias para desviar o assunto', false),
    q5.createChoice('Essa ferramenta organiza a mensagem em três camadas sucessivas para diminuir a resistência inicial de quem ouve', true)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Estudo de Caso: Conversa no Trabalho"?');
  q6.setChoices([
    q6.createChoice('Seu gestor, Marcos, marcou uma conversa reservada para tratar da entrega de forma estruturada. Vamos analisar as duas maneiras possíveis de conduzir esse diálogo', true),
    q6.createChoice('O caso de Camila demonstra como a forma de falar determina o desfecho operacional', false),
    q6.createChoice('Troca contínua entre emissor e receptor para garantir alinhamento', false),
    q6.createChoice('Essa ferramenta organiza a mensagem em três camadas sucessivas para diminuir a resistência inicial de quem ouve', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. De acordo com a aula, o que caracteriza "O Conceito de Feedback"?');
  q7.setChoices([
    q7.createChoice('O principal causador de atritos em grupos não é a falta de esforço, mas a divergência silenciosa sobre o que deve ser entregue', false),
    q7.createChoice('Comunicar com excelência é sustentar um ciclo vivo de trocas onde emitir e escutar têm o mesmo peso', false),
    q7.createChoice('Na linguagem e nas relações humanas, é a informação compartilhada com o emissor sobre o efeito gerado por sua mensagem, atitude ou produto de trabalho', true),
    q7.createChoice('Associar qualquer apontamento de erro a uma sensação de incapacidade pessoal', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "RECAPITULAÇÃO"?');
  q8.setChoices([
    q8.createChoice('Na escola, a nota é apenas um registro final. O feedback formativo fornecido durante a escrita é o verdadeiro motor de desenvolvimento', false),
    q8.createChoice('O principal causador de atritos em grupos não é a falta de esforço, mas a divergência silenciosa sobre o que deve ser entregue', false),
    q8.createChoice('Reagir ao retorno apontando de imediato falhas alheias para desviar o assunto', false),
    q8.createChoice('Nas aulas anteriores, estudamos que uma mensagem de sucesso apoia-se em três pilares fundamentais', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "O Ciclo do Feedback na Comunicação"?');
  q9.setChoices([
    q9.createChoice('A mensagem viaja em sentido único. O emissor fala ou escreve, mas não obtém dados sobre a reação do destinatário, impossibilitando ajustes', false),
    q9.createChoice('Como transformar respostas em ferramentas de crescimento e alinhamento', true),
    q9.createChoice('Essa ferramenta organiza a mensagem em três camadas sucessivas para diminuir a resistência inicial de quem ouve', false),
    q9.createChoice('Na escola, a nota é apenas um registro final. O feedback formativo fornecido durante a escrita é o verdadeiro motor de desenvolvimento', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "Cultura de Confiança"?');
  q10.setChoices([
    q10.createChoice('Seu gestor, Marcos, marcou uma conversa reservada para tratar da entrega de forma estruturada. Vamos analisar as duas maneiras possíveis de conduzir esse diálogo', false),
    q10.createChoice('Associar qualquer apontamento de erro a uma sensação de incapacidade pessoal', false),
    q10.createChoice('Quando a equipe troca retornos sinceros e respeitosos, o medo de errar dá lugar à inovação e à melhoria coletiva contínua', true),
    q10.createChoice('Essa ferramenta organiza a mensagem em três camadas sucessivas para diminuir a resistência inicial de quem ouve', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Barreiras Emocionais Comuns"?');
  q11.setChoices([
    q11.createChoice('Acreditar que a primeira versão produzida já é perfeita e imune a aprimoramentos', true),
    q11.createChoice('O caso de Camila demonstra como a forma de falar determina o desfecho operacional', false),
    q11.createChoice('Uma reunião em que o líder apenas dita ordens sem abrir espaço para perguntas é um exemplo eficaz de comunicação bidirecional', false),
    q11.createChoice('O principal causador de atritos em grupos não é a falta de esforço, mas a divergência silenciosa sobre o que deve ser entregue', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Segundo a aula, o que é "Bidirecional"?');
  q12.setChoices([
    q12.createChoice('Fluxo contínuo que vai e volta entre os dois interlocutores', true),
    q12.createChoice('O aspecto específico que precisa de melhoria', false),
    q12.createChoice('Ajuste conjunto de metas e expectativas na equipe', false),
    q12.createChoice('Retorno com avaliação sobre mensagem ou tarefa realizada', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Ataque Recíproco"?');
  q13.setChoices([
    q13.createChoice('Reagir ao retorno apontando de imediato falhas alheias para desviar o assunto', true),
    q13.createChoice('Sem retorno, a comunicação é apenas um disparo no escuro. O feedback fecha o circuito e permite corrigir rotas em tempo real', false),
    q13.createChoice('O principal causador de atritos em grupos não é a falta de esforço, mas a divergência silenciosa sobre o que deve ser entregue', false),
    q13.createChoice('A ausência de checagens intermediárias força o grupo a refazer etapas inteiras', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "Feedback"?');
  q14.setChoices([
    q14.createChoice('vocabulário exato, sem duplo sentido', false),
    q14.createChoice('foco direto naquilo que realmente importa', false),
    q14.createChoice('Camila entra em pânico, chora, fecha-se emocionalmente e a tabela segue sem resolução', false),
    q14.createChoice('Retorno com avaliação sobre mensagem ou tarefa realizada', true)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Checagem dos Pilares"?');
  q15.setChoices([
    q15.createChoice('Nas aulas anteriores, estudamos que uma mensagem de sucesso apoia-se em três pilares fundamentais', false),
    q15.createChoice('Na escola, a nota é apenas um registro final. O feedback formativo fornecido durante a escrita é o verdadeiro motor de desenvolvimento', false),
    q15.createChoice('Uma reunião em que o líder apenas dita ordens sem abrir espaço para perguntas é um exemplo eficaz de comunicação bidirecional', false),
    q15.createChoice('Uma mensagem oral cheia de gírias confusas que exige cinco explicações extras', true)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "Erros Ocultos"?');
  q16.setChoices([
    q16.createChoice('Profissionais excelentes não encaram o retorno como julgamento final, mas como um mapa gratuito que revela ângulos cegos do próprio trabalho', false),
    q16.createChoice('Falhas de compreensão só aparecem quando a tarefa final já foi entregue errada', true),
    q16.createChoice('Nas aulas anteriores, estudamos que uma mensagem de sucesso apoia-se em três pilares fundamentais', false),
    q16.createChoice('Essa ferramenta organiza a mensagem em três camadas sucessivas para diminuir a resistência inicial de quem ouve', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. Qual conceito a aula define como: "Camila entra em pânico, chora, fecha-se emocionalmente e a tabela segue sem resolução"?');
  q17.setChoices([
    q17.createChoice('Objetividade', false),
    q17.createChoice('Bidirecional', false),
    q17.createChoice('Camada superior', false),
    q17.createChoice('Resultado', true)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Alinhamento"?');
  q18.setChoices([
    q18.createChoice('Camila entra em pânico, chora, fecha-se emocionalmente e a tabela segue sem resolução', false),
    q18.createChoice('Reconhecimento sincero de um ponto forte', false),
    q18.createChoice('O aspecto específico que precisa de melhoria', false),
    q18.createChoice('Ajuste conjunto de metas e expectativas na equipe', true)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Segundo a aula, o que é "Concisão"?');
  q19.setChoices([
    q19.createChoice('Retorno com avaliação sobre mensagem ou tarefa realizada', false),
    q19.createChoice('Camila entra em pânico, chora, fecha-se emocionalmente e a tabela segue sem resolução', false),
    q19.createChoice('síntese elegante, eliminando excessos', true),
    q19.createChoice('vocabulário exato, sem duplo sentido', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Segundo a aula, o que é "Recheio"?');
  q20.setChoices([
    q20.createChoice('Ação ativa e consciente de compreender o que o outro diz', false),
    q20.createChoice('vocabulário exato, sem duplo sentido', false),
    q20.createChoice('Retorno com avaliação sobre mensagem ou tarefa realizada', false),
    q20.createChoice('O aspecto específico que precisa de melhoria', true)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 19 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 19 — O Ciclo do Feedback na Comunicação Como transformar respostas em ferramentas de crescimento e alinhamento');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula19() {
  var form = FormApp.openByTitle('Avaliação — Aula 19 · O Ciclo do Feedback na Comunicação Como transformar respostas em ferramentas de crescimento e alinhamento · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 19: O Ciclo do Feedback na Comunicação Como transformar respostas em ferramentas de crescimento e alinhamento');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'O Ciclo do Feedback na Comunicação Como transformar respostas em ferramentas de crescimento e alinhamento', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos de Aprendizagem', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Retorno com avaliação sobre mensagem ou tarefa realizada.', 'Fluxo contínuo que vai e volta entre os dois interlocutores.', 'Ação ativa e consciente de compreender o que o outro diz.', 'Ajuste conjunto de metas e expectativas na equipe.', '“Sua introdução foi dinâmica e prendeu a atenção de toda a turma.”', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 20
// ════════════════════════════════════════════════════════════


function criarFormularioAula20() {
  var form = FormApp.create('Avaliação — Aula 20 · Contextos Formais versus Informais Adequação comunicativa, registros e impacto profissional · SENAI');

  form.setDescription( 'Avaliação Completa: Contextos Formais versus Informais Adequação comunicativa, registros e impacto profissional\n\nAula 20 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Contextos Formais versus Informais Adequação comunicativa, registros e impacto profissional');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. Segundo a aula, o que é "No contexto corporativo"?');
  q1.setChoices([
    q1.createChoice('Textos formais exigem planejamento, pontuação rigorosa e impessoalidade', false),
    q1.createChoice('Transmite pedantismo e afasta os colegas em vez de demonstrar competência', false),
    q1.createChoice('Podem soar desleixadas ou excluir interlocutores de outras gerações', true),
    q1.createChoice('solicitar algo formalmente, desabafar, ensinar ou fechar um acordo', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Âmbito Corporativo"?');
  q2.setChoices([
    q2.createChoice('Prioriza o dinamismo e a conexão imediata. Desconsidera pontuação rígida sem gerar ruído entre pares', false),
    q2.createChoice('O espaço físico ou virtual dita as regras sociais: plenário, sala de reunião ou grupo familiar', false),
    q2.createChoice('Essa aproximação exige discernimento em dobro: agilidade não significa desrespeito gramatical ou informalidade desenfreada', false),
    q2.createChoice('Focado na entrega de resultados, transparência de processos, alinhamento de metas e registro formal', true)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "O Interlocutor"?');
  q3.setChoices([
    q3.createChoice('O grau de intimidade, idade e hierarquia definem a proximidade e o tratamento empregado', true),
    q3.createChoice('Prioriza o dinamismo e a conexão imediata. Desconsidera pontuação rígida sem gerar ruído entre pares', false),
    q3.createChoice('A convergência harmônica desses três pilares garante que a mensagem gere o impacto planejado', false),
    q3.createChoice('Na escola e na universidade, a escrita exige precisão conceitual e respeito aos fatos comprovados', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Qual conceito a aula define como: "Nenhuma afirmação se sustenta sem respaldo ou fundamentação sólida"?');
  q4.setChoices([
    q4.createChoice('No contexto corporativo', false),
    q4.createChoice('Nem gíria nem pedantismo', false),
    q4.createChoice('O que você pretende alcançar', false),
    q4.createChoice('Citação de fontes', true)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "A Armadilha da Hipercorreção"?');
  q5.setChoices([
    q5.createChoice('A convergência harmônica desses três pilares garante que a mensagem gere o impacto planejado', false),
    q5.createChoice('A hipercorreção ocorre quando o comunicador tenta soar excessivamente sofisticado ou culto e comete deslizes gramaticais ou artificiais', true),
    q5.createChoice('Revise a pontuação e certifique-se de manter o tom educado e objetivo', false),
    q5.createChoice('Focado na conexão emocional, liberdade estrutural e partilha espontânea de sentimentos do dia a dia', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Segundo a aula, o que é "Bidirecionalidade"?');
  q6.setChoices([
    q6.createChoice('Perfeita para um grupo informal entre colegas de turma', false),
    q6.createChoice('Saudação formal, verbo no modo indicativo/subjuntivo correto, foco em entregas e prazos', false),
    q6.createChoice('Usar arcaísmos que dificultam a leitura rápida no ambiente de trabalho', false),
    q6.createChoice('Ambos os interlocutores aprendem e ajustam o discurso', true)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Segundo a aula, o que é "Contexto manda"?');
  q7.setChoices([
    q7.createChoice('Suas ideias parecem desprovidas de estudo ou compromisso sério', false),
    q7.createChoice('Transmite pedantismo e afasta os colegas em vez de demonstrar competência', false),
    q7.createChoice('O excesso de informalidade é visto como imaturidade profissional', false),
    q7.createChoice('A adequação linguística depende sempre do ambiente, público e propósito', true)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Segundo a aula, o que é "A regra de ouro"?');
  q8.setChoices([
    q8.createChoice('Podem soar desleixadas ou excluir interlocutores de outras gerações', false),
    q8.createChoice('O excesso de informalidade é visto como imaturidade profissional', false),
    q8.createChoice('Ambos os interlocutores aprendem e ajustam o discurso', false),
    q8.createChoice('Só use jargão se tiver certeza de que seu interlocutor domina o significado', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Registro Formal"?');
  q9.setChoices([
    q9.createChoice('Segue a norma-padrão gramatical, possui vocabulário preciso, evita gírias e prioriza a objetividade', true),
    q9.createChoice('Prioriza o dinamismo e a conexão imediata. Desconsidera pontuação rígida sem gerar ruído entre pares', false),
    q9.createChoice('A hipercorreção ocorre quando o comunicador tenta soar excessivamente sofisticado ou culto e comete deslizes gramaticais ou artificiais', false),
    q9.createChoice('Na Aula 5 iniciaremos o Módulo 2 de Comunicação Oral, explorando estrutura de apresentações, postura e gestão do nervosismo', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Segundo a aula, o que é "O que você pretende alcançar"?');
  q10.setChoices([
    q10.createChoice('Fuja tanto do desleixo coloquial quanto da hipercorreção artificial', false),
    q10.createChoice('Saudação formal, verbo no modo indicativo/subjuntivo correto, foco em entregas e prazos', false),
    q10.createChoice('O excesso de informalidade é visto como imaturidade profissional', false),
    q10.createChoice('solicitar algo formalmente, desabafar, ensinar ou fechar um acordo', true)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. Qual conceito a aula define como: "Saudação formal, verbo no modo indicativo/subjuntivo correto, foco em entregas e prazos"?');
  q11.setChoices([
    q11.createChoice('Uso com público leigo', false),
    q11.createChoice('Escrita requer zelo', false),
    q11.createChoice('A regra de ouro', false),
    q11.createChoice('Elementos', true)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Abreviações Digitais"?');
  q12.setChoices([
    q12.createChoice('Quais das afirmações a seguir representam práticas adequadas em um e-mail corporativo ou acadêmico? Mais de uma resposta está correta', false),
    q12.createChoice('Contudo, em relatórios, correspondências oficiais ou e-mails corporativos, a economia de toques passa a impressão de pressa e falta de apreço pelo receptor', true),
    q12.createChoice('Segue a norma-padrão gramatical, possui vocabulário preciso, evita gírias e prioriza a objetividade', false),
    q12.createChoice('Jargões são termos técnicos próprios de uma área (médica, jurídica, financeira, tecnológica)', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Passo a Passo da Transição de Tom"?');
  q13.setChoices([
    q13.createChoice('Revise a pontuação e certifique-se de manter o tom educado e objetivo', true),
    q13.createChoice('Prioriza o dinamismo e a conexão imediata. Desconsidera pontuação rígida sem gerar ruído entre pares', false),
    q13.createChoice('Quais das afirmações a seguir representam práticas adequadas em um e-mail corporativo ou acadêmico? Mais de uma resposta está correta', false),
    q13.createChoice('Prioriza a precisão corporativa, previne ambiguidades e consolida compromissos institucionais', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "Avaliação de adequação"?');
  q14.setChoices([
    q14.createChoice('A adequação linguística depende sempre do ambiente, público e propósito', false),
    q14.createChoice('Abreviam caminhos e demonstram intimidade calorosa', false),
    q14.createChoice('Suas ideias parecem desprovidas de estudo ou compromisso sério', false),
    q14.createChoice('Perfeita para um grupo informal entre colegas de turma', true)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Registro Informal"?');
  q15.setChoices([
    q15.createChoice('Prioriza o dinamismo e a conexão imediata. Desconsidera pontuação rígida sem gerar ruído entre pares', false),
    q15.createChoice('A hipercorreção ocorre quando o comunicador tenta soar excessivamente sofisticado ou culto e comete deslizes gramaticais ou artificiais', false),
    q15.createChoice('Marcado pela espontaneidade, uso de termos coloquiais, abreviações e forte proximidade afetiva', true),
    q15.createChoice('Já a escrita é duradoura e desprovida de entonação ao vivo. Uma frase mal pontuada ou ambígua não pode ser retificada no mesmo instante em que é lida', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "Revisão: Feedback Construtivo"?');
  q16.setChoices([
    q16.createChoice('O grau de intimidade, idade e hierarquia definem a proximidade e o tratamento empregado', false),
    q16.createChoice('Usar palavras rebuscadas e arcaicas sempre garante que uma mensagem corporativa seja bem compreendida e respeitada', false),
    q16.createChoice('Focado na entrega de resultados, transparência de processos, alinhamento de metas e registro formal', false),
    q16.createChoice('Para manter a objetividade profissional e evitar reações defensivas ou conflitos', true)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. Segundo a aula, o que é "Falta de limites"?');
  q17.setChoices([
    q17.createChoice('Podem soar desleixadas ou excluir interlocutores de outras gerações', false),
    q17.createChoice('Transmite pedantismo e afasta os colegas em vez de demonstrar competência', false),
    q17.createChoice('Apelidos carinhosos ou emojis excessivos em memorandos geram constrangimento', true),
    q17.createChoice('Ambos os interlocutores aprendem e ajustam o discurso', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Efeito real"?');
  q18.setChoices([
    q18.createChoice('Perfeita para um grupo informal entre colegas de turma', false),
    q18.createChoice('A adequação linguística depende sempre do ambiente, público e propósito', false),
    q18.createChoice('Transmite pedantismo e afasta os colegas em vez de demonstrar competência', true),
    q18.createChoice('Abreviam caminhos e demonstram intimidade calorosa', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "Mensagem na Reunião"?');
  q19.setChoices([
    q19.createChoice('A convergência harmônica desses três pilares garante que a mensagem gere o impacto planejado', false),
    q19.createChoice('O grau de intimidade, idade e hierarquia definem a proximidade e o tratamento empregado', false),
    q19.createChoice('Prioriza a precisão corporativa, previne ambiguidades e consolida compromissos institucionais', true),
    q19.createChoice('O espaço físico ou virtual dita as regras sociais: plenário, sala de reunião ou grupo familiar', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "REVISÃO"?');
  q20.setChoices([
    q20.createChoice('Na aula anterior, compreendemos que a comunicação não é uma via de mão única. O emissor envia a mensagem, e o feedback valida se a ideia foi realmente absorvida', true),
    q20.createChoice('O grau de intimidade, idade e hierarquia definem a proximidade e o tratamento empregado', false),
    q20.createChoice('Quais das afirmações a seguir representam práticas adequadas em um e-mail corporativo ou acadêmico? Mais de uma resposta está correta', false),
    q20.createChoice('A convergência harmônica desses três pilares garante que a mensagem gere o impacto planejado', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 20 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 20 — Contextos Formais versus Informais Adequação comunicativa, registros e impacto profissional');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula20() {
  var form = FormApp.openByTitle('Avaliação — Aula 20 · Contextos Formais versus Informais Adequação comunicativa, registros e impacto profissional · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 20: Contextos Formais versus Informais Adequação comunicativa, registros e impacto profissional');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Contextos Formais versus Informais Adequação comunicativa, registros e impacto profissional', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos da Nossa Aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Feedback Construtivo', 'Qual é o principal propósito do feedback bidirecional no ciclo comunicativo?', 'Por que um feedback deve focar no comportamento ou mensagem, e não na pessoa?', 'O que caracteriza um feedback eficaz no ambiente acadêmico ou profissional?', 'Permitir que emissor e receptor alinhem entendimentos e ajustem a mensagem.', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 21
// ════════════════════════════════════════════════════════════


function criarFormularioAula21() {
  var form = FormApp.create('Avaliação — Aula 21 · Síntese dos Fundamentos da Comunicação Consolidação e Prática do Módulo 1 · SENAI');

  form.setDescription( 'Avaliação Completa: Síntese dos Fundamentos da Comunicação Consolidação e Prática do Módulo 1\n\nAula 21 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Síntese dos Fundamentos da Comunicação Consolidação e Prática do Módulo 1');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Rigor Conceitual"?');
  q1.setChoices([
    q1.createChoice('Quais das seguintes afirmações sobre comunicação eficaz e profissional são verdadeiras? (Mais de uma opção está correta)', false),
    q1.createChoice('Obedece à norma-padrão, com vocabulário preciso, sem gírias e com tratamento respeitoso (relatórios e ofícios)', false),
    q1.createChoice('Capacidade de argumentar com dados verificáveis sem recorrer a ataques pessoais ou falácias', false),
    q1.createChoice('Uso correto de conceitos técnicos e fundamentação teórica sólida em seminários e redações acadêmicas', true)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Segundo a aula, o que é "Mensagem"?');
  q2.setChoices([
    q2.createChoice('Fidelidade aos fatos e ética no trato das informações', false),
    q2.createChoice('o conteúdo estruturado e transmitido', true),
    q2.createChoice('o meio físico ou digital condutor', false),
    q2.createChoice('Identificação sistemática dos fluxos e ruídos no canal', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Segundo a aula, o que é "Síntese"?');
  q3.setChoices([
    q3.createChoice('Ambiente social e cultural que define o tom do diálogo', false),
    q3.createChoice('o conteúdo estruturado e transmitido', false),
    q3.createChoice('Identificação sistemática dos fluxos e ruídos no canal', false),
    q3.createChoice('Capacidade de condensar informações centrais com clareza', true)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Canal"?');
  q4.setChoices([
    q4.createChoice('o meio físico ou digital condutor', true),
    q4.createChoice('Processo, Eficácia, Retorno e Registro', false),
    q4.createChoice('Identificação sistemática dos fluxos e ruídos no canal', false),
    q4.createChoice('clareza na linguagem, objetividade no tempo e respeito mútuo', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Segundo a aula, o que é "Receptor"?');
  q5.setChoices([
    q5.createChoice('quem formula e codifica o conteúdo', false),
    q5.createChoice('quem decodifica e interpreta o sinal', true),
    q5.createChoice('Capacidade de condensar informações centrais com clareza', false),
    q5.createChoice('Identificação sistemática dos fluxos e ruídos no canal', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Registro Informal"?');
  q6.setChoices([
    q6.createChoice('Prezados Senhores, encaminhamos o relatório financeiro consolidado em anexo para validação de sua diretoria', false),
    q6.createChoice('Encarar correções de professores e colegas como combustível para refinamento contínuo do texto', false),
    q6.createChoice('Três pacientes receberam doses incorretas por ausência de canal ágil e feedback obrigatório', false),
    q6.createChoice('Espontâneo, aceita contrações e gírias leves; adequado entre amigos e familiares em situações descontraídas', true)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Segundo a aula, o que é "Contexto"?');
  q7.setChoices([
    q7.createChoice('Ambiente social e cultural que define o tom do diálogo', true),
    q7.createChoice('Fidelidade aos fatos e ética no trato das informações', false),
    q7.createChoice('clareza na linguagem, objetividade no tempo e respeito mútuo', false),
    q7.createChoice('quem decodifica e interpreta o sinal', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Segundo a aula, o que é "Sustentada pelo tripé inegociável"?');
  q8.setChoices([
    q8.createChoice('clareza na linguagem, objetividade no tempo e respeito mútuo', true),
    q8.createChoice('o conteúdo estruturado e transmitido', false),
    q8.createChoice('Processo, Eficácia, Retorno e Registro', false),
    q8.createChoice('quem formula e codifica o conteúdo', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Segundo a aula, o que é "Integridade"?');
  q9.setChoices([
    q9.createChoice('clareza na linguagem, objetividade no tempo e respeito mútuo', false),
    q9.createChoice('Processo, Eficácia, Retorno e Registro', false),
    q9.createChoice('o conteúdo estruturado e transmitido', false),
    q9.createChoice('Fidelidade aos fatos e ética no trato das informações', true)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "O Circuito da Comunicação"?');
  q10.setChoices([
    q10.createChoice('Foco estrito no que importa, eliminando redundâncias que sobrecarregam o tempo do destinatário', false),
    q10.createChoice('Quem responde pelo resultado e valida formalmente a transmissão', false),
    q10.createChoice('Todo intercâmbio de mensagens depende de componentes dinâmicos integrados', true),
    q10.createChoice('O setor de Enfermagem só recebeu o comunicado 48 horas depois, pois a circular ficou retida na caixa de entrada geral sem aviso de urgência nem confirmação de...', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Silos Departamentais"?');
  q11.setChoices([
    q11.createChoice('Em uma folha sulfite ou ferramenta digital, monte seu mapa conceitual unindo os 4 pilares do Módulo 1. Inclua obrigatoriamente: Processo Comunicativo, Feedback...', false),
    q11.createChoice('Três pacientes receberam doses incorretas por ausência de canal ágil e feedback obrigatório', false),
    q11.createChoice('Setores retêm informações cruciais por falta de integração ou rivalidade interna desnecessária', true),
    q11.createChoice('Quem responde pelo resultado e valida formalmente a transmissão', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Registros Formais vs. Informais"?');
  q12.setChoices([
    q12.createChoice('Obedece à norma-padrão, com vocabulário preciso, sem gírias e com tratamento respeitoso (relatórios e ofícios)', true),
    q12.createChoice('Corpo ereto, ombros relaxados e gestos abertos que reforçam a segurança do conteúdo transmitido', false),
    q12.createChoice('Em grupos de 4, atuem como Consultores de Comunicação e criem um Plano de Contenção para a Crise Logística', false),
    q12.createChoice('Confirmar a fonte primária e a exatidão dos números antes de repassar qualquer relatório interno', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "A Influência da Cultura Organizacional"?');
  q13.setChoices([
    q13.createChoice('Todo intercâmbio de mensagens depende de componentes dinâmicos integrados', false),
    q13.createChoice('A forma como as pessoas interagem reflete os valores e a hierarquia da instituição. Ambientes abertos estimulam questionamentos e inovação; culturas rígidas exigem...', true),
    q13.createChoice('Quem responde pelo resultado e valida formalmente a transmissão', false),
    q13.createChoice('Confirmar a fonte primária e a exatidão dos números antes de repassar qualquer relatório interno', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Critérios da Transição para a Fala"?');
  q14.setChoices([
    q14.createChoice('Escolha consciente entre registros formais e informais conforme o contexto e o interlocutor', false),
    q14.createChoice('Variação intencional de tom e volume para reter atenção contínua e evitar monotonia durante a fala', true),
    q14.createChoice('Setores retêm informações cruciais por falta de integração ou rivalidade interna desnecessária', false),
    q14.createChoice('Prazos indefinidos ou tarefas atribuídas a múltiplos responsáveis sem dono identificado', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Qual conceito a aula define como: "Processo, Eficácia, Retorno e Registro"?');
  q15.setChoices([
    q15.createChoice('Receptor', false),
    q15.createChoice('Mapeamento', false),
    q15.createChoice('Síntese', false),
    q15.createChoice('Conecte os 4 pilares', true)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "O Ciclo Vital do Feedback"?');
  q16.setChoices([
    q16.createChoice('A comunicação é uma via de mão dupla. Sem o feedback, o emissor apenas emite sinais no vácuo, sem comprovação de êxito', true),
    q16.createChoice('Foco estrito no que importa, eliminando redundâncias que sobrecarregam o tempo do destinatário', false),
    q16.createChoice('Corpo ereto, ombros relaxados e gestos abertos que reforçam a segurança do conteúdo transmitido', false),
    q16.createChoice('A forma como as pessoas interagem reflete os valores e a hierarquia da instituição. Ambientes abertos estimulam questionamentos e inovação; culturas rígidas exigem...', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Os Três Pilares da Eficácia"?');
  q17.setChoices([
    q17.createChoice('Foco estrito no que importa, eliminando redundâncias que sobrecarregam o tempo do destinatário', true),
    q17.createChoice('Pesquisas globais mostram que a clareza e capacidade de síntese superam o conhecimento técnico isolado no desenvolvimento de carreira', false),
    q17.createChoice('Comunicação direta entre níveis funcionais por chats internos, com foco em agilidade e respostas imediatas', false),
    q17.createChoice('O comunicador habilidoso ajusta o tom ao público-alvo, canal e objetivo específico da mensagem', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "Responsabilidade ao Compartilhar"?');
  q18.setChoices([
    q18.createChoice('Quem responde pelo resultado e valida formalmente a transmissão', false),
    q18.createChoice('Capacidade de argumentar com dados verificáveis sem recorrer a ataques pessoais ou falácias', false),
    q18.createChoice('Respeitar informações estratégicas corporativas que não devem circular em grupos informais de mensagem', true),
    q18.createChoice('Foco estrito no que importa, eliminando redundâncias que sobrecarregam o tempo do destinatário', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "Impacto Crítico"?');
  q19.setChoices([
    q19.createChoice('Uso correto de conceitos técnicos e fundamentação teórica sólida em seminários e redações acadêmicas', false),
    q19.createChoice('O comunicador habilidoso ajusta o tom ao público-alvo, canal e objetivo específico da mensagem', false),
    q19.createChoice('Três pacientes receberam doses incorretas por ausência de canal ágil e feedback obrigatório', true),
    q19.createChoice('Em uma folha sulfite ou ferramenta digital, monte seu mapa conceitual unindo os 4 pilares do Módulo 1. Inclua obrigatoriamente: Processo Comunicativo, Feedback...', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Segundo a aula, o que é "Mapeamento"?');
  q20.setChoices([
    q20.createChoice('o conteúdo estruturado e transmitido', false),
    q20.createChoice('Capacidade de condensar informações centrais com clareza', false),
    q20.createChoice('Processo, Eficácia, Retorno e Registro', false),
    q20.createChoice('Identificação sistemática dos fluxos e ruídos no canal', true)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 21 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 21 — Síntese dos Fundamentos da Comunicação Consolidação e Prática do Módulo 1');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula21() {
  var form = FormApp.openByTitle('Avaliação — Aula 21 · Síntese dos Fundamentos da Comunicação Consolidação e Prática do Módulo 1 · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 21: Síntese dos Fundamentos da Comunicação Consolidação e Prática do Módulo 1');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Síntese dos Fundamentos da Comunicação Consolidação e Prática do Módulo 1', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos de Aprendizagem', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'elementos, eficácia, feedback e registros linguísticos.', 'Capacidade de condensar informações centrais com clareza.', 'Identificação sistemática dos fluxos e ruídos no canal.', 'Ambiente social e cultural que define o tom do diálogo.', 'Fidelidade aos fatos e ética no trato das informações.', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 22
// ════════════════════════════════════════════════════════════


function criarFormularioAula22() {
  var form = FormApp.create('Avaliação — Aula 22 · Estrutura de Apresentações Como planejar discursos memoráveis, claros e persuasivos · SENAI');

  form.setDescription( 'Avaliação Completa: Estrutura de Apresentações Como planejar discursos memoráveis, claros e persuasivos\n\nAula 22 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Estrutura de Apresentações Como planejar discursos memoráveis, claros e persuasivos');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "História Curta"?');
  q1.setChoices([
    q1.createChoice('Aristóteles definiu que a persuasão exige Ethos (credibilidade), Logos (lógica e dados) e Pathos (conexão emocional)', false),
    q1.createChoice('Uma anedota humana de 30 segundos que ilustra o problema real', true),
    q1.createChoice('Discursos que usam apenas números (Logos) podem soar frios; apresentações baseadas apenas em emoção (Pathos) perdem sustentação', false),
    q1.createChoice('As frases de transição funcionam como sinalizações em uma estrada: avisam que o tópico anterior acabou e o próximo começou', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Dado Surpreendente"?');
  q2.setChoices([
    q2.createChoice('Apresenta um fato contrastante que quebra expectativas comuns', true),
    q2.createChoice('Na próxima aula, entraremos a fundo em Técnicas de Oratória: modulação de tom de voz, pausas expressivas e postura física', false),
    q2.createChoice('Uma pausa de dois segundos após uma afirmação importante permite que a mente dos ouvintes processe o dado', false),
    q2.createChoice('Uma apresentação em público nada mais é do que esse ciclo ampliado: o orador calibra sua mensagem observando as reações do público', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "REVISÃO"?');
  q3.setChoices([
    q3.createChoice('Demonstre com clareza como certas escolhas geram consequências específicas', false),
    q3.createChoice('Uma apresentação em público nada mais é do que esse ciclo ampliado: o orador calibra sua mensagem observando as reações do público', true),
    q3.createChoice('Uma pausa de dois segundos após uma afirmação importante permite que a mente dos ouvintes processe o dado', false),
    q3.createChoice('Não buscamos eliminar a energia, mas sim canalizá-la: o corpo precisa aprender que o público é um parceiro de conversa, não uma ameaça', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Estrutura"?');
  q4.setChoices([
    q4.createChoice('Contexto essencial ou diagnóstico do cenário', false),
    q4.createChoice('passado, diagnóstico atual e futuro', false),
    q4.createChoice('Evidência analítica, argumento prático ou teste', false),
    q4.createChoice('Esqueleto que organiza ideias e guia a audiência', true)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Qual conceito a aula define como: "passado, diagnóstico atual e futuro"?');
  q5.setChoices([
    q5.createChoice('Objetividade', false),
    q5.createChoice('Apresente fatos em ordem temporal', true),
    q5.createChoice('Terceiro Pilar', false),
    q5.createChoice('Segundo Pilar', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Comunicação Profissional"?');
  q6.setChoices([
    q6.createChoice('Na vida escolar avançada e no mercado de trabalho, expressar-se verbalmente não é apenas falar: é alinhar expectativas e propor soluções', true),
    q6.createChoice('Inspire em 4 segundos, retenha em 4 e expire em 4 para baixar os batimentos', false),
    q6.createChoice('Discursos que usam apenas números (Logos) podem soar frios; apresentações baseadas apenas em emoção (Pathos) perdem sustentação', false),
    q6.createChoice('Uma apresentação em público nada mais é do que esse ciclo ampliado: o orador calibra sua mensagem observando as reações do público', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. De acordo com a aula, o que caracteriza "O Princípio da Persuasão"?');
  q7.setChoices([
    q7.createChoice('Palavras-chave ativam a memória e permitem que você fale com suas próprias palavras', false),
    q7.createChoice('Tome pequenos goles de água em temperatura ambiente para evitar a boca seca', false),
    q7.createChoice('Uma apresentação em público nada mais é do que esse ciclo ampliado: o orador calibra sua mensagem observando as reações do público', false),
    q7.createChoice('Aristóteles definiu que a persuasão exige Ethos (credibilidade), Logos (lógica e dados) e Pathos (conexão emocional)', true)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Segundo a aula, o que é "Pacing"?');
  q8.setChoices([
    q8.createChoice('Gestão da velocidade, pausas e tempo da fala', true),
    q8.createChoice('Proposta transformadora ou encaminhamento prático', false),
    q8.createChoice('Evidência analítica, argumento prático ou teste', false),
    q8.createChoice('Postura que inspira segurança e parceria', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "O Ritmo de Fala (Pacing)"?');
  q9.setChoices([
    q9.createChoice('Ordene as etapas canônicas da montagem e entrega de uma apresentação eficaz', false),
    q9.createChoice('Estruturou seu discurso em exatamente três histórias pessoais encadeadas', false),
    q9.createChoice('Na vida escolar avançada e no mercado de trabalho, expressar-se verbalmente não é apenas falar: é alinhar expectativas e propor soluções', false),
    q9.createChoice('O pacing é a alternância consciente entre momentos de aceleração enérgica e pausas reflexivas', true)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "Avaliação de Roteiro"?');
  q10.setChoices([
    q10.createChoice('Exponha o desafio enfrentado antes de revelar sua proposta central', false),
    q10.createChoice('As frases de transição funcionam como sinalizações em uma estrada: avisam que o tópico anterior acabou e o próximo começou', false),
    q10.createChoice('Palavras-chave ativam a memória e permitem que você fale com suas próprias palavras', false),
    q10.createChoice('Um roteiro eficiente para apresentação oral deve conter a transcrição exata de cada palavra que será dita em voz alta', true)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "O Papel do Roteiro"?');
  q11.setChoices([
    q11.createChoice('Ordene as etapas canônicas da montagem e entrega de uma apresentação eficaz', false),
    q11.createChoice('Uma pausa de dois segundos após uma afirmação importante permite que a mente dos ouvintes processe o dado', false),
    q11.createChoice('As frases de transição funcionam como sinalizações em uma estrada: avisam que o tópico anterior acabou e o próximo começou', false),
    q11.createChoice('Palavras-chave ativam a memória e permitem que você fale com suas próprias palavras', true)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Encadeamento Lógico de Tópicos"?');
  q12.setChoices([
    q12.createChoice('Uma anedota humana de 30 segundos que ilustra o problema real', false),
    q12.createChoice('O pacing é a alternância consciente entre momentos de aceleração enérgica e pausas reflexivas', false),
    q12.createChoice('Apresenta um fato contrastante que quebra expectativas comuns', false),
    q12.createChoice('Demonstre com clareza como certas escolhas geram consequências específicas', true)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. Segundo a aula, o que é "Conexão visual"?');
  q13.setChoices([
    q13.createChoice('Tradução de ideias complexas de forma compreensível', false),
    q13.createChoice('Proposta transformadora ou encaminhamento prático', false),
    q13.createChoice('Postura que inspira segurança e parceria', true),
    q13.createChoice('Respeito imediato ao tempo dos colegas e clientes', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "Objetividade"?');
  q14.setChoices([
    q14.createChoice('Esqueleto que organiza ideias e guia a audiência', false),
    q14.createChoice('Respeito imediato ao tempo dos colegas e clientes', true),
    q14.createChoice('Contexto essencial ou diagnóstico do cenário', false),
    q14.createChoice('Capacidade de engajar e motivar reflexão', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Respiração 4-4-4"?');
  q15.setChoices([
    q15.createChoice('Palavras-chave ativam a memória e permitem que você fale com suas próprias palavras', false),
    q15.createChoice('Inspire em 4 segundos, retenha em 4 e expire em 4 para baixar os batimentos', true),
    q15.createChoice('Tome pequenos goles de água em temperatura ambiente para evitar a boca seca', false),
    q15.createChoice('Estruturou seu discurso em exatamente três histórias pessoais encadeadas', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Segundo a aula, o que é "Primeiro Pilar"?');
  q16.setChoices([
    q16.createChoice('Evidência analítica, argumento prático ou teste', false),
    q16.createChoice('Contexto essencial ou diagnóstico do cenário', true),
    q16.createChoice('Gestão da velocidade, pausas e tempo da fala', false),
    q16.createChoice('Esqueleto que organiza ideias e guia a audiência', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. Segundo a aula, o que é "Segundo Pilar"?');
  q17.setChoices([
    q17.createChoice('Evidência analítica, argumento prático ou teste', true),
    q17.createChoice('Tradução de ideias complexas de forma compreensível', false),
    q17.createChoice('passado, diagnóstico atual e futuro', false),
    q17.createChoice('Proposta transformadora ou encaminhamento prático', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "O Ciclo do Módulo 1"?');
  q18.setChoices([
    q18.createChoice('O pacing é a alternância consciente entre momentos de aceleração enérgica e pausas reflexivas', false),
    q18.createChoice('Uma apresentação em público nada mais é do que esse ciclo ampliado: o orador calibra sua mensagem observando as reações do público', false),
    q18.createChoice('Na próxima aula, entraremos a fundo em Técnicas de Oratória: modulação de tom de voz, pausas expressivas e postura física', false),
    q18.createChoice('No módulo anterior, vimos que comunicar exige emissor, mensagem, canal, receptor e feedback contínuo', true)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Segundo a aula, o que é "Clareza técnica"?');
  q19.setChoices([
    q19.createChoice('Evidência analítica, argumento prático ou teste', false),
    q19.createChoice('passado, diagnóstico atual e futuro', false),
    q19.createChoice('Tradução de ideias complexas de forma compreensível', true),
    q19.createChoice('Guia de tópicos que apoia a fala sem leitura fixa', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Segundo a aula, o que é "Roteiro"?');
  q20.setChoices([
    q20.createChoice('Contexto essencial ou diagnóstico do cenário', false),
    q20.createChoice('Respeito imediato ao tempo dos colegas e clientes', false),
    q20.createChoice('passado, diagnóstico atual e futuro', false),
    q20.createChoice('Guia de tópicos que apoia a fala sem leitura fixa', true)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 22 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 22 — Estrutura de Apresentações Como planejar discursos memoráveis, claros e persuasivos');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula22() {
  var form = FormApp.openByTitle('Avaliação — Aula 22 · Estrutura de Apresentações Como planejar discursos memoráveis, claros e persuasivos · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 22: Estrutura de Apresentações Como planejar discursos memoráveis, claros e persuasivos');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Estrutura de Apresentações Como planejar discursos memoráveis, claros e persuasivos', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos de Aprendizagem', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Esqueleto que organiza ideias e guia a audiência.', 'Guia de tópicos que apoia a fala sem leitura fixa.', 'Gestão da velocidade, pausas e tempo da fala.', 'Capacidade de engajar e motivar reflexão.', 'Qual componente do processo comunicativo confirma que a mensagem foi recebida e compreendida?', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 23
// ════════════════════════════════════════════════════════════

function criarFormularioAula23() {
  var form = FormApp.create('Avaliação — Aula 23 · Técnicas de Oratória e Expressão Vocal · SENAI');

  form.setDescription( 'Avaliação Completa: Técnicas de Oratória e Expressão Vocal\n\nAula 23 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Técnicas de Oratória e Expressão Vocal');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Intensidade Dinâmica"?');
  q1.setChoices([
    q1.createChoice('Abertura de mandíbula, elasticidade labial e agilidade da língua para moldar os sons no trato vocal', false),
    q1.createChoice('Projeção moderada com articulação nítida para sobrepor ruídos externos de cadernos e cadeiras', false),
    q1.createChoice('Uso de microfone ou projeção diafragmática máxima, mantendo velocidade cadenciada', false),
    q1.createChoice('Um sussurro focado pode atrair mais atenção e silêncio do que uma explosão de volume', true)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Dicção (Resultado Sonoro)"?');
  q2.setChoices([
    q2.createChoice('Elevar ligeiramente o tom atrai curiosidade; baixar o tom gera gravidade e solenidade imediata', false),
    q2.createChoice('Clareza auditiva dos fonemas produzidos, garantindo que o ouvinte não confunda palavras parecidas', true),
    q2.createChoice('Abertura de mandíbula, elasticidade labial e agilidade da língua para moldar os sons no trato vocal', false),
    q2.createChoice('Volume é a quantidade de pressão acústica emitida, enquanto projeção é a capacidade de fazer a voz alcançar a última fileira sem forçar a garganta', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "A Voz como Nosso Instrumento"?');
  q3.setChoices([
    q3.createChoice('O ar é liberado aos poucos enquanto a voz soa, garantindo final de frases firme e sem ofegar', false),
    q3.createChoice('Emitir sons com apoio muscular transmite autoridade natural, sem necessidade de elevar o tom para intimidar', false),
    q3.createChoice('Assim como um violoncelo precisa de cordas ajustadas, caixa de ressonância e ar para ecoar, a voz humana depende do ar dos pulmões, da vibração nas pregas vocais e...', true),
    q3.createChoice('Articulação é o movimento mecânico da boca. Falar sem mexer os lábios e a mandíbula faz as palavras soarem emboladas, como se estivessem presas atrás dos dentes', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. De acordo com a aula, o que caracteriza "Modulação: A Melodia do Discurso"?');
  q4.setChoices([
    q4.createChoice('Ninguém consegue prestar atenção por muito tempo em um som linear e constante. A monotonia vocal funciona como um convite ao sono para a plateia', true),
    q4.createChoice('Abertura de mandíbula, elasticidade labial e agilidade da língua para moldar os sons no trato vocal', false),
    q4.createChoice('Volume coloquial e intimista. O exagero aqui soa agressivo e invasivo para os ouvintes próximos', false),
    q4.createChoice('Clareza auditiva dos fonemas produzidos, garantindo que o ouvinte não confunda palavras parecidas', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "Articulação e Clareza Sonora"?');
  q5.setChoices([
    q5.createChoice('Chegou a hora de colocar a teoria em ação! Você fará uma gravação curta de áudio para avaliar sua própria expressão vocal', false),
    q5.createChoice('Ação física muscular de mover lábios, dente e língua para produzir fonemas distintos', false),
    q5.createChoice('Emitir sons com apoio muscular transmite autoridade natural, sem necessidade de elevar o tom para intimidar', false),
    q5.createChoice('Articulação é o movimento mecânico da boca. Falar sem mexer os lábios e a mandíbula faz as palavras soarem emboladas, como se estivessem presas atrás dos dentes', true)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Enfatizando Pontos Cruciais"?');
  q6.setChoices([
    q6.createChoice('Elevar ligeiramente o tom atrai curiosidade; baixar o tom gera gravidade e solenidade imediata', true),
    q6.createChoice('Projeção moderada com articulação nítida para sobrepor ruídos externos de cadernos e cadeiras', false),
    q6.createChoice('Ninguém consegue prestar atenção por muito tempo em um som linear e constante. A monotonia vocal funciona como um convite ao sono para a plateia', false),
    q6.createChoice('A respiração diafragmática expande a região abdominal inferior, fornecendo um colchão constante de ar para sustentar frases longas com estabilidade', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. De acordo com a aula, o que caracteriza "Preparando a musculatura vocal"?');
  q7.setChoices([
    q7.createChoice('Nenhum atleta entra em campo sem aquecer os músculos. Da mesma forma, as pregas vocais são tecidos musculares sensíveis que precisam de lubrificação e aquecimento...', true),
    q7.createChoice('A credibilidade de uma fala baseia-se em três pilares essenciais: a solidez do conteúdo, a postura física e a firmeza vocal. Uma voz trêmula ou excessivamente...', false),
    q7.createChoice('Direcionar a voz para pontos diferentes da plateia enquanto olha nos olhos das pessoas gera proximidade e respeito mútuo', false),
    q7.createChoice('Elevar ligeiramente o tom atrai curiosidade; baixar o tom gera gravidade e solenidade imediata', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "Firmeza Sem Agressividade"?');
  q8.setChoices([
    q8.createChoice('A oratória não é um dom inato, mas uma habilidade lapidada pelo treino diário da respiração, da pausa e da articulação consciente. Fale com clareza e seja ouvido...', false),
    q8.createChoice('Pronunciar o termo-chave com maior apoio e contorno vocal destaca-o como tese central', false),
    q8.createChoice('Conquista a atenção inicial, cria conexão humana com a plateia e apresenta o tema central com objetividade', false),
    q8.createChoice('Emitir sons com apoio muscular transmite autoridade natural, sem necessidade de elevar o tom para intimidar', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Auditório Amplo"?');
  q9.setChoices([
    q9.createChoice('Uso de microfone ou projeção diafragmática máxima, mantendo velocidade cadenciada', true),
    q9.createChoice('Articulação é o movimento mecânico da boca. Falar sem mexer os lábios e a mandíbula faz as palavras soarem emboladas, como se estivessem presas atrás dos dentes', false),
    q9.createChoice('Emitir sons com apoio muscular transmite autoridade natural, sem necessidade de elevar o tom para intimidar', false),
    q9.createChoice('Conquista a atenção inicial, cria conexão humana com a plateia e apresenta o tema central com objetividade', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "Articulação vs Dicção"?');
  q10.setChoices([
    q10.createChoice('Abertura de mandíbula, elasticidade labial e agilidade da língua para moldar os sons no trato vocal', true),
    q10.createChoice('Emitir sons com apoio muscular transmite autoridade natural, sem necessidade de elevar o tom para intimidar', false),
    q10.createChoice('Ação física muscular de mover lábios, dente e língua para produzir fonemas distintos', false),
    q10.createChoice('Uso de microfone ou projeção diafragmática máxima, mantendo velocidade cadenciada', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Respiração e Apoio Diafragmático"?');
  q11.setChoices([
    q11.createChoice('Ordene os passos essenciais antes de iniciar uma fala pública importante', false),
    q11.createChoice('A respiração diafragmática expande a região abdominal inferior, fornecendo um colchão constante de ar para sustentar frases longas com estabilidade', true),
    q11.createChoice('Direcionar a voz para pontos diferentes da plateia enquanto olha nos olhos das pessoas gera proximidade e respeito mútuo', false),
    q11.createChoice('Volume é a quantidade de pressão acústica emitida, enquanto projeção é a capacidade de fazer a voz alcançar a última fileira sem forçar a garganta', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "O Poder das Pausas Estratégicas"?');
  q12.setChoices([
    q12.createChoice('Nenhum atleta entra em campo sem aquecer os músculos. Da mesma forma, as pregas vocais são tecidos musculares sensíveis que precisam de lubrificação e aquecimento...', false),
    q12.createChoice('Uso de microfone ou projeção diafragmática máxima, mantendo velocidade cadenciada', false),
    q12.createChoice('Chegou a hora de colocar a teoria em ação! Você fará uma gravação curta de áudio para avaliar sua própria expressão vocal', false),
    q12.createChoice('O silêncio na oratória não é ausência de conteúdo: é uma moldura para o que vem a seguir', true)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Dimensões do Espaço de Fala"?');
  q13.setChoices([
    q13.createChoice('Volume é a quantidade de pressão acústica emitida, enquanto projeção é a capacidade de fazer a voz alcançar a última fileira sem forçar a garganta', false),
    q13.createChoice('Volume coloquial e intimista. O exagero aqui soa agressivo e invasivo para os ouvintes próximos', true),
    q13.createChoice('Abertura de mandíbula, elasticidade labial e agilidade da língua para moldar os sons no trato vocal', false),
    q13.createChoice('Pronunciar o termo-chave com maior apoio e contorno vocal destaca-o como tese central', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Ajuste de Volume e Projeção"?');
  q14.setChoices([
    q14.createChoice('Volume coloquial e intimista. O exagero aqui soa agressivo e invasivo para os ouvintes próximos', false),
    q14.createChoice('Volume é a quantidade de pressão acústica emitida, enquanto projeção é a capacidade de fazer a voz alcançar a última fileira sem forçar a garganta', true),
    q14.createChoice('Projeção moderada com articulação nítida para sobrepor ruídos externos de cadernos e cadeiras', false),
    q14.createChoice('Ninguém consegue prestar atenção por muito tempo em um som linear e constante. A monotonia vocal funciona como um convite ao sono para a plateia', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "As Funções do Silêncio"?');
  q15.setChoices([
    q15.createChoice('Um sussurro focado pode atrair mais atenção e silêncio do que uma explosão de volume', false),
    q15.createChoice('Elevar ligeiramente o tom atrai curiosidade; baixar o tom gera gravidade e solenidade imediata', false),
    q15.createChoice('A respiração diafragmática expande a região abdominal inferior, fornecendo um colchão constante de ar para sustentar frases longas com estabilidade', false),
    q15.createChoice('Uma pausa de dois segundos antes de uma revelação cria expectativa dramática. A mesma pausa logo após um conceito complexo permite a assimilação cognitiva do ouvinte', true)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "Variação de Ritmo"?');
  q16.setChoices([
    q16.createChoice('Assim como um violoncelo precisa de cordas ajustadas, caixa de ressonância e ar para ecoar, a voz humana depende do ar dos pulmões, da vibração nas pregas vocais e...', false),
    q16.createChoice('A respiração diafragmática expande a região abdominal inferior, fornecendo um colchão constante de ar para sustentar frases longas com estabilidade', false),
    q16.createChoice('Desacelerar em frases decisivas faz a audiência absorver cada palavra com profundidade', true),
    q16.createChoice('Abertura de mandíbula, elasticidade labial e agilidade da língua para moldar os sons no trato vocal', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Relembrando a Estrutura Básica"?');
  q17.setChoices([
    q17.createChoice('Assim como um violoncelo precisa de cordas ajustadas, caixa de ressonância e ar para ecoar, a voz humana depende do ar dos pulmões, da vibração nas pregas vocais e...', false),
    q17.createChoice('Conquista a atenção inicial, cria conexão humana com a plateia e apresenta o tema central com objetividade', true),
    q17.createChoice('Abertura de mandíbula, elasticidade labial e agilidade da língua para moldar os sons no trato vocal', false),
    q17.createChoice('Direcionar a voz para pontos diferentes da plateia enquanto olha nos olhos das pessoas gera proximidade e respeito mútuo', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "Vocabulário Essencial da Voz"?');
  q18.setChoices([
    q18.createChoice('Ação física muscular de mover lábios, dente e língua para produzir fonemas distintos', true),
    q18.createChoice('Direcionar a voz para pontos diferentes da plateia enquanto olha nos olhos das pessoas gera proximidade e respeito mútuo', false),
    q18.createChoice('Articulação é o movimento mecânico da boca. Falar sem mexer os lábios e a mandíbula faz as palavras soarem emboladas, como se estivessem presas atrás dos dentes', false),
    q18.createChoice('Ordene os passos essenciais antes de iniciar uma fala pública importante', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "Destaque de Palavra"?');
  q19.setChoices([
    q19.createChoice('Abertura de mandíbula, elasticidade labial e agilidade da língua para moldar os sons no trato vocal', false),
    q19.createChoice('Nenhum atleta entra em campo sem aquecer os músculos. Da mesma forma, as pregas vocais são tecidos musculares sensíveis que precisam de lubrificação e aquecimento...', false),
    q19.createChoice('Pronunciar o termo-chave com maior apoio e contorno vocal destaca-o como tese central', true),
    q19.createChoice('Uma pausa de dois segundos antes de uma revelação cria expectativa dramática. A mesma pausa logo após um conceito complexo permite a assimilação cognitiva do ouvinte', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "Sala de Aula"?');
  q20.setChoices([
    q20.createChoice('Projeção moderada com articulação nítida para sobrepor ruídos externos de cadernos e cadeiras', true),
    q20.createChoice('Elevar ligeiramente o tom atrai curiosidade; baixar o tom gera gravidade e solenidade imediata', false),
    q20.createChoice('Volume coloquial e intimista. O exagero aqui soa agressivo e invasivo para os ouvintes próximos', false),
    q20.createChoice('Abertura de mandíbula, elasticidade labial e agilidade da língua para moldar os sons no trato vocal', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 23 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 23 — Técnicas de Oratória e Expressão Vocal');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula23() {
  var form = FormApp.openByTitle('Avaliação — Aula 23 · Técnicas de Oratória e Expressão Vocal · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 23: Técnicas de Oratória e Expressão Vocal');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Técnicas de Oratória e Expressão Vocal', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos da Nossa Aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Estrutura da Apresentação', 'Qual é o papel principal da abertura em um discurso?', 'O que deve compor o desenvolvimento de uma boa apresentação?', 'Como um fechamento de impacto deve finalizar uma exposição oral?', 'Capturar a atenção do público, gerar empatia e definir com clareza o tema.', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 24
// ════════════════════════════════════════════════════════════


function criarFormularioAula24() {
  var form = FormApp.create('Avaliação — Aula 24 · Participação e Condução de Reuniões Como liderar, intervir com firmeza e registrar decisões com eficiência · SENAI');

  form.setDescription( 'Avaliação Completa: Participação e Condução de Reuniões Como liderar, intervir com firmeza e registrar decisões com eficiência\n\nAula 24 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Participação e Condução de Reuniões Como liderar, intervir com firmeza e registrar decisões com eficiência');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. Segundo a aula, o que é "Separe as pessoas dos problemas"?');
  q1.setChoices([
    q1.createChoice('Envio da pauta aos participantes com pelo menos 24 horas de antecedência', false),
    q1.createChoice('Resumo claro dos debates, destacando os pontos centrais', false),
    q1.createChoice('Encontro formal para alinhar equipes e tomar decisões', false),
    q1.createChoice('ataque os desafios, nunca os colegas', true)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Segundo a aula, o que é "Mediação"?');
  q2.setChoices([
    q2.createChoice('Resumo das matérias discutidas em ordem cronológica', false),
    q2.createChoice('Encontro formal para alinhar equipes e tomar decisões', false),
    q2.createChoice('ataque os desafios, nunca os colegas', false),
    q2.createChoice('Intervenção equilibrada para harmonizar opiniões e resolver desacordos no grupo', true)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "Comunicação assertiva"?');
  q3.setChoices([
    q3.createChoice('Interrompe os outros, ridiculariza opiniões contrárias e impõe pontos de vista na força', true),
    q3.createChoice('Um bom líder de reunião não quer impor sua vontade. Seu desafio é assegurar que vozes tímidas sejam ouvidas e que ninguém monopolize o microfone', false),
    q3.createChoice('Defender suas ideias não exige falar mais alto ou desqualificar os outros. Firmeza comunicativa nasce da consistência lógica e do controle vocal', false),
    q3.createChoice('No colégio ou no trabalho, conversas desorganizadas geram cansaço, dispersão e atraso nos projetos', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Pauta tratada"?');
  q4.setChoices([
    q4.createChoice('Encontro formal para alinhar equipes e tomar decisões', false),
    q4.createChoice('Decisões tomadas (inclusive votos contrários e ressalvas)', false),
    q4.createChoice('Resumo das matérias discutidas em ordem cronológica', true),
    q4.createChoice('Data, horário, local e lista de participantes presentes e ausentes', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Qual conceito a aula define como: "Encontro formal para alinhar equipes e tomar decisões"?');
  q5.setChoices([
    q5.createChoice('Gestão Ativa do Tempo', false),
    q5.createChoice('Cabeçalho', false),
    q5.createChoice('Reunião', true),
    q5.createChoice('Esquerda', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Sinalize a intenção"?');
  q6.setChoices([
    q6.createChoice('Foco em metas, prazos, orçamentos e decisões pragmáticas com impacto imediato nos resultados da empresa', false),
    q6.createChoice('Em conversas longas, o grupo tende a se perder em detalhes repetitivos. O papel de quem sintetiza é organizar o caos verbal em alternativas claras', false),
    q6.createChoice('Um bom líder de reunião não quer impor sua vontade. Seu desafio é assegurar que vozes tímidas sejam ouvidas e que ninguém monopolize o microfone', false),
    q6.createChoice('Levante a mão fisicamente ou use o recurso do aplicativo sem atropelar a fala de quem está expondo', true)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Qual conceito a aula define como: "ataque os desafios, nunca os colegas"?');
  q7.setChoices([
    q7.createChoice('Pauta', false),
    q7.createChoice('Registro Imediato de Ações', false),
    q7.createChoice('Separe as pessoas dos problemas', true),
    q7.createChoice('Preparação Prévia', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "O propósito do encontro"?');
  q8.setChoices([
    q8.createChoice('Reuniões são instrumentos de alinhamento estratégico, tomada de decisão e resolução coletiva de problemas', true),
    q8.createChoice('Em conversas longas, o grupo tende a se perder em detalhes repetitivos. O papel de quem sintetiza é organizar o caos verbal em alternativas claras', false),
    q8.createChoice('Defender suas ideias não exige falar mais alto ou desqualificar os outros. Firmeza comunicativa nasce da consistência lógica e do controle vocal', false),
    q8.createChoice('Um bom líder de reunião não quer impor sua vontade. Seu desafio é assegurar que vozes tímidas sejam ouvidas e que ninguém monopolize o microfone', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Papéis em uma reunião"?');
  q9.setChoices([
    q9.createChoice('Conduz a pauta, controla o tempo, estimula a participação de todos e mantém o foco no objetivo central', true),
    q9.createChoice('Defender ideias com firmeza e fatos sem atacar nem desrespeitar os colegas', false),
    q9.createChoice('Momento de afunilamento, onde o grupo avalia critérios práticos e escolhe uma rota definitiva', false),
    q9.createChoice('A ata evita o esquecimento de detalhes e serve de referência para quem faltou ao encontro', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "Participação e Condução de Reuniões"?');
  q10.setChoices([
    q10.createChoice('Reuniões produtivas constroem soluções compartilhadas e aceleram grandes conquistas!', false),
    q10.createChoice('Como liderar, intervir com firmeza e registrar decisões com eficiência', true),
    q10.createChoice('Um bom líder de reunião não quer impor sua vontade. Seu desafio é assegurar que vozes tímidas sejam ouvidas e que ninguém monopolize o microfone', false),
    q10.createChoice('Ninguém sabe o que debater; cada participante puxa um tema aleatório e o tempo esgota', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. Qual conceito a aula define como: "Tabela com tarefa, responsável e data de entrega"?');
  q11.setChoices([
    q11.createChoice('Separe as pessoas dos problemas', false),
    q11.createChoice('Plano de ação', true),
    q11.createChoice('Deliberações', false),
    q11.createChoice('Registro Imediato de Ações', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Qual conceito a aula define como: "Resumo das matérias discutidas em ordem cronológica"?');
  q12.setChoices([
    q12.createChoice('Síntese', false),
    q12.createChoice('Mediação', false),
    q12.createChoice('Registro Imediato de Ações', false),
    q12.createChoice('Pauta tratada', true)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. Segundo a aula, o que é "Pauta"?');
  q13.setChoices([
    q13.createChoice('Envio da pauta aos participantes com pelo menos 24 horas de antecedência', false),
    q13.createChoice('Intervenção equilibrada para harmonizar opiniões e resolver desacordos no grupo', false),
    q13.createChoice('Tabela com tarefa, responsável e data de entrega', false),
    q13.createChoice('Lista prévia de tópicos com metas e tempos definidos para guiar o diálogo', true)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "Esquerda"?');
  q14.setChoices([
    q14.createChoice('Decisões tomadas (inclusive votos contrários e ressalvas)', false),
    q14.createChoice('Controle firme dos minutos por tópico sem permitir digressões fora da pauta', false),
    q14.createChoice('Data, horário, local e lista de participantes presentes e ausentes', false),
    q14.createChoice('sem pauta, atrasos e dispersão. Direita: foco no objetivo, respeito aos tempos e ação', true)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Segundo a aula, o que é "Gestão Ativa do Tempo"?');
  q15.setChoices([
    q15.createChoice('Intervenção equilibrada para harmonizar opiniões e resolver desacordos no grupo', false),
    q15.createChoice('Encontro formal para alinhar equipes e tomar decisões', false),
    q15.createChoice('Resumo claro dos debates, destacando os pontos centrais', false),
    q15.createChoice('Controle firme dos minutos por tópico sem permitir digressões fora da pauta', true)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Segundo a aula, o que é "Plano de ação"?');
  q16.setChoices([
    q16.createChoice('Tabela com tarefa, responsável e data de entrega', true),
    q16.createChoice('Resumo das matérias discutidas em ordem cronológica', false),
    q16.createChoice('Envio da pauta aos participantes com pelo menos 24 horas de antecedência', false),
    q16.createChoice('ataque os desafios, nunca os colegas', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Falta de Pauta"?');
  q17.setChoices([
    q17.createChoice('A ata evita o esquecimento de detalhes e serve de referência para quem faltou ao encontro', false),
    q17.createChoice('Ninguém sabe o que debater; cada participante puxa um tema aleatório e o tempo esgota', true),
    q17.createChoice('Foco em metas, prazos, orçamentos e decisões pragmáticas com impacto imediato nos resultados da empresa', false),
    q17.createChoice('Defender suas ideias não exige falar mais alto ou desqualificar os outros. Firmeza comunicativa nasce da consistência lógica e do controle vocal', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Qual conceito a aula define como: "Intervenção equilibrada para harmonizar opiniões e resolver desacordos no grupo"?');
  q18.setChoices([
    q18.createChoice('Cabeçalho', false),
    q18.createChoice('Mediação', true),
    q18.createChoice('Preparação Prévia', false),
    q18.createChoice('Esquerda', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "Fase Divergente"?');
  q19.setChoices([
    q19.createChoice('Em conversas longas, o grupo tende a se perder em detalhes repetitivos. O papel de quem sintetiza é organizar o caos verbal em alternativas claras', false),
    q19.createChoice('Exponha sua sugestão principal nos primeiros 20 segundos antes de detalhar justificativas', false),
    q19.createChoice('Momento de brainstorming livre, onde surgem ideias diferentes sem julgamento prematuro', true),
    q19.createChoice('Levante a mão fisicamente ou use o recurso do aplicativo sem atropelar a fala de quem está expondo', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "A importância da ata"?');
  q20.setChoices([
    q20.createChoice('Em uma ata formal de reunião escolar, é necessário transcrever palavra por palavra tudo o que cada estudante falou', false),
    q20.createChoice('A ata evita o esquecimento de detalhes e serve de referência para quem faltou ao encontro', true),
    q20.createChoice('Interrompe os outros, ridiculariza opiniões contrárias e impõe pontos de vista na força', false),
    q20.createChoice('Momento de afunilamento, onde o grupo avalia critérios práticos e escolhe uma rota definitiva', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 24 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 24 — Participação e Condução de Reuniões Como liderar, intervir com firmeza e registrar decisões com eficiência');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula24() {
  var form = FormApp.openByTitle('Avaliação — Aula 24 · Participação e Condução de Reuniões Como liderar, intervir com firmeza e registrar decisões com eficiência · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 24: Participação e Condução de Reuniões Como liderar, intervir com firmeza e registrar decisões com eficiência');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Participação e Condução de Reuniões Como liderar, intervir com firmeza e registrar decisões com eficiência', 'É um conceito importante apresentado na aula', 'O dilema das reuniões', 'É um conceito importante apresentado na aula', 'Objetivos da nossa aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Encontro formal para alinhar equipes e tomar decisões.', 'Lista prévia de tópicos com metas e tempos definidos para guiar o diálogo.', 'Resumo claro dos debates, destacando os pontos centrais.', 'Intervenção equilibrada para harmonizar opiniões e resolver desacordos no grupo.', '“O que vocês acham de testarmos este caminho por uma semana?”.', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// AULA 25
// ════════════════════════════════════════════════════════════

function criarFormularioAula25() {
  var form = FormApp.create('Avaliação — Aula 25 · Atendimento e Escuta Ativa · SENAI');

  form.setDescription( 'Avaliação Completa: Atendimento e Escuta Ativa\n\nAula 25 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('Questionário Completo — Atendimento e Escuta Ativa');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "REVISÃO"?');
  q1.setChoices([
    q1.createChoice('Levar um problema operacional para o lado pessoal desgasta você e agrava a insatisfação do usuário', false),
    q1.createChoice('Parafrasear significa resumir a essência do que foi dito usando suas próprias palavras, demonstrando que você processou a mensagem com precisão', false),
    q1.createChoice('Quais das seguintes atitudes demonstram acolhimento empático em uma reclamação? Há mais de uma opção correta', false),
    q1.createChoice('Na aula anterior, aprendemos que encontros de trabalho só funcionam com papéis bem delineados', true)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Segundo a aula, o que é "Suspensão de julgamento"?');
  q2.setChoices([
    q2.createChoice('não interromper no meio da frase', true),
    q2.createChoice('outro atendente entenderá o caso sem recomeçar do zero', false),
    q2.createChoice('gerou chamado com acompanhamento prioritário por mensagem', false),
    q2.createChoice('validou a dor materna pelo prazo escolar', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Qual conceito a aula define como: "segurança jurídica para o usuário e para o atendente"?');
  q3.setChoices([
    q3.createChoice('Linguagem corporal aberta', false),
    q3.createChoice('Contato visual', false),
    q3.createChoice('Transparência', true),
    q3.createChoice('Continuidade', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. De acordo com a aula, o que caracteriza "Julgamento Prévio"?');
  q4.setChoices([
    q4.createChoice('Formular a própria fala antes do outro terminar corta a percepção de detalhes', false),
    q4.createChoice('Manter cordialidade e empatia para não transformar uma negativa técnica em rejeição pessoal', false),
    q4.createChoice('Rotular a pessoa como exagerada ou errada antes de ouvir todo o relato', true),
    q4.createChoice('As mesmas palavras podem acolher ou confrontar, dependendo da velocidade e da inflexão vocal com que são ditas', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Segundo a aula, o que é "Continuidade"?');
  q5.setChoices([
    q5.createChoice('postura receptiva e contato visual', false),
    q5.createChoice('Dona Luiza comprou materiais escolares para o início das aulas de sua filha. A entrega atrasou quatro dias e ela liga extremamente indignada para o suporte', false),
    q5.createChoice('outro atendente entenderá o caso sem recomeçar do zero', true),
    q5.createChoice('gerou chamado com acompanhamento prioritário por mensagem', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Segundo a aula, o que é "Atenção sem telas"?');
  q6.setChoices([
    q6.createChoice('preparam dados prévios e evitam dispersões', false),
    q6.createChoice('identificar falhas sistêmicas recorrentes', false),
    q6.createChoice('ligeiramente inclinada para a frente indica dedicação', false),
    q6.createChoice('eliminar distrações eletrônicas', true)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Segundo a aula, o que é "Expressão facial"?');
  q7.setChoices([
    q7.createChoice('outro atendente entenderá o caso sem recomeçar do zero', false),
    q7.createChoice('postura receptiva e contato visual', false),
    q7.createChoice('relaxada e atenta, sem esgares de cansaço ou deboche', true),
    q7.createChoice('Dona Luiza comprou materiais escolares para o início das aulas de sua filha. A entrega atrasou quatro dias e ela liga extremamente indignada para o suporte', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Qual conceito a aula define como: "o atendente cede a exigências ilegais; a empresa sofre prejuízos"?');
  q8.setChoices([
    q8.createChoice('Perde-Ganha', true),
    q8.createChoice('Contato visual', false),
    q8.createChoice('Transparência', false),
    q8.createChoice('Registrou', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Segundo a aula, o que é "Perde-Ganha"?');
  q9.setChoices([
    q9.createChoice('a empresa impõe a regra friamente; o usuário sai lesado e furioso', false),
    q9.createChoice('disponibilizou um voucher digital de emergência para materiais básicos', false),
    q9.createChoice('postura receptiva e contato visual', false),
    q9.createChoice('o atendente cede a exigências ilegais; a empresa sofre prejuízos', true)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Qual conceito a aula define como: "validou a dor materna pelo prazo escolar"?');
  q10.setChoices([
    q10.createChoice('Suspensão de julgamento', false),
    q10.createChoice('Ganha-Ganha', false),
    q10.createChoice('Acolheu', true),
    q10.createChoice('Linguagem corporal aberta', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "O Papel do Tom de Voz"?');
  q11.setChoices([
    q11.createChoice('Ver notificações fragmenta o raciocínio e sinaliza descaso com quem fala', false),
    q11.createChoice('As mesmas palavras podem acolher ou confrontar, dependendo da velocidade e da inflexão vocal com que são ditas', true),
    q11.createChoice('Mais da metade da nossa mensagem é transmitida pelo corpo e pela voz antes mesmo de concluirmos uma oração', false),
    q11.createChoice('Resolver sem demora, mantendo o cuidado humano em cada contato', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Controle Emocional"?');
  q12.setChoices([
    q12.createChoice('A abordagem ganha-ganha busca uma saída onde a necessidade do usuário seja atendida sem desrespeitar os regulamentos ou a segurança da instituição', false),
    q12.createChoice('Quando alguém se comunica de maneira ríspida, a tendência automática é espelhar a hostilidade. Quem domina a comunicação profissional quebra essa cadeia destrutiva', true),
    q12.createChoice('As mesmas palavras podem acolher ou confrontar, dependendo da velocidade e da inflexão vocal com que são ditas', false),
    q12.createChoice('Organize as etapas lógicas de um atendimento eficaz do início ao encerramento', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Técnica 2: Validação Emocional"?');
  q13.setChoices([
    q13.createChoice('Antes de tentar resolver a parte técnica ou burocrática, reconheça a emoção da pessoa. Pessoas irritadas não conseguem raciocinar bem sobre soluções lógicas...', true),
    q13.createChoice('Oferecer a opção de suporte técnico ou troca por cupom após verificação do sistema', false),
    q13.createChoice('Manter cordialidade e empatia para não transformar uma negativa técnica em rejeição pessoal', false),
    q13.createChoice('Quais das seguintes atitudes demonstram acolhimento empático em uma reclamação? Há mais de uma opção correta', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Gentileza no Tom"?');
  q14.setChoices([
    q14.createChoice('Oferecer a opção de suporte técnico ou troca por cupom após verificação do sistema', false),
    q14.createChoice('Processamento fisiológico involuntário de sons e vibrações pelo aparelho auditivo, sem retenção profunda de sentido', false),
    q14.createChoice('Rotular a pessoa como exagerada ou errada antes de ouvir todo o relato', false),
    q14.createChoice('Manter cordialidade e empatia para não transformar uma negativa técnica em rejeição pessoal', true)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Segundo a aula, o que é "Contexto"?');
  q15.setChoices([
    q15.createChoice('postura receptiva e contato visual', false),
    q15.createChoice('a empresa impõe a regra friamente; o usuário sai lesado e furioso', false),
    q15.createChoice('Dona Luiza comprou materiais escolares para o início das aulas de sua filha. A entrega atrasou quatro dias e ela liga extremamente indignada para o suporte', true),
    q15.createChoice('transmite honestidade e segurança sem intimidação', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Segundo a aula, o que é "Secretário"?');
  q16.setChoices([
    q16.createChoice('relaxada e atenta, sem esgares de cansaço ou deboche', false),
    q16.createChoice('identificar falhas sistêmicas recorrentes', false),
    q16.createChoice('a empresa impõe a regra friamente; o usuário sai lesado e furioso', false),
    q16.createChoice('anota deliberações e prazos em ata objetiva', true)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Escutar Ativamente"?');
  q17.setChoices([
    q17.createChoice('Na aula anterior, aprendemos que encontros de trabalho só funcionam com papéis bem delineados', false),
    q17.createChoice('Registro objetivo e acordos ganha-ganha asseguram relacionamentos profissionais duradouros', false),
    q17.createChoice('Ato voluntário que exige foco mental, interpretação das palavras e do tom, empatia e validação da mensagem do outro', true),
    q17.createChoice('Antes de tentar resolver a parte técnica ou burocrática, reconheça a emoção da pessoa. Pessoas irritadas não conseguem raciocinar bem sobre soluções lógicas...', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Qual conceito a aula define como: "postura receptiva e contato visual"?');
  q18.setChoices([
    q18.createChoice('Participantes', false),
    q18.createChoice('Ganha-Perde', false),
    q18.createChoice('Linguagem corporal aberta', true),
    q18.createChoice('Melhoria contínua', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Qual conceito a aula define como: "anota deliberações e prazos em ata objetiva"?');
  q19.setChoices([
    q19.createChoice('Suspensão de julgamento', false),
    q19.createChoice('Secretário', true),
    q19.createChoice('Ganha-Ganha', false),
    q19.createChoice('Acolheu', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Segundo a aula, o que é "Informou limites"?');
  q20.setChoices([
    q20.createChoice('explicou que a entrega física ocorreria em 24h', true),
    q20.createChoice('validou a dor materna pelo prazo escolar', false),
    q20.createChoice('postura receptiva e contato visual', false),
    q20.createChoice('disponibilizou um voucher digital de emergência para materiais básicos', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ AULA 25 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 25 — Atendimento e Escuta Ativa');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasAula25() {
  var form = FormApp.openByTitle('Avaliação — Aula 25 · Atendimento e Escuta Ativa · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 25: Atendimento e Escuta Ativa');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Atendimento e Escuta Ativa', 'Atendimento e Escuta Ativa', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos de Aprendizagem', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Papéis e Dinâmica', 'Parafraseamento', 'Validação Emocional', 'Perguntas Abertas', 'Tensão Alta Tom de voz baixo e pausas intencionais de silêncio.', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) { acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) { feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) { feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) { feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) { feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else { feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/20 (" + percentual.toFixed(0) + "%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: " + media.toFixed(1) + "/20 (" + ((media/20)*100).toFixed(0) + "%)');
    Logger.log('   Maior nota: " + maior.toFixed(1) + "/20');
    Logger.log('   Menor nota: " + menor.toFixed(1) + "/20');
    Logger.log('   Variação: " + (maior - menor).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}


// ════════════════════════════════════════════════════════════
// REVISÃO INTEGRADA
// ════════════════════════════════════════════════════════════

function criarQuizRevisao() {
  var form = FormApp.create('Revisão Integrada — Aulas 1 a 9 · Comunicação Oral e Escrita · SENAI');

  form.setDescription( 'REVISÃO INTEGRADA: Aulas 1 a 9\n\nUC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n30 questões | 30 pontos no total\nTempo estimado: 45-60 minutos\nCobertura: Consolidação de todos os tópicos das aulas 1-9\nVocê verá sua pontuação e feedback detalhado ao enviar!\n\nOBJETIVOS:\n- Revisar conceitos principais das aulas 1-9\n- Identificar áreas que precisam de reforço\n- Preparar-se para avaliações posteriores'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setLimitOneResponsePerUser(true);

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('VALIDACAO - Codigo de Acesso Obrigatorio');

  var campoCodigoAcesso = form.addTextItem();
  campoCodigoAcesso.setTitle('Codigo de Acesso (Obrigatorio - 1 uso por codigo)');
  campoCodigoAcesso.setHelpText('Digite seu codigo exclusivo no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
  campoCodigoAcesso.setRequired(true);

  campoCodigoAcesso.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
      .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)')
      .build()
  );

  form.addSectionHeaderItem().setTitle('REVISÃO INTEGRADA — Aulas 1 a 9');
  form.addTextItem().setHelpText('30 questões | 1 ponto cada | Total: 30 pontos | Cobertura: Aulas 1-9');

  // AULAS 1-3: Fundamentos da Comunicação (9 questões)
  form.addSectionHeaderItem().setTitle('Bloco 1: Fundamentos da Comunicação (Aulas 1-3)');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "RECAPITULAÇÃO"?');
  q1.setChoices([
    q1.createChoice('O relatório técnico investiga situações complexas com introdução, desenvolvimento, conclusão e recomendações', true),
    q1.createChoice('O cabeçalho do memorando deve responder imediatamente a quatro perguntas essenciais do leitor', false),
    q1.createChoice('Texto idêntico distribuído simultaneamente a múltiplos setores para uniformizar uma norma ou instrução geral', false),
    q1.createChoice('Se uma palavra pode ser cortada sem alterar o sentido do pedido, corte-a', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Notícias Recentes"?');
  q2.setChoices([
    q2.createChoice('Sente-se ocupando o encosto da cadeira. Evite debruçar-se sobre a mesa ou recostar desleixadamente', false),
    q2.createChoice('Sentir nervosismo antes de uma entrevista é perfeitamente normal. O objetivo não é extinguir a emoção, mas sim gerenciá-la fisiologicamente', false),
    q2.createChoice('Uma pausa silenciosa de dois segundos demonstra reflexão e segurança, enquanto vícios sonoros transmitem insegurança', false),
    q2.createChoice('Identifique prêmios, lançamentos ou parcerias públicas que mostram seu interesse genuíno', true)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Segundo a aula, o que é "Conexão direta"?');
  q3.setChoices([
    q3.createChoice('Indicam causa, oposição, conclusão ou acréscimo', false),
    q3.createChoice('Respostas alinhadas aos objetivos da pergunta', true),
    q3.createChoice('Conduzem o leitor sem solavancos de uma ideia à seguinte', false),
    q3.createChoice('Organização lógica das ideias para orientar o leitor com clareza', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. De acordo com a aula, o que caracteriza "Revisão: A redação no ambiente de trabalho"?');
  q4.setChoices([
    q4.createChoice('Na aula anterior, estudamos os e-mails corporativos. Eles são rápidos e voltados à ação diária. Aprendemos que o assunto deve antecipar o tema sem rodeios e o texto...', true),
    q4.createChoice('Relatórios técnicos exigem linguagem impessoal e dados mensuráveis em decibéis, tornando impressões subjetivas inadequadas', false),
    q4.createChoice('Especifique sempre a marca, o modelo e a data da última calibração dos aparelhos empregados nos testes', false),
    q4.createChoice('Identificação da Caldeira B-04, do setor térmico e da solicitação de vistoria preventiva', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "Ponto e Vírgula"?');
  q5.setChoices([
    q5.createChoice('O verbo concorda em número (singular/plural) e pessoa com o núcleo do sujeito, mesmo com palavras intermediárias intercaladas', false),
    q5.createChoice('O Acordo Ortográfico eliminou acentos que muitos profissionais ainda usam por desatenção', false),
    q5.createChoice('Separe itens extensos de uma listagem em propostas ou orações já divididas internamente por vírgulas', true),
    q5.createChoice('Em documentos de trabalho, cada parágrafo deve girar em torno de uma ideia central declarada claramente no início: o tópico frasal', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Segundo a aula, o que é "Honestidade"?');
  q6.setChoices([
    q6.createChoice('pontos fortes comprovados por projetos práticos', false),
    q6.createChoice('Expressão corporal que transmite segurança e receptividade', false),
    q6.createChoice('área de estudo atual e interesses gerais', false),
    q6.createChoice('se não souber um termo técnico, admita com disposição para aprender', true)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Segundo a aula, o que é "Clareza"?');
  q7.setChoices([
    q7.createChoice('Escolha palavras simples e diretas, eliminando rodeios desnecessários', true),
    q7.createChoice('Proteger conversas confidenciais e dados pessoais alheios', false),
    q7.createChoice('Ajuste o vocabulário e o tom ao contexto social e ao interlocutor', false),
    q7.createChoice('Projetos complexos exigem alinhamento constante entre setores', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Segundo a aula, o que é "Coesão"?');
  q8.setChoices([
    q8.createChoice('Ligação gramatical entre frases e palavras com conectivos precisos', true),
    q8.createChoice('Organização lógica das ideias para orientar o leitor com clareza', false),
    q8.createChoice('Indicam causa, oposição, conclusão ou acréscimo', false),
    q8.createChoice('Unidade textual básica em torno de uma ideia central condutora', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Etapa 3: Desenvolvimento e resultados"?');
  q9.setChoices([
    q9.createChoice('Abaixo da figura, registre sempre a procedência (ex.: Fonte: Laboratório de Metrologia (2026))', false),
    q9.createChoice('Todo recurso visual deve ter identificador e legenda superior (ex.: Tabela 1 – Índice de Ruído por Sala)', false),
    q9.createChoice('O desenvolvimento é a parte mais volumosa do documento. É aqui que os dados brutos são organizados, descritos e analisados com profundidade técnica', true),
    q9.createChoice('A introdução situa o leitor no tempo, no espaço e no motivo da elaboração do documento. Ela deve responder com exatidão: o quê, por quê e para quem', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "Vocativo e Saudação Inicial"?');
  q10.setChoices([
    q10.createChoice('Pessoas incluídas apenas para acompanhamento e ciência do tema', false),
    q10.createChoice('A saudação estabelece a conexão interpessoal e o grau correto de respeito na hierarquia profissional', true),
    q10.createChoice('Isso polui desnecessariamente a caixa de entrada de 49 pessoas que não precisam dessa confirmação', false),
    q10.createChoice('Na aula anterior, estudamos como a hierarquia visual orienta os olhos do leitor por títulos, tópicos e espaçamentos equilibrados', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "A Mensagem: O Conteúdo"?');
  q11.setChoices([
    q11.createChoice('É por meio do feedback que o emissor verifica se a mensagem foi decodificada corretamente ou se precisa corrigir ruídos e reformular explicações', false),
    q11.createChoice('Quem tem empatia não presume que o outro sabe tudo o que ele sabe. Explica com paciência, escolhe termos acessíveis e confere se foi compreendido', false),
    q11.createChoice('A mensagem é o objeto concreto da transmissão: o conjunto de ideias, sentimentos, instruções ou dados enviados', true),
    q11.createChoice('A falta de uma vírgula pode alterar radicalmente ordens e avisos contratuais', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Segundo a aula, o que é "Comunicado"?');
  q12.setChoices([
    q12.createChoice('Aviso oficial voltado para toda a equipe ou empresa', true),
    q12.createChoice('Texto ágil entre setores para pedidos ou avisos internos', false),
    q12.createChoice('Cria comprovação formal de que um pedido ou aviso foi entregue entre setores', false),
    q12.createChoice('Registro cronológico exato (ex: 15 de abril de 2026)', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Bem-vindos ao Curso!"?');
  q13.setChoices([
    q13.createChoice('O ar atmosférico que propaga ondas sonoras e a visão que capta movimentos e gestos', false),
    q13.createChoice('O emissor traduz sua ideia em palavras, sinais ou imagens compreensíveis', false),
    q13.createChoice('Ao longo desta disciplina, você aprenderá a se expressar com clareza, segurança e ética no colégio e na futura vida profissional', true),
    q13.createChoice('Termos técnicos desconhecidos, gírias regionais e ambiguidades gramaticais', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Recapitulação: Hierarquia Visual"?');
  q14.setChoices([
    q14.createChoice('Colocar a pessoa errada no campo inadequado pode sobrecarregar caixas de entrada ou violar leis de privacidade de dados (como a LGPD)', false),
    q14.createChoice('O campo Assunto define se o seu e-mail será aberto agora, arquivado ou ignorado', false),
    q14.createChoice('Na aula anterior, estudamos como a hierarquia visual orienta os olhos do leitor por títulos, tópicos e espaçamentos equilibrados', true),
    q14.createChoice('Pessoas que precisam acompanhar o assunto por ciência, sem obrigação de responder diretamente à mensagem', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Dica prática"?');
  q15.setChoices([
    q15.createChoice('Se uma palavra pode ser cortada sem alterar o sentido do pedido, corte-a', true),
    q15.createChoice('Quais elementos tornam a segunda versão do memorando mais eficaz do que a primeira? (Mais de uma opção está correta)', false),
    q15.createChoice('Algumas pessoas acreditam que escrever bem no trabalho significa usar termos arcaicos ou palavras difíceis que ninguém entende', false),
    q15.createChoice('Gostaríamos de avisar que os materiais estão acabando rápido demais e quem quiser coisas precisa mandar o papel logo, senão vai ficar sem nada na semana que vem', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "Revisão: Pontuação Aplicada"?');
  q16.setChoices([
    q16.createChoice('Na aula anterior, estudamos correção gramatical. Antes de pensar no visual, o texto deve estar impecável', true),
    q16.createChoice('Empresas e escolas utilizam templates (modelos prontos) para garantir que ninguém precise recriar estilos do zero', false),
    q16.createChoice('Documentos bem formatados perdem credibilidade se houver falhas de concordância', false),
    q16.createChoice('Inicia a mensagem dirigindo-se formalmente à autoridade ou leitor (ex.: Senhor Diretor, ou Prezada Equipe,)', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. Segundo a aula, o que é "Metodologia"?');
  q17.setChoices([
    q17.createChoice('Descrição clara dos métodos e passos usados para investigar o caso', true),
    q17.createChoice('Comparação de resultados com metas de projeto ou limites regulamentares', false),
    q17.createChoice('Medidas viáveis técnica, operacional e financeiramente', false),
    q17.createChoice('Exame da correlação entre variáveis (ex.: aumento de temperatura x queda de tensão)', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "Revisão: Escuta Ativa e Atendimento"?');
  q18.setChoices([
    q18.createChoice('Sentir nervosismo antes de uma entrevista é perfeitamente normal. O objetivo não é extinguir a emoção, mas sim gerenciá-la fisiologicamente', false),
    q18.createChoice('Hoje transformamos a entrevista de emprego em um processo dominado por técnicas de comunicação', false),
    q18.createChoice('Uma pausa silenciosa de dois segundos demonstra reflexão e segurança, enquanto vícios sonoros transmitem insegurança', false),
    q18.createChoice('Na aula anterior, estudamos o atendimento profissional. Vimos que ouvir ativamente não é apenas esperar a sua vez de falar, mas compreender o objetivo da outra...', true)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "O impacto do texto no trabalho"?');
  q19.setChoices([
    q19.createChoice('No ambiente profissional contemporâneo, a maioria das decisões diárias circula por escrito em e-mails, relatórios, atas e comunicados corporativos', true),
    q19.createChoice('Dessa forma, todos os relatórios foram plenamente regularizados dentro do prazo legal', false),
    q19.createChoice('A diretora pediu que o assistente enviasse o relatório elaborado por ela', false),
    q19.createChoice('O parágrafo é uma unidade de pensamento. Misturar múltiplos assuntos não relacionados no mesmo bloco cansa o leitor e oculta informações cruciais', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "PADRÃO CORPORATIVO"?');
  q20.setChoices([
    q20.createChoice('A assinatura institucional comprova a legitimidade do emissor e facilita o contato imediato', true),
    q20.createChoice('Pessoas incluídas apenas para acompanhamento e ciência do tema', false),
    q20.createChoice('Informa urgência ou data limite. Ex: Aprovação até 15/10', false),
    q20.createChoice('Assunto vago, gírias inapropriadas, sem especificação de documento ou prazo e sem assinatura', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);

  var q21 = form.addMultipleChoiceItem();
  q21.setTitle('21. Segundo a aula, o que é "Pontuação"?');
  q21.setChoices([
    q21.createChoice('Clientes e líderes confiam mais em dados apresentados sem falhas gramaticais', false),
    q21.createChoice('Traga dados, justificativas e exemplos em seguida', false),
    q21.createChoice('Regras formais para a escrita pública oficial', false),
    q21.createChoice('Sinais que organizam pausas e sentidos das orações', true)
  ]);
  q21.setPoints(1);
  q21.setRequired(true);

  var q22 = form.addMultipleChoiceItem();
  q22.setTitle('22. Segundo a aula, o que é "Redução de desperdícios"?');
  q22.setChoices([
    q22.createChoice('novos colaboradores aprendem a rotina com autonomia e rapidez', false),
    q22.createChoice('Salvar cópias seguras dos projetos no servidor nuvem', false),
    q22.createChoice('garantia de uso correto de equipamentos de proteção individual', false),
    q22.createChoice('menos erros de montagem e menor perda de matéria-prima', true)
  ]);
  q22.setPoints(1);
  q22.setRequired(true);

  var q23 = form.addMultipleChoiceItem();
  q23.setTitle('23. De acordo com a aula, o que caracteriza "Estruturação de Textos Profissionais"?');
  q23.setChoices([
    q23.createChoice('Um texto pode estar gramaticalmente correto e ainda assim ser incoerente. A coerência reside na não contradição, na verossimilhança e na progressão temática sólida', false),
    q23.createChoice('Mude de parágrafo sempre que mudar de aspecto, argumento ou etapa do tema', false),
    q23.createChoice('Comunicação escrita com clareza, coesão e impacto no ambiente corporativo', true),
    q23.createChoice('Permite correções instantâneas, entonação vocal, pausas de respiração e gestos para apoiar a compreensão mútua', false)
  ]);
  q23.setPoints(1);
  q23.setRequired(true);

  var q24 = form.addMultipleChoiceItem();
  q24.setTitle('24. De acordo com a aula, o que caracteriza "Coesão e Coerência"?');
  q24.setChoices([
    q24.createChoice('Por que para perguntas e motivos. Porque para respostas explicativas', false),
    q24.createChoice('Use portanto, por conseguinte ou dessa forma para consolidar decisões e próximos passos', false),
    q24.createChoice('Um texto profissional precisa ser uma ponte sólida. A coesão é a costura gramatical (pronomes, conectivos e pontuação), enquanto a coerência é a lógica interna que...', true),
    q24.createChoice('O Acordo Ortográfico eliminou acentos que muitos profissionais ainda usam por desatenção', false)
  ]);
  q24.setPoints(1);
  q24.setRequired(true);

  var q25 = form.addMultipleChoiceItem();
  q25.setTitle('25. De acordo com a aula, o que caracteriza "Relação de Pré-requisito"?');
  q25.setChoices([
    q25.createChoice('Registra quantas etapas foram executadas fora de ordem ou de maneira incorreta', false),
    q25.createChoice('O manual presume que o usuário já sabe como encaixar uma peça e omite o passo básico', false),
    q25.createChoice('Enumera equipamentos, EPIs, ferramentas e insumos necessários antes do início', false),
    q25.createChoice('Se uma cola precisa de 10 minutos para secar antes do aperto final, ou se a energia precisa ser cortada antes de abrir a tampa, isso deve constar no momento exato', true)
  ]);
  q25.setPoints(1);
  q25.setRequired(true);

  var q26 = form.addMultipleChoiceItem();
  q26.setTitle('26. Segundo a aula, o que é "Padronização"?');
  q26.setChoices([
    q26.createChoice('Times New Roman, Georgia. Possuem pequenos traços (serifas) nas pontas; excelentes para livros impressos', false),
    q26.createChoice('ideal para separar itens longos em listas numeradas', false),
    q26.createChoice('Regras unificadas para consistência institucional', true),
    q26.createChoice('organiza termos de mesma função sintática', false)
  ]);
  q26.setPoints(1);
  q26.setRequired(true);

  var q27 = form.addMultipleChoiceItem();
  q27.setTitle('27. Segundo a aula, o que é "Postura"?');
  q27.setChoices([
    q27.createChoice('manter os pés firmes no chão ancora o corpo e reduz tremores', false),
    q27.createChoice('desacelerar o ritmo reduz o estresse da conversa', false),
    q27.createChoice('Diálogo intencional para avaliar competências e perfil', false),
    q27.createChoice('Expressão corporal que transmite segurança e receptividade', true)
  ]);
  q27.setPoints(1);
  q27.setRequired(true);

  var q28 = form.addMultipleChoiceItem();
  q28.setTitle('28. De acordo com a aula, o que caracteriza "Vocabulário Essencial"?');
  q28.setChoices([
    q28.createChoice('Avalia a segurança sentida pelo usuário durante o processo do início ao fim', false),
    q28.createChoice('Indicados para inventários, listas de materiais, EPIs ou alertas em que a ordem não interfere no resultado', false),
    q28.createChoice('Usabilidade - Facilidade com que o leitor compreende e executa o texto', true),
    q28.createChoice('Diagramas e ilustrações técnicas mostram o exato encaixe de componentes difíceis de descrever apenas com palavras', false)
  ]);
  q28.setPoints(1);
  q28.setRequired(true);

  var q29 = form.addMultipleChoiceItem();
  q29.setTitle('29. De acordo com a aula, o que caracteriza "O Padrão de Leitura em "F""?');
  q29.setChoices([
    q29.createChoice('Pesquisas comprovam que em ambientes corporativos e telas digitais, o leitor realiza uma varredura visual em formato de F', true),
    q29.createChoice('O formato PDF foi criado para assegurar que um documento seja impresso e visualizado de forma idêntica em qualquer dispositivo ou sistema operacional', false),
    q29.createChoice('Em documentos oficiais e corporativos, o vocativo demonstra respeito à função do destinatário', false),
    q29.createChoice('Espaço em branco não é desperdício de papel: é área de respiro para os olhos. Um layout equilibrado separa tópicos, conduz o olhar e reduz a fadiga visual durante a...', false)
  ]);
  q29.setPoints(1);
  q29.setRequired(true);

  var q30 = form.addMultipleChoiceItem();
  q30.setTitle('30. Segundo a aula, o que é "Segurança"?');
  q30.setChoices([
    q30.createChoice('Escolha palavras simples e diretas, eliminando rodeios desnecessários', false),
    q30.createChoice('Não propagar informações falsas ou dados distorcidos', false),
    q30.createChoice('Rejeitar agressões verbais, ironias cruéis e ofensas preconceituosas', false),
    q30.createChoice('Uma instrução técnica confusa pode causar acidentes graves', true)
  ]);
  q30.setPoints(1);
  q30.setRequired(true);


  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ REVISÃO INTEGRADA (Aulas 1-9) criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Tipo: Quiz de Revisão');
  Logger.log('   Abrangência: Aulas 1 a 9');
  Logger.log('   Questões: 30');
  Logger.log('   Pontuação: 30 pontos (1 ponto/questão)');
  Logger.log('   Blocos: 3 (Fundamentos, Apresentações, Comunicação Profissional)');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasRevisao() {
  var form = FormApp.openByTitle('Revisão Integrada — Aulas 1 a 9 · Comunicação Oral e Escrita · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — REVISÃO INTEGRADA (Aulas 1-9)');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
  var blocos = { bloco1: [], bloco2: [], bloco3: [] };
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 30;
    var acertos_bloco1 = 0, acertos_bloco2 = 0, acertos_bloco3 = 0;

    var respostasCorretas = [ 'Identificar claramente o objetivo e o público-alvo', 'A clareza da mensagem, compreensão do público e feedback', 'Compreender e minimizar interferências que prejudicam mensagens', 'Resposta ou reação do receptor que confirma entendimento', 'Define o tom, estilo e nível de formalidade apropriados', 'Emissor e receptor devem compartilhar o mesmo código para compreensão', 'Ouvindo ativamente, pedindo esclarecimentos e respondendo com respeito', 'Formal segue normas gramaticais rigorosas; informal é coloquial', 'De acordo com o público e o contexto profissional', 'Organizar ideias logicamente para melhor compreensão do público', 'Introdução clara, desenvolvimento lógico, conclusão forte', 'Melhora a clareza, o engajamento e o impacto emocional', 'Transmitem emoção, intenção e reforçam a mensagem', 'Com uma história, pergunta provocadora ou estatística impactante', 'Expandir ideias principais com exemplos, dados e argumentos', 'Com resumo impactante, call-to-action ou reflexão provocadora', 'Complementar e reforçar a mensagem verbal, não substituí-la', 'Planejar com antecedência, cronometrar e adaptar durante', 'Aumentam produtividade, clareza e alinhamento de equipes', 'Pauta clara, horário, objetivos definidos e atas documentadas', 'Ouvir atentamente, contribuir quando relevante e respeitar turnos', 'Mantendo foco, controlando tempo e equilibrando participações', 'Ouvir com atenção plena, fazer perguntas e validar compreensão', 'Ouvir, compreender perspectivas diferentes e buscar consenso', 'Cria confiança, satisfação e relacionamentos positivos', 'Ajustando linguagem, tom e complexidade conforme perfil', 'Comunica até 70% da mensagem; deve estar alinhada com palavras', 'Sendo honesto, cumprir promessas e manter confidencialidade', 'Reconhecer, desculpar-se sinceramente e corrigir', 'Comunicação eficaz é uma habilidade prática e desenvolvível'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 33) {
        var questao_idx = idx - 3;
        if (resposta === respostasCorretas[questao_idx]) { acertos++;
          if (questao_idx < 9) acertos_bloco1++;
          else if (questao_idx < 18) acertos_bloco2++;
          else acertos_bloco3++;
        }
      }
    });

    var nota = (acertos / total) * 30;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota); blocos.bloco1.push((acertos_bloco1 / 9) * 100); blocos.bloco2.push((acertos_bloco2 / 9) * 100); blocos.bloco3.push((acertos_bloco3 / 12) * 100);

    var feedback = '';
    if (percentual >= 90) { feedback = 'EXCELENTE! Domina completamente os tópicos das aulas 1-9!';
    } else if (percentual >= 80) { feedback = 'MUITO BOM! Compreendeu bem. Revise tópicos específicos.';
    } else if (percentual >= 70) { feedback = 'BOM! Revise os tópicos com menor acerto.';
    } else if (percentual >= 60) { feedback = 'Bom início. Estude novamente os conceitos com professor.';
    } else { feedback = 'Procure o professor para revisão orientada.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/30 (" + percentual.toFixed(0) + "%)');
    Logger.log('   Bloco 1 (Fundamentos): " + acertos_bloco1 + "/9');
    Logger.log('   Bloco 2 (Apresentações): " + acertos_bloco2 + "/9');
    Logger.log('   Bloco 3 (Profissional): " + acertos_bloco3 + "/12');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var media_bloco1 = blocos.bloco1.reduce(function(a, b) { return a + b; }) / blocos.bloco1.length;
    var media_bloco2 = blocos.bloco2.reduce(function(a, b) { return a + b; }) / blocos.bloco2.length;
    var media_bloco3 = blocos.bloco3.reduce(function(a, b) { return a + b; }) / blocos.bloco3.length;

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS (Revisão Aulas 1-9)');
    Logger.log('   Média Geral: " + media.toFixed(1) + "/30 (" + ((media/30)*100).toFixed(0) + "%)');
    Logger.log('');
    Logger.log('   Bloco 1 (Fundamentos): " + media_bloco1.toFixed(0) + "%');
    Logger.log('   Bloco 2 (Apresentações): " + media_bloco2.toFixed(0) + "%');
    Logger.log('   Bloco 3 (Comunicação Profissional): " + media_bloco3.toFixed(0) + "%');
    Logger.log('');
    Logger.log('   Maior nota: " + Math.max.apply(null, todasAsNotas).toFixed(1) + "/30');
    Logger.log('   Menor nota: " + Math.min.apply(null, todasAsNotas).toFixed(1) + "/30');
    Logger.log('   Variação: " + (Math.max.apply(null, todasAsNotas) - Math.min.apply(null, todasAsNotas)).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 21; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}

// ==========================================================================
// ORQUESTRADOR PRINCIPAL — CRIAR TODOS OS FORMULÁRIOS
// ==========================================================================

/**
 * Função principal que cria TODOS os 26 formulários de uma só vez
 * (25 aulas + 1 quiz de revisão integrado)
 *
 * Execução: Abrir Apps Script > ExecutarCriarTodosFormularios
 * Tempo estimado: 1-2 minutos para criar todos os 26 formulários
 */
function criarTodosFormularios() {
  Logger.log('🚀 INICIANDO CRIAÇÃO DE TODOS OS FORMULÁRIOS...');
  Logger.log('═════════════════════════════════════════════════════════════');
  Logger.log('');

  var inicio = new Date();
  var formulariosCriados = [];
  var erros = [];

  // 0. Criar planilha de rastreamento de códigos
  try {
    Logger.log('📊 Criando Planilha de Rastreamento de Códigos...');
    criarPlanilhaRastreamento();
    Logger.log('   ✅ Planilha de rastreamento criada com sucesso');
  } catch (e) {
    var mensagem = 'Aviso: Não foi possível criar planilha de rastreamento: ' + e.message;
    Logger.log('⚠️  ' + mensagem);
  }
  Logger.log('');

  // 1. Criar os 25 formulários de aulas
  for (var i = 1; i <= 25; i++) {
    try {
      var numStr = (i < 10 ? '0' : '') + i;
      var funcao = 'criarFormularioAula' + numStr;

      Logger.log('📝 Criando Aula ' + i + '...');

      // Chamar dinamicamente a função correspondente
      if (typeof window[funcao] === 'function') {
        window[funcao]();
        formulariosCriados.push('Aula ' + i);
      } else {
        // Alternativa: usar eval (menos seguro, mas funciona em Apps Script)
        eval(funcao + '()');
        formulariosCriados.push('Aula ' + i);
      }
    } catch (e) {
      var mensagem = 'Erro ao criar Aula ' + i + ': ' + e.message;
      Logger.log('❌ ' + mensagem);
      erros.push(mensagem);
    }
  }

  // 2. Criar o quiz de revisão integrado
  try {
    Logger.log('📝 Criando Quiz de Revisão (Aulas 1-9)...');
    criarQuizRevisao();
    formulariosCriados.push('Quiz Revisão (1-9)');
  } catch (e) {
    var mensagem = 'Erro ao criar Quiz de Revisão: ' + e.message;
    Logger.log('❌ ' + mensagem);
    erros.push(mensagem);
  }

  // 3. Relatório final
  var fim = new Date();
  var duracao = (fim - inicio) / 1000; // em segundos

  Logger.log('');
  Logger.log('═════════════════════════════════════════════════════════════');
  Logger.log('✅ RESUMO DA EXECUÇÃO');
  Logger.log('═════════════════════════════════════════════════════════════');
  Logger.log('');
  Logger.log('📊 RESULTADOS:');
  Logger.log('   ✅ Formulários criados: ' + formulariosCriados.length + ' de 26');
  Logger.log('   ❌ Erros encontrados: ' + erros.length);
  Logger.log('   ⏱️  Tempo total: ' + duracao.toFixed(1) + ' segundos');
  Logger.log('');

  if (formulariosCriados.length > 0) {
    Logger.log('✅ FORMULÁRIOS CRIADOS COM SUCESSO:');
    formulariosCriados.forEach(function(nome) {
      Logger.log('   • ' + nome);
    });
    Logger.log('');
  }

  if (erros.length > 0) {
    Logger.log('❌ ERROS ENCONTRADOS:');
    erros.forEach(function(erro) {
      Logger.log('   • ' + erro);
    });
    Logger.log('');
  }

  Logger.log('─────────────────────────────────────────────────────────────');
  Logger.log('');
  Logger.log('📚 TOTAL DE FORMULÁRIOS NO PROJETO:');
  Logger.log('   • 25 Formulários de Aulas (01 a 25)');
  Logger.log('   • 1 Quiz de Revisão Integrado (Aulas 1-9)');
  Logger.log('   • 26 Formulários total');
  Logger.log('');
  Logger.log('📊 TOTAL DE QUESTÕES:');
  Logger.log('   • 20 questões × 25 aulas = 500 questões');
  Logger.log('   • 30 questões × 1 quiz revisão = 30 questões');
  Logger.log('   • 530 questões total');
  Logger.log('');
  Logger.log('═════════════════════════════════════════════════════════════');
}

/**
 * Alias para facilitar execução via menu
 * Mesma funcionalidade que criarTodosFormularios()
 */
function ExecutarCriarTodosFormularios() {
  criarTodosFormularios();
}
