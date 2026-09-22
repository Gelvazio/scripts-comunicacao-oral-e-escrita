// ===== 17-Aula17-Procedimentos-Instrucoes.gs =====
// Aula real (sequencia do curso): Aula 17 - Procedimentos-Instrucoes
// Funcao interna (numeracao original do Google Forms): criarFormularioAula09()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula09() {
  var form = FormApp.create('Avaliação — Aula 17 · Procedimentos e Instruções Como escrever passos claros, sequenciais e sem erros · SENAI');

  form.setDescription( 'Avaliação Completa: Procedimentos e Instruções Como escrever passos claros, sequenciais e sem erros\n\nAula 17 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Procedimentos e Instruções Como escrever passos claros, sequenciais e sem erros');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Dúvidas Levantadas"?');
  q1.setChoices([
    q1.createChoice('Ao escrever instruções, coloque-se sempre no lugar de quem está executando aquela ação pela primeira vez na vida', false),
    q1.createChoice('O relatório documenta e analisa fatos e dados detalhados, enquanto o comunicado apenas transmite avisos imediatos', false),
    q1.createChoice('Identifica os trechos específicos em que o leitor solicitou ajuda externa', true),
    q1.createChoice('Indicados para inventários, listas de materiais, EPIs ou alertas em que a ordem não interfere no resultado', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Segundo a aula, o que é "Objetivo"?');
  q2.setChoices([
    q2.createChoice('novos colaboradores aprendem a rotina com autonomia e rapidez', false),
    q2.createChoice('garantia de uso correto de equipamentos de proteção individual', false),
    q2.createChoice('informe segundos, gramas, litros, graus ou milímetros', false),
    q2.createChoice('Salvar cópias seguras dos projetos no servidor nuvem', true)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Qual conceito a aula define como: "menos erros de montagem e menor perda de matéria-prima"?');
  q3.setChoices([
    q3.createChoice('Substitua adjetivos por grandezas', false),
    q3.createChoice('Redução de desperdícios', true),
    q3.createChoice('Objetivo', false),
    q3.createChoice('Segurança no trabalho', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Qual conceito a aula define como: "Salvar cópias seguras dos projetos no servidor nuvem"?');
  q4.setChoices([
    q4.createChoice('Segurança no trabalho', false),
    q4.createChoice('Objetivo', true),
    q4.createChoice('Substitua adjetivos por grandezas', false),
    q4.createChoice('Facilidade no treinamento', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Qual conceito a aula define como: "garantia de uso correto de equipamentos de proteção individual"?');
  q5.setChoices([
    q5.createChoice('Objetivo', false),
    q5.createChoice('Substitua adjetivos por grandezas', false),
    q5.createChoice('Facilidade no treinamento', false),
    q5.createChoice('Segurança no trabalho', true)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Modo Infinitivo"?');
  q6.setChoices([
    q6.createChoice('Sua estrutura exige cabeçalho fixo (Para, De, Assunto, Data), parágrafos curtos e objetivo direto. Hoje, avançamos para textos que não apenas informam, mas ensinam...', false),
    q6.createChoice('Usabilidade - Facilidade com que o leitor compreende e executa o texto', false),
    q6.createChoice('Apresenta o procedimento de maneira neutra e impessoal', true),
    q6.createChoice('Se uma cola precisa de 10 minutos para secar antes do aperto final, ou se a energia precisa ser cortada antes de abrir a tampa, isso deve constar no momento exato', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Segundo a aula, o que é "Redução de desperdícios"?');
  q7.setChoices([
    q7.createChoice('informe segundos, gramas, litros, graus ou milímetros', false),
    q7.createChoice('garantia de uso correto de equipamentos de proteção individual', false),
    q7.createChoice('Salvar cópias seguras dos projetos no servidor nuvem', false),
    q7.createChoice('menos erros de montagem e menor perda de matéria-prima', true)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Segundo a aula, o que é "Facilidade no treinamento"?');
  q8.setChoices([
    q8.createChoice('menos erros de montagem e menor perda de matéria-prima', false),
    q8.createChoice('novos colaboradores aprendem a rotina com autonomia e rapidez', true),
    q8.createChoice('informe segundos, gramas, litros, graus ou milímetros', false),
    q8.createChoice('Salvar cópias seguras dos projetos no servidor nuvem', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Qual conceito a aula define como: "novos colaboradores aprendem a rotina com autonomia e rapidez"?');
  q9.setChoices([
    q9.createChoice('Facilidade no treinamento', true),
    q9.createChoice('Objetivo', false),
    q9.createChoice('Substitua adjetivos por grandezas', false),
    q9.createChoice('Redução de desperdícios', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Qual conceito a aula define como: "informe segundos, gramas, litros, graus ou milímetros"?');
  q10.setChoices([
    q10.createChoice('Facilidade no treinamento', false),
    q10.createChoice('Segurança no trabalho', false),
    q10.createChoice('Redução de desperdícios', false),
    q10.createChoice('Substitua adjetivos por grandezas', true)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Objetivo"?');
  q11.setChoices([
    q11.createChoice('Assinale a alternativa que mantém a consistência gramatical adequada para um manual de instruções', false),
    q11.createChoice('Ao escrever instruções, coloque-se sempre no lugar de quem está executando aquela ação pela primeira vez na vida', false),
    q11.createChoice('Enumera equipamentos, EPIs, ferramentas e insumos necessários antes do início', true),
    q11.createChoice('Análise detalhada de fatos já ocorridos, dados estatísticos, causas, impactos e recomendações técnicas', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Vocabulário Essencial"?');
  q12.setChoices([
    q12.createChoice('Usabilidade - Facilidade com que o leitor compreende e executa o texto', true),
    q12.createChoice('Ao escrever instruções, coloque-se sempre no lugar de quem está executando aquela ação pela primeira vez na vida', false),
    q12.createChoice('Sua estrutura exige cabeçalho fixo (Para, De, Assunto, Data), parágrafos curtos e objetivo direto. Hoje, avançamos para textos que não apenas informam, mas ensinam...', false),
    q12.createChoice('Mede quanto tempo o usuário levou e se houve paradas demoradas para decifrar frases', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Recapitulando: O Memorando"?');
  q13.setChoices([
    q13.createChoice('Em um manual de procedimentos bem elaborado, se um operador comete um erro ao seguir o texto pela primeira vez, a falha quase sempre decorre da ambiguidade ou...', false),
    q13.createChoice('Dominar a redação de procedimentos e instruções é a base da segurança, qualidade e eficiência no mundo profissional', false),
    q13.createChoice('Se uma cola precisa de 10 minutos para secar antes do aperto final, ou se a energia precisa ser cortada antes de abrir a tampa, isso deve constar no momento exato', false),
    q13.createChoice('Sua estrutura exige cabeçalho fixo (Para, De, Assunto, Data), parágrafos curtos e objetivo direto. Hoje, avançamos para textos que não apenas informam, mas ensinam...', true)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Listas Numeradas (1, 2, 3...)"?');
  q14.setChoices([
    q14.createChoice('Exclusivas para etapas cronológicas onde a ordem de execução é obrigatória e inalterável', true),
    q14.createChoice('Apresenta o procedimento de maneira neutra e impessoal', false),
    q14.createChoice('Usabilidade - Facilidade com que o leitor compreende e executa o texto', false),
    q14.createChoice('Sua estrutura exige cabeçalho fixo (Para, De, Assunto, Data), parágrafos curtos e objetivo direto. Hoje, avançamos para textos que não apenas informam, mas ensinam...', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Segundo a aula, o que é "Segurança no trabalho"?');
  q15.setChoices([
    q15.createChoice('novos colaboradores aprendem a rotina com autonomia e rapidez', false),
    q15.createChoice('garantia de uso correto de equipamentos de proteção individual', true),
    q15.createChoice('Salvar cópias seguras dos projetos no servidor nuvem', false),
    q15.createChoice('menos erros de montagem e menor perda de matéria-prima', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "O Risco da Vagueza"?');
  q16.setChoices([
    q16.createChoice('Indicados para inventários, listas de materiais, EPIs ou alertas em que a ordem não interfere no resultado', false),
    q16.createChoice('O relatório documenta e analisa fatos e dados detalhados, enquanto o comunicado apenas transmite avisos imediatos', false),
    q16.createChoice('Se dois leitores podem interpretar o mesmo passo de formas diferentes, a instrução precisa ser reescrita', true),
    q16.createChoice('Mede quanto tempo o usuário levou e se houve paradas demoradas para decifrar frases', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Técnico Especialista"?');
  q17.setChoices([
    q17.createChoice('Enumera equipamentos, EPIs, ferramentas e insumos necessários antes do início', false),
    q17.createChoice('Exige parâmetros exatos, normas técnicas regulamentadoras (ABNT/ISO), unidades de medida precisas e termos da área', true),
    q17.createChoice('O manual presume que o usuário já sabe como encaixar uma peça e omite o passo básico', false),
    q17.createChoice('Usabilidade - Facilidade com que o leitor compreende e executa o texto', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "Tradução Literal"?');
  q18.setChoices([
    q18.createChoice('Exclusivas para etapas cronológicas onde a ordem de execução é obrigatória e inalterável', false),
    q18.createChoice('Especifica os setores, equipamentos e cargos aos quais a norma se aplica', false),
    q18.createChoice('Traduções automáticas que geram termos sem sentido prático na língua do leitor', true),
    q18.createChoice('Em um manual de procedimentos bem elaborado, se um operador comete um erro ao seguir o texto pela primeira vez, a falha quase sempre decorre da ambiguidade ou...', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Segundo a aula, o que é "Substitua adjetivos por grandezas"?');
  q19.setChoices([
    q19.createChoice('Salvar cópias seguras dos projetos no servidor nuvem', false),
    q19.createChoice('garantia de uso correto de equipamentos de proteção individual', false),
    q19.createChoice('menos erros de montagem e menor perda de matéria-prima', false),
    q19.createChoice('informe segundos, gramas, litros, graus ou milímetros', true)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "Gêneros Técnicos em Paralelo"?');
  q20.setChoices([
    q20.createChoice('Para isso, as frases devem ser curtas, diretas e eliminar termos poéticos, opiniões ou comentários subjetivos que distraiam o executor', false),
    q20.createChoice('Análise detalhada de fatos já ocorridos, dados estatísticos, causas, impactos e recomendações técnicas', true),
    q20.createChoice('Assinale a alternativa que mantém a consistência gramatical adequada para um manual de instruções', false),
    q20.createChoice('Instruções em bloco corrido de texto, sem numeração ou destaque visual para alertas', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  Logger.log('✅ Aula 17 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 09 — Procedimentos e Instruções Como escrever passos claros, sequenciais e sem erros');
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

function analisarRespostasAula09() {
  var form = FormApp.openByTitle('Avaliação — Aula 17 · Procedimentos e Instruções Como escrever passos claros, sequenciais e sem erros · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 17: Procedimentos e Instruções Como escrever passos claros, sequenciais e sem erros');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Procedimentos e Instruções Como escrever passos claros, sequenciais e sem erros', 'É um conceito importante apresentado na aula', 'O que acontece na falha?', 'É um conceito importante apresentado na aula', 'Objetivos da Nossa Aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'O Memorando', 'Qual é a finalidade central de um relatório técnico em comparação a um comunicado interno?', 'Qual documento deve ser consultado quando um funcionário precisa aprender o passo a passo de uma tar', 'Qual é o foco principal do memorando corporativo?', 'O relatório documenta e analisa fatos e dados detalhados, enquanto o comunicado apenas transmite avi', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 10
// ════════════════════════════════════════════════════════════
