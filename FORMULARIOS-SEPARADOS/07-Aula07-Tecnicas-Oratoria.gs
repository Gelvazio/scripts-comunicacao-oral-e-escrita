// ===== 07-Aula07-Tecnicas-Oratoria.gs =====
// Aula real (sequencia do curso): Aula 07 - Tecnicas-Oratoria
// Funcao interna (numeracao original do Google Forms): criarFormularioAula23()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula23() {
  var form = FormApp.create('Avaliação — Aula 07 · Técnicas de Oratória e Expressão Vocal · SENAI');

  form.setDescription( 'Avaliação Completa: Técnicas de Oratória e Expressão Vocal\n\nAula 07 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Técnicas de Oratória e Expressão Vocal');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Intensidade Dinâmica"?');
  q1.setChoices([
    q1.createChoice('Abertura de mandíbula, elasticidade labial e agilidade da língua para moldar os sons no trato vocal', false),
    q1.createChoice('Projeção moderada com articulação nítida para sobrepor ruídos externos de cadernos e cadeiras', false),
    q1.createChoice('Uso de microfone ou projeção diafragmática máxima, mantendo velocidade cadenciada', false),
    q1.createChoice('Um sussurro focado pode atrair mais atenção e silêncio do que uma explosão de volume', true)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Dicção (Resultado Sonoro)"?');
  q2.setChoices([
    q2.createChoice('Elevar ligeiramente o tom atrai curiosidade; baixar o tom gera gravidade e solenidade imediata', false),
    q2.createChoice('Clareza auditiva dos fonemas produzidos, garantindo que o ouvinte não confunda palavras parecidas', true),
    q2.createChoice('Abertura de mandíbula, elasticidade labial e agilidade da língua para moldar os sons no trato vocal', false),
    q2.createChoice('Volume é a quantidade de pressão acústica emitida, enquanto projeção é a capacidade de fazer a voz alcançar a última fileira sem forçar a garganta', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "A Voz como Nosso Instrumento"?');
  q3.setChoices([
    q3.createChoice('O ar é liberado aos poucos enquanto a voz soa, garantindo final de frases firme e sem ofegar', false),
    q3.createChoice('Emitir sons com apoio muscular transmite autoridade natural, sem necessidade de elevar o tom para intimidar', false),
    q3.createChoice('Assim como um violoncelo precisa de cordas ajustadas, caixa de ressonância e ar para ecoar, a voz humana depende do ar dos pulmões, da vibração nas pregas vocais e...', true),
    q3.createChoice('Articulação é o movimento mecânico da boca. Falar sem mexer os lábios e a mandíbula faz as palavras soarem emboladas, como se estivessem presas atrás dos dentes', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. De acordo com a aula, o que caracteriza "Modulação: A Melodia do Discurso"?');
  q4.setChoices([
    q4.createChoice('Ninguém consegue prestar atenção por muito tempo em um som linear e constante. A monotonia vocal funciona como um convite ao sono para a plateia', true),
    q4.createChoice('Abertura de mandíbula, elasticidade labial e agilidade da língua para moldar os sons no trato vocal', false),
    q4.createChoice('Volume coloquial e intimista. O exagero aqui soa agressivo e invasivo para os ouvintes próximos', false),
    q4.createChoice('Clareza auditiva dos fonemas produzidos, garantindo que o ouvinte não confunda palavras parecidas', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "Articulação e Clareza Sonora"?');
  q5.setChoices([
    q5.createChoice('Chegou a hora de colocar a teoria em ação! Você fará uma gravação curta de áudio para avaliar sua própria expressão vocal', false),
    q5.createChoice('Ação física muscular de mover lábios, dente e língua para produzir fonemas distintos', false),
    q5.createChoice('Emitir sons com apoio muscular transmite autoridade natural, sem necessidade de elevar o tom para intimidar', false),
    q5.createChoice('Articulação é o movimento mecânico da boca. Falar sem mexer os lábios e a mandíbula faz as palavras soarem emboladas, como se estivessem presas atrás dos dentes', true)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Enfatizando Pontos Cruciais"?');
  q6.setChoices([
    q6.createChoice('Elevar ligeiramente o tom atrai curiosidade; baixar o tom gera gravidade e solenidade imediata', true),
    q6.createChoice('Projeção moderada com articulação nítida para sobrepor ruídos externos de cadernos e cadeiras', false),
    q6.createChoice('Ninguém consegue prestar atenção por muito tempo em um som linear e constante. A monotonia vocal funciona como um convite ao sono para a plateia', false),
    q6.createChoice('A respiração diafragmática expande a região abdominal inferior, fornecendo um colchão constante de ar para sustentar frases longas com estabilidade', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. De acordo com a aula, o que caracteriza "Preparando a musculatura vocal"?');
  q7.setChoices([
    q7.createChoice('Nenhum atleta entra em campo sem aquecer os músculos. Da mesma forma, as pregas vocais são tecidos musculares sensíveis que precisam de lubrificação e aquecimento...', true),
    q7.createChoice('A credibilidade de uma fala baseia-se em três pilares essenciais: a solidez do conteúdo, a postura física e a firmeza vocal. Uma voz trêmula ou excessivamente...', false),
    q7.createChoice('Direcionar a voz para pontos diferentes da plateia enquanto olha nos olhos das pessoas gera proximidade e respeito mútuo', false),
    q7.createChoice('Elevar ligeiramente o tom atrai curiosidade; baixar o tom gera gravidade e solenidade imediata', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "Firmeza Sem Agressividade"?');
  q8.setChoices([
    q8.createChoice('A oratória não é um dom inato, mas uma habilidade lapidada pelo treino diário da respiração, da pausa e da articulação consciente. Fale com clareza e seja ouvido...', false),
    q8.createChoice('Pronunciar o termo-chave com maior apoio e contorno vocal destaca-o como tese central', false),
    q8.createChoice('Conquista a atenção inicial, cria conexão humana com a plateia e apresenta o tema central com objetividade', false),
    q8.createChoice('Emitir sons com apoio muscular transmite autoridade natural, sem necessidade de elevar o tom para intimidar', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Auditório Amplo"?');
  q9.setChoices([
    q9.createChoice('Uso de microfone ou projeção diafragmática máxima, mantendo velocidade cadenciada', true),
    q9.createChoice('Articulação é o movimento mecânico da boca. Falar sem mexer os lábios e a mandíbula faz as palavras soarem emboladas, como se estivessem presas atrás dos dentes', false),
    q9.createChoice('Emitir sons com apoio muscular transmite autoridade natural, sem necessidade de elevar o tom para intimidar', false),
    q9.createChoice('Conquista a atenção inicial, cria conexão humana com a plateia e apresenta o tema central com objetividade', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "Articulação vs Dicção"?');
  q10.setChoices([
    q10.createChoice('Abertura de mandíbula, elasticidade labial e agilidade da língua para moldar os sons no trato vocal', true),
    q10.createChoice('Emitir sons com apoio muscular transmite autoridade natural, sem necessidade de elevar o tom para intimidar', false),
    q10.createChoice('Ação física muscular de mover lábios, dente e língua para produzir fonemas distintos', false),
    q10.createChoice('Uso de microfone ou projeção diafragmática máxima, mantendo velocidade cadenciada', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Respiração e Apoio Diafragmático"?');
  q11.setChoices([
    q11.createChoice('Ordene os passos essenciais antes de iniciar uma fala pública importante', false),
    q11.createChoice('A respiração diafragmática expande a região abdominal inferior, fornecendo um colchão constante de ar para sustentar frases longas com estabilidade', true),
    q11.createChoice('Direcionar a voz para pontos diferentes da plateia enquanto olha nos olhos das pessoas gera proximidade e respeito mútuo', false),
    q11.createChoice('Volume é a quantidade de pressão acústica emitida, enquanto projeção é a capacidade de fazer a voz alcançar a última fileira sem forçar a garganta', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "O Poder das Pausas Estratégicas"?');
  q12.setChoices([
    q12.createChoice('Nenhum atleta entra em campo sem aquecer os músculos. Da mesma forma, as pregas vocais são tecidos musculares sensíveis que precisam de lubrificação e aquecimento...', false),
    q12.createChoice('Uso de microfone ou projeção diafragmática máxima, mantendo velocidade cadenciada', false),
    q12.createChoice('Chegou a hora de colocar a teoria em ação! Você fará uma gravação curta de áudio para avaliar sua própria expressão vocal', false),
    q12.createChoice('O silêncio na oratória não é ausência de conteúdo: é uma moldura para o que vem a seguir', true)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Dimensões do Espaço de Fala"?');
  q13.setChoices([
    q13.createChoice('Volume é a quantidade de pressão acústica emitida, enquanto projeção é a capacidade de fazer a voz alcançar a última fileira sem forçar a garganta', false),
    q13.createChoice('Volume coloquial e intimista. O exagero aqui soa agressivo e invasivo para os ouvintes próximos', true),
    q13.createChoice('Abertura de mandíbula, elasticidade labial e agilidade da língua para moldar os sons no trato vocal', false),
    q13.createChoice('Pronunciar o termo-chave com maior apoio e contorno vocal destaca-o como tese central', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Ajuste de Volume e Projeção"?');
  q14.setChoices([
    q14.createChoice('Volume coloquial e intimista. O exagero aqui soa agressivo e invasivo para os ouvintes próximos', false),
    q14.createChoice('Volume é a quantidade de pressão acústica emitida, enquanto projeção é a capacidade de fazer a voz alcançar a última fileira sem forçar a garganta', true),
    q14.createChoice('Projeção moderada com articulação nítida para sobrepor ruídos externos de cadernos e cadeiras', false),
    q14.createChoice('Ninguém consegue prestar atenção por muito tempo em um som linear e constante. A monotonia vocal funciona como um convite ao sono para a plateia', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "As Funções do Silêncio"?');
  q15.setChoices([
    q15.createChoice('Um sussurro focado pode atrair mais atenção e silêncio do que uma explosão de volume', false),
    q15.createChoice('Elevar ligeiramente o tom atrai curiosidade; baixar o tom gera gravidade e solenidade imediata', false),
    q15.createChoice('A respiração diafragmática expande a região abdominal inferior, fornecendo um colchão constante de ar para sustentar frases longas com estabilidade', false),
    q15.createChoice('Uma pausa de dois segundos antes de uma revelação cria expectativa dramática. A mesma pausa logo após um conceito complexo permite a assimilação cognitiva do ouvinte', true)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "Variação de Ritmo"?');
  q16.setChoices([
    q16.createChoice('Assim como um violoncelo precisa de cordas ajustadas, caixa de ressonância e ar para ecoar, a voz humana depende do ar dos pulmões, da vibração nas pregas vocais e...', false),
    q16.createChoice('A respiração diafragmática expande a região abdominal inferior, fornecendo um colchão constante de ar para sustentar frases longas com estabilidade', false),
    q16.createChoice('Desacelerar em frases decisivas faz a audiência absorver cada palavra com profundidade', true),
    q16.createChoice('Abertura de mandíbula, elasticidade labial e agilidade da língua para moldar os sons no trato vocal', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Relembrando a Estrutura Básica"?');
  q17.setChoices([
    q17.createChoice('Assim como um violoncelo precisa de cordas ajustadas, caixa de ressonância e ar para ecoar, a voz humana depende do ar dos pulmões, da vibração nas pregas vocais e...', false),
    q17.createChoice('Conquista a atenção inicial, cria conexão humana com a plateia e apresenta o tema central com objetividade', true),
    q17.createChoice('Abertura de mandíbula, elasticidade labial e agilidade da língua para moldar os sons no trato vocal', false),
    q17.createChoice('Direcionar a voz para pontos diferentes da plateia enquanto olha nos olhos das pessoas gera proximidade e respeito mútuo', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "Vocabulário Essencial da Voz"?');
  q18.setChoices([
    q18.createChoice('Ação física muscular de mover lábios, dente e língua para produzir fonemas distintos', true),
    q18.createChoice('Direcionar a voz para pontos diferentes da plateia enquanto olha nos olhos das pessoas gera proximidade e respeito mútuo', false),
    q18.createChoice('Articulação é o movimento mecânico da boca. Falar sem mexer os lábios e a mandíbula faz as palavras soarem emboladas, como se estivessem presas atrás dos dentes', false),
    q18.createChoice('Ordene os passos essenciais antes de iniciar uma fala pública importante', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "Destaque de Palavra"?');
  q19.setChoices([
    q19.createChoice('Abertura de mandíbula, elasticidade labial e agilidade da língua para moldar os sons no trato vocal', false),
    q19.createChoice('Nenhum atleta entra em campo sem aquecer os músculos. Da mesma forma, as pregas vocais são tecidos musculares sensíveis que precisam de lubrificação e aquecimento...', false),
    q19.createChoice('Pronunciar o termo-chave com maior apoio e contorno vocal destaca-o como tese central', true),
    q19.createChoice('Uma pausa de dois segundos antes de uma revelação cria expectativa dramática. A mesma pausa logo após um conceito complexo permite a assimilação cognitiva do ouvinte', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "Sala de Aula"?');
  q20.setChoices([
    q20.createChoice('Projeção moderada com articulação nítida para sobrepor ruídos externos de cadernos e cadeiras', true),
    q20.createChoice('Elevar ligeiramente o tom atrai curiosidade; baixar o tom gera gravidade e solenidade imediata', false),
    q20.createChoice('Volume coloquial e intimista. O exagero aqui soa agressivo e invasivo para os ouvintes próximos', false),
    q20.createChoice('Abertura de mandíbula, elasticidade labial e agilidade da língua para moldar os sons no trato vocal', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ Aula 07 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 23 — Técnicas de Oratória e Expressão Vocal');
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

function analisarRespostasAula23() {
  var form = FormApp.openByTitle('Avaliação — Aula 07 · Técnicas de Oratória e Expressão Vocal · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 07: Técnicas de Oratória e Expressão Vocal');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Técnicas de Oratória e Expressão Vocal', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos da Nossa Aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Estrutura da Apresentação', 'Qual é o papel principal da abertura em um discurso?', 'O que deve compor o desenvolvimento de uma boa apresentação?', 'Como um fechamento de impacto deve finalizar uma exposição oral?', 'Capturar a atenção do público, gerar empatia e definir com clareza o tema.', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 24
// ════════════════════════════════════════════════════════════
