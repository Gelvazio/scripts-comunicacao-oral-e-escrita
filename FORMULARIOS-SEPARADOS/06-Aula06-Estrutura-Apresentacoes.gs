// ===== 06-Aula06-Estrutura-Apresentacoes.gs =====
// Aula real (sequencia do curso): Aula 06 - Estrutura-Apresentacoes
// Funcao interna (numeracao original do Google Forms): criarFormularioAula22()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula22() {
  var form = FormApp.create('Avaliação — Aula 06 · Estrutura de Apresentações Como planejar discursos memoráveis, claros e persuasivos · SENAI');

  form.setDescription( 'Avaliação Completa: Estrutura de Apresentações Como planejar discursos memoráveis, claros e persuasivos\n\nAula 06 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Estrutura de Apresentações Como planejar discursos memoráveis, claros e persuasivos');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "História Curta"?');
  q1.setChoices([
    q1.createChoice('Aristóteles definiu que a persuasão exige Ethos (credibilidade), Logos (lógica e dados) e Pathos (conexão emocional)', false),
    q1.createChoice('Uma anedota humana de 30 segundos que ilustra o problema real', true),
    q1.createChoice('Discursos que usam apenas números (Logos) podem soar frios; apresentações baseadas apenas em emoção (Pathos) perdem sustentação', false),
    q1.createChoice('As frases de transição funcionam como sinalizações em uma estrada: avisam que o tópico anterior acabou e o próximo começou', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Dado Surpreendente"?');
  q2.setChoices([
    q2.createChoice('Apresenta um fato contrastante que quebra expectativas comuns', true),
    q2.createChoice('Na próxima aula, entraremos a fundo em Técnicas de Oratória: modulação de tom de voz, pausas expressivas e postura física', false),
    q2.createChoice('Uma pausa de dois segundos após uma afirmação importante permite que a mente dos ouvintes processe o dado', false),
    q2.createChoice('Uma apresentação em público nada mais é do que esse ciclo ampliado: o orador calibra sua mensagem observando as reações do público', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "REVISÃO"?');
  q3.setChoices([
    q3.createChoice('Demonstre com clareza como certas escolhas geram consequências específicas', false),
    q3.createChoice('Uma apresentação em público nada mais é do que esse ciclo ampliado: o orador calibra sua mensagem observando as reações do público', true),
    q3.createChoice('Uma pausa de dois segundos após uma afirmação importante permite que a mente dos ouvintes processe o dado', false),
    q3.createChoice('Não buscamos eliminar a energia, mas sim canalizá-la: o corpo precisa aprender que o público é um parceiro de conversa, não uma ameaça', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Estrutura"?');
  q4.setChoices([
    q4.createChoice('Contexto essencial ou diagnóstico do cenário', false),
    q4.createChoice('passado, diagnóstico atual e futuro', false),
    q4.createChoice('Evidência analítica, argumento prático ou teste', false),
    q4.createChoice('Esqueleto que organiza ideias e guia a audiência', true)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Qual conceito a aula define como: "passado, diagnóstico atual e futuro"?');
  q5.setChoices([
    q5.createChoice('Objetividade', false),
    q5.createChoice('Apresente fatos em ordem temporal', true),
    q5.createChoice('Terceiro Pilar', false),
    q5.createChoice('Segundo Pilar', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Comunicação Profissional"?');
  q6.setChoices([
    q6.createChoice('Na vida escolar avançada e no mercado de trabalho, expressar-se verbalmente não é apenas falar: é alinhar expectativas e propor soluções', true),
    q6.createChoice('Inspire em 4 segundos, retenha em 4 e expire em 4 para baixar os batimentos', false),
    q6.createChoice('Discursos que usam apenas números (Logos) podem soar frios; apresentações baseadas apenas em emoção (Pathos) perdem sustentação', false),
    q6.createChoice('Uma apresentação em público nada mais é do que esse ciclo ampliado: o orador calibra sua mensagem observando as reações do público', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. De acordo com a aula, o que caracteriza "O Princípio da Persuasão"?');
  q7.setChoices([
    q7.createChoice('Palavras-chave ativam a memória e permitem que você fale com suas próprias palavras', false),
    q7.createChoice('Tome pequenos goles de água em temperatura ambiente para evitar a boca seca', false),
    q7.createChoice('Uma apresentação em público nada mais é do que esse ciclo ampliado: o orador calibra sua mensagem observando as reações do público', false),
    q7.createChoice('Aristóteles definiu que a persuasão exige Ethos (credibilidade), Logos (lógica e dados) e Pathos (conexão emocional)', true)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Segundo a aula, o que é "Pacing"?');
  q8.setChoices([
    q8.createChoice('Gestão da velocidade, pausas e tempo da fala', true),
    q8.createChoice('Proposta transformadora ou encaminhamento prático', false),
    q8.createChoice('Evidência analítica, argumento prático ou teste', false),
    q8.createChoice('Postura que inspira segurança e parceria', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "O Ritmo de Fala (Pacing)"?');
  q9.setChoices([
    q9.createChoice('Ordene as etapas canônicas da montagem e entrega de uma apresentação eficaz', false),
    q9.createChoice('Estruturou seu discurso em exatamente três histórias pessoais encadeadas', false),
    q9.createChoice('Na vida escolar avançada e no mercado de trabalho, expressar-se verbalmente não é apenas falar: é alinhar expectativas e propor soluções', false),
    q9.createChoice('O pacing é a alternância consciente entre momentos de aceleração enérgica e pausas reflexivas', true)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "Avaliação de Roteiro"?');
  q10.setChoices([
    q10.createChoice('Exponha o desafio enfrentado antes de revelar sua proposta central', false),
    q10.createChoice('As frases de transição funcionam como sinalizações em uma estrada: avisam que o tópico anterior acabou e o próximo começou', false),
    q10.createChoice('Palavras-chave ativam a memória e permitem que você fale com suas próprias palavras', false),
    q10.createChoice('Um roteiro eficiente para apresentação oral deve conter a transcrição exata de cada palavra que será dita em voz alta', true)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "O Papel do Roteiro"?');
  q11.setChoices([
    q11.createChoice('Ordene as etapas canônicas da montagem e entrega de uma apresentação eficaz', false),
    q11.createChoice('Uma pausa de dois segundos após uma afirmação importante permite que a mente dos ouvintes processe o dado', false),
    q11.createChoice('As frases de transição funcionam como sinalizações em uma estrada: avisam que o tópico anterior acabou e o próximo começou', false),
    q11.createChoice('Palavras-chave ativam a memória e permitem que você fale com suas próprias palavras', true)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Encadeamento Lógico de Tópicos"?');
  q12.setChoices([
    q12.createChoice('Uma anedota humana de 30 segundos que ilustra o problema real', false),
    q12.createChoice('O pacing é a alternância consciente entre momentos de aceleração enérgica e pausas reflexivas', false),
    q12.createChoice('Apresenta um fato contrastante que quebra expectativas comuns', false),
    q12.createChoice('Demonstre com clareza como certas escolhas geram consequências específicas', true)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. Segundo a aula, o que é "Conexão visual"?');
  q13.setChoices([
    q13.createChoice('Tradução de ideias complexas de forma compreensível', false),
    q13.createChoice('Proposta transformadora ou encaminhamento prático', false),
    q13.createChoice('Postura que inspira segurança e parceria', true),
    q13.createChoice('Respeito imediato ao tempo dos colegas e clientes', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "Objetividade"?');
  q14.setChoices([
    q14.createChoice('Esqueleto que organiza ideias e guia a audiência', false),
    q14.createChoice('Respeito imediato ao tempo dos colegas e clientes', true),
    q14.createChoice('Contexto essencial ou diagnóstico do cenário', false),
    q14.createChoice('Capacidade de engajar e motivar reflexão', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Respiração 4-4-4"?');
  q15.setChoices([
    q15.createChoice('Palavras-chave ativam a memória e permitem que você fale com suas próprias palavras', false),
    q15.createChoice('Inspire em 4 segundos, retenha em 4 e expire em 4 para baixar os batimentos', true),
    q15.createChoice('Tome pequenos goles de água em temperatura ambiente para evitar a boca seca', false),
    q15.createChoice('Estruturou seu discurso em exatamente três histórias pessoais encadeadas', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Segundo a aula, o que é "Primeiro Pilar"?');
  q16.setChoices([
    q16.createChoice('Evidência analítica, argumento prático ou teste', false),
    q16.createChoice('Contexto essencial ou diagnóstico do cenário', true),
    q16.createChoice('Gestão da velocidade, pausas e tempo da fala', false),
    q16.createChoice('Esqueleto que organiza ideias e guia a audiência', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. Segundo a aula, o que é "Segundo Pilar"?');
  q17.setChoices([
    q17.createChoice('Evidência analítica, argumento prático ou teste', true),
    q17.createChoice('Tradução de ideias complexas de forma compreensível', false),
    q17.createChoice('passado, diagnóstico atual e futuro', false),
    q17.createChoice('Proposta transformadora ou encaminhamento prático', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "O Ciclo do Módulo 1"?');
  q18.setChoices([
    q18.createChoice('O pacing é a alternância consciente entre momentos de aceleração enérgica e pausas reflexivas', false),
    q18.createChoice('Uma apresentação em público nada mais é do que esse ciclo ampliado: o orador calibra sua mensagem observando as reações do público', false),
    q18.createChoice('Na próxima aula, entraremos a fundo em Técnicas de Oratória: modulação de tom de voz, pausas expressivas e postura física', false),
    q18.createChoice('No módulo anterior, vimos que comunicar exige emissor, mensagem, canal, receptor e feedback contínuo', true)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Segundo a aula, o que é "Clareza técnica"?');
  q19.setChoices([
    q19.createChoice('Evidência analítica, argumento prático ou teste', false),
    q19.createChoice('passado, diagnóstico atual e futuro', false),
    q19.createChoice('Tradução de ideias complexas de forma compreensível', true),
    q19.createChoice('Guia de tópicos que apoia a fala sem leitura fixa', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Segundo a aula, o que é "Roteiro"?');
  q20.setChoices([
    q20.createChoice('Contexto essencial ou diagnóstico do cenário', false),
    q20.createChoice('Respeito imediato ao tempo dos colegas e clientes', false),
    q20.createChoice('passado, diagnóstico atual e futuro', false),
    q20.createChoice('Guia de tópicos que apoia a fala sem leitura fixa', true)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ Aula 06 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 22 — Estrutura de Apresentações Como planejar discursos memoráveis, claros e persuasivos');
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

function analisarRespostasAula22() {
  var form = FormApp.openByTitle('Avaliação — Aula 06 · Estrutura de Apresentações Como planejar discursos memoráveis, claros e persuasivos · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 06: Estrutura de Apresentações Como planejar discursos memoráveis, claros e persuasivos');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Estrutura de Apresentações Como planejar discursos memoráveis, claros e persuasivos', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos de Aprendizagem', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Esqueleto que organiza ideias e guia a audiência.', 'Guia de tópicos que apoia a fala sem leitura fixa.', 'Gestão da velocidade, pausas e tempo da fala.', 'Capacidade de engajar e motivar reflexão.', 'Qual componente do processo comunicativo confirma que a mensagem foi recebida e compreendida?', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 23
// ════════════════════════════════════════════════════════════
