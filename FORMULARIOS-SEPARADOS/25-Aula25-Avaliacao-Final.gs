// ===== 25-Aula25-Avaliacao-Final.gs =====
// Aula real (sequencia do curso): Aula 25 - Avaliacao-Final
// Funcao interna (numeracao original do Google Forms): criarFormularioAula18()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula18() {
  var form = FormApp.create('Avaliação — Aula 25 · Avaliação Final e Encerramento · SENAI');

  form.setDescription( 'Avaliação Completa: Avaliação Final e Encerramento\n\nAula 25 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  // setLimitOneResponsePerUser removido: exigia login Google. Identificacao do aluno agora e feita pelo Nome Completo
  form.setConfirmationMessage('✅ Resposta enviada! Sua pontuação aparece logo acima, nesta mesma tela.');

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('Questionário Completo — Avaliação Final e Encerramento');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Clareza Estrutural"?');
  q1.setChoices([
    q1.createChoice('Minhas frases foram coesas ou deixei lacunas de sentido para o leitor?', true),
    q1.createChoice('Técnicas de coesão e proposta de intervenção direta aplicadas ao texto dissertativo', false),
    q1.createChoice('Contato visual firme, gesticulação aberta e coerência com a fala', false),
    q1.createChoice('Postura em redes corporativas, netiqueta e segurança de dados', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Segundo a aula, o que é "Equipe 3"?');
  q2.setChoices([
    q2.createChoice('Atendimento Eficaz e Escuta Ativa na Escola', true),
    q2.createChoice('Releia cada e-mail e mensagem profissional com olhar crítico antes do clique final', false),
    q2.createChoice('Relatório de Diagnóstico de Comunicação Interna', false),
    q2.createChoice('barreiras que distorcem o sentido pretendido', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "FUNDAMENTOS"?');
  q3.setChoices([
    q3.createChoice('Contato visual firme, gesticulação aberta e coerência com a fala', false),
    q3.createChoice('Minhas frases foram coesas ou deixei lacunas de sentido para o leitor?', false),
    q3.createChoice('A Equipe 3 realiza uma breve simulação de atendimento cordial demonstrando escuta ativa resolutiva', false),
    q3.createChoice('No início, descobrimos que falar ou escrever não basta: comunicar exige que a mensagem chegue intacta ao destinatário e produza compreensão mútua', true)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. De acordo com a aula, o que caracteriza "Expressão Oral"?');
  q4.setChoices([
    q4.createChoice('Minhas frases foram coesas ou deixei lacunas de sentido para o leitor?', false),
    q4.createChoice('Agora que finalizamos as apresentações em equipe, cada estudante verificará a consolidação dos conceitos teóricos fundamentais do curso', false),
    q4.createChoice('Apresentação oral para avaliadores com clareza conceitual e postura segura', false),
    q4.createChoice('Modulação vocal, pausas planejadas e controle emocional sob pressão', true)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Qual conceito a aula define como: "Domínio sólido das regras formais e digitais"?');
  q5.setChoices([
    q5.createChoice('Equipe 4', false),
    q5.createChoice('Critério de aprovação', false),
    q5.createChoice('Retenção', true),
    q5.createChoice('Evolução Notável', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Qual conceito a aula define como: "identificação de tom em e-mails e memorandos"?');
  q6.setChoices([
    q6.createChoice('Casos práticos', true),
    q6.createChoice('Equipe 1', false),
    q6.createChoice('Participação', false),
    q6.createChoice('Retenção', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Qual conceito a aula define como: "Ato de expor ideias a um público com clareza, técnica e empatia"?');
  q7.setChoices([
    q7.createChoice('Feedback', false),
    q7.createChoice('Apresentação', true),
    q7.createChoice('Ruídos', false),
    q7.createChoice('Leia diariamente', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Segundo a aula, o que é "Apresentação"?');
  q8.setChoices([
    q8.createChoice('confirmação explícita de eficácia comunicativa', false),
    q8.createChoice('Estudantes que superaram o receio do palco com treino constante', false),
    q8.createChoice('aproveitamento mínimo fixado em 60%', false),
    q8.createChoice('Ato de expor ideias a um público com clareza, técnica e empatia', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Postura Não-Verbal"?');
  q9.setChoices([
    q9.createChoice('Minhas frases foram coesas ou deixei lacunas de sentido para o leitor?', false),
    q9.createChoice('Modulação vocal, pausas planejadas e controle emocional sob pressão', false),
    q9.createChoice('Contato visual firme, gesticulação aberta e coerência com a fala', true),
    q9.createChoice('Agora que finalizamos as apresentações em equipe, cada estudante verificará a consolidação dos conceitos teóricos fundamentais do curso', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Qual conceito a aula define como: "Manual de Procedimento para Reuniões Escolares"?');
  q10.setChoices([
    q10.createChoice('Equipe 2', true),
    q10.createChoice('Ruídos', false),
    q10.createChoice('Pratique a escuta ativa', false),
    q10.createChoice('Retenção', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. Segundo a aula, o que é "Avaliação"?');
  q11.setChoices([
    q11.createChoice('barreiras que distorcem o sentido pretendido', false),
    q11.createChoice('Releia cada e-mail e mensagem profissional com olhar crítico antes do clique final', false),
    q11.createChoice('Medição sistemática de conhecimentos e habilidades com critérios claros', true),
    q11.createChoice('Demonstração prática e observável das competências exigidas', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Segundo a aula, o que é "Evolução Notável"?');
  q12.setChoices([
    q12.createChoice('Ato de expor ideias a um público com clareza, técnica e empatia', false),
    q12.createChoice('Manual de Procedimento para Reuniões Escolares', false),
    q12.createChoice('Estudantes que superaram o receio do palco com treino constante', true),
    q12.createChoice('Relatório de Diagnóstico de Comunicação Interna', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Estrutura da Avaliação Escrita"?');
  q13.setChoices([
    q13.createChoice('O maior comunicador não é aquele que apenas fala alto, mas aquele que compreende o contexto e ajusta sua mensagem com sensibilidade e respeito', false),
    q13.createChoice('A disciplina termina aqui, mas sua expressão continua em cada trabalho acadêmico, entrevista e conversa cidadã', false),
    q13.createChoice('A prova somativa individual verifica a retenção duradoura dos padrões de comunicação profissional aprendidos em 6 módulos', true),
    q13.createChoice('Coesão sintática, precisão gramatical e formatação adequada ao leitor', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Apresentações 3 e 4"?');
  q14.setChoices([
    q14.createChoice('Como lidei com a ansiedade antes e durante as falas públicas?', false),
    q14.createChoice('Agora que finalizamos as apresentações em equipe, cada estudante verificará a consolidação dos conceitos teóricos fundamentais do curso', false),
    q14.createChoice('No início, descobrimos que falar ou escrever não basta: comunicar exige que a mensagem chegue intacta ao destinatário e produza compreensão mútua', false),
    q14.createChoice('A Equipe 4 encerra expondo os resultados de um relatório técnico com dados analíticos sobre comunicação escolar', true)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Redações do ENEM"?');
  q15.setChoices([
    q15.createChoice('Técnicas de coesão e proposta de intervenção direta aplicadas ao texto dissertativo', true),
    q15.createChoice('Contribuí ativamente na divisão das tarefas e ouvi os colegas com respeito?', false),
    q15.createChoice('No início, descobrimos que falar ou escrever não basta: comunicar exige que a mensagem chegue intacta ao destinatário e produza compreensão mútua', false),
    q15.createChoice('A prova somativa individual verifica a retenção duradoura dos padrões de comunicação profissional aprendidos em 6 módulos', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Segundo a aula, o que é "Feedback"?');
  q16.setChoices([
    q16.createChoice('confirmação explícita de eficácia comunicativa', true),
    q16.createChoice('Manual de Procedimento para Reuniões Escolares', false),
    q16.createChoice('Medição sistemática de conhecimentos e habilidades com critérios claros', false),
    q16.createChoice('100% dos grupos concluíram o projeto no prazo', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. Qual conceito a aula define como: "Demonstração prática e observável das competências exigidas"?');
  q17.setChoices([
    q17.createChoice('Equipe 1', false),
    q17.createChoice('Apresentações', false),
    q17.createChoice('Desempenho', true),
    q17.createChoice('Casos práticos', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Participação"?');
  q18.setChoices([
    q18.createChoice('Mais de 90% de engajamento ativo nas práticas', true),
    q18.createChoice('identificação de tom em e-mails e memorandos', false),
    q18.createChoice('Ato de expor ideias a um público com clareza, técnica e empatia', false),
    q18.createChoice('Estudantes que superaram o receio do palco com treino constante', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "Impacto no Mundo do Trabalho"?');
  q19.setChoices([
    q19.createChoice('No ambiente profissional, a competência comunicativa é frequentemente apontada como o diferencial mais decisivo entre jovens profissionais', true),
    q19.createChoice('Vocabulário preciso, ideias compreensíveis e ausência de jargão desnecessário', false),
    q19.createChoice('Apresentação oral para avaliadores com clareza conceitual e postura segura', false),
    q19.createChoice('Técnicas de coesão e proposta de intervenção direta aplicadas ao texto dissertativo', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Qual conceito a aula define como: "Equipes que sintetizaram conceitos complexos em linguagem acessível"?');
  q20.setChoices([
    q20.createChoice('Clareza Exemplar', true),
    q20.createChoice('Apresentação', false),
    q20.createChoice('Equipe 1', false),
    q20.createChoice('Evolução', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  Logger.log('✅ Aula 25 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 18 — Avaliação Final e Encerramento');
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

function analisarRespostasAula18() {
  var form = FormApp.openByTitle('Avaliação — Aula 25 · Avaliação Final e Encerramento · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 25: Avaliação Final e Encerramento');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Avaliação Final e Encerramento', 'Avaliação Final e Encerramento', 'É um conceito importante apresentado na aula', 'O que mudou na sua voz?', 'É um conceito importante apresentado na aula', 'Objetivos da Nossa Aula Final', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'o nervosismo diante de uma pergunta, a dúvida ao estruturar um e-mail formal ou a insegurança ao fal', 'Medição sistemática de conhecimentos e habilidades com critérios claros.', 'Ato de expor ideias a um público com clareza, técnica e empatia.', 'Demonstração prática e observável das competências exigidas.', 'Progresso contínuo verificado entre o ponto de partida e o atual.', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 19
// ════════════════════════════════════════════════════════════
