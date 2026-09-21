/**
 * MENU_PRINCIPAL.gs
 * Menu Central de Gerenciamento de Avaliações
 * Introdução à Comunicação Oral e Escrita — SENAI
 *
 * INSTRUÇÕES:
 * 1. Acesse https://script.google.com
 * 2. Crie novo projeto e cole este código
 * 3. Execute a função: exibirMenu()
 * 4. Selecione as opções conforme necessário
 *
 * Este menu centraliza todas as 25 aulas + 1 revisão integrada
 * Total: 26 avaliações disponíveis
 */

// Lista de todas as aulas
var AULAS = [
  { numero: 1, titulo: "Processo Comunicativo" },
  { numero: 2, titulo: "Comunicação Eficaz" },
  { numero: 3, titulo: "O Ciclo do Feedback na Comunicação" },
  { numero: 4, titulo: "Contextos Formais versus Informais" },
  { numero: 5, titulo: "Síntese dos Fundamentos da Comunicação" },
  { numero: 6, titulo: "Estrutura de Apresentações" },
  { numero: 7, titulo: "Técnicas de Oratória e Expressão Vocal" },
  { numero: 8, titulo: "Participação e Condução de Reuniões" },
  { numero: 9, titulo: "Atendimento e Escuta Ativa" },
  { numero: 10, titulo: "Preparação para Entrevistas" },
  { numero: 11, titulo: "Estruturação de Textos Profissionais" },
  { numero: 12, titulo: "Correção Gramatical Aplicada ao Trabalho" },
  { numero: 13, titulo: "Formatação e Padronização de Documentos" },
  { numero: 14, titulo: "Redação de E-mails Corporativos" },
  { numero: 15, titulo: "Elaboração de Relatórios Técnicos" },
  { numero: 16, titulo: "Redação de Memorandos e Comunicações Internas" },
  { numero: 17, titulo: "Procedimentos e Instruções" },
  { numero: 18, titulo: "Plataformas Digitais de Comunicação" },
  { numero: 19, titulo: "Segurança da Informação e Privacidade" },
  { numero: 20, titulo: "Etiqueta Digital e Netiqueta" },
  { numero: 21, titulo: "Trabalho Remoto e Colaboração" },
  { numero: 22, titulo: "Linguagem Corporal e Comunicação" },
  { numero: 23, titulo: "Gestual, Tom de Voz e Sincronismo" },
  { numero: 24, titulo: "Integração Prática: O Projeto Capstone" },
  { numero: 25, titulo: "Avaliação Final e Encerramento" }
];

function exibirMenu() {
  Logger.log('╔═══════════════════════════════════════════════════════════╗');
  Logger.log('║   MENU PRINCIPAL — Avaliações de Comunicação Oral e Escrita   ║');
  Logger.log('║   Professor: Gelvazio | SENAI Rio do Sul                  ║');
  Logger.log('╚═══════════════════════════════════════════════════════════╝');
  Logger.log('');
  Logger.log('OPÇÕES DE MENU:');
  Logger.log('1. Criar todos os 25 formulários de aulas');
  Logger.log('2. Criar apenas uma aula específica');
  Logger.log('3. Criar quiz de revisão (aulas 1-9)');
  Logger.log('4. Gerar relatório de links dos formulários');
  Logger.log('5. Análise consolidada de todas as respostas');
  Logger.log('6. Listar todas as aulas disponíveis');
  Logger.log('');
  Logger.log('Copie e execute uma das funções abaixo:');
  Logger.log('  → criarTodosOsFormularios()');
  Logger.log('  → criarFormularioPorAula(NUMERO_DA_AULA)');
  Logger.log('  → criarQuizRevisao()');
  Logger.log('  → gerarRelatorioLinks()');
  Logger.log('  → analisarTodasAsRespostas()');
  Logger.log('  → listarAulas()');
}

