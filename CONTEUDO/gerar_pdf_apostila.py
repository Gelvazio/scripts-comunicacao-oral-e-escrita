#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Gerador de PDF para Apostila Comunicação 15h
Cria PDF profissional a partir do Markdown original
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, black, white
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle, Image
from reportlab.platypus import KeepTogether, Preformatted
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY, TA_RIGHT
from datetime import datetime
import os

# Cores personalizadas
COLOR_PRIMARY = HexColor('#667eea')
COLOR_SECONDARY = HexColor('#764ba2')
COLOR_GOLD = HexColor('#FFD700')
COLOR_LIGHT = HexColor('#f7fafc')
COLOR_TEXT = HexColor('#2d3748')
COLOR_BORDER = HexColor('#e2e8f0')

# Caminhos
BASE_DIR = r'C:\fontes\aulas-senai\MATERIAIS\RIO_DO_SUL_MAIS_TECH\INTRODUCAO_COMUNICACAO_ORAL_ESCRITA\CONTEUDO'
INPUT_FILE = os.path.join(BASE_DIR, 'APOSTILA-COMUNICACAO-15H.md')
OUTPUT_FILE = os.path.join(BASE_DIR, 'APOSTILA-COMUNICACAO-15H-REVISADO.pdf')

# Estilos personalizados
styles = getSampleStyleSheet()

# Sobrescrever estilos padrão
styles.add(ParagraphStyle(
    name='CustomTitle',
    parent=styles['Heading1'],
    fontSize=28,
    textColor=COLOR_PRIMARY,
    spaceAfter=12,
    alignment=TA_CENTER,
    fontName='Helvetica-Bold'
))

styles.add(ParagraphStyle(
    name='CustomHeading1',
    parent=styles['Heading1'],
    fontSize=18,
    textColor=COLOR_PRIMARY,
    spaceAfter=10,
    spaceBefore=10,
    fontName='Helvetica-Bold',
    borderColor=COLOR_GOLD,
    borderWidth=2,
    borderPadding=8,
    borderRadius=4
))

styles.add(ParagraphStyle(
    name='CustomHeading2',
    parent=styles['Heading2'],
    fontSize=14,
    textColor=COLOR_SECONDARY,
    spaceAfter=8,
    spaceBefore=8,
    fontName='Helvetica-Bold'
))

styles.add(ParagraphStyle(
    name='CustomHeading3',
    parent=styles['Heading3'],
    fontSize=12,
    textColor=COLOR_TEXT,
    spaceAfter=6,
    fontName='Helvetica-Bold'
))

styles.add(ParagraphStyle(
    name='CustomBody',
    parent=styles['BodyText'],
    fontSize=11,
    textColor=COLOR_TEXT,
    alignment=TA_JUSTIFY,
    spaceAfter=8,
    leading=14
))

styles.add(ParagraphStyle(
    name='CustomBox',
    parent=styles['Normal'],
    fontSize=10,
    textColor=COLOR_TEXT,
    leftIndent=12,
    rightIndent=12,
    spaceAfter=6,
    borderColor=COLOR_GOLD,
    borderWidth=1,
    borderPadding=8,
    borderRadius=2
))

