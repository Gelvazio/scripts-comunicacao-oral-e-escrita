// ===== 17-Aula17-Projeto-Capstone.gs =====
// Funcao: criarFormularioAula17()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula17() {
  var form = FormApp.create('Avaliação — Aula 17 · Integração Prática: O Projeto Capstone Unindo escrita técnica, oratória e ferramentas digitais · SENAI');

  form.setDescription( 'Avaliação Completa: Integração Prática: O Projeto Capstone Unindo escrita técnica, oratória e ferramentas digitais\n\nAula 17 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Integração Prática: O Projeto Capstone Unindo escrita técnica, oratória e ferramentas digitais');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Entregável 2: Memorando Interno"?');
  q1.setChoices([
    q1.createChoice('Netiqueta, segurança de dados em nuvem e congruência postural ativa', false),
    q1.createChoice('Enquanto o relatório detalha o problema para os diretores, o memorando interno atua diretamente na operação diária com rapidez e objetividade', true),
    q1.createChoice('Na aula anterior, vimos que o sincronismo não-verbal valida a mensagem falada. Quando o tom de voz e os gestos contradizem as palavras, o público perde a confiança...', false),
    q1.createChoice('Observe a objetividade do parágrafo de encaminhamento do memorando interno', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Segundo a aula, o que é "Projeto"?');
  q2.setChoices([
    q2.createChoice('Esforço temporário planejado para criar um resultado ou solução específica', true),
    q2.createChoice('Instruções operacionais sem rodeios', false),
    q2.createChoice('Gestual congruente, tom de voz audível e seguro, respeito ao tempo', false),
    q2.createChoice('Braços relaxados e olhar firme demonstram clareza', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Qual conceito a aula define como: "Braços relaxados e olhar firme demonstram clareza"?');
  q3.setChoices([
    q3.createChoice('Performance Oral', false),
    q3.createChoice('Crítica construtiva', false),
    q3.createChoice('Postura aberta', true),
    q3.createChoice('Qualidade Redacional', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Texto direto"?');
  q4.setChoices([
    q4.createChoice('Slides com parágrafos inteiros copiados do relatório', false),
    q4.createChoice('Braços relaxados e olhar firme demonstram clareza', false),
    q4.createChoice('Diagnóstico preciso e soluções aplicáveis com fundamentação real', false),
    q4.createChoice('Instruções operacionais sem rodeios', true)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Segundo a aula, o que é "Clareza no assunto"?');
  q5.setChoices([
    q5.createChoice('Instruções operacionais sem rodeios', false),
    q5.createChoice('Nomeie documentos de modo inequívoco', true),
    q5.createChoice('Pausas e variações de volume evitam a monotonia', false),
    q5.createChoice('Diagnóstico preciso e soluções aplicáveis com fundamentação real', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Qual conceito a aula define como: "Dividir papéis claros na equipe garante produtividade sem retrabalho ou sobreposição"?');
  q6.setChoices([
    q6.createChoice('Consistência Técnica', false),
    q6.createChoice('Diagnóstico da Falha', false),
    q6.createChoice('Integração', false),
    q6.createChoice('Cooperação Estruturada', true)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Qual conceito a aula define como: "Pausas e variações de volume evitam a monotonia"?');
  q7.setChoices([
    q7.createChoice('Elogio sincero', false),
    q7.createChoice('Cabeçalho formal', false),
    q7.createChoice('Texto direto', false),
    q7.createChoice('Inflexão vocal', true)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "Suporte Visual"?');
  q8.setChoices([
    q8.createChoice('O termo capstone refere-se à pedra angular que coroa uma cúpula ou monumento arquitetônico. No ambiente educacional e profissional, representa a síntese culminante...', false),
    q8.createChoice('Slides objetivos sem excesso de texto, priorizando diagramas e métricas essenciais', true),
    q8.createChoice('Netiqueta, segurança de dados em nuvem e congruência postural ativa', false),
    q8.createChoice('Observe a objetividade do parágrafo de encaminhamento do memorando interno', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Segundo a aula, o que é "Falta de ensaio conjunto"?');
  q9.setChoices([
    q9.createChoice('Revisões criteriosas entre pares aperfeiçoam a proposta antes da entrega definitiva', false),
    q9.createChoice('senhas bloqueadas, suporte sobrecarregado e mensagens agressivas em redes sociais', false),
    q9.createChoice('Apontar uma ambiguidade ou lacuna técnica', false),
    q9.createChoice('Transições desajeitadas entre os oradores', true)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Segundo a aula, o que é "Crítica construtiva"?');
  q10.setChoices([
    q10.createChoice('União harmoniosa de diferentes partes em um sistema único e funcional', false),
    q10.createChoice('Ações preventivas de longo prazo', false),
    q10.createChoice('Apontar uma ambiguidade ou lacuna técnica', true),
    q10.createChoice('Atividade coordenada com empenho físico e mental para atingir um objetivo', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. Qual conceito a aula define como: "A comunicação profissional eficaz exige o alinhamento simultâneo de texto técnico, ferramentas e fala"?');
  q11.setChoices([
    q11.createChoice('O resultado foi imediato', false),
    q11.createChoice('Integração de Competências', true),
    q11.createChoice('Sobrecarga visual', false),
    q11.createChoice('Confidencialidade', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Comunicação Oral"?');
  q12.setChoices([
    q12.createChoice('Oratória, reuniões participativas, ritmo vocal e técnicas de apresentação', true),
    q12.createChoice('Identificar pontos fortes do texto e sugerir ajustes objetivos nas partes que apresentarem ambiguidade', false),
    q12.createChoice('Seu plano está delineado, seus documentos redigidos e sua oratória calibrada. Na Aula 25, sua equipe defenderá o Projeto Capstone perante a banca examinadora', false),
    q12.createChoice('Durante a oficina, cada grupo examinará a proposta de outra equipe utilizando o método sanduíche', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. Qual conceito a aula define como: "Ações preventivas de longo prazo"?');
  q13.setChoices([
    q13.createChoice('Recomendações Finais', true),
    q13.createChoice('Evitar caixa alta', false),
    q13.createChoice('Diagnóstico da Falha', false),
    q13.createChoice('Rigor e Feedback', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "Performance Oral"?');
  q14.setChoices([
    q14.createChoice('Instruções operacionais sem rodeios', false),
    q14.createChoice('Gestual congruente, tom de voz audível e seguro, respeito ao tempo', true),
    q14.createChoice('Ações preventivas de longo prazo', false),
    q14.createChoice('Identificação dos canais rompidos', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Discussão: Integração Comunicativa"?');
  q15.setChoices([
    q15.createChoice('Alinhamento rápido com tópicos organizados e respeito aos horários da equipe', false),
    q15.createChoice('Slides objetivos sem excesso de texto, priorizando diagramas e métricas essenciais', false),
    q15.createChoice('A comunicação deixa de ser ato espontâneo e vira processo estratégico', true),
    q15.createChoice('O termo capstone refere-se à pedra angular que coroa uma cúpula ou monumento arquitetônico. No ambiente educacional e profissional, representa a síntese culminante...', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "O Conceito do Projeto Capstone"?');
  q16.setChoices([
    q16.createChoice('Identificar pontos fortes do texto e sugerir ajustes objetivos nas partes que apresentarem ambiguidade', false),
    q16.createChoice('Edição simultânea de textos para garantir que todos contribuam com dados consistentes', false),
    q16.createChoice('O termo capstone refere-se à pedra angular que coroa uma cúpula ou monumento arquitetônico. No ambiente educacional e profissional, representa a síntese culminante...', true),
    q16.createChoice('Slides objetivos sem excesso de texto, priorizando diagramas e métricas essenciais', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Evitando Falhas Comuns"?');
  q17.setChoices([
    q17.createChoice('Em projetos integradores, as equipes frequentemente tropeçam nos mesmos pontos cegos', true),
    q17.createChoice('Oratória, reuniões participativas, ritmo vocal e técnicas de apresentação', false),
    q17.createChoice('Observe a objetividade do parágrafo de encaminhamento do memorando interno', false),
    q17.createChoice('O relatório precisa seguir o padrão formal estudado no Módulo 4', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Aplicação"?');
  q18.setChoices([
    q18.createChoice('Ações preventivas de longo prazo', false),
    q18.createChoice('senhas bloqueadas, suporte sobrecarregado e mensagens agressivas em redes sociais', false),
    q18.createChoice('União harmoniosa de diferentes partes em um sistema único e funcional', false),
    q18.createChoice('Uso concreto de teorias e regras em situações reais e práticas', true)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Segundo a aula, o que é "O resultado foi imediato"?');
  q19.setChoices([
    q19.createChoice('Dados simulados devem ser protegidos', false),
    q19.createChoice('senhas bloqueadas, suporte sobrecarregado e mensagens agressivas em redes sociais', true),
    q19.createChoice('Destacar um ponto forte da análise apresentada', false),
    q19.createChoice('Oferecer uma recomendação viável de melhoria', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Qual conceito a aula define como: "Identificação dos canais rompidos"?');
  q20.setChoices([
    q20.createChoice('Inflexão vocal', false),
    q20.createChoice('Diagnóstico da Falha', true),
    q20.createChoice('O resultado foi imediato', false),
    q20.createChoice('Consistência Técnica', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  Logger.log('✅ AULA 17 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 17 — Integração Prática: O Projeto Capstone Unindo escrita técnica, oratória e ferramentas digitais');
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

function analisarRespostasAula17() {
  var form = FormApp.openByTitle('Avaliação — Aula 17 · Integração Prática: O Projeto Capstone Unindo escrita técnica, oratória e ferramentas digitais · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — AULA 17: Integração Prática: O Projeto Capstone Unindo escrita técnica, oratória e ferramentas digitais');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Integração Prática: O Projeto Capstone Unindo escrita técnica, oratória e ferramentas digitais', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos de Aprendizagem', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'O Projeto Capstone Unindo escrita técnica, oratória e ferramentas digitais', 'União harmoniosa de diferentes partes em um sistema único e funcional.', 'Esforço temporário planejado para criar um resultado ou solução específica.', 'Uso concreto de teorias e regras em situações reais e práticas.', 'Atividade coordenada com empenho físico e mental para atingir um objetivo.', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 18
// ════════════════════════════════════════════════════════════
