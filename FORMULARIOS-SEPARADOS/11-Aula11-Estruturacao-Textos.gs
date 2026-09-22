// ===== 11-Aula11-Estruturacao-Textos.gs =====
// Aula real (sequencia do curso): Aula 11 - Estruturacao-Textos
// Funcao interna (numeracao original do Google Forms): criarFormularioAula03()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula03() {
  var form = FormApp.create('Avaliação — Aula 11 · Estruturação de Textos Profissionais · SENAI');

  form.setDescription( 'Avaliação Completa: Estruturação de Textos Profissionais\n\nAula 11 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Estruturação de Textos Profissionais');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Coesão: a costura do texto"?');
  q1.setChoices([
    q1.createChoice('Construir períodos de seis ou sete linhas sem ponto final obriga o leitor a reler o trecho várias vezes para reencontrar o sujeito da ação', false),
    q1.createChoice('Omitir intencionalmente uma palavra já evidente no contexto para tornar o texto mais leve e enxuto', false),
    q1.createChoice('Prefira frases com 15 a 25 palavras. Ao terminar uma ideia completa, utilize ponto final em vez de encadear vírgulas infinitas', false),
    q1.createChoice('A coesão textual é a amarração gramatical explícita na superfície do texto. Sem ela, frases soltas parecem uma lista desconectada de compras', true)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Texto profissional"?');
  q2.setChoices([
    q2.createChoice('Defina em uma frase o que o leitor deve saber ou fazer após ler o texto', false),
    q2.createChoice('Defende uma tese pessoal por meio de juízos de valor e argumentação crítica', false),
    q2.createChoice('A capacidade de redigir textos claros, objetivos e coesos é uma das competências mais valorizadas em qualquer carreira. Na próxima aula (Aula 12), exploraremos a...', false),
    q2.createChoice('Exige objetividade, clareza absoluta, vocabulário formal e neutralidade informativa', true)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Segundo a aula, o que é "Conexão direta"?');
  q3.setChoices([
    q3.createChoice('Respostas alinhadas aos objetivos da pergunta', true),
    q3.createChoice('Sem gírias excessivas ou insegurança vocal', false),
    q3.createChoice('Conduzem o leitor sem solavancos de uma ideia à seguinte', false),
    q3.createChoice('Indicam causa, oposição, conclusão ou acréscimo', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Credibilidade pessoal"?');
  q4.setChoices([
    q4.createChoice('Demonstra rigor técnico, organização de ideias e respeito pelo leitor', true),
    q4.createChoice('Harmonia lógica de sentido global sem contradições internas', false),
    q4.createChoice('Organização lógica das ideias para orientar o leitor com clareza', false),
    q4.createChoice('as medidas práticas tomadas pelo candidato', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Qual conceito a aula define como: "Respostas alinhadas aos objetivos da pergunta"?');
  q5.setChoices([
    q5.createChoice('Estruturação', false),
    q5.createChoice('Credibilidade pessoal', false),
    q5.createChoice('Coerência', false),
    q5.createChoice('Conexão direta', true)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Segundo a aula, o que é "Coerência"?');
  q6.setChoices([
    q6.createChoice('Respostas alinhadas aos objetivos da pergunta', false),
    q6.createChoice('Indicam causa, oposição, conclusão ou acréscimo', false),
    q6.createChoice('Harmonia lógica de sentido global sem contradições internas', true),
    q6.createChoice('as medidas práticas tomadas pelo candidato', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Qual conceito a aula define como: "Ligação gramatical entre frases e palavras com conectivos precisos"?');
  q7.setChoices([
    q7.createChoice('Conectivos adequados', false),
    q7.createChoice('Estruturação', false),
    q7.createChoice('Coerência', false),
    q7.createChoice('Coesão', true)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "O perigo das ambiguidades"?');
  q8.setChoices([
    q8.createChoice('A ambiguidade ocorre quando a pontuação incorreta ou o mau posicionamento dos pronomes deixa o sentido incerto', true),
    q8.createChoice('Privilegia a estética, figuras de linguagem, subjetividade e emoção poética', false),
    q8.createChoice('A primeira frase, direta e afirmativa, que sintetiza o tema central que será tratado', false),
    q8.createChoice('A diretora pediu que o assistente enviasse o relatório elaborado por ela', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Qual conceito a aula define como: "Textos bem estruturados evitam trocas intermináveis de mensagens"?');
  q9.setChoices([
    q9.createChoice('Linguagem profissional', false),
    q9.createChoice('Conexão direta', false),
    q9.createChoice('Fluidez na leitura', false),
    q9.createChoice('Economia de tempo', true)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Segundo a aula, o que é "Coesão"?');
  q10.setChoices([
    q10.createChoice('Organização lógica das ideias para orientar o leitor com clareza', false),
    q10.createChoice('Ligação gramatical entre frases e palavras com conectivos precisos', true),
    q10.createChoice('Unidade textual básica em torno de uma ideia central condutora', false),
    q10.createChoice('Harmonia lógica de sentido global sem contradições internas', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. Segundo a aula, o que é "Parágrafo"?');
  q11.setChoices([
    q11.createChoice('Conduzem o leitor sem solavancos de uma ideia à seguinte', false),
    q11.createChoice('Unidade textual básica em torno de uma ideia central condutora', true),
    q11.createChoice('Textos bem estruturados evitam trocas intermináveis de mensagens', false),
    q11.createChoice('Respostas alinhadas aos objetivos da pergunta', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Qual conceito a aula define como: "Harmonia lógica de sentido global sem contradições internas"?');
  q12.setChoices([
    q12.createChoice('Credibilidade pessoal', false),
    q12.createChoice('Coerência', true),
    q12.createChoice('Coesão', false),
    q12.createChoice('Conexão direta', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Evitando a Ambiguidade"?');
  q13.setChoices([
    q13.createChoice('Dessa forma, todos os relatórios foram plenamente regularizados dentro do prazo legal', false),
    q13.createChoice('A diretora pediu que o assistente enviasse o relatório elaborado por ela', true),
    q13.createChoice('Você já recebeu uma mensagem tão confusa que não soube o que responder? No ambiente profissional, um e-mail desordenado causa retrabalho, perda de prazos e ruídos...', false),
    q13.createChoice('Construir períodos de seis ou sete linhas sem ponto final obriga o leitor a reler o trecho várias vezes para reencontrar o sujeito da ação', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Anatomia do parágrafo padrão"?');
  q14.setChoices([
    q14.createChoice('A primeira frase, direta e afirmativa, que sintetiza o tema central que será tratado', true),
    q14.createChoice('A ambiguidade ocorre quando a pontuação incorreta ou o mau posicionamento dos pronomes deixa o sentido incerto', false),
    q14.createChoice('Defende uma tese pessoal por meio de juízos de valor e argumentação crítica', false),
    q14.createChoice('Fica registrada de forma permanente e depende unicamente da ordem visual e semântica das frases escritas', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Segundo a aula, o que é "Linguagem profissional"?');
  q15.setChoices([
    q15.createChoice('Indicam causa, oposição, conclusão ou acréscimo', false),
    q15.createChoice('Sem gírias excessivas ou insegurança vocal', true),
    q15.createChoice('Textos bem estruturados evitam trocas intermináveis de mensagens', false),
    q15.createChoice('as medidas práticas tomadas pelo candidato', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Qual conceito a aula define como: "Organização lógica das ideias para orientar o leitor com clareza"?');
  q16.setChoices([
    q16.createChoice('Linguagem profissional', false),
    q16.createChoice('Coesão', false),
    q16.createChoice('Ação', false),
    q16.createChoice('Estruturação', true)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. Qual conceito a aula define como: "Indicam causa, oposição, conclusão ou acréscimo"?');
  q17.setChoices([
    q17.createChoice('Estruturação', false),
    q17.createChoice('Fluidez na leitura', false),
    q17.createChoice('Conectivos adequados', true),
    q17.createChoice('Coesão', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "O impacto do texto no trabalho"?');
  q18.setChoices([
    q18.createChoice('Permite correções instantâneas, entonação vocal, pausas de respiração e gestos para apoiar a compreensão mútua', false),
    q18.createChoice('Exige objetividade, clareza absoluta, vocabulário formal e neutralidade informativa', false),
    q18.createChoice('No ambiente profissional contemporâneo, a maioria das decisões diárias circula por escrito em e-mails, relatórios, atas e comunicados corporativos', true),
    q18.createChoice('Comunicação escrita com clareza, coesão e impacto no ambiente corporativo', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "O poderoso Método STAR"?');
  q19.setChoices([
    q19.createChoice('Na aula anterior, estudamos o preparo para processos seletivos. Em entrevistas de emprego, a clareza verbal reflete organização mental prévia', false),
    q19.createChoice('Defina em uma frase o que o leitor deve saber ou fazer após ler o texto', false),
    q19.createChoice('A implementação da coleta seletiva na unidade reduziu em 35% o descarte inadequado', false),
    q19.createChoice('O método STAR é a fórmula perfeita para narrar experiências: Situação (contexto), Tarefa (desafio colocado), Ação (sua iniciativa prática) e Resultado (impacto...', true)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Segundo a aula, o que é "Ação"?');
  q20.setChoices([
    q20.createChoice('Demonstra rigor técnico, organização de ideias e respeito pelo leitor', false),
    q20.createChoice('Conduzem o leitor sem solavancos de uma ideia à seguinte', false),
    q20.createChoice('Ligação gramatical entre frases e palavras com conectivos precisos', false),
    q20.createChoice('as medidas práticas tomadas pelo candidato', true)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ Aula 11 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 03 — Estruturação de Textos Profissionais');
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

function analisarRespostasAula03() {
  var form = FormApp.openByTitle('Avaliação — Aula 11 · Estruturação de Textos Profissionais · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 11: Estruturação de Textos Profissionais');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Estruturação de Textos Profissionais', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos de aprendizagem', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'a costura do texto', 'o sentido global', 'Unidade textual básica em torno de uma ideia central condutora.', 'Organização lógica das ideias para orientar o leitor com clareza.', 'Método STAR', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 04
// ════════════════════════════════════════════════════════════