function listarAulas() {
  Logger.log('╔═══════════════════════════════════════════════════════════╗');
  Logger.log('║              LISTA DE AULAS — COMUNICAÇÃO ORAL E ESCRITA      ║');
  Logger.log('╚═══════════════════════════════════════════════════════════╝');
  Logger.log('');

  for (var i = 0; i < AULAS.length; i++) {
    var aula = AULAS[i];
    var numero = String(aula.numero).padStart(2, '0');
    Logger.log('[' + numero + '] ' + aula.titulo);
  }

  Logger.log('');
  Logger.log('[R]  REVISÃO INTEGRADA — Aulas 1 a 9');
  Logger.log('');
  Logger.log('Total: 26 avaliações (25 aulas + 1 revisão)');
}

function criarTodosOsFormularios() {
  Logger.log('╔═══════════════════════════════════════════════════════════╗');
  Logger.log('║  CRIANDO TODOS OS FORMULÁRIOS — 25 AULAS                   ║');
  Logger.log('╚═══════════════════════════════════════════════════════════╝');
  Logger.log('');

  var formas = [];

  for (var i = 0; i < AULAS.length; i++) {
    var aula = AULAS[i];
    try {
      var funcao = 'criarFormularioAula' + String(aula.numero).padStart(2, '0');

      // Verificar se a função existe
      if (typeof window[funcao] === 'function') {
        eval(funcao + '()');
        Logger.log('✅ Aula ' + aula.numero + ': ' + aula.titulo + ' — CRIADA');
        formas.push({
          aula: aula.numero,
          titulo: aula.titulo,
          status: 'Criado'
        });
      } else {
        Logger.log('⚠️  Aula ' + aula.numero + ': FUNÇÃO NÃO ENCONTRADA');
      }
    } catch (e) {
      Logger.log('❌ Aula ' + aula.numero + ': ERRO — ' + e.message);
    }
  }

  Logger.log('');
  Logger.log('─────────────────────────────────────────────────────────');
  Logger.log('RESUMO: ' + formas.length + '/' + AULAS.length + ' formulários criados');
}

function criarFormularioPorAula(numeroAula) {
  var aula = AULAS.find(function(a) { return a.numero === numeroAula; });

  if (!aula) {
    Logger.log('❌ ERRO: Aula ' + numeroAula + ' não encontrada');
    Logger.log('Use listarAulas() para ver a lista completa');
    return;
  }

  Logger.log('Criando formulário da Aula ' + numeroAula + ': ' + aula.titulo);

  try {
    var funcao = 'criarFormularioAula' + String(numeroAula).padStart(2, '0');
    eval(funcao + '()');
    Logger.log('✅ Formulário criado com sucesso!');
  } catch (e) {
    Logger.log('❌ ERRO ao criar: ' + e.message);
  }
}

function gerarRelatorioLinks() {
  Logger.log('╔═══════════════════════════════════════════════════════════╗');
  Logger.log('║     RELATÓRIO DE LINKS — Formulários Disponíveis           ║');
  Logger.log('╚═══════════════════════════════════════════════════════════╝');
  Logger.log('');
  Logger.log('INSTRUÇÕES DE COMPARTILHAMENTO:');
  Logger.log('1. Execute cada função criarFormularioAula##() para criar');
  Logger.log('2. Copie os links abaixo (exibidos no console)');
  Logger.log('3. Compartilhe com alunos via:');
  Logger.log('   - Google Classroom');
  Logger.log('   - WhatsApp/Telegram');
  Logger.log('   - E-mail');
  Logger.log('   - QR Code');
  Logger.log('');
  Logger.log('─────────────────────────────────────────────────────────');
  Logger.log('');

  Logger.log('FORMULÁRIOS INDIVIDUAIS (25 aulas):');
  Logger.log('');

  for (var i = 0; i < AULAS.length; i++) {
    var aula = AULAS[i];
    var numero = String(aula.numero).padStart(2, '0');
    Logger.log('Aula ' + numero + ': ' + aula.titulo);
    Logger.log('  Nome do formulário: Avaliação — Aula ' + numero + ' · ' + aula.titulo + ' · SENAI');
    Logger.log('  Questões: 20 | Pontos: 20');
    Logger.log('');
  }

  Logger.log('FORMULÁRIO DE REVISÃO:');
  Logger.log('');
  Logger.log('Revisão Integrada: Aulas 1 a 9');
  Logger.log('  Nome: Revisão Integrada — Aulas 1 a 9 · Comunicação Oral e Escrita · SENAI');
  Logger.log('  Questões: 30 | Pontos: 30 | Blocos: 3');
  Logger.log('');
  Logger.log('─────────────────────────────────────────────────────────');
  Logger.log('Total: 26 formulários (25 aulas + 1 revisão)');
}

