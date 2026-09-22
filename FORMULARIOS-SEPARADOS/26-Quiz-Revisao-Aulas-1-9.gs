// ===== 26-Quiz-Revisao-Aulas-1-9.gs =====
// Funcoes: criarQuizRevisao(), analisarRespostasRevisao()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarQuizRevisao() {
  var form = FormApp.create('Revisão Integrada — Aulas 1 a 9 · Comunicação Oral e Escrita · SENAI');

  form.setDescription( 'REVISÃO INTEGRADA: Aulas 1 a 9\n\nUC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n30 questões | 30 pontos no total\nTempo estimado: 45-60 minutos\nCobertura: Consolidação de todos os tópicos das aulas 1-9\nVocê verá sua pontuação e feedback detalhado ao enviar!\n\nOBJETIVOS:\n- Revisar conceitos principais das aulas 1-9\n- Identificar áreas que precisam de reforço\n- Preparar-se para avaliações posteriores'
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

  form.addSectionHeaderItem().setTitle('REVISÃO INTEGRADA — Aulas 1 a 9');
  form.addTextItem().setHelpText('30 questões | 1 ponto cada | Total: 30 pontos | Cobertura: Aulas 1-9');

  // AULAS 1-3: Fundamentos da Comunicação (9 questões)
  form.addSectionHeaderItem().setTitle('Bloco 1: Fundamentos da Comunicação (Aulas 1-3)');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "RECAPITULAÇÃO"?');
  q1.setChoices([
    q1.createChoice('O relatório técnico investiga situações complexas com introdução, desenvolvimento, conclusão e recomendações', true),
    q1.createChoice('O cabeçalho do memorando deve responder imediatamente a quatro perguntas essenciais do leitor', false),
    q1.createChoice('Texto idêntico distribuído simultaneamente a múltiplos setores para uniformizar uma norma ou instrução geral', false),
    q1.createChoice('Se uma palavra pode ser cortada sem alterar o sentido do pedido, corte-a', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Notícias Recentes"?');
  q2.setChoices([
    q2.createChoice('Sente-se ocupando o encosto da cadeira. Evite debruçar-se sobre a mesa ou recostar desleixadamente', false),
    q2.createChoice('Sentir nervosismo antes de uma entrevista é perfeitamente normal. O objetivo não é extinguir a emoção, mas sim gerenciá-la fisiologicamente', false),
    q2.createChoice('Uma pausa silenciosa de dois segundos demonstra reflexão e segurança, enquanto vícios sonoros transmitem insegurança', false),
    q2.createChoice('Identifique prêmios, lançamentos ou parcerias públicas que mostram seu interesse genuíno', true)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Segundo a aula, o que é "Conexão direta"?');
  q3.setChoices([
    q3.createChoice('Indicam causa, oposição, conclusão ou acréscimo', false),
    q3.createChoice('Respostas alinhadas aos objetivos da pergunta', true),
    q3.createChoice('Conduzem o leitor sem solavancos de uma ideia à seguinte', false),
    q3.createChoice('Organização lógica das ideias para orientar o leitor com clareza', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. De acordo com a aula, o que caracteriza "Revisão: A redação no ambiente de trabalho"?');
  q4.setChoices([
    q4.createChoice('Na aula anterior, estudamos os e-mails corporativos. Eles são rápidos e voltados à ação diária. Aprendemos que o assunto deve antecipar o tema sem rodeios e o texto...', true),
    q4.createChoice('Relatórios técnicos exigem linguagem impessoal e dados mensuráveis em decibéis, tornando impressões subjetivas inadequadas', false),
    q4.createChoice('Especifique sempre a marca, o modelo e a data da última calibração dos aparelhos empregados nos testes', false),
    q4.createChoice('Identificação da Caldeira B-04, do setor térmico e da solicitação de vistoria preventiva', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "Ponto e Vírgula"?');
  q5.setChoices([
    q5.createChoice('O verbo concorda em número (singular/plural) e pessoa com o núcleo do sujeito, mesmo com palavras intermediárias intercaladas', false),
    q5.createChoice('O Acordo Ortográfico eliminou acentos que muitos profissionais ainda usam por desatenção', false),
    q5.createChoice('Separe itens extensos de uma listagem em propostas ou orações já divididas internamente por vírgulas', true),
    q5.createChoice('Em documentos de trabalho, cada parágrafo deve girar em torno de uma ideia central declarada claramente no início: o tópico frasal', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Segundo a aula, o que é "Honestidade"?');
  q6.setChoices([
    q6.createChoice('pontos fortes comprovados por projetos práticos', false),
    q6.createChoice('Expressão corporal que transmite segurança e receptividade', false),
    q6.createChoice('área de estudo atual e interesses gerais', false),
    q6.createChoice('se não souber um termo técnico, admita com disposição para aprender', true)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Segundo a aula, o que é "Clareza"?');
  q7.setChoices([
    q7.createChoice('Escolha palavras simples e diretas, eliminando rodeios desnecessários', true),
    q7.createChoice('Proteger conversas confidenciais e dados pessoais alheios', false),
    q7.createChoice('Ajuste o vocabulário e o tom ao contexto social e ao interlocutor', false),
    q7.createChoice('Projetos complexos exigem alinhamento constante entre setores', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Segundo a aula, o que é "Coesão"?');
  q8.setChoices([
    q8.createChoice('Ligação gramatical entre frases e palavras com conectivos precisos', true),
    q8.createChoice('Organização lógica das ideias para orientar o leitor com clareza', false),
    q8.createChoice('Indicam causa, oposição, conclusão ou acréscimo', false),
    q8.createChoice('Unidade textual básica em torno de uma ideia central condutora', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Etapa 3: Desenvolvimento e resultados"?');
  q9.setChoices([
    q9.createChoice('Abaixo da figura, registre sempre a procedência (ex.: Fonte: Laboratório de Metrologia (2026))', false),
    q9.createChoice('Todo recurso visual deve ter identificador e legenda superior (ex.: Tabela 1 – Índice de Ruído por Sala)', false),
    q9.createChoice('O desenvolvimento é a parte mais volumosa do documento. É aqui que os dados brutos são organizados, descritos e analisados com profundidade técnica', true),
    q9.createChoice('A introdução situa o leitor no tempo, no espaço e no motivo da elaboração do documento. Ela deve responder com exatidão: o quê, por quê e para quem', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "Vocativo e Saudação Inicial"?');
  q10.setChoices([
    q10.createChoice('Pessoas incluídas apenas para acompanhamento e ciência do tema', false),
    q10.createChoice('A saudação estabelece a conexão interpessoal e o grau correto de respeito na hierarquia profissional', true),
    q10.createChoice('Isso polui desnecessariamente a caixa de entrada de 49 pessoas que não precisam dessa confirmação', false),
    q10.createChoice('Na aula anterior, estudamos como a hierarquia visual orienta os olhos do leitor por títulos, tópicos e espaçamentos equilibrados', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "A Mensagem: O Conteúdo"?');
  q11.setChoices([
    q11.createChoice('É por meio do feedback que o emissor verifica se a mensagem foi decodificada corretamente ou se precisa corrigir ruídos e reformular explicações', false),
    q11.createChoice('Quem tem empatia não presume que o outro sabe tudo o que ele sabe. Explica com paciência, escolhe termos acessíveis e confere se foi compreendido', false),
    q11.createChoice('A mensagem é o objeto concreto da transmissão: o conjunto de ideias, sentimentos, instruções ou dados enviados', true),
    q11.createChoice('A falta de uma vírgula pode alterar radicalmente ordens e avisos contratuais', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. Segundo a aula, o que é "Comunicado"?');
  q12.setChoices([
    q12.createChoice('Aviso oficial voltado para toda a equipe ou empresa', true),
    q12.createChoice('Texto ágil entre setores para pedidos ou avisos internos', false),
    q12.createChoice('Cria comprovação formal de que um pedido ou aviso foi entregue entre setores', false),
    q12.createChoice('Registro cronológico exato (ex: 15 de abril de 2026)', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Bem-vindos ao Curso!"?');
  q13.setChoices([
    q13.createChoice('O ar atmosférico que propaga ondas sonoras e a visão que capta movimentos e gestos', false),
    q13.createChoice('O emissor traduz sua ideia em palavras, sinais ou imagens compreensíveis', false),
    q13.createChoice('Ao longo desta disciplina, você aprenderá a se expressar com clareza, segurança e ética no colégio e na futura vida profissional', true),
    q13.createChoice('Termos técnicos desconhecidos, gírias regionais e ambiguidades gramaticais', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. De acordo com a aula, o que caracteriza "Recapitulação: Hierarquia Visual"?');
  q14.setChoices([
    q14.createChoice('Colocar a pessoa errada no campo inadequado pode sobrecarregar caixas de entrada ou violar leis de privacidade de dados (como a LGPD)', false),
    q14.createChoice('O campo Assunto define se o seu e-mail será aberto agora, arquivado ou ignorado', false),
    q14.createChoice('Na aula anterior, estudamos como a hierarquia visual orienta os olhos do leitor por títulos, tópicos e espaçamentos equilibrados', true),
    q14.createChoice('Pessoas que precisam acompanhar o assunto por ciência, sem obrigação de responder diretamente à mensagem', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Dica prática"?');
  q15.setChoices([
    q15.createChoice('Se uma palavra pode ser cortada sem alterar o sentido do pedido, corte-a', true),
    q15.createChoice('Quais elementos tornam a segunda versão do memorando mais eficaz do que a primeira? (Mais de uma opção está correta)', false),
    q15.createChoice('Algumas pessoas acreditam que escrever bem no trabalho significa usar termos arcaicos ou palavras difíceis que ninguém entende', false),
    q15.createChoice('Gostaríamos de avisar que os materiais estão acabando rápido demais e quem quiser coisas precisa mandar o papel logo, senão vai ficar sem nada na semana que vem', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. De acordo com a aula, o que caracteriza "Revisão: Pontuação Aplicada"?');
  q16.setChoices([
    q16.createChoice('Na aula anterior, estudamos correção gramatical. Antes de pensar no visual, o texto deve estar impecável', true),
    q16.createChoice('Empresas e escolas utilizam templates (modelos prontos) para garantir que ninguém precise recriar estilos do zero', false),
    q16.createChoice('Documentos bem formatados perdem credibilidade se houver falhas de concordância', false),
    q16.createChoice('Inicia a mensagem dirigindo-se formalmente à autoridade ou leitor (ex.: Senhor Diretor, ou Prezada Equipe,)', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. Segundo a aula, o que é "Metodologia"?');
  q17.setChoices([
    q17.createChoice('Descrição clara dos métodos e passos usados para investigar o caso', true),
    q17.createChoice('Comparação de resultados com metas de projeto ou limites regulamentares', false),
    q17.createChoice('Medidas viáveis técnica, operacional e financeiramente', false),
    q17.createChoice('Exame da correlação entre variáveis (ex.: aumento de temperatura x queda de tensão)', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. De acordo com a aula, o que caracteriza "Revisão: Escuta Ativa e Atendimento"?');
  q18.setChoices([
    q18.createChoice('Sentir nervosismo antes de uma entrevista é perfeitamente normal. O objetivo não é extinguir a emoção, mas sim gerenciá-la fisiologicamente', false),
    q18.createChoice('Hoje transformamos a entrevista de emprego em um processo dominado por técnicas de comunicação', false),
    q18.createChoice('Uma pausa silenciosa de dois segundos demonstra reflexão e segurança, enquanto vícios sonoros transmitem insegurança', false),
    q18.createChoice('Na aula anterior, estudamos o atendimento profissional. Vimos que ouvir ativamente não é apenas esperar a sua vez de falar, mas compreender o objetivo da outra...', true)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. De acordo com a aula, o que caracteriza "O impacto do texto no trabalho"?');
  q19.setChoices([
    q19.createChoice('No ambiente profissional contemporâneo, a maioria das decisões diárias circula por escrito em e-mails, relatórios, atas e comunicados corporativos', true),
    q19.createChoice('Dessa forma, todos os relatórios foram plenamente regularizados dentro do prazo legal', false),
    q19.createChoice('A diretora pediu que o assistente enviasse o relatório elaborado por ela', false),
    q19.createChoice('O parágrafo é uma unidade de pensamento. Misturar múltiplos assuntos não relacionados no mesmo bloco cansa o leitor e oculta informações cruciais', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "PADRÃO CORPORATIVO"?');
  q20.setChoices([
    q20.createChoice('A assinatura institucional comprova a legitimidade do emissor e facilita o contato imediato', true),
    q20.createChoice('Pessoas incluídas apenas para acompanhamento e ciência do tema', false),
    q20.createChoice('Informa urgência ou data limite. Ex: Aprovação até 15/10', false),
    q20.createChoice('Assunto vago, gírias inapropriadas, sem especificação de documento ou prazo e sem assinatura', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);

  var q21 = form.addMultipleChoiceItem();
  q21.setTitle('21. Segundo a aula, o que é "Pontuação"?');
  q21.setChoices([
    q21.createChoice('Clientes e líderes confiam mais em dados apresentados sem falhas gramaticais', false),
    q21.createChoice('Traga dados, justificativas e exemplos em seguida', false),
    q21.createChoice('Regras formais para a escrita pública oficial', false),
    q21.createChoice('Sinais que organizam pausas e sentidos das orações', true)
  ]);
  q21.setPoints(1);
  q21.setRequired(true);

  var q22 = form.addMultipleChoiceItem();
  q22.setTitle('22. Segundo a aula, o que é "Redução de desperdícios"?');
  q22.setChoices([
    q22.createChoice('novos colaboradores aprendem a rotina com autonomia e rapidez', false),
    q22.createChoice('Salvar cópias seguras dos projetos no servidor nuvem', false),
    q22.createChoice('garantia de uso correto de equipamentos de proteção individual', false),
    q22.createChoice('menos erros de montagem e menor perda de matéria-prima', true)
  ]);
  q22.setPoints(1);
  q22.setRequired(true);

  var q23 = form.addMultipleChoiceItem();
  q23.setTitle('23. De acordo com a aula, o que caracteriza "Estruturação de Textos Profissionais"?');
  q23.setChoices([
    q23.createChoice('Um texto pode estar gramaticalmente correto e ainda assim ser incoerente. A coerência reside na não contradição, na verossimilhança e na progressão temática sólida', false),
    q23.createChoice('Mude de parágrafo sempre que mudar de aspecto, argumento ou etapa do tema', false),
    q23.createChoice('Comunicação escrita com clareza, coesão e impacto no ambiente corporativo', true),
    q23.createChoice('Permite correções instantâneas, entonação vocal, pausas de respiração e gestos para apoiar a compreensão mútua', false)
  ]);
  q23.setPoints(1);
  q23.setRequired(true);

  var q24 = form.addMultipleChoiceItem();
  q24.setTitle('24. De acordo com a aula, o que caracteriza "Coesão e Coerência"?');
  q24.setChoices([
    q24.createChoice('Por que para perguntas e motivos. Porque para respostas explicativas', false),
    q24.createChoice('Use portanto, por conseguinte ou dessa forma para consolidar decisões e próximos passos', false),
    q24.createChoice('Um texto profissional precisa ser uma ponte sólida. A coesão é a costura gramatical (pronomes, conectivos e pontuação), enquanto a coerência é a lógica interna que...', true),
    q24.createChoice('O Acordo Ortográfico eliminou acentos que muitos profissionais ainda usam por desatenção', false)
  ]);
  q24.setPoints(1);
  q24.setRequired(true);

  var q25 = form.addMultipleChoiceItem();
  q25.setTitle('25. De acordo com a aula, o que caracteriza "Relação de Pré-requisito"?');
  q25.setChoices([
    q25.createChoice('Registra quantas etapas foram executadas fora de ordem ou de maneira incorreta', false),
    q25.createChoice('O manual presume que o usuário já sabe como encaixar uma peça e omite o passo básico', false),
    q25.createChoice('Enumera equipamentos, EPIs, ferramentas e insumos necessários antes do início', false),
    q25.createChoice('Se uma cola precisa de 10 minutos para secar antes do aperto final, ou se a energia precisa ser cortada antes de abrir a tampa, isso deve constar no momento exato', true)
  ]);
  q25.setPoints(1);
  q25.setRequired(true);

  var q26 = form.addMultipleChoiceItem();
  q26.setTitle('26. Segundo a aula, o que é "Padronização"?');
  q26.setChoices([
    q26.createChoice('Times New Roman, Georgia. Possuem pequenos traços (serifas) nas pontas; excelentes para livros impressos', false),
    q26.createChoice('ideal para separar itens longos em listas numeradas', false),
    q26.createChoice('Regras unificadas para consistência institucional', true),
    q26.createChoice('organiza termos de mesma função sintática', false)
  ]);
  q26.setPoints(1);
  q26.setRequired(true);

  var q27 = form.addMultipleChoiceItem();
  q27.setTitle('27. Segundo a aula, o que é "Postura"?');
  q27.setChoices([
    q27.createChoice('manter os pés firmes no chão ancora o corpo e reduz tremores', false),
    q27.createChoice('desacelerar o ritmo reduz o estresse da conversa', false),
    q27.createChoice('Diálogo intencional para avaliar competências e perfil', false),
    q27.createChoice('Expressão corporal que transmite segurança e receptividade', true)
  ]);
  q27.setPoints(1);
  q27.setRequired(true);

  var q28 = form.addMultipleChoiceItem();
  q28.setTitle('28. De acordo com a aula, o que caracteriza "Vocabulário Essencial"?');
  q28.setChoices([
    q28.createChoice('Avalia a segurança sentida pelo usuário durante o processo do início ao fim', false),
    q28.createChoice('Indicados para inventários, listas de materiais, EPIs ou alertas em que a ordem não interfere no resultado', false),
    q28.createChoice('Usabilidade - Facilidade com que o leitor compreende e executa o texto', true),
    q28.createChoice('Diagramas e ilustrações técnicas mostram o exato encaixe de componentes difíceis de descrever apenas com palavras', false)
  ]);
  q28.setPoints(1);
  q28.setRequired(true);

  var q29 = form.addMultipleChoiceItem();
  q29.setTitle('29. De acordo com a aula, o que caracteriza "O Padrão de Leitura em "F""?');
  q29.setChoices([
    q29.createChoice('Pesquisas comprovam que em ambientes corporativos e telas digitais, o leitor realiza uma varredura visual em formato de F', true),
    q29.createChoice('O formato PDF foi criado para assegurar que um documento seja impresso e visualizado de forma idêntica em qualquer dispositivo ou sistema operacional', false),
    q29.createChoice('Em documentos oficiais e corporativos, o vocativo demonstra respeito à função do destinatário', false),
    q29.createChoice('Espaço em branco não é desperdício de papel: é área de respiro para os olhos. Um layout equilibrado separa tópicos, conduz o olhar e reduz a fadiga visual durante a...', false)
  ]);
  q29.setPoints(1);
  q29.setRequired(true);

  var q30 = form.addMultipleChoiceItem();
  q30.setTitle('30. Segundo a aula, o que é "Segurança"?');
  q30.setChoices([
    q30.createChoice('Escolha palavras simples e diretas, eliminando rodeios desnecessários', false),
    q30.createChoice('Não propagar informações falsas ou dados distorcidos', false),
    q30.createChoice('Rejeitar agressões verbais, ironias cruéis e ofensas preconceituosas', false),
    q30.createChoice('Uma instrução técnica confusa pode causar acidentes graves', true)
  ]);
  q30.setPoints(1);
  q30.setRequired(true);


  Logger.log('✅ REVISÃO INTEGRADA (Aulas 1-9) criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Tipo: Quiz de Revisão');
  Logger.log('   Abrangência: Aulas 1 a 9');
  Logger.log('   Questões: 30');
  Logger.log('   Pontuação: 30 pontos (1 ponto/questão)');
  Logger.log('   Blocos: 3 (Fundamentos, Apresentações, Comunicação Profissional)');
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

  Logger.log('📊 ANÁLISE DETALHADA — REVISÃO INTEGRADA (Aulas 1-9)');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
  var blocos = { bloco1: [], bloco2: [], bloco3: [] };
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 30;
    var acertos_bloco1 = 0, acertos_bloco2 = 0, acertos_bloco3 = 0;

    var respostasCorretas = [ 'Identificar claramente o objetivo e o público-alvo', 'A clareza da mensagem, compreensão do público e feedback', 'Compreender e minimizar interferências que prejudicam mensagens', 'Resposta ou reação do receptor que confirma entendimento', 'Define o tom, estilo e nível de formalidade apropriados', 'Emissor e receptor devem compartilhar o mesmo código para compreensão', 'Ouvindo ativamente, pedindo esclarecimentos e respondendo com respeito', 'Formal segue normas gramaticais rigorosas; informal é coloquial', 'De acordo com o público e o contexto profissional', 'Organizar ideias logicamente para melhor compreensão do público', 'Introdução clara, desenvolvimento lógico, conclusão forte', 'Melhora a clareza, o engajamento e o impacto emocional', 'Transmitem emoção, intenção e reforçam a mensagem', 'Com uma história, pergunta provocadora ou estatística impactante', 'Expandir ideias principais com exemplos, dados e argumentos', 'Com resumo impactante, call-to-action ou reflexão provocadora', 'Complementar e reforçar a mensagem verbal, não substituí-la', 'Planejar com antecedência, cronometrar e adaptar durante', 'Aumentam produtividade, clareza e alinhamento de equipes', 'Pauta clara, horário, objetivos definidos e atas documentadas', 'Ouvir atentamente, contribuir quando relevante e respeitar turnos', 'Mantendo foco, controlando tempo e equilibrando participações', 'Ouvir com atenção plena, fazer perguntas e validar compreensão', 'Ouvir, compreender perspectivas diferentes e buscar consenso', 'Cria confiança, satisfação e relacionamentos positivos', 'Ajustando linguagem, tom e complexidade conforme perfil', 'Comunica até 70% da mensagem; deve estar alinhada com palavras', 'Sendo honesto, cumprir promessas e manter confidencialidade', 'Reconhecer, desculpar-se sinceramente e corrigir', 'Comunicação eficaz é uma habilidade prática e desenvolvível'
    ];
 itemResponses.forEach(function(itemResponse, idx) {
      var resposta = itemResponse.getResponse();
      if (idx >= 3 && idx < 33) {
        var questao_idx = idx - 3;
        if (resposta === respostasCorretas[questao_idx]) { acertos++;
          if (questao_idx < 9) acertos_bloco1++;
          else if (questao_idx < 18) acertos_bloco2++;
          else acertos_bloco3++;
        }
      }
    });

    var nota = (acertos / total) * 30;
    var percentual = (acertos / total) * 100;
 todasAsNotas.push(nota); blocos.bloco1.push((acertos_bloco1 / 9) * 100); blocos.bloco2.push((acertos_bloco2 / 9) * 100); blocos.bloco3.push((acertos_bloco3 / 12) * 100);

    var feedback = '';
    if (percentual >= 90) { feedback = 'EXCELENTE! Domina completamente os tópicos das aulas 1-9!';
    } else if (percentual >= 80) { feedback = 'MUITO BOM! Compreendeu bem. Revise tópicos específicos.';
    } else if (percentual >= 70) { feedback = 'BOM! Revise os tópicos com menor acerto.';
    } else if (percentual >= 60) { feedback = 'Bom início. Estude novamente os conceitos com professor.';
    } else { feedback = 'Procure o professor para revisão orientada.';
    }

    Logger.log('👤 ' + email);
    Logger.log('   Acertos: " + acertos + "/' + total);
    Logger.log('   Nota: " + nota.toFixed(1) + "/30 (" + percentual.toFixed(0) + "%)');
    Logger.log('   Bloco 1 (Fundamentos): " + acertos_bloco1 + "/9');
    Logger.log('   Bloco 2 (Apresentações): " + acertos_bloco2 + "/9');
    Logger.log('   Bloco 3 (Profissional): " + acertos_bloco3 + "/12');
    Logger.log('   ' + feedback);
    Logger.log('');
  });

  if (todasAsNotas.length > 0) {
    var media = todasAsNotas.reduce(function(a, b) { return a + b; }) / todasAsNotas.length;
    var media_bloco1 = blocos.bloco1.reduce(function(a, b) { return a + b; }) / blocos.bloco1.length;
    var media_bloco2 = blocos.bloco2.reduce(function(a, b) { return a + b; }) / blocos.bloco2.length;
    var media_bloco3 = blocos.bloco3.reduce(function(a, b) { return a + b; }) / blocos.bloco3.length;

    Logger.log('─────────────────────────────────────────────────');
    Logger.log('📈 ESTATÍSTICAS CONSOLIDADAS (Revisão Aulas 1-9)');
    Logger.log('   Média Geral: " + media.toFixed(1) + "/30 (" + ((media/30)*100).toFixed(0) + "%)');
    Logger.log('');
    Logger.log('   Bloco 1 (Fundamentos): " + media_bloco1.toFixed(0) + "%');
    Logger.log('   Bloco 2 (Apresentações): " + media_bloco2.toFixed(0) + "%');
    Logger.log('   Bloco 3 (Comunicação Profissional): " + media_bloco3.toFixed(0) + "%');
    Logger.log('');
    Logger.log('   Maior nota: " + Math.max.apply(null, todasAsNotas).toFixed(1) + "/30');
    Logger.log('   Menor nota: " + Math.min.apply(null, todasAsNotas).toFixed(1) + "/30');
    Logger.log('   Variação: " + (Math.max.apply(null, todasAsNotas) - Math.min.apply(null, todasAsNotas)).toFixed(1) + " pontos');

    var aprovados = todasAsNotas.filter(function(n) { return n >= 21; }).length;
    Logger.log('   Aprovados (70%+): " + aprovados + " de ' + todasAsNotas.length);
  }
}
