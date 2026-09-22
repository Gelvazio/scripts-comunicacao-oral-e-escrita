#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Gerador de PDF para Apostila Comunicação 15h
Mantém layout original Markdown com conversão para PDF profissional
"""

from weasyprint import HTML, CSS
import os
from pathlib import Path

# Caminhos
BASE_DIR = r'C:\fontes\aulas-senai\MATERIAIS\RIO_DO_SUL_MAIS_TECH\INTRODUCAO_COMUNICACAO_ORAL_ESCRITA\CONTEUDO'
INPUT_FILE = os.path.join(BASE_DIR, 'APOSTILA-COMUNICACAO-15H.md')
HTML_FILE = os.path.join(BASE_DIR, 'apostila_temp.html')
OUTPUT_FILE = os.path.join(BASE_DIR, 'APOSTILA-COMUNICACAO-15H-REVISADO.pdf')

# Ler markdown
with open(INPUT_FILE, 'r', encoding='utf-8') as f:
    markdown_content = f.read()

# Converter Markdown básico para HTML mantendo estrutura original
def md_to_html(md_text):
    """Converte Markdown simples para HTML mantendo o layout original"""
    lines = md_text.split('\n')
    html_lines = []
    in_table = False
    table_lines = []

    for line in lines:
        # Títulos
        if line.startswith('# '):
            html_lines.append(f'<h1>{line[2:]}</h1>')
        elif line.startswith('## '):
            html_lines.append(f'<h2>{line[3:]}</h2>')
        elif line.startswith('### '):
            html_lines.append(f'<h3>{line[4:]}</h3>')
        # Linhas horizontais
        elif line.startswith('---'):
            html_lines.append('<hr/>')
        # Tabelas
        elif line.strip().startswith('|'):
            if not in_table:
                in_table = True
                table_lines = []
            table_lines.append(line)
            # Verificar se tabela terminou (linha vazia após tabela)
            if line.strip() == '':
                in_table = False
                html_lines.extend(convert_table(table_lines))
        elif in_table and line.strip() == '':
            in_table = False
            html_lines.extend(convert_table(table_lines))
            table_lines = []
        # Listas com bullets
        elif line.strip().startswith('- '):
            html_lines.append(f'<li>{line.strip()[2:]}</li>')
        # Parágrafos vazios
        elif line.strip() == '':
            html_lines.append('')
        # Parágrafos normais
        else:
            if line.strip():
                # Processar negrito e itálico
                line = line.replace('**', '<b>').replace('__', '<b>')
                line = line.replace('*', '<i>')
                line = line.replace('_', '<i>')
                html_lines.append(f'<p>{line}</p>')

    html_content = '\n'.join(html_lines)
    return html_content

def convert_table(table_lines):
    """Converte tabela Markdown para HTML"""
    if len(table_lines) < 3:
        return []

    html = ['<table>']

    # Header (primeira linha)
    header = table_lines[0].split('|')[1:-1]
    html.append('<thead><tr>')
    for cell in header:
        html.append(f'<th>{cell.strip()}</th>')
    html.append('</tr></thead>')

    # Body (demais linhas, pulando separador)
    html.append('<tbody>')
    for line in table_lines[2:]:
        if line.strip().startswith('|'):
            cells = line.split('|')[1:-1]
            html.append('<tr>')
            for cell in cells:
                html.append(f'<td>{cell.strip()}</td>')
            html.append('</tr>')
    html.append('</tbody>')
    html.append('</table>')

    return html

# CSS mantendo estilo simples e profissional
css_content = """
@page {
    size: A4;
    margin: 2cm;
    @bottom-center {
        content: counter(page) " de " counter(pages);
        font-size: 10px;
        color: #666;
    }
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    color: #2d3748;
    line-height: 1.6;
    font-size: 11pt;
}

h1 {
    font-size: 24pt;
    color: #1a202c;
    margin-top: 20pt;
    margin-bottom: 15pt;
    border-bottom: 2pt solid #667eea;
    padding-bottom: 10pt;
    page-break-after: avoid;
}

h2 {
    font-size: 16pt;
    color: #2d3748;
    margin-top: 15pt;
    margin-bottom: 10pt;
    font-weight: 600;
    page-break-after: avoid;
}

h3 {
    font-size: 13pt;
    color: #2d3748;
    margin-top: 12pt;
    margin-bottom: 8pt;
    font-weight: 600;
    page-break-after: avoid;
}

p {
    margin-bottom: 10pt;
    text-align: justify;
}

b, strong {
    font-weight: 700;
    color: #1a202c;
}

i, em {
    font-style: italic;
    color: #4a5568;
}

hr {
    border: none;
    border-top: 1pt solid #e2e8f0;
    margin: 20pt 0;
    page-break-before: always;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin: 15pt 0;
    font-size: 10pt;
    page-break-inside: avoid;
}

thead {
    background-color: #667eea;
    color: white;
}

th, td {
    border: 1pt solid #e2e8f0;
    padding: 8pt;
    text-align: left;
}

th {
    font-weight: 700;
    padding: 10pt;
}

tbody tr:nth-child(even) {
    background-color: #f7fafc;
}

tbody tr:hover {
    background-color: #edf2f7;
}

li {
    margin-left: 20pt;
    margin-bottom: 5pt;
    list-style-type: disc;
}

/* Caixa destacada (Fique de Olho, Dica, Cuidado) */
.box {
    background-color: #f7fafc;
    border-left: 4pt solid #667eea;
    padding: 12pt;
    margin: 15pt 0;
    page-break-inside: avoid;
}

.box-title {
    font-weight: 700;
    color: #667eea;
    margin-bottom: 8pt;
}

/* Síntese do encontro */
.sintese {
    background-color: #fffaed;
    border-left: 4pt solid #d4af37;
    padding: 12pt;
    margin: 15pt 0;
    page-break-inside: avoid;
}

.sintese-title {
    font-weight: 700;
    color: #b8860b;
    margin-bottom: 8pt;
}
"""

# Gerar HTML
html_body = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Apostila Comunicação Oral e Escrita</title>
    <style>
        {css_content}
    </style>
</head>
<body>
    {md_to_html(markdown_content)}
</body>
</html>
"""

# Salvar HTML temporário
with open(HTML_FILE, 'w', encoding='utf-8') as f:
    f.write(html_body)

# Converter para PDF
try:
    HTML(HTML_FILE).write_pdf(OUTPUT_FILE)
    print(f"✅ PDF gerado com sucesso: {OUTPUT_FILE}")

    # Remover HTML temporário
    if os.path.exists(HTML_FILE):
        os.remove(HTML_FILE)
        print(f"✅ Arquivo temporário removido")
except Exception as e:
    print(f"❌ Erro ao gerar PDF: {e}")
    import traceback
    traceback.print_exc()