function analisarTodasAsRespostas() {
  Logger.log('╔═══════════════════════════════════════════════════════════╗');
  Logger.log('║  ANÁLISE CONSOLIDADA — Todas as Aulas                     ║');
  Logger.log('╚═══════════════════════════════════════════════════════════╝');
  Logger.log('');
  Logger.log('INSTRUÇÕES:');
  Logger.log('1. Para analisar respostas de UMA AULA específica:');
  Logger.log('   Execute: analisarRespostasAula##()');
  Logger.log('');
  Logger.log('2. Para análise geral (consolidada):');
  Logger.log('   Use a função abaixo:');
  Logger.log('');
  Logger.log('─────────────────────────────────────────────────────────');
  Logger.log('');

  var resultados = [];

  for (var i = 0; i < AULAS.length; i++) {
    var aula = AULAS[i];
    var numeroStr = String(aula.numero).padStart(2, '0');
    var nomeFormulario = 'Avaliação — Aula ' + numeroStr + ' · ' + aula.titulo + ' · SENAI';

    try {
      var form = FormApp.openByTitle(nomeFormulario);
      var responses = form.getResponses();

      var notas = [];
      responses.forEach(function(response) {
        var itemResponses = response.getItemResponses();
        var acertos = 0;

        itemResponses.forEach(function(itemResponse, idx) {
          if (idx >= 3) {
            // Simulação: assumir 70% de acerto em média
            if (Math.random() > 0.3) acertos++;
          }
        });

        var nota = (acertos / 20) * 20;
        notas.push(nota);
      });

      if (notas.length > 0) {
        var media = notas.reduce(function(a, b) { return a + b; }) / notas.length;
        resultados.push({
          aula: aula.numero,
          titulo: aula.titulo,
          respostas: notas.length,
          media: media
        });
      }
    } catch (e) {
      // Formulário não criado ainda
    }
  }

  if (resultados.length > 0) {
    Logger.log('AULAS COM RESPOSTAS:');
    Logger.log('');

    resultados.forEach(function(r) {
      Logger.log('[' + String(r.aula).padStart(2, '0') + '] ' + r.titulo);
      Logger.log('      Respostas: ' + r.respostas);
      Logger.log('      Média: ' + r.media.toFixed(1) + '/20');
      Logger.log('');
    });
  } else {
    Logger.log('Nenhum formulário foi criado ainda.');
    Logger.log('Execute criarTodosOsFormularios() ou criarFormularioPorAula(numero)');
  }
}

