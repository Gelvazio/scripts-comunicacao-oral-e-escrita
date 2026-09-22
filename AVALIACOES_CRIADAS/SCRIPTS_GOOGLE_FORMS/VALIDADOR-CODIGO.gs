/**
 * VALIDADOR-CODIGO.gs
 * Sistema de Validacao de Codigos para Avaliações
 * Introdução à Comunicação Oral e Escrita
 *
 * Funcionalidades:
 * - Validar código antes de permitir resposta
 * - Listar códigos válidos
 * - Gerar relatório de códigos usados
 */

// Lista de 15 códigos válidos para os alunos
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

function validarCodigo(codigo) {
  if (!codigo || codigo.trim() === '') return false;
  return CODIGOS_VALIDOS.indexOf(codigo.toUpperCase().trim()) !== -1;
}

function listarCodigosValidos() {
  Logger.log('CODIGOS VALIDOS DISPONIVEIS:');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('');

  for (var i = 0; i < CODIGOS_VALIDOS.length; i++) {
    Logger.log((i + 1) + '. ' + CODIGOS_VALIDOS[i]);
  }

  Logger.log('');
  Logger.log('Total: ' + CODIGOS_VALIDOS.length + ' codigos');
}

function criarFormularioComValidacao(nomeFormulario) {
  var form;

  try {
    form = FormApp.openByTitle(nomeFormulario);
  } catch (e) {
    Logger.log('Erro: Formulario nao encontrado - ' + nomeFormulario);
    return null;
  }

  // Remover campo de código antigo se existir
  var items = form.getItems();
  for (var i = 0; i < items.length; i++) {
    if (items[i].getTitle && items[i].getTitle().indexOf('Codigo de Acesso') !== -1) {
      form.deleteItem(items[i]);
    }
  }

  // Adicionar novo campo de código com descrição
  var itemIndex = 0;
  items = form.getItems();

  // Encontrar índice após "Identificação"
  for (var i = 0; i < items.length; i++) {
    if (items[i].getType && items[i].getType() === FormApp.ItemType.SECTION_HEADER &&
        items[i].getTitle && items[i].getTitle().indexOf('Identificacao') !== -1) {
      itemIndex = i + 1;
      break;
    }
  }

  // Adicionar campo de código
  if (itemIndex > 0) {
    var item = form.insertTextItem(itemIndex);
    item.setTitle('Codigo de Acesso (Obrigatorio)');
    item.setHelpText('Digite seu codigo de acesso no formato: XXXX-XXXX-XXXX (ex: 3DJ4-CAJ6-5UT0)');
    item.setRequired(true);
    item.setValidation(
      FormApp.createTextValidation()
        .requireTextMatchesPattern('^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$')
        .setHelpText('Formato invalido! Use: XXXX-XXXX-XXXX')
        .build()
    );
  }

  return form;
}

function analisarCodigosUsados(nomeFormulario) {
  Logger.log('ANALISE DE CODIGOS - ' + nomeFormulario);
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('');

  var form;
  try {
    form = FormApp.openByTitle(nomeFormulario);
  } catch (e) {
    Logger.log('Erro: Formulario nao encontrado');
    return;
  }

  var responses = form.getResponses();
  var codigosUsados = {};
  var codigosInvalidos = [];

  responses.forEach(function(response) {
    var itemResponses = response.getItemResponses();

    itemResponses.forEach(function(itemResponse) {
      var titulo = itemResponse.getItem().getTitle();

      if (titulo.indexOf('Codigo de Acesso') !== -1) {
        var codigo = itemResponse.getResponse().toUpperCase().trim();

        if (validarCodigo(codigo)) {
          if (!codigosUsados[codigo]) {
            codigosUsados[codigo] = 0;
          }
          codigosUsados[codigo]++;
        } else {
          codigosInvalidos.push(codigo);
        }
      }
    });
  });

  Logger.log('CODIGOS VALIDOS UTILIZADOS:');
  Logger.log('');

  var total = 0;
  for (var codigo in codigosUsados) {
    Logger.log('  ' + codigo + ': ' + codigosUsados[codigo] + ' vez(es)');
    total += codigosUsados[codigo];
  }

  Logger.log('');
  Logger.log('Total de respostas validas: ' + total);

  if (codigosInvalidos.length > 0) {
    Logger.log('');
    Logger.log('CODIGOS INVALIDOS TENTADOS:');
    Logger.log('');
    codigosInvalidos.forEach(function(codigo) {
      Logger.log('  ❌ ' + codigo);
    });
  }

  Logger.log('');
  Logger.log('CODIGOS NAO UTILIZADOS:');
  Logger.log('');

  var naoUsados = 0;
  CODIGOS_VALIDOS.forEach(function(codigo) {
    if (!codigosUsados[codigo]) {
      Logger.log('  ⏳ ' + codigo);
      naoUsados++;
    }
  });

  Logger.log('');
  Logger.log('Total nao utilizado: ' + naoUsados);
}

function exportarCodigosParaCSV() {
  var csv = 'NUMERO,CODIGO,STATUS\n';

  for (var i = 0; i < CODIGOS_VALIDOS.length; i++) {
    csv += (i + 1) + ',' + CODIGOS_VALIDOS[i] + ',Disponivel\n';
  }

  Logger.log('CODIGOS EM FORMATO CSV:');
  Logger.log('');
  Logger.log(csv);
  Logger.log('');
  Logger.log('(Copie o texto acima para usar em Excel/Sheets)');
}

function mostrarInfoValidacao() {
  Logger.log('╔═══════════════════════════════════════════════════╗');
  Logger.log('║       SISTEMA DE VALIDACAO DE CODIGOS               ║');
  Logger.log('╚═══════════════════════════════════════════════════╝');
  Logger.log('');
  Logger.log('FUNCOES DISPONIVEIS:');
  Logger.log('');
  Logger.log('1. listarCodigosValidos()');
  Logger.log('   → Lista todos os 15 codigos validos');
  Logger.log('');
  Logger.log('2. validarCodigo(codigo)');
  Logger.log('   → Verifica se um codigo eh valido');
  Logger.log('   → Uso: validarCodigo("3DJ4-CAJ6-5UT0")');
  Logger.log('');
  Logger.log('3. criarFormularioComValidacao(nomeFormulario)');
  Logger.log('   → Adiciona campo de codigo ao formulario');
  Logger.log('');
  Logger.log('4. analisarCodigosUsados(nomeFormulario)');
  Logger.log('   → Mostra quais codigos foram usados');
  Logger.log('');
  Logger.log('5. exportarCodigosParaCSV()');
  Logger.log('   → Exporta codigos em formato CSV');
  Logger.log('');
  Logger.log('INFORMACOES:');
  Logger.log('  - Total de codigos: ' + CODIGOS_VALIDOS.length);
  Logger.log('  - Formato: XXXX-XXXX-XXXX');
  Logger.log('  - Alunos: ' + CODIGOS_VALIDOS.length);
  Logger.log('  - Validacao: Obrigatoria');
  Logger.log('');
}
