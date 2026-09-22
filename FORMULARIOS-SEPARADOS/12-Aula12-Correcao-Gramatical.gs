// ===== 12-Aula12-Correcao-Gramatical.gs =====
// Aula real (sequencia do curso): Aula 12 - Correcao-Gramatical
// Funcao interna (numeracao original do Google Forms): criarFormularioAula04()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula04() {
  var form = FormApp.create('Avaliação — Aula 12 · Correção Gramatical Aplicada ao Trabalho · SENAI');

  form.setDescription( 'Avaliação Completa: Correção Gramatical Aplicada ao Trabalho\n\nAula 12 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Correção Gramatical Aplicada ao Trabalho');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Acentuação Gráfica"?');
  q1.setChoices([
    q1.createChoice('O Acordo Ortográfico eliminou acentos que muitos profissionais ainda usam por desatenção', true),
    q1.createChoice('Adjetivos concordam em gênero e número com o substantivo a que se referem', false),
    q1.createChoice('Use além disso, ademais ou outrossim para somar argumentos sem cansar o leitor com repetições', false),
    q1.createChoice('O verbo concorda em número (singular/plural) e pessoa com o núcleo do sujeito, mesmo com palavras intermediárias intercaladas', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Anexo, incluso e obrigado"?');
  q2.setChoices([
    q2.createChoice('Perceba a ausência de vírgula no vocativo, erro de concordância em anexo, crase indevida em à vista (locução feminina tem crase, mas atenção às combinações) e...', false),
    q2.createChoice('Adjetivos concordam em gênero e número com o substantivo a que se referem', true),
    q2.createChoice('Relação de dependência e preposição exigida por um verbo', false),
    q2.createChoice('Quando nos comunicamos no ambiente de trabalho, o texto representa nossa postura profissional e a própria organização', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Segundo a aula, o que é "Concordância"?');
  q3.setChoices([
    q3.createChoice('Ajuste harmônico de flexão entre termos da frase', true),
    q3.createChoice('Regras formais para a escrita pública oficial', false),
    q3.createChoice('Frases bem construídas reduzem e-mails desnecessários de esclarecimento', false),
    q3.createChoice('Clientes e líderes confiam mais em dados apresentados sem falhas gramaticais', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Pontuação"?');
  q4.setChoices([
    q4.createChoice('Apresente a informação principal na primeira frase', false),
    q4.createChoice('Sinais que organizam pausas e sentidos das orações', true),
    q4.createChoice('Sem acento circunflexo: leem, veem, voo (e não *vôo)', false),
    q4.createChoice('Regras formais para a escrita pública oficial', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Segundo a aula, o que é "Desenvolvimento"?');
  q5.setChoices([
    q5.createChoice('Os relatórios financeiros do trimestre passado revelaram alta', false),
    q5.createChoice('Traga dados, justificativas e exemplos em seguida', true),
    q5.createChoice('Conecte a frase seguinte por meio de pronomes ou conjunções', false),
    q5.createChoice('Perderam o acento: ideia, assembleia, coreia (e não *idéia)', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "A Vírgula no Trabalho"?');
  q6.setChoices([
    q6.createChoice('Sempre grafados separadamente. Evite aglutinações inadequadas', false),
    q6.createChoice('Nunca coloque vírgula entre quem realiza a ação e a própria ação, por mais longa que a frase pareça', true),
    q6.createChoice('Por que para perguntas e motivos. Porque para respostas explicativas', false),
    q6.createChoice('Adjetivos concordam em gênero e número com o substantivo a que se referem', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Qual conceito a aula define como: "Traga dados, justificativas e exemplos em seguida"?');
  q7.setChoices([
    q7.createChoice('Incorreto', false),
    q7.createChoice('Pontuação', false),
    q7.createChoice('Desenvolvimento', true),
    q7.createChoice('Confiança imediata', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "Coesão e Coerência"?');
  q8.setChoices([
    q8.createChoice('Use contudo, entretanto ou não obstante quando for necessário pontuar divergências com elegância', false),
    q8.createChoice('Um texto profissional precisa ser uma ponte sólida. A coesão é a costura gramatical (pronomes, conectivos e pontuação), enquanto a coerência é a lógica interna que...', true),
    q8.createChoice('Use além disso, ademais ou outrossim para somar argumentos sem cansar o leitor com repetições', false),
    q8.createChoice('Em documentos de trabalho, cada parágrafo deve girar em torno de uma ideia central declarada claramente no início: o tópico frasal', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Concordância Verbal"?');
  q9.setChoices([
    q9.createChoice('Alguns verbos alteram totalmente de significado no meio corporativo caso recebam ou dispensem preposição', false),
    q9.createChoice('Quando nos comunicamos no ambiente de trabalho, o texto representa nossa postura profissional e a própria organização', false),
    q9.createChoice('Separe itens extensos de uma listagem em propostas ou orações já divididas internamente por vírgulas', false),
    q9.createChoice('O verbo concorda em número (singular/plural) e pessoa com o núcleo do sujeito, mesmo com palavras intermediárias intercaladas', true)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Segundo a aula, o que é "Regência"?');
  q10.setChoices([
    q10.createChoice('Sem acento circunflexo: leem, veem, voo (e não *vôo)', false),
    q10.createChoice('Relação em que um termo exige preposição própria', true),
    q10.createChoice('Ajuste harmônico de flexão entre termos da frase', false),
    q10.createChoice('Permanece em pôde (passado) vs. pode (presente) e no verbo pôr', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. Segundo a aula, o que é "Objetividade"?');
  q11.setChoices([
    q11.createChoice('Perderam o acento: ideia, assembleia, coreia (e não *idéia)', false),
    q11.createChoice('Os relatórios financeiros do trimestre passado, revelaram alta', false),
    q11.createChoice('Frases bem construídas reduzem e-mails desnecessários de esclarecimento', true),
    q11.createChoice('Sinais que organizam pausas e sentidos das orações', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Qual conceito a aula define como: "Sinais que organizam pausas e sentidos das orações"?');
  q12.setChoices([
    q12.createChoice('Universalidade', false),
    q12.createChoice('Confiança imediata', false),
    q12.createChoice('Correto', false),
    q12.createChoice('Pontuação', true)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. Segundo a aula, o que é "Confiança imediata"?');
  q13.setChoices([
    q13.createChoice('Relação em que um termo exige preposição própria', false),
    q13.createChoice('Clientes e líderes confiam mais em dados apresentados sem falhas gramaticais', true),
    q13.createChoice('Evita gírias regionais que podem ser mal interpretadas em equipes diversas', false),
    q13.createChoice('Conecte a frase seguinte por meio de pronomes ou conjunções', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "Vogais duplicadas"?');
  q14.setChoices([
    q14.createChoice('Relação em que um termo exige preposição própria', false),
    q14.createChoice('Perderam o acento: ideia, assembleia, coreia (e não *idéia)', false),
    q14.createChoice('Sem acento circunflexo: leem, veem, voo (e não *vôo)', true),
    q14.createChoice('Os relatórios financeiros do trimestre passado revelaram alta', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Contraste e Ressalva"?');
  q15.setChoices([
    q15.createChoice('Use portanto, por conseguinte ou dessa forma para consolidar decisões e próximos passos', false),
    q15.createChoice('Use contudo, entretanto ou não obstante quando for necessário pontuar divergências com elegância', true),
    q15.createChoice('Em documentos de trabalho, cada parágrafo deve girar em torno de uma ideia central declarada claramente no início: o tópico frasal', false),
    q15.createChoice('Um texto profissional precisa ser uma ponte sólida. A coesão é a costura gramatical (pronomes, conectivos e pontuação), enquanto a coerência é a lógica interna que...', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Qual conceito a aula define como: "Os relatórios financeiros do trimestre passado, revelaram alta"?');
  q16.setChoices([
    q16.createChoice('Incorreto', true),
    q16.createChoice('Regência', false),
    q16.createChoice('Confiança imediata', false),
    q16.createChoice('Declaração direta', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. Qual conceito a aula define como: "Perderam o acento: ideia, assembleia, coreia (e não *idéia)"?');
  q17.setChoices([
    q17.createChoice('Concordância', false),
    q17.createChoice('Ditongos abertos em paroxítonas', true),
    q17.createChoice('Desenvolvimento', false),
    q17.createChoice('Pontuação', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Correto"?');
  q18.setChoices([
    q18.createChoice('Permanece em pôde (passado) vs. pode (presente) e no verbo pôr', false),
    q18.createChoice('Clientes e líderes confiam mais em dados apresentados sem falhas gramaticais', false),
    q18.createChoice('Os relatórios financeiros do trimestre passado revelaram alta', true),
    q18.createChoice('Evita gírias regionais que podem ser mal interpretadas em equipes diversas', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "E-mails Corporativos Reais"?');
  q19.setChoices([
    q19.createChoice('Assim como os verbos, certos substantivos e adjetivos exigem preposições fixas para ligar seus complementos', false),
    q19.createChoice('Separe itens extensos de uma listagem em propostas ou orações já divididas internamente por vírgulas', false),
    q19.createChoice('Por que para perguntas e motivos. Porque para respostas explicativas', false),
    q19.createChoice('Perceba a ausência de vírgula no vocativo, erro de concordância em anexo, crase indevida em à vista (locução feminina tem crase, mas atenção às combinações) e...', true)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Qual conceito a aula define como: "Clientes e líderes confiam mais em dados apresentados sem falhas gramaticais"?');
  q20.setChoices([
    q20.createChoice('Vogais duplicadas', false),
    q20.createChoice('Confiança imediata', true),
    q20.createChoice('Ditongos abertos em paroxítonas', false),
    q20.createChoice('Desenvolvimento', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  Logger.log('✅ Aula 12 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 04 — Correção Gramatical Aplicada ao Trabalho');
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

function analisarRespostasAula04() {
  var form = FormApp.openByTitle('Avaliação — Aula 12 · Correção Gramatical Aplicada ao Trabalho · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 12: Correção Gramatical Aplicada ao Trabalho');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Correção Gramatical Aplicada ao Trabalho', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', '“Não vamos cobrar taxa adicional”, mas esquecer o acento ou trocar uma vírgula de lugar, alterando o', 'Regras formais para a escrita pública oficial.', 'Sinais que organizam pausas e sentidos das orações.', 'Ajuste harmônico de flexão entre termos da frase.', 'Relação em que um termo exige preposição própria.', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 05
// ════════════════════════════════════════════════════════════
