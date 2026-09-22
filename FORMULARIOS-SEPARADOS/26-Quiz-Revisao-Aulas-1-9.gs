// ===== 26-Quiz-Revisao-Aulas-1-9.gs =====
// Funcoes: criarQuizRevisao(), analisarRespostasRevisao()
// Recriado a partir do conteudo real das Aulas 1-9 (VERSAO-POWERPOINT/1..9)
// Substitui a versao anterior, que continha questoes da numeracao antiga do
// Google Forms (aulas reais 11-17), nao das aulas reais 1-9.

function criarQuizRevisao() {
  var form = FormApp.create('Revisão Integrada — Aulas 1 a 9 · Comunicação Oral e Escrita · SENAI');

  form.setDescription(
    'REVISÃO INTEGRADA: Aulas 1 a 9\n\nUC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n30 questões | 30 pontos no total\nTempo estimado: 45-60 minutos\nCobertura: Consolidação de todos os tópicos das aulas 1-9\nVocê verá sua pontuação e feedback detalhado ao enviar!\n\nOBJETIVOS:\n- Revisar conceitos principais das aulas 1-9\n- Identificar áreas que precisam de reforço\n- Preparar-se para avaliações posteriores'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setConfirmationMessage('✅ Resposta enviada! Sua pontuação aparece logo acima, nesta mesma tela.');

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('REVISÃO INTEGRADA — Aulas 1 a 9');

  // ============================================================
  // BLOCO 1: Fundamentos da Comunicação (Aulas 1-3)
  // Aula 1: Processo Comunicativo | Aula 2: Comunicação Eficaz
  // Aula 3: O Ciclo do Feedback na Comunicação
  // ============================================================
  form.addSectionHeaderItem().setTitle('Bloco 1: Fundamentos da Comunicação (Aulas 1-3)');

  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. (Aula 1) Segundo a aula, o que caracteriza o Emissor no processo comunicativo?');
  q1.setChoices([
    q1.createChoice('Quem concebe uma ideia e a transforma em sinais compreensíveis, selecionando palavras e adequando a linguagem', true),
    q1.createChoice('Capta os sinais transmitidos e realiza a decodificação da mensagem', false),
    q1.createChoice('Conjunto convencionado de signos e regras usado para construir a mensagem', false),
    q1.createChoice('Qualquer interferência que degrade a mensagem', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. (Aula 1) De acordo com a aula, o que é o Ruído no processo comunicativo?');
  q2.setChoices([
    q2.createChoice('O destinatário que acolhe e decodifica o sinal', false),
    q2.createChoice('Qualquer perturbação que degrade a mensagem, podendo ser físico, semântico, psicológico ou fisiológico', true),
    q2.createChoice('A situação real que envolve a conversa: lugar, momento e relações sociais', false),
    q2.createChoice('O meio físico ou digital pelo qual a mensagem viaja', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. (Aula 1) Segundo a aula, qual é a função do Feedback no ciclo comunicativo?');
  q3.setChoices([
    q3.createChoice('É o conteúdo concreto da transmissão: ideias, sentimentos ou dados enviados', false),
    q3.createChoice('É o conjunto de signos e regras compartilhado entre emissor e receptor', false),
    q3.createChoice('É a interferência que impede a comunicação de ocorrer', false),
    q3.createChoice('É a resposta do receptor ao emissor, fechando o ciclo e permitindo verificar se a mensagem foi decodificada corretamente', true)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. (Aula 2) De acordo com a aula, o que caracteriza a Concisão em uma mensagem eficaz?');
  q4.setChoices([
    q4.createChoice('Foco direto no propósito sem rodeios secundários', false),
    q4.createChoice('Transmissão do máximo de ideias com o mínimo de termos, eliminando redundâncias', true),
    q4.createChoice('Harmonia lógica e integridade estrutural das ideias', false),
    q4.createChoice('Ausência de obscuridade; mensagem sem margem a dúvidas', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. (Aula 2) Segundo a aula, o que é Ambiguidade Estrutural?');
  q5.setChoices([
    q5.createChoice('Nasce da posição inadequada de pronomes, termos modificadores ou adjuntos na frase', true),
    q5.createChoice('É a técnica de perguntar "Você entendeu?" para validar a compreensão', false),
    q5.createChoice('É o uso de vocabulário técnico compreendido apenas por especialistas', false),
    q5.createChoice('É a resposta do receptor que fecha o ciclo comunicativo', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. (Aula 2) De acordo com a aula, qual é a forma correta de checar a compreensão do interlocutor?');
  q6.setChoices([
    q6.createChoice('Perguntar diretamente "Você entendeu?" e aceitar a resposta afirmativa', false),
    q6.createChoice('Repetir a mensagem original com o mesmo vocabulário técnico', false),
    q6.createChoice('Pedir uma paráfrase, como "você pode resumir os próximos passos que combinamos?"', true),
    q6.createChoice('Presumir que o silêncio do receptor significa compreensão total', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. (Aula 3) Segundo a aula, o que caracteriza a comunicação Unilateral?');
  q7.setChoices([
    q7.createChoice('A mensagem viaja em sentido único, sem que o emissor obtenha dados sobre a reação do destinatário', true),
    q7.createChoice('Há troca constante e recíproca entre emissor e receptor', false),
    q7.createChoice('É a técnica que organiza a crítica em elogio, ponto de melhoria e incentivo', false),
    q7.createChoice('É a postura de justificar-se antes de assimilar o que foi dito', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. (Aula 3) De acordo com a aula, como funciona a Técnica do Feedback Sanduíche?');
  q8.setChoices([
    q8.createChoice('Consiste em criticar diretamente sem qualquer elogio para economizar tempo', false),
    q8.createChoice('Organiza a mensagem em três camadas: reconhecimento de um ponto forte, o aspecto a melhorar e um encerramento com incentivo', true),
    q8.createChoice('É o fluxo de informação que ocorre em um único sentido, sem retorno', false),
    q8.createChoice('Baseia-se apenas em dados e fatos, nunca mencionando pontos positivos', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. (Aula 3) Segundo a aula, o que caracteriza um Feedback Factual (construtivo)?');
  q9.setChoices([
    q9.createChoice('É uma crítica vaga que aponta defeitos gerais de personalidade', false),
    q9.createChoice('É a fase inicial de brainstorming livre sem julgamento', false),
    q9.createChoice('Foca em fatos concretos e observáveis, nunca em características pessoais do interlocutor', true),
    q9.createChoice('É o retorno dado apenas ao final do projeto, sem checagens intermediárias', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. (Aula 3) De acordo com a aula, qual é uma barreira emocional comum ao receber críticas?');
  q10.setChoices([
    q10.createChoice('Escutar atentamente até a conclusão da fala sem interromper', false),
    q10.createChoice('Pedir exemplos concretos para compreender melhor a falha apontada', false),
    q10.createChoice('Agradecer o retorno e propor um plano de melhoria realista', false),
    q10.createChoice('Postura Defensiva: justificar-se imediatamente antes de assimilar o que foi observado', true)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  // ============================================================
  // BLOCO 2: Adequação e Estrutura (Aulas 4-6)
  // Aula 4: Contextos Formais versus Informais | Aula 5: Síntese
  // dos Fundamentos da Comunicação | Aula 6: Estrutura de Apresentações
  // ============================================================
  form.addSectionHeaderItem().setTitle('Bloco 2: Adequação e Estrutura (Aulas 4-6)');

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. (Aula 4) Segundo a aula, o que caracteriza o Registro Formal?');
  q11.setChoices([
    q11.createChoice('Segue a norma-padrão gramatical, possui vocabulário preciso e evita gírias, priorizando a objetividade', true),
    q11.createChoice('É marcado pela espontaneidade e uso de termos coloquiais e abreviações', false),
    q11.createChoice('Ocorre quando o comunicador tenta soar sofisticado e comete deslizes gramaticais', false),
    q11.createChoice('É o termo técnico específico compreendido apenas por especialistas de uma área', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. (Aula 4) De acordo com a aula, o que é Hipercorreção?');
  q12.setChoices([
    q12.createChoice('É o uso de gírias e abreviações típicas de conversas entre amigos', false),
    q12.createChoice('É a adaptação da linguagem ao ambiente, interlocutor e objetivo da mensagem', false),
    q12.createChoice('Ocorre quando o comunicador tenta soar excessivamente sofisticado e comete deslizes gramaticais ou artificiais', true),
    q12.createChoice('É o uso de termos técnicos compreendidos apenas por especialistas de uma área', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. (Aula 4) Segundo a aula, qual é o risco de usar jargões técnicos com um público leigo?');
  q13.setChoices([
    q13.createChoice('Demonstra sempre domínio técnico e melhora automaticamente a compreensão do público', false),
    q13.createChoice('Cria barreiras instransponíveis e gera distanciamento entre emissor e receptor', true),
    q13.createChoice('Torna a mensagem mais concisa sem qualquer prejuízo à clareza', false),
    q13.createChoice('Elimina a necessidade de adequar o registro ao contexto e ao interlocutor', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. (Aula 5) De acordo com a aula, o que representa o papel "Responsável" na Matriz RACI?');
  q14.setChoices([
    q14.createChoice('Quem executa a tarefa ou redige o comunicado técnico inicial', true),
    q14.createChoice('Quem responde pelo resultado e valida formalmente a transmissão', false),
    q14.createChoice('Especialistas ouvidos antes da emissão da mensagem definitiva', false),
    q14.createChoice('Pessoas que recebem a notificação apenas para acompanhamento', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. (Aula 5) Segundo a aula, o que caracteriza os Silos Departamentais como causa de falha na comunicação interna?');
  q15.setChoices([
    q15.createChoice('Equipes usam termos herméticos com áreas que não dominam o vocabulário técnico', false),
    q15.createChoice('Mensagens ficam espalhadas por vários canais sem registro formal', false),
    q15.createChoice('Setores retêm informações cruciais por falta de integração ou rivalidade interna', true),
    q15.createChoice('Prazos ficam indefinidos e tarefas sem responsável identificado', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. (Aula 5) De acordo com a aula, o que avalia a etapa "Quando/Onde" da Matriz 5W2H?');
  q16.setChoices([
    q16.createChoice('Definir o objetivo da mensagem e sua real necessidade', false),
    q16.createChoice('Definir prazos de envio e os canais adequados para a mensagem', true),
    q16.createChoice('Indicar o emissor e os receptores diretos da mensagem', false),
    q16.createChoice('Descrever a execução e as métricas de retorno', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. (Aula 6) Segundo a aula, qual é a função do Gancho Inicial (the hook) em uma apresentação?');
  q17.setChoices([
    q17.createChoice('Sintetizar os pontos discutidos e convidar a uma reflexão final', false),
    q17.createChoice('Apresentar argumentos, evidências e conexões lógicas centrais', false),
    q17.createChoice('Captar a atenção do público logo no início, usando pergunta instigante, dado surpreendente ou história curta', true),
    q17.createChoice('Controlar a velocidade e as pausas durante toda a fala', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. (Aula 6) De acordo com a aula, por que um roteiro não deve conter a transcrição exata de cada palavra?');
  q18.setChoices([
    q18.createChoice('Porque o público prefere ouvir um discurso totalmente improvisado sem qualquer preparo', false),
    q18.createChoice('Porque a leitura literal trava a espontaneidade, quebra o contato visual e dificulta a recuperação caso o orador se perca', true),
    q18.createChoice('Porque slides com pouco texto sempre confundem mais a audiência', false),
    q18.createChoice('Porque a conclusão deve ser sempre mais longa que o desenvolvimento', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. (Aula 6) Segundo a aula, o que é o Pacing em uma apresentação?');
  q19.setChoices([
    q19.createChoice('O elemento inicial concebido para capturar a atenção do público', false),
    q19.createChoice('A técnica de ler cada slide literalmente sem improviso', false),
    q19.createChoice('O tempo total dedicado exclusivamente à conclusão do discurso', false),
    q19.createChoice('A alternância consciente entre momentos de aceleração enérgica e pausas reflexivas', true)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. (Aula 6) De acordo com a aula, qual é a distribuição recomendada de tempo em uma apresentação?');
  q20.setChoices([
    q20.createChoice('50% para abertura, 25% para desenvolvimento e 25% para conclusão', false),
    q20.createChoice('70% para desenvolvimento, 15% para abertura e 15% para conclusão', true),
    q20.createChoice('90% para desenvolvimento e 10% dividido entre abertura e conclusão', false),
    q20.createChoice('Tempo igual (33%) para abertura, desenvolvimento e conclusão', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);

  // ============================================================
  // BLOCO 3: Oralidade e Atendimento Profissional (Aulas 7-9)
  // Aula 7: Técnicas de Oratória e Expressão Vocal | Aula 8:
  // Participação e Condução de Reuniões | Aula 9: Atendimento e
  // Escuta Ativa
  // ============================================================
  form.addSectionHeaderItem().setTitle('Bloco 3: Oralidade e Atendimento Profissional (Aulas 7-9)');

  var q21 = form.addMultipleChoiceItem();
  q21.setTitle('21. (Aula 7) Segundo a aula, qual é a diferença entre Articulação e Dicção?');
  q21.setChoices([
    q21.createChoice('Articulação é o movimento muscular da boca; Dicção é a clareza sonora resultante desse movimento', true),
    q21.createChoice('Articulação é a variação de tom e ritmo; Dicção é a arte de discursar com persuasão', false),
    q21.createChoice('Articulação é a pausa estratégica; Dicção é o volume da voz', false),
    q21.createChoice('Articulação é a respiração diafragmática; Dicção é o aquecimento vocal', false)
  ]);
  q21.setPoints(1);
  q21.setRequired(true);

  var q22 = form.addMultipleChoiceItem();
  q22.setTitle('22. (Aula 7) De acordo com a aula, qual é a função da respiração diafragmática ao falar em público?');
  q22.setChoices([
    q22.createChoice('Acumula tensão nos ombros e pescoço, comprimindo a laringe', false),
    q22.createChoice('Elimina completamente a necessidade de pausas durante a fala', false),
    q22.createChoice('Serve apenas para aquecer as pregas vocais antes do discurso', false),
    q22.createChoice('Expande a região abdominal, fornecendo um colchão constante de ar para sustentar frases longas com estabilidade', true)
  ]);
  q22.setPoints(1);
  q22.setRequired(true);

  var q23 = form.addMultipleChoiceItem();
  q23.setTitle('23. (Aula 7) Segundo a aula, como eliminar vícios de linguagem como "né" e "tipo assim"?');
  q23.setChoices([
    q23.createChoice('Falar mais rápido para não dar tempo de pensar nas palavras', false),
    q23.createChoice('Substituir o vício por uma pausa estratégica de silêncio, mantendo o apoio do diafragma', true),
    q23.createChoice('Aumentar o volume da voz sempre que sentir vontade de usar o vício', false),
    q23.createChoice('Ignorar completamente a preparação vocal antes de falas importantes', false)
  ]);
  q23.setPoints(1);
  q23.setRequired(true);

  var q24 = form.addMultipleChoiceItem();
  q24.setTitle('24. (Aula 8) Segundo a aula, o que deve conter uma Ata formal de reunião?');
  q24.setChoices([
    q24.createChoice('A transcrição literal de tudo o que cada participante falou durante o encontro', false),
    q24.createChoice('Apenas a lista de presença, sem registrar decisões ou encaminhamentos', false),
    q24.createChoice('Cabeçalho com data e participantes, pauta tratada, deliberações e plano de ação com responsáveis e prazos', true),
    q24.createChoice('Somente as divergências de opinião, sem mencionar os acordos finais', false)
  ]);
  q24.setPoints(1);
  q24.setRequired(true);

  var q25 = form.addMultipleChoiceItem();
  q25.setTitle('25. (Aula 8) De acordo com a aula, o que caracteriza a Comunicação Assertiva em uma reunião?');
  q25.setChoices([
    q25.createChoice('Guarda ideias por receio e acumula frustração em silêncio', false),
    q25.createChoice('Interrompe os outros e impõe pontos de vista à força', false),
    q25.createChoice('Evita qualquer posicionamento para não gerar conflito no grupo', false),
    q25.createChoice('Expressa convicções com gentileza, apoia argumentos em fatos e sabe dizer "não" quando necessário', true)
  ]);
  q25.setPoints(1);
  q25.setRequired(true);

  var q26 = form.addMultipleChoiceItem();
  q26.setTitle('26. (Aula 8) Segundo a aula, quais são os passos para mediar um conflito em reunião?');
  q26.setChoices([
    q26.createChoice('Impor a decisão do líder para encerrar rapidamente a divergência', false),
    q26.createChoice('Escutar os dois lados sem interrupção, encontrar o ponto comum e construir um acordo equilibrado', true),
    q26.createChoice('Ignorar o conflito e seguir adiante com a pauta original', false),
    q26.createChoice('Pedir que apenas uma das partes explique sua posição', false)
  ]);
  q26.setPoints(1);
  q26.setRequired(true);

  var q27 = form.addMultipleChoiceItem();
  q27.setTitle('27. (Aula 9) Segundo a aula, o que é Parafraseamento no atendimento?');
  q27.setChoices([
    q27.createChoice('Reconhecer e legitimar o sentimento do usuário antes da solução técnica', false),
    q27.createChoice('Resumir a essência do que foi dito usando suas próprias palavras, demonstrando que a mensagem foi processada com precisão', true),
    q27.createChoice('Formulação que convida o interlocutor a explicar o ocorrido em profundidade', false),
    q27.createChoice('Apenas receber sons sem demonstrar engajamento ou reflexão crítica', false)
  ]);
  q27.setPoints(1);
  q27.setRequired(true);

  var q28 = form.addMultipleChoiceItem();
  q28.setTitle('28. (Aula 9) De acordo com a aula, por que a Validação Emocional deve vir antes da solução técnica?');
  q28.setChoices([
    q28.createChoice('Porque o registro do chamado só pode ser feito após o cliente se acalmar completamente', false),
    q28.createChoice('Porque pessoas irritadas não conseguem raciocinar bem sobre soluções lógicas enquanto não sentem sua frustração compreendida', true),
    q28.createChoice('Porque valida se o código de acesso do atendimento está correto', false),
    q28.createChoice('Porque é uma exigência legal em todos os tipos de atendimento ao consumidor', false)
  ]);
  q28.setPoints(1);
  q28.setRequired(true);

  var q29 = form.addMultipleChoiceItem();
  q29.setTitle('29. (Aula 9) Segundo a aula, o que caracteriza uma solução Ganha-Ganha no atendimento?');
  q29.setChoices([
    q29.createChoice('A empresa impõe a regra friamente e o usuário sai lesado', false),
    q29.createChoice('O atendente cede a exigências ilegais e a empresa sofre prejuízos', false),
    q29.createChoice('Ambos chegam a uma alternativa viável e construtiva, respeitando as necessidades do usuário e as regras da instituição', true),
    q29.createChoice('O atendimento é encerrado sem qualquer registro formal do ocorrido', false)
  ]);
  q29.setPoints(1);
  q29.setRequired(true);

  var q30 = form.addMultipleChoiceItem();
  q30.setTitle('30. (Aula 9) De acordo com a aula, qual é a diferença entre pergunta aberta e pergunta fechada no atendimento?');
  q30.setChoices([
    q30.createChoice('Perguntas abertas só podem ser feitas por escrito, nunca verbalmente', false),
    q30.createChoice('Perguntas fechadas são sempre mais respeitosas com o tempo do cliente', false),
    q30.createChoice('Não há diferença prática entre os dois tipos de pergunta no atendimento', false),
    q30.createChoice('Perguntas fechadas aceitam apenas "sim" ou "não"; perguntas abertas estimulam a fala detalhada e ajudam a descobrir a causa raiz', true)
  ]);
  q30.setPoints(1);
  q30.setRequired(true);

  Logger.log('✅ REVISÃO INTEGRADA (Aulas 1-9) criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Cobertura: Aulas 1 a 9 (Processo Comunicativo até Atendimento e Escuta Ativa)');
  Logger.log('   Questões: 30 (10 por bloco)');
  Logger.log('   Pontuação: 30 pontos (1 ponto/questão)');
  Logger.log('');
  Logger.log('🔗 LINK PARA COMPARTILHAR COM ALUNOS:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('✏️ LINK PARA EDITAR (PROFESSOR):');
  Logger.log(form.getEditUrl());
}

function analisarRespostasRevisao() {
  var form = FormApp.openByTitle('Revisão Integrada — Aulas 1 a 9 · Comunicação Oral e Escrita · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Revisão Integrada (Aulas 1-9)');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];

  responses.forEach(function(response) {
    var nome = 'N/A';
    response.getItemResponses().forEach(function(itemResponse) {
      if (itemResponse.getItem().getTitle() === 'Nome Completo') {
        nome = itemResponse.getResponse();
      }
    });

    var nota = response.getTotalScore(); // calculo nativo do quiz (setIsQuiz + setPoints)
    var percentual = (nota / 30) * 100;
    todasAsNotas.push(nota);

    var feedback = '';
    if (percentual >= 90) {
      feedback = '🌟 EXCELENTE! Domina completamente todos os conceitos!';
    } else if (percentual >= 80) {
      feedback = '✅ MUITO BOM! Compreendeu bem a maioria dos tópicos.';
    } else if (percentual >= 70) {
      feedback = '⚠️ BOM! Revise os tópicos com menor acerto para melhorar.';
    } else if (percentual >= 60) {
      feedback = '💡 Bom início. Estude novamente os elementos principais com o professor.';
    } else {
      feedback = '📚 Procure o professor para revisão orientada e aprofundamento.';
    }

    Logger.log('👤 ' + nome);
    Logger.log('   Nota: ' + nota.toFixed(1) + '/30 (' + percentual.toFixed(0) + '%)');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var maior = Math.max.apply(null, todasAsNotas);
    var menor = Math.min.apply(null, todasAsNotas);

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS DA TURMA');
    Logger.log('   Média: ' + media.toFixed(1) + '/30 (' + ((media / 30) * 100).toFixed(0) + '%)');
    Logger.log('   Maior nota: ' + maior.toFixed(1) + '/30');
    Logger.log('   Menor nota: ' + menor.toFixed(1) + '/30');
    Logger.log('   Variação: ' + (maior - menor).toFixed(1) + ' pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 21; }).length; // 70%
    Logger.log('   Aprovados (70%+): ' + aprovados + ' de ' + todasAsNotas.length);
  }
}
