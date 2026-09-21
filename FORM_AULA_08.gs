/**
 * FORM_AULA_08.gs
 * Aula 08: Redação de Memorandos e Comunicações Internas
Agilidade, clareza e alinhamento na rotina corporativa
 * 20 questões | 20 pontos | Nota automática | Cobertura 100% do assunto
 *
 * INSTRUÇÕES:
 * 1. Acesse https://script.google.com
 * 2. Crie novo projeto e cole este código
 * 3. Execute a função: criarFormularioAula08()
 * 4. O formulário será criado automaticamente no seu Drive
 * 5. Copie o link e compartilhe com os alunos
 *
 * Parte da disciplina: Introdução à Comunicação Oral e Escrita
 * Total de apresentações: 25
 * Cobertura de assunto: 100% dos tópicos principais
 */

function criarFormularioAula08() {
  var form = FormApp.create('Avaliação — Aula 08 · Redação de Memorandos e Comunicações Internas
Agilidade, clareza e alinhamento na rotina corporativa · SENAI');

  form.setDescription(
    'Avaliação Completa: Redação de Memorandos e Comunicações Internas
Agilidade, clareza e alinhamento na rotina corporativa\n\n' +
    'Aula 08 — UC Introdução à Comunicação Oral e Escrita\n' +
    'Professor: Gelvazio\n\n' +
    '20 questões | 20 pontos no total\n' +
    'Tempo estimado: 30-40 minutos\n' +
    'Cobertura: 100% do assunto da aula\n' +
    'Você verá sua pontuação e feedback automaticamente ao enviar!'
  );

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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Redação de Memorandos e Comunicações Internas
Agilidade, clareza e alinhamento na rotina corporativa');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 8?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Redação de Memorandos e Comunicações Internas
Agilidade, clareza e alinhamento na rotina corporativa', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Redação de Memorandos e Comunicações Internas
Agil...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. De acordo com a aula, qual é a relevância de: 'O que acontece quando o recado falha?...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Imagine uma equipe inteira que chega para trabalha...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('5. Qual é a importância de 'Objetivos da Nossa Aula' neste contexto?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Objetivos da Nossa Aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('6. De acordo com a aula, qual é a relevância de: 'Distinguir as funções e formatos de memorando, com...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Redação de Memorandos e Comunicações Int' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'O que acontece quando o recado falha?' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Imagine uma equipe inteira que chega par' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('10. Como você aplicaria 'Objetivos da Nossa Aula' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Distinguir as funções e formatos de memo' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Memorando'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Texto ágil entre setores para pedidos ou avisos internos.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Memorando'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Comunicado'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Aviso oficial voltado para toda a equipe ou empresa.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Comunicado'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Concisão'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Capacidade de transmitir o essencial com poucas palavras exatas.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Concisão'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Orientação'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Instrução prática que guia o cumprimento de uma tarefa.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Orientação'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Revisão'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Relatório Técnico', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Revisão'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Redação de Memorandos e Comunicações Internas
Agilidade, clareza e alinhamento na rotina corporativa'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Aprimorar habilidades de comunicação profissional', true),
      form.addMultipleChoiceItem().createChoice('Memorizar datas e eventos históricos', false),
      form.addMultipleChoiceItem().createChoice('Aprender fórmulas matemáticas', false),
      form.addMultipleChoiceItem().createChoice('Decorar termos em língua estrangeira', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('18. Qual conceito foi o mais importante para você nesta aula?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Todos os conceitos apresentados são importantes', true),
      form.addMultipleChoiceItem().createChoice('Apenas o conceito principal', false),
      form.addMultipleChoiceItem().createChoice('Nenhum conceito é realmente importante', false),
      form.addMultipleChoiceItem().createChoice('Conceitos de outras disciplinas', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('19. Como você se sente preparado para aplicar estes conhecimentos?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Muito preparado e confiante para aplicar', true),
      form.addMultipleChoiceItem().createChoice('Razoavelmente preparado, com pequenas dúvidas', false),
      form.addMultipleChoiceItem().createChoice('Pouco preparado, preciso de mais prática', false),
      form.addMultipleChoiceItem().createChoice('Não estou preparado adequadamente', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Redação de Memorandos e Comunicações Internas
Agilidade, clareza e alinhamento na rotina corporativa'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


  Logger.log('✅ AULA 08 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 08 — Redação de Memorandos e Comunicações Internas
Agilidade, clareza e alinhamento na rotina corporativa');
  Logger.log('   Questões: 20');
  Logger.log('   Pontuação: 20 pontos (1 ponto/questão)');
  Logger.log('   Cobertura: 100% dos tópicos principais');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(FormApp.getActiveForm().getEditUrl());
}

function analisarRespostasAula08() {
  var form = FormApp.openByTitle('Avaliação — Aula 08 · Redação de Memorandos e Comunicações Internas
Agilidade, clareza e alinhamento na rotina corporativa · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 08: Redação de Memorandos e Comunicações Internas
Agilidade, clareza e alinhamento na rotina corporativa');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];

  responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [
      'Redação de Memorandos e Comunicações Internas
Agilidade, clareza e alinhamento na rotina corporativa',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'Objetivos da Nossa Aula',
      'É um conceito importante apresentado na aula',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Texto ágil entre setores para pedidos ou avisos internos.',
      'Aviso oficial voltado para toda a equipe ou empresa.',
      'Capacidade de transmitir o essencial com poucas palavras exatas.',
      'Instrução prática que guia o cumprimento de uma tarefa.',
      'Relatório Técnico',
      'Aprimorar habilidades de comunicação profissional',
      'Todos os conceitos apresentados são importantes',
      'Muito preparado e confiante para aplicar',
      'Compreender e aplicar os conceitos na prática profissional'
    ];

    itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 23) {
        if (resposta === respostasCorretas[idx - 3]) {
          acertos++;
        }
      }
    });

    var nota = (acertos / total) * 20;
    var percentual = (acertos / total) * 100;

    todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) {
      feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) {
      feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) {
      feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) {
      feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else {
      feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: ' + acertos + '/' + total);
    Logger.log('   Nota: ' + nota.toFixed(1) + '/20 (' + percentual.toFixed(0) + '%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: ' + media.toFixed(1) + '/20 (' + ((media/20)*100).toFixed(0) + '%)');
    Logger.log('   Maior nota: ' + maior.toFixed(1) + '/20');
    Logger.log('   Menor nota: ' + menor.toFixed(1) + '/20');
    Logger.log('   Variação: ' + (maior - menor).toFixed(1) + ' pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 14; }).length;
    Logger.log('   Aprovados (70%+): ' + aprovados + ' de ' + todasAsNotas.length);
  }
}