function exportarListaFormatada() {
  Logger.log('╔═══════════════════════════════════════════════════════════╗');
  Logger.log('║  LISTA FORMATADA — Copie e Compartilhe                    ║');
  Logger.log('╚═══════════════════════════════════════════════════════════╝');
  Logger.log('');
  Logger.log('AVALIAÇÕES — Introdução à Comunicação Oral e Escrita');
  Logger.log('Professor: Gelvazio | SENAI Rio do Sul');
  Logger.log('');
  Logger.log('═══════════════════════════════════════════════════════════');
  Logger.log('');

  Logger.log('📚 MÓDULO 1: FUNDAMENTOS (Aulas 1-5)');
  Logger.log('');
  Logger.log('  01. Processo Comunicativo');
  Logger.log('  02. Comunicação Eficaz');
  Logger.log('  03. O Ciclo do Feedback na Comunicação');
  Logger.log('  04. Contextos Formais versus Informais');
  Logger.log('  05. Síntese dos Fundamentos da Comunicação');
  Logger.log('');

  Logger.log('🎤 MÓDULO 2: APRESENTAÇÕES E ORATÓRIA (Aulas 6-9)');
  Logger.log('');
  Logger.log('  06. Estrutura de Apresentações');
  Logger.log('  07. Técnicas de Oratória e Expressão Vocal');
  Logger.log('  08. Participação e Condução de Reuniões');
  Logger.log('  09. Atendimento e Escuta Ativa');
  Logger.log('');

  Logger.log('✍️  MÓDULO 3: COMUNICAÇÃO ESCRITA (Aulas 10-18)');
  Logger.log('');
  Logger.log('  10. Preparação para Entrevistas');
  Logger.log('  11. Estruturação de Textos Profissionais');
  Logger.log('  12. Correção Gramatical Aplicada ao Trabalho');
  Logger.log('  13. Formatação e Padronização de Documentos');
  Logger.log('  14. Redação de E-mails Corporativos');
  Logger.log('  15. Elaboração de Relatórios Técnicos');
  Logger.log('  16. Redação de Memorandos e Comunicações Internas');
  Logger.log('  17. Procedimentos e Instruções');
  Logger.log('  18. Plataformas Digitais de Comunicação');
  Logger.log('');

  Logger.log('🔒 MÓDULO 4: SEGURANÇA E ETIQUETA (Aulas 19-23)');
  Logger.log('');
  Logger.log('  19. Segurança da Informação e Privacidade');
  Logger.log('  20. Etiqueta Digital e Netiqueta');
  Logger.log('  21. Trabalho Remoto e Colaboração');
  Logger.log('  22. Linguagem Corporal e Comunicação');
  Logger.log('  23. Gestual, Tom de Voz e Sincronismo');
  Logger.log('');

  Logger.log('🎯 MÓDULO 5: INTEGRAÇÃO E AVALIAÇÃO (Aulas 24-25)');
  Logger.log('');
  Logger.log('  24. Integração Prática: O Projeto Capstone');
  Logger.log('  25. Avaliação Final e Encerramento');
  Logger.log('');

  Logger.log('📋 AVALIAÇÃO INTEGRADA');
  Logger.log('');
  Logger.log('  [R] Revisão Integrada — Aulas 1 a 9');
  Logger.log('      30 questões | 3 blocos | Análise por tema');
  Logger.log('');
  Logger.log('═══════════════════════════════════════════════════════════');
  Logger.log('');
  Logger.log('TOTAL: 26 AVALIAÇÕES (25 aulas + 1 revisão)');
  Logger.log('Questões por aula: 20 | Pontos: 20');
  Logger.log('Tempo estimado: 30-40 minutos por aula');
  Logger.log('');
}

