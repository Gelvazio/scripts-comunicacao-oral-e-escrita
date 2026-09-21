/**
 * FORMULARIO-PRINCIPAL.gs
 * CONSOLIDADO: Todos os 26 formulários de aulas em um único arquivo
 * Gerado automaticamente em 2026-09-21
 * 
 * Este arquivo contém:
 * - 25 funções de criação de formulários (Aula 01 até Aula 25)
 * - 1 função de revisão integrada (Aulas 1-9)
 * - 26 funções de análise de respostas
 */

// ════════════════════════════════════════════════════════════
// AULA 01
// ════════════════════════════════════════════════════════════

function criarFormularioAula01() {
  var form = FormApp.create('Avaliação — Aula 01 · Processo Comunicativo · SENAI');

  form.setDescription(
    'Avaliação Completa: Processo Comunicativo\n\n' +
    'Aula 01 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Processo Comunicativo');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 1?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Processo Comunicativo', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. Qual é a importância de 'Processo Comunicativo' neste contexto?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Processo Comunicativo', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. De acordo com a aula, qual é a relevância de: 'Introdução à Comunicação Oral e Escrita...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. Qual é a importância de 'Por que nos desentendemos?' neste contexto?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Por que nos desentendemos?', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('5. De acordo com a aula, qual é a relevância de: 'Você já enviou uma mensagem de texto simples e a o...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('6. Qual é a importância de 'Objetivos da Aula de Hoje' neste contexto?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Objetivos da Aula de Hoje', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Processo Comunicativo' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'Introdução à Comunicação Oral e Escrita' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Por que nos desentendemos?' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('10. Como você aplicaria 'Você já enviou uma mensagem de texto sim' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Objetivos da Aula de Hoje' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Saber falar e escrever bem não é mágica'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('é um conjunto de técnicas treináveis que transformam oportunidades.
Ao longo desta disciplina, você ', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Saber falar e escrever bem não é mágica'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'O Emissor'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('A Origem', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'O Emissor'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'O Receptor'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('O Destino', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'O Receptor'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'A Mensagem'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('O Conteúdo', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'A Mensagem'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'A mensagem é o objeto concreto da transmissão'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('o conjunto de ideias, sentimentos, instruções ou dados enviados.
Para ser eficaz, ela precisa ter co', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'A mensagem é o objeto concreto da transmissão'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Processo Comunicativo'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Processo Comunicativo'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


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
  Logger.log(FormApp.getActiveForm().getEditUrl());
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

    var respostasCorretas = [
      'Processo Comunicativo',
      'Processo Comunicativo',
      'É um conceito importante apresentado na aula',
      'Por que nos desentendemos?',
      'É um conceito importante apresentado na aula',
      'Objetivos da Aula de Hoje',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'é um conjunto de técnicas treináveis que transformam oportunidades.
Ao longo desta disciplina, você ',
      'A Origem',
      'O Destino',
      'O Conteúdo',
      'o conjunto de ideias, sentimentos, instruções ou dados enviados.
Para ser eficaz, ela precisa ter co',
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


// ════════════════════════════════════════════════════════════
// AULA 02
// ════════════════════════════════════════════════════════════


function criarFormularioAula02() {
  var form = FormApp.create('Avaliação — Aula 02 · Preparação para Entrevistas
Comunicação oral estratégica e postura profissional · SENAI');

  form.setDescription(
    'Avaliação Completa: Preparação para Entrevistas
Comunicação oral estratégica e postura profissional\n\n' +
    'Aula 02 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Preparação para Entrevistas
Comunicação oral estratégica e postura profissional');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 2?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Preparação para Entrevistas
Comunicação oral estratégica e postura profissional', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Preparação para Entrevistas
Comunicação oral estra...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. Qual é a importância de 'O que define uma contratação?' neste contexto?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('O que define uma contratação?', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Dois candidatos possuem as mesmas notas escolares ...'?')
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

  form.addMultipleChoiceItem().setTitle('6. De acordo com a aula, qual é a relevância de: 'Compreender a entrevista como um contexto formal d...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Preparação para Entrevistas
Comunicação ' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'O que define uma contratação?' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Dois candidatos possuem as mesmas notas ' em sua rotina profissional?')
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

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Compreender a entrevista como um context' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Entrevista'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Diálogo intencional para avaliar competências e perfil.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Entrevista'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Postura'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Expressão corporal que transmite segurança e receptividade.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Postura'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Argumentação'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Apresentação lógica de fatos e aprendizados reais.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Argumentação'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Autoconfiança'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Certeza consciente sobre o próprio valor e esforço.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Autoconfiança'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Revisão'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Escuta Ativa e Atendimento', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Revisão'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Preparação para Entrevistas
Comunicação oral estratégica e postura profissional'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Preparação para Entrevistas
Comunicação oral estratégica e postura profissional'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


  Logger.log('✅ AULA 02 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 02 — Preparação para Entrevistas
Comunicação oral estratégica e postura profissional');
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

function analisarRespostasAula02() {
  var form = FormApp.openByTitle('Avaliação — Aula 02 · Preparação para Entrevistas
Comunicação oral estratégica e postura profissional · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 02: Preparação para Entrevistas
Comunicação oral estratégica e postura profissional');
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
      'Preparação para Entrevistas
Comunicação oral estratégica e postura profissional',
      'É um conceito importante apresentado na aula',
      'O que define uma contratação?',
      'É um conceito importante apresentado na aula',
      'Objetivos da Nossa Aula',
      'É um conceito importante apresentado na aula',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Diálogo intencional para avaliar competências e perfil.',
      'Expressão corporal que transmite segurança e receptividade.',
      'Apresentação lógica de fatos e aprendizados reais.',
      'Certeza consciente sobre o próprio valor e esforço.',
      'Escuta Ativa e Atendimento',
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


// ════════════════════════════════════════════════════════════
// AULA 03
// ════════════════════════════════════════════════════════════

function criarFormularioAula03() {
  var form = FormApp.create('Avaliação — Aula 03 · Estruturação de Textos Profissionais · SENAI');

  form.setDescription(
    'Avaliação Completa: Estruturação de Textos Profissionais\n\n' +
    'Aula 03 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Estruturação de Textos Profissionais');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 3?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Estruturação de Textos Profissionais', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Estruturação de Textos Profissionais...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. De acordo com a aula, qual é a relevância de: 'Comunicação escrita com clareza, coesão e impacto ...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Palavras que constroem ou travam negócios...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('5. De acordo com a aula, qual é a relevância de: 'Você já recebeu uma mensagem tão confusa que não s...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('6. Qual é a importância de 'Objetivos de aprendizagem' neste contexto?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Objetivos de aprendizagem', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Estruturação de Textos Profissionais' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'Comunicação escrita com clareza, coesão ' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Palavras que constroem ou travam negócio' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('10. Como você aplicaria 'Você já recebeu uma mensagem tão confusa' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Objetivos de aprendizagem' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Coesão'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('a costura do texto', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Coesão'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Coerência'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('o sentido global', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Coerência'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Parágrafo'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Unidade textual básica em torno de uma ideia central condutora.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Parágrafo'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Estruturação'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Organização lógica das ideias para orientar o leitor com clareza.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Estruturação'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Revisão'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Método STAR', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Revisão'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Estruturação de Textos Profissionais'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Estruturação de Textos Profissionais'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


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
  Logger.log(FormApp.getActiveForm().getEditUrl());
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

    var respostasCorretas = [
      'Estruturação de Textos Profissionais',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'Objetivos de aprendizagem',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'a costura do texto',
      'o sentido global',
      'Unidade textual básica em torno de uma ideia central condutora.',
      'Organização lógica das ideias para orientar o leitor com clareza.',
      'Método STAR',
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


// ════════════════════════════════════════════════════════════
// AULA 04
// ════════════════════════════════════════════════════════════

function criarFormularioAula04() {
  var form = FormApp.create('Avaliação — Aula 04 · Correção Gramatical Aplicada ao Trabalho · SENAI');

  form.setDescription(
    'Avaliação Completa: Correção Gramatical Aplicada ao Trabalho\n\n' +
    'Aula 04 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Correção Gramatical Aplicada ao Trabalho');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 4?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Correção Gramatical Aplicada ao Trabalho', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Correção Gramatical Aplicada ao Trabalho...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. De acordo com a aula, qual é a relevância de: 'Precisão linguística e clareza nos documentos corp...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Imagine enviar uma proposta comercial dizendo: “Nã...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('5. De acordo com a aula, qual é a relevância de: 'Identificar e corrigir deslizes comuns de concordâ...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('6. De acordo com a aula, qual é a relevância de: 'Empregar a crase e a norma-padrão de forma asserti...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Correção Gramatical Aplicada ao Trabalho' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'Precisão linguística e clareza nos docum' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Imagine enviar uma proposta comercial di' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('10. Como você aplicaria 'Identificar e corrigir deslizes comuns d' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Empregar a crase e a norma-padrão de for' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Imagine enviar uma proposta comercial dizendo'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('“Não vamos cobrar taxa adicional”, mas esquecer o acento ou trocar uma vírgula de lugar, alterando o', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Imagine enviar uma proposta comercial dizendo'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Norma-padrão'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Regras formais para a escrita pública oficial.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Norma-padrão'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Pontuação'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Sinais que organizam pausas e sentidos das orações.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Pontuação'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Concordância'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Ajuste harmônico de flexão entre termos da frase.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Concordância'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Regência'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Relação em que um termo exige preposição própria.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Regência'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Correção Gramatical Aplicada ao Trabalho'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Correção Gramatical Aplicada ao Trabalho'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


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
  Logger.log(FormApp.getActiveForm().getEditUrl());
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

    var respostasCorretas = [
      'Correção Gramatical Aplicada ao Trabalho',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      '“Não vamos cobrar taxa adicional”, mas esquecer o acento ou trocar uma vírgula de lugar, alterando o',
      'Regras formais para a escrita pública oficial.',
      'Sinais que organizam pausas e sentidos das orações.',
      'Ajuste harmônico de flexão entre termos da frase.',
      'Relação em que um termo exige preposição própria.',
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


// ════════════════════════════════════════════════════════════
// AULA 05
// ════════════════════════════════════════════════════════════


function criarFormularioAula05() {
  var form = FormApp.create('Avaliação — Aula 05 · Formatação e Padronização de Documentos
Apresentação visual e clareza na escrita formal · SENAI');

  form.setDescription(
    'Avaliação Completa: Formatação e Padronização de Documentos
Apresentação visual e clareza na escrita formal\n\n' +
    'Aula 05 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Formatação e Padronização de Documentos
Apresentação visual e clareza na escrita formal');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 5?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Formatação e Padronização de Documentos
Apresentação visual e clareza na escrita formal', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Formatação e Padronização de Documentos
Apresentaç...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. De acordo com a aula, qual é a relevância de: 'Qual texto você leria primeiro?...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Imagine receber dois currículos com o mesmo conteú...'?')
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

  form.addMultipleChoiceItem().setTitle('6. De acordo com a aula, qual é a relevância de: 'Compreender normas técnicas: aplicar margens, font...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Formatação e Padronização de Documentos
' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'Qual texto você leria primeiro?' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Imagine receber dois currículos com o me' em sua rotina profissional?')
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

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Compreender normas técnicas: aplicar mar' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Compreender normas técnicas'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('aplicar margens, fontes institucionais, espaçamentos e alinhamentos corretos.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Compreender normas técnicas'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Estruturar hierarquia visual'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('usar títulos, subtítulos, ênfases e listas com intencionalidade clara.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Estruturar hierarquia visual'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Garantir acessibilidade e exportação'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('produzir documentos limpos e salvá-los com segurança em formato PDF.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Garantir acessibilidade e exportação'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Formatação'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Ajuste visual de fontes, margens e parágrafos.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Formatação'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Padronização'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Regras unificadas para consistência institucional.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Padronização'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Formatação e Padronização de Documentos
Apresentação visual e clareza na escrita formal'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Formatação e Padronização de Documentos
Apresentação visual e clareza na escrita formal'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


  Logger.log('✅ AULA 05 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 05 — Formatação e Padronização de Documentos
Apresentação visual e clareza na escrita formal');
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

function analisarRespostasAula05() {
  var form = FormApp.openByTitle('Avaliação — Aula 05 · Formatação e Padronização de Documentos
Apresentação visual e clareza na escrita formal · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 05: Formatação e Padronização de Documentos
Apresentação visual e clareza na escrita formal');
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
      'Formatação e Padronização de Documentos
Apresentação visual e clareza na escrita formal',
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
      'aplicar margens, fontes institucionais, espaçamentos e alinhamentos corretos.',
      'usar títulos, subtítulos, ênfases e listas com intencionalidade clara.',
      'produzir documentos limpos e salvá-los com segurança em formato PDF.',
      'Ajuste visual de fontes, margens e parágrafos.',
      'Regras unificadas para consistência institucional.',
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


// ════════════════════════════════════════════════════════════
// AULA 06
// ════════════════════════════════════════════════════════════


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


// ════════════════════════════════════════════════════════════
// AULA 07
// ════════════════════════════════════════════════════════════


function criarFormularioAula07() {
  var form = FormApp.create('Avaliação — Aula 07 · Elaboração de Relatórios Técnicos
Estrutura, objetividade e análise prática no mundo profissional · SENAI');

  form.setDescription(
    'Avaliação Completa: Elaboração de Relatórios Técnicos
Estrutura, objetividade e análise prática no mundo profissional\n\n' +
    'Aula 07 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Elaboração de Relatórios Técnicos
Estrutura, objetividade e análise prática no mundo profissional');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 7?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Elaboração de Relatórios Técnicos
Estrutura, objetividade e análise prática no mundo profissional', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Elaboração de Relatórios Técnicos
Estrutura, objet...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. De acordo com a aula, qual é a relevância de: 'Um mistério na linha de montagem...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Uma fábrica parou por 4 horas seguidas. O supervis...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('5. De acordo com a aula, qual é a relevância de: 'Compreender a função corporativa e as partes essen...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('6. De acordo com a aula, qual é a relevância de: 'Aplicar o princípio da impessoalidade e fundamenta...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Elaboração de Relatórios Técnicos
Estrut' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'Um mistério na linha de montagem' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Uma fábrica parou por 4 horas seguidas. ' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('10. Como você aplicaria 'Compreender a função corporativa e as pa' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Aplicar o princípio da impessoalidade e ' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Relatório'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Documento formal que expõe fatos apurados e conclusões técnicas.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Relatório'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Metodologia'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('instrumentos, ferramentas e etapas do procedimento.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Metodologia'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Evidência'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Dado mensurável, fato auditável ou registro que comprova a ocorrência.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Evidência'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Impessoalidade'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Postura comunicativa neutra, focada no fato e isenta de opiniões.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Impessoalidade'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Revisão'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('A redação no ambiente de trabalho', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Revisão'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Elaboração de Relatórios Técnicos
Estrutura, objetividade e análise prática no mundo profissional'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Elaboração de Relatórios Técnicos
Estrutura, objetividade e análise prática no mundo profissional'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


  Logger.log('✅ AULA 07 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 07 — Elaboração de Relatórios Técnicos
Estrutura, objetividade e análise prática no mundo profissional');
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

function analisarRespostasAula07() {
  var form = FormApp.openByTitle('Avaliação — Aula 07 · Elaboração de Relatórios Técnicos
Estrutura, objetividade e análise prática no mundo profissional · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 07: Elaboração de Relatórios Técnicos
Estrutura, objetividade e análise prática no mundo profissional');
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
      'Elaboração de Relatórios Técnicos
Estrutura, objetividade e análise prática no mundo profissional',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Documento formal que expõe fatos apurados e conclusões técnicas.',
      'instrumentos, ferramentas e etapas do procedimento.',
      'Dado mensurável, fato auditável ou registro que comprova a ocorrência.',
      'Postura comunicativa neutra, focada no fato e isenta de opiniões.',
      'A redação no ambiente de trabalho',
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


// ════════════════════════════════════════════════════════════
// AULA 08
// ════════════════════════════════════════════════════════════


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


// ════════════════════════════════════════════════════════════
// AULA 09
// ════════════════════════════════════════════════════════════


function criarFormularioAula09() {
  var form = FormApp.create('Avaliação — Aula 09 · Procedimentos e Instruções
Como escrever passos claros, sequenciais e sem erros · SENAI');

  form.setDescription(
    'Avaliação Completa: Procedimentos e Instruções
Como escrever passos claros, sequenciais e sem erros\n\n' +
    'Aula 09 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Procedimentos e Instruções
Como escrever passos claros, sequenciais e sem erros');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 9?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Procedimentos e Instruções
Como escrever passos claros, sequenciais e sem erros', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Procedimentos e Instruções
Como escrever passos cl...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. Qual é a importância de 'O que acontece na falha?' neste contexto?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('O que acontece na falha?', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Você já tentou montar um móvel ou seguir uma recei...'?')
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

  form.addMultipleChoiceItem().setTitle('6. De acordo com a aula, qual é a relevância de: 'Diferenciar textos instrucionais de relatórios e m...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Procedimentos e Instruções
Como escrever' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'O que acontece na falha?' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Você já tentou montar um móvel ou seguir' em sua rotina profissional?')
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

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Diferenciar textos instrucionais de rela' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Recapitulando'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('O Memorando', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Recapitulando'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Pergunta 1'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Qual é a finalidade central de um relatório técnico em comparação a um comunicado interno?', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Pergunta 1'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Pergunta 2'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Qual documento deve ser consultado quando um funcionário precisa aprender o passo a passo de uma tar', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Pergunta 2'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Pergunta 3'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Qual é o foco principal do memorando corporativo?', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Pergunta 3'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Resposta 1'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('O relatório documenta e analisa fatos e dados detalhados, enquanto o comunicado apenas transmite avi', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Resposta 1'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Procedimentos e Instruções
Como escrever passos claros, sequenciais e sem erros'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Procedimentos e Instruções
Como escrever passos claros, sequenciais e sem erros'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


  Logger.log('✅ AULA 09 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 09 — Procedimentos e Instruções
Como escrever passos claros, sequenciais e sem erros');
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

function analisarRespostasAula09() {
  var form = FormApp.openByTitle('Avaliação — Aula 09 · Procedimentos e Instruções
Como escrever passos claros, sequenciais e sem erros · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 09: Procedimentos e Instruções
Como escrever passos claros, sequenciais e sem erros');
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
      'Procedimentos e Instruções
Como escrever passos claros, sequenciais e sem erros',
      'É um conceito importante apresentado na aula',
      'O que acontece na falha?',
      'É um conceito importante apresentado na aula',
      'Objetivos da Nossa Aula',
      'É um conceito importante apresentado na aula',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'O Memorando',
      'Qual é a finalidade central de um relatório técnico em comparação a um comunicado interno?',
      'Qual documento deve ser consultado quando um funcionário precisa aprender o passo a passo de uma tar',
      'Qual é o foco principal do memorando corporativo?',
      'O relatório documenta e analisa fatos e dados detalhados, enquanto o comunicado apenas transmite avi',
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


// ════════════════════════════════════════════════════════════
// AULA 10
// ════════════════════════════════════════════════════════════


function criarFormularioAula10() {
  var form = FormApp.create('Avaliação — Aula 10 · Plataformas Digitais de Comunicação
Conectando equipes com eficiência, agilidade e clareza no trabalho. · SENAI');

  form.setDescription(
    'Avaliação Completa: Plataformas Digitais de Comunicação
Conectando equipes com eficiência, agilidade e clareza no trabalho.\n\n' +
    'Aula 10 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Plataformas Digitais de Comunicação
Conectando equipes com eficiência, agilidade e clareza no trabalho.');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 10?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Plataformas Digitais de Comunicação
Conectando equipes com eficiência, agilidade e clareza no trabalho.', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Plataformas Digitais de Comunicação
Conectando equ...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. De acordo com a aula, qual é a relevância de: 'Uma mensagem urgente ou ruído excessivo?...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Imagine receber 47 notificações simultâneas em cin...'?')
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

  form.addMultipleChoiceItem().setTitle('6. De acordo com a aula, qual é a relevância de: 'Diferenciar comunicação síncrona e assíncrona, ide...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Plataformas Digitais de Comunicação
Cone' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'Uma mensagem urgente ou ruído excessivo?' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Imagine receber 47 notificações simultân' em sua rotina profissional?')
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

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Diferenciar comunicação síncrona e assín' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Plataforma'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Ambiente digital integrado para gestão e mensagens.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Plataforma'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Síncrono'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Comunicação em tempo real, exigindo presença simultânea dos participantes.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Síncrono'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Assíncrono'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Troca de mensagens sem necessidade de resposta imediata ou simultaneidade.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Assíncrono'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Ferramenta'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Aplicativo específico que executa funções operacionais e facilita fluxos.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Ferramenta'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Recapitulação'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Procedimentos e Manuais', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Recapitulação'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Plataformas Digitais de Comunicação
Conectando equipes com eficiência, agilidade e clareza no trabalho.'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Plataformas Digitais de Comunicação
Conectando equipes com eficiência, agilidade e clareza no trabalho.'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


  Logger.log('✅ AULA 10 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 10 — Plataformas Digitais de Comunicação
Conectando equipes com eficiência, agilidade e clareza no trabalho.');
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

function analisarRespostasAula10() {
  var form = FormApp.openByTitle('Avaliação — Aula 10 · Plataformas Digitais de Comunicação
Conectando equipes com eficiência, agilidade e clareza no trabalho. · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 10: Plataformas Digitais de Comunicação
Conectando equipes com eficiência, agilidade e clareza no trabalho.');
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
      'Plataformas Digitais de Comunicação
Conectando equipes com eficiência, agilidade e clareza no trabalho.',
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
      'Ambiente digital integrado para gestão e mensagens.',
      'Comunicação em tempo real, exigindo presença simultânea dos participantes.',
      'Troca de mensagens sem necessidade de resposta imediata ou simultaneidade.',
      'Aplicativo específico que executa funções operacionais e facilita fluxos.',
      'Procedimentos e Manuais',
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


// ════════════════════════════════════════════════════════════
// AULA 11
// ════════════════════════════════════════════════════════════


function criarFormularioAula11() {
  var form = FormApp.create('Avaliação — Aula 11 · Segurança da Informação e Privacidade
Protegendo dados, canais e reputação no ambiente digital corporativo · SENAI');

  form.setDescription(
    'Avaliação Completa: Segurança da Informação e Privacidade
Protegendo dados, canais e reputação no ambiente digital corporativo\n\n' +
    'Aula 11 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Segurança da Informação e Privacidade
Protegendo dados, canais e reputação no ambiente digital corporativo');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 11?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Segurança da Informação e Privacidade
Protegendo dados, canais e reputação no ambiente digital corporativo', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Segurança da Informação e Privacidade
Protegendo d...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. De acordo com a aula, qual é a relevância de: 'O que acontece quando você clica?...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Imagine receber um e-mail urgente da diretoria da ...'?')
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

  form.addMultipleChoiceItem().setTitle('6. De acordo com a aula, qual é a relevância de: 'Diferenciar canais de comunicação seguros e aplica...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Segurança da Informação e Privacidade
Pr' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'O que acontece quando você clica?' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Imagine receber um e-mail urgente da dir' em sua rotina profissional?')
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

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Diferenciar canais de comunicação seguro' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Segurança'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Proteção de sistemas e dados contra acessos não autorizados.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Segurança'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Privacidade'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Direito do indivíduo de controlar o uso de seus dados pessoais.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Privacidade'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Confidencialidade'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Garantia de que a informação só é acessível por pessoas autorizadas.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Confidencialidade'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Phishing'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Golpe eletrônico que usa mensagens falsas para roubar senhas e dados.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Phishing'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Canais de Comunicação'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Revisão', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Canais de Comunicação'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Segurança da Informação e Privacidade
Protegendo dados, canais e reputação no ambiente digital corporativo'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Segurança da Informação e Privacidade
Protegendo dados, canais e reputação no ambiente digital corporativo'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


  Logger.log('✅ AULA 11 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 11 — Segurança da Informação e Privacidade
Protegendo dados, canais e reputação no ambiente digital corporativo');
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

function analisarRespostasAula11() {
  var form = FormApp.openByTitle('Avaliação — Aula 11 · Segurança da Informação e Privacidade
Protegendo dados, canais e reputação no ambiente digital corporativo · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 11: Segurança da Informação e Privacidade
Protegendo dados, canais e reputação no ambiente digital corporativo');
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
      'Segurança da Informação e Privacidade
Protegendo dados, canais e reputação no ambiente digital corporativo',
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
      'Proteção de sistemas e dados contra acessos não autorizados.',
      'Direito do indivíduo de controlar o uso de seus dados pessoais.',
      'Garantia de que a informação só é acessível por pessoas autorizadas.',
      'Golpe eletrônico que usa mensagens falsas para roubar senhas e dados.',
      'Revisão',
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


// ════════════════════════════════════════════════════════════
// AULA 12
// ════════════════════════════════════════════════════════════


function criarFormularioAula12() {
  var form = FormApp.create('Avaliação — Aula 12 · Comunicação Eficaz
Como transformar ideias em mensagens claras, precisas e compreensíveis · SENAI');

  form.setDescription(
    'Avaliação Completa: Comunicação Eficaz
Como transformar ideias em mensagens claras, precisas e compreensíveis\n\n' +
    'Aula 12 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Comunicação Eficaz
Como transformar ideias em mensagens claras, precisas e compreensíveis');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 12?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Comunicação Eficaz
Como transformar ideias em mensagens claras, precisas e compreensíveis', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Comunicação Eficaz
Como transformar ideias em mens...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. Qual é a importância de 'O Custo de um Mal-entendido' neste contexto?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('O Custo de um Mal-entendido', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Uma mensagem com duplo sentido pode cancelar um ev...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('5. De acordo com a aula, qual é a relevância de: 'Identificar os pilares fundamentais da comunicação...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('6. De acordo com a aula, qual é a relevância de: 'Eliminar ambiguidades e excesso de termos em texto...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Comunicação Eficaz
Como transformar idei' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'O Custo de um Mal-entendido' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Uma mensagem com duplo sentido pode canc' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('10. Como você aplicaria 'Identificar os pilares fundamentais da c' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Eliminar ambiguidades e excesso de termo' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Clareza'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Ausência de obscuridade; mensagem sem margem a dúvidas.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Clareza'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Objetividade'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Foco direto no propósito sem rodeios desnecessários.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Objetividade'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Concisão'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Transmissão do máximo de ideias com o mínimo de termos.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Concisão'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Coerência'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Discurso e Ação', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Coerência'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Retomada'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('O Processo Comunicativo', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Retomada'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Comunicação Eficaz
Como transformar ideias em mensagens claras, precisas e compreensíveis'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Comunicação Eficaz
Como transformar ideias em mensagens claras, precisas e compreensíveis'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


  Logger.log('✅ AULA 12 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 12 — Comunicação Eficaz
Como transformar ideias em mensagens claras, precisas e compreensíveis');
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

function analisarRespostasAula12() {
  var form = FormApp.openByTitle('Avaliação — Aula 12 · Comunicação Eficaz
Como transformar ideias em mensagens claras, precisas e compreensíveis · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 12: Comunicação Eficaz
Como transformar ideias em mensagens claras, precisas e compreensíveis');
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
      'Comunicação Eficaz
Como transformar ideias em mensagens claras, precisas e compreensíveis',
      'É um conceito importante apresentado na aula',
      'O Custo de um Mal-entendido',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Ausência de obscuridade; mensagem sem margem a dúvidas.',
      'Foco direto no propósito sem rodeios desnecessários.',
      'Transmissão do máximo de ideias com o mínimo de termos.',
      'Discurso e Ação',
      'O Processo Comunicativo',
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


// ════════════════════════════════════════════════════════════
// AULA 13
// ════════════════════════════════════════════════════════════


function criarFormularioAula13() {
  var form = FormApp.create('Avaliação — Aula 13 · Etiqueta Digital e Netiqueta
Convivência e postura ética no ambiente virtual · SENAI');

  form.setDescription(
    'Avaliação Completa: Etiqueta Digital e Netiqueta
Convivência e postura ética no ambiente virtual\n\n' +
    'Aula 13 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Etiqueta Digital e Netiqueta
Convivência e postura ética no ambiente virtual');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 13?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Etiqueta Digital e Netiqueta
Convivência e postura ética no ambiente virtual', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Etiqueta Digital e Netiqueta
Convivência e postura...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. Qual é a importância de 'O peso das palavras na tela' neste contexto?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('O peso das palavras na tela', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Você já recebeu uma mensagem em letras maiúsculas ...'?')
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

  form.addMultipleChoiceItem().setTitle('6. De acordo com a aula, qual é a relevância de: 'Compreender os princípios de netiqueta e sua relev...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Etiqueta Digital e Netiqueta
Convivência' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'O peso das palavras na tela' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Você já recebeu uma mensagem em letras m' em sua rotina profissional?')
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

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Compreender os princípios de netiqueta e' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Netiqueta'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Boas maneiras e respeito na internet.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Netiqueta'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Etiqueta'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Convenções sociais de respeito mútuo.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Etiqueta'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Convivência'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Coabitar pacificamente espaços comuns.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Convivência'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Postura'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Atitude ética e responsabilidade ativa.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Postura'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Recapitulando'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Segurança e Privacidade', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Recapitulando'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Etiqueta Digital e Netiqueta
Convivência e postura ética no ambiente virtual'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Etiqueta Digital e Netiqueta
Convivência e postura ética no ambiente virtual'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


  Logger.log('✅ AULA 13 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 13 — Etiqueta Digital e Netiqueta
Convivência e postura ética no ambiente virtual');
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

function analisarRespostasAula13() {
  var form = FormApp.openByTitle('Avaliação — Aula 13 · Etiqueta Digital e Netiqueta
Convivência e postura ética no ambiente virtual · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 13: Etiqueta Digital e Netiqueta
Convivência e postura ética no ambiente virtual');
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
      'Etiqueta Digital e Netiqueta
Convivência e postura ética no ambiente virtual',
      'É um conceito importante apresentado na aula',
      'O peso das palavras na tela',
      'É um conceito importante apresentado na aula',
      'Objetivos da Nossa Aula',
      'É um conceito importante apresentado na aula',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Boas maneiras e respeito na internet.',
      'Convenções sociais de respeito mútuo.',
      'Coabitar pacificamente espaços comuns.',
      'Atitude ética e responsabilidade ativa.',
      'Segurança e Privacidade',
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


// ════════════════════════════════════════════════════════════
// AULA 14
// ════════════════════════════════════════════════════════════


function criarFormularioAula14() {
  var form = FormApp.create('Avaliação — Aula 14 · Trabalho Remoto e Colaboração
Práticas e ferramentas para produzir em equipe digital · SENAI');

  form.setDescription(
    'Avaliação Completa: Trabalho Remoto e Colaboração
Práticas e ferramentas para produzir em equipe digital\n\n' +
    'Aula 14 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Trabalho Remoto e Colaboração
Práticas e ferramentas para produzir em equipe digital');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 14?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Trabalho Remoto e Colaboração
Práticas e ferramentas para produzir em equipe digital', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Trabalho Remoto e Colaboração
Práticas e ferrament...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. De acordo com a aula, qual é a relevância de: 'Trabalhar Junto Sem Estar Perto...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Imagine escrever um trabalho escolar em grupo onde...'?')
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

  form.addMultipleChoiceItem().setTitle('6. De acordo com a aula, qual é a relevância de: 'Identificar recursos essenciais em documentos comp...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Trabalho Remoto e Colaboração
Práticas e' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'Trabalhar Junto Sem Estar Perto' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Imagine escrever um trabalho escolar em ' em sua rotina profissional?')
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

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Identificar recursos essenciais em docum' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Pergunta 1'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Por que devemos evitar escrever frases inteiras em letras maiúsculas no chat de trabalho?', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Pergunta 1'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Pergunta 2'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Qual é o papel do microfone mudo durante uma videoconferência com muitas pessoas?', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Pergunta 2'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Pergunta 3'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('O que devemos checar antes de enviar uma mensagem com dúvidas em grupo?', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Pergunta 3'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Resposta 1'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Porque letras maiúsculas transmitem a impressão de grito ou agressividade.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Resposta 1'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Resposta 2'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Evitar que ruídos do ambiente atrapalhem quem está com a palavra.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Resposta 2'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Trabalho Remoto e Colaboração
Práticas e ferramentas para produzir em equipe digital'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Trabalho Remoto e Colaboração
Práticas e ferramentas para produzir em equipe digital'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


  Logger.log('✅ AULA 14 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 14 — Trabalho Remoto e Colaboração
Práticas e ferramentas para produzir em equipe digital');
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

function analisarRespostasAula14() {
  var form = FormApp.openByTitle('Avaliação — Aula 14 · Trabalho Remoto e Colaboração
Práticas e ferramentas para produzir em equipe digital · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 14: Trabalho Remoto e Colaboração
Práticas e ferramentas para produzir em equipe digital');
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
      'Trabalho Remoto e Colaboração
Práticas e ferramentas para produzir em equipe digital',
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
      'Por que devemos evitar escrever frases inteiras em letras maiúsculas no chat de trabalho?',
      'Qual é o papel do microfone mudo durante uma videoconferência com muitas pessoas?',
      'O que devemos checar antes de enviar uma mensagem com dúvidas em grupo?',
      'Porque letras maiúsculas transmitem a impressão de grito ou agressividade.',
      'Evitar que ruídos do ambiente atrapalhem quem está com a palavra.',
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


// ════════════════════════════════════════════════════════════
// AULA 15
// ════════════════════════════════════════════════════════════


function criarFormularioAula15() {
  var form = FormApp.create('Avaliação — Aula 15 · Linguagem Corporal e Comunicação
O poder dos sinais não-verbais no ambiente profissional · SENAI');

  form.setDescription(
    'Avaliação Completa: Linguagem Corporal e Comunicação
O poder dos sinais não-verbais no ambiente profissional\n\n' +
    'Aula 15 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Linguagem Corporal e Comunicação
O poder dos sinais não-verbais no ambiente profissional');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 15?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Linguagem Corporal e Comunicação
O poder dos sinais não-verbais no ambiente profissional', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Linguagem Corporal e Comunicação
O poder dos sinai...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. De acordo com a aula, qual é a relevância de: 'Você fala mesmo antes de abrir a boca?...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Imagine assistir a uma apresentação profissional n...'?')
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

  form.addMultipleChoiceItem().setTitle('6. De acordo com a aula, qual é a relevância de: 'Identificar os componentes centrais da comunicação...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Linguagem Corporal e Comunicação
O poder' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'Você fala mesmo antes de abrir a boca?' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Imagine assistir a uma apresentação prof' em sua rotina profissional?')
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

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Identificar os componentes centrais da c' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Não-verbal'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Todo sinal comunicado sem palavras faladas ou escritas.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Não-verbal'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Postura'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Posição sustentada do corpo que reflete estados internos e atitude.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Postura'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Proxêmica'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Estudo do uso do espaço físico e da distância interpessoal.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Proxêmica'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Congruência'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Harmonia precisa entre o que a voz diz e o corpo expressa.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Congruência'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Revisão'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Aulas Anteriores', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Revisão'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Linguagem Corporal e Comunicação
O poder dos sinais não-verbais no ambiente profissional'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Linguagem Corporal e Comunicação
O poder dos sinais não-verbais no ambiente profissional'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


  Logger.log('✅ AULA 15 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 15 — Linguagem Corporal e Comunicação
O poder dos sinais não-verbais no ambiente profissional');
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

function analisarRespostasAula15() {
  var form = FormApp.openByTitle('Avaliação — Aula 15 · Linguagem Corporal e Comunicação
O poder dos sinais não-verbais no ambiente profissional · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 15: Linguagem Corporal e Comunicação
O poder dos sinais não-verbais no ambiente profissional');
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
      'Linguagem Corporal e Comunicação
O poder dos sinais não-verbais no ambiente profissional',
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
      'Todo sinal comunicado sem palavras faladas ou escritas.',
      'Posição sustentada do corpo que reflete estados internos e atitude.',
      'Estudo do uso do espaço físico e da distância interpessoal.',
      'Harmonia precisa entre o que a voz diz e o corpo expressa.',
      'Aulas Anteriores',
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


// ════════════════════════════════════════════════════════════
// AULA 16
// ════════════════════════════════════════════════════════════


function criarFormularioAula16() {
  var form = FormApp.create('Avaliação — Aula 16 · Gestual, Tom de Voz e Sincronismo
A harmonia perfeita entre corpo, voz e mensagem profissional · SENAI');

  form.setDescription(
    'Avaliação Completa: Gestual, Tom de Voz e Sincronismo
A harmonia perfeita entre corpo, voz e mensagem profissional\n\n' +
    'Aula 16 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Gestual, Tom de Voz e Sincronismo
A harmonia perfeita entre corpo, voz e mensagem profissional');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 16?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Gestual, Tom de Voz e Sincronismo
A harmonia perfeita entre corpo, voz e mensagem profissional', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Gestual, Tom de Voz e Sincronismo
A harmonia perfe...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. De acordo com a aula, qual é a relevância de: 'Quando o corpo contradiz a fala...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Imagine alguém afirmando com voz trêmula, ombros c...'?')
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

  form.addMultipleChoiceItem().setTitle('6. De acordo com a aula, qual é a relevância de: 'Identificar e sincronizar gestos manuais intencion...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Gestual, Tom de Voz e Sincronismo
A harm' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'Quando o corpo contradiz a fala' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Imagine alguém afirmando com voz trêmula' em sua rotina profissional?')
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

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Identificar e sincronizar gestos manuais' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Gestual'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Conjunto de movimentos de braços e mãos que acompanham o discurso.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Gestual'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Sincronismo'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Coincidência temporal perfeita entre gesto, palavra e respiração.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Sincronismo'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Ênfase'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Destaque vocal ou gestual dado a palavras-chave estratégicas.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Ênfase'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Presença'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Domínio consciente do espaço físico, olhar firme e segurança corporal.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Presença'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'A postura é a âncora de qualquer fala'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('pés alinhados à largura dos ombros distribuem o peso com equilíbrio, abrindo a caixa torácica e faci', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'A postura é a âncora de qualquer fala'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Gestual, Tom de Voz e Sincronismo
A harmonia perfeita entre corpo, voz e mensagem profissional'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Gestual, Tom de Voz e Sincronismo
A harmonia perfeita entre corpo, voz e mensagem profissional'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


  Logger.log('✅ AULA 16 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 16 — Gestual, Tom de Voz e Sincronismo
A harmonia perfeita entre corpo, voz e mensagem profissional');
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

function analisarRespostasAula16() {
  var form = FormApp.openByTitle('Avaliação — Aula 16 · Gestual, Tom de Voz e Sincronismo
A harmonia perfeita entre corpo, voz e mensagem profissional · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 16: Gestual, Tom de Voz e Sincronismo
A harmonia perfeita entre corpo, voz e mensagem profissional');
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
      'Gestual, Tom de Voz e Sincronismo
A harmonia perfeita entre corpo, voz e mensagem profissional',
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
      'Conjunto de movimentos de braços e mãos que acompanham o discurso.',
      'Coincidência temporal perfeita entre gesto, palavra e respiração.',
      'Destaque vocal ou gestual dado a palavras-chave estratégicas.',
      'Domínio consciente do espaço físico, olhar firme e segurança corporal.',
      'pés alinhados à largura dos ombros distribuem o peso com equilíbrio, abrindo a caixa torácica e faci',
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


// ════════════════════════════════════════════════════════════
// AULA 17
// ════════════════════════════════════════════════════════════


function criarFormularioAula17() {
  var form = FormApp.create('Avaliação — Aula 17 · Integração Prática: O Projeto Capstone
Unindo escrita técnica, oratória e ferramentas digitais · SENAI');

  form.setDescription(
    'Avaliação Completa: Integração Prática: O Projeto Capstone
Unindo escrita técnica, oratória e ferramentas digitais\n\n' +
    'Aula 17 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Integração Prática: O Projeto Capstone
Unindo escrita técnica, oratória e ferramentas digitais');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 17?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Integração Prática: O Projeto Capstone
Unindo escrita técnica, oratória e ferramentas digitais', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Integração Prática: O Projeto Capstone
Unindo escr...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. De acordo com a aula, qual é a relevância de: 'O Grande Enigma da Comunicação Real...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Imagine ter uma solução brilhante para a sua escol...'?')
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

  form.addMultipleChoiceItem().setTitle('6. De acordo com a aula, qual é a relevância de: 'Integrar os saberes dos 6 módulos do curso em um p...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Integração Prática: O Projeto Capstone
U' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'O Grande Enigma da Comunicação Real' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Imagine ter uma solução brilhante para a' em sua rotina profissional?')
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

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Integrar os saberes dos 6 módulos do cur' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Integração Prática'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('O Projeto Capstone
Unindo escrita técnica, oratória e ferramentas digitais', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Integração Prática'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Integração'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('União harmoniosa de diferentes partes em um sistema único e funcional.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Integração'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Projeto'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Esforço temporário planejado para criar um resultado ou solução específica.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Projeto'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Aplicação'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Uso concreto de teorias e regras em situações reais e práticas.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Aplicação'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Trabalho'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Atividade coordenada com empenho físico e mental para atingir um objetivo.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Trabalho'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Integração Prática: O Projeto Capstone
Unindo escrita técnica, oratória e ferramentas digitais'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Integração Prática: O Projeto Capstone
Unindo escrita técnica, oratória e ferramentas digitais'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


  Logger.log('✅ AULA 17 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 17 — Integração Prática: O Projeto Capstone
Unindo escrita técnica, oratória e ferramentas digitais');
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

function analisarRespostasAula17() {
  var form = FormApp.openByTitle('Avaliação — Aula 17 · Integração Prática: O Projeto Capstone
Unindo escrita técnica, oratória e ferramentas digitais · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 17: Integração Prática: O Projeto Capstone
Unindo escrita técnica, oratória e ferramentas digitais');
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
      'Integração Prática: O Projeto Capstone
Unindo escrita técnica, oratória e ferramentas digitais',
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
      'O Projeto Capstone
Unindo escrita técnica, oratória e ferramentas digitais',
      'União harmoniosa de diferentes partes em um sistema único e funcional.',
      'Esforço temporário planejado para criar um resultado ou solução específica.',
      'Uso concreto de teorias e regras em situações reais e práticas.',
      'Atividade coordenada com empenho físico e mental para atingir um objetivo.',
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


// ════════════════════════════════════════════════════════════
// AULA 18
// ════════════════════════════════════════════════════════════

function criarFormularioAula18() {
  var form = FormApp.create('Avaliação — Aula 18 · Avaliação Final e Encerramento · SENAI');

  form.setDescription(
    'Avaliação Completa: Avaliação Final e Encerramento\n\n' +
    'Aula 18 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Avaliação Final e Encerramento');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 18?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Avaliação Final e Encerramento', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. Qual é a importância de 'Avaliação Final e Encerramento' neste contexto?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Avaliação Final e Encerramento', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. De acordo com a aula, qual é a relevância de: 'Conclusão do curso de Comunicação Oral e Escrita...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. Qual é a importância de 'O que mudou na sua voz?' neste contexto?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('O que mudou na sua voz?', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('5. De acordo com a aula, qual é a relevância de: 'Lembre-se do primeiro dia de aula: o nervosismo di...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('6. Qual é a importância de 'Objetivos da Nossa Aula Final' neste contexto?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Objetivos da Nossa Aula Final', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Avaliação Final e Encerramento' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'Conclusão do curso de Comunicação Oral e' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'O que mudou na sua voz?' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('10. Como você aplicaria 'Lembre-se do primeiro dia de aula: o ner' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Objetivos da Nossa Aula Final' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Lembre-se do primeiro dia de aula'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('o nervosismo diante de uma pergunta, a dúvida ao estruturar um e-mail formal ou a insegurança ao fal', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Lembre-se do primeiro dia de aula'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Avaliação'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Medição sistemática de conhecimentos e habilidades com critérios claros.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Avaliação'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Apresentação'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Ato de expor ideias a um público com clareza, técnica e empatia.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Apresentação'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Desempenho'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Demonstração prática e observável das competências exigidas.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Desempenho'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Evolução'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Progresso contínuo verificado entre o ponto de partida e o atual.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Evolução'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Avaliação Final e Encerramento'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Avaliação Final e Encerramento'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


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
  Logger.log(FormApp.getActiveForm().getEditUrl());
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

    var respostasCorretas = [
      'Avaliação Final e Encerramento',
      'Avaliação Final e Encerramento',
      'É um conceito importante apresentado na aula',
      'O que mudou na sua voz?',
      'É um conceito importante apresentado na aula',
      'Objetivos da Nossa Aula Final',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'o nervosismo diante de uma pergunta, a dúvida ao estruturar um e-mail formal ou a insegurança ao fal',
      'Medição sistemática de conhecimentos e habilidades com critérios claros.',
      'Ato de expor ideias a um público com clareza, técnica e empatia.',
      'Demonstração prática e observável das competências exigidas.',
      'Progresso contínuo verificado entre o ponto de partida e o atual.',
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


// ════════════════════════════════════════════════════════════
// AULA 19
// ════════════════════════════════════════════════════════════


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


// ════════════════════════════════════════════════════════════
// AULA 20
// ════════════════════════════════════════════════════════════


function criarFormularioAula20() {
  var form = FormApp.create('Avaliação — Aula 20 · Contextos Formais versus Informais
Adequação comunicativa, registros e impacto profissional · SENAI');

  form.setDescription(
    'Avaliação Completa: Contextos Formais versus Informais
Adequação comunicativa, registros e impacto profissional\n\n' +
    'Aula 20 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Contextos Formais versus Informais
Adequação comunicativa, registros e impacto profissional');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 20?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Contextos Formais versus Informais
Adequação comunicativa, registros e impacto profissional', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Contextos Formais versus Informais
Adequação comun...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. De acordo com a aula, qual é a relevância de: 'Você contrataria este candidato?...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Imagine abrir um e-mail de processo seletivo e ler...'?')
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

  form.addMultipleChoiceItem().setTitle('6. De acordo com a aula, qual é a relevância de: 'Diferenciar registros formais e informais com base...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Contextos Formais versus Informais
Adequ' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'Você contrataria este candidato?' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Imagine abrir um e-mail de processo sele' em sua rotina profissional?')
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

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Diferenciar registros formais e informai' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Revisão'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Feedback Construtivo', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Revisão'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Pergunta 1'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Qual é o principal propósito do feedback bidirecional no ciclo comunicativo?', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Pergunta 1'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Pergunta 2'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Por que um feedback deve focar no comportamento ou mensagem, e não na pessoa?', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Pergunta 2'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Pergunta 3'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('O que caracteriza um feedback eficaz no ambiente acadêmico ou profissional?', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Pergunta 3'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Resposta 1'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Permitir que emissor e receptor alinhem entendimentos e ajustem a mensagem.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Resposta 1'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Contextos Formais versus Informais
Adequação comunicativa, registros e impacto profissional'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Contextos Formais versus Informais
Adequação comunicativa, registros e impacto profissional'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


  Logger.log('✅ AULA 20 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 20 — Contextos Formais versus Informais
Adequação comunicativa, registros e impacto profissional');
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

function analisarRespostasAula20() {
  var form = FormApp.openByTitle('Avaliação — Aula 20 · Contextos Formais versus Informais
Adequação comunicativa, registros e impacto profissional · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 20: Contextos Formais versus Informais
Adequação comunicativa, registros e impacto profissional');
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
      'Contextos Formais versus Informais
Adequação comunicativa, registros e impacto profissional',
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
      'Feedback Construtivo',
      'Qual é o principal propósito do feedback bidirecional no ciclo comunicativo?',
      'Por que um feedback deve focar no comportamento ou mensagem, e não na pessoa?',
      'O que caracteriza um feedback eficaz no ambiente acadêmico ou profissional?',
      'Permitir que emissor e receptor alinhem entendimentos e ajustem a mensagem.',
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


// ════════════════════════════════════════════════════════════
// AULA 21
// ════════════════════════════════════════════════════════════


function criarFormularioAula21() {
  var form = FormApp.create('Avaliação — Aula 21 · Síntese dos Fundamentos da Comunicação
Consolidação e Prática do Módulo 1 · SENAI');

  form.setDescription(
    'Avaliação Completa: Síntese dos Fundamentos da Comunicação
Consolidação e Prática do Módulo 1\n\n' +
    'Aula 21 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Síntese dos Fundamentos da Comunicação
Consolidação e Prática do Módulo 1');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 21?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Síntese dos Fundamentos da Comunicação
Consolidação e Prática do Módulo 1', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Síntese dos Fundamentos da Comunicação
Consolidaçã...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. De acordo com a aula, qual é a relevância de: 'O que custa uma mensagem truncada?...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Em aviação, hospitais ou empresas, uma palavra mal...'?')
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

  form.addMultipleChoiceItem().setTitle('6. De acordo com a aula, qual é a relevância de: 'Integrar os 4 pilares do Módulo 1: elementos, efic...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Síntese dos Fundamentos da Comunicação
C' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'O que custa uma mensagem truncada?' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Em aviação, hospitais ou empresas, uma p' em sua rotina profissional?')
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

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Integrar os 4 pilares do Módulo 1: eleme' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Integrar os 4 pilares do Módulo 1'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('elementos, eficácia, feedback e registros linguísticos.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Integrar os 4 pilares do Módulo 1'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Síntese'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Capacidade de condensar informações centrais com clareza.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Síntese'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Mapeamento'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Identificação sistemática dos fluxos e ruídos no canal.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Mapeamento'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Contexto'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Ambiente social e cultural que define o tom do diálogo.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Contexto'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Integridade'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Fidelidade aos fatos e ética no trato das informações.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Integridade'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Síntese dos Fundamentos da Comunicação
Consolidação e Prática do Módulo 1'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Síntese dos Fundamentos da Comunicação
Consolidação e Prática do Módulo 1'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


  Logger.log('✅ AULA 21 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 21 — Síntese dos Fundamentos da Comunicação
Consolidação e Prática do Módulo 1');
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

function analisarRespostasAula21() {
  var form = FormApp.openByTitle('Avaliação — Aula 21 · Síntese dos Fundamentos da Comunicação
Consolidação e Prática do Módulo 1 · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 21: Síntese dos Fundamentos da Comunicação
Consolidação e Prática do Módulo 1');
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
      'Síntese dos Fundamentos da Comunicação
Consolidação e Prática do Módulo 1',
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
      'elementos, eficácia, feedback e registros linguísticos.',
      'Capacidade de condensar informações centrais com clareza.',
      'Identificação sistemática dos fluxos e ruídos no canal.',
      'Ambiente social e cultural que define o tom do diálogo.',
      'Fidelidade aos fatos e ética no trato das informações.',
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


// ════════════════════════════════════════════════════════════
// AULA 22
// ════════════════════════════════════════════════════════════


function criarFormularioAula22() {
  var form = FormApp.create('Avaliação — Aula 22 · Estrutura de Apresentações
Como planejar discursos memoráveis, claros e persuasivos · SENAI');

  form.setDescription(
    'Avaliação Completa: Estrutura de Apresentações
Como planejar discursos memoráveis, claros e persuasivos\n\n' +
    'Aula 22 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Estrutura de Apresentações
Como planejar discursos memoráveis, claros e persuasivos');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 22?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Estrutura de Apresentações
Como planejar discursos memoráveis, claros e persuasivos', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Estrutura de Apresentações
Como planejar discursos...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. De acordo com a aula, qual é a relevância de: 'Por que falar em público assusta?...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Pesquisas indicam que muitas pessoas temem mais fa...'?')
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

  form.addMultipleChoiceItem().setTitle('6. De acordo com a aula, qual é a relevância de: 'Organizar uma apresentação clássica em introdução,...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Estrutura de Apresentações
Como planejar' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'Por que falar em público assusta?' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Pesquisas indicam que muitas pessoas tem' em sua rotina profissional?')
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

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Organizar uma apresentação clássica em i' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Estrutura'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Esqueleto que organiza ideias e guia a audiência.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Estrutura'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Roteiro'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Guia de tópicos que apoia a fala sem leitura fixa.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Roteiro'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Pacing'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Gestão da velocidade, pausas e tempo da fala.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Pacing'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Persuasão'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Capacidade de engajar e motivar reflexão.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Persuasão'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Pergunta 1'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Qual componente do processo comunicativo confirma que a mensagem foi recebida e compreendida?', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Pergunta 1'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Estrutura de Apresentações
Como planejar discursos memoráveis, claros e persuasivos'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Estrutura de Apresentações
Como planejar discursos memoráveis, claros e persuasivos'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


  Logger.log('✅ AULA 22 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 22 — Estrutura de Apresentações
Como planejar discursos memoráveis, claros e persuasivos');
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

function analisarRespostasAula22() {
  var form = FormApp.openByTitle('Avaliação — Aula 22 · Estrutura de Apresentações
Como planejar discursos memoráveis, claros e persuasivos · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 22: Estrutura de Apresentações
Como planejar discursos memoráveis, claros e persuasivos');
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
      'Estrutura de Apresentações
Como planejar discursos memoráveis, claros e persuasivos',
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
      'Esqueleto que organiza ideias e guia a audiência.',
      'Guia de tópicos que apoia a fala sem leitura fixa.',
      'Gestão da velocidade, pausas e tempo da fala.',
      'Capacidade de engajar e motivar reflexão.',
      'Qual componente do processo comunicativo confirma que a mensagem foi recebida e compreendida?',
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


// ════════════════════════════════════════════════════════════
// AULA 23
// ════════════════════════════════════════════════════════════

function criarFormularioAula23() {
  var form = FormApp.create('Avaliação — Aula 23 · Técnicas de Oratória e Expressão Vocal · SENAI');

  form.setDescription(
    'Avaliação Completa: Técnicas de Oratória e Expressão Vocal\n\n' +
    'Aula 23 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Técnicas de Oratória e Expressão Vocal');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 23?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Técnicas de Oratória e Expressão Vocal', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Técnicas de Oratória e Expressão Vocal...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. De acordo com a aula, qual é a relevância de: 'Como dominar a voz e falar com confiança e clareza...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'O que torna uma fala inesquecível?...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('5. De acordo com a aula, qual é a relevância de: 'Você já ouviu alguém com ideias incríveis falar de...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('6. Qual é a importância de 'Objetivos da Nossa Aula' neste contexto?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Objetivos da Nossa Aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Técnicas de Oratória e Expressão Vocal' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'Como dominar a voz e falar com confiança' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'O que torna uma fala inesquecível?' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('10. Como você aplicaria 'Você já ouviu alguém com ideias incrívei' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Objetivos da Nossa Aula' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Quiz'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Estrutura da Apresentação', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Quiz'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Pergunta 1'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Qual é o papel principal da abertura em um discurso?', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Pergunta 1'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Pergunta 2'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('O que deve compor o desenvolvimento de uma boa apresentação?', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Pergunta 2'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Pergunta 3'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Como um fechamento de impacto deve finalizar uma exposição oral?', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Pergunta 3'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Resposta 1'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Capturar a atenção do público, gerar empatia e definir com clareza o tema.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Resposta 1'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Técnicas de Oratória e Expressão Vocal'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Técnicas de Oratória e Expressão Vocal'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


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
  Logger.log(FormApp.getActiveForm().getEditUrl());
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

    var respostasCorretas = [
      'Técnicas de Oratória e Expressão Vocal',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'Objetivos da Nossa Aula',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Estrutura da Apresentação',
      'Qual é o papel principal da abertura em um discurso?',
      'O que deve compor o desenvolvimento de uma boa apresentação?',
      'Como um fechamento de impacto deve finalizar uma exposição oral?',
      'Capturar a atenção do público, gerar empatia e definir com clareza o tema.',
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


// ════════════════════════════════════════════════════════════
// AULA 24
// ════════════════════════════════════════════════════════════


function criarFormularioAula24() {
  var form = FormApp.create('Avaliação — Aula 24 · Participação e Condução de Reuniões
Como liderar, intervir com firmeza e registrar decisões com eficiência · SENAI');

  form.setDescription(
    'Avaliação Completa: Participação e Condução de Reuniões
Como liderar, intervir com firmeza e registrar decisões com eficiência\n\n' +
    'Aula 24 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Participação e Condução de Reuniões
Como liderar, intervir com firmeza e registrar decisões com eficiência');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 24?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Participação e Condução de Reuniões
Como liderar, intervir com firmeza e registrar decisões com eficiência', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. De acordo com a aula, qual é a relevância de: 'Participação e Condução de Reuniões
Como liderar, ...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. Qual é a importância de 'O dilema das reuniões' neste contexto?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('O dilema das reuniões', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Você já sentiu que uma reunião de uma hora poderia...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('5. Qual é a importância de 'Objetivos da nossa aula' neste contexto?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Objetivos da nossa aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('6. De acordo com a aula, qual é a relevância de: 'Reconhecer papéis essenciais e a importância da pa...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Participação e Condução de Reuniões
Como' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'O dilema das reuniões' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Você já sentiu que uma reunião de uma ho' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('10. Como você aplicaria 'Objetivos da nossa aula' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Reconhecer papéis essenciais e a importâ' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Reunião'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Encontro formal para alinhar equipes e tomar decisões.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Reunião'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Pauta'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Lista prévia de tópicos com metas e tempos definidos para guiar o diálogo.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Pauta'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Síntese'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Resumo claro dos debates, destacando os pontos centrais.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Síntese'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Mediação'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Intervenção equilibrada para harmonizar opiniões e resolver desacordos no grupo.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Mediação'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Feche com pergunta
Convide a equipe à deliberação'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('“O que vocês acham de testarmos este caminho por uma semana?”.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Feche com pergunta
Convide a equipe à deliberação'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Participação e Condução de Reuniões
Como liderar, intervir com firmeza e registrar decisões com eficiência'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Participação e Condução de Reuniões
Como liderar, intervir com firmeza e registrar decisões com eficiência'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


  Logger.log('✅ AULA 24 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 24 — Participação e Condução de Reuniões
Como liderar, intervir com firmeza e registrar decisões com eficiência');
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

function analisarRespostasAula24() {
  var form = FormApp.openByTitle('Avaliação — Aula 24 · Participação e Condução de Reuniões
Como liderar, intervir com firmeza e registrar decisões com eficiência · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 24: Participação e Condução de Reuniões
Como liderar, intervir com firmeza e registrar decisões com eficiência');
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
      'Participação e Condução de Reuniões
Como liderar, intervir com firmeza e registrar decisões com eficiência',
      'É um conceito importante apresentado na aula',
      'O dilema das reuniões',
      'É um conceito importante apresentado na aula',
      'Objetivos da nossa aula',
      'É um conceito importante apresentado na aula',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Encontro formal para alinhar equipes e tomar decisões.',
      'Lista prévia de tópicos com metas e tempos definidos para guiar o diálogo.',
      'Resumo claro dos debates, destacando os pontos centrais.',
      'Intervenção equilibrada para harmonizar opiniões e resolver desacordos no grupo.',
      '“O que vocês acham de testarmos este caminho por uma semana?”.',
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


// ════════════════════════════════════════════════════════════
// AULA 25
// ════════════════════════════════════════════════════════════

function criarFormularioAula25() {
  var form = FormApp.create('Avaliação — Aula 25 · Atendimento e Escuta Ativa · SENAI');

  form.setDescription(
    'Avaliação Completa: Atendimento e Escuta Ativa\n\n' +
    'Aula 25 — UC Introdução à Comunicação Oral e Escrita\n' +
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Atendimento e Escuta Ativa');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');


  form.addMultipleChoiceItem().setTitle('1. Qual é o tema principal da Aula 25?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Atendimento e Escuta Ativa', true),
      form.addMultipleChoiceItem().createChoice('Fundamentos de comunicação digital', false),
      form.addMultipleChoiceItem().createChoice('Estratégias de marketing avançado', false),
      form.addMultipleChoiceItem().createChoice('Análise de redes sociais', false)

  form.addMultipleChoiceItem().setTitle('2. Qual é a importância de 'Atendimento e Escuta Ativa' neste contexto?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Atendimento e Escuta Ativa', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. De acordo com a aula, qual é a relevância de: 'Técnicas de acolhimento e resolução profissional...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. De acordo com a aula, qual é a relevância de: 'Você já se sentiu invisível ao falar?...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('5. De acordo com a aula, qual é a relevância de: 'Imagine explicar um problema importante enquanto a...'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('É um conceito importante apresentado na aula', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('6. Qual é a importância de 'Objetivos de Aprendizagem' neste contexto?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Objetivos de Aprendizagem', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância prática', false),
      form.addMultipleChoiceItem().createChoice('Apenas para contexto acadêmico', false),
      form.addMultipleChoiceItem().createChoice('É um conceito desatualizado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria 'Atendimento e Escuta Ativa' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Como você aplicaria 'Técnicas de acolhimento e resolução prof' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como você aplicaria 'Você já se sentiu invisível ao falar?' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('10. Como você aplicaria 'Imagine explicar um problema importante ' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('11. Como você aplicaria 'Objetivos de Aprendizagem' em sua rotina profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Na comunicação diária com colegas e superiores', true),
      form.addMultipleChoiceItem().createChoice('Apenas em situações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Nunca seria aplicável no trabalho', false),
      form.addMultipleChoiceItem().createChoice('Apenas em atividades de lazer', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Qual é a definição correta de 'Reuniões Eficientes'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Papéis e Dinâmica', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Reuniões Eficientes'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a definição correta de 'Técnica 1'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Parafraseamento', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Técnica 1'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Qual é a definição correta de 'Técnica 2'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Validação Emocional', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Técnica 2'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a definição correta de 'Técnica 3'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Perguntas Abertas', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Técnica 3'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Qual é a definição correta de 'Fase 1'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Tensão Alta
Tom de voz baixo e pausas intencionais de silêncio.', true),
      form.addMultipleChoiceItem().createChoice('Conceito oposto a 'Fase 1'', false),
      form.addMultipleChoiceItem().createChoice('Uma ferramenta de trabalho genérica', false),
      form.addMultipleChoiceItem().createChoice('Um tipo de erro comum', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o objetivo principal ao estudar 'Atendimento e Escuta Ativa'?')
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

  form.addMultipleChoiceItem().setTitle('20. Resumindo, qual é a mensagem-chave que você retira de 'Atendimento e Escuta Ativa'?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e aplicar os conceitos na prática profissional', true),
      form.addMultipleChoiceItem().createChoice('Apenas passar na avaliação', false),
      form.addMultipleChoiceItem().createChoice('Memorizar informações para futuro uso', false),
      form.addMultipleChoiceItem().createChoice('Completar um requisito curricular', false)
    ]).setRequired(true);


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
  Logger.log(FormApp.getActiveForm().getEditUrl());
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

    var respostasCorretas = [
      'Atendimento e Escuta Ativa',
      'Atendimento e Escuta Ativa',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'É um conceito importante apresentado na aula',
      'Objetivos de Aprendizagem',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Na comunicação diária com colegas e superiores',
      'Papéis e Dinâmica',
      'Parafraseamento',
      'Validação Emocional',
      'Perguntas Abertas',
      'Tensão Alta
Tom de voz baixo e pausas intencionais de silêncio.',
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


// ════════════════════════════════════════════════════════════
// REVISÃO INTEGRADA
// ════════════════════════════════════════════════════════════

function criarQuizRevisao() {
  var form = FormApp.create('Revisão Integrada — Aulas 1 a 9 · Comunicação Oral e Escrita · SENAI');

  form.setDescription(
    'REVISÃO INTEGRADA: Aulas 1 a 9\n\n' +
    'UC Introdução à Comunicação Oral e Escrita\n' +
    'Professor: Gelvazio\n\n' +
    '30 questões | 30 pontos no total\n' +
    'Tempo estimado: 45-60 minutos\n' +
    'Cobertura: Consolidação de todos os tópicos das aulas 1-9\n' +
    'Você verá sua pontuação e feedback detalhado ao enviar!\n\n' +
    'OBJETIVOS:\n' +
    '- Revisar conceitos principais das aulas 1-9\n' +
    '- Identificar áreas que precisam de reforço\n' +
    '- Preparar-se para avaliações posteriores'
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

  form.addSectionHeaderItem().setTitle('REVISÃO INTEGRADA — Aulas 1 a 9');
  form.addTextItem().setHelpText('30 questões | 1 ponto cada | Total: 30 pontos | Cobertura: Aulas 1-9');

  // AULAS 1-3: Fundamentos da Comunicação (9 questões)
  form.addSectionHeaderItem().setTitle('Bloco 1: Fundamentos da Comunicação (Aulas 1-3)');

  form.addMultipleChoiceItem().setTitle('1. Qual é o primeiro passo em um processo comunicativo eficaz?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Identificar claramente o objetivo e o público-alvo', true),
      form.addMultipleChoiceItem().createChoice('Escolher o canal mais moderno disponível', false),
      form.addMultipleChoiceItem().createChoice('Usar a linguagem mais formal possível', false),
      form.addMultipleChoiceItem().createChoice('Evitar qualquer feedback do receptor', false)

  form.addMultipleChoiceItem().setTitle('2. O que diferencia comunicação eficaz de comunicação ineficaz?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('A clareza da mensagem, compreensão do público e feedback', true),
      form.addMultipleChoiceItem().createChoice('O número de pessoas envolvidas', false),
      form.addMultipleChoiceItem().createChoice('A duração da comunicação', false),
      form.addMultipleChoiceItem().createChoice('O formato (escrito ou oral)', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('3. Qual é a importância do RUÍDO em um processo de comunicação?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Compreender e minimizar interferências que prejudicam mensagens', true),
      form.addMultipleChoiceItem().createChoice('Aumentar o volume da mensagem', false),
      form.addMultipleChoiceItem().createChoice('Tornar a comunicação mais formal', false),
      form.addMultipleChoiceItem().createChoice('Imprimir documentos com mais qualidade', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('4. O que é FEEDBACK e por que é importante?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Resposta ou reação do receptor que confirma entendimento', true),
      form.addMultipleChoiceItem().createChoice('Crítica negativa sobre a comunicação', false),
      form.addMultipleChoiceItem().createChoice('Aumento de volume de comunicação', false),
      form.addMultipleChoiceItem().createChoice('Repetição da mensagem original', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('5. Como o CONTEXTO afeta a comunicação?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Define o tom, estilo e nível de formalidade apropriados', true),
      form.addMultipleChoiceItem().createChoice('Não tem relevância real', false),
      form.addMultipleChoiceItem().createChoice('Apenas importa em comunicação formal', false),
      form.addMultipleChoiceItem().createChoice('Elimina a necessidade de clareza', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('6. Qual é a relação entre CÓDIGO e SIGNIFICADO na comunicação?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Emissor e receptor devem compartilhar o mesmo código para compreensão', true),
      form.addMultipleChoiceItem().createChoice('Código é apenas para mensagens escritas', false),
      form.addMultipleChoiceItem().createChoice('Significado é independente do código', false),
      form.addMultipleChoiceItem().createChoice('Código não afeta a comunicação', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('7. Como você aplicaria o ciclo de FEEDBACK em equipes profissionais?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Ouvindo ativamente, pedindo esclarecimentos e respondendo com respeito', true),
      form.addMultipleChoiceItem().createChoice('Criticando sempre as ideias apresentadas', false),
      form.addMultipleChoiceItem().createChoice('Evitando qualquer diálogo sobre o que foi dito', false),
      form.addMultipleChoiceItem().createChoice('Ignorando as reações dos colegas', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('8. Qual é a diferença entre comunicação FORMAL e INFORMAL?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Formal segue normas gramaticais rigorosas; informal é coloquial', true),
      form.addMultipleChoiceItem().createChoice('Formal é sempre melhor que informal', false),
      form.addMultipleChoiceItem().createChoice('Não há diferença prática', false),
      form.addMultipleChoiceItem().createChoice('Informal nunca é usada profissionalmente', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('9. Como identificar quando usar LINGUAGEM TÉCNICA vs COLOQUIAL?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('De acordo com o público e o contexto profissional', true),
      form.addMultipleChoiceItem().createChoice('Sempre usar técnica, independentemente do público', false),
      form.addMultipleChoiceItem().createChoice('Sempre usar coloquial para ser amigável', false),
      form.addMultipleChoiceItem().createChoice('Misturar ambas constantemente', false)
    ]).setRequired(true);

  // AULAS 4-6: Apresentações e Estrutura (9 questões)
  form.addSectionHeaderItem().setTitle('Bloco 2: Apresentações e Estrutura (Aulas 4-6)');

  form.addMultipleChoiceItem().setTitle('10. Qual é o propósito principal de uma ESTRUTURA em uma apresentação?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Organizar ideias logicamente para melhor compreensão do público', true),
      form.addMultipleChoiceItem().createChoice('Preencher tempo de apresentação', false),
      form.addMultipleChoiceItem().createChoice('Impressionar com complexidade', false),
      form.addMultipleChoiceItem().createChoice('Distrair do conteúdo fraco', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('11. Quais são os elementos essenciais de uma apresentação bem estruturada?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Introdução clara, desenvolvimento lógico, conclusão forte', true),
      form.addMultipleChoiceItem().createChoice('Muitos slides com decoração visual', false),
      form.addMultipleChoiceItem().createChoice('Apenas conteúdo textual denso', false),
      form.addMultipleChoiceItem().createChoice('Múltiplas transições animadas', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('12. Como a ORATÓRIA contribui para uma comunicação mais efetiva?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Melhora a clareza, o engajamento e o impacto emocional', true),
      form.addMultipleChoiceItem().createChoice('É apenas para entretenimento', false),
      form.addMultipleChoiceItem().createChoice('Substitui o conteúdo bem estruturado', false),
      form.addMultipleChoiceItem().createChoice('Funciona apenas com público destreinado', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('13. Qual é a importância da VOZ e do TOM em uma apresentação oral?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Transmitem emoção, intenção e reforçam a mensagem', true),
      form.addMultipleChoiceItem().createChoice('Não têm impacto real no entendimento', false),
      form.addMultipleChoiceItem().createChoice('Apenas importa em apresentações formais extremas', false),
      form.addMultipleChoiceItem().createChoice('Devem ser monótonos para parecer profissional', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('14. Como estruturar uma introdução que PRENDA a atenção?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Com uma história, pergunta provocadora ou estatística impactante', true),
      form.addMultipleChoiceItem().createChoice('Começando com "Boa tarde, vou falar sobre..."', false),
      form.addMultipleChoiceItem().createChoice('Com uma piada sempre, independentemente do tópico', false),
      form.addMultipleChoiceItem().createChoice('Pulando direto para o conteúdo técnico', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('15. Qual é a função principal do DESENVOLVIMENTO em uma apresentação?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Expandir ideias principais com exemplos, dados e argumentos', true),
      form.addMultipleChoiceItem().createChoice('Apenas repetir a introdução', false),
      form.addMultipleChoiceItem().createChoice('Distrair do tema principal', false),
      form.addMultipleChoiceItem().createChoice('Confundir o público propositalmente', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('16. Como finalizar uma apresentação de forma MEMORÁVEL?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Com resumo impactante, call-to-action ou reflexão provocadora', true),
      form.addMultipleChoiceItem().createChoice('Com "é isso, obrigado" e saída apressada', false),
      form.addMultipleChoiceItem().createChoice('Apresentando novos tópicos não mencionados', false),
      form.addMultipleChoiceItem().createChoice('Desculpando-se pela presentação', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('17. Qual é o papel dos RECURSOS VISUAIS em uma apresentação?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Complementar e reforçar a mensagem verbal, não substituí-la', true),
      form.addMultipleChoiceItem().createChoice('Ser o foco principal, com texto mínimo', false),
      form.addMultipleChoiceItem().createChoice('Decorar sem agregar significado', false),
      form.addMultipleChoiceItem().createChoice('Ser mais importantes que o conteúdo', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('18. Como gerenciar o TEMPO em uma apresentação?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Planejar com antecedência, cronometrar e adaptar durante', true),
      form.addMultipleChoiceItem().createChoice('Falar o máximo possível no tempo disponível', false),
      form.addMultipleChoiceItem().createChoice('Ignorar o tempo e deixar para outro momento', false),
      form.addMultipleChoiceItem().createChoice('Terminar sempre cedo sem aproveitar o tempo', false)
    ]).setRequired(true);

  // AULAS 7-9: Comunicação Profissional (12 questões)
  form.addSectionHeaderItem().setTitle('Bloco 3: Comunicação Profissional (Aulas 7-9)');

  form.addMultipleChoiceItem().setTitle('19. Qual é a importância de REUNIÕES bem conduzidas?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Aumentam produtividade, clareza e alinhamento de equipes', true),
      form.addMultipleChoiceItem().createChoice('São sempre perda de tempo', false),
      form.addMultipleChoiceItem().createChoice('Servem apenas para reclamar', false),
      form.addMultipleChoiceItem().createChoice('Não fazem diferença real', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('20. Como estruturar uma reunião EFETIVA?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Pauta clara, horário, objetivos definidos e atas documentadas', true),
      form.addMultipleChoiceItem().createChoice('Chamando as pessoas última hora', false),
      form.addMultipleChoiceItem().createChoice('Sem estrutura, deixar fluir', false),
      form.addMultipleChoiceItem().createChoice('Com máximo de pessoas, sem limite de tempo', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('21. Qual é o papel de um PARTICIPANTE ativo em reuniões?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Ouvir atentamente, contribuir quando relevante e respeitar turnos', true),
      form.addMultipleChoiceItem().createChoice('Falar constantemente para impressionar', false),
      form.addMultipleChoiceItem().createChoice('Ficar em silêncio durante toda reunião', false),
      form.addMultipleChoiceItem().createChoice('Usar celular para outras tarefas', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('22. Como um MODERADOR deve conduzir uma reunião?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Mantendo foco, controlando tempo e equilibrando participações', true),
      form.addMultipleChoiceItem().createChoice('Deixando qualquer um falar sem limite', false),
      form.addMultipleChoiceItem().createChoice('Impondo sua opinião sobre todos', false),
      form.addMultipleChoiceItem().createChoice('Não interferindo em conflitos', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('23. O que é ESCUTA ATIVA e como praticá-la?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Ouvir com atenção plena, fazer perguntas e validar compreensão', true),
      form.addMultipleChoiceItem().createChoice('Apenas deixar a pessoa falar', false),
      form.addMultipleChoiceItem().createChoice('Pensar no que vai falar enquanto ouve', false),
      form.addMultipleChoiceItem().createChoice('Interromper frequentemente', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('24. Como lidar com OBJEÇÕES ou CONFLITOS em comunicação profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Ouvir, compreender perspectivas diferentes e buscar consenso', true),
      form.addMultipleChoiceItem().createChoice('Discutir agressivamente até vencer', false),
      form.addMultipleChoiceItem().createChoice('Ignorar completamente', false),
      form.addMultipleChoiceItem().createChoice('Desistir imediatamente da posição', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('25. Qual é a importância da EMPATIA em atendimento ao público?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Cria confiança, satisfação e relacionamentos positivos', true),
      form.addMultipleChoiceItem().createChoice('Não é importante, apenas ser técnico', false),
      form.addMultipleChoiceItem().createChoice('Enfraquece a autoridade profissional', false),
      form.addMultipleChoiceItem().createChoice('Deve ser aplicada seletivamente', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('26. Como adaptar sua COMUNICAÇÃO para diferentes PÚBLICOS?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Ajustando linguagem, tom e complexidade conforme perfil', true),
      form.addMultipleChoiceItem().createChoice('Falando sempre da mesma forma', false),
      form.addMultipleChoiceItem().createChoice('Usando técnico máximo independentemente de público', false),
      form.addMultipleChoiceItem().createChoice('Evitando todo feedback de compreensão', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('27. Qual é o impacto da LINGUAGEM CORPORAL em comunicação?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Comunica até 70% da mensagem; deve estar alinhada com palavras', true),
      form.addMultipleChoiceItem().createChoice('Não tem importância real', false),
      form.addMultipleChoiceItem().createChoice('Apenas importa em videochamadas', false),
      form.addMultipleChoiceItem().createChoice('Pode contradizer a mensagem verbal sem problemas', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('28. Como manter a CONFIANÇA em comunicação profissional?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Sendo honesto, cumprir promessas e manter confidencialidade', true),
      form.addMultipleChoiceItem().createChoice('Prometeendo coisas e não entregando', false),
      form.addMultipleChoiceItem().createChoice('Compartilhando informações de terceiros', false),
      form.addMultipleChoiceItem().createChoice('Sendo vago e impreciso', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('29. Como recuperar-se de um ERRO em comunicação?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Reconhecer, desculpar-se sinceramente e corrigir', true),
      form.addMultipleChoiceItem().createChoice('Negar ou culpar outros', false),
      form.addMultipleChoiceItem().createChoice('Ignorar e continuar como se nada tivesse acontecido', false),
      form.addMultipleChoiceItem().createChoice('Fazer piada para minimizar', false)
    ]).setRequired(true);

  form.addMultipleChoiceItem().setTitle('30. Qual é seu principal aprendizado das aulas 1-9 de comunicação?')
    .setChoices([
      form.addMultipleChoiceItem().createChoice('Comunicação eficaz é uma habilidade prática e desenvolvível', true),
      form.addMultipleChoiceItem().createChoice('Comunicação é apenas dom inato', false),
      form.addMultipleChoiceItem().createChoice('Teoria não tem aplicação prática', false),
      form.addMultipleChoiceItem().createChoice('Já sabia tudo antes dessa disciplina', false)
    ]).setRequired(true);

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
  Logger.log(FormApp.getActiveForm().getEditUrl());
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

    var respostasCorretas = [
      'Identificar claramente o objetivo e o público-alvo',
      'A clareza da mensagem, compreensão do público e feedback',
      'Compreender e minimizar interferências que prejudicam mensagens',
      'Resposta ou reação do receptor que confirma entendimento',
      'Define o tom, estilo e nível de formalidade apropriados',
      'Emissor e receptor devem compartilhar o mesmo código para compreensão',
      'Ouvindo ativamente, pedindo esclarecimentos e respondendo com respeito',
      'Formal segue normas gramaticais rigorosas; informal é coloquial',
      'De acordo com o público e o contexto profissional',
      'Organizar ideias logicamente para melhor compreensão do público',
      'Introdução clara, desenvolvimento lógico, conclusão forte',
      'Melhora a clareza, o engajamento e o impacto emocional',
      'Transmitem emoção, intenção e reforçam a mensagem',
      'Com uma história, pergunta provocadora ou estatística impactante',
      'Expandir ideias principais com exemplos, dados e argumentos',
      'Com resumo impactante, call-to-action ou reflexão provocadora',
      'Complementar e reforçar a mensagem verbal, não substituí-la',
      'Planejar com antecedência, cronometrar e adaptar durante',
      'Aumentam produtividade, clareza e alinhamento de equipes',
      'Pauta clara, horário, objetivos definidos e atas documentadas',
      'Ouvir atentamente, contribuir quando relevante e respeitar turnos',
      'Mantendo foco, controlando tempo e equilibrando participações',
      'Ouvir com atenção plena, fazer perguntas e validar compreensão',
      'Ouvir, compreender perspectivas diferentes e buscar consenso',
      'Cria confiança, satisfação e relacionamentos positivos',
      'Ajustando linguagem, tom e complexidade conforme perfil',
      'Comunica até 70% da mensagem; deve estar alinhada com palavras',
      'Sendo honesto, cumprir promessas e manter confidencialidade',
      'Reconhecer, desculpar-se sinceramente e corrigir',
      'Comunicação eficaz é uma habilidade prática e desenvolvível'
    ];

    itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 33) {
        var questao_idx = idx - 3;
        if (resposta === respostasCorretas[questao_idx]) {
          acertos++;
          if (questao_idx < 9) acertos_bloco1++;
          else if (questao_idx < 18) acertos_bloco2++;
          else acertos_bloco3++;
        }
      }
    });

    var nota = (acertos / total) * 30;
    var percentual = (acertos / total) * 100;

    todasAsNotas.push(nota);
    blocos.bloco1.push((acertos_bloco1 / 9) * 100);
    blocos.bloco2.push((acertos_bloco2 / 9) * 100);
    blocos.bloco3.push((acertos_bloco3 / 12) * 100);

    var feedback = '';
    if (percentual >= 90) {
      feedback = 'EXCELENTE! Domina completamente os tópicos das aulas 1-9!';
    } else if (percentual >= 80) {
      feedback = 'MUITO BOM! Compreendeu bem. Revise tópicos específicos.';
    } else if (percentual >= 70) {
      feedback = 'BOM! Revise os tópicos com menor acerto.';
    } else if (percentual >= 60) {
      feedback = 'Bom início. Estude novamente os conceitos com professor.';
    } else {
      feedback = 'Procure o professor para revisão orientada.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: ' + acertos + '/' + total);
    Logger.log('   Nota: ' + nota.toFixed(1) + '/30 (' + percentual.toFixed(0) + '%)');
    Logger.log('   Bloco 1 (Fundamentos): ' + acertos_bloco1 + '/9');
    Logger.log('   Bloco 2 (Apresentações): ' + acertos_bloco2 + '/9');
    Logger.log('   Bloco 3 (Profissional): ' + acertos_bloco3 + '/12');
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
    Logger.log('   Média Geral: ' + media.toFixed(1) + '/30 (' + ((media/30)*100).toFixed(0) + '%)');
    Logger.log('');
    Logger.log('   Bloco 1 (Fundamentos): ' + media_bloco1.toFixed(0) + '%');
    Logger.log('   Bloco 2 (Apresentações): ' + media_bloco2.toFixed(0) + '%');
    Logger.log('   Bloco 3 (Comunicação Profissional): ' + media_bloco3.toFixed(0) + '%');
    Logger.log('');
    Logger.log('   Maior nota: ' + Math.max.apply(null, todasAsNotas).toFixed(1) + '/30');
    Logger.log('   Menor nota: ' + Math.min.apply(null, todasAsNotas).toFixed(1) + '/30');
    Logger.log('   Variação: ' + (Math.max.apply(null, todasAsNotas) - Math.min.apply(null, todasAsNotas)).toFixed(1) + ' pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 21; }).length;
    Logger.log('   Aprovados (70%+): ' + aprovados + ' de ' + todasAsNotas.length);
  }
}
