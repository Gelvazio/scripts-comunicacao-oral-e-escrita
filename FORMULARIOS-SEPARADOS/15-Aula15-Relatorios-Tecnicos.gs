// ===== 15-Aula15-Relatorios-Tecnicos.gs =====
// Aula real (sequencia do curso): Aula 15 - Relatorios-Tecnicos
// Funcao interna (numeracao original do Google Forms): criarFormularioAula07()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula07() {
  var form = FormApp.create('Avaliação — Aula 15 · Elaboração de Relatórios Técnicos Estrutura, objetividade e análise prática no mundo profissional · SENAI');

  form.setDescription( 'Avaliação Completa: Elaboração de Relatórios Técnicos Estrutura, objetividade e análise prática no mundo profissional\n\nAula 15 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  // setLimitOneResponsePerUser removido: exigia login Google. Identificacao do aluno agora e feita pelo Nome Completo
  form.setConfirmationMessage('✅ Resposta enviada! Sua pontuação aparece logo acima, nesta mesma tela.');

  form.addSectionHeaderItem().setTitle('Identificação');
  form.addTextItem().setTitle('Nome Completo').setRequired(true);

  form.addSectionHeaderItem().setTitle('Questionário Completo — Elaboração de Relatórios Técnicos Estrutura, objetividade e análise prática no mundo profissional');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. De acordo com a aula, o que caracteriza "Finalidade do relatório nas organizações"?');
  q1.setChoices([
    q1.createChoice('Deve sugerir alternativas escalonadas (ex.: reparo ou troca em 60 dias)', false),
    q1.createChoice('Identificação da Caldeira B-04, do setor térmico e da solicitação de vistoria preventiva', false),
    q1.createChoice('Subsidia gestores com dados sólidos para aprovar investimentos ou interromper riscos', true),
    q1.createChoice('O desenvolvimento é a parte mais volumosa do documento. É aqui que os dados brutos são organizados, descritos e analisados com profundidade técnica', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Objetividade"?');
  q2.setChoices([
    q2.createChoice('Comprova conformidade com leis ambientais, trabalhistas e normas regulamentadoras', false),
    q2.createChoice('Uma conclusão técnica bem elaborada não encerra o assunto no vazio: ela estabelece as bases lógicas para as medidas corretivas que a organização deve adotar', false),
    q2.createChoice('Toda afirmação deve remeter a uma fonte verificável: um teste de laboratório, uma medição ou uma norma oficial da ABNT', true),
    q2.createChoice('Nós vimos que a tubulação estava quase explodindo devido ao excesso absurdo de vapor', false)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Segundo a aula, o que é "Nexo causal"?');
  q3.setChoices([
    q3.createChoice('Comparação de resultados com metas de projeto ou limites regulamentares', false),
    q3.createChoice('Exame da correlação entre variáveis (ex.: aumento de temperatura x queda de tensão)', false),
    q3.createChoice('Destinatários invisíveis para os demais. Preserva a privacidade em listas externas ou registra envios com confidencialidade', false),
    q3.createChoice('Justificativa direta em dados e fatos apresentados', true)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. De acordo com a aula, o que caracteriza "Identificando as partes no laudo da caldeira"?');
  q4.setChoices([
    q4.createChoice('Verifique se o seu texto utilizou verbos impessoais, apresentou os números com clareza e encerrou com uma solução prática', false),
    q4.createChoice('Nesta seção, listam-se detalhadamente os instrumentos de medição utilizados, o período exato das coletas e os critérios de amostragem adotados', false),
    q4.createChoice('O desenvolvimento é a parte mais volumosa do documento. É aqui que os dados brutos são organizados, descritos e analisados com profundidade técnica', false),
    q4.createChoice('Identificação da Caldeira B-04, do setor térmico e da solicitação de vistoria preventiva', true)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Segundo a aula, o que é "Organização visual"?');
  q5.setChoices([
    q5.createChoice('Comparação de resultados com metas de projeto ou limites regulamentares', false),
    q5.createChoice('Uso mandatório de gráficos, tabelas e fluxogramas para tornar os padrões visíveis de imediato', true),
    q5.createChoice('Documento formal que expõe fatos apurados e conclusões técnicas', false),
    q5.createChoice('data explícita, número do equipamento, medida em milímetros e menção exata à norma regulamentadora que rege a segurança', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Qual conceito a aula define como: "Durante a semana de provas eletrônicas, o sinal Wi-Fi caiu 6 vezes. Você foi escalado para elaborar a síntese técnica para a diretoria"?');
  q6.setChoices([
    q6.createChoice('Imagine a situação', true),
    q6.createChoice('CCO (Cópia Oculta)', false),
    q6.createChoice('CC (Cópia Carbono)', false),
    q6.createChoice('Relatório', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Segundo a aula, o que é "Introdução"?');
  q7.setChoices([
    q7.createChoice('delimitação do problema e objetivos da análise', true),
    q7.createChoice('Exame da correlação entre variáveis (ex.: aumento de temperatura x queda de tensão)', false),
    q7.createChoice('Destinatário principal, responsável direto pela resposta ou ação solicitada', false),
    q7.createChoice('Comparação de resultados com metas de projeto ou limites regulamentares', false)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "Indicação de fonte"?');
  q8.setChoices([
    q8.createChoice('Abaixo da figura, registre sempre a procedência (ex.: Fonte: Laboratório de Metrologia (2026))', true),
    q8.createChoice('Nós vimos que a tubulação estava quase explodindo devido ao excesso absurdo de vapor', false),
    q8.createChoice('Ser concisa, específica e informar o tema central do e-mail de imediato (ex.: Relatório Financeiro: Balanço de Outubro)', false),
    q8.createChoice('Com base nos dados da queda de rede (capacidade: 80 acessos; pico real: 210 dispositivos; 6 quedas em 20/03/2026), redija uma Síntese Executiva de 3 a 5 linhas...', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Segundo a aula, o que é "Relatório"?');
  q9.setChoices([
    q9.createChoice('Indicação explícita de responsáveis e urgência', false),
    q9.createChoice('Documento formal que expõe fatos apurados e conclusões técnicas', true),
    q9.createChoice('Durante a semana de provas eletrônicas, o sinal Wi-Fi caiu 6 vezes. Você foi escalado para elaborar a síntese técnica para a diretoria', false),
    q9.createChoice('Destinatários invisíveis para os demais. Preserva a privacidade em listas externas ou registra envios com confidencialidade', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. De acordo com a aula, o que caracteriza "Redação de Síntese Executiva"?');
  q10.setChoices([
    q10.createChoice('Nós vimos que a tubulação estava quase explodindo devido ao excesso absurdo de vapor', false),
    q10.createChoice('Com base nos dados da queda de rede (capacidade: 80 acessos; pico real: 210 dispositivos; 6 quedas em 20/03/2026), redija uma Síntese Executiva de 3 a 5 linhas...', true),
    q10.createChoice('Todo recurso visual deve ter identificador e legenda superior (ex.: Tabela 1 – Índice de Ruído por Sala)', false),
    q10.createChoice('Um dos maiores equívocos é emitir um diagnóstico ou proposta de solução sem apresentar os dados que justifiquem a medida na seção anterior', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Aplicação da Impessoalidade"?');
  q11.setChoices([
    q11.createChoice('Nós vimos que a tubulação estava quase explodindo devido ao excesso absurdo de vapor', true),
    q11.createChoice('Todo recurso visual deve ter identificador e legenda superior (ex.: Tabela 1 – Índice de Ruído por Sala)', false),
    q11.createChoice('Ser concisa, específica e informar o tema central do e-mail de imediato (ex.: Relatório Financeiro: Balanço de Outubro)', false),
    q11.createChoice('Dado mensurável ou registro material que comprova o fato', false)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "Conclusões técnicas"?');
  q12.setChoices([
    q12.createChoice('A linguagem técnica é estritamente denotativa, ou seja, as palavras são empregadas em seu sentido próprio, literal e de dicionário', false),
    q12.createChoice('Uma conclusão técnica bem elaborada não encerra o assunto no vazio: ela estabelece as bases lógicas para as medidas corretivas que a organização deve adotar', true),
    q12.createChoice('Todo recurso visual deve ter identificador e legenda superior (ex.: Tabela 1 – Índice de Ruído por Sala)', false),
    q12.createChoice('Nesta seção, listam-se detalhadamente os instrumentos de medição utilizados, o período exato das coletas e os critérios de amostragem adotados', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. De acordo com a aula, o que caracteriza "Revisão: A redação no ambiente de trabalho"?');
  q13.setChoices([
    q13.createChoice('Toda afirmação deve remeter a uma fonte verificável: um teste de laboratório, uma medição ou uma norma oficial da ABNT', false),
    q13.createChoice('Todo recurso visual deve ter identificador e legenda superior (ex.: Tabela 1 – Índice de Ruído por Sala)', false),
    q13.createChoice('Uma conclusão técnica bem elaborada não encerra o assunto no vazio: ela estabelece as bases lógicas para as medidas corretivas que a organização deve adotar', false),
    q13.createChoice('Na aula anterior, estudamos os e-mails corporativos. Eles são rápidos e voltados à ação diária. Aprendemos que o assunto deve antecipar o tema sem rodeios e o texto...', true)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "CCO (Cópia Oculta)"?');
  q14.setChoices([
    q14.createChoice('Destinatário principal, responsável direto pela resposta ou ação solicitada', false),
    q14.createChoice('Destinatários invisíveis para os demais. Preserva a privacidade em listas externas ou registra envios com confidencialidade', true),
    q14.createChoice('delimitação do problema e objetivos da análise', false),
    q14.createChoice('Documento formal que expõe fatos apurados e conclusões técnicas', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. De acordo com a aula, o que caracteriza "Etapa 1: A Introdução técnica"?');
  q15.setChoices([
    q15.createChoice('A linguagem técnica é estritamente denotativa, ou seja, as palavras são empregadas em seu sentido próprio, literal e de dicionário', false),
    q15.createChoice('O desenvolvimento é a parte mais volumosa do documento. É aqui que os dados brutos são organizados, descritos e analisados com profundidade técnica', false),
    q15.createChoice('Especifique sempre a marca, o modelo e a data da última calibração dos aparelhos empregados nos testes', false),
    q15.createChoice('A introdução situa o leitor no tempo, no espaço e no motivo da elaboração do documento. Ela deve responder com exatidão: o quê, por quê e para quem', true)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Qual conceito a aula define como: "data explícita, número do equipamento, medida em milímetros e menção exata à norma regulamentadora que rege a segurança"?');
  q16.setChoices([
    q16.createChoice('CC (Cópia Carbono)', false),
    q16.createChoice('Relatório', false),
    q16.createChoice('Prazos e atores', false),
    q16.createChoice('Note a precisão', true)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. De acordo com a aula, o que caracteriza "Checagem de E-mails Corporativos"?');
  q17.setChoices([
    q17.createChoice('Todo recurso visual deve ter identificador e legenda superior (ex.: Tabela 1 – Índice de Ruído por Sala)', false),
    q17.createChoice('Ser concisa, específica e informar o tema central do e-mail de imediato (ex.: Relatório Financeiro: Balanço de Outubro)', true),
    q17.createChoice('Identificação das 6 interrupções ocorridas em 20/03/2026 durante a avaliação bimestral online', false),
    q17.createChoice('Em relatórios corporativos, qualquer dedução sem evidência física ou numérica é desconsiderada. Observe o contraste', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Segundo a aula, o que é "Metodologia"?');
  q18.setChoices([
    q18.createChoice('Justificativa direta em dados e fatos apresentados', false),
    q18.createChoice('Descrição clara dos métodos e passos usados para investigar o caso', true),
    q18.createChoice('data explícita, número do equipamento, medida em milímetros e menção exata à norma regulamentadora que rege a segurança', false),
    q18.createChoice('diagnóstico final e proposições práticas', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Segundo a aula, o que é "Para"?');
  q19.setChoices([
    q19.createChoice('Destinatário principal, responsável direto pela resposta ou ação solicitada', true),
    q19.createChoice('Dado mensurável, fato auditável ou registro que comprova a ocorrência', false),
    q19.createChoice('Documento formal que expõe fatos apurados e conclusões técnicas', false),
    q19.createChoice('Exame da correlação entre variáveis (ex.: aumento de temperatura x queda de tensão)', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. Segundo a aula, o que é "Prazos e atores"?');
  q20.setChoices([
    q20.createChoice('Indicação explícita de responsáveis e urgência', true),
    q20.createChoice('Exame da correlação entre variáveis (ex.: aumento de temperatura x queda de tensão)', false),
    q20.createChoice('Postura comunicativa neutra, focada no fato e isenta de opiniões', false),
    q20.createChoice('Destinatário principal, responsável direto pela resposta ou ação solicitada', false)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  Logger.log('✅ Aula 15 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 07 — Elaboração de Relatórios Técnicos Estrutura, objetividade e análise prática no mundo profissional');
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

function analisarRespostasAula07() {
  var form = FormApp.openByTitle('Avaliação — Aula 15 · Elaboração de Relatórios Técnicos Estrutura, objetividade e análise prática no mundo profissional · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 15: Elaboração de Relatórios Técnicos Estrutura, objetividade e análise prática no mundo profissional');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Elaboração de Relatórios Técnicos Estrutura, objetividade e análise prática no mundo profissional', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Documento formal que expõe fatos apurados e conclusões técnicas.', 'instrumentos, ferramentas e etapas do procedimento.', 'Dado mensurável, fato auditável ou registro que comprova a ocorrência.', 'Postura comunicativa neutra, focada no fato e isenta de opiniões.', 'A redação no ambiente de trabalho', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 08
// ════════════════════════════════════════════════════════════
