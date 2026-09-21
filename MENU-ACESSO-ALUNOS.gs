/**
 * MENU-ACESSO-ALUNOS.gs
 * Menu Interativo para Alunos Acessarem Formularios
 * Introducao a Comunicacao Oral e Escrita
 *
 * INSTRUCOES:
 * 1. Acesse https://script.google.com
 * 2. Cole este codigo em um novo projeto
 * 3. Salve com nome: "Menu Avaliacoes - Comunicacao Oral"
 * 4. Execute: exibirMenuAcesso()
 * 5. Compartilhe o link com os alunos
 *
 * O menu mostra botoes/links para cada formulario
 */

function exibirMenuAcesso() {
  var html = HtmlService.createHtmlOutput(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Menu de Avaliacoes</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 20px;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .header {
          background: white;
          border-radius: 10px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          text-align: center;
        }

        .header h1 {
          color: #333;
          margin-bottom: 10px;
          font-size: 28px;
        }

        .header p {
          color: #666;
          font-size: 16px;
          margin-bottom: 15px;
        }

        .stats {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
          padding: 15px;
        }

        .stat-number {
          font-size: 32px;
          font-weight: bold;
          color: #667eea;
        }

        .stat-label {
          color: #666;
          font-size: 14px;
          margin-top: 5px;
        }

        .modulos {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .modulo {
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .modulo h2 {
          color: #667eea;
          margin-bottom: 15px;
          font-size: 18px;
          border-bottom: 2px solid #667eea;
          padding-bottom: 10px;
        }

        .aula {
          padding: 12px;
          margin: 8px 0;
          background: #f5f5f5;
          border-left: 4px solid #667eea;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .aula:hover {
          background: #e8e8e8;
          transform: translateX(5px);
          box-shadow: 0 3px 10px rgba(102, 126, 234, 0.2);
        }

        .aula-titulo {
          flex: 1;
        }

        .aula-numero {
          background: #667eea;
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          margin-right: 10px;
          font-size: 12px;
        }

        .aula-icon {
          color: #667eea;
          margin-left: 10px;
          font-size: 16px;
        }

        .footer {
          background: white;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .footer p {
          color: #666;
          font-size: 14px;
        }

        .info-box {
          background: #e3f2fd;
          border-left: 4px solid #2196F3;
          padding: 15px;
          margin-bottom: 20px;
          border-radius: 4px;
        }

        .info-box p {
          color: #1565c0;
          margin: 0;
          font-size: 14px;
        }

        .revisao {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          padding: 20px;
          border-radius: 10px;
          margin-top: 30px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(245, 87, 108, 0.3);
        }

        .revisao h3 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .revisao p {
          font-size: 14px;
          margin-bottom: 15px;
        }

        .revisao-button {
          background: white;
          color: #f5576c;
          padding: 12px 30px;
          border: none;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 14px;
        }

        .revisao-button:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          .modulos {
            grid-template-columns: 1fr;
          }

          .header h1 {
            font-size: 22px;
          }

          .stats {
            flex-direction: column;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Avaliações - Comunicação Oral e Escrita</h1>
          <p>Escolha o questionário que deseja responder</p>

          <div class="info-box">
            <p><strong>Importante:</strong> Você precisará de um código de acesso para responder qualquer questionário. Solicite ao professor se não tem.</p>
          </div>

          <div class="stats">
            <div class="stat">
              <div class="stat-number">25</div>
              <div class="stat-label">Aulas Disponíveis</div>
            </div>
            <div class="stat">
              <div class="stat-number">20</div>
              <div class="stat-label">Questões por Aula</div>
            </div>
            <div class="stat">
              <div class="stat-number">30-40</div>
              <div class="stat-label">Min. Tempo</div>
            </div>
          </div>
        </div>

        <div class="modulos">
          <div class="modulo">
            <h2>Modulo 1: Fundamentos (Aulas 1-5)</h2>
            <div class="aula" onclick="abrirFormulario('Processo Comunicativo')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">1</div>
                <div class="aula-titulo">Processo Comunicativo</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
            <div class="aula" onclick="abrirFormulario('Comunicacao Eficaz')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">2</div>
                <div class="aula-titulo">Comunicação Eficaz</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
            <div class="aula" onclick="abrirFormulario('O Ciclo do Feedback')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">3</div>
                <div class="aula-titulo">O Ciclo do Feedback</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
            <div class="aula" onclick="abrirFormulario('Contextos Formais')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">4</div>
                <div class="aula-titulo">Contextos Formais vs Informais</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
            <div class="aula" onclick="abrirFormulario('Sintese dos Fundamentos')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">5</div>
                <div class="aula-titulo">Síntese dos Fundamentos</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
          </div>

          <div class="modulo">
            <h2>Modulo 2: Apresentacoes (Aulas 6-9)</h2>
            <div class="aula" onclick="abrirFormulario('Estrutura de Apresentacoes')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">6</div>
                <div class="aula-titulo">Estrutura de Apresentações</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
            <div class="aula" onclick="abrirFormulario('Tecnicas de Oratoria')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">7</div>
                <div class="aula-titulo">Técnicas de Oratória</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
            <div class="aula" onclick="abrirFormulario('Participacao em Reunioes')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">8</div>
                <div class="aula-titulo">Participação em Reuniões</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
            <div class="aula" onclick="abrirFormulario('Atendimento e Escuta Ativa')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">9</div>
                <div class="aula-titulo">Atendimento e Escuta Ativa</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
          </div>

          <div class="modulo">
            <h2>Modulo 3: Escrita (Aulas 10-18)</h2>
            <div class="aula" onclick="abrirFormulario('Preparacao para Entrevistas')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">10</div>
                <div class="aula-titulo">Preparação para Entrevistas</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
            <div class="aula" onclick="abrirFormulario('Estruturacao de Textos')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">11</div>
                <div class="aula-titulo">Estruturação de Textos</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
            <div class="aula" onclick="abrirFormulario('Correcao Gramatical')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">12</div>
                <div class="aula-titulo">Correção Gramatical</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
            <div class="aula" onclick="abrirFormulario('Formatacao de Documentos')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">13</div>
                <div class="aula-titulo">Formatação de Documentos</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
            <div class="aula" onclick="abrirFormulario('Redacao de E-mails')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">14</div>
                <div class="aula-titulo">Redação de E-mails</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
            <div class="aula" onclick="abrirFormulario('Relatorios Tecnicos')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">15</div>
                <div class="aula-titulo">Relatórios Técnicos</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
            <div class="aula" onclick="abrirFormulario('Memorandos')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">16</div>
                <div class="aula-titulo">Memorandos e Comunicações</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
            <div class="aula" onclick="abrirFormulario('Procedimentos')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">17</div>
                <div class="aula-titulo">Procedimentos e Instruções</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
            <div class="aula" onclick="abrirFormulario('Plataformas Digitais')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">18</div>
                <div class="aula-titulo">Plataformas Digitais</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
          </div>

          <div class="modulo">
            <h2>Modulo 4: Seguranca (Aulas 19-23)</h2>
            <div class="aula" onclick="abrirFormulario('Seguranca da Informacao')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">19</div>
                <div class="aula-titulo">Segurança da Informação</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
            <div class="aula" onclick="abrirFormulario('Etiqueta Digital')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">20</div>
                <div class="aula-titulo">Etiqueta Digital e Netiqueta</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
            <div class="aula" onclick="abrirFormulario('Trabalho Remoto')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">21</div>
                <div class="aula-titulo">Trabalho Remoto e Colaboração</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
            <div class="aula" onclick="abrirFormulario('Linguagem Corporal')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">22</div>
                <div class="aula-titulo">Linguagem Corporal</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
            <div class="aula" onclick="abrirFormulario('Gestual e Tom')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">23</div>
                <div class="aula-titulo">Gestual, Tom de Voz</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
          </div>

          <div class="modulo">
            <h2>Modulo 5: Integracao (Aulas 24-25)</h2>
            <div class="aula" onclick="abrirFormulario('Projeto Capstone')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">24</div>
                <div class="aula-titulo">Integração Prática: Capstone</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
            <div class="aula" onclick="abrirFormulario('Avaliacao Final')">
              <div style="display: flex; align-items: center; width: 100%;">
                <div class="aula-numero">25</div>
                <div class="aula-titulo">Avaliação Final e Encerramento</div>
                <div class="aula-icon">→</div>
              </div>
            </div>
          </div>
        </div>

        <div class="revisao">
          <h3>Revisão Integrada - Aulas 1 a 9</h3>
          <p>Teste seus conhecimentos dos primeiros 9 módulos com 30 questões integradas</p>
          <button class="revisao-button" onclick="abrirFormulario('Revisao Integrada')">
            Acessar Revisão
          </button>
        </div>

        <div class="footer">
          <p>💡 Dica: Anote seu código de acesso antes de começar</p>
          <p style="margin-top: 10px; font-size: 12px;">Professor: Gelvazio | SENAI Rio do Sul</p>
        </div>
      </div>

      <script>
        function abrirFormulario(aula) {
          alert('Aula: ' + aula + '\\n\\nVocê será redirecionado para o formulário.\\n\\nO professor compartilhará o link direto com você.');
        }
      </script>
    </body>
    </html>
  `);

  html.setHeight(800);
  SpreadsheetApp.getUi().showModalDialog(html, 'Menu de Avaliacoes');
}

function abrirNovoMenu() {
  exibirMenuAcesso();
}
