// ===== 03-Aula03-Ciclo-Feedback.gs =====
// Aula real (sequencia do curso): Aula 03 - Ciclo-Feedback
// Funcao interna (numeracao original do Google Forms): criarFormularioAula19()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula19() {
  var form = FormApp.create('Avaliação — Aula 03 · O Ciclo do Feedback na Comunicação Como transformar respostas em ferramentas de crescimento e alinhamento · SENAI');

  form.setDescription( 'Avaliação Completa: O Ciclo do Feedback na Comunicação Como transformar respostas em ferramentas de crescimento e alinhamento\n\nAula 03 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — O Ciclo do Feedback na Comunicação Como transformar respostas em ferramentas de crescimento e alinhamento');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. Segundo a aula, o que é "Objetividade"?');
  q1.setChoices([
    q1.createChoice('Retorno com avaliação sobre mensagem ou tarefa realizada', false),
    q1.createChoice('Encerramento com incentivo e confiança', false),
    q1.createChoice('Fluxo contínuo que vai e volta entre os dois interlocutores', false),
    q1.createChoice('foco direto naquilo que realmente importa', true)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "A Função no Ciclo Comunicativo"?');
  q2.setChoices([
    q2.createChoice('Como transformar respostas em ferramentas de crescimento e alinhamento', false),
    q2.createChoice('Profissionais excelentes não encaram o retorno como julgamento final, mas como um mapa gratuito que revela ângulos cegos do próprio trabalho', false),
    q2.createChoice('Quando a equipe troca retornos sinceros e respeitosos, o medo de errar dá lugar à inovação e à melhoria coletiva contínua', false),
    q2.createChoice('Sem retorno, a comunicação é apenas um disparo no escuro. O feedback fecha o circuito e permite corrigir rotas em tempo real', true)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Segundo a aula, o que é "Clareza"?');
  q3.setChoices([
    q3.createChoice('Reconhecimento sincero de um ponto forte', false),
    q3.createChoice('vocabulário exato, sem duplo sentido', true),
    q3.createChoice('O aspecto específico que precisa de melhoria', false),
    q3.createChoice('Fluxo contínuo que vai e volta entre os dois interlocutores', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Camada inferior"?');
  q4.setChoices([
    q4.createChoice('Fluxo contínuo que vai e volta entre os dois interlocutores', false),
    q4.createChoice('Encerramento com incentivo e confiança', true),
    q4.createChoice('Reconhecimento sincero de um ponto forte', false),
    q4.createChoice('foco direto naquilo que realmente importa', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "A Técnica do Feedback Sanduíche"?');
  q5.setChoices([
    q5.createChoice('Uma reunião em que o líder apenas dita ordens sem abrir espaço para perguntas é um exemplo eficaz de comunicação bidirecional', false),
    q5.createChoice('Na escola, a nota é apenas um registro final. O feedback formativo fornecido durante a escrita é o verdadeiro motor de desenvolvimento', false),
    q5.createChoice('Reagir ao retorno apontando de imediato falhas alheias para desviar o assunto', false),
    q5.createChoice('Essa ferramenta organiza a mensagem em três camadas sucessivas para diminuir a resistência inicial de quem ouve', true)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Estudo de Caso: Conversa no Trabalho"?');
  q6.setChoices([
    q6.createChoice('Seu gestor, Marcos, marcou uma conversa reservada para tratar da entrega de forma estruturada. Vamos analisar as duas maneiras possíveis de conduzir esse diálogo', true),
    q6.createChoice('O caso de Camila demonstra como a forma de falar determina o desfecho operacional', false),
    q6.createChoice('Troca contínua entre emissor e receptor para garantir alinhamento', false),
    q6.createChoice('Essa ferramenta organiza a mensagem em três camadas sucessivas para diminuir a resistência inicial de quem ouve', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. De acordo com a aula, o que caracteriza "O Conceito de Feedback"?');
  q7.setChoices([
    q7.createChoice('O principal causador de atritos em grupos não é a falta de esforço, mas a divergência silenciosa sobre o que deve ser entregue', false),
    q7.createChoice('Comunicar com excelência é sustentar um ciclo vivo de trocas onde emitir e escutar têm o mesmo peso', false),
    q7.createChoice('Na linguagem e nas relações humanas, é a informação compartilhada com o emissor sobre o efeito gerado por sua mensagem, atitude ou produto de trabalho', true),
    q7.createChoice('Associar qualquer apontamento de erro a uma sensação de incapacidade pessoal', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "RECAPITULAÇÃO"?');
  q8.setChoices([
    q8.createChoice('Na escola, a nota é apenas um registro final. O feedback formativo fornecido durante a escrita é o verdadeiro motor de desenvolvimento', false),
    q8.createChoice('O principal causador de atritos em grupos não é a falta de esforço, mas a divergência silenciosa sobre o que deve ser entregue', false),
    q8.createChoice('Reagir ao retorno apontando de imediato falhas alheias para desviar o assunto', false),
    q8.createChoice('Nas aulas anteriores, estudamos que uma mensagem de sucesso apoia-se em três pilares fundamentais', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "O Ciclo do Feedback na Comunicação"?');
  q9.setChoices([
    q9.createChoice('A mensagem viaja em sentido único. O emissor fala ou escreve, mas não obtém dados sobre a reação do destinatário, impossibilitando ajustes', false),
    q9.createChoice('Como transformar respostas em ferramentas de crescimento e alinhamento', true),
    q9.createChoice('Essa ferramenta organiza a mensagem em três camadas sucessivas para diminuir a resistência inicial de quem ouve', false),
    q9.createChoice('Na escola, a nota é apenas um registro final. O feedback formativo fornecido durante a escrita é o verdadeiro motor de desenvolvimento', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "Cultura de Confiança"?');
  q10.setChoices([
    q10.createChoice('Seu gestor, Marcos, marcou uma conversa reservada para tratar da entrega de forma estruturada. Vamos analisar as duas maneiras possíveis de conduzir esse diálogo', false),
    q10.createChoice('Associar qualquer apontamento de erro a uma sensação de incapacidade pessoal', false),
    q10.createChoice('Quando a equipe troca retornos sinceros e respeitosos, o medo de errar dá lugar à inovação e à melhoria coletiva contínua', true),
    q10.createChoice('Essa ferramenta organiza a mensagem em três camadas sucessivas para diminuir a resistência inicial de quem ouve', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Barreiras Emocionais Comuns"?');
  q11.setChoices([
    q11.createChoice('Acreditar que a primeira versão produzida já é perfeita e imune a aprimoramentos', true),
    q11.createChoice('O caso de Camila demonstra como a forma de falar determina o desfecho operacional', false),
    q11.createChoice('Uma reunião em que o líder apenas dita ordens sem abrir espaço para perguntas é um exemplo eficaz de comunicação bidirecional', false),
    q11.createChoice('O principal causador de atritos em grupos não é a falta de esforço, mas a divergência silenciosa sobre o que deve ser entregue', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Segundo a aula, o que é "Bidirecional"?');
  q12.setChoices([
    q12.createChoice('Fluxo contínuo que vai e volta entre os dois interlocutores', true),
    q12.createChoice('O aspecto específico que precisa de melhoria', false),
    q12.createChoice('Ajuste conjunto de metas e expectativas na equipe', false),
    q12.createChoice('Retorno com avaliação sobre mensagem ou tarefa realizada', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Ataque Recíproco"?');
  q13.setChoices([
    q13.createChoice('Reagir ao retorno apontando de imediato falhas alheias para desviar o assunto', true),
    q13.createChoice('Sem retorno, a comunicação é apenas um disparo no escuro. O feedback fecha o circuito e permite corrigir rotas em tempo real', false),
    q13.createChoice('O principal causador de atritos em grupos não é a falta de esforço, mas a divergência silenciosa sobre o que deve ser entregue', false),
    q13.createChoice('A ausência de checagens intermediárias força o grupo a refazer etapas inteiras', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "Feedback"?');
  q14.setChoices([
    q14.createChoice('vocabulário exato, sem duplo sentido', false),
    q14.createChoice('foco direto naquilo que realmente importa', false),
    q14.createChoice('Camila entra em pânico, chora, fecha-se emocionalmente e a tabela segue sem resolução', false),
    q14.createChoice('Retorno com avaliação sobre mensagem ou tarefa realizada', true)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Checagem dos Pilares"?');
  q15.setChoices([
    q15.createChoice('Nas aulas anteriores, estudamos que uma mensagem de sucesso apoia-se em três pilares fundamentais', false),
    q15.createChoice('Na escola, a nota é apenas um registro final. O feedback formativo fornecido durante a escrita é o verdadeiro motor de desenvolvimento', false),
    q15.createChoice('Uma reunião em que o líder apenas dita ordens sem abrir espaço para perguntas é um exemplo eficaz de comunicação bidirecional', false),
    q15.createChoice('Uma mensagem oral cheia de gírias confusas que exige cinco explicações extras', true)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "Erros Ocultos"?');
  q16.setChoices([
    q16.createChoice('Profissionais excelentes não encaram o retorno como julgamento final, mas como um mapa gratuito que revela ângulos cegos do próprio trabalho', false),
    q16.createChoice('Falhas de compreensão só aparecem quando a tarefa final já foi entregue errada', true),
    q16.createChoice('Nas aulas anteriores, estudamos que uma mensagem de sucesso apoia-se em três pilares fundamentais', false),
    q16.createChoice('Essa ferramenta organiza a mensagem em três camadas sucessivas para diminuir a resistência inicial de quem ouve', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. Qual conceito a aula define como: "Camila entra em pânico, chora, fecha-se emocionalmente e a tabela segue sem resolução"?');
  q17.setChoices([
    q17.createChoice('Objetividade', false),
    q17.createChoice('Bidirecional', false),
    q17.createChoice('Camada superior', false),
    q17.createChoice('Resultado', true)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Alinhamento"?');
  q18.setChoices([
    q18.createChoice('Camila entra em pânico, chora, fecha-se emocionalmente e a tabela segue sem resolução', false),
    q18.createChoice('Reconhecimento sincero de um ponto forte', false),
    q18.createChoice('O aspecto específico que precisa de melhoria', false),
    q18.createChoice('Ajuste conjunto de metas e expectativas na equipe', true)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Segundo a aula, o que é "Concisão"?');
  q19.setChoices([
    q19.createChoice('Retorno com avaliação sobre mensagem ou tarefa realizada', false),
    q19.createChoice('Camila entra em pânico, chora, fecha-se emocionalmente e a tabela segue sem resolução', false),
    q19.createChoice('síntese elegante, eliminando excessos', true),
    q19.createChoice('vocabulário exato, sem duplo sentido', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Segundo a aula, o que é "Recheio"?');
  q20.setChoices([
    q20.createChoice('Ação ativa e consciente de compreender o que o outro diz', false),
    q20.createChoice('vocabulário exato, sem duplo sentido', false),
    q20.createChoice('Retorno com avaliação sobre mensagem ou tarefa realizada', false),
    q20.createChoice('O aspecto específico que precisa de melhoria', true)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ Aula 03 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 19 — O Ciclo do Feedback na Comunicação Como transformar respostas em ferramentas de crescimento e alinhamento');
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

function analisarRespostasAula19() {
  var form = FormApp.openByTitle('Avaliação — Aula 03 · O Ciclo do Feedback na Comunicação Como transformar respostas em ferramentas de crescimento e alinhamento · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 03: O Ciclo do Feedback na Comunicação Como transformar respostas em ferramentas de crescimento e alinhamento');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'O Ciclo do Feedback na Comunicação Como transformar respostas em ferramentas de crescimento e alinhamento', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos de Aprendizagem', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Retorno com avaliação sobre mensagem ou tarefa realizada.', 'Fluxo contínuo que vai e volta entre os dois interlocutores.', 'Ação ativa e consciente de compreender o que o outro diz.', 'Ajuste conjunto de metas e expectativas na equipe.', '“Sua introdução foi dinâmica e prendeu a atenção de toda a turma.”', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 20
// ════════════════════════════════════════════════════════════