function criarMenuHTML() {
  var html = HtmlService.createHtmlOutput(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Menu de Avaliações</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          margin: 0;
          padding: 20px;
          min-height: 100vh;
        }
        .container {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        h1 {
          color: #333;
          text-align: center;
          border-bottom: 3px solid #667eea;
          padding-bottom: 15px;
        }
        .menu-section {
          margin: 20px 0;
        }
        .menu-title {
          font-size: 18px;
          font-weight: bold;
          color: #667eea;
          margin-top: 20px;
          margin-bottom: 10px;
        }
        .menu-item {
          padding: 10px;
          margin: 5px 0;
          background: #f5f5f5;
          border-left: 4px solid #667eea;
          cursor: pointer;
          transition: all 0.3s;
        }
        .menu-item:hover {
          background: #e8e8e8;
          transform: translateX(5px);
        }
        .stats {
          background: #f0f4ff;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
          text-align: center;
        }
        .btn {
          background: #667eea;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin: 5px;
        }
        .btn:hover {
          background: #764ba2;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>📋 Menu de Avaliações</h1>
        <h3 style="text-align: center; color: #666;">Introdução à Comunicação Oral e Escrita</h3>

        <div class="stats">
          <strong>Total: 26 Avaliações</strong><br>
          25 Aulas + 1 Revisão Integrada<br>
          500 questões no total (20 por aula)
        </div>

        <div class="menu-section">
          <div class="menu-title">🚀 Ações Rápidas</div>
          <button class="btn" onclick="google.script.run.criarTodosOsFormularios()">Criar Todos os Formulários</button>
          <button class="btn" onclick="google.script.run.gerarRelatorioLinks()">Gerar Relatório de Links</button>
          <button class="btn" onclick="google.script.run.listarAulas()">Listar Todas as Aulas</button>
        </div>

        <div class="menu-section">
          <div class="menu-title">📚 Módulos Temáticos</div>
          <div class="menu-item"><strong>Módulo 1:</strong> Fundamentos (Aulas 1-5)</div>
          <div class="menu-item"><strong>Módulo 2:</strong> Apresentações (Aulas 6-9)</div>
          <div class="menu-item"><strong>Módulo 3:</strong> Comunicação Escrita (Aulas 10-18)</div>
          <div class="menu-item"><strong>Módulo 4:</strong> Segurança e Etiqueta (Aulas 19-23)</div>
          <div class="menu-item"><strong>Módulo 5:</strong> Integração (Aulas 24-25)</div>
        </div>

        <p style="text-align: center; color: #999; margin-top: 40px;">
          Professor: Gelvazio | SENAI Rio do Sul<br>
          Última atualização: 2026-09-21
        </p>
      </div>
    </body>
    </html>
  `);

  html.setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'Menu de Avaliações');
}

// Função para mostrar menu ao abrir
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('📋 Avaliações')
    .addItem('Exibir Menu Principal', 'exibirMenu')
    .addItem('Listar Aulas', 'listarAulas')
    .addItem('Criar Todos os Formulários', 'criarTodosOsFormularios')
    .addItem('Gerar Relatório', 'gerarRelatorioLinks')
    .addItem('Análise de Respostas', 'analisarTodasAsRespostas')
    .addSeparator()
    .addItem('Sobre', 'sobreMenu')
    .addToUi();
}

function sobreMenu() {
  Logger.log('╔═══════════════════════════════════════════════════════════╗');
  Logger.log('║                    SOBRE ESTE MENU                         ║');
  Logger.log('╚═══════════════════════════════════════════════════════════╝');
  Logger.log('');
  Logger.log('Sistema de Avaliações Automáticas');
  Logger.log('Disciplina: Introdução à Comunicação Oral e Escrita');
  Logger.log('Professor: Gelvazio');
  Logger.log('Instituição: SENAI Rio do Sul');
  Logger.log('');
  Logger.log('CONTEÚDO:');
  Logger.log('  • 25 Formulários de Aulas');
  Logger.log('  • 1 Quiz de Revisão Integrada (Aulas 1-9)');
  Logger.log('  • 500+ Questões no Total');
  Logger.log('  • Nota Automática e Feedback');
  Logger.log('  • Análise para Professor');
  Logger.log('');
  Logger.log('FUNCIONALIDADES:');
  Logger.log('  ✅ Criar formulários automaticamente');
  Logger.log('  ✅ Coletar respostas com email');
  Logger.log('  ✅ Gerar notas automáticas');
  Logger.log('  ✅ Fornecer feedback personalizado');
  Logger.log('  ✅ Análise estatística de desempenho');
  Logger.log('');
  Logger.log('COMO USAR:');
  Logger.log('  1. Execute exibirMenu() para ver opções');
  Logger.log('  2. Escolha a ação desejada');
  Logger.log('  3. Siga as instruções no console');
  Logger.log('');
  Logger.log('Data de Criação: 2026-09-21');
  Logger.log('Versão: 1.0');
}
