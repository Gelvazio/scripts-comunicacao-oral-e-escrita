// ===== 02-Aula02-Comunicacao-Eficaz.gs =====
// Aula real (sequencia do curso): Aula 02 - Comunicacao-Eficaz
// Funcao interna (numeracao original do Google Forms): criarFormularioAula12()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula12() {
  var form = FormApp.create('Avaliação — Aula 02 · Comunicação Eficaz Como transformar ideias em mensagens claras, precisas e compreensíveis · SENAI');

  form.setDescription( 'Avaliação Completa: Comunicação Eficaz Como transformar ideias em mensagens claras, precisas e compreensíveis\n\nAula 02 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Comunicação Eficaz Como transformar ideias em mensagens claras, precisas e compreensíveis');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Registro Informal"?');
  q1.setChoices([
    q1.createChoice('Falar ou escrever muito não garante entendimento. Comunicar com eficácia significa assegurar que a intenção original chegue intacta ao interlocutor', false),
    q1.createChoice('Usado entre pares, familiares e colegas de equipe em conversas cotidianas. Aceita coloquialismo sem perder clareza', true),
    q1.createChoice('O ruído representa qualquer interferência no canal ou código que distorça essa transmissão. Uma comunicação verdadeiramente eficaz neutraliza o ruído antes que ele...', false),
    q1.createChoice('Orações no gerúndio ou particípio sem sujeito expresso criam dependências dúbias na oração principal', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Desgaste da Confiança"?');
  q2.setChoices([
    q2.createChoice('Escrever bem exige cortar o excesso. O primeiro rascunho serve para colocar as ideias no papel; a segunda leitura serve para lapidar o vocabulário e a estrutura', false),
    q2.createChoice('A ambiguidade estrutural nasce da posição inadequada de pronomes, termos modificadores ou adjuntos na frase', false),
    q2.createChoice('Mensagens ambíguas geram frustração mútua e acusações entre setores da equipe', true),
    q2.createChoice('Uso de termos exatos que não deixam margem para interpretações opostas ou duvidosas', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Segundo a aula, o que é "Objetividade"?');
  q3.setChoices([
    q3.createChoice('Harmonia lógica e integridade estrutural das ideias', false),
    q3.createChoice('Transmissão do máximo de ideias com o mínimo de termos', false),
    q3.createChoice('Ausência de obscuridade; mensagem sem margem a dúvidas', false),
    q3.createChoice('Foco direto no propósito sem rodeios desnecessários', true)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Clareza"?');
  q4.setChoices([
    q4.createChoice('Foco direto no propósito sem rodeios desnecessários', false),
    q4.createChoice('Harmonia lógica e integridade estrutural das ideias', false),
    q4.createChoice('Ausência de obscuridade; mensagem sem margem a dúvidas', true),
    q4.createChoice('Transmissão do máximo de ideias com o mínimo de termos', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "Validando a Compreensão"?');
  q5.setChoices([
    q5.createChoice('Emissores eficazes utilizam perguntas de checagem e solicitam paráfrases amigáveis antes de encerrar o contato', true),
    q5.createChoice('Ser conciso não significa ser telegráfico ou grosseiro. Trata-se de eliminar redundâncias e rodeios vazios para valorizar o tempo do leitor', false),
    q5.createChoice('A pontuação organiza a respiração mental do leitor e estrutura as relações lógicas da sentença', false),
    q5.createChoice('Orações no gerúndio ou particípio sem sujeito expresso criam dependências dúbias na oração principal', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Retomada: O Processo Comunicativo"?');
  q6.setChoices([
    q6.createChoice('O ruído representa qualquer interferência no canal ou código que distorça essa transmissão. Uma comunicação verdadeiramente eficaz neutraliza o ruído antes que ele...', true),
    q6.createChoice('Falta de clareza sobre quem é o responsável pela entrega causa paralisia operacional', false),
    q6.createChoice('A ambiguidade ocorre quando uma palavra, oração ou frase permite mais de um sentido legítimo dentro do mesmo contexto', false),
    q6.createChoice('Usado entre pares, familiares e colegas de equipe em conversas cotidianas. Aceita coloquialismo sem perder clareza', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. De acordo com a aula, o que caracteriza "CONCEITO-CHAVE"?');
  q7.setChoices([
    q7.createChoice('Como transformar ideias em mensagens claras, precisas e compreensíveis', false),
    q7.createChoice('Falta de clareza sobre quem é o responsável pela entrega causa paralisia operacional', false),
    q7.createChoice('Empregado em documentos oficiais, relações com clientes e relatórios acadêmicos. Exige norma-padrão rigorosa', false),
    q7.createChoice('Na literatura, a ambiguidade pode ser um recurso poético expressivo. No entanto, na redação escolar, profissional e técnica, ela representa uma falha crítica que...', true)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Segundo a aula, o que é "Concisão"?');
  q8.setChoices([
    q8.createChoice('Ausência de obscuridade; mensagem sem margem a dúvidas', false),
    q8.createChoice('Harmonia lógica e integridade estrutural das ideias', false),
    q8.createChoice('Foco direto no propósito sem rodeios desnecessários', false),
    q8.createChoice('Transmissão do máximo de ideias com o mínimo de termos', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "O Custo de um Mal-entendido"?');
  q9.setChoices([
    q9.createChoice('A pontuação organiza a respiração mental do leitor e estrutura as relações lógicas da sentença', false),
    q9.createChoice('Emissores eficazes utilizam perguntas de checagem e solicitam paráfrases amigáveis antes de encerrar o contato', false),
    q9.createChoice('Uso de termos exatos que não deixam margem para interpretações opostas ou duvidosas', false),
    q9.createChoice('Falar ou escrever muito não garante entendimento. Comunicar com eficácia significa assegurar que a intenção original chegue intacta ao interlocutor', true)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Qual conceito a aula define como: "Harmonia lógica e integridade estrutural das ideias"?');
  q10.setChoices([
    q10.createChoice('Clareza', false),
    q10.createChoice('Coerência', true),
    q10.createChoice('Objetividade', false),
    q10.createChoice('Concisão', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Ambiguidade Estrutural"?');
  q11.setChoices([
    q11.createChoice('A ambiguidade estrutural nasce da posição inadequada de pronomes, termos modificadores ou adjuntos na frase', true),
    q11.createChoice('Orações no gerúndio ou particípio sem sujeito expresso criam dependências dúbias na oração principal', false),
    q11.createChoice('Falta de clareza sobre quem é o responsável pela entrega causa paralisia operacional', false),
    q11.createChoice('Ser conciso não significa ser telegráfico ou grosseiro. Trata-se de eliminar redundâncias e rodeios vazios para valorizar o tempo do leitor', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Pilares da Comunicação Eficaz"?');
  q12.setChoices([
    q12.createChoice('Tarefas executadas incorretamente precisam ser refeitas do zero, consumindo horas extras', false),
    q12.createChoice('Uso de termos exatos que não deixam margem para interpretações opostas ou duvidosas', true),
    q12.createChoice('Dizer a um colega que sua opinião é valorizada, mas interrompê-lo a cada três segundos durante a reunião, gera um ruído irremediável de credibilidade', false),
    q12.createChoice('A pontuação organiza a respiração mental do leitor e estrutura as relações lógicas da sentença', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. Qual conceito a aula define como: "Foco direto no propósito sem rodeios desnecessários"?');
  q13.setChoices([
    q13.createChoice('Clareza', false),
    q13.createChoice('Coerência', false),
    q13.createChoice('Concisão', false),
    q13.createChoice('Objetividade', true)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "A Natureza da Ambiguidade"?');
  q14.setChoices([
    q14.createChoice('Tarefas executadas incorretamente precisam ser refeitas do zero, consumindo horas extras', false),
    q14.createChoice('A ambiguidade ocorre quando uma palavra, oração ou frase permite mais de um sentido legítimo dentro do mesmo contexto', true),
    q14.createChoice('A eficácia da mensagem depende da capacidade de decodificação de quem a recebe. Adequar a linguagem não é empobrecer o conteúdo, mas garantir o acesso pleno à...', false),
    q14.createChoice('Dizer a um colega que sua opinião é valorizada, mas interrompê-lo a cada três segundos durante a reunião, gera um ruído irremediável de credibilidade', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "O Perfil do Receptor"?');
  q15.setChoices([
    q15.createChoice('Usado entre pares, familiares e colegas de equipe em conversas cotidianas. Aceita coloquialismo sem perder clareza', false),
    q15.createChoice('A eficácia da mensagem depende da capacidade de decodificação de quem a recebe. Adequar a linguagem não é empobrecer o conteúdo, mas garantir o acesso pleno à...', true),
    q15.createChoice('Erro em memorando hospitalar gera suspensão indevida de leitos pediátricos', false),
    q15.createChoice('Como transformar ideias em mensagens claras, precisas e compreensíveis', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "Coerência: Discurso e Ação"?');
  q16.setChoices([
    q16.createChoice('A pontuação organiza a respiração mental do leitor e estrutura as relações lógicas da sentença', false),
    q16.createChoice('Erro em memorando hospitalar gera suspensão indevida de leitos pediátricos', false),
    q16.createChoice('Dizer a um colega que sua opinião é valorizada, mas interrompê-lo a cada três segundos durante a reunião, gera um ruído irremediável de credibilidade', true),
    q16.createChoice('Ser conciso não significa ser telegráfico ou grosseiro. Trata-se de eliminar redundâncias e rodeios vazios para valorizar o tempo do leitor', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Comunicação Eficaz"?');
  q17.setChoices([
    q17.createChoice('A ausência ou o deslocamento de vírgulas altera por completo a função do vocativo e do aposto', false),
    q17.createChoice('Tarefas executadas incorretamente precisam ser refeitas do zero, consumindo horas extras', false),
    q17.createChoice('Como transformar ideias em mensagens claras, precisas e compreensíveis', true),
    q17.createChoice('Usado entre pares, familiares e colegas de equipe em conversas cotidianas. Aceita coloquialismo sem perder clareza', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Coerência"?');
  q18.setChoices([
    q18.createChoice('Ausência de obscuridade; mensagem sem margem a dúvidas', false),
    q18.createChoice('Transmissão do máximo de ideias com o mínimo de termos', false),
    q18.createChoice('Foco direto no propósito sem rodeios desnecessários', false),
    q18.createChoice('Harmonia lógica e integridade estrutural das ideias', true)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Qual conceito a aula define como: "Transmissão do máximo de ideias com o mínimo de termos"?');
  q19.setChoices([
    q19.createChoice('Objetividade', false),
    q19.createChoice('Clareza', false),
    q19.createChoice('Coerência', false),
    q19.createChoice('Concisão', true)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Qual conceito a aula define como: "Ausência de obscuridade; mensagem sem margem a dúvidas"?');
  q20.setChoices([
    q20.createChoice('Objetividade', false),
    q20.createChoice('Concisão', false),
    q20.createChoice('Clareza', true),
    q20.createChoice('Coerência', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ Aula 02 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 12 — Comunicação Eficaz Como transformar ideias em mensagens claras, precisas e compreensíveis');
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

function analisarRespostasAula12() {
  var form = FormApp.openByTitle('Avaliação — Aula 02 · Comunicação Eficaz Como transformar ideias em mensagens claras, precisas e compreensíveis · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 02: Comunicação Eficaz Como transformar ideias em mensagens claras, precisas e compreensíveis');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Comunicação Eficaz Como transformar ideias em mensagens claras, precisas e compreensíveis', 'É um conceito importante apresentado na aula', 'O Custo de um Mal-entendido', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Ausência de obscuridade; mensagem sem margem a dúvidas.', 'Foco direto no propósito sem rodeios desnecessários.', 'Transmissão do máximo de ideias com o mínimo de termos.', 'Discurso e Ação', 'O Processo Comunicativo', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 13
// ════════════════════════════════════════════════════════════
