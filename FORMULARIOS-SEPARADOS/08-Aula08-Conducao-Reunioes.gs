// ===== 08-Aula08-Conducao-Reunioes.gs =====
// Aula real (sequencia do curso): Aula 08 - Conducao-Reunioes
// Funcao interna (numeracao original do Google Forms): criarFormularioAula24()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula24() {
  var form = FormApp.create('Avaliação — Aula 08 · Participação e Condução de Reuniões Como liderar, intervir com firmeza e registrar decisões com eficiência · SENAI');

  form.setDescription( 'Avaliação Completa: Participação e Condução de Reuniões Como liderar, intervir com firmeza e registrar decisões com eficiência\n\nAula 08 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Participação e Condução de Reuniões Como liderar, intervir com firmeza e registrar decisões com eficiência');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. Segundo a aula, o que é "Separe as pessoas dos problemas"?');
  q1.setChoices([
    q1.createChoice('Envio da pauta aos participantes com pelo menos 24 horas de antecedência', false),
    q1.createChoice('Resumo claro dos debates, destacando os pontos centrais', false),
    q1.createChoice('Encontro formal para alinhar equipes e tomar decisões', false),
    q1.createChoice('ataque os desafios, nunca os colegas', true)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Segundo a aula, o que é "Mediação"?');
  q2.setChoices([
    q2.createChoice('Resumo das matérias discutidas em ordem cronológica', false),
    q2.createChoice('Encontro formal para alinhar equipes e tomar decisões', false),
    q2.createChoice('ataque os desafios, nunca os colegas', false),
    q2.createChoice('Intervenção equilibrada para harmonizar opiniões e resolver desacordos no grupo', true)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "Comunicação assertiva"?');
  q3.setChoices([
    q3.createChoice('Interrompe os outros, ridiculariza opiniões contrárias e impõe pontos de vista na força', true),
    q3.createChoice('Um bom líder de reunião não quer impor sua vontade. Seu desafio é assegurar que vozes tímidas sejam ouvidas e que ninguém monopolize o microfone', false),
    q3.createChoice('Defender suas ideias não exige falar mais alto ou desqualificar os outros. Firmeza comunicativa nasce da consistência lógica e do controle vocal', false),
    q3.createChoice('No colégio ou no trabalho, conversas desorganizadas geram cansaço, dispersão e atraso nos projetos', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Pauta tratada"?');
  q4.setChoices([
    q4.createChoice('Encontro formal para alinhar equipes e tomar decisões', false),
    q4.createChoice('Decisões tomadas (inclusive votos contrários e ressalvas)', false),
    q4.createChoice('Resumo das matérias discutidas em ordem cronológica', true),
    q4.createChoice('Data, horário, local e lista de participantes presentes e ausentes', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Qual conceito a aula define como: "Encontro formal para alinhar equipes e tomar decisões"?');
  q5.setChoices([
    q5.createChoice('Gestão Ativa do Tempo', false),
    q5.createChoice('Cabeçalho', false),
    q5.createChoice('Reunião', true),
    q5.createChoice('Esquerda', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Sinalize a intenção"?');
  q6.setChoices([
    q6.createChoice('Foco em metas, prazos, orçamentos e decisões pragmáticas com impacto imediato nos resultados da empresa', false),
    q6.createChoice('Em conversas longas, o grupo tende a se perder em detalhes repetitivos. O papel de quem sintetiza é organizar o caos verbal em alternativas claras', false),
    q6.createChoice('Um bom líder de reunião não quer impor sua vontade. Seu desafio é assegurar que vozes tímidas sejam ouvidas e que ninguém monopolize o microfone', false),
    q6.createChoice('Levante a mão fisicamente ou use o recurso do aplicativo sem atropelar a fala de quem está expondo', true)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Qual conceito a aula define como: "ataque os desafios, nunca os colegas"?');
  q7.setChoices([
    q7.createChoice('Pauta', false),
    q7.createChoice('Registro Imediato de Ações', false),
    q7.createChoice('Separe as pessoas dos problemas', true),
    q7.createChoice('Preparação Prévia', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "O propósito do encontro"?');
  q8.setChoices([
    q8.createChoice('Reuniões são instrumentos de alinhamento estratégico, tomada de decisão e resolução coletiva de problemas', true),
    q8.createChoice('Em conversas longas, o grupo tende a se perder em detalhes repetitivos. O papel de quem sintetiza é organizar o caos verbal em alternativas claras', false),
    q8.createChoice('Defender suas ideias não exige falar mais alto ou desqualificar os outros. Firmeza comunicativa nasce da consistência lógica e do controle vocal', false),
    q8.createChoice('Um bom líder de reunião não quer impor sua vontade. Seu desafio é assegurar que vozes tímidas sejam ouvidas e que ninguém monopolize o microfone', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Papéis em uma reunião"?');
  q9.setChoices([
    q9.createChoice('Conduz a pauta, controla o tempo, estimula a participação de todos e mantém o foco no objetivo central', true),
    q9.createChoice('Defender ideias com firmeza e fatos sem atacar nem desrespeitar os colegas', false),
    q9.createChoice('Momento de afunilamento, onde o grupo avalia critérios práticos e escolhe uma rota definitiva', false),
    q9.createChoice('A ata evita o esquecimento de detalhes e serve de referência para quem faltou ao encontro', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "Participação e Condução de Reuniões"?');
  q10.setChoices([
    q10.createChoice('Reuniões produtivas constroem soluções compartilhadas e aceleram grandes conquistas!', false),
    q10.createChoice('Como liderar, intervir com firmeza e registrar decisões com eficiência', true),
    q10.createChoice('Um bom líder de reunião não quer impor sua vontade. Seu desafio é assegurar que vozes tímidas sejam ouvidas e que ninguém monopolize o microfone', false),
    q10.createChoice('Ninguém sabe o que debater; cada participante puxa um tema aleatório e o tempo esgota', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. Qual conceito a aula define como: "Tabela com tarefa, responsável e data de entrega"?');
  q11.setChoices([
    q11.createChoice('Separe as pessoas dos problemas', false),
    q11.createChoice('Plano de ação', true),
    q11.createChoice('Deliberações', false),
    q11.createChoice('Registro Imediato de Ações', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Qual conceito a aula define como: "Resumo das matérias discutidas em ordem cronológica"?');
  q12.setChoices([
    q12.createChoice('Síntese', false),
    q12.createChoice('Mediação', false),
    q12.createChoice('Registro Imediato de Ações', false),
    q12.createChoice('Pauta tratada', true)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. Segundo a aula, o que é "Pauta"?');
  q13.setChoices([
    q13.createChoice('Envio da pauta aos participantes com pelo menos 24 horas de antecedência', false),
    q13.createChoice('Intervenção equilibrada para harmonizar opiniões e resolver desacordos no grupo', false),
    q13.createChoice('Tabela com tarefa, responsável e data de entrega', false),
    q13.createChoice('Lista prévia de tópicos com metas e tempos definidos para guiar o diálogo', true)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "Esquerda"?');
  q14.setChoices([
    q14.createChoice('Decisões tomadas (inclusive votos contrários e ressalvas)', false),
    q14.createChoice('Controle firme dos minutos por tópico sem permitir digressões fora da pauta', false),
    q14.createChoice('Data, horário, local e lista de participantes presentes e ausentes', false),
    q14.createChoice('sem pauta, atrasos e dispersão. Direita: foco no objetivo, respeito aos tempos e ação', true)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Segundo a aula, o que é "Gestão Ativa do Tempo"?');
  q15.setChoices([
    q15.createChoice('Intervenção equilibrada para harmonizar opiniões e resolver desacordos no grupo', false),
    q15.createChoice('Encontro formal para alinhar equipes e tomar decisões', false),
    q15.createChoice('Resumo claro dos debates, destacando os pontos centrais', false),
    q15.createChoice('Controle firme dos minutos por tópico sem permitir digressões fora da pauta', true)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Segundo a aula, o que é "Plano de ação"?');
  q16.setChoices([
    q16.createChoice('Tabela com tarefa, responsável e data de entrega', true),
    q16.createChoice('Resumo das matérias discutidas em ordem cronológica', false),
    q16.createChoice('Envio da pauta aos participantes com pelo menos 24 horas de antecedência', false),
    q16.createChoice('ataque os desafios, nunca os colegas', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Falta de Pauta"?');
  q17.setChoices([
    q17.createChoice('A ata evita o esquecimento de detalhes e serve de referência para quem faltou ao encontro', false),
    q17.createChoice('Ninguém sabe o que debater; cada participante puxa um tema aleatório e o tempo esgota', true),
    q17.createChoice('Foco em metas, prazos, orçamentos e decisões pragmáticas com impacto imediato nos resultados da empresa', false),
    q17.createChoice('Defender suas ideias não exige falar mais alto ou desqualificar os outros. Firmeza comunicativa nasce da consistência lógica e do controle vocal', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Qual conceito a aula define como: "Intervenção equilibrada para harmonizar opiniões e resolver desacordos no grupo"?');
  q18.setChoices([
    q18.createChoice('Cabeçalho', false),
    q18.createChoice('Mediação', true),
    q18.createChoice('Preparação Prévia', false),
    q18.createChoice('Esquerda', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "Fase Divergente"?');
  q19.setChoices([
    q19.createChoice('Em conversas longas, o grupo tende a se perder em detalhes repetitivos. O papel de quem sintetiza é organizar o caos verbal em alternativas claras', false),
    q19.createChoice('Exponha sua sugestão principal nos primeiros 20 segundos antes de detalhar justificativas', false),
    q19.createChoice('Momento de brainstorming livre, onde surgem ideias diferentes sem julgamento prematuro', true),
    q19.createChoice('Levante a mão fisicamente ou use o recurso do aplicativo sem atropelar a fala de quem está expondo', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "A importância da ata"?');
  q20.setChoices([
    q20.createChoice('Em uma ata formal de reunião escolar, é necessário transcrever palavra por palavra tudo o que cada estudante falou', false),
    q20.createChoice('A ata evita o esquecimento de detalhes e serve de referência para quem faltou ao encontro', true),
    q20.createChoice('Interrompe os outros, ridiculariza opiniões contrárias e impõe pontos de vista na força', false),
    q20.createChoice('Momento de afunilamento, onde o grupo avalia critérios práticos e escolhe uma rota definitiva', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  Logger.log('✅ Aula 08 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 24 — Participação e Condução de Reuniões Como liderar, intervir com firmeza e registrar decisões com eficiência');
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

function analisarRespostasAula24() {
  var form = FormApp.openByTitle('Avaliação — Aula 08 · Participação e Condução de Reuniões Como liderar, intervir com firmeza e registrar decisões com eficiência · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 08: Participação e Condução de Reuniões Como liderar, intervir com firmeza e registrar decisões com eficiência');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Participação e Condução de Reuniões Como liderar, intervir com firmeza e registrar decisões com eficiência', 'É um conceito importante apresentado na aula', 'O dilema das reuniões', 'É um conceito importante apresentado na aula', 'Objetivos da nossa aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Encontro formal para alinhar equipes e tomar decisões.', 'Lista prévia de tópicos com metas e tempos definidos para guiar o diálogo.', 'Resumo claro dos debates, destacando os pontos centrais.', 'Intervenção equilibrada para harmonizar opiniões e resolver desacordos no grupo.', '“O que vocês acham de testarmos este caminho por uma semana?”.', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 25
// ════════════════════════════════════════════════════════════
