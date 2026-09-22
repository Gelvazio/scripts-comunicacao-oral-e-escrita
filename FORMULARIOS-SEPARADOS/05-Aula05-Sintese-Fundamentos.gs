// ===== 05-Aula05-Sintese-Fundamentos.gs =====
// Aula real (sequencia do curso): Aula 05 - Sintese-Fundamentos
// Funcao interna (numeracao original do Google Forms): criarFormularioAula21()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula21() {
  var form = FormApp.create('Avaliação — Aula 05 · Síntese dos Fundamentos da Comunicação Consolidação e Prática do Módulo 1 · SENAI');

  form.setDescription( 'Avaliação Completa: Síntese dos Fundamentos da Comunicação Consolidação e Prática do Módulo 1\n\nAula 05 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Síntese dos Fundamentos da Comunicação Consolidação e Prática do Módulo 1');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Rigor Conceitual"?');
  q1.setChoices([
    q1.createChoice('Quais das seguintes afirmações sobre comunicação eficaz e profissional são verdadeiras? (Mais de uma opção está correta)', false),
    q1.createChoice('Obedece à norma-padrão, com vocabulário preciso, sem gírias e com tratamento respeitoso (relatórios e ofícios)', false),
    q1.createChoice('Capacidade de argumentar com dados verificáveis sem recorrer a ataques pessoais ou falácias', false),
    q1.createChoice('Uso correto de conceitos técnicos e fundamentação teórica sólida em seminários e redações acadêmicas', true)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Segundo a aula, o que é "Mensagem"?');
  q2.setChoices([
    q2.createChoice('Fidelidade aos fatos e ética no trato das informações', false),
    q2.createChoice('o conteúdo estruturado e transmitido', true),
    q2.createChoice('o meio físico ou digital condutor', false),
    q2.createChoice('Identificação sistemática dos fluxos e ruídos no canal', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Segundo a aula, o que é "Síntese"?');
  q3.setChoices([
    q3.createChoice('Ambiente social e cultural que define o tom do diálogo', false),
    q3.createChoice('o conteúdo estruturado e transmitido', false),
    q3.createChoice('Identificação sistemática dos fluxos e ruídos no canal', false),
    q3.createChoice('Capacidade de condensar informações centrais com clareza', true)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Segundo a aula, o que é "Canal"?');
  q4.setChoices([
    q4.createChoice('o meio físico ou digital condutor', true),
    q4.createChoice('Processo, Eficácia, Retorno e Registro', false),
    q4.createChoice('Identificação sistemática dos fluxos e ruídos no canal', false),
    q4.createChoice('clareza na linguagem, objetividade no tempo e respeito mútuo', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Segundo a aula, o que é "Receptor"?');
  q5.setChoices([
    q5.createChoice('quem formula e codifica o conteúdo', false),
    q5.createChoice('quem decodifica e interpreta o sinal', true),
    q5.createChoice('Capacidade de condensar informações centrais com clareza', false),
    q5.createChoice('Identificação sistemática dos fluxos e ruídos no canal', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. De acordo com a aula, o que caracteriza "Registro Informal"?');
  q6.setChoices([
    q6.createChoice('Prezados Senhores, encaminhamos o relatório financeiro consolidado em anexo para validação de sua diretoria', false),
    q6.createChoice('Encarar correções de professores e colegas como combustível para refinamento contínuo do texto', false),
    q6.createChoice('Três pacientes receberam doses incorretas por ausência de canal ágil e feedback obrigatório', false),
    q6.createChoice('Espontâneo, aceita contrações e gírias leves; adequado entre amigos e familiares em situações descontraídas', true)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Segundo a aula, o que é "Contexto"?');
  q7.setChoices([
    q7.createChoice('Ambiente social e cultural que define o tom do diálogo', true),
    q7.createChoice('Fidelidade aos fatos e ética no trato das informações', false),
    q7.createChoice('clareza na linguagem, objetividade no tempo e respeito mútuo', false),
    q7.createChoice('quem decodifica e interpreta o sinal', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Segundo a aula, o que é "Sustentada pelo tripé inegociável"?');
  q8.setChoices([
    q8.createChoice('clareza na linguagem, objetividade no tempo e respeito mútuo', true),
    q8.createChoice('o conteúdo estruturado e transmitido', false),
    q8.createChoice('Processo, Eficácia, Retorno e Registro', false),
    q8.createChoice('quem formula e codifica o conteúdo', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Segundo a aula, o que é "Integridade"?');
  q9.setChoices([
    q9.createChoice('clareza na linguagem, objetividade no tempo e respeito mútuo', false),
    q9.createChoice('Processo, Eficácia, Retorno e Registro', false),
    q9.createChoice('o conteúdo estruturado e transmitido', false),
    q9.createChoice('Fidelidade aos fatos e ética no trato das informações', true)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "O Circuito da Comunicação"?');
  q10.setChoices([
    q10.createChoice('Foco estrito no que importa, eliminando redundâncias que sobrecarregam o tempo do destinatário', false),
    q10.createChoice('Quem responde pelo resultado e valida formalmente a transmissão', false),
    q10.createChoice('Todo intercâmbio de mensagens depende de componentes dinâmicos integrados', true),
    q10.createChoice('O setor de Enfermagem só recebeu o comunicado 48 horas depois, pois a circular ficou retida na caixa de entrada geral sem aviso de urgência nem confirmação de...', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Silos Departamentais"?');
  q11.setChoices([
    q11.createChoice('Em uma folha sulfite ou ferramenta digital, monte seu mapa conceitual unindo os 4 pilares do Módulo 1. Inclua obrigatoriamente: Processo Comunicativo, Feedback...', false),
    q11.createChoice('Três pacientes receberam doses incorretas por ausência de canal ágil e feedback obrigatório', false),
    q11.createChoice('Setores retêm informações cruciais por falta de integração ou rivalidade interna desnecessária', true),
    q11.createChoice('Quem responde pelo resultado e valida formalmente a transmissão', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Registros Formais vs. Informais"?');
  q12.setChoices([
    q12.createChoice('Obedece à norma-padrão, com vocabulário preciso, sem gírias e com tratamento respeitoso (relatórios e ofícios)', true),
    q12.createChoice('Corpo ereto, ombros relaxados e gestos abertos que reforçam a segurança do conteúdo transmitido', false),
    q12.createChoice('Em grupos de 4, atuem como Consultores de Comunicação e criem um Plano de Contenção para a Crise Logística', false),
    q12.createChoice('Confirmar a fonte primária e a exatidão dos números antes de repassar qualquer relatório interno', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "A Influência da Cultura Organizacional"?');
  q13.setChoices([
    q13.createChoice('Todo intercâmbio de mensagens depende de componentes dinâmicos integrados', false),
    q13.createChoice('A forma como as pessoas interagem reflete os valores e a hierarquia da instituição. Ambientes abertos estimulam questionamentos e inovação; culturas rígidas exigem...', true),
    q13.createChoice('Quem responde pelo resultado e valida formalmente a transmissão', false),
    q13.createChoice('Confirmar a fonte primária e a exatidão dos números antes de repassar qualquer relatório interno', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Critérios da Transição para a Fala"?');
  q14.setChoices([
    q14.createChoice('Escolha consciente entre registros formais e informais conforme o contexto e o interlocutor', false),
    q14.createChoice('Variação intencional de tom e volume para reter atenção contínua e evitar monotonia durante a fala', true),
    q14.createChoice('Setores retêm informações cruciais por falta de integração ou rivalidade interna desnecessária', false),
    q14.createChoice('Prazos indefinidos ou tarefas atribuídas a múltiplos responsáveis sem dono identificado', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Qual conceito a aula define como: "Processo, Eficácia, Retorno e Registro"?');
  q15.setChoices([
    q15.createChoice('Receptor', false),
    q15.createChoice('Mapeamento', false),
    q15.createChoice('Síntese', false),
    q15.createChoice('Conecte os 4 pilares', true)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "O Ciclo Vital do Feedback"?');
  q16.setChoices([
    q16.createChoice('A comunicação é uma via de mão dupla. Sem o feedback, o emissor apenas emite sinais no vácuo, sem comprovação de êxito', true),
    q16.createChoice('Foco estrito no que importa, eliminando redundâncias que sobrecarregam o tempo do destinatário', false),
    q16.createChoice('Corpo ereto, ombros relaxados e gestos abertos que reforçam a segurança do conteúdo transmitido', false),
    q16.createChoice('A forma como as pessoas interagem reflete os valores e a hierarquia da instituição. Ambientes abertos estimulam questionamentos e inovação; culturas rígidas exigem...', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Os Três Pilares da Eficácia"?');
  q17.setChoices([
    q17.createChoice('Foco estrito no que importa, eliminando redundâncias que sobrecarregam o tempo do destinatário', true),
    q17.createChoice('Pesquisas globais mostram que a clareza e capacidade de síntese superam o conhecimento técnico isolado no desenvolvimento de carreira', false),
    q17.createChoice('Comunicação direta entre níveis funcionais por chats internos, com foco em agilidade e respostas imediatas', false),
    q17.createChoice('O comunicador habilidoso ajusta o tom ao público-alvo, canal e objetivo específico da mensagem', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "Responsabilidade ao Compartilhar"?');
  q18.setChoices([
    q18.createChoice('Quem responde pelo resultado e valida formalmente a transmissão', false),
    q18.createChoice('Capacidade de argumentar com dados verificáveis sem recorrer a ataques pessoais ou falácias', false),
    q18.createChoice('Respeitar informações estratégicas corporativas que não devem circular em grupos informais de mensagem', true),
    q18.createChoice('Foco estrito no que importa, eliminando redundâncias que sobrecarregam o tempo do destinatário', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "Impacto Crítico"?');
  q19.setChoices([
    q19.createChoice('Uso correto de conceitos técnicos e fundamentação teórica sólida em seminários e redações acadêmicas', false),
    q19.createChoice('O comunicador habilidoso ajusta o tom ao público-alvo, canal e objetivo específico da mensagem', false),
    q19.createChoice('Três pacientes receberam doses incorretas por ausência de canal ágil e feedback obrigatório', true),
    q19.createChoice('Em uma folha sulfite ou ferramenta digital, monte seu mapa conceitual unindo os 4 pilares do Módulo 1. Inclua obrigatoriamente: Processo Comunicativo, Feedback...', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Segundo a aula, o que é "Mapeamento"?');
  q20.setChoices([
    q20.createChoice('o conteúdo estruturado e transmitido', false),
    q20.createChoice('Capacidade de condensar informações centrais com clareza', false),
    q20.createChoice('Processo, Eficácia, Retorno e Registro', false),
    q20.createChoice('Identificação sistemática dos fluxos e ruídos no canal', true)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  Logger.log('✅ Aula 05 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 21 — Síntese dos Fundamentos da Comunicação Consolidação e Prática do Módulo 1');
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

function analisarRespostasAula21() {
  var form = FormApp.openByTitle('Avaliação — Aula 05 · Síntese dos Fundamentos da Comunicação Consolidação e Prática do Módulo 1 · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 05: Síntese dos Fundamentos da Comunicação Consolidação e Prática do Módulo 1');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Síntese dos Fundamentos da Comunicação Consolidação e Prática do Módulo 1', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos de Aprendizagem', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'elementos, eficácia, feedback e registros linguísticos.', 'Capacidade de condensar informações centrais com clareza.', 'Identificação sistemática dos fluxos e ruídos no canal.', 'Ambiente social e cultural que define o tom do diálogo.', 'Fidelidade aos fatos e ética no trato das informações.', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 22
// ════════════════════════════════════════════════════════════
