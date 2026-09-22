// ===== 18-Aula18-Plataformas-Digitais.gs =====
// Aula real (sequencia do curso): Aula 18 - Plataformas-Digitais
// Funcao interna (numeracao original do Google Forms): criarFormularioAula10()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula10() {
  var form = FormApp.create('Avaliação — Aula 18 · Plataformas Digitais de Comunicação Conectando equipes com eficiência, agilidade e clareza no trabalho. · SENAI');

  form.setDescription( 'Avaliação Completa: Plataformas Digitais de Comunicação Conectando equipes com eficiência, agilidade e clareza no trabalho.\n\nAula 18 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Plataformas Digitais de Comunicação Conectando equipes com eficiência, agilidade e clareza no trabalho.');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Recapitulação: Procedimentos e Manuais"?');
  q1.setChoices([
    q1.createChoice('Na aula anterior, aprendemos a redigir manuais e Procedimentos Operacionais Padrão (POP). Documentos operacionais exigem clareza absoluta, sequência cronológica...', true),
    q1.createChoice('Dá tempo para pesquisar dados, revisar cálculos e estruturar argumentos com calma', false),
    q1.createChoice('Ao enviar um relatório pronto para clientes externos, o link de acesso deve ser configurado como Editor para facilitar o download', false),
    q1.createChoice('Acionar notificações gerais no chat para assuntos que competem a apenas uma pessoa', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Segundo a aula, o que é "Ferramenta"?');
  q2.setChoices([
    q2.createChoice('Ambiente digital integrado para gestão e mensagens', false),
    q2.createChoice('Chat interno ou comentário no cartão da tarefa', false),
    q2.createChoice('o líder enviou para a avaliação a versão antiga e incompleta, perdendo notas por pura falha no uso das plataformas colaborativas', false),
    q2.createChoice('Aplicativo específico que executa funções operacionais e facilita fluxos', true)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. De acordo com a aula, o que caracteriza "Autenticação em 2 Etapas"?');
  q3.setChoices([
    q3.createChoice('Um dos maiores problemas no ambiente profissional é nomear arquivos de forma amadora ou confusa, o que impede a busca automatizada e gera erros de versão', false),
    q3.createChoice('Proteja todas as suas contas corporativas e escolares com código no celular', true),
    q3.createChoice('Na aula anterior, aprendemos a redigir manuais e Procedimentos Operacionais Padrão (POP). Documentos operacionais exigem clareza absoluta, sequência cronológica...', false),
    q3.createChoice('Decisões e orientações ficam arquivadas para consulta futura de novos membros da equipe', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Qual conceito a aula define como: "Troca de mensagens sem necessidade de resposta imediata ou simultaneidade"?');
  q4.setChoices([
    q4.createChoice('Assíncrono', true),
    q4.createChoice('Contrato', false),
    q4.createChoice('Queda de servidores', false),
    q4.createChoice('Mensagem Completa', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Segundo a aula, o que é "Mensagem Completa"?');
  q5.setChoices([
    q5.createChoice('Ambiente digital integrado para gestão e mensagens', false),
    q5.createChoice('Forneça contexto, objetivo e prazos claros para evitar trocas excessivas e improdutivas', true),
    q5.createChoice('E-mail ou plataforma de assinatura para valor legal', false),
    q5.createChoice('[PROJETO]_[DOCUMENTO]_[VERSAO]_[DATA]', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Qual conceito a aula define como: "Comunicação em tempo real, exigindo presença simultânea dos participantes"?');
  q6.setChoices([
    q6.createChoice('Assíncrono', false),
    q6.createChoice('Síncrono', true),
    q6.createChoice('Resultado', false),
    q6.createChoice('Exemplo recomendado', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Qual conceito a aula define como: "[PROJETO]_[DOCUMENTO]_[VERSAO]_[DATA]"?');
  q7.setChoices([
    q7.createChoice('Imagem do post', false),
    q7.createChoice('Adote a fórmula padrão', true),
    q7.createChoice('Organização e Segurança', false),
    q7.createChoice('Canal Adequado', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "Compartilhamento e Permissões Seguras"?');
  q8.setChoices([
    q8.createChoice('Acesso apenas para leitura e download. Ideal para relatórios finalizados e manuais corporativos', true),
    q8.createChoice('Ferramentas como Slack e Teams organizam discussões por canais temáticos dedicados a cada projeto específico', false),
    q8.createChoice('Registros oficiais, comunicações formais externas e arquivos que demandam histórico auditável', false),
    q8.createChoice('O e-mail permanece indispensável no mundo corporativo para formalizar combinados, enviar orçamentos e arquivar decisões com valor jurídico ou institucional', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Segundo a aula, o que é "Síncrono"?');
  q9.setChoices([
    q9.createChoice('E-mail ou plataforma de assinatura para valor legal', false),
    q9.createChoice('o líder enviou para a avaliação a versão antiga e incompleta, perdendo notas por pura falha no uso das plataformas colaborativas', false),
    q9.createChoice('Comunicação em tempo real, exigindo presença simultânea dos participantes', true),
    q9.createChoice('Chat interno ou comentário no cartão da tarefa', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Qual conceito a aula define como: "o líder enviou para a avaliação a versão antiga e incompleta, perdendo notas por pura falha no uso das plataformas colaborativas"?');
  q10.setChoices([
    q10.createChoice('Adote a fórmula padrão', false),
    q10.createChoice('Síncrono', false),
    q10.createChoice('Resultado', true),
    q10.createChoice('Canal Adequado', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Etapa 2"?');
  q11.setChoices([
    q11.createChoice('Nunca exponha CPF, senhas ou dados bancários em canais abertos ou chats de grupo', false),
    q11.createChoice('Atribuição ao responsável e envio à coluna Em Produção', true),
    q11.createChoice('Ao usar computadores da escola ou biblioteca, encerre a sessão de todas as plataformas', false),
    q11.createChoice('Facilita a colaboração entre pessoas que possuem turnos ou rotinas de estudo distintas', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Correspondência de Canais"?');
  q12.setChoices([
    q12.createChoice('Dá tempo para pesquisar dados, revisar cálculos e estruturar argumentos com calma', false),
    q12.createChoice('Uma equipe de quatro pessoas combinou a entrega de um trabalho escolar importante. No entanto, usaram o grupo pessoal de mensagens para enviar 12 versões diferentes...', false),
    q12.createChoice('Na aula anterior, aprendemos a redigir manuais e Procedimentos Operacionais Padrão (POP). Documentos operacionais exigem clareza absoluta, sequência cronológica...', false),
    q12.createChoice('Canal assíncrono para formalização de acordos e envio de documentos oficiais', true)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. Segundo a aula, o que é "Adote a fórmula padrão"?');
  q13.setChoices([
    q13.createChoice('Forneça contexto, objetivo e prazos claros para evitar trocas excessivas e improdutivas', false),
    q13.createChoice('Ambiente digital integrado para gestão e mensagens', false),
    q13.createChoice('[PROJETO]_[DOCUMENTO]_[VERSAO]_[DATA]', true),
    q13.createChoice('Troca de mensagens sem necessidade de resposta imediata ou simultaneidade', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "Organização e Segurança"?');
  q14.setChoices([
    q14.createChoice('Escolha entre síncrono ou assíncrono conforme a urgência, formalidade e complexidade', false),
    q14.createChoice('Nomeie arquivos com padrão e configure permissões rigorosas de nuvem', true),
    q14.createChoice('E-mail ou plataforma de assinatura para valor legal', false),
    q14.createChoice('Chat interno ou comentário no cartão da tarefa', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "E-mail Corporativo"?');
  q15.setChoices([
    q15.createChoice('Ordene as etapas corretas para resolver um problema técnico com a equipe de TI da empresa', false),
    q15.createChoice('A evolução tecnológica redefiniu tanto os escritórios modernos quanto os ambientes acadêmicos. Relatórios físicos e memorandos impressos deram lugar a ecossistemas...', false),
    q15.createChoice('Registros oficiais, comunicações formais externas e arquivos que demandam histórico auditável', true),
    q15.createChoice('Decisões e orientações ficam arquivadas para consulta futura de novos membros da equipe', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Qual conceito a aula define como: "Forneça contexto, objetivo e prazos claros para evitar trocas excessivas e improdutivas"?');
  q16.setChoices([
    q16.createChoice('Contrato', false),
    q16.createChoice('Exemplo recomendado', false),
    q16.createChoice('Assíncrono', false),
    q16.createChoice('Mensagem Completa', true)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "O custo da desorganização digital"?');
  q17.setChoices([
    q17.createChoice('Proteja todas as suas contas corporativas e escolares com código no celular', false),
    q17.createChoice('Decisões e orientações ficam arquivadas para consulta futura de novos membros da equipe', false),
    q17.createChoice('Registros oficiais, comunicações formais externas e arquivos que demandam histórico auditável', false),
    q17.createChoice('Uma equipe de quatro pessoas combinou a entrega de um trabalho escolar importante. No entanto, usaram o grupo pessoal de mensagens para enviar 12 versões diferentes...', true)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Contrato"?');
  q18.setChoices([
    q18.createChoice('Comunicação em tempo real, exigindo presença simultânea dos participantes', false),
    q18.createChoice('Ambiente digital integrado para gestão e mensagens', false),
    q18.createChoice('E-mail ou plataforma de assinatura para valor legal', true),
    q18.createChoice('Forneça contexto, objetivo e prazos claros para evitar trocas excessivas e improdutivas', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Segundo a aula, o que é "Resultado"?');
  q19.setChoices([
    q19.createChoice('[PROJETO]_[DOCUMENTO]_[VERSAO]_[DATA]', false),
    q19.createChoice('Comunicação em tempo real, exigindo presença simultânea dos participantes', false),
    q19.createChoice('Aplicativo específico que executa funções operacionais e facilita fluxos', false),
    q19.createChoice('o líder enviou para a avaliação a versão antiga e incompleta, perdendo notas por pura falha no uso das plataformas colaborativas', true)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "Flexibilidade de Horário"?');
  q20.setChoices([
    q20.createChoice('Facilita a colaboração entre pessoas que possuem turnos ou rotinas de estudo distintas', true),
    q20.createChoice('Ordene as etapas corretas para resolver um problema técnico com a equipe de TI da empresa', false),
    q20.createChoice('Canal assíncrono para formalização de acordos e envio de documentos oficiais', false),
    q20.createChoice('Alinhamentos rápidos, trocas dinâmicas em equipe e avisos operacionais do dia a dia', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  ScriptApp.newTrigger('aoSubmeterFormulario').forForm(form).onFormSubmit().create();

  Logger.log('✅ Aula 18 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 10 — Plataformas Digitais de Comunicação Conectando equipes com eficiência, agilidade e clareza no trabalho.');
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

function analisarRespostasAula10() {
  var form = FormApp.openByTitle('Avaliação — Aula 18 · Plataformas Digitais de Comunicação Conectando equipes com eficiência, agilidade e clareza no trabalho. · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 18: Plataformas Digitais de Comunicação Conectando equipes com eficiência, agilidade e clareza no trabalho.');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Plataformas Digitais de Comunicação Conectando equipes com eficiência, agilidade e clareza no trabalho.', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos de Aprendizagem', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Ambiente digital integrado para gestão e mensagens.', 'Comunicação em tempo real, exigindo presença simultânea dos participantes.', 'Troca de mensagens sem necessidade de resposta imediata ou simultaneidade.', 'Aplicativo específico que executa funções operacionais e facilita fluxos.', 'Procedimentos e Manuais', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 11
// ════════════════════════════════════════════════════════════
