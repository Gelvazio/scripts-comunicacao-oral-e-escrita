// ===== 13-Aula13-Etiqueta-Digital.gs =====
// Funcao: criarFormularioAula13()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula13() {
  var form = FormApp.create('Avaliação — Aula 13 · Etiqueta Digital e Netiqueta Convivência e postura ética no ambiente virtual · SENAI');

  form.setDescription( 'Avaliação Completa: Etiqueta Digital e Netiqueta Convivência e postura ética no ambiente virtual\n\nAula 13 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Etiqueta Digital e Netiqueta Convivência e postura ética no ambiente virtual');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. Qual conceito a aula define como: "contexto é tudo. Conheça seu público antes de usar elementos visuais descontraídos"?');
  q1.setChoices([
    q1.createChoice('Netiqueta', false),
    q1.createChoice('Impacto', false),
    q1.createChoice('Desvio ético', false),
    q1.createChoice('A regra de ouro é', true)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Segundo a aula, o que é "Lição"?');
  q2.setChoices([
    q2.createChoice('Clima tóxico, ressentimento e desagregação do grupo', false),
    q2.createChoice('Confidencialidade é direito e dever inegociável', true),
    q2.createChoice('a maneira como tratamos os outros e compartilhamos dados alheios define nossa cidadania online', false),
    q2.createChoice('contexto é tudo. Conheça seu público antes de usar elementos visuais descontraídos', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Segundo a aula, o que é "Etiqueta"?');
  q3.setChoices([
    q3.createChoice('Letras maiúsculas, pontuação exagerada e emojis fora de hora alteram drasticamente o sentido da sua fala', false),
    q3.createChoice('Posturas preconceituosas ou difamações em perfis abertos impactam seleções de estágio e emprego', false),
    q3.createChoice('Convenções sociais de respeito mútuo', true),
    q3.createChoice('Respeite horários de descanso, preserve dados de terceiros e evite expor erros dos colegas em público', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Qual conceito a aula define como: "Respeite horários de descanso, preserve dados de terceiros e evite expor erros dos colegas em público"?');
  q4.setChoices([
    q4.createChoice('Em chats de equipes', false),
    q4.createChoice('Pratique a comunicação assíncrona respeitosa', false),
    q4.createChoice('Proteja a privacidade coletiva', true),
    q4.createChoice('Etiqueta', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Qual conceito a aula define como: "Letras maiúsculas, pontuação exagerada e emojis fora de hora alteram drasticamente o sentido da sua fala"?');
  q5.setChoices([
    q5.createChoice('Convivência', false),
    q5.createChoice('O formato comunica intenção', true),
    q5.createChoice('A regra de ouro é', false),
    q5.createChoice('Vestimenta adequada', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Recapitulando: Segurança e Privacidade"?');
  q6.setChoices([
    q6.createChoice('A reputação construída ao longo de anos pode ser desfeita por uma postagem imprudente de poucos segundos', false),
    q6.createChoice('O espaço ao nosso redor transmite mensagens sobre nosso compromisso com o encontro', false),
    q6.createChoice('O phishing utiliza mensagens fraudulentas com tom de urgência para induzir o usuário ao erro e roubar credenciais confidenciais', false),
    q6.createChoice('Na aula anterior, aprendemos que nossa pegada digital exige cautela permanente. Proteger dados pessoais, criar senhas robustas e não compartilhar informações...', true)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. De acordo com a aula, o que caracteriza "Comparando Estilos de Escrita"?');
  q7.setChoices([
    q7.createChoice('Preserva o respeito, estabelece clareza e facilita a colaboração voluntária', true),
    q7.createChoice('Pratique a comunicação assíncrona respeitosa: envie dentro do período comercial ou deixe claro que a resposta pode aguardar o dia seguinte', false),
    q7.createChoice('Ordene os passos recomendados ao lidar com uma mensagem que pareceu rude em um grupo de trabalho escolar', false),
    q7.createChoice('Impressão e emoção transmitidas por pontuação e escolha de palavras', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Segundo a aula, o que é "Mas segurança técnica não basta"?');
  q8.setChoices([
    q8.createChoice('Exposição pública humilhante do erro alheio', false),
    q8.createChoice('Coabitar pacificamente espaços comuns', false),
    q8.createChoice('a maneira como tratamos os outros e compartilhamos dados alheios define nossa cidadania online', true),
    q8.createChoice('Letras maiúsculas, pontuação exagerada e emojis fora de hora alteram drasticamente o sentido da sua fala', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Segundo a aula, o que é "Desvio ético"?');
  q9.setChoices([
    q9.createChoice('Suspensão disciplinar e possibilidade de processo por danos morais na justiça comum', false),
    q9.createChoice('Exposição pública humilhante do erro alheio', true),
    q9.createChoice('contexto é tudo. Conheça seu público antes de usar elementos visuais descontraídos', false),
    q9.createChoice('Uma piada privada sobre um professor feita em um aplicativo de mensagens é printada e postada nos Stories públicos de outra rede social', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Segundo a aula, o que é "Plano de fundo"?');
  q10.setChoices([
    q10.createChoice('Respeite horários de descanso, preserve dados de terceiros e evite expor erros dos colegas em público', false),
    q10.createChoice('Atitude ética e responsabilidade ativa', false),
    q10.createChoice('Prefira paredes neutras ou use fundos desfocados para resguardar sua privacidade familiar', true),
    q10.createChoice('Confidencialidade é direito e dever inegociável', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Verificação de Postura em Vídeo"?');
  q11.setChoices([
    q11.createChoice('Alguns gestos e emojis têm significados diferentes dependendo da faixa etária e cultura corporativa', false),
    q11.createChoice('Valorize o tempo alheio sem exigir respostas imediatas fora do expediente ou das aulas', false),
    q11.createChoice('Verificar o remetente oficial e jamais clicar em links com tom de urgência imediata', false),
    q11.createChoice('Durante uma aula online com 30 colegas, manter o microfone sempre aberto facilita a participação espontânea de todos', true)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Segundo a aula, o que é "Netiqueta"?');
  q12.setChoices([
    q12.createChoice('Respeite horários de descanso, preserve dados de terceiros e evite expor erros dos colegas em público', false),
    q12.createChoice('Boas maneiras e respeito na internet', true),
    q12.createChoice('Prefira paredes neutras ou use fundos desfocados para resguardar sua privacidade familiar', false),
    q12.createChoice('Exposição pública humilhante do erro alheio', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "A Visão de um Especialista"?');
  q13.setChoices([
    q13.createChoice('Essa máxima pioneira formulada nos primórdios da internet permanece como a regra de convivência mais atual e essencial para todos nós', true),
    q13.createChoice('Alguns gestos e emojis têm significados diferentes dependendo da faixa etária e cultura corporativa', false),
    q13.createChoice('Preserva o respeito, estabelece clareza e facilita a colaboração voluntária', false),
    q13.createChoice('Desative notificações de grupos não essenciais enquanto realiza leituras ou tarefas que exigem concentração profunda', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Qual conceito a aula define como: "Um emoji pontual de positivo (👍) ou sorriso confirma leitura sem gerar ruído"?');
  q14.setChoices([
    q14.createChoice('Pratique a comunicação assíncrona respeitosa', false),
    q14.createChoice('Convivência', false),
    q14.createChoice('O formato comunica intenção', false),
    q14.createChoice('Em chats de equipes', true)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Segundo a aula, o que é "Cenário"?');
  q15.setChoices([
    q15.createChoice('Prefira paredes neutras ou use fundos desfocados para resguardar sua privacidade familiar', false),
    q15.createChoice('Uma piada privada sobre um professor feita em um aplicativo de mensagens é printada e postada nos Stories públicos de outra rede social', true),
    q15.createChoice('a maneira como tratamos os outros e compartilhamos dados alheios define nossa cidadania online', false),
    q15.createChoice('Vista-se de maneira condizente com a aula ou trabalho, evitando roupas inadequadas', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "Tom de Voz Escrito"?');
  q16.setChoices([
    q16.createChoice('Impressão e emoção transmitidas por pontuação e escolha de palavras', true),
    q16.createChoice('A reputação construída ao longo de anos pode ser desfeita por uma postagem imprudente de poucos segundos', false),
    q16.createChoice('Para celebrar conquistas de equipe, demonstrar acolhimento ou confirmar recebimento rápido de tarefa', false),
    q16.createChoice('Valorize o tempo alheio sem exigir respostas imediatas fora do expediente ou das aulas', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Pilares das Relações Virtuais"?');
  q17.setChoices([
    q17.createChoice('Durante uma aula online com 30 colegas, manter o microfone sempre aberto facilita a participação espontânea de todos', false),
    q17.createChoice('Pratique a comunicação assíncrona respeitosa: envie dentro do período comercial ou deixe claro que a resposta pode aguardar o dia seguinte', false),
    q17.createChoice('Ordene os passos recomendados ao lidar com uma mensagem que pareceu rude em um grupo de trabalho escolar', false),
    q17.createChoice('Lembre-se de que há um ser humano real do outro lado da tela, com sentimentos e limitações', true)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "Canais Estruturados (E-mail)"?');
  q18.setChoices([
    q18.createChoice('Desative notificações de grupos não essenciais enquanto realiza leituras ou tarefas que exigem concentração profunda', false),
    q18.createChoice('Adequados para arquivos formais, relatórios ou solicitações complexas', true),
    q18.createChoice('Para celebrar conquistas de equipe, demonstrar acolhimento ou confirmar recebimento rápido de tarefa', false),
    q18.createChoice('Vazamentos de conversas quebram a confiança e geram repercussão pública', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Segundo a aula, o que é "Pratique a comunicação assíncrona respeitosa"?');
  q19.setChoices([
    q19.createChoice('envie dentro do período comercial ou deixe claro que a resposta pode aguardar o dia seguinte', true),
    q19.createChoice('Exposição pública humilhante do erro alheio', false),
    q19.createChoice('a maneira como tratamos os outros e compartilhamos dados alheios define nossa cidadania online', false),
    q19.createChoice('Suspensão disciplinar e possibilidade de processo por danos morais na justiça comum', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "Quando Evitar"?');
  q20.setChoices([
    q20.createChoice('Em conversas sobre temas delicados, críticas construtivas ou reclamações sérias de serviço', true),
    q20.createChoice('Ao receber uma advertência formal do coordenador escolar ou gestor sobre prazos', false),
    q20.createChoice('Pratique a netiqueta diariamente e construa uma presença online ética, respeitosa e admirável!', false),
    q20.createChoice('Adequados para arquivos formais, relatórios ou solicitações complexas', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  Logger.log('✅ AULA 13 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 13 — Etiqueta Digital e Netiqueta Convivência e postura ética no ambiente virtual');
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
  var form = FormApp.openByTitle('Avaliação — Aula 13 · Etiqueta Digital e Netiqueta Convivência e postura ética no ambiente virtual · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 13: Etiqueta Digital e Netiqueta Convivência e postura ética no ambiente virtual');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Etiqueta Digital e Netiqueta Convivência e postura ética no ambiente virtual', 'É um conceito importante apresentado na aula', 'O peso das palavras na tela', 'É um conceito importante apresentado na aula', 'Objetivos da Nossa Aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Boas maneiras e respeito na internet.', 'Convenções sociais de respeito mútuo.', 'Coabitar pacificamente espaços comuns.', 'Atitude ética e responsabilidade ativa.', 'Segurança e Privacidade', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 14
// ════════════════════════════════════════════════════════════
