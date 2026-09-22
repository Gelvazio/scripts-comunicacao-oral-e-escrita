// ===== 22-Aula22-Linguagem-Corporal.gs =====
// Aula real (sequencia do curso): Aula 22 - Linguagem-Corporal
// Funcao interna (numeracao original do Google Forms): criarFormularioAula15()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula15() {
  var form = FormApp.create('Avaliação — Aula 22 · Linguagem Corporal e Comunicação O poder dos sinais não-verbais no ambiente profissional · SENAI');

  form.setDescription( 'Avaliação Completa: Linguagem Corporal e Comunicação O poder dos sinais não-verbais no ambiente profissional\n\nAula 22 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Linguagem Corporal e Comunicação O poder dos sinais não-verbais no ambiente profissional');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. Segundo a aula, o que é "Proxêmica"?');
  q1.setChoices([
    q1.createChoice('Gestual e modulação do tom de voz para apresentações dinâmicas e persuasivas', false),
    q1.createChoice('Todo sinal comunicado sem palavras faladas ou escritas', false),
    q1.createChoice('Estudo do uso do espaço físico e da distância interpessoal', true),
    q1.createChoice('Descobrimos como postura, olhar, proxêmica e congruência fundamentam a credibilidade', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Qual conceito a aula define como: "Posição sustentada do corpo que reflete estados internos e atitude"?');
  q2.setChoices([
    q2.createChoice('Congruência', false),
    q2.createChoice('Próxima Aula', false),
    q2.createChoice('Postura', true),
    q2.createChoice('Proxêmica', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Qual conceito a aula define como: "Harmonia precisa entre o que a voz diz e o corpo expressa"?');
  q3.setChoices([
    q3.createChoice('Proxêmica', false),
    q3.createChoice('Postura', false),
    q3.createChoice('Congruência', true),
    q3.createChoice('Hoje', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Próxima Aula"?');
  q4.setChoices([
    q4.createChoice('Posição sustentada do corpo que reflete estados internos e atitude', false),
    q4.createChoice('Descobrimos como postura, olhar, proxêmica e congruência fundamentam a credibilidade', false),
    q4.createChoice('Gestual e modulação do tom de voz para apresentações dinâmicas e persuasivas', true),
    q4.createChoice('Harmonia precisa entre o que a voz diz e o corpo expressa', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Segundo a aula, o que é "Hoje"?');
  q5.setChoices([
    q5.createChoice('Posição sustentada do corpo que reflete estados internos e atitude', false),
    q5.createChoice('Descobrimos como postura, olhar, proxêmica e congruência fundamentam a credibilidade', true),
    q5.createChoice('Gestual e modulação do tom de voz para apresentações dinâmicas e persuasivas', false),
    q5.createChoice('Estudo do uso do espaço físico e da distância interpessoal', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Expressões Faciais e Fala"?');
  q6.setChoices([
    q6.createChoice('O rosto possui dezenas de músculos que reagem a microemoções. Em conversas formais, expressões relaxadas e pequenos sorrisos de acolhimento desarmam tensões e...', true),
    q6.createChoice('A congruência ocorre quando voz, palavras e corpo contam exatamente a mesma história. Quando há conflito entre o que se fala e como o corpo se comporta, as pessoas...', false),
    q6.createChoice('Balance suavemente a cabeça enquanto o entrevistador faz as perguntas', false),
    q6.createChoice('Indicam pressa, perda de foco ou necessidade de sintetizar o assunto', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Segundo a aula, o que é "Congruência"?');
  q7.setChoices([
    q7.createChoice('Estudo do uso do espaço físico e da distância interpessoal', false),
    q7.createChoice('Harmonia precisa entre o que a voz diz e o corpo expressa', true),
    q7.createChoice('Descobrimos como postura, olhar, proxêmica e congruência fundamentam a credibilidade', false),
    q7.createChoice('Gestual e modulação do tom de voz para apresentações dinâmicas e persuasivas', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "Linguagem Corporal em Entrevistas"?');
  q8.setChoices([
    q8.createChoice('Segurar pastas ou cadernos como escudos na frente do tórax', false),
    q8.createChoice('Comunicação não-verbal abrange todos os estímulos emitidos durante uma interação que não dependem do vocabulário verbal: expressões do rosto, gestos de mãos...', false),
    q8.createChoice('Como raramente vemos a nossa própria postura enquanto falamos, ter um parceiro de treino para apontar tiques nervosos, velocidade de gestos e desvios de olhar é a...', false),
    q8.createChoice('Cumprimente olhando nos olhos com passo firme e sorriso de boas-vindas', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Ritmo Compartilhado"?');
  q9.setChoices([
    q9.createChoice('Sente-se ocupando o encosto; sentar na ponta transmite fuga iminente', false),
    q9.createChoice('Deixe as mãos sobre a mesa ou no colo, sem sumir com elas sob o tampo', false),
    q9.createChoice('Comprime a respiração diafragmática e reduz a projeção da voz', false),
    q9.createChoice('Ajustar a velocidade da sua fala à de quem ouve gera acolhimento sem pressão', true)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "O Impacto na Percepção Oral"?');
  q10.setChoices([
    q10.createChoice('O contato visual direto e equilibrado sinaliza atenção honesta e consideração. Quem evita olhar transmite evasão ou insegurança; quem fixa o olhar sem piscar pode...', false),
    q10.createChoice('Dizer que está muito feliz com o projeto enquanto franze a testa gera desconfiança imediata no ouvinte', false),
    q10.createChoice('Sente-se ocupando o encosto; sentar na ponta transmite fuga iminente', false),
    q10.createChoice('Quando alguém sobe ao palco para falar, o público formula uma primeira impressão sobre credibilidade e entusiasmo antes mesmo da conclusão do primeiro parágrafo. O...', true)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Inclinação da Cabeça"?');
  q11.setChoices([
    q11.createChoice('Sintonia e harmonia perfeita entre o discurso falado e os gestos corporais', false),
    q11.createChoice('Cumprimente olhando nos olhos com passo firme e sorriso de boas-vindas', false),
    q11.createChoice('Demonstra curiosidade genuína e escuta ativa ativa na conversa', true),
    q11.createChoice('Gesticule preferencialmente entre a linha da cintura e a altura do peito. Mãos muito altas distraem os ouvintes; mãos imóveis nos bolsos transmitem apatia e...', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Qual conceito a aula define como: "Estudo do uso do espaço físico e da distância interpessoal"?');
  q12.setChoices([
    q12.createChoice('Proxêmica', true),
    q12.createChoice('Não-verbal', false),
    q12.createChoice('Congruência', false),
    q12.createChoice('Postura', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. Qual conceito a aula define como: "Gestual e modulação do tom de voz para apresentações dinâmicas e persuasivas"?');
  q13.setChoices([
    q13.createChoice('Postura', false),
    q13.createChoice('Proxêmica', false),
    q13.createChoice('Próxima Aula', true),
    q13.createChoice('Não-verbal', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Dicas para o Contato Visual"?');
  q14.setChoices([
    q14.createChoice('Como raramente vemos a nossa própria postura enquanto falamos, ter um parceiro de treino para apontar tiques nervosos, velocidade de gestos e desvios de olhar é a...', false),
    q14.createChoice('Sustentar o olhar em um interlocutor por 3 a 5 segundos enquanto conclui um argumento demonstra domínio e gera conexão imediata com quem ouve', true),
    q14.createChoice('Estudos em psicologia comportamental mostram que a postura não apenas expressa o que sentimos, mas também envia sinais químicos ao cérebro. Adotar posturas...', false),
    q14.createChoice('Quais dos seguintes comportamentos corporais indicam abertura e segurança durante uma exposição em grupo? Selecione as opções corretas', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Muito além das palavras escritas"?');
  q15.setChoices([
    q15.createChoice('O contato visual direto e equilibrado sinaliza atenção honesta e consideração. Quem evita olhar transmite evasão ou insegurança; quem fixa o olhar sem piscar pode...', false),
    q15.createChoice('Como raramente vemos a nossa própria postura enquanto falamos, ter um parceiro de treino para apontar tiques nervosos, velocidade de gestos e desvios de olhar é a...', false),
    q15.createChoice('Comunicação não-verbal abrange todos os estímulos emitidos durante uma interação que não dependem do vocabulário verbal: expressões do rosto, gestos de mãos...', true),
    q15.createChoice('Cumprimente olhando nos olhos com passo firme e sorriso de boas-vindas', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Qual conceito a aula define como: "Descobrimos como postura, olhar, proxêmica e congruência fundamentam a credibilidade"?');
  q16.setChoices([
    q16.createChoice('Próxima Aula', false),
    q16.createChoice('Postura', false),
    q16.createChoice('Não-verbal', false),
    q16.createChoice('Hoje', true)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Olhar o Celular"?');
  q17.setChoices([
    q17.createChoice('Cria uma base de confiança mútua indispensável para negociações e feedback', false),
    q17.createChoice('Sintonia e harmonia perfeita entre o discurso falado e os gestos corporais', false),
    q17.createChoice('Rompe imediatamente o vínculo e denota desrespeito a quem fala', true),
    q17.createChoice('A mensagem perde credibilidade porque as pessoas tendem a confiar prioritariamente nos sinais corporais incongruentes', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Não-verbal"?');
  q18.setChoices([
    q18.createChoice('Gestual e modulação do tom de voz para apresentações dinâmicas e persuasivas', false),
    q18.createChoice('Estudo do uso do espaço físico e da distância interpessoal', false),
    q18.createChoice('Harmonia precisa entre o que a voz diz e o corpo expressa', false),
    q18.createChoice('Todo sinal comunicado sem palavras faladas ou escritas', true)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Segundo a aula, o que é "Postura"?');
  q19.setChoices([
    q19.createChoice('Estudo do uso do espaço físico e da distância interpessoal', false),
    q19.createChoice('Gestual e modulação do tom de voz para apresentações dinâmicas e persuasivas', false),
    q19.createChoice('Posição sustentada do corpo que reflete estados internos e atitude', true),
    q19.createChoice('Harmonia precisa entre o que a voz diz e o corpo expressa', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Qual conceito a aula define como: "Todo sinal comunicado sem palavras faladas ou escritas"?');
  q20.setChoices([
    q20.createChoice('Hoje', false),
    q20.createChoice('Congruência', false),
    q20.createChoice('Não-verbal', true),
    q20.createChoice('Postura', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ Aula 22 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 15 — Linguagem Corporal e Comunicação O poder dos sinais não-verbais no ambiente profissional');
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

function analisarRespostasAula15() {
  var form = FormApp.openByTitle('Avaliação — Aula 22 · Linguagem Corporal e Comunicação O poder dos sinais não-verbais no ambiente profissional · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 22: Linguagem Corporal e Comunicação O poder dos sinais não-verbais no ambiente profissional');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Linguagem Corporal e Comunicação O poder dos sinais não-verbais no ambiente profissional', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos de Aprendizagem', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Todo sinal comunicado sem palavras faladas ou escritas.', 'Posição sustentada do corpo que reflete estados internos e atitude.', 'Estudo do uso do espaço físico e da distância interpessoal.', 'Harmonia precisa entre o que a voz diz e o corpo expressa.', 'Aulas Anteriores', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 16
// ════════════════════════════════════════════════════════════
