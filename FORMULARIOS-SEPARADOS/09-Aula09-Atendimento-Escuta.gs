// ===== 09-Aula09-Atendimento-Escuta.gs =====
// Aula real (sequencia do curso): Aula 09 - Atendimento-Escuta
// Funcao interna (numeracao original do Google Forms): criarFormularioAula25()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula25() {
  var form = FormApp.create('Avaliação — Aula 09 · Atendimento e Escuta Ativa · SENAI');

  form.setDescription( 'Avaliação Completa: Atendimento e Escuta Ativa\n\nAula 09 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Atendimento e Escuta Ativa');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "REVISÃO"?');
  q1.setChoices([
    q1.createChoice('Levar um problema operacional para o lado pessoal desgasta você e agrava a insatisfação do usuário', false),
    q1.createChoice('Parafrasear significa resumir a essência do que foi dito usando suas próprias palavras, demonstrando que você processou a mensagem com precisão', false),
    q1.createChoice('Quais das seguintes atitudes demonstram acolhimento empático em uma reclamação? Há mais de uma opção correta', false),
    q1.createChoice('Na aula anterior, aprendemos que encontros de trabalho só funcionam com papéis bem delineados', true)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Segundo a aula, o que é "Suspensão de julgamento"?');
  q2.setChoices([
    q2.createChoice('não interromper no meio da frase', true),
    q2.createChoice('outro atendente entenderá o caso sem recomeçar do zero', false),
    q2.createChoice('gerou chamado com acompanhamento prioritário por mensagem', false),
    q2.createChoice('validou a dor materna pelo prazo escolar', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Qual conceito a aula define como: "segurança jurídica para o usuário e para o atendente"?');
  q3.setChoices([
    q3.createChoice('Linguagem corporal aberta', false),
    q3.createChoice('Contato visual', false),
    q3.createChoice('Transparência', true),
    q3.createChoice('Continuidade', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. De acordo com a aula, o que caracteriza "Julgamento Prévio"?');
  q4.setChoices([
    q4.createChoice('Formular a própria fala antes do outro terminar corta a percepção de detalhes', false),
    q4.createChoice('Manter cordialidade e empatia para não transformar uma negativa técnica em rejeição pessoal', false),
    q4.createChoice('Rotular a pessoa como exagerada ou errada antes de ouvir todo o relato', true),
    q4.createChoice('As mesmas palavras podem acolher ou confrontar, dependendo da velocidade e da inflexão vocal com que são ditas', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Segundo a aula, o que é "Continuidade"?');
  q5.setChoices([
    q5.createChoice('postura receptiva e contato visual', false),
    q5.createChoice('Dona Luiza comprou materiais escolares para o início das aulas de sua filha. A entrega atrasou quatro dias e ela liga extremamente indignada para o suporte', false),
    q5.createChoice('outro atendente entenderá o caso sem recomeçar do zero', true),
    q5.createChoice('gerou chamado com acompanhamento prioritário por mensagem', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Segundo a aula, o que é "Atenção sem telas"?');
  q6.setChoices([
    q6.createChoice('preparam dados prévios e evitam dispersões', false),
    q6.createChoice('identificar falhas sistêmicas recorrentes', false),
    q6.createChoice('ligeiramente inclinada para a frente indica dedicação', false),
    q6.createChoice('eliminar distrações eletrônicas', true)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Segundo a aula, o que é "Expressão facial"?');
  q7.setChoices([
    q7.createChoice('outro atendente entenderá o caso sem recomeçar do zero', false),
    q7.createChoice('postura receptiva e contato visual', false),
    q7.createChoice('relaxada e atenta, sem esgares de cansaço ou deboche', true),
    q7.createChoice('Dona Luiza comprou materiais escolares para o início das aulas de sua filha. A entrega atrasou quatro dias e ela liga extremamente indignada para o suporte', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Qual conceito a aula define como: "o atendente cede a exigências ilegais; a empresa sofre prejuízos"?');
  q8.setChoices([
    q8.createChoice('Perde-Ganha', true),
    q8.createChoice('Contato visual', false),
    q8.createChoice('Transparência', false),
    q8.createChoice('Registrou', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Segundo a aula, o que é "Perde-Ganha"?');
  q9.setChoices([
    q9.createChoice('a empresa impõe a regra friamente; o usuário sai lesado e furioso', false),
    q9.createChoice('disponibilizou um voucher digital de emergência para materiais básicos', false),
    q9.createChoice('postura receptiva e contato visual', false),
    q9.createChoice('o atendente cede a exigências ilegais; a empresa sofre prejuízos', true)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Qual conceito a aula define como: "validou a dor materna pelo prazo escolar"?');
  q10.setChoices([
    q10.createChoice('Suspensão de julgamento', false),
    q10.createChoice('Ganha-Ganha', false),
    q10.createChoice('Acolheu', true),
    q10.createChoice('Linguagem corporal aberta', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "O Papel do Tom de Voz"?');
  q11.setChoices([
    q11.createChoice('Ver notificações fragmenta o raciocínio e sinaliza descaso com quem fala', false),
    q11.createChoice('As mesmas palavras podem acolher ou confrontar, dependendo da velocidade e da inflexão vocal com que são ditas', true),
    q11.createChoice('Mais da metade da nossa mensagem é transmitida pelo corpo e pela voz antes mesmo de concluirmos uma oração', false),
    q11.createChoice('Resolver sem demora, mantendo o cuidado humano em cada contato', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Controle Emocional"?');
  q12.setChoices([
    q12.createChoice('A abordagem ganha-ganha busca uma saída onde a necessidade do usuário seja atendida sem desrespeitar os regulamentos ou a segurança da instituição', false),
    q12.createChoice('Quando alguém se comunica de maneira ríspida, a tendência automática é espelhar a hostilidade. Quem domina a comunicação profissional quebra essa cadeia destrutiva', true),
    q12.createChoice('As mesmas palavras podem acolher ou confrontar, dependendo da velocidade e da inflexão vocal com que são ditas', false),
    q12.createChoice('Organize as etapas lógicas de um atendimento eficaz do início ao encerramento', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Técnica 2: Validação Emocional"?');
  q13.setChoices([
    q13.createChoice('Antes de tentar resolver a parte técnica ou burocrática, reconheça a emoção da pessoa. Pessoas irritadas não conseguem raciocinar bem sobre soluções lógicas...', true),
    q13.createChoice('Oferecer a opção de suporte técnico ou troca por cupom após verificação do sistema', false),
    q13.createChoice('Manter cordialidade e empatia para não transformar uma negativa técnica em rejeição pessoal', false),
    q13.createChoice('Quais das seguintes atitudes demonstram acolhimento empático em uma reclamação? Há mais de uma opção correta', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Gentileza no Tom"?');
  q14.setChoices([
    q14.createChoice('Oferecer a opção de suporte técnico ou troca por cupom após verificação do sistema', false),
    q14.createChoice('Processamento fisiológico involuntário de sons e vibrações pelo aparelho auditivo, sem retenção profunda de sentido', false),
    q14.createChoice('Rotular a pessoa como exagerada ou errada antes de ouvir todo o relato', false),
    q14.createChoice('Manter cordialidade e empatia para não transformar uma negativa técnica em rejeição pessoal', true)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Segundo a aula, o que é "Contexto"?');
  q15.setChoices([
    q15.createChoice('postura receptiva e contato visual', false),
    q15.createChoice('a empresa impõe a regra friamente; o usuário sai lesado e furioso', false),
    q15.createChoice('Dona Luiza comprou materiais escolares para o início das aulas de sua filha. A entrega atrasou quatro dias e ela liga extremamente indignada para o suporte', true),
    q15.createChoice('transmite honestidade e segurança sem intimidação', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Segundo a aula, o que é "Secretário"?');
  q16.setChoices([
    q16.createChoice('relaxada e atenta, sem esgares de cansaço ou deboche', false),
    q16.createChoice('identificar falhas sistêmicas recorrentes', false),
    q16.createChoice('a empresa impõe a regra friamente; o usuário sai lesado e furioso', false),
    q16.createChoice('anota deliberações e prazos em ata objetiva', true)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Escutar Ativamente"?');
  q17.setChoices([
    q17.createChoice('Na aula anterior, aprendemos que encontros de trabalho só funcionam com papéis bem delineados', false),
    q17.createChoice('Registro objetivo e acordos ganha-ganha asseguram relacionamentos profissionais duradouros', false),
    q17.createChoice('Ato voluntário que exige foco mental, interpretação das palavras e do tom, empatia e validação da mensagem do outro', true),
    q17.createChoice('Antes de tentar resolver a parte técnica ou burocrática, reconheça a emoção da pessoa. Pessoas irritadas não conseguem raciocinar bem sobre soluções lógicas...', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Qual conceito a aula define como: "postura receptiva e contato visual"?');
  q18.setChoices([
    q18.createChoice('Participantes', false),
    q18.createChoice('Ganha-Perde', false),
    q18.createChoice('Linguagem corporal aberta', true),
    q18.createChoice('Melhoria contínua', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Qual conceito a aula define como: "anota deliberações e prazos em ata objetiva"?');
  q19.setChoices([
    q19.createChoice('Suspensão de julgamento', false),
    q19.createChoice('Secretário', true),
    q19.createChoice('Ganha-Ganha', false),
    q19.createChoice('Acolheu', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Segundo a aula, o que é "Informou limites"?');
  q20.setChoices([
    q20.createChoice('explicou que a entrega física ocorreria em 24h', true),
    q20.createChoice('validou a dor materna pelo prazo escolar', false),
    q20.createChoice('postura receptiva e contato visual', false),
    q20.createChoice('disponibilizou um voucher digital de emergência para materiais básicos', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ Aula 09 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 25 — Atendimento e Escuta Ativa');
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

function analisarRespostasAula25() {
  var form = FormApp.openByTitle('Avaliação — Aula 09 · Atendimento e Escuta Ativa · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 09: Atendimento e Escuta Ativa');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Atendimento e Escuta Ativa', 'Atendimento e Escuta Ativa', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos de Aprendizagem', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Papéis e Dinâmica', 'Parafraseamento', 'Validação Emocional', 'Perguntas Abertas', 'Tensão Alta Tom de voz baixo e pausas intencionais de silêncio.', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// REVISÃO INTEGRADA
// ════════════════════════════════════════════════════════════
