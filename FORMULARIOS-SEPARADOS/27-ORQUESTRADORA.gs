// ===== 27-ORQUESTRADORA.gs =====
// Funcoes: criarTodosFormularios(), ExecutarCriarTodosFormularios()
// Extraido de FORMULARIO-PRINCIPAL.gs
// Chama sequencialmente todas as 25 funcoes criarFormularioAulaXX() + criarQuizRevisao()

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
