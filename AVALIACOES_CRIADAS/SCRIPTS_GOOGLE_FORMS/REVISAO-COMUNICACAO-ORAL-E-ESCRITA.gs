/**
 * REVISAO-COMUNICACAO-ORAL-E-ESCRITA.gs
 * Quiz de Revisão: Aulas 1 a 9
 * 30 questões | 30 pontos | Nota automática | Cobertura Integrada
 *
 * INSTRUÇÕES:
 * 1. Acesse https://script.google.com
 * 2. Crie novo projeto e cole este código
 * 3. Execute a função: criarQuizRevisao()
 * 4. O formulário será criado automaticamente no seu Drive
 * 5. Copie o link e compartilhe com os alunos
 *
 * Parte da disciplina: Introdução à Comunicação Oral e Escrita
 * Cobertura: Aulas 1 a 9 (Revisão integrada)
 * Objetivo: Consolidar aprendizado dos primeiros módulos
 */

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
