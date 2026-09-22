// ===== 19-Aula19-Seguranca-Informacao.gs =====
// Aula real (sequencia do curso): Aula 19 - Seguranca-Informacao
// Funcao interna (numeracao original do Google Forms): criarFormularioAula11()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula11() {
  var form = FormApp.create('Avaliação — Aula 19 · Segurança da Informação e Privacidade Protegendo dados, canais e reputação no ambiente digital corporativo · SENAI');

  form.setDescription( 'Avaliação Completa: Segurança da Informação e Privacidade Protegendo dados, canais e reputação no ambiente digital corporativo\n\nAula 19 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Segurança da Informação e Privacidade Protegendo dados, canais e reputação no ambiente digital corporativo');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Canais de Comunicação: Revisão"?');
  q1.setChoices([
    q1.createChoice('Sistemas de proteção previnem que ataques derrubem servidores escolares ou empresariais', false),
    q1.createChoice('Na aula anterior, exploramos plataformas corporativas. Agora, relembramos a distinção vital entre canais síncronos (tempo real) e assíncronos (tempo diferido)...', true),
    q1.createChoice('O texto do botão diz um site conhecido, mas a URL real direciona para servidor desconhecido', false),
    q1.createChoice('Você é dono dos seus dados e tem o direito de saber por que e como estão sendo utilizados', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Processos e Multas"?');
  q2.setChoices([
    q2.createChoice('Conexões secundárias garantem acesso a canais corporativos mesmo em manutenções', false),
    q2.createChoice('Sanções milionárias da Autoridade Nacional de Proteção de Dados (ANPD) e ações civis', true),
    q2.createChoice('Ao acessar contas corporativas fora de casa, prefira a rede 4G/5G do celular ou uma VPN segura', false),
    q2.createChoice('Você é dono dos seus dados e tem o direito de saber por que e como estão sendo utilizados', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Segundo a aula, o que é "Phishing"?');
  q3.setChoices([
    q3.createChoice('Proteção de sistemas e dados contra acessos não autorizados', false),
    q3.createChoice('senso de urgência, medo de punição ou ofertas milagrosas. O objetivo é induzir o destinatário a clicar em links clonados ou baixar arquivos infectados', false),
    q3.createChoice('nome completo, RG, CPF, e-mail, telefone e endereço residencial. Exigem autorização expressa para coleta', false),
    q3.createChoice('Golpe eletrônico que usa mensagens falsas para roubar senhas e dados', true)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Informações que identificam a pessoa"?');
  q4.setChoices([
    q4.createChoice('Golpe eletrônico que usa mensagens falsas para roubar senhas e dados', false),
    q4.createChoice('ligações telefônicas, reuniões em vídeo e salas de chat ao vivo. Ideais para alinhamentos rápidos ou crises emergenciais', false),
    q4.createChoice('nome completo, RG, CPF, e-mail, telefone e endereço residencial. Exigem autorização expressa para coleta', true),
    q4.createChoice('e-mails formais, fóruns, relatórios e memorandos. Permitem registro documentado e reflexão detalhada', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Segundo a aula, o que é "Segurança"?');
  q5.setChoices([
    q5.createChoice('Garantia de que a informação só é acessível por pessoas autorizadas', false),
    q5.createChoice('Golpe eletrônico que usa mensagens falsas para roubar senhas e dados', false),
    q5.createChoice('senso de urgência, medo de punição ou ofertas milagrosas. O objetivo é induzir o destinatário a clicar em links clonados ou baixar arquivos infectados', false),
    q5.createChoice('Proteção de sistemas e dados contra acessos não autorizados', true)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Segundo a aula, o que é "Exigem conexão simultânea"?');
  q6.setChoices([
    q6.createChoice('Golpe eletrônico que usa mensagens falsas para roubar senhas e dados', false),
    q6.createChoice('senso de urgência, medo de punição ou ofertas milagrosas. O objetivo é induzir o destinatário a clicar em links clonados ou baixar arquivos infectados', false),
    q6.createChoice('ligações telefônicas, reuniões em vídeo e salas de chat ao vivo. Ideais para alinhamentos rápidos ou crises emergenciais', true),
    q6.createChoice('Direito do indivíduo de controlar o uso de seus dados pessoais', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. De acordo com a aula, o que caracteriza "A Tríade Fundamental: CIA"?');
  q7.setChoices([
    q7.createChoice('A Lei nº 13.709/2018 regula o tratamento e trânsito de dados de cidadãos por empresas e escolas', false),
    q7.createChoice('A informação está sempre acessível aos usuários autorizados no momento em que necessitam', true),
    q7.createChoice('Conexões secundárias garantem acesso a canais corporativos mesmo em manutenções', false),
    q7.createChoice('Defina links restritos para usuários específicos com data limite de expiração automática', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "Engenharia Social no Trabalho"?');
  q8.setChoices([
    q8.createChoice('Garantia de acesso à informação sempre que for legitimamente necessário', false),
    q8.createChoice('Sanções milionárias da Autoridade Nacional de Proteção de Dados (ANPD) e ações civis', false),
    q8.createChoice('O assistente realizou o depósito de R$ 45.000 sem telefonar para o contato oficial da distribuidora. A verificação síncrona teria evitado a fraude em dois minutos', false),
    q8.createChoice('Engenharia social é a técnica de enganar pessoas para que quebrem regras de segurança por boa vontade, simpatia ou medo da autoridade. O criminoso estuda a vítima...', true)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Garantindo a Integridade dos Documentos"?');
  q9.setChoices([
    q9.createChoice('Informações que identificam a pessoa: nome completo, RG, CPF, e-mail, telefone e endereço residencial. Exigem autorização expressa para coleta', false),
    q9.createChoice('Quando uma solicitação financeira ou confidencial chegar por e-mail, valide as informações por um segundo canal independente, utilizando um número de telefone...', false),
    q9.createChoice('Se uma ata de reunião ou relatório financeiro for alterado secretamente por um terceiro, perde-se a confiabilidade institucional. A integridade assegura histórico...', true),
    q9.createChoice('Você é dono dos seus dados e tem o direito de saber por que e como estão sendo utilizados', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "Backups Periódicos"?');
  q10.setChoices([
    q10.createChoice('Se uma ata de reunião ou relatório financeiro for alterado secretamente por um terceiro, perde-se a confiabilidade institucional. A integridade assegura histórico...', false),
    q10.createChoice('A Lei nº 13.709/2018 regula o tratamento e trânsito de dados de cidadãos por empresas e escolas', false),
    q10.createChoice('O texto do botão diz um site conhecido, mas a URL real direciona para servidor desconhecido', false),
    q10.createChoice('Cópias regulares na nuvem evitam a perda definitiva em caso de falha física do computador', true)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Escolha do Canal Correto"?');
  q11.setChoices([
    q11.createChoice('Ao negociar um mal-entendido urgente entre dois colegas em reunião presencial', true),
    q11.createChoice('Se uma ata de reunião ou relatório financeiro for alterado secretamente por um terceiro, perde-se a confiabilidade institucional. A integridade assegura histórico...', false),
    q11.createChoice('Manchetes negativas na imprensa e perda imediata de confiança de clientes e famílias', false),
    q11.createChoice('Cópias regulares na nuvem evitam a perda definitiva em caso de falha física do computador', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Criação de Senhas Fortes"?');
  q12.setChoices([
    q12.createChoice('Elimine datas de nascimento, sequências de teclado e nomes de familiares ou animais', true),
    q12.createChoice('Informações que identificam a pessoa: nome completo, RG, CPF, e-mail, telefone e endereço residencial. Exigem autorização expressa para coleta', false),
    q12.createChoice('Arquivos com extensão .exe, .scr ou .zip compactados enviados sem solicitação prévia', false),
    q12.createChoice('Cópias regulares na nuvem evitam a perda definitiva em caso de falha física do computador', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Sinais de Alerta no E-mail"?');
  q13.setChoices([
    q13.createChoice('Manchetes negativas na imprensa e perda imediata de confiança de clientes e famílias', false),
    q13.createChoice('Informações que identificam a pessoa: nome completo, RG, CPF, e-mail, telefone e endereço residencial. Exigem autorização expressa para coleta', false),
    q13.createChoice('Domínios alterados discretamente (ex: @banc0-brasil.net em vez do oficial)', false),
    q13.createChoice('O texto do botão diz um site conhecido, mas a URL real direciona para servidor desconhecido', true)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "Não exigem resposta imediata"?');
  q14.setChoices([
    q14.createChoice('Golpe eletrônico que usa mensagens falsas para roubar senhas e dados', false),
    q14.createChoice('@banc0-brasil.net em vez do oficial)', false),
    q14.createChoice('e-mails formais, fóruns, relatórios e memorandos. Permitem registro documentado e reflexão detalhada', true),
    q14.createChoice('Proteção de sistemas e dados contra acessos não autorizados', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Qual conceito a aula define como: "@banc0-brasil.net em vez do oficial)"?');
  q15.setChoices([
    q15.createChoice('Confidencialidade', false),
    q15.createChoice('Domínios alterados discretamente (ex', true),
    q15.createChoice('Não exigem resposta imediata', false),
    q15.createChoice('Informações que identificam a pessoa', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Segundo a aula, o que é "Confidencialidade"?');
  q16.setChoices([
    q16.createChoice('nome completo, RG, CPF, e-mail, telefone e endereço residencial. Exigem autorização expressa para coleta', false),
    q16.createChoice('Direito do indivíduo de controlar o uso de seus dados pessoais', false),
    q16.createChoice('ligações telefônicas, reuniões em vídeo e salas de chat ao vivo. Ideais para alinhamentos rápidos ou crises emergenciais', false),
    q16.createChoice('Garantia de que a informação só é acessível por pessoas autorizadas', true)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. Segundo a aula, o que é "Privacidade"?');
  q17.setChoices([
    q17.createChoice('Direito do indivíduo de controlar o uso de seus dados pessoais', true),
    q17.createChoice('Proteção de sistemas e dados contra acessos não autorizados', false),
    q17.createChoice('ligações telefônicas, reuniões em vídeo e salas de chat ao vivo. Ideais para alinhamentos rápidos ou crises emergenciais', false),
    q17.createChoice('Golpe eletrônico que usa mensagens falsas para roubar senhas e dados', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "Cuidados com Aparelhos de Trabalho"?');
  q18.setChoices([
    q18.createChoice('O elo mais vulnerável da segurança digital é o comportamento humano; atenção e validação são a melhor blindagem', false),
    q18.createChoice('Notebooks e celulares corporativos ou escolares devem ser utilizados exclusivamente para fins de estudo e trabalho. O uso indevido para jogos, torrents ou sites não...', true),
    q18.createChoice('Mensagens exigindo ação imediata em menos de 2 horas sob ameaça de perda', false),
    q18.createChoice('Conexões secundárias garantem acesso a canais corporativos mesmo em manutenções', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "Dados Comuns vs Sensíveis"?');
  q19.setChoices([
    q19.createChoice('Mensagens exigindo ação imediata em menos de 2 horas sob ameaça de perda', false),
    q19.createChoice('Origem racial, convicção religiosa, opinião política, biometria e dados de saúde médica. Seu vazamento pode gerar discriminação direta e punições gravíssimas', true),
    q19.createChoice('Quando uma solicitação financeira ou confidencial chegar por e-mail, valide as informações por um segundo canal independente, utilizando um número de telefone...', false),
    q19.createChoice('Arquivos com extensão .exe, .scr ou .zip compactados enviados sem solicitação prévia', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Segundo a aula, o que é "O phishing explora gatilhos psicológicos"?');
  q20.setChoices([
    q20.createChoice('e-mails formais, fóruns, relatórios e memorandos. Permitem registro documentado e reflexão detalhada', false),
    q20.createChoice('Garantia de que a informação só é acessível por pessoas autorizadas', false),
    q20.createChoice('senso de urgência, medo de punição ou ofertas milagrosas. O objetivo é induzir o destinatário a clicar em links clonados ou baixar arquivos infectados', true),
    q20.createChoice('nome completo, RG, CPF, e-mail, telefone e endereço residencial. Exigem autorização expressa para coleta', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  Logger.log('✅ Aula 19 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 11 — Segurança da Informação e Privacidade Protegendo dados, canais e reputação no ambiente digital corporativo');
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

function analisarRespostasAula11() {
  var form = FormApp.openByTitle('Avaliação — Aula 19 · Segurança da Informação e Privacidade Protegendo dados, canais e reputação no ambiente digital corporativo · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 19: Segurança da Informação e Privacidade Protegendo dados, canais e reputação no ambiente digital corporativo');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Segurança da Informação e Privacidade Protegendo dados, canais e reputação no ambiente digital corporativo', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos da Nossa Aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Proteção de sistemas e dados contra acessos não autorizados.', 'Direito do indivíduo de controlar o uso de seus dados pessoais.', 'Garantia de que a informação só é acessível por pessoas autorizadas.', 'Golpe eletrônico que usa mensagens falsas para roubar senhas e dados.', 'Revisão', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 12
// ════════════════════════════════════════════════════════════
