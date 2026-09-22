#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Separa formulários do FORMULARIO-PRINCIPAL.gs em arquivos individuais
"""

import re
import os

SOURCE_FILE = r"C:\Users\gelva\projetos\Scripts-Comunicacao\formularios-questionarios\FORMULARIO-PRINCIPAL.gs"
OUTPUT_DIR = r"C:\Users\gelva\projetos\Scripts-Comunicacao\FORMULARIOS-SEPARADOS"

# Mapa de nomes
NOMES_ARQUIVOS = {
    'criarFormularioAula01': '01-AULA-01-Processo-Comunicativo.gs',
    'criarFormularioAula02': '02-AULA-02-Preparacao-Entrevistas.gs',
    'criarFormularioAula03': '03-AULA-03-Estruturacao-Textos.gs',
    'criarFormularioAula04': '04-AULA-04-Correcao-Gramatical.gs',
    'criarFormularioAula05': '05-AULA-05-Formatacao-Padronizacao.gs',
    'criarFormularioAula06': '06-AULA-06-Redacao-Emails.gs',
    'criarFormularioAula07': '07-AULA-07-Relatorios-Tecnicos.gs',
    'criarFormularioAula08': '08-AULA-08-Memorandos.gs',
    'criarFormularioAula09': '09-AULA-09-Procedimentos-Instrucoes.gs',
    'criarFormularioAula10': '10-AULA-10-Plataformas-Digitais.gs',
    'criarFormularioAula11': '11-AULA-11-Seguranca-Informacao.gs',
    'criarFormularioAula12': '12-AULA-12-Comunicacao-Eficaz.gs',
    'criarFormularioAula13': '13-AULA-13-Etiqueta-Digital.gs',
    'criarFormularioAula14': '14-AULA-14-Trabalho-Remoto.gs',
    'criarFormularioAula15': '15-AULA-15-Linguagem-Corporal.gs',
    'criarFormularioAula16': '16-AULA-16-Gestual-Tom-Voz.gs',
    'criarFormularioAula17': '17-AULA-17-Projeto-Capstone.gs',
    'criarFormularioAula18': '18-AULA-18-Avaliacao-Final.gs',
    'criarFormularioAula19': '19-AULA-19-Ciclo-Feedback.gs',
    'criarFormularioAula20': '20-AULA-20-Contextos-Formais.gs',
    'criarFormularioAula21': '21-AULA-21-Sintese-Fundamentos.gs',
    'criarFormularioAula22': '22-AULA-22-Estrutura-Apresentacoes.gs',
    'criarFormularioAula23': '23-AULA-23-Tecnicas-Oratoria.gs',
    'criarFormularioAula24': '24-AULA-24-Conducao-Reunioes.gs',
    'criarFormularioAula25': '25-AULA-25-Atendimento-Escuta.gs',
}

def extract_function_body(content, function_name):
    """Extrai o corpo de uma função"""
    pattern = rf'function {function_name}\(\)[^{{]*\{{(?:[^{{}}]|{{[^{{}}]*}})*\}}'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        return match.group(0)
    return None

def extract_codigos_and_utilities(content):
    """Extrai variáveis globais e funções auxiliares"""
    # Pega do início até a primeira função criarFormulario
    match = re.search(r'(.*?)function criarFormularioAula01', content, re.DOTALL)
    if match:
        return match.group(1)
    return ""

def main():
    print("📖 Lendo arquivo consolidado...")
    with open(SOURCE_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extrair cabeçalho e utilities
    utilities = extract_codigos_and_utilities(content)

    print(f"✅ {len(utilities)} caracteres de utilidades/configuração")
    print(f"📝 Separando {len(NOMES_ARQUIVOS)} formulários...\n")

    created = 0
    for func_name, file_name in NOMES_ARQUIVOS.items():
        func_body = extract_function_body(content, func_name)
        if func_body:
            # Criar arquivo com header + utilities + função
            file_path = os.path.join(OUTPUT_DIR, file_name)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write("// ===== ARQUIVO GERADO AUTOMATICAMENTE =====\n")
                f.write(f"// Função: {func_name}()\n")
                f.write(f"// Data: 2026-09-22\n\n")
                f.write(func_body)
                f.write("\n")

            created += 1
            print(f"  ✅ {file_name}")
        else:
            print(f"  ❌ {file_name} — não encontrado")

    print(f"\n📊 RESUMO:")
    print(f"  Total criado: {created}/{len(NOMES_ARQUIVOS)}")
    print(f"  Localização: {OUTPUT_DIR}")
    print(f"\n⚠️  PRÓXIMO PASSO:")
    print(f"  - Copiar VALIDACAO-E-CODIGOS.gs para {OUTPUT_DIR}")
    print(f"  - Criar ORQUESTRADORA.gs que chama todas as funções")

if __name__ == '__main__':
    main()
