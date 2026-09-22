// ===== 04-Aula04-Contextos-Formais.gs =====
// Aula real (sequencia do curso): Aula 04 - Contextos-Formais
// Funcao interna (numeracao original do Google Forms): criarFormularioAula20()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula20() {
  var form = FormApp.create('Avaliação — Aula 04 · Contextos Formais versus Informais Adequação comunicativa, registros e impacto profissional · SENAI');

  form.setDescription( 'Avaliação Completa: Contextos Formais versus Informais Adequação comunicativa, registros e impacto profissional\n\nAula 04 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  // setLimitOneResponsePerUser removido: exigia login Google; controle de uso unico ja e feito pelo codigo de acesso na planilha

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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Contextos Formais versus Informais Adequação comunicativa, registros e impacto profissional');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. Segundo a aula, o que é "No contexto corporativo"?');
  q1.setChoices([
    q1.createChoice('Textos formais exigem planejamento, pontuação rigorosa e impessoalidade', false),
    q1.createChoice('Transmite pedantismo e afasta os colegas em vez de demonstrar competência', false),
    q1.createChoice('Podem soar desleixadas ou excluir interlocutores de outras gerações', true),
    q1.createChoice('solicitar algo formalmente, desabafar, ensinar ou fechar um acordo', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Âmbito Corporativo"?');
  q2.setChoices([
    q2.createChoice('Prioriza o dinamismo e a conexão imediata. Desconsidera pontuação rígida sem gerar ruído entre pares', false),
    q2.createChoice('O espaço físico ou virtual dita as regras sociais: plenário, sala de reunião ou grupo familiar', false),
    q2.createChoice('Essa aproximação exige discernimento em dobro: agilidade não significa desrespeito gramatical ou informalidade desenfreada', false),
    q2.createChoice('Focado na entrega de resultados, transparência de processos, alinhamento de metas e registro formal', true)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "O Interlocutor"?');
  q3.setChoices([
    q3.createChoice('O grau de intimidade, idade e hierarquia definem a proximidade e o tratamento empregado', true),
    q3.createChoice('Prioriza o dinamismo e a conexão imediata. Desconsidera pontuação rígida sem gerar ruído entre pares', false),
    q3.createChoice('A convergência harmônica desses três pilares garante que a mensagem gere o impacto planejado', false),
    q3.createChoice('Na escola e na universidade, a escrita exige precisão conceitual e respeito aos fatos comprovados', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Qual conceito a aula define como: "Nenhuma afirmação se sustenta sem respaldo ou fundamentação sólida"?');
  q4.setChoices([
    q4.createChoice('No contexto corporativo', false),
    q4.createChoice('Nem gíria nem pedantismo', false),
    q4.createChoice('O que você pretende alcançar', false),
    q4.createChoice('Citação de fontes', true)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "A Armadilha da Hipercorreção"?');
  q5.setChoices([
    q5.createChoice('A convergência harmônica desses três pilares garante que a mensagem gere o impacto planejado', false),
    q5.createChoice('A hipercorreção ocorre quando o comunicador tenta soar excessivamente sofisticado ou culto e comete deslizes gramaticais ou artificiais', true),
    q5.createChoice('Revise a pontuação e certifique-se de manter o tom educado e objetivo', false),
    q5.createChoice('Focado na conexão emocional, liberdade estrutural e partilha espontânea de sentimentos do dia a dia', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Segundo a aula, o que é "Bidirecionalidade"?');
  q6.setChoices([
    q6.createChoice('Perfeita para um grupo informal entre colegas de turma', false),
    q6.createChoice('Saudação formal, verbo no modo indicativo/subjuntivo correto, foco em entregas e prazos', false),
    q6.createChoice('Usar arcaísmos que dificultam a leitura rápida no ambiente de trabalho', false),
    q6.createChoice('Ambos os interlocutores aprendem e ajustam o discurso', true)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Segundo a aula, o que é "Contexto manda"?');
  q7.setChoices([
    q7.createChoice('Suas ideias parecem desprovidas de estudo ou compromisso sério', false),
    q7.createChoice('Transmite pedantismo e afasta os colegas em vez de demonstrar competência', false),
    q7.createChoice('O excesso de informalidade é visto como imaturidade profissional', false),
    q7.createChoice('A adequação linguística depende sempre do ambiente, público e propósito', true)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Segundo a aula, o que é "A regra de ouro"?');
  q8.setChoices([
    q8.createChoice('Podem soar desleixadas ou excluir interlocutores de outras gerações', false),
    q8.createChoice('O excesso de informalidade é visto como imaturidade profissional', false),
    q8.createChoice('Ambos os interlocutores aprendem e ajustam o discurso', false),
    q8.createChoice('Só use jargão se tiver certeza de que seu interlocutor domina o significado', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Registro Formal"?');
  q9.setChoices([
    q9.createChoice('Segue a norma-padrão gramatical, possui vocabulário preciso, evita gírias e prioriza a objetividade', true),
    q9.createChoice('Prioriza o dinamismo e a conexão imediata. Desconsidera pontuação rígida sem gerar ruído entre pares', false),
    q9.createChoice('A hipercorreção ocorre quando o comunicador tenta soar excessivamente sofisticado ou culto e comete deslizes gramaticais ou artificiais', false),
    q9.createChoice('Na Aula 5 iniciaremos o Módulo 2 de Comunicação Oral, explorando estrutura de apresentações, postura e gestão do nervosismo', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Segundo a aula, o que é "O que você pretende alcançar"?');
  q10.setChoices([
    q10.createChoice('Fuja tanto do desleixo coloquial quanto da hipercorreção artificial', false),
    q10.createChoice('Saudação formal, verbo no modo indicativo/subjuntivo correto, foco em entregas e prazos', false),
    q10.createChoice('O excesso de informalidade é visto como imaturidade profissional', false),
    q10.createChoice('solicitar algo formalmente, desabafar, ensinar ou fechar um acordo', true)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. Qual conceito a aula define como: "Saudação formal, verbo no modo indicativo/subjuntivo correto, foco em entregas e prazos"?');
  q11.setChoices([
    q11.createChoice('Uso com público leigo', false),
    q11.createChoice('Escrita requer zelo', false),
    q11.createChoice('A regra de ouro', false),
    q11.createChoice('Elementos', true)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Abreviações Digitais"?');
  q12.setChoices([
    q12.createChoice('Quais das afirmações a seguir representam práticas adequadas em um e-mail corporativo ou acadêmico? Mais de uma resposta está correta', false),
    q12.createChoice('Contudo, em relatórios, correspondências oficiais ou e-mails corporativos, a economia de toques passa a impressão de pressa e falta de apreço pelo receptor', true),
    q12.createChoice('Segue a norma-padrão gramatical, possui vocabulário preciso, evita gírias e prioriza a objetividade', false),
    q12.createChoice('Jargões são termos técnicos próprios de uma área (médica, jurídica, financeira, tecnológica)', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Passo a Passo da Transição de Tom"?');
  q13.setChoices([
    q13.createChoice('Revise a pontuação e certifique-se de manter o tom educado e objetivo', true),
    q13.createChoice('Prioriza o dinamismo e a conexão imediata. Desconsidera pontuação rígida sem gerar ruído entre pares', false),
    q13.createChoice('Quais das afirmações a seguir representam práticas adequadas em um e-mail corporativo ou acadêmico? Mais de uma resposta está correta', false),
    q13.createChoice('Prioriza a precisão corporativa, previne ambiguidades e consolida compromissos institucionais', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "Avaliação de adequação"?');
  q14.setChoices([
    q14.createChoice('A adequação linguística depende sempre do ambiente, público e propósito', false),
    q14.createChoice('Abreviam caminhos e demonstram intimidade calorosa', false),
    q14.createChoice('Suas ideias parecem desprovidas de estudo ou compromisso sério', false),
    q14.createChoice('Perfeita para um grupo informal entre colegas de turma', true)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Registro Informal"?');
  q15.setChoices([
    q15.createChoice('Prioriza o dinamismo e a conexão imediata. Desconsidera pontuação rígida sem gerar ruído entre pares', false),
    q15.createChoice('A hipercorreção ocorre quando o comunicador tenta soar excessivamente sofisticado ou culto e comete deslizes gramaticais ou artificiais', false),
    q15.createChoice('Marcado pela espontaneidade, uso de termos coloquiais, abreviações e forte proximidade afetiva', true),
    q15.createChoice('Já a escrita é duradoura e desprovida de entonação ao vivo. Uma frase mal pontuada ou ambígua não pode ser retificada no mesmo instante em que é lida', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "Revisão: Feedback Construtivo"?');
  q16.setChoices([
    q16.createChoice('O grau de intimidade, idade e hierarquia definem a proximidade e o tratamento empregado', false),
    q16.createChoice('Usar palavras rebuscadas e arcaicas sempre garante que uma mensagem corporativa seja bem compreendida e respeitada', false),
    q16.createChoice('Focado na entrega de resultados, transparência de processos, alinhamento de metas e registro formal', false),
    q16.createChoice('Para manter a objetividade profissional e evitar reações defensivas ou conflitos', true)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. Segundo a aula, o que é "Falta de limites"?');
  q17.setChoices([
    q17.createChoice('Podem soar desleixadas ou excluir interlocutores de outras gerações', false),
    q17.createChoice('Transmite pedantismo e afasta os colegas em vez de demonstrar competência', false),
    q17.createChoice('Apelidos carinhosos ou emojis excessivos em memorandos geram constrangimento', true),
    q17.createChoice('Ambos os interlocutores aprendem e ajustam o discurso', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Efeito real"?');
  q18.setChoices([
    q18.createChoice('Perfeita para um grupo informal entre colegas de turma', false),
    q18.createChoice('A adequação linguística depende sempre do ambiente, público e propósito', false),
    q18.createChoice('Transmite pedantismo e afasta os colegas em vez de demonstrar competência', true),
    q18.createChoice('Abreviam caminhos e demonstram intimidade calorosa', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "Mensagem na Reunião"?');
  q19.setChoices([
    q19.createChoice('A convergência harmônica desses três pilares garante que a mensagem gere o impacto planejado', false),
    q19.createChoice('O grau de intimidade, idade e hierarquia definem a proximidade e o tratamento empregado', false),
    q19.createChoice('Prioriza a precisão corporativa, previne ambiguidades e consolida compromissos institucionais', true),
    q19.createChoice('O espaço físico ou virtual dita as regras sociais: plenário, sala de reunião ou grupo familiar', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "REVISÃO"?');
  q20.setChoices([
    q20.createChoice('Na aula anterior, compreendemos que a comunicação não é uma via de mão única. O emissor envia a mensagem, e o feedback valida se a ideia foi realmente absorvida', true),
    q20.createChoice('O grau de intimidade, idade e hierarquia definem a proximidade e o tratamento empregado', false),
    q20.createChoice('Quais das afirmações a seguir representam práticas adequadas em um e-mail corporativo ou acadêmico? Mais de uma resposta está correta', false),
    q20.createChoice('A convergência harmônica desses três pilares garante que a mensagem gere o impacto planejado', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ Aula 04 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 20 — Contextos Formais versus Informais Adequação comunicativa, registros e impacto profissional');
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

function analisarRespostasAula20() {
  var form = FormApp.openByTitle('Avaliação — Aula 04 · Contextos Formais versus Informais Adequação comunicativa, registros e impacto profissional · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 04: Contextos Formais versus Informais Adequação comunicativa, registros e impacto profissional');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Contextos Formais versus Informais Adequação comunicativa, registros e impacto profissional', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos da Nossa Aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Feedback Construtivo', 'Qual é o principal propósito do feedback bidirecional no ciclo comunicativo?', 'Por que um feedback deve focar no comportamento ou mensagem, e não na pessoa?', 'O que caracteriza um feedback eficaz no ambiente acadêmico ou profissional?', 'Permitir que emissor e receptor alinhem entendimentos e ajustem a mensagem.', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 21
// ════════════════════════════════════════════════════════════
