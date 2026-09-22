// ===== 23-Aula23-Gestual-Tom-Voz.gs =====
// Aula real (sequencia do curso): Aula 23 - Gestual-Tom-Voz
// Funcao interna (numeracao original do Google Forms): criarFormularioAula16()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula16() {
  var form = FormApp.create('Avaliação — Aula 23 · Gestual, Tom de Voz e Sincronismo A harmonia perfeita entre corpo, voz e mensagem profissional · SENAI');

  form.setDescription( 'Avaliação Completa: Gestual, Tom de Voz e Sincronismo A harmonia perfeita entre corpo, voz e mensagem profissional\n\nAula 23 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Gestual, Tom de Voz e Sincronismo A harmonia perfeita entre corpo, voz e mensagem profissional');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "A Harmonia entre Corpo e Voz"?');
  q1.setChoices([
    q1.createChoice('Gesticular sem parar durante toda a fala torna a apresentação mais clara e atraente para o público', false),
    q1.createChoice('Para manter a gesticulação elegante e controlada, oradores profissionais operam na chamada caixa de gestos', false),
    q1.createChoice('O gesto deve atingir seu ápice exatamente no mesmo instante em que a palavra principal é pronunciada com destaque', false),
    q1.createChoice('A fala impactante não depende apenas do vocabulário escolhido: a modulação da voz e os gestos corporais devem se mover como uma coreografia orquestrada e precisa', true)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Qual conceito a aula define como: "Olhar para o teto ou para o chão sinaliza insegurança ou desinteresse"?');
  q2.setChoices([
    q2.createChoice('Largura', false),
    q2.createChoice('Presença', false),
    q2.createChoice('Ponto neutro', false),
    q2.createChoice('Evite fugas', true)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Qual conceito a aula define como: "Respeite a cultura da organização ou do evento (formal, casual ou técnico)"?');
  q3.setChoices([
    q3.createChoice('Conforto postural', false),
    q3.createChoice('Evite distrações visuais', false),
    q3.createChoice('Presença', false),
    q3.createChoice('Coerência com o ambiente', true)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Aponte uma melhoria prioritária"?');
  q4.setChoices([
    q4.createChoice('Coincidência temporal perfeita entre gesto, palavra e respiração', false),
    q4.createChoice('Sorrisos congelados ou mecânicos despertam desconfiança imediata', false),
    q4.createChoice('Focar em uma única mudança por vez acelera a evolução', true),
    q4.createChoice('Domínio consciente do espaço físico, olhar firme e segurança corporal', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "Picos Dramáticos"?');
  q5.setChoices([
    q5.createChoice('Ajustado ao tamanho da sala, garantindo que o fundo do auditório escute sem esforço', false),
    q5.createChoice('Movimentos muito rápidos viram borrões digitais em conexões fracas de internet', false),
    q5.createChoice('Nos momentos decisivos da narrativa, o gesto manual sustenta e expande a energia da voz', true),
    q5.createChoice('Quando existe conflito entre o que é falado e a expressão não-verbal, o público sempre opta por acreditar no corpo', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Qual conceito a aula define como: "Distribua o olhar por quadrantes da sala sem fixar em uma só pessoa"?');
  q6.setChoices([
    q6.createChoice('Firmeza verbal com recuo físico', false),
    q6.createChoice('Ênfase', false),
    q6.createChoice('Coerência com o ambiente', false),
    q6.createChoice('Varredura ampla', true)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Segundo a aula, o que é "Voz alegre com semblante rígido"?');
  q7.setChoices([
    q7.createChoice('Mantenha a cabeça e o tronco superior visíveis para que os gestos manuais possam aparecer na tela', false),
    q7.createChoice('Apoie as pontas dos dedos suavemente à altura do umbigo ou deixe os braços descerem soltos ao lado do corpo', false),
    q7.createChoice('Soa forçado, irônico ou falso', true),
    q7.createChoice('Olhar para o teto ou para o chão sinaliza insegurança ou desinteresse', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Segundo a aula, o que é "Olho na lente"?');
  q8.setChoices([
    q8.createChoice('Distribua o olhar por quadrantes da sala sem fixar em uma só pessoa', false),
    q8.createChoice('A base corporal estável projeta clareza e autoridade imediata', false),
    q8.createChoice('Olhar para a câmera equivale a olhar nos olhos dos participantes virtuais', true),
    q8.createChoice('A amplitude dos ombros, evitando braços excessivamente abertos', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Segundo a aula, o que é "Sorriso acolhedor"?');
  q9.setChoices([
    q9.createChoice('Domínio consciente do espaço físico, olhar firme e segurança corporal', false),
    q9.createChoice('Soa forçado, irônico ou falso', false),
    q9.createChoice('Reduz a tensão inicial no início de conversas ou entrevistas formais', true),
    q9.createChoice('A confiança só surge quando expressão facial, gestos e palavras contam rigorosamente a mesma história', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Segundo a aula, o que é "Ênfase"?');
  q10.setChoices([
    q10.createChoice('Mantenha a cabeça e o tronco superior visíveis para que os gestos manuais possam aparecer na tela', false),
    q10.createChoice('A confiança só surge quando expressão facial, gestos e palavras contam rigorosamente a mesma história', false),
    q10.createChoice('Olhar para a câmera equivale a olhar nos olhos dos participantes virtuais', false),
    q10.createChoice('Destaque vocal ou gestual dado a palavras-chave estratégicas', true)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Mãos nos Bolsos"?');
  q11.setChoices([
    q11.createChoice('O gesto deve atingir seu ápice exatamente no mesmo instante em que a palavra principal é pronunciada com destaque', false),
    q11.createChoice('Ocultar as mãos reduz a credibilidade intuitiva percebida pelos ouvintes na apresentação', true),
    q11.createChoice('O silêncio consciente não é sinal de esquecimento; é a ferramenta mais refinada de um orador habilidoso', false),
    q11.createChoice('O vestuário compõe o quadro da comunicação antes mesmo da primeira palavra ser dita', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Qual conceito a aula define como: "Roupas que apertam restringem a respiração diafragmática e a liberdade gestual"?');
  q12.setChoices([
    q12.createChoice('Conforto postural', true),
    q12.createChoice('Limite inferior', false),
    q12.createChoice('Firmeza verbal com recuo físico', false),
    q12.createChoice('Voz alegre com semblante rígido', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Iluminação Facial"?');
  q13.setChoices([
    q13.createChoice('Gesticular sem parar durante toda a fala torna a apresentação mais clara e atraente para o público', false),
    q13.createChoice('Clicar canetas ou mexer em anéis denuncia tensão interna e distrai o público do raciocínio', false),
    q13.createChoice('Ajustado ao tamanho da sala, garantindo que o fundo do auditório escute sem esforço', false),
    q13.createChoice('A luz frontal revela expressões faciais indispensáveis para a empatia e o entendimento', true)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "Gesto intencional"?');
  q14.setChoices([
    q14.createChoice('Distribua o olhar por quadrantes da sala sem fixar em uma só pessoa', false),
    q14.createChoice('Eleve as mãos apenas quando houver um argumento específico a marcar', true),
    q14.createChoice('Focar em uma única mudança por vez acelera a evolução', false),
    q14.createChoice('Olhar para o teto ou para o chão sinaliza insegurança ou desinteresse', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Qual conceito a aula define como: "A base corporal estável projeta clareza e autoridade imediata"?');
  q15.setChoices([
    q15.createChoice('Postura Firme', true),
    q15.createChoice('Gestual', false),
    q15.createChoice('Sincronia Mãos-Voz', false),
    q15.createChoice('Gesto intencional', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "A Sincronia entre Tom e Gestual"?');
  q16.setChoices([
    q16.createChoice('A luz frontal revela expressões faciais indispensáveis para a empatia e o entendimento', false),
    q16.createChoice('O gesto deve atingir seu ápice exatamente no mesmo instante em que a palavra principal é pronunciada com destaque', true),
    q16.createChoice('Variação tonal e de pitch na voz para evitar monotonia', false),
    q16.createChoice('Avaliar a linguagem corporal de um colega exige sensibilidade, generosidade e objetividade prática', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. Segundo a aula, o que é "Limite superior"?');
  q17.setChoices([
    q17.createChoice('Sustente de 2 a 3 segundos por ouvinte para gerar conexão natural', false),
    q17.createChoice('A altura do peito e queixo. Gestos acima do rosto tapam a expressão e passam desespero', true),
    q17.createChoice('Conjunto de movimentos de braços e mãos que acompanham o discurso', false),
    q17.createChoice('Sorrisos congelados ou mecânicos despertam desconfiança imediata', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "Gestos Enfáticos"?');
  q18.setChoices([
    q18.createChoice('Pontuam momentos cruciais do discurso com toques precisos no ar, sincronizados exatamente com as sílabas tônicas', true),
    q18.createChoice('Para manter a gesticulação elegante e controlada, oradores profissionais operam na chamada caixa de gestos', false),
    q18.createChoice('Variação tonal e de pitch na voz para evitar monotonia', false),
    q18.createChoice('Clicar canetas ou mexer em anéis denuncia tensão interna e distrai o público do raciocínio', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Segundo a aula, o que é "Sincronismo"?');
  q19.setChoices([
    q19.createChoice('Assentir com a cabeça e manter o semblante receptivo valida o interlocutor', false),
    q19.createChoice('A altura do peito e queixo. Gestos acima do rosto tapam a expressão e passam desespero', false),
    q19.createChoice('Coincidência temporal perfeita entre gesto, palavra e respiração', true),
    q19.createChoice('Estampas excessivas ou barulhos de joias desviam a atenção do conteúdo', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "Caixa de Gestos"?');
  q20.setChoices([
    q20.createChoice('Silêncio proposital inserido para gerar reflexão ou suspense', true),
    q20.createChoice('Elevar os gestos para a linha do peito para que não fiquem escondidos abaixo do corte da tela', false),
    q20.createChoice('O silêncio consciente não é sinal de esquecimento; é a ferramenta mais refinada de um orador habilidoso', false),
    q20.createChoice('Ocultar as mãos reduz a credibilidade intuitiva percebida pelos ouvintes na apresentação', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ Aula 23 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 16 — Gestual, Tom de Voz e Sincronismo A harmonia perfeita entre corpo, voz e mensagem profissional');
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

function analisarRespostasAula16() {
  var form = FormApp.openByTitle('Avaliação — Aula 23 · Gestual, Tom de Voz e Sincronismo A harmonia perfeita entre corpo, voz e mensagem profissional · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 23: Gestual, Tom de Voz e Sincronismo A harmonia perfeita entre corpo, voz e mensagem profissional');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Gestual, Tom de Voz e Sincronismo A harmonia perfeita entre corpo, voz e mensagem profissional', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos de Aprendizagem', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Conjunto de movimentos de braços e mãos que acompanham o discurso.', 'Coincidência temporal perfeita entre gesto, palavra e respiração.', 'Destaque vocal ou gestual dado a palavras-chave estratégicas.', 'Domínio consciente do espaço físico, olhar firme e segurança corporal.', 'pés alinhados à largura dos ombros distribuem o peso com equilíbrio, abrindo a caixa torácica e faci', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 17
// ════════════════════════════════════════════════════════════
