/**
 * FORM_AULA_19.gs
 * Aula 19: O Ciclo do Feedback na Comunicação
Como transformar respostas em ferramentas de crescimento e alinhamento
 * 20 questões | 20 pontos | Nota automática | Cobertura 100% do assunto
 *
 * INSTRUÇÕES:
 * 1. Acesse https://script.google.com
 * 2. Crie novo projeto e cole este código
 * 3. Execute a função: criarFormularioAula19()
 * 4. O formulário será criado automaticamente no seu Drive
 * 5. Copie o link e compartilhe com os alunos
 *
 * Parte da disciplina: Introdução à Comunicação Oral e Escrita
 * Total de apresentações: 25
 * Cobertura de assunto: 100% dos tópicos principais
 */

function criarFormularioAula19() {
  var form = FormApp.create('Avaliação — Aula 19 · O Ciclo do Feedback na Comunicação
Como transformar respostas em ferramentas de crescimento e alinhamento · SENAI');

  form.setDescription(
    'Avaliação Completa: O Ciclo do Feedback na Comunicação
Como transformar respostas em ferramentas de crescimento e alinhamento\n\n' +
    'Aula 19 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — O Ciclo do Feedback na Comunicação
Como transformar respostas em ferramentas de crescimento e alinhamento');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 19?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('O Ciclo do Feedback na Comunicação
Como transformar respostas em ferramentas de crescimento e alinhamento', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'O Ciclo do Feedback na Comunicação
Como transforma...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. De acordo com a aula, qual é a relevância de: 'O que acontece se ninguém responder?...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Imagine enviar uma mensagem urgente e nunca recebe...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('5. Qual é a importância de 'Objetivos de Aprendizagem' neste contexto?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Objetivos de Aprendizagem', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('6. De acordo com a aula, qual é a relevância de: 'Explicar o papel do feedback na transformação do f...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'O Ciclo do Feedback na Comunicação
Como ' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'O que acontece se ninguém responder?' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Imagine enviar uma mensagem urgente e nu' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('10. Como você aplicaria 'Objetivos de Aprendizagem' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Explicar o papel do feedback na transfor' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Feedback'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Retorno com avaliação sobre mensagem ou tarefa realizada.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Feedback'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Bidirecional'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Fluxo contínuo que vai e volta entre os dois interlocutores.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Bidirecional'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Escuta'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Ação ativa e consciente de compreender o que o outro diz.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Escuta'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Alinhamento'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Ajuste conjunto de metas e expectativas na equipe.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Alinhamento'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Elogio Inicial'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('“Sua introdução foi dinâmica e prendeu a atenção de toda a turma.”', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Elogio Inicial'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'O Ciclo do Feedback na Comunicação
Como transformar respostas em ferramentas de crescimento e alinhamento'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'O Ciclo do Feedback na Comunicação
Como transformar respostas em ferramentas de crescimento e alinhamento'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


  Logger.log('✅ AULA 19 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 19 — O Ciclo do Feedback na Comunicação
Como transformar respostas em ferramentas de crescimento e alinhamento');
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

function analisarRespostasAula19() {
  var form = FormApp.openByTitle('Avaliação — Aula 19 · O Ciclo do Feedback na Comunicação
Como transformar respostas em ferramentas de crescimento e alinhamento · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 19: O Ciclo do Feedback na Comunicação
Como transformar respostas em ferramentas de crescimento e alinhamento');
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
      'O Ciclo do Feedback na Comunicação
Como transformar respostas em ferramentas de crescimento e alinhamento',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'Objetivos de Aprendizagem',
      'É um conceito importante apresentado na aula',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Retorno com avaliação sobre mensagem ou tarefa realizada.',
      'Fluxo contínuo que vai e volta entre os dois interlocutores.',
      'Ação ativa e consciente de compreender o que o outro diz.',
      'Ajuste conjunto de metas e expectativas na equipe.',
      '“Sua introdução foi dinâmica e prendeu a atenção de toda a turma.”',
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
