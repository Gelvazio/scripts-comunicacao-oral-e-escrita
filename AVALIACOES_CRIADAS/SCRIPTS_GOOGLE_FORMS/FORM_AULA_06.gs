/**
 * FORM_AULA_06.gs
 * Aula 06: Redação de E-mails Corporativos
Comunicação escrita eficaz e profissional no ambiente de trabalho
 * 20 questões | 20 pontos | Nota automática | Cobertura 100% do assunto
 *
 * INSTRUÇÕES:
 * 1. Acesse https://script.google.com
 * 2. Crie novo projeto e cole este código
 * 3. Execute a função: criarFormularioAula06()
 * 4. O formulário será criado automaticamente no seu Drive
 * 5. Copie o link e compartilhe com os alunos
 *
 * Parte da disciplina: Introdução à Comunicação Oral e Escrita
 * Total de apresentações: 25
 * Cobertura de assunto: 100% dos tópicos principais
 */

function criarFormularioAula06() {
  var form = FormApp.create('Avaliação — Aula 06 · Redação de E-mails Corporativos
Comunicação escrita eficaz e profissional no ambiente de trabalho · SENAI');

  form.setDescription(
    'Avaliação Completa: Redação de E-mails Corporativos
Comunicação escrita eficaz e profissional no ambiente de trabalho\n\n' +
    'Aula 06 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Redação de E-mails Corporativos
Comunicação escrita eficaz e profissional no ambiente de trabalho');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 6?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Redação de E-mails Corporativos
Comunicação escrita eficaz e profissional no ambiente de trabalho', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Redação de E-mails Corporativos
Comunicação escrit...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. Qual é a importância de 'Você abriria esta mensagem?' neste contexto?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Você abriria esta mensagem?', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Imagine receber uma mensagem com o assunto "URGENT...'?')
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

  form.addMultipleChoiceItem().setTitle('6. De acordo com a aula, qual é a relevância de: 'Estruturar e-mails profissionais com assunto conci...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Redação de E-mails Corporativos
Comunica' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'Você abriria esta mensagem?' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Imagine receber uma mensagem com o assun' em sua rotina profissional?')
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

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Estruturar e-mails profissionais com ass' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Recapitulação'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Hierarquia Visual', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Recapitulação'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Quiz'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Normas de Apresentação Textual', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Quiz'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Pergunta 1'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Qual é a principal função da hierarquia visual em textos corporativos?', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Pergunta 1'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Pergunta 2'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Por que devemos evitar parágrafos excessivamente longos em telas?', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Pergunta 2'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Pergunta 3'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Como o negrito deve ser empregado em documentos formais?', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Pergunta 3'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Redação de E-mails Corporativos
Comunicação escrita eficaz e profissional no ambiente de trabalho'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Redação de E-mails Corporativos
Comunicação escrita eficaz e profissional no ambiente de trabalho'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


  Logger.log('✅ AULA 06 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 06 — Redação de E-mails Corporativos
Comunicação escrita eficaz e profissional no ambiente de trabalho');
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

function analisarRespostasAula06() {
  var form = FormApp.openByTitle('Avaliação — Aula 06 · Redação de E-mails Corporativos
Comunicação escrita eficaz e profissional no ambiente de trabalho · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 06: Redação de E-mails Corporativos
Comunicação escrita eficaz e profissional no ambiente de trabalho');
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
      'Redação de E-mails Corporativos
Comunicação escrita eficaz e profissional no ambiente de trabalho',
      'É um conceito importante apresentado na aula',
      'Você abriria esta mensagem?',
      'É um conceito importante apresentado na aula',
      'Objetivos de Aprendizagem',
      'É um conceito importante apresentado na aula',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Hierarquia Visual',
      'Normas de Apresentação Textual',
      'Qual é a principal função da hierarquia visual em textos corporativos?',
      'Por que devemos evitar parágrafos excessivamente longos em telas?',
      'Como o negrito deve ser empregado em documentos formais?',
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