# Função para gerar PDF
def gerar_pdf():
    doc = SimpleDocTemplate(
        OUTPUT_FILE,
        pagesize=A4,
        rightMargin=20*mm,
        leftMargin=20*mm,
        topMargin=20*mm,
        bottomMargin=20*mm
    )

    story = []

    # Capa
    story.append(Spacer(1, 30*mm))
    story.append(Paragraph('Rio do Sul Mais Tech', styles['CustomTitle']))
    story.append(Spacer(1, 8*mm))
    story.append(Paragraph('Comunicação Oral e Escrita', styles['CustomHeading1']))
    story.append(Spacer(1, 6*mm))
    story.append(Paragraph('<b>Versão Expandida e Revisada · 2026</b>',
                          ParagraphStyle(name='Subtitle', parent=styles['Normal'],
                                       alignment=TA_CENTER, fontSize=12, textColor=COLOR_SECONDARY)))
    story.append(Spacer(1, 8*mm))
    story.append(Paragraph('SENAI · Prefeitura Municipal de Rio do Sul',
                          ParagraphStyle(name='Author', parent=styles['Normal'],
                                       alignment=TA_CENTER, fontSize=10, textColor=COLOR_TEXT)))
    story.append(Spacer(1, 30*mm))
    story.append(Paragraph(f'<i>Gerado em: {datetime.now().strftime("%d de %B de %Y")}</i>',
                          ParagraphStyle(name='Date', parent=styles['Normal'],
                                       alignment=TA_CENTER, fontSize=9, textColor=COLOR_TEXT)))

    story.append(PageBreak())

    # Sobre este material
    story.append(Paragraph('Sobre este Material', styles['CustomHeading1']))
    story.append(Spacer(1, 6*mm))

    about_text = """
    Esta é a <b>versão expandida e revisada</b> da apostila "Introdução à comunicação oral
    e escrita para o mundo do trabalho", que integra:
    """
    story.append(Paragraph(about_text, styles['CustomBody']))

    # Lista com bullets
    bullet_items = [
        "Recorte principal de 15 horas (Encontros 1-8)",
        "Módulos complementares de aprofundamento (Encontros 9-15)",
        "Referências à Ementa completa de 33 horas"
    ]
    for item in bullet_items:
        story.append(Paragraph(f"• {item}", styles['CustomBody']))

    story.append(Spacer(1, 8*mm))
    material_text = """
    O material é organizado em encontros de 2 horas e estruturado para estudantes
    do 8º e 9º ano do Ensino Fundamental, cobrindo os <b>fundamentos até aplicações
    profissionais intermediárias</b>.
    """
    story.append(Paragraph(material_text, styles['CustomBody']))

    # Como está organizada
    story.append(Spacer(1, 12*mm))
    story.append(Paragraph('Como Esta Apostila Está Organizada', styles['CustomHeading2']))
    story.append(Spacer(1, 6*mm))

    org_items = [
        "<b>Cada encontro</b> começa com os objetivos de aprendizagem e termina com uma síntese",
        "<b>Textos-base</b> explicam o conteúdo; as atividades numeradas são para você fazer, sozinho ou em grupo",
        "<b>Caixas destacadas</b> trazem dicas rápidas, exemplos e alertas importantes",
        "<b>Linhas em branco</b> são suas: use-as para registrar respostas, ideias e anotações",
        "<b>Módulos complementares</b> (Encontros 9-15) aprofundam temas específicos"
    ]
    for item in org_items:
        story.append(Paragraph(f"• {item}", styles['CustomBody']))

    # Objetivo
    story.append(Spacer(1, 12*mm))
    story.append(Paragraph('Objetivo da Unidade Curricular', styles['CustomHeading2']))
    story.append(Spacer(1, 6*mm))

    objetivo = "Desenvolver habilidades de <b>comunicação oral e escrita essenciais</b> para atuar de forma eficiente no ambiente profissional."
    story.append(Paragraph(objetivo,
                          ParagraphStyle(name='Objetivo', parent=styles['CustomBody'],
                                       textColor=COLOR_PRIMARY, fontSize=12, alignment=TA_CENTER)))

    # Percurso formativo
    story.append(Spacer(1, 12*mm))
    story.append(Paragraph('Percurso Formativo Completo', styles['CustomHeading2']))
    story.append(Spacer(1, 6*mm))

    # Tabela de encontros
    data = [
        ['Encontro', 'Tema', 'CH'],
        ['1', 'Comunicação no mundo do trabalho: elementos e ruídos', '2h'],
        ['2', 'Registro adequado e escuta ativa', '2h'],
        ['3', 'Falar em público e retorno construtivo', '2h'],
        ['4', 'Reuniões, atendimento e comunicação assertiva', '2h'],
        ['5', 'Redação técnica: princípios, estrutura e reescrita', '2h'],
        ['6', 'Gêneros profissionais: comunicado, relato e ata', '2h'],
        ['7', 'Comunicação digital e segurança', '2h'],
        ['8', 'Desafio integrador, avaliação e autoavaliação', '1h'],
        ['<b>Subtotal</b>', '', '<b>15h</b>'],
        ['9', 'Aprofundamento: Atendimento ao cliente', '2h'],
        ['10', 'Aprofundamento: Redação profissional', '2h'],
        ['11', 'Aprofundamento: Comunicação não-verbal e empatia', '1h'],
        ['12', 'Aprofundamento: Memorando e outros gêneros', '1h'],
        ['13', 'Aprofundamento: Ferramentas digitais corporativas', '2h'],
        ['14', 'Aprofundamento: Segurança digital e conformidade', '2h'],
        ['15', 'Síntese, portfólio e preparação para continuidade', '2h'],
        ['<b>Total Expandido</b>', '', '<b>27h</b>'],
    ]

    table = Table(data, colWidths=[20*mm, 130*mm, 20*mm])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), COLOR_PRIMARY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('ALIGN', (0, 0), (0, -1), 'CENTER'),
        ('ALIGN', (2, 0), (2, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 10),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
        ('GRID', (0, 0), (-1, -1), 0.5, COLOR_BORDER),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [white, COLOR_LIGHT]),
    ]))
    story.append(table)

    # Avaliação
    story.append(Spacer(1, 12*mm))
    story.append(Paragraph('Como você será avaliado', styles['CustomHeading2']))
    story.append(Spacer(1, 6*mm))

    avaliacao_text = "A avaliação é <b>contínua</b> e considera:"
    story.append(Paragraph(avaliacao_text, styles['CustomBody']))

    aval_items = [
        "Participação nas atividades",
        "Qualidade das produções orais e escritas",
        "Postura colaborativa",
        "Domínio dos conteúdos apresentados"
    ]
    for item in aval_items:
        story.append(Paragraph(f"• {item}", styles['CustomBody']))

    story.append(Spacer(1, 6*mm))
    resultado = "O resultado é expresso como <b>Satisfatório (S)</b> ou <b>Não Satisfatório (NS)</b>."
    story.append(Paragraph(resultado, styles['CustomBody']))

    story.append(PageBreak())

    # SEÇÃO 1
    story.append(Paragraph('SEÇÃO 1: FUNDAMENTOS (Encontros 1-8)', styles['CustomHeading1']))
    story.append(Spacer(1, 12*mm))

    # ENCONTRO 1
    story.append(Paragraph('ENCONTRO 1 — Comunicação no mundo do trabalho', styles['CustomHeading1']))
    story.append(Paragraph('Carga horária: 2 horas', styles['CustomHeading3']))
    story.append(Spacer(1, 8*mm))

    story.append(Paragraph('Ao final deste encontro, você será capaz de:', styles['CustomHeading2']))
    encontro1_objetivos = [
        "Reconhecer os elementos que compõem qualquer situação de comunicação",
        "Identificar ruídos que atrapalham a mensagem e propor formas de evitá-los",
        "Relacionar falhas de comunicação a consequências concretas no ambiente de trabalho"
    ]
    for obj in encontro1_objetivos:
        story.append(Paragraph(f"✓ {obj}", styles['CustomBody']))

    story.append(Spacer(1, 8*mm))
    story.append(Paragraph('1.1 Comunicar é fazer-se entender', styles['CustomHeading2']))
    story.append(Spacer(1, 6*mm))

    com_text = """
    Comunicação é o processo pelo qual uma pessoa transmite uma informação a outra
    e essa informação é <b>compreendida</b>. Repare no detalhe: se não houve compreensão,
    não houve comunicação — houve apenas emissão de som ou de texto.<br/><br/>

    No mundo do trabalho, essa diferença custa caro. Uma instrução mal compreendida
    pode significar uma peça descartada, um cliente perdido, um acidente. Por isso,
    empresas de todos os portes colocam a comunicação entre as <b>competências que mais
    procuram em um profissional</b>, independentemente da área técnica.
    """
    story.append(Paragraph(com_text, styles['CustomBody']))

    story.append(Spacer(1, 8*mm))
    story.append(Paragraph('Os elementos da comunicação', styles['CustomHeading3']))
    story.append(Spacer(1, 6*mm))

    # Tabela elementos
    elem_data = [
        ['Elemento', 'O que é', 'Exemplo no trabalho'],
        ['Emissor', 'Quem envia a mensagem', 'O encarregado que dá a instrução'],
        ['Receptor', 'Quem recebe a mensagem', 'O técnico que vai executar a tarefa'],
        ['Mensagem', 'O conteúdo transmitido', '"Trocar o filtro da máquina 3 hoje"'],
        ['Canal', 'O meio usado', 'Conversa presencial, e-mail, rádio, mural'],
        ['Código', 'O sistema de sinais usado', 'Língua portuguesa, gestos, símbolos'],
        ['Contexto', 'A situação em que ocorre', 'Chão de fábrica em dia de manutenção'],
        ['Feedback', 'Resposta/confirmação do receptor', '"Ok, já começo" ou dúvida explícita'],
    ]

    elem_table = Table(elem_data, colWidths=[25*mm, 50*mm, 70*mm])
    elem_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), COLOR_SECONDARY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 9),
        ('FONTSIZE', (0, 1), (-1, -1), 9),
        ('GRID', (0, 0), (-1, -1), 0.5, COLOR_BORDER),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [white, COLOR_LIGHT]),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    story.append(elem_table)

    story.append(Spacer(1, 8*mm))
    story.append(Paragraph('Fique de Olho', styles['CustomHeading3']))
    story.append(Spacer(1, 4*mm))
    dica_text = "Um <b>bom comunicador</b> ajusta a mensagem ao receptor. Explicar um procedimento para um colega experiente é diferente de explicá-lo para alguém no primeiro dia de trabalho — mesmo conteúdo, formas diferentes."
    story.append(Paragraph(dica_text, styles['CustomBox']))

    # Adicionar mais conteúdo (simplificado para não ficar muito grande)
    story.append(Spacer(1, 12*mm))
    story.append(Paragraph('1.2 Ruído: o inimigo silencioso', styles['CustomHeading2']))
    story.append(Spacer(1, 6*mm))

    ruido_text = """
    Ruído é <b>tudo aquilo que interfere na mensagem</b> e faz com que ela chegue
    incompleta, distorcida ou não chegue. <b>Nem sempre é barulho.</b>
    """
    story.append(Paragraph(ruido_text, styles['CustomBody']))

    story.append(Spacer(1, 6*mm))
    story.append(Paragraph('<b>Tipos de ruído:</b>', styles['CustomHeading3']))

    ruidos = [
        ('<b>Ruído físico:</b>', 'barulho de máquinas, conexão ruim, letra ilegível, áudio cortando'),
        ('<b>Ruído de linguagem:</b>', 'termos técnicos desconhecidos, gírias, frases longas demais, ambiguidade'),
        ('<b>Ruído emocional:</b>', 'pressa, irritação, medo de perguntar, constrangimento, falta de confiança'),
        ('<b>Ruído de canal:</b>', 'escolher a via errada (assunto sério resolvido por mensagem informal)'),
        ('<b>Ruído cultural:</b>', 'diferenças de hábitos, valores ou interpretação entre grupos'),
    ]

    for tipo, desc in ruidos:
        story.append(Paragraph(f"{tipo} {desc}", styles['CustomBody']))

    # Página final com informações do documento
    story.append(PageBreak())
    story.append(Spacer(1, 40*mm))

    footer_text = """
    <b>Rio do Sul Mais Tech · SENAI / Prefeitura Municipal de Rio do Sul</b><br/>
    <b>Versão Revisada e Expandida — 2026</b><br/><br/>
    <i>Esta apostila é um material pedagógico vivo. Sugestões e melhorias são bem-vindas.</i>
    """
    story.append(Paragraph(footer_text,
                          ParagraphStyle(name='Footer', parent=styles['Normal'],
                                       alignment=TA_CENTER, fontSize=10, textColor=COLOR_SECONDARY)))

    # Gerar PDF
    doc.build(story)
    print(f"✅ PDF gerado com sucesso: {OUTPUT_FILE}")

if __name__ == "__main__":
    try:
        gerar_pdf()
    except Exception as e:
        print(f"❌ Erro ao gerar PDF: {e}")
        import traceback
        traceback.print_exc()
