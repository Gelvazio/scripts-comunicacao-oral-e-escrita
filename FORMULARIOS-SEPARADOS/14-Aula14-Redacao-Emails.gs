// ===== 14-Aula14-Redacao-Emails.gs =====
// Aula real (sequencia do curso): Aula 14 - Redacao-Emails
// Funcao interna (numeracao original do Google Forms): criarFormularioAula06()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula06() {
  var form = FormApp.create('Avaliação — Aula 14 · Redação de E-mails Corporativos Comunicação escrita eficaz e profissional no ambiente de trabalho · SENAI');

  form.setDescription( 'Avaliação Completa: Redação de E-mails Corporativos Comunicação escrita eficaz e profissional no ambiente de trabalho\n\nAula 14 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  // setLimitOneResponsePerUser removido: exigia login Google. Identificacao do aluno agora e feita pelo Nome Completo
  form.setConfirmationMessage('✅ Resposta enviada! Sua pontuação aparece logo acima, nesta mesma tela.');

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('Questionário Completo — Redação de E-mails Corporativos Comunicação escrita eficaz e profissional no ambiente de trabalho');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Prazos e Entregas"?');
  q1.setChoices([
    q1.createChoice('Um e-mail eficiente responde rapidamente a três perguntas que o leitor faz inconscientemente', false),
    q1.createChoice('Organize os elementos abaixo na sequência lógica de um e-mail profissional', false),
    q1.createChoice('Protege a privacidade ao enviar para múltiplos destinatários externos', false),
    q1.createChoice('Envio de relatórios, arquivos pesados e alinhamento de cronogramas', true)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Verificação de Etiqueta Corporativa"?');
  q2.setChoices([
    q2.createChoice('Assunto vago, gírias inapropriadas, sem especificação de documento ou prazo e sem assinatura', false),
    q2.createChoice('Protege a privacidade ao enviar para múltiplos destinatários externos', false),
    q2.createChoice('Isso polui desnecessariamente a caixa de entrada de 49 pessoas que não precisam dessa confirmação', true),
    q2.createChoice('Um e-mail eficiente responde rapidamente a três perguntas que o leitor faz inconscientemente', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "CCO (Cópia Oculta)"?');
  q3.setChoices([
    q3.createChoice('Um e-mail eficiente responde rapidamente a três perguntas que o leitor faz inconscientemente', false),
    q3.createChoice('Pessoas incluídas apenas para acompanhamento e ciência do tema', true),
    q3.createChoice('Diferente de aplicativos de mensagens instantâneas, o e-mail corporativo funciona como um registro oficial e documental de acordos e decisões', false),
    q3.createChoice('Pessoas que precisam acompanhar o assunto por ciência, sem obrigação de responder diretamente à mensagem', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. De acordo com a aula, o que caracteriza "O Poder do Assunto"?');
  q4.setChoices([
    q4.createChoice('O campo Assunto define se o seu e-mail será aberto agora, arquivado ou ignorado', true),
    q4.createChoice('Enviar mensagens sob estresse emocional gera registros irreversíveis', false),
    q4.createChoice('Na próxima aula, daremos um passo além na escrita profissional: aprenderemos a estruturar Relatórios Técnicos com precisão e síntese', false),
    q4.createChoice('A assinatura institucional comprova a legitimidade do emissor e facilita o contato imediato', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "PADRÃO CORPORATIVO"?');
  q5.setChoices([
    q5.createChoice('Isso polui desnecessariamente a caixa de entrada de 49 pessoas que não precisam dessa confirmação', false),
    q5.createChoice('O campo Assunto define se o seu e-mail será aberto agora, arquivado ou ignorado', false),
    q5.createChoice('A assinatura institucional comprova a legitimidade do emissor e facilita o contato imediato', true),
    q5.createChoice('Na aula anterior, estudamos como a hierarquia visual orienta os olhos do leitor por títulos, tópicos e espaçamentos equilibrados', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "A Anatomia do Corpo do E-mail"?');
  q6.setChoices([
    q6.createChoice('Um e-mail eficiente responde rapidamente a três perguntas que o leitor faz inconscientemente', true),
    q6.createChoice('Diferente de aplicativos de mensagens instantâneas, o e-mail corporativo funciona como um registro oficial e documental de acordos e decisões', false),
    q6.createChoice('Assunto vago, gírias inapropriadas, sem especificação de documento ou prazo e sem assinatura', false),
    q6.createChoice('Contato com clientes, fornecedores e parceiros institucionais', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. De acordo com a aula, o que caracteriza "Evite para Imediato"?');
  q7.setChoices([
    q7.createChoice('Na próxima aula, daremos um passo além na escrita profissional: aprenderemos a estruturar Relatórios Técnicos com precisão e síntese', false),
    q7.createChoice('Organize os elementos abaixo na sequência lógica de um e-mail profissional', false),
    q7.createChoice('Para dúvidas de resposta em 2 minutos, use chat corporativo ou ligação', true),
    q7.createChoice('Diferente de aplicativos de mensagens instantâneas, o e-mail corporativo funciona como um registro oficial e documental de acordos e decisões', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "Comparativo: Para vs. CC"?');
  q8.setChoices([
    q8.createChoice('Diferente de aplicativos de mensagens instantâneas, o e-mail corporativo funciona como um registro oficial e documental de acordos e decisões', false),
    q8.createChoice('Contato com clientes, fornecedores e parceiros institucionais', false),
    q8.createChoice('Pessoas que precisam acompanhar o assunto por ciência, sem obrigação de responder diretamente à mensagem', true),
    q8.createChoice('Na aula anterior, estudamos como a hierarquia visual orienta os olhos do leitor por títulos, tópicos e espaçamentos equilibrados', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Registros Formais"?');
  q9.setChoices([
    q9.createChoice('Pessoas incluídas apenas para acompanhamento e ciência do tema', false),
    q9.createChoice('Pessoas que precisam acompanhar o assunto por ciência, sem obrigação de responder diretamente à mensagem', false),
    q9.createChoice('O campo Assunto define se o seu e-mail será aberto agora, arquivado ou ignorado', false),
    q9.createChoice('Formalização de contratos, atas e diretrizes operacionais', true)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "Campos de Destinatários: Para, CC e CCO"?');
  q10.setChoices([
    q10.createChoice('Isso polui desnecessariamente a caixa de entrada de 49 pessoas que não precisam dessa confirmação', false),
    q10.createChoice('O campo Assunto define se o seu e-mail será aberto agora, arquivado ou ignorado', false),
    q10.createChoice('Colocar a pessoa errada no campo inadequado pode sobrecarregar caixas de entrada ou violar leis de privacidade de dados (como a LGPD)', true),
    q10.createChoice('Envio de relatórios, arquivos pesados e alinhamento de cronogramas', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Falhas Graves"?');
  q11.setChoices([
    q11.createChoice('Envio de relatórios, arquivos pesados e alinhamento de cronogramas', false),
    q11.createChoice('Na aula anterior, estudamos como a hierarquia visual orienta os olhos do leitor por títulos, tópicos e espaçamentos equilibrados', false),
    q11.createChoice('Assunto vago, gírias inapropriadas, sem especificação de documento ou prazo e sem assinatura', true),
    q11.createChoice('Para agradecimentos ou dúvidas individuais, responda apenas ao remetente original', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Recapitulação: Hierarquia Visual"?');
  q12.setChoices([
    q12.createChoice('Diferente de aplicativos de mensagens instantâneas, o e-mail corporativo funciona como um registro oficial e documental de acordos e decisões', false),
    q12.createChoice('Na aula anterior, estudamos como a hierarquia visual orienta os olhos do leitor por títulos, tópicos e espaçamentos equilibrados', true),
    q12.createChoice('Assunto vago, gírias inapropriadas, sem especificação de documento ou prazo e sem assinatura', false),
    q12.createChoice('A assinatura institucional comprova a legitimidade do emissor e facilita o contato imediato', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Vocativo e Saudação Inicial"?');
  q13.setChoices([
    q13.createChoice('A saudação estabelece a conexão interpessoal e o grau correto de respeito na hierarquia profissional', true),
    q13.createChoice('Pessoas incluídas apenas para acompanhamento e ciência do tema', false),
    q13.createChoice('Pessoas que precisam acompanhar o assunto por ciência, sem obrigação de responder diretamente à mensagem', false),
    q13.createChoice('Informa urgência ou data limite. Ex: Aprovação até 15/10', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Comunicação Externa"?');
  q14.setChoices([
    q14.createChoice('Envio de relatórios, arquivos pesados e alinhamento de cronogramas', false),
    q14.createChoice('Contato com clientes, fornecedores e parceiros institucionais', true),
    q14.createChoice('A assinatura institucional comprova a legitimidade do emissor e facilita o contato imediato', false),
    q14.createChoice('Protege a privacidade ao enviar para múltiplos destinatários externos', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Prazo ou Versão"?');
  q15.setChoices([
    q15.createChoice('Pessoas que precisam acompanhar o assunto por ciência, sem obrigação de responder diretamente à mensagem', false),
    q15.createChoice('Protege a privacidade ao enviar para múltiplos destinatários externos', false),
    q15.createChoice('Informa urgência ou data limite. Ex: Aprovação até 15/10', true),
    q15.createChoice('Para dúvidas de resposta em 2 minutos, use chat corporativo ou ligação', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "O Risco do "Responder a Todos""?');
  q16.setChoices([
    q16.createChoice('Para agradecimentos ou dúvidas individuais, responda apenas ao remetente original', true),
    q16.createChoice('Colocar a pessoa errada no campo inadequado pode sobrecarregar caixas de entrada ou violar leis de privacidade de dados (como a LGPD)', false),
    q16.createChoice('A saudação estabelece a conexão interpessoal e o grau correto de respeito na hierarquia profissional', false),
    q16.createChoice('Pessoas que precisam acompanhar o assunto por ciência, sem obrigação de responder diretamente à mensagem', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "CC (Com Cópia)"?');
  q17.setChoices([
    q17.createChoice('Protege a privacidade ao enviar para múltiplos destinatários externos', true),
    q17.createChoice('Informa urgência ou data limite. Ex: Aprovação até 15/10', false),
    q17.createChoice('Contato com clientes, fornecedores e parceiros institucionais', false),
    q17.createChoice('A assinatura institucional comprova a legitimidade do emissor e facilita o contato imediato', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "Campo "Para" (To)"?');
  q18.setChoices([
    q18.createChoice('Organize os elementos abaixo na sequência lógica de um e-mail profissional', false),
    q18.createChoice('Destinatário principal. A pessoa de quem se espera a resposta direta ou a execução da tarefa solicitada', true),
    q18.createChoice('Informa urgência ou data limite. Ex: Aprovação até 15/10', false),
    q18.createChoice('Assunto vago, gírias inapropriadas, sem especificação de documento ou prazo e sem assinatura', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "CONCEITO-CHAVE"?');
  q19.setChoices([
    q19.createChoice('Diferente de aplicativos de mensagens instantâneas, o e-mail corporativo funciona como um registro oficial e documental de acordos e decisões', true),
    q19.createChoice('A assinatura institucional comprova a legitimidade do emissor e facilita o contato imediato', false),
    q19.createChoice('Pessoas incluídas apenas para acompanhamento e ciência do tema', false),
    q19.createChoice('Informa urgência ou data limite. Ex: Aprovação até 15/10', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "Responder com Raiva"?');
  q20.setChoices([
    q20.createChoice('Pessoas incluídas apenas para acompanhamento e ciência do tema', false),
    q20.createChoice('Envio de relatórios, arquivos pesados e alinhamento de cronogramas', false),
    q20.createChoice('A assinatura institucional comprova a legitimidade do emissor e facilita o contato imediato', false),
    q20.createChoice('Enviar mensagens sob estresse emocional gera registros irreversíveis', true)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  Logger.log('✅ Aula 14 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 06 — Redação de E-mails Corporativos Comunicação escrita eficaz e profissional no ambiente de trabalho');
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

function analisarRespostasAula06() {
  var form = FormApp.openByTitle('Avaliação — Aula 14 · Redação de E-mails Corporativos Comunicação escrita eficaz e profissional no ambiente de trabalho · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 14: Redação de E-mails Corporativos Comunicação escrita eficaz e profissional no ambiente de trabalho');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Redação de E-mails Corporativos Comunicação escrita eficaz e profissional no ambiente de trabalho', 'É um conceito importante apresentado na aula', 'Você abriria esta mensagem?', 'É um conceito importante apresentado na aula', 'Objetivos de Aprendizagem', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Hierarquia Visual', 'Normas de Apresentação Textual', 'Qual é a principal função da hierarquia visual em textos corporativos?', 'Por que devemos evitar parágrafos excessivamente longos em telas?', 'Como o negrito deve ser empregado em documentos formais?', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 07
// ════════════════════════════════════════════════════════════
