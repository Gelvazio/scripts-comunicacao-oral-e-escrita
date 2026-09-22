// ===== 16-Aula16-Memorandos.gs =====
// Aula real (sequencia do curso): Aula 16 - Memorandos
// Funcao interna (numeracao original do Google Forms): criarFormularioAula08()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula08() {
  var form = FormApp.create('Avaliação — Aula 16 · Redação de Memorandos e Comunicações Internas Agilidade, clareza e alinhamento na rotina corporativa · SENAI');

  form.setDescription( 'Avaliação Completa: Redação de Memorandos e Comunicações Internas Agilidade, clareza e alinhamento na rotina corporativa\n\nAula 16 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Redação de Memorandos e Comunicações Internas Agilidade, clareza e alinhamento na rotina corporativa');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Excesso de Detalhes"?');
  q1.setChoices([
    q1.createChoice('Todos exigem clareza documental, datação e linguagem objetiva para evitar dúvidas', false),
    q1.createChoice('Algumas pessoas acreditam que escrever bem no trabalho significa usar termos arcaicos ou palavras difíceis que ninguém entende', false),
    q1.createChoice('Textos quilométricos fazem com que o leitor desista da leitura antes de chegar às orientações cruciais', true),
    q1.createChoice('Explique o motivo coletivo das mudanças para que os colaboradores compreendam o benefício do alinhamento', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Segundo a aula, o que é "Registro e Rastreabilidade"?');
  q2.setChoices([
    q2.createChoice('Cria comprovação formal de que um pedido ou aviso foi entregue entre setores', true),
    q2.createChoice('Departamento ou cargo de destino', false),
    q2.createChoice('Aviso oficial voltado para toda a equipe ou empresa', false),
    q2.createChoice('de um departamento para outro específico (ex: RH para Compras)', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "Três Formatos de Comunicação Interna"?');
  q3.setChoices([
    q3.createChoice('Vá direto ao ponto no primeiro parágrafo: indique o fato, a razão e a necessidade da comunicação em uma ou duas frases diretas', false),
    q3.createChoice('Sua missão é redigir um memorando oficial convocando os Líderes de Turma do 8º e 9º Anos para uma reunião de planejamento do Grêmio Estudantil', false),
    q3.createChoice('Texto idêntico distribuído simultaneamente a múltiplos setores para uniformizar uma norma ou instrução geral', true),
    q3.createChoice('O cabeçalho do memorando deve responder imediatamente a quatro perguntas essenciais do leitor', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. De acordo com a aula, o que caracteriza "O Cabeçalho Padrão"?');
  q4.setChoices([
    q4.createChoice('O cabeçalho do memorando deve responder imediatamente a quatro perguntas essenciais do leitor', true),
    q4.createChoice('Trata de demandas práticas entre setores. Exemplo: Solicitação de computadores para a recepção', false),
    q4.createChoice('Demandas formais exigem memorando ou e-mail documentado; mensagens instantâneas perdem o registro oficial', false),
    q4.createChoice('Mesmo ao cobrar tarefas atrasadas ou apontar erros, o texto corporativo mantém a cordialidade e evita ataques pessoais', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "CONCEITO CHAVE"?');
  q5.setChoices([
    q5.createChoice('Diferente de relatórios extensos, sua finalidade principal é acionar: solicitar providências, informar decisões imediatas ou alinhar processos pontuais de forma...', true),
    q5.createChoice('Demandas formais exigem memorando ou e-mail documentado; mensagens instantâneas perdem o registro oficial', false),
    q5.createChoice('Se um termo técnico for indispensável, explique-o brevemente entre parênteses', false),
    q5.createChoice('Quando a gestão demora para avisar sobre mudanças, boatos ocupam o espaço da informação oficial', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Estrutura do Memorando"?');
  q6.setChoices([
    q6.createChoice('Textos curtos, objetivos e bem estruturados economizam tempo, evitam retrabalho e constroem equipes mais alinhadas e colaborativas', false),
    q6.createChoice('O cabeçalho do memorando indica o ____ e o remetente, enquanto o corpo do texto exige ____ para focar diretamente na solicitação principal', true),
    q6.createChoice('Demandas formais exigem memorando ou e-mail documentado; mensagens instantâneas perdem o registro oficial', false),
    q6.createChoice('Quando a gestão demora para avisar sobre mudanças, boatos ocupam o espaço da informação oficial', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. De acordo com a aula, o que caracteriza "Empatia e Cooperação"?');
  q7.setChoices([
    q7.createChoice('Explique o motivo coletivo das mudanças para que os colaboradores compreendam o benefício do alinhamento', true),
    q7.createChoice('Solicitamos o envio dos pedidos até 22/04, às 16h, via formulário eletrônico padrão', false),
    q7.createChoice('Usar termos muito rebuscados e arcaicos torna o memorando mais eficiente e respeitado no ambiente de trabalho', false),
    q7.createChoice('Texto idêntico distribuído simultaneamente a múltiplos setores para uniformizar uma norma ou instrução geral', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Qual conceito a aula define como: "de um departamento para outro específico (ex: RH para Compras)"?');
  q8.setChoices([
    q8.createChoice('Concisão', false),
    q8.createChoice('Regra geral obrigatória. Exemplo', false),
    q8.createChoice('Registro e Rastreabilidade', false),
    q8.createChoice('Comunicação horizontal ou vertical pontual', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Segundo a aula, o que é "Comunicado"?');
  q9.setChoices([
    q9.createChoice('Departamento ou cargo de destino', false),
    q9.createChoice('Elimina formalidades cerimoniais em excesso para focar diretamente na ação esperada', false),
    q9.createChoice('Aviso oficial voltado para toda a equipe ou empresa', true),
    q9.createChoice('de um departamento para outro específico (ex: RH para Compras)', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "Comparativo Rápido dos Formatos"?');
  q10.setChoices([
    q10.createChoice('O cabeçalho do memorando deve responder imediatamente a quatro perguntas essenciais do leitor', false),
    q10.createChoice('Gostaríamos de avisar que os materiais estão acabando rápido demais e quem quiser coisas precisa mandar o papel logo, senão vai ficar sem nada na semana que vem', false),
    q10.createChoice('Trata de demandas práticas entre setores. Exemplo: Solicitação de computadores para a recepção', true),
    q10.createChoice('Algumas pessoas acreditam que escrever bem no trabalho significa usar termos arcaicos ou palavras difíceis que ninguém entende', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. Segundo a aula, o que é "Número"?');
  q11.setChoices([
    q11.createChoice('Exemplo: Coordenador de Logística', false),
    q11.createChoice('Cria comprovação formal de que um pedido ou aviso foi entregue entre setores', false),
    q11.createChoice('Define com exatidão quem deve fazer o quê e até que momento', false),
    q11.createChoice('Identificador oficial (ex: Mem. nº 042/2026)', true)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Segundo a aula, o que é "Para"?');
  q12.setChoices([
    q12.createChoice('Identificador oficial (ex: Mem. nº 042/2026)', false),
    q12.createChoice('Departamento ou cargo de destino', true),
    q12.createChoice('Aviso oficial voltado para toda a equipe ou empresa', false),
    q12.createChoice('Elimina formalidades cerimoniais em excesso para focar diretamente na ação esperada', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "RECAPITULAÇÃO"?');
  q13.setChoices([
    q13.createChoice('Quando os colaboradores compreendem as decisões da diretoria, os boatos de corredor perdem força e o foco na produtividade aumenta', false),
    q13.createChoice('Trata de demandas práticas entre setores. Exemplo: Solicitação de computadores para a recepção', false),
    q13.createChoice('Mesmo ao cobrar tarefas atrasadas ou apontar erros, o texto corporativo mantém a cordialidade e evita ataques pessoais', false),
    q13.createChoice('O relatório técnico investiga situações complexas com introdução, desenvolvimento, conclusão e recomendações', true)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Qual conceito a aula define como: "Exemplo: Coordenador de Logística"?');
  q14.setChoices([
    q14.createChoice('Memorando', false),
    q14.createChoice('Para', false),
    q14.createChoice('Cargo ou Função', true),
    q14.createChoice('Registro e Rastreabilidade', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Segundo a aula, o que é "Alinhamento Operacional"?');
  q15.setChoices([
    q15.createChoice('Cria comprovação formal de que um pedido ou aviso foi entregue entre setores', false),
    q15.createChoice('de um departamento para outro específico (ex: RH para Compras)', false),
    q15.createChoice('Texto ágil entre setores para pedidos ou avisos internos', false),
    q15.createChoice('Define com exatidão quem deve fazer o quê e até que momento', true)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "Transparência Gera Alinhamento"?');
  q16.setChoices([
    q16.createChoice('Demandas formais exigem memorando ou e-mail documentado; mensagens instantâneas perdem o registro oficial', false),
    q16.createChoice('Se uma palavra pode ser cortada sem alterar o sentido do pedido, corte-a', false),
    q16.createChoice('Algumas pessoas acreditam que escrever bem no trabalho significa usar termos arcaicos ou palavras difíceis que ninguém entende', false),
    q16.createChoice('Quando os colaboradores compreendem as decisões da diretoria, os boatos de corredor perdem força e o foco na produtividade aumenta', true)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Leitura Comparativa"?');
  q17.setChoices([
    q17.createChoice('Quais elementos tornam a segunda versão do memorando mais eficaz do que a primeira? (Mais de uma opção está correta)', true),
    q17.createChoice('Vá direto ao ponto no primeiro parágrafo: indique o fato, a razão e a necessidade da comunicação em uma ou duas frases diretas', false),
    q17.createChoice('Explique o motivo coletivo das mudanças para que os colaboradores compreendam o benefício do alinhamento', false),
    q17.createChoice('Quando os colaboradores compreendem as decisões da diretoria, os boatos de corredor perdem força e o foco na produtividade aumenta', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Regra geral obrigatória. Exemplo"?');
  q18.setChoices([
    q18.createChoice('Capacidade de transmitir o essencial com poucas palavras exatas', false),
    q18.createChoice('Registro cronológico exato (ex: 15 de abril de 2026)', false),
    q18.createChoice('Normas de segurança para crachás em todas as unidades', true),
    q18.createChoice('Elimina formalidades cerimoniais em excesso para focar diretamente na ação esperada', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Segundo a aula, o que é "Orientação"?');
  q19.setChoices([
    q19.createChoice('Capacidade de transmitir o essencial com poucas palavras exatas', false),
    q19.createChoice('Departamento ou cargo de destino', false),
    q19.createChoice('Instrução prática que guia o cumprimento de uma tarefa', true),
    q19.createChoice('Exemplo: Coordenador de Logística', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Segundo a aula, o que é "Memorando"?');
  q20.setChoices([
    q20.createChoice('Normas de segurança para crachás em todas as unidades', false),
    q20.createChoice('Identificador oficial (ex: Mem. nº 042/2026)', false),
    q20.createChoice('Texto ágil entre setores para pedidos ou avisos internos', true),
    q20.createChoice('Elimina formalidades cerimoniais em excesso para focar diretamente na ação esperada', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  Logger.log('✅ Aula 16 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 08 — Redação de Memorandos e Comunicações Internas Agilidade, clareza e alinhamento na rotina corporativa');
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

function analisarRespostasAula08() {
  var form = FormApp.openByTitle('Avaliação — Aula 16 · Redação de Memorandos e Comunicações Internas Agilidade, clareza e alinhamento na rotina corporativa · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 16: Redação de Memorandos e Comunicações Internas Agilidade, clareza e alinhamento na rotina corporativa');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Redação de Memorandos e Comunicações Internas Agilidade, clareza e alinhamento na rotina corporativa', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos da Nossa Aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Texto ágil entre setores para pedidos ou avisos internos.', 'Aviso oficial voltado para toda a equipe ou empresa.', 'Capacidade de transmitir o essencial com poucas palavras exatas.', 'Instrução prática que guia o cumprimento de uma tarefa.', 'Relatório Técnico', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 09
// ════════════════════════════════════════════════════════════
