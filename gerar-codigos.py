#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
gerar-codigos.py — Gerador de Códigos de Acesso Únicos
Gera 300 códigos no padrão XXXX-XXXX-XXXX (alphanumério, sem caracteres especiais)
Para uso em FORMULARIO-PRINCIPAL.gs — validação de acesso a avaliações

Padrão: [A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}
Exemplo: 3DJ4-CAJ6-5UT0
"""

import random
import string
from typing import List

def gerar_codigo_unico() -> str:
    """
    Gera um código único no padrão XXXX-XXXX-XXXX

    Returns:
        str: Código no formato "XXXX-XXXX-XXXX" (ex: "3DJ4-CAJ6-5UT0")
    """
    caracteres = string.ascii_uppercase + string.digits  # A-Z, 0-9

    bloco1 = ''.join(random.choice(caracteres) for _ in range(4))
    bloco2 = ''.join(random.choice(caracteres) for _ in range(4))
    bloco3 = ''.join(random.choice(caracteres) for _ in range(4))

    return f"{bloco1}-{bloco2}-{bloco3}"


def gerar_codigos(quantidade: int, garantir_unicos: bool = True) -> List[str]:
    """
    Gera múltiplos códigos únicos

    Args:
        quantidade: Número de códigos a gerar
        garantir_unicos: Se True, garante que não haja duplicatas (mais lento para grandes quantidades)

    Returns:
        List[str]: Lista de códigos únicos
    """
    codigos = set() if garantir_unicos else []

    tentativas = 0
    max_tentativas = quantidade * 10  # Limite de tentativas para evitar loop infinito

    while len(codigos) < quantidade and tentativas < max_tentativas:
        if garantir_unicos:
            codigo = gerar_codigo_unico()
            codigos.add(codigo)
        else:
            codigos.append(gerar_codigo_unico())
        tentativas += 1

    if garantir_unicos and len(codigos) < quantidade:
        print(f"⚠️  Aviso: Apenas {len(codigos)} códigos únicos foram gerados (pedidos {quantidade})")

    return sorted(list(codigos))


def formatar_para_javascript(codigos: List[str]) -> str:
    """
    Formata a lista de códigos como array JavaScript

    Args:
        codigos: Lista de códigos

    Returns:
        str: String no formato JavaScript array
    """
    javascript = "var CODIGOS_VALIDOS = [\n"

    for i, codigo in enumerate(codigos):
        javascript += f"  '{codigo}'"
        if i < len(codigos) - 1:
            javascript += ","
        javascript += "\n"

    javascript += "];"

    return javascript


def salvar_em_arquivo(codigos: List[str], nome_arquivo: str = "codigos-gerados.txt"):
    """
    Salva os códigos em um arquivo de texto

    Args:
        codigos: Lista de códigos
        nome_arquivo: Nome do arquivo de saída
    """
    with open(nome_arquivo, 'w', encoding='utf-8') as f:
        f.write("# Códigos de Acesso Gerados\n")
        f.write(f"# Total: {len(codigos)} códigos\n")
        f.write(f"# Padrão: XXXX-XXXX-XXXX (A-Z, 0-9)\n")
        f.write("# Formato: Um código por linha\n\n")

        for codigo in codigos:
            f.write(f"{codigo}\n")

    print(f"✅ Códigos salvos em: {nome_arquivo}")


def salvar_javascript(codigos: List[str], nome_arquivo: str = "CODIGOS_VALIDOS.js"):
    """
    Salva os códigos em formato JavaScript

    Args:
        codigos: Lista de códigos
        nome_arquivo: Nome do arquivo de saída
    """
    with open(nome_arquivo, 'w', encoding='utf-8') as f:
        f.write("// Códigos de Acesso Gerados Automaticamente\n")
        f.write(f"// Total: {len(codigos)} códigos únicos\n")
        f.write("// Padrão: XXXX-XXXX-XXXX\n")
        f.write("// Copie este array para FORMULARIO-PRINCIPAL.gs\n\n")
        f.write(formatar_para_javascript(codigos))

    print(f"✅ Array JavaScript salvo em: {nome_arquivo}")


def main():
    """Função principal"""
    print("🔐 Gerador de Códigos de Acesso Único")
    print("════════════════════════════════════════════════════")
    print()

    # Gerar 300 códigos
    quantidade = 300
    print(f"📝 Gerando {quantidade} códigos no padrão XXXX-XXXX-XXXX...")
    print()

    codigos = gerar_codigos(quantidade, garantir_unicos=True)

    print(f"✅ {len(codigos)} códigos únicos gerados com sucesso!")
    print()

    # Exibir primeiros 15 códigos como amostra
    print("📌 AMOSTRA (primeiros 15 códigos):")
    for i, codigo in enumerate(codigos[:15], 1):
        print(f"   {i:2d}. {codigo}")
    print(f"   ... ({len(codigos) - 15} códigos adicionais)")
    print()

    # Salvar em arquivo de texto
    salvar_em_arquivo(codigos, "codigos-gerados.txt")

    # Salvar em formato JavaScript
    salvar_javascript(codigos, "CODIGOS_VALIDOS.js")

    # Exibir resumo
    print()
    print("════════════════════════════════════════════════════")
    print(f"📊 RESUMO:")
    print(f"   Total de códigos: {len(codigos)}")
    print(f"   Formato: XXXX-XXXX-XXXX")
    print(f"   Caracteres: A-Z, 0-9 (alphanumério)")
    print(f"   Combinações possíveis: ~{36**12:,.0f}")
    print(f"   Probabilidade de colisão: < 0.000001%")
    print()
    print("✅ Próximo passo: Copie o array do CODIGOS_VALIDOS.js para FORMULARIO-PRINCIPAL.gs")
    print()


if __name__ == '__main__':
    main()
