// ===== 21-Aula21-Trabalho-Remoto.gs =====
// Aula real (sequencia do curso): Aula 21 - Trabalho-Remoto
// Funcao interna (numeracao original do Google Forms): criarFormularioAula14()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula14() {
  var form = FormApp.create('Avaliação — Aula 21 · Trabalho Remoto e Colaboração Práticas e ferramentas para produzir em equipe digital · SENAI');

  form.setDescription( 'Avaliação Completa: Trabalho Remoto e Colaboração Práticas e ferramentas para produzir em equipe digital\n\nAula 21 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  // setLimitOneResponsePerUser removido: exigia login Google. Identificacao do aluno agora e feita pelo Nome Completo
  form.setConfirmationMessage('✅ Resposta enviada! Sua pontuação aparece logo acima, nesta mesma tela.');

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('Questionário Completo — Trabalho Remoto e Colaboração Práticas e ferramentas para produzir em equipe digital');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Controle de Versões"?');
  q1.setChoices([
    q1.createChoice('Se surgir um imprevisto técnico ou pessoal, comunicar a equipe antes do horário limite', false),
    q1.createChoice('Definir horários específicos para ler, redigir e revisar, em vez de deixar tudo para a última noite', false),
    q1.createChoice('Isso transforma uma observação genérica em uma atribuição clara de responsabilidade, indicando exatamente quem deve responder àquela pendência', false),
    q1.createChoice('O histórico de versões funciona como uma verdadeira máquina do tempo dentro de ferramentas em nuvem', true)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "ROTINA DE TRABALHO"?');
  q2.setChoices([
    q2.createChoice('Inserir um comentário na tabela marcando o colega com @ e explicando o pedido', false),
    q2.createChoice('Uma daily (ou check-in rápido) é uma reunião muito curta, de 10 a 15 minutos, usada por equipes modernas para manter o alinhamento sem tomar o dia de ninguém', true),
    q2.createChoice('Sinalizar dúvidas ou bloqueios que dependem de outra pessoa para que o grupo ajude a resolver', false),
    q2.createChoice('Selecionar todo o texto e colar algo por cima. Resolva usando o atalho de desfazer (Ctrl+Z) ou restaurando a versão anterior', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "Comunicação Síncrona"?');
  q3.setChoices([
    q3.createChoice('Produção contínua de relatórios, atas e textos com escrita colaborativa', false),
    q3.createChoice('Ocorre em tempo real. Exige presença simultânea em videochamadas ou chamadas rápidas para decisões urgentes', true),
    q3.createChoice('Atualizar o status das tarefas no quadro virtual assim que concluir uma etapa combinada', false),
    q3.createChoice('Pode apenas ler o arquivo. Ideal para divulgar regulamentos, roteiros e textos finais concluídos', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. De acordo com a aula, o que caracteriza "Documentos de Texto"?');
  q4.setChoices([
    q4.createChoice('Notificar diretamente um membro da equipe em um comentário', false),
    q4.createChoice('Pode apenas ler o arquivo. Ideal para divulgar regulamentos, roteiros e textos finais concluídos', false),
    q4.createChoice('Definir horários específicos para ler, redigir e revisar, em vez de deixar tudo para a última noite', false),
    q4.createChoice('Produção contínua de relatórios, atas e textos com escrita colaborativa', true)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "Vocabulário Fundamental"?');
  q5.setChoices([
    q5.createChoice('Produção contínua de relatórios, atas e textos com escrita colaborativa', false),
    q5.createChoice('Assíncrono - Diálogo que ocorre em tempos diferentes, sem resposta imediata', true),
    q5.createChoice('Quando várias pessoas estão no mesmo documento, os cursores coloridos mostram onde cada colega está lendo ou escrevendo', false),
    q5.createChoice('Em vez de modificar diretamente o parágrafo escrito por um colega, a melhor prática assíncrona é destacar o trecho e inserir um comentário', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "CONCEITO-CHAVE"?');
  q6.setChoices([
    q6.createChoice('Selecionar todo o texto e colar algo por cima. Resolva usando o atalho de desfazer (Ctrl+Z) ou restaurando a versão anterior', false),
    q6.createChoice('Ambientes virtuais de trabalho colaborativo são plataformas em nuvem que permitem que várias pessoas visualizem, escrevam e organizem projetos em um único lugar', true),
    q6.createChoice('Quando você digita o símbolo @ seguido do nome do colega em um comentário, a plataforma envia uma notificação direta para o e-mail dele', false),
    q6.createChoice('No ambiente digital, cada demanda precisa de três elementos obrigatórios: o que fazer, quem é o responsável único e a data e hora limite exatas', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. De acordo com a aula, o que caracteriza "Poder dos Comentários"?');
  q7.setChoices([
    q7.createChoice('No ambiente digital, cada demanda precisa de três elementos obrigatórios: o que fazer, quem é o responsável único e a data e hora limite exatas', false),
    q7.createChoice('Cada modificação é salva automaticamente com registro de horário e nome de quem realizou a edição, permitindo comparar alterações ou desfazer erros graves', false),
    q7.createChoice('Selecionar todo o texto e colar algo por cima. Resolva usando o atalho de desfazer (Ctrl+Z) ou restaurando a versão anterior', false),
    q7.createChoice('Em vez de modificar diretamente o parágrafo escrito por um colega, a melhor prática assíncrona é destacar o trecho e inserir um comentário', true)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "Comunicação no Documento"?');
  q8.setChoices([
    q8.createChoice('Manter um local limpo, organizado e livre de distrações imediatas para estudar e produzir', false),
    q8.createChoice('Painéis visuais para tempestade de ideias, mapas conceituais e fluxogramas', false),
    q8.createChoice('Isso transforma uma observação genérica em uma atribuição clara de responsabilidade, indicando exatamente quem deve responder àquela pendência', false),
    q8.createChoice('Inserir um comentário na tabela marcando o colega com @ e explicando o pedido', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Trabalhar Junto Sem Estar Perto"?');
  q9.setChoices([
    q9.createChoice('Quadros tipo Kanban para acompanhar o status e o responsável por cada etapa', false),
    q9.createChoice('Definir horários específicos para ler, redigir e revisar, em vez de deixar tudo para a última noite', false),
    q9.createChoice('Manter um local limpo, organizado e livre de distrações imediatas para estudar e produzir', false),
    q9.createChoice('Imagine escrever um trabalho escolar em grupo onde quatro pessoas editam o mesmo parágrafo ao mesmo tempo, sem conversar antes', true)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "Planilhas Online"?');
  q10.setChoices([
    q10.createChoice('Se surgir um imprevisto técnico ou pessoal, comunicar a equipe antes do horário limite', false),
    q10.createChoice('Selecionar todo o texto e colar algo por cima. Resolva usando o atalho de desfazer (Ctrl+Z) ou restaurando a versão anterior', false),
    q10.createChoice('Notificar diretamente um membro da equipe em um comentário', false),
    q10.createChoice('Controle conjunto de prazos, divisões orçamentárias e dados de pesquisa', true)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Revisando Netiqueta e Postura"?');
  q11.setChoices([
    q11.createChoice('Pode apenas ler o arquivo. Ideal para divulgar regulamentos, roteiros e textos finais concluídos', false),
    q11.createChoice('Ocorre em tempo real. Exige presença simultânea em videochamadas ou chamadas rápidas para decisões urgentes', false),
    q11.createChoice('O histórico de versões funciona como uma verdadeira máquina do tempo dentro de ferramentas em nuvem', false),
    q11.createChoice('Na aula anterior, vimos que a netiqueta é o conjunto de boas maneiras na internet. No trabalho remoto, nossa presença se manifesta principalmente pelo que escrevemos', true)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Comunicação Assíncrona"?');
  q12.setChoices([
    q12.createChoice('Imagine escrever um trabalho escolar em grupo onde quatro pessoas editam o mesmo parágrafo ao mesmo tempo, sem conversar antes', false),
    q12.createChoice('Produção contínua de relatórios, atas e textos com escrita colaborativa', false),
    q12.createChoice('Ocorre com respostas em tempos diferentes. Permite reflexão profunda, respeita ritmos e fica registrada por escrito', true),
    q12.createChoice('Nunca comece a digitar dentro do mesmo parágrafo em que outro cursor já está ativo. Espere o colega concluir o raciocínio ou trabalhe em outra seção', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "SEGURANÇA DE DADOS"?');
  q13.setChoices([
    q13.createChoice('Quando você digita o símbolo @ seguido do nome do colega em um comentário, a plataforma envia uma notificação direta para o e-mail dele', false),
    q13.createChoice('Uma daily (ou check-in rápido) é uma reunião muito curta, de 10 a 15 minutos, usada por equipes modernas para manter o alinhamento sem tomar o dia de ninguém', false),
    q13.createChoice('Cada modificação é salva automaticamente com registro de horário e nome de quem realizou a edição, permitindo comparar alterações ou desfazer erros graves', true),
    q13.createChoice('Notificar diretamente um membro da equipe em um comentário', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "RECURSO DIGITAL"?');
  q14.setChoices([
    q14.createChoice('Reunião curta focada em progresso e remoção de bloqueios', false),
    q14.createChoice('Imagine escrever um trabalho escolar em grupo onde quatro pessoas editam o mesmo parágrafo ao mesmo tempo, sem conversar antes', false),
    q14.createChoice('Na aula anterior, vimos que a netiqueta é o conjunto de boas maneiras na internet. No trabalho remoto, nossa presença se manifesta principalmente pelo que escrevemos', false),
    q14.createChoice('Isso transforma uma observação genérica em uma atribuição clara de responsabilidade, indicando exatamente quem deve responder àquela pendência', true)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Marcações Direcionadas com @"?');
  q15.setChoices([
    q15.createChoice('No ambiente digital, cada demanda precisa de três elementos obrigatórios: o que fazer, quem é o responsável único e a data e hora limite exatas', false),
    q15.createChoice('Manter um local limpo, organizado e livre de distrações imediatas para estudar e produzir', false),
    q15.createChoice('Na aula anterior, vimos que a netiqueta é o conjunto de boas maneiras na internet. No trabalho remoto, nossa presença se manifesta principalmente pelo que escrevemos', false),
    q15.createChoice('Quando você digita o símbolo @ seguido do nome do colega em um comentário, a plataforma envia uma notificação direta para o e-mail dele', true)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "Tipos de Ferramentas em Nuvem"?');
  q16.setChoices([
    q16.createChoice('Produção contínua de relatórios, atas e textos com escrita colaborativa', false),
    q16.createChoice('Quadros tipo Kanban para acompanhar o status e o responsável por cada etapa', true),
    q16.createChoice('Quais das seguintes afirmações sobre colaboração em ambientes digitais são verdadeiras? (Mais de uma está correta)', false),
    q16.createChoice('Ocorre com respostas em tempos diferentes. Permite reflexão profunda, respeita ritmos e fica registrada por escrito', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Etiqueta na Edição Simultânea"?');
  q17.setChoices([
    q17.createChoice('Ocorre em tempo real. Exige presença simultânea em videochamadas ou chamadas rápidas para decisões urgentes', false),
    q17.createChoice('Quais das seguintes afirmações sobre colaboração em ambientes digitais são verdadeiras? (Mais de uma está correta)', false),
    q17.createChoice('Quando várias pessoas estão no mesmo documento, os cursores coloridos mostram onde cada colega está lendo ou escrevendo', true),
    q17.createChoice('Três pessoas pesquisando a introdução e ninguém cuidando da conclusão. Evite isso distribuindo seções antes de abrir o arquivo', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "Quadros Virtuais"?');
  q18.setChoices([
    q18.createChoice('Manter um local limpo, organizado e livre de distrações imediatas para estudar e produzir', false),
    q18.createChoice('Definir horários específicos para ler, redigir e revisar, em vez de deixar tudo para a última noite', false),
    q18.createChoice('Reunião curta focada em progresso e remoção de bloqueios', false),
    q18.createChoice('Painéis visuais para tempestade de ideias, mapas conceituais e fluxogramas', true)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "Falta de Divisão Prévia"?');
  q19.setChoices([
    q19.createChoice('Três pessoas pesquisando a introdução e ninguém cuidando da conclusão. Evite isso distribuindo seções antes de abrir o arquivo', true),
    q19.createChoice('Em vez de modificar diretamente o parágrafo escrito por um colega, a melhor prática assíncrona é destacar o trecho e inserir um comentário', false),
    q19.createChoice('Se surgir um imprevisto técnico ou pessoal, comunicar a equipe antes do horário limite', false),
    q19.createChoice('No ambiente digital, cada demanda precisa de três elementos obrigatórios: o que fazer, quem é o responsável único e a data e hora limite exatas', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "Transparência Ativa"?');
  q20.setChoices([
    q20.createChoice('Nunca comece a digitar dentro do mesmo parágrafo em que outro cursor já está ativo. Espere o colega concluir o raciocínio ou trabalhe em outra seção', false),
    q20.createChoice('Três pessoas pesquisando a introdução e ninguém cuidando da conclusão. Evite isso distribuindo seções antes de abrir o arquivo', false),
    q20.createChoice('Atualizar o status das tarefas no quadro virtual assim que concluir uma etapa combinada', true),
    q20.createChoice('Manter um local limpo, organizado e livre de distrações imediatas para estudar e produzir', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  Logger.log('✅ Aula 21 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 14 — Trabalho Remoto e Colaboração Práticas e ferramentas para produzir em equipe digital');
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

function analisarRespostasAula14() {
  var form = FormApp.openByTitle('Avaliação — Aula 21 · Trabalho Remoto e Colaboração Práticas e ferramentas para produzir em equipe digital · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 21: Trabalho Remoto e Colaboração Práticas e ferramentas para produzir em equipe digital');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Trabalho Remoto e Colaboração Práticas e ferramentas para produzir em equipe digital', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos da Nossa Aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Por que devemos evitar escrever frases inteiras em letras maiúsculas no chat de trabalho?', 'Qual é o papel do microfone mudo durante uma videoconferência com muitas pessoas?', 'O que devemos checar antes de enviar uma mensagem com dúvidas em grupo?', 'Porque letras maiúsculas transmitem a impressão de grito ou agressividade.', 'Evitar que ruídos do ambiente atrapalhem quem está com a palavra.', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 15
// ════════════════════════════════════════════════════════════
