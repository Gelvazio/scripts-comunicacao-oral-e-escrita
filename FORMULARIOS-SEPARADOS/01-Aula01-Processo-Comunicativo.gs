// ===== 01-Aula01-Processo-Comunicativo.gs =====
// Funcao: criarFormularioAula01()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula01() {
  var form = FormApp.create('Avaliação — Aula 01 · Processo Comunicativo · SENAI');

  form.setDescription( 'Avaliação Completa: Processo Comunicativo\n\nAula 01 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Processo Comunicativo');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. Segundo a aula, o que é "Eficiência"?');
  q1.setChoices([
    q1.createChoice('Projetos complexos exigem alinhamento constante entre setores', false),
    q1.createChoice('E-mails objetivos evitam retrabalho e desperdício de tempo', true),
    q1.createChoice('Ajuste o vocabulário e o tom ao contexto social e ao interlocutor', false),
    q1.createChoice('o receptor precisa interpretar os sinais com atenção para reconstruir o sentido original da mensagem', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "O Modelo Geral do Processo"?');
  q2.setChoices([
    q2.createChoice('Ao longo desta disciplina, você aprenderá a se expressar com clareza, segurança e ética no colégio e na futura vida profissional', false),
    q2.createChoice('Gestos involuntários, suspiros e olhares para o relógio que revelam tédio ou nervosismo sem querer', false),
    q2.createChoice('Toda comunicação humana estrutura-se pela interação coordenada de elementos essenciais', true),
    q2.createChoice('Expressar sentimentos, negociar tarefas e resolver atritos em casa e com amigos', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "O Emissor: A Origem"?');
  q3.setChoices([
    q3.createChoice('O emissor traduz sua ideia em palavras, sinais ou imagens compreensíveis', false),
    q3.createChoice('Expressar sentimentos, negociar tarefas e resolver atritos em casa e com amigos', false),
    q3.createChoice('Folha de papel impressa, cabos de internet, sinais de rádio, aplicativos e telefonia', false),
    q3.createChoice('Ele é responsável por selecionar as palavras certas, organizar o pensamento e adequar a linguagem à pessoa que vai ouvi-lo', true)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Cooperação"?');
  q4.setChoices([
    q4.createChoice('Projetos complexos exigem alinhamento constante entre setores', true),
    q4.createChoice('Não propagar informações falsas ou dados distorcidos', false),
    q4.createChoice('o receptor precisa interpretar os sinais com atenção para reconstruir o sentido original da mensagem', false),
    q4.createChoice('médico; Receptor: paciente; Código: termos acessíveis; Canal: ar e receita impressa', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "Pontuação Falha"?');
  q5.setChoices([
    q5.createChoice('A falta de uma vírgula pode alterar radicalmente ordens e avisos contratuais', true),
    q5.createChoice('Usar siglas técnicas com quem não é da área isola o receptor e paralisa decisões', false),
    q5.createChoice('O contexto (ou referente) é a situação real que envolve a conversa: o lugar, o momento histórico e as relações sociais entre os participantes', false),
    q5.createChoice('Folha de papel impressa, cabos de internet, sinais de rádio, aplicativos e telefonia', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Segundo a aula, o que é "Clareza"?');
  q6.setChoices([
    q6.createChoice('Escolha palavras simples e diretas, eliminando rodeios desnecessários', true),
    q6.createChoice('médico; Receptor: paciente; Código: termos acessíveis; Canal: ar e receita impressa', false),
    q6.createChoice('E-mails objetivos evitam retrabalho e desperdício de tempo', false),
    q6.createChoice('Rejeitar agressões verbais, ironias cruéis e ofensas preconceituosas', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. De acordo com a aula, o que caracteriza "Comunicação no Trabalho"?');
  q7.setChoices([
    q7.createChoice('Focar apenas na própria resposta antes de ouvir o que a outra pessoa tem a dizer', false),
    q7.createChoice('Empresas e equipes dependem de informações precisas para operar com segurança e produtividade', true),
    q7.createChoice('Gestos involuntários, suspiros e olhares para o relógio que revelam tédio ou nervosismo sem querer', false),
    q7.createChoice('Expressar sentimentos, negociar tarefas e resolver atritos em casa e com amigos', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Qual conceito a aula define como: "o receptor precisa interpretar os sinais com atenção para reconstruir o sentido original da mensagem"?');
  q8.setChoices([
    q8.createChoice('Cooperação', false),
    q8.createChoice('Eficiência', false),
    q8.createChoice('Respeito', false),
    q8.createChoice('Ouvir passivamente não é suficiente', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Canais Tecnológicos"?');
  q9.setChoices([
    q9.createChoice('Folha de papel impressa, cabos de internet, sinais de rádio, aplicativos e telefonia', true),
    q9.createChoice('Usar siglas técnicas com quem não é da área isola o receptor e paralisa decisões', false),
    q9.createChoice('A falta de uma vírgula pode alterar radicalmente ordens e avisos contratuais', false),
    q9.createChoice('Empresas e equipes dependem de informações precisas para operar com segurança e produtividade', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Segundo a aula, o que é "Adequação"?');
  q10.setChoices([
    q10.createChoice('Proteger conversas confidenciais e dados pessoais alheios', false),
    q10.createChoice('Projetos complexos exigem alinhamento constante entre setores', false),
    q10.createChoice('Ajuste o vocabulário e o tom ao contexto social e ao interlocutor', true),
    q10.createChoice('Preste atenção genuína ao feedback recebido para validar o entendimento', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "A Mensagem: O Conteúdo"?');
  q11.setChoices([
    q11.createChoice('A mensagem é o objeto concreto da transmissão: o conjunto de ideias, sentimentos, instruções ou dados enviados', true),
    q11.createChoice('A falta de uma vírgula pode alterar radicalmente ordens e avisos contratuais', false),
    q11.createChoice('Quem tem empatia não presume que o outro sabe tudo o que ele sabe. Explica com paciência, escolhe termos acessíveis e confere se foi compreendido', false),
    q11.createChoice('Folha de papel impressa, cabos de internet, sinais de rádio, aplicativos e telefonia', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "O Poder da Empatia"?');
  q12.setChoices([
    q12.createChoice('Folha de papel impressa, cabos de internet, sinais de rádio, aplicativos e telefonia', false),
    q12.createChoice('Quem tem empatia não presume que o outro sabe tudo o que ele sabe. Explica com paciência, escolhe termos acessíveis e confere se foi compreendido', true),
    q12.createChoice('A falta de uma vírgula pode alterar radicalmente ordens e avisos contratuais', false),
    q12.createChoice('Expressar sentimentos, negociar tarefas e resolver atritos em casa e com amigos', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. Segundo a aula, o que é "Segurança"?');
  q13.setChoices([
    q13.createChoice('médico; Receptor: paciente; Código: termos acessíveis; Canal: ar e receita impressa', false),
    q13.createChoice('o receptor precisa interpretar os sinais com atenção para reconstruir o sentido original da mensagem', false),
    q13.createChoice('Uma instrução técnica confusa pode causar acidentes graves', true),
    q13.createChoice('Projetos complexos exigem alinhamento constante entre setores', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Tipos de Ruído e Barreiras"?');
  q14.setChoices([
    q14.createChoice('O comunicador habilidoso avalia constantemente o ambiente físico, o grau de intimidade e a hierarquia social antes de escolher suas expressões', false),
    q14.createChoice('O receptor (ou interlocutor) capta os sinais transmitidos e realiza a decodificação da mensagem', false),
    q14.createChoice('Termos técnicos desconhecidos, gírias regionais e ambiguidades gramaticais', true),
    q14.createChoice('Uma piada descontraída que funciona perfeitamente no recreio pode ser considerada desrespeitosa durante uma entrevista de trabalho formal', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Segundo a aula, o que é "Emissor"?');
  q15.setChoices([
    q15.createChoice('E-mails objetivos evitam retrabalho e desperdício de tempo', false),
    q15.createChoice('Não propagar informações falsas ou dados distorcidos', false),
    q15.createChoice('médico; Receptor: paciente; Código: termos acessíveis; Canal: ar e receita impressa', true),
    q15.createChoice('Preste atenção genuína ao feedback recebido para validar o entendimento', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "Comunicação no Dia a Dia"?');
  q16.setChoices([
    q16.createChoice('Folha de papel impressa, cabos de internet, sinais de rádio, aplicativos e telefonia', false),
    q16.createChoice('Empresas e equipes dependem de informações precisas para operar com segurança e produtividade', false),
    q16.createChoice('Toda comunicação humana estrutura-se pela interação coordenada de elementos essenciais', false),
    q16.createChoice('Expressar sentimentos, negociar tarefas e resolver atritos em casa e com amigos', true)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Bem-vindos ao Curso!"?');
  q17.setChoices([
    q17.createChoice('Folha de papel impressa, cabos de internet, sinais de rádio, aplicativos e telefonia', false),
    q17.createChoice('É por meio do feedback que o emissor verifica se a mensagem foi decodificada corretamente ou se precisa corrigir ruídos e reformular explicações', false),
    q17.createChoice('Ao longo desta disciplina, você aprenderá a se expressar com clareza, segurança e ética no colégio e na futura vida profissional', true),
    q17.createChoice('O contexto (ou referente) é a situação real que envolve a conversa: o lugar, o momento histórico e as relações sociais entre os participantes', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Respeito"?');
  q18.setChoices([
    q18.createChoice('Proteger conversas confidenciais e dados pessoais alheios', false),
    q18.createChoice('Uma instrução técnica confusa pode causar acidentes graves', false),
    q18.createChoice('Rejeitar agressões verbais, ironias cruéis e ofensas preconceituosas', true),
    q18.createChoice('Projetos complexos exigem alinhamento constante entre setores', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "O Ambiente Determina o Tom"?');
  q19.setChoices([
    q19.createChoice('Termos técnicos desconhecidos, gírias regionais e ambiguidades gramaticais', false),
    q19.createChoice('Uma piada descontraída que funciona perfeitamente no recreio pode ser considerada desrespeitosa durante uma entrevista de trabalho formal', true),
    q19.createChoice('Empresas e equipes dependem de informações precisas para operar com segurança e produtividade', false),
    q19.createChoice('Ele não se limita a barulho de trânsito ou música alta: pode ser letra ilegível, conexão lenta, desatenção mental ou palavras com duplo sentido', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Segundo a aula, o que é "Veracidade"?');
  q20.setChoices([
    q20.createChoice('Uma instrução técnica confusa pode causar acidentes graves', false),
    q20.createChoice('Não propagar informações falsas ou dados distorcidos', true),
    q20.createChoice('Projetos complexos exigem alinhamento constante entre setores', false),
    q20.createChoice('Preste atenção genuína ao feedback recebido para validar o entendimento', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



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

    var respostasCorretas = [ 'Processo Comunicativo', 'Processo Comunicativo', 'É um conceito importante apresentado na aula', 'Por que nos desentendemos?', 'É um conceito importante apresentado na aula', 'Objetivos da Aula de Hoje', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'é um conjunto de técnicas treináveis que transformam oportunidades. Ao longo desta disciplina, você ', 'A Origem', 'O Destino', 'O Conteúdo', 'o conjunto de ideias, sentimentos, instruções ou dados enviados. Para ser eficaz, ela precisa ter co', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 02
// ════════════════════════════════════════════════════════════
