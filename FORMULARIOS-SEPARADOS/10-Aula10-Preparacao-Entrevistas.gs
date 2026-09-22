// ===== 10-Aula10-Preparacao-Entrevistas.gs =====
// Aula real (sequencia do curso): Aula 10 - Preparacao-Entrevistas
// Funcao interna (numeracao original do Google Forms): criarFormularioAula02()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula02() {
  var form = FormApp.create('Avaliação — Aula 10 · Preparação para Entrevistas Comunicação oral estratégica e postura profissional · SENAI');

  form.setDescription( 'Avaliação Completa: Preparação para Entrevistas Comunicação oral estratégica e postura profissional\n\nAula 10 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  // setLimitOneResponsePerUser removido: exigia login Google; controle de uso unico ja e feito pelo codigo de acesso na planilha
  form.setConfirmationMessage('✅ Resposta enviada! Sua pontuação aparece logo acima, nesta mesma tela.');

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

  Logger.log('✅ Aula 10 criada com sucesso!');
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
  var form = FormApp.openByTitle('Avaliação — Aula 10 · Preparação para Entrevistas Comunicação oral estratégica e postura profissional · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 10: Preparação para Entrevistas Comunicação oral estratégica e postura profissional');
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
