// ===== 13-Aula13-Formatacao-Padronizacao.gs =====
// Aula real (sequencia do curso): Aula 13 - Formatacao-Padronizacao
// Funcao interna (numeracao original do Google Forms): criarFormularioAula05()
// Extraido de FORMULARIO-PRINCIPAL.gs

function criarFormularioAula05() {
  var form = FormApp.create('Avaliação — Aula 13 · Formatação e Padronização de Documentos Apresentação visual e clareza na escrita formal · SENAI');

  form.setDescription( 'Avaliação Completa: Formatação e Padronização de Documentos Apresentação visual e clareza na escrita formal\n\nAula 13 — UC Introdução à Comunicação Oral e Escrita\nProfessor: Gelvazio\n\n20 questões | 20 pontos no total\nTempo estimado: 30-40 minutos\nCobertura: 100% do assunto da aula\nVocê verá sua pontuação e feedback automaticamente ao enviar!'
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

  form.addSectionHeaderItem().setTitle('Questionário Completo — Formatação e Padronização de Documentos Apresentação visual e clareza na escrita formal');
  form.addTextItem().setHelpText('20 questões | 1 ponto cada | Total: 20 pontos | Cobertura: 100% do assunto');
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('1. Qual conceito a aula define como: "preparam o leitor para citações, listagens ou conclusões"?');
  q1.setChoices([
    q1.createChoice('Dois-pontos', true),
    q1.createChoice('Layout', false),
    q1.createChoice('Vossa Excelência', false),
    q1.createChoice('Itálico', false)
  ]);
  q1.setPoints(1);
  q1.setRequired(true);

  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. De acordo com a aula, o que caracteriza "Estudo de Caso: O Comunicado Escolar"?');
  q2.setChoices([
    q2.createChoice('Na aula anterior, estudamos correção gramatical. Antes de pensar no visual, o texto deve estar impecável', false),
    q2.createChoice('Documentos bem formatados perdem credibilidade se houver falhas de concordância', false),
    q2.createChoice('O formato PDF foi criado para assegurar que um documento seja impresso e visualizado de forma idêntica em qualquer dispositivo ou sistema operacional', false),
    q2.createChoice('O Grêmio Estudantil precisa enviar um comunicado para toda a escola sobre as eleições', true)
  ]);
  q2.setPoints(1);
  q2.setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Segundo a aula, o que é "Prevenção de erros"?');
  q3.setChoices([
    q3.createChoice('estilos de parágrafo vêm travados com medidas recomendadas', true),
    q3.createChoice('Times New Roman, Georgia. Possuem pequenos traços (serifas) nas pontas; excelentes para livros impressos', false),
    q3.createChoice('forma cordial e amplamente aceita no ambiente corporativo privado', false),
    q3.createChoice('organiza termos de mesma função sintática', false)
  ]);
  q3.setPoints(1);
  q3.setRequired(true);

  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Qual conceito a aula define como: "palavras estrangeiras (ex.: feedback, compliance), títulos de obras ou termos técnicos específicos"?');
  q4.setChoices([
    q4.createChoice('Dois-pontos', false),
    q4.createChoice('Itálico', true),
    q4.createChoice('Hierarquia', false),
    q4.createChoice('Ponto e vírgula', false)
  ]);
  q4.setPoints(1);
  q4.setRequired(true);

  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. De acordo com a aula, o que caracteriza "Acessibilidade Visual em Textos Longos"?');
  q5.setChoices([
    q5.createChoice('Margens simétricas de 2 cm a 2,5 cm em todas as bordas', false),
    q5.createChoice('Versões diferentes de editores trocam fontes não instaladas e quebram quebras de linha e tabelas', false),
    q5.createChoice('Linhas com 60 a 80 caracteres são ideais. Linhas excessivamente longas fazem o leitor se perder ao mudar de linha', true),
    q5.createChoice('Identifica a empresa ou setor emissor. Posiciona-se sempre no topo, centralizado ou à esquerda', false)
  ]);
  q5.setPoints(1);
  q5.setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Segundo a aula, o que é "Hierarquia"?');
  q6.setChoices([
    q6.createChoice('enviaram uma foto de um texto digitado no bloco de notas do celular', false),
    q6.createChoice('Níveis visuais entre títulos, subtítulos e texto', true),
    q6.createChoice('a primeira linha de um parágrafo que fica isolada no final de uma página', false),
    q6.createChoice('a última linha de um parágrafo que passa sozinha para o topo da página seguinte', false)
  ]);
  q6.setPoints(1);
  q6.setRequired(true);

  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Segundo a aula, o que é "A maioria dos colaboradores"?');
  q7.setChoices([
    q7.createChoice('empregado para autoridades de hierarquia superior à de quem assina (inclusive o Presidente da República)', false),
    q7.createChoice('estilos de parágrafo vêm travados com medidas recomendadas', false),
    q7.createChoice('moderno, muito usado em relatórios corporativos e na web por manter espaçamento uniforme entre palavras', false),
    q7.createChoice('aceita verbo no singular ou no plural (concordância atrativa)', true)
  ]);
  q7.setPoints(1);
  q7.setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. De acordo com a aula, o que caracteriza "Destaques: Negrito, Itálico e Sublinhado"?');
  q8.setChoices([
    q8.createChoice('Destaques servem para guiar o olhar. Se tudo estiver destacado, nada se destaca', true),
    q8.createChoice('Documentos bem formatados perdem credibilidade se houver falhas de concordância', false),
    q8.createChoice('Empresas e escolas utilizam templates (modelos prontos) para garantir que ninguém precise recriar estilos do zero', false),
    q8.createChoice('Na aula anterior, estudamos correção gramatical. Antes de pensar no visual, o texto deve estar impecável', false)
  ]);
  q8.setPoints(1);
  q8.setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. De acordo com a aula, o que caracteriza "Padronização Institucional de Documentos"?');
  q9.setChoices([
    q9.createChoice('Esses manuais definem regras para pronomes de tratamento, formatação de cabeçalhos, vocativos e estruturas formais, garantindo uniformidade em toda a comunicação...', true),
    q9.createChoice('Fontes com caracteres bem distintos (como Arial, Verdana ou Lexend) auxiliam pessoas com dislexia ou baixa visão', false),
    q9.createChoice('Use quando houver sequência obrigatória ou hierarquia: etapas de um processo, instruções de manual ou prioridades', false),
    q9.createChoice('Organize os elementos estruturais de uma carta de solicitação oficial na ordem correta de cima para baixo', false)
  ]);
  q9.setPoints(1);
  q9.setRequired(true);

  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. Segundo a aula, o que é "Respeitosamente"?');
  q10.setChoices([
    q10.createChoice('empregado para autoridades de hierarquia superior à de quem assina (inclusive o Presidente da República)', true),
    q10.createChoice('ideal para separar itens longos em listas numeradas', false),
    q10.createChoice('Distribuição dos elementos na área de leitura', false),
    q10.createChoice('estilos de parágrafo vêm travados com medidas recomendadas', false)
  ]);
  q10.setPoints(1);
  q10.setRequired(true);

  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. De acordo com a aula, o que caracteriza "Identidade Visual e Organização Espacial"?');
  q11.setChoices([
    q11.createChoice('Esses manuais definem regras para pronomes de tratamento, formatação de cabeçalhos, vocativos e estruturas formais, garantindo uniformidade em toda a comunicação...', false),
    q11.createChoice('Use quando a ordem dos itens não importa: listas de materiais, vantagens, participantes ou tópicos de discussão', false),
    q11.createChoice('O Manual da Presidência simplificou os fechos de documentos em duas únicas modalidades', false),
    q11.createChoice('Espaço em branco não é desperdício de papel: é área de respiro para os olhos. Um layout equilibrado separa tópicos, conduz o olhar e reduz a fadiga visual durante a...', true)
  ]);
  q11.setPoints(1);
  q11.setRequired(true);

  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. De acordo com a aula, o que caracteriza "O Risco de Enviar Arquivos Editáveis"?');
  q12.setChoices([
    q12.createChoice('Fontes manuscritas ou góticas devem ser evitadas em textos formais. Dificultam a leitura rápida', false),
    q12.createChoice('Empresas e escolas utilizam templates (modelos prontos) para garantir que ninguém precise recriar estilos do zero', false),
    q12.createChoice('Versões diferentes de editores trocam fontes não instaladas e quebram quebras de linha e tabelas', true),
    q12.createChoice('Na aula anterior, estudamos correção gramatical. Antes de pensar no visual, o texto deve estar impecável', false)
  ]);
  q12.setPoints(1);
  q12.setRequired(true);

  var q13 = form.addMultipleChoiceItem();
  q13.setTitle('13. Segundo a aula, o que é "Alinhado à esquerda"?');
  q13.setChoices([
    q13.createChoice('enviaram uma foto de um texto digitado no bloco de notas do celular', false),
    q13.createChoice('organiza termos de mesma função sintática', false),
    q13.createChoice('moderno, muito usado em relatórios corporativos e na web por manter espaçamento uniforme entre palavras', true),
    q13.createChoice('alinha ambas as margens, comum em normas formais (cuidado com grandes espaços vazios entre palavras)', false)
  ]);
  q13.setPoints(1);
  q13.setRequired(true);

  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Segundo a aula, o que é "Linha Viúva"?');
  q14.setChoices([
    q14.createChoice('a última linha de um parágrafo que passa sozinha para o topo da página seguinte', true),
    q14.createChoice('uso de papel timbrado da escola, títulos destacados e exportação em PDF via mural', false),
    q14.createChoice('11 a 12 pt. Notas de rodapé e legendas: 10 pt. Títulos: 14 a 18 pt', false),
    q14.createChoice('empregado para autoridades de hierarquia superior à de quem assina (inclusive o Presidente da República)', false)
  ]);
  q14.setPoints(1);
  q14.setRequired(true);

  var q15 = form.addMultipleChoiceItem();
  q15.setTitle('15. Segundo a aula, o que é "Padronização"?');
  q15.setChoices([
    q15.createChoice('Distribuição dos elementos na área de leitura', false),
    q15.createChoice('forma cordial e amplamente aceita no ambiente corporativo privado', false),
    q15.createChoice('Regras unificadas para consistência institucional', true),
    q15.createChoice('a primeira linha de um parágrafo que fica isolada no final de uma página', false)
  ]);
  q15.setPoints(1);
  q15.setRequired(true);

  var q16 = form.addMultipleChoiceItem();
  q16.setTitle('16. Qual conceito a aula define como: "enviaram uma foto de um texto digitado no bloco de notas do celular"?');
  q16.setChoices([
    q16.createChoice('Atenciosamente', false),
    q16.createChoice('Problema inicial', true),
    q16.createChoice('Formatação', false),
    q16.createChoice('Prezado(a) Senhor(a)', false)
  ]);
  q16.setPoints(1);
  q16.setRequired(true);

  var q17 = form.addMultipleChoiceItem();
  q17.setTitle('17. Segundo a aula, o que é "Vossa Excelência"?');
  q17.setChoices([
    q17.createChoice('empregado para autoridades de mesma hierarquia ou de nível inferior, e nas relações corporativas comuns', false),
    q17.createChoice('reduz alterações acidentais no texto por terceiros', false),
    q17.createChoice('para chefes de poderes executivo, legislativo e judiciário', true),
    q17.createChoice('forma cordial e amplamente aceita no ambiente corporativo privado', false)
  ]);
  q17.setPoints(1);
  q17.setRequired(true);

  var q18 = form.addMultipleChoiceItem();
  q18.setTitle('18. Qual conceito a aula define como: "11 a 12 pt. Notas de rodapé e legendas: 10 pt. Títulos: 14 a 18 pt"?');
  q18.setChoices([
    q18.createChoice('Corpo de texto', true),
    q18.createChoice('Inalterabilidade visual', false),
    q18.createChoice('Vossa Senhoria', false),
    q18.createChoice('Produtividade', false)
  ]);
  q18.setPoints(1);
  q18.setRequired(true);

  var q19 = form.addMultipleChoiceItem();
  q19.setTitle('19. Qual conceito a aula define como: "organiza termos de mesma função sintática"?');
  q19.setChoices([
    q19.createChoice('Vírgula em enumerações', true),
    q19.createChoice('Prevenção de erros', false),
    q19.createChoice('Padronização', false),
    q19.createChoice('Exemplos', false)
  ]);
  q19.setPoints(1);
  q19.setRequired(true);

  var q20 = form.addMultipleChoiceItem();
  q20.setTitle('20. De acordo com a aula, o que caracteriza "Análise de Vocativos e Tratamentos"?');
  q20.setChoices([
    q20.createChoice('Documentos bem formatados perdem credibilidade se houver falhas de concordância', false),
    q20.createChoice('Área central onde a mensagem ou relatório é detalhadamente exposto', false),
    q20.createChoice('Fontes manuscritas ou góticas devem ser evitadas em textos formais. Dificultam a leitura rápida', false),
    q20.createChoice('Em documentos oficiais e corporativos, o vocativo demonstra respeito à função do destinatário', true)
  ]);
  q20.setPoints(1);
  q20.setRequired(true);



  Logger.log('✅ Aula 13 criada com sucesso!');
  Logger.log('');
  Logger.log('📊 INFORMAÇÕES DO FORMULÁRIO:');
  Logger.log('   Aula: 05 — Formatação e Padronização de Documentos Apresentação visual e clareza na escrita formal');
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

function analisarRespostasAula05() {
  var form = FormApp.openByTitle('Avaliação — Aula 13 · Formatação e Padronização de Documentos Apresentação visual e clareza na escrita formal · SENAI');
  var responses = form.getResponses();

  Logger.log('📊 ANÁLISE DETALHADA — Aula 13: Formatação e Padronização de Documentos Apresentação visual e clareza na escrita formal');
  Logger.log('═══════════════════════════════════════════════════');
  Logger.log('Total de respostas: ' + responses.length);
  Logger.log('');

  var todasAsNotas = [];
 responses.forEach(function(response) {
    var email = response.getRespondentEmail();
    var itemResponses = response.getItemResponses();
    var acertos = 0;
    var total = 20;

    var respostasCorretas = [ 'Formatação e Padronização de Documentos Apresentação visual e clareza na escrita formal', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'É um conceito importante apresentado na aula', 'Objetivos da Nossa Aula', 'É um conceito importante apresentado na aula', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'Na comunicação diária com colegas e superiores', 'aplicar margens, fontes institucionais, espaçamentos e alinhamentos corretos.', 'usar títulos, subtítulos, ênfases e listas com intencionalidade clara.', 'produzir documentos limpos e salvá-los com segurança em formato PDF.', 'Ajuste visual de fontes, margens e parágrafos.', 'Regras unificadas para consistência institucional.', 'Aprimorar habilidades de comunicação profissional', 'Todos os conceitos apresentados são importantes', 'Muito preparado e confiante para aplicar', 'Compreender e aplicar os conceitos na prática profissional'
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
// AULA 06
// ════════════════════════════════════════════════════════════
