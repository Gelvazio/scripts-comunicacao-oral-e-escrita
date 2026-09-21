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

  var aulas = [
    { num: '01', func: criarFormularioAula01, titulo: 'Processo Comunicativo' },
    { num: '02', func: criarFormularioAula02, titulo: 'Comunicacao Eficaz' },
    { num: '03', func: criarFormularioAula03, titulo: 'O Ciclo do Feedback' },
    { num: '04', func: criarFormularioAula04, titulo: 'Contextos Formais vs Informais' },
    { num: '05', func: criarFormularioAula05, titulo: 'Sintese dos Fundamentos' },
    { num: '06', func: criarFormularioAula06, titulo: 'Estrutura de Apresentacoes' },
    { num: '07', func: criarFormularioAula07, titulo: 'Tecnicas de Oratoria' },
    { num: '08', func: criarFormularioAula08, titulo: 'Participacao em Reunioes' },
    { num: '09', func: criarFormularioAula09, titulo: 'Atendimento e Escuta Ativa' },
    { num: '10', func: criarFormularioAula10, titulo: 'Preparacao para Entrevistas' },
    { num: '11', func: criarFormularioAula11, titulo: 'Estruturacao de Textos' },
    { num: '12', func: criarFormularioAula12, titulo: 'Correcao Gramatical' },
    { num: '13', func: criarFormularioAula13, titulo: 'Formatacao de Documentos' },
    { num: '14', func: criarFormularioAula14, titulo: 'Redacao de E-mails' },
    { num: '15', func: criarFormularioAula15, titulo: 'Relatorios Tecnicos' },
    { num: '16', func: criarFormularioAula16, titulo: 'Memorandos e Comunicacoes' },
    { num: '17', func: criarFormularioAula17, titulo: 'Procedimentos e Instrucoes' },
    { num: '18', func: criarFormularioAula18, titulo: 'Plataformas Digitais' },
    { num: '19', func: criarFormularioAula19, titulo: 'Seguranca da Informacao' },
    { num: '20', func: criarFormularioAula20, titulo: 'Etiqueta Digital' },
    { num: '21', func: criarFormularioAula21, titulo: 'Trabalho Remoto' },
    { num: '22', func: criarFormularioAula22, titulo: 'Linguagem Corporal' },
    { num: '23', func: criarFormularioAula23, titulo: 'Gestual e Tom de Voz' },
    { num: '24', func: criarFormularioAula24, titulo: 'Projeto Capstone' },
    { num: '25', func: criarFormularioAula25, titulo: 'Avaliacao Final' }
  ];

  aulas.forEach(function(aula) {
    try {
      aula.func();
      Logger.log('[' + aula.num + '/26] ✅ Aula ' + aula.num + ': ' + aula.titulo);
      links.push({
        numero: aula.num,
        titulo: aula.titulo,
        status: 'OK'
      });
    } catch (e) {
      erros.push({
        numero: aula.num,
        titulo: aula.titulo,
        mensagem: e.message,
        stack: e.stack
      });
      Logger.log('[' + aula.num + '/26] ❌ Aula ' + aula.num + ': ERRO');
      Logger.log('    Detalhes: ' + e.message);
    }
  });

  // Revisao
  try {
    criarQuizRevisao();
    Logger.log('[26/26] ✅ Revisao Integrada (Aulas 1-9)');
    links.push({
      numero: '26',
      titulo: 'Revisao Integrada',
      status: 'OK'
    });
  } catch (e) {
    erros.push({
      numero: '26',
      titulo: 'Revisao Integrada',
      mensagem: e.message,
      stack: e.stack
    });
    Logger.log('[26/26] ❌ Revisao Integrada: ERRO');
    Logger.log('    Detalhes: ' + e.message);
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
  Logger.log('Taxa de sucesso: ' + Math.round((links.length / 26) * 100) + '%');
  Logger.log('');

  if (erros.length > 0) {
    Logger.log('⚠️  ERROS DETECTADOS (' + erros.length + '):');
    Logger.log('');
    erros.forEach(function(erro) {
      Logger.log('❌ Aula ' + erro.numero + ': ' + erro.titulo);
      Logger.log('   Mensagem: ' + erro.mensagem);
      if (erro.stack) {
        Logger.log('   Stack: ' + erro.stack.substring(0, 100) + '...');
      }
      Logger.log('');
    });
  } else {
    Logger.log('✅ SUCESSO! Nenhum erro detectado.');
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

  return {
    total: 26,
    criados: links.length,
    erros: erros.length,
    tempo: tempo,
    detalhes: {
      sucesso: links,
      falhas: erros
    }
  };
}

// ============================================================
// FUNCAO DE TESTE: Testar uma aula especifica
// ============================================================

function testarOrchestradorSimples() {
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('TESTE DO ORQUESTRADOR');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('');
  Logger.log('Testando criacao de uma aula exemplo...');
  Logger.log('');

  try {
    Logger.log('⏳ Iniciando teste com Aula 01...');
    criarFormularioAula01();
    Logger.log('✅ SUCESSO! Aula 01 criada com sucesso.');
    Logger.log('');
    Logger.log('O orquestrador esta funcionando corretamente!');
    Logger.log('');
    Logger.log('Proximas etapas:');
    Logger.log('1. Execute: criarTodosOsFormularios()');
    Logger.log('2. Aguarde 5-10 minutos');
    Logger.log('3. Verifique o Google Drive para os 26 formularios');
    Logger.log('');
    return true;
  } catch (e) {
    Logger.log('❌ ERRO ao criar Aula 01!');
    Logger.log('');
    Logger.log('Mensagem de erro: ' + e.message);
    Logger.log('Stack trace: ' + e.stack);
    Logger.log('');
    Logger.log('Por favor, verifique:');
    Logger.log('1. Se o arquivo FORM_AULA_01.gs existe');
    Logger.log('2. Se a funcao criarFormularioAula01() esta definida');
    Logger.log('3. As permissoes do Google Drive');
    Logger.log('');
    return false;
  }
}
