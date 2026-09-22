#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Gerador de PDF para Apostila Comunicação 15h
Versão simples mantendo layout original do Markdown
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, black, white
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
import os

# Caminhos
BASE_DIR = r'C:\fontes\aulas-senai\MATERIAIS\RIO_DO_SUL_MAIS_TECH\INTRODUCAO_COMUNICACAO_ORAL_ESCRITA\CONTEUDO'
INPUT_FILE = os.path.join(BASE_DIR, 'APOSTILA-COMUNICACAO-15H.md')
OUTPUT_FILE = os.path.join(BASE_DIR, 'APOSTILA-COMUNICACAO-15H-REVISADO.pdf')

# Ler markdown
with open(INPUT_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# Cores (simples, mantendo tema original)
COLOR_PRIMARY = HexColor('#667eea')
COLOR_TEXT = HexColor('#2d3748')

# Estilos
styles = getSampleStyleSheet()

# Sobrescrever estilos mantendo estrutura simples
styles.add(ParagraphStyle(
    name='H1',
    parent=styles['Heading1'],
    fontSize=18,
    textColor=COLOR_PRIMARY,
    spaceAfter=12,
    spaceBefore=12,
    fontName='Helvetica-Bold',
    alignment=TA_LEFT
))

styles.add(ParagraphStyle(
    name='H2',
    parent=styles['Heading2'],
    fontSize=14,
    textColor=COLOR_TEXT,
    spaceAfter=10,
    spaceBefore=10,
    fontName='Helvetica-Bold',
    alignment=TA_LEFT
))

styles.add(ParagraphStyle(
    name='H3',
    parent=styles['Heading3'],
    fontSize=12,
    textColor=COLOR_TEXT,
    spaceAfter=8,
    spaceBefore=8,
    fontName='Helvetica-Bold',
    alignment=TA_LEFT
))

styles.add(ParagraphStyle(
    name='Body',
    parent=styles['BodyText'],
    fontSize=10,
    textColor=COLOR_TEXT,
    alignment=TA_JUSTIFY,
    spaceAfter=8,
    leading=12
))

styles.add(ParagraphStyle(
    name='BulletPoint',
    parent=styles['Normal'],
    fontSize=10,
    textColor=COLOR_TEXT,
    leftIndent=15,
    spaceAfter=4,
    leading=12
))

# Gerar PDF
def gerar_pdf():
    doc = SimpleDocTemplate(
        OUTPUT_FILE,
        pagesize=A4,
        rightMargin=15*mm,
        leftMargin=15*mm,
        topMargin=15*mm,
        bottomMargin=15*mm
    )

    story = []
    lines = content.split('\n')

    for i, line in enumerate(lines):
        # Pular linhas vazias
        if not line.strip():
            continue

        # Títulos H1
        if line.startswith('# ') and not line.startswith('# '):
            title = line[2:].strip()
            story.append(Paragraph(title, styles['H1']))
            story.append(Spacer(1, 6*mm))

        # Títulos H2
        elif line.startswith('## '):
            title = line[3:].strip()
            story.append(Paragraph(title, styles['H2']))
            story.append(Spacer(1, 4*mm))

        # Títulos H3
        elif line.startswith('### '):
            title = line[4:].strip()
            story.append(Paragraph(title, styles['H3']))
            story.append(Spacer(1, 3*mm))

        # Linhas horizontais
        elif line.strip() == '---':
            story.append(Spacer(1, 3*mm))
            story.append(PageBreak())
            story.append(Spacer(1, 3*mm))

        # Bullets
        elif line.strip().startswith('- '):
            bullet = line.strip()[2:].strip()
            story.append(Paragraph(f"• {bullet}", styles['BulletPoint']))

        # Tabelas
        elif line.strip().startswith('|'):
            # Encontrar fim da tabela
            table_start = i
            table_end = i
            for j in range(i, len(lines)):
                if lines[j].strip().startswith('|'):
                    table_end = j
                else:
                    break

            # Processar tabela
            table_data = []
            for k in range(table_start, table_end + 1):
                row = lines[k].strip().split('|')[1:-1]
                table_data.append([cell.strip() for cell in row])

            if table_data:
                table = Table(table_data, colWidths=[40*mm, 80*mm, 40*mm])
                table.setStyle(TableStyle([
                    ('BACKGROUND', (0, 0), (-1, 0), COLOR_PRIMARY),
                    ('TEXTCOLOR', (0, 0), (-1, 0), white),
                    ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
                    ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
                    ('FONTSIZE', (0, 0), (-1, 0), 9),
                    ('FONTSIZE', (0, 1), (-1, -1), 9),
                    ('GRID', (0, 0), (-1, -1), 0.5, COLOR_TEXT),
                    ('ROWBACKGROUNDS', (0, 1), (-1, -1), [white, HexColor('#f7fafc')]),
                    ('TOPPADDING', (0, 0), (-1, -1), 5),
                    ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
                ]))
                story.append(table)
                story.append(Spacer(1, 6*mm))

        # Parágrafos normais
        elif line.strip():
            # Processar formatting simples
            text = line.strip()
            # Converter **text** para <b>text</b>
            text = text.replace('**', '</b>').replace('__', '</b>')
            text = text.replace('</b>', '<b>', 1)  # Primeira ocorrência
            # Escaper characters especiais
            if '<b>' in text or '<i>' in text:
                pass  # Já tem tags
            story.append(Paragraph(text, styles['Body']))

    # Gerar PDF
    doc.build(story)
    print(f"✅ PDF gerado com sucesso: {OUTPUT_FILE}")

if __name__ == "__main__":
    try:
        gerar_pdf()
    except Exception as e:
        print(f"❌ Erro: {e}")
        import traceback
        traceback.print_exc()
