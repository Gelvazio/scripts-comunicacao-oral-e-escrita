/**
 * CODIGOS.gs
 * Lista de codigos validos para acesso as avaliacoes
 * Introducao a Comunicacao Oral e Escrita
 * Total: 15 codigos para 15 alunos
 */

var CODIGOS_VALIDOS = [
  '3DJ4-CAJ6-5UT0',
  '3S3N-FE19-YZ21',
  '6MEF-HJC4-V6CF',
  'B9YR-P262-FEAG',
  'DGYM-KQKX-UDJE',
  'EYB9-KYE3-RHB4',
  'FG06-9HSW-DHG5',
  'GQCM-D54R-B7UM',
  'JHQ7-H2J9-JYEV',
  'KS0S-B515-HM6S',
  'PUUM-WNS5-RM0W',
  'SS5X-JBNV-PZUJ',
  'TJ48-DG71-BYQP',
  'VR44-4441-ESKA',
  'YQW0-5V51-X0Z3'
];

function validarCodigo(codigo) {
  if (!codigo || codigo.trim() === '') return false;
  return CODIGOS_VALIDOS.indexOf(codigo.toUpperCase().trim()) !== -1;
}
