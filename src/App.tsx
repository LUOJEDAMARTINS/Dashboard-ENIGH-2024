import React, { useState, useMemo, useEffect, useCallback } from 'react';

// ============================================================================
// ÍCONES SVG INLINE NATIVOS (ZERO DEPENDÊNCIAS EXTERNAS)
// ============================================================================

const SvgIcon = ({ children, className = 'w-4 h-4', viewBox = '0 0 24 24' }) => (
  <svg
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const IconBarChart = ({ className }) => (
  <SvgIcon className={className}>
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </SvgIcon>
);

const IconDownload = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </SvgIcon>
);

const IconRefresh = ({ className }) => (
  <SvgIcon className={className}>
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </SvgIcon>
);

const IconGlobe = ({ className }) => (
  <SvgIcon className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </SvgIcon>
);

const IconCalendar = ({ className }) => (
  <SvgIcon className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </SvgIcon>
);

const IconSliders = ({ className }) => (
  <SvgIcon className={className}>
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </SvgIcon>
);

const IconCoins = ({ className }) => (
  <SvgIcon className={className}>
    <circle cx="8" cy="8" r="6" />
    <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
    <path d="M7 6h1v4" />
    <path d="m16.71 13.88.7.71-2.82 2.82" />
  </SvgIcon>
);

const IconLayers = ({ className }) => (
  <SvgIcon className={className}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </SvgIcon>
);

const IconUtensils = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </SvgIcon>
);

const IconMapPin = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </SvgIcon>
);

const IconBriefcase = ({ className }) => (
  <SvgIcon className={className}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </SvgIcon>
);

const IconDollar = ({ className }) => (
  <SvgIcon className={className}>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </SvgIcon>
);

const IconTrendingUp = ({ className }) => (
  <SvgIcon className={className}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </SvgIcon>
);

const IconTrendingDown = ({ className }) => (
  <SvgIcon className={className}>
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
    <polyline points="17 18 23 18 23 12" />
  </SvgIcon>
);

const IconPieChart = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </SvgIcon>
);

const IconHome = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </SvgIcon>
);

const IconBuilding = ({ className }) => (
  <SvgIcon className={className}>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M12 6h.01" />
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M16 10h.01" />
    <path d="M16 14h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
  </SvgIcon>
);

const IconSearch = ({ className }) => (
  <SvgIcon className={className}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </SvgIcon>
);

const IconArrowUpDown = ({ className }) => (
  <SvgIcon className={className}>
    <path d="m21 16-4 4-4-4" />
    <path d="M17 20V4" />
    <path d="m3 8 4-4 4 4" />
    <path d="M7 4v16" />
  </SvgIcon>
);

const IconInfo = ({ className }) => (
  <SvgIcon className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </SvgIcon>
);

const IconCheckCircle = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </SvgIcon>
);

const IconSparkles = ({ className }) => (
  <SvgIcon className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </SvgIcon>
);

const IconFileSpreadsheet = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="16" y2="17" />
    <line x1="10" y1="9" x2="10" y2="9.01" />
  </SvgIcon>
);

// ============================================================================
// BASE DE DADOS OFICIAL ESTRUTURADA — ENIGH 2024 (INEGI - MÉXICO)
// Valores oficiais em Pesos Mexicanos (MXN) constantes de 2024 (média trimestral)
// ============================================================================

const YEARS = ['2016', '2018', '2020', '2022', '2024'];
const FALLBACK_MXN_TO_BRL = 0.3057;

const PANORAMA_GASTO = {
  total_2024: 72705,
  corrente_total_2024: 61309,
  corrente_monetario_2024: 47674,
  corrente_nao_monetario_2024: 13635,
  erogacoes_financeiras_2024: 11396,
  composicao_historica_pct: {
    '2016': { corrente: 85.7, financeiras: 14.3 },
    '2018': { corrente: 86.0, financeiras: 14.0 },
    '2020': { corrente: 83.2, financeiras: 16.8 },
    '2022': { corrente: 84.5, financeiras: 15.5 },
    '2024': { corrente: 84.3, financeiras: 15.7 }
  },
  monetario_total_serie: {
    '2016': 42453,
    '2018': 43262,
    '2020': 37693,
    '2022': 44166,
    '2024': 47674
  },
  monetario_var_periodo: {
    '2016': null,
    '2018': 1.9,
    '2020': -12.9,
    '2022': 17.2,
    '2024': 7.9
  }
};

const GRANDES_GRUPOS = [
  {
    id: 'alimentos',
    nome: 'Alimentos, bebidas e tabaco',
    cor: '#0D9488',
    valores: { '2016': 14921, '2018': 15236, '2020': 14341, '2022': 16642, '2024': 17982 },
    participacao: { '2016': 35.1, '2018': 35.2, '2020': 38.0, '2022': 37.7, '2024': 37.7 },
    var_22_24: 8.1,
    insight:
      'Principal destino do orçamento familiar (37,7% do gasto monetário). Mesmo após a recomposição de renda pós-2020, manteve participação 2,6 p.p. acima de 2016, impulsionado pela retomada das refeições fora do lar.'
  },
  {
    id: 'transporte',
    nome: 'Transporte e comunicações',
    cor: '#0B1F3A',
    valores: { '2016': 8208, '2018': 8632, '2020': 6997, '2022': 8525, '2024': 9319 },
    participacao: { '2016': 19.3, '2018': 20.0, '2020': 18.6, '2022': 19.3, '2024': 19.5 },
    var_22_24: 9.3,
    insight:
      'Segunda maior rubrica (19,5%). Sofreu retração de 18,9% em 2020 com o isolamento social, mas superou o patamar pré-pandemia em 2024 (+9,3% sobre 2022) com mobilidade e conectividade.'
  },
  {
    id: 'educacao',
    nome: 'Educação e lazer',
    cor: '#2563EB',
    valores: { '2016': 5282, '2018': 5240, '2020': 2895, '2022': 4334, '2024': 4593 },
    participacao: { '2016': 12.4, '2018': 12.1, '2020': 7.7, '2022': 9.8, '2024': 9.6 },
    var_22_24: 6.0,
    insight:
      'Categoria mais impactada na crise sanitária (-44,8% em 2020). Apesar do crescimento de 49,7% em 2022 e +6,0% em 2024, ainda permanece abaixo do nível real registrado em 2016 (MX$ 5.282).'
  },
  {
    id: 'moradia',
    nome: 'Moradia e serviços',
    cor: '#4F46E5',
    valores: { '2016': 4043, '2018': 4126, '2020': 4140, '2022': 4191, '2024': 4346 },
    participacao: { '2016': 9.5, '2018': 9.5, '2020': 11.0, '2022': 9.5, '2024': 9.1 },
    var_22_24: 3.7,
    insight:
      'Apresenta a maior estabilidade real da série histórica (baixa elasticidade-renda). Inclui aluguel efetivo, energia elétrica, água e gás (aluguel imputado de imóvel próprio compõe o gasto não monetário).'
  },
  {
    id: 'cuidados',
    nome: 'Cuidados pessoais',
    cor: '#D97706',
    valores: { '2016': 3138, '2018': 3203, '2020': 3018, '2022': 3399, '2024': 3709 },
    participacao: { '2016': 7.4, '2018': 7.4, '2020': 8.0, '2022': 7.7, '2024': 7.8 },
    var_22_24: 9.1,
    insight:
      'Cresceu 9,1% entre 2022 e 2024, consolidando expansão contínua de 18,2% frente a 2016. Reflete maior demanda por higiene, cosméticos e serviços pessoais nos centros urbanos.'
  },
  {
    id: 'utensilios',
    nome: 'Utensílios domésticos e limpeza',
    cor: '#059669',
    valores: { '2016': 2505, '2018': 2539, '2020': 2468, '2022': 2687, '2024': 3014 },
    participacao: { '2016': 5.9, '2018': 5.9, '2020': 6.5, '2022': 6.1, '2024': 6.3 },
    var_22_24: 12.2,
    insight:
      'Maior taxa de crescimento percentual entre todos os 9 grandes grupos no biênio 2022–2024 (+12,2%), refletindo renovação de eletrodomésticos, móveis e produtos de limpeza do lar.'
  },
  {
    id: 'vestuario',
    nome: 'Vestuário e calçado',
    cor: '#E11D48',
    valores: { '2016': 1963, '2018': 1939, '2020': 1125, '2022': 1683, '2024': 1830 },
    participacao: { '2016': 4.6, '2018': 4.5, '2020': 3.0, '2022': 3.8, '2024': 3.8 },
    var_22_24: 8.7,
    insight:
      'Despesa discricionária altamente sensível ao ciclo econômico: caiu 42,0% em 2020 e avançou +8,7% no último biênio, mantendo fatia estável de 3,8% do orçamento monetário.'
  },
  {
    id: 'saude',
    nome: 'Saúde',
    cor: '#7C3AED',
    valores: { '2016': 1146, '2018': 1136, '2020': 1595, '2022': 1487, '2024': 1605 },
    participacao: { '2016': 2.7, '2018': 2.6, '2020': 4.2, '2022': 3.4, '2024': 3.4 },
    var_22_24: 8.0,
    insight:
      'Deu um salto estrutural de +40,5% em 2020 (medicamentos e consultas privadas) e permanece em patamar 40% superior ao de 2016 (MX$ 1.605 em 2024 vs. MX$ 1.146 em 2016).'
  },
  {
    id: 'transferencias',
    nome: 'Transferências e outros gastos',
    cor: '#64748B',
    valores: { '2016': 1246, '2018': 1212, '2020': 1115, '2022': 1217, '2024': 1276 },
    participacao: { '2016': 2.9, '2018': 2.8, '2020': 3.0, '2022': 2.8, '2024': 2.7 },
    var_22_24: 4.8,
    insight:
      'Inclui ajuda financeira a parentes e terceiros, doações, taxas de documentos públicos (passaporte, certidões) e presentes para pessoas fora do domicílio.'
  }
];

const ALIMENTACAO_MACRO = {
  total: { '2016': 14921, '2018': 15236, '2020': 14341, '2022': 16642, '2024': 17982 },
  dentro: { '2016': 11560, '2018': 11680, '2020': 12352, '2022': 13296, '2024': 14004 },
  fora: { '2016': 3276, '2018': 3477, '2020': 1915, '2022': 3268, '2024': 3896 },
  tabaco: { '2016': 85, '2018': 79, '2020': 74, '2022': 79, '2024': 82 },
  var_22_24: { total: 8.1, dentro: 5.3, fora: 19.2, tabaco: 4.2 }
};

const SUBGRUPOS_DENTRO_DOMICILIO = [
  { id: 'carnes', nome: 'Carnes', valores: { '2016': 2688, '2018': 2686, '2020': 2826, '2022': 3096, '2024': 3247 }, var_22_24: 4.9 },
  { id: 'cereais', nome: 'Cereais', valores: { '2016': 2066, '2018': 2077, '2020': 2079, '2022': 2298, '2024': 2254 }, var_22_24: -1.9 },
  { id: 'outros', nome: 'Outros alimentos diversos', valores: { '2016': 1287, '2018': 1404, '2020': 1700, '2022': 1814, '2024': 2058 }, var_22_24: 13.5 },
  { id: 'verduras', nome: 'Verduras, legumes, leguminosas e sementes', valores: { '2016': 1326, '2018': 1361, '2020': 1465, '2022': 1486, '2024': 1564 }, var_22_24: 5.3 },
  { id: 'leite', nome: 'Leite e derivados', valores: { '2016': 1245, '2018': 1178, '2020': 1126, '2022': 1181, '2024': 1236 }, var_22_24: 4.6 },
  { id: 'bebidas', nome: 'Bebidas alcoólicas e não alcoólicas', valores: { '2016': 1034, '2018': 1027, '2020': 1076, '2022': 1130, '2024': 1192 }, var_22_24: 5.6 },
  { id: 'frutas', nome: 'Frutas', valores: { '2016': 535, '2018': 545, '2020': 581, '2022': 605, '2024': 698 }, var_22_24: 15.3 },
  { id: 'ovos', nome: 'Ovos', valores: { '2016': 404, '2018': 424, '2020': 470, '2022': 569, '2024': 584 }, var_22_24: 2.8 },
  { id: 'pescados', nome: 'Pescados e frutos do mar', valores: { '2016': 282, '2018': 281, '2020': 309, '2022': 298, '2024': 327 }, var_22_24: 10.0 },
  { id: 'tuberculos', nome: 'Tubérculos', valores: { '2016': 165, '2018': 187, '2020': 185, '2022': 219, '2024': 232 }, var_22_24: 6.1 },
  { id: 'oleos', nome: 'Óleos e gorduras', valores: { '2016': 150, '2018': 156, '2020': 154, '2022': 222, '2024': 186 }, var_22_24: -16.2 },
  { id: 'cafe', nome: 'Café, chá e chocolate', valores: { '2016': 124, '2018': 117, '2020': 122, '2022': 134, '2024': 150 }, var_22_24: 12.0 },
  { id: 'especiarias', nome: 'Especiarias e temperos', valores: { '2016': 118, '2018': 112, '2020': 114, '2022': 122, '2024': 145 }, var_22_24: 19.3 },
  { id: 'acucar', nome: 'Açúcar e mel', valores: { '2016': 136, '2018': 126, '2020': 144, '2022': 124, '2024': 129 }, var_22_24: 4.1 }
];

const DECIS_DATA = [
  { decil: 'I', renda: { '2016': 12312, '2018': 12359, '2020': 12524, '2022': 14820, '2024': 16795 }, gasto: { '2016': 13732, '2018': 13635, '2020': 14972, '2022': 16270, '2024': 16955 } },
  { decil: 'II', renda: { '2016': 21420, '2018': 21832, '2020': 21250, '2022': 24778, '2024': 28297 }, gasto: { '2016': 19014, '2018': 19377, '2020': 18691, '2022': 21239, '2024': 23334 } },
  { decil: 'III', renda: { '2016': 28524, '2018': 29051, '2020': 28070, '2022': 32270, '2024': 36845 }, gasto: { '2016': 22938, '2018': 23492, '2020': 22386, '2022': 25790, '2024': 28330 } },
  { decil: 'IV', renda: { '2016': 35517, '2018': 36185, '2020': 34729, '2022': 39726, '2024': 45245 }, gasto: { '2016': 27261, '2018': 27653, '2020': 25857, '2022': 30149, '2024': 32817 } },
  { decil: 'V', renda: { '2016': 43444, '2018': 43807, '2020': 42049, '2022': 47897, '2024': 54308 }, gasto: { '2016': 31704, '2018': 32679, '2020': 29417, '2022': 34039, '2024': 37470 } },
  { decil: 'VI', renda: { '2016': 52534, '2018': 52799, '2020': 50544, '2022': 57382, '2024': 64600 }, gasto: { '2016': 35974, '2018': 37124, '2020': 33444, '2022': 39194, '2024': 43026 } },
  { decil: 'VII', renda: { '2016': 63991, '2018': 64074, '2020': 61335, '2022': 68972, '2024': 77451 }, gasto: { '2016': 42724, '2018': 43379, '2020': 38581, '2022': 44372, '2024': 48844 } },
  { decil: 'VIII', renda: { '2016': 80527, '2018': 79832, '2020': 76366, '2022': 84801, '2024': 95291 }, gasto: { '2016': 49851, '2018': 51521, '2020': 44702, '2022': 52738, '2024': 57488 } },
  { decil: 'IX', renda: { '2016': 108669, '2018': 106583, '2020': 101367, '2022': 111468, '2024': 123712 }, gasto: { '2016': 64625, '2018': 65323, '2020': 56129, '2022': 64877, '2024': 70492 } },
  { decil: 'X', renda: { '2016': 255530, '2018': 226665, '2020': 205769, '2022': 221792, '2024': 236095 }, gasto: { '2016': 116707, '2018': 118435, '2020': 92753, '2022': 112988, '2024': 117988 } }
];

const ESTADOS_TOP5 = [
  { estado: 'Ciudad de México', sigla: 'CDMX', gasto2024: 66383, gasto2022: 65089, alimentacaoPct: 36.7 },
  { estado: 'Querétaro', sigla: 'QRO', gasto2024: 61593, gasto2022: 53850, alimentacaoPct: 34.8 },
  { estado: 'Nuevo León', sigla: 'NL', gasto2024: 59192, gasto2022: 53483, alimentacaoPct: null },
  { estado: 'Jalisco', sigla: 'JAL', gasto2024: 56015, gasto2022: 49392, alimentacaoPct: null },
  { estado: 'Baja California Sur', sigla: 'BCS', gasto2024: 55939, gasto2022: 53265, alimentacaoPct: null }
];

const ESTADOS_BOTTOM5 = [
  { estado: 'Chiapas', sigla: 'CHIS', gasto2024: 27118, gasto2022: 28670, alimentacaoPct: 46.5 },
  { estado: 'Oaxaca', sigla: 'OAX', gasto2024: 34107, gasto2022: 29393, alimentacaoPct: 40.4 },
  { estado: 'Veracruz', sigla: 'VER', gasto2024: 34461, gasto2022: 32387, alimentacaoPct: null },
  { estado: 'Guerrero', sigla: 'GRO', gasto2024: 34566, gasto2022: 33729, alimentacaoPct: null },
  { estado: 'Hidalgo', sigla: 'HGO', gasto2024: 36414, gasto2022: 37668, alimentacaoPct: null }
];

const LEI_ENGEL_ESTADOS = [
  {
    estado: 'Querétaro (Menor peso alimentar)',
    perfil: 'Alta Renda / Industrial',
    gastoMonetario: 61593,
    alimentos: 34.8,
    transporte: 20.3,
    educacao: 11.8,
    moradia: 9.7,
    cuidados: 7.6,
    utensilios: 5.9,
    vestuario: 3.9,
    saude: 3.5,
    outros: 2.6
  },
  {
    estado: 'Ciudad de México (Maior gasto total)',
    perfil: 'Metrópole / Serviços',
    gastoMonetario: 66383,
    alimentos: 36.7,
    transporte: 15.7,
    educacao: 11.3,
    moradia: 11.9,
    cuidados: 7.3,
    utensilios: 6.5,
    vestuario: 4.2,
    saude: 3.7,
    outros: 2.6
  },
  {
    estado: 'Oaxaca (Sul / Renda baixa)',
    perfil: 'Predomínio Rural',
    gastoMonetario: 34107,
    alimentos: 40.4,
    transporte: 17.5,
    educacao: 7.2,
    moradia: 8.6,
    cuidados: 5.9,
    utensilios: 6.7,
    vestuario: 6.3,
    saude: 4.5,
    outros: 2.9
  },
  {
    estado: 'Chiapas (Maior peso alimentar)',
    perfil: 'Menor Renda Nacional',
    gastoMonetario: 27118,
    alimentos: 46.5,
    transporte: 15.7,
    educacao: 6.2,
    moradia: 7.1,
    cuidados: 8.1,
    utensilios: 6.9,
    vestuario: 4.2,
    saude: 3.6,
    outros: 1.9
  }
];

const URBANO_RURAL_DESTAQUES = [
  { estado: 'Querétaro', grupo: 'Top Gasto', urbano: 66762, rural: 40236 },
  { estado: 'Ciudad de México', grupo: 'Top Gasto', urbano: 66506, rural: 43999 },
  { estado: 'Nuevo León', grupo: 'Top Gasto', urbano: 59957, rural: 39131 },
  { estado: 'Jalisco', grupo: 'Top Gasto', urbano: 57821, rural: 42019 },
  { estado: 'Baja California Sur', grupo: 'Top Gasto', urbano: 57541, rural: 39912 },
  { estado: 'Hidalgo', grupo: 'Menor Gasto', urbano: 41824, rural: 29899 },
  { estado: 'Tlaxcala', grupo: 'Menor Gasto', urbano: 41318, rural: 33731 },
  { estado: 'Guerrero', grupo: 'Menor Gasto', urbano: 39318, rural: 27082 },
  { estado: 'Veracruz', grupo: 'Menor Gasto', urbano: 38929, rural: 26697 },
  { estado: 'Chiapas', grupo: 'Menor Gasto', urbano: 32952, rural: 20913 }
];

// ============================================================================
// UTILITÁRIOS DE FORMATAÇÃO MONETÁRIA (MXN E BRL)
// ============================================================================

const formatMXN = (valorTrimestral, periodicidade = 'quarterly', compact = false) => {
  if (valorTrimestral === null || valorTrimestral === undefined) return '—';
  const val = periodicidade === 'monthly' ? valorTrimestral / 3 : valorTrimestral;
  if (compact && Math.abs(val) >= 1000) {
    return `MX$ ${(val / 1000).toFixed(1).replace('.', ',')}k`;
  }
  return `MX$ ${Math.round(val).toLocaleString('pt-BR')}`;
};

const formatBRL = (valorTrimestral, periodicidade = 'quarterly', rate = FALLBACK_MXN_TO_BRL, compact = false) => {
  if (valorTrimestral === null || valorTrimestral === undefined) return '—';
  const val = (periodicidade === 'monthly' ? valorTrimestral / 3 : valorTrimestral) * rate;
  if (compact) {
    if (Math.abs(val) >= 1000) {
      return `R$ ${(val / 1000).toFixed(1).replace('.', ',')}k`;
    }
    return `R$ ${Math.round(val).toLocaleString('pt-BR')}`;
  }
  return `R$ ${val.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
};

const formatCompactChart = (valorTrimestral, periodicidade, currencyMode, rate) => {
  if (currencyMode === 'brl') {
    return formatBRL(valorTrimestral, periodicidade, rate, true);
  }
  return formatMXN(valorTrimestral, periodicidade, true);
};

const formatPct = (val, showPlus = false) => {
  if (val === null || val === undefined) return '—';
  const sign = showPlus && val > 0 ? '+' : '';
  return `${sign}${val.toFixed(1).replace('.', ',')}%`;
};

// Componente reutilizável para exibição Dual (MXN + BRL), Somente MXN ou Somente BRL
const MoneyDisplay = ({
  value,
  periodicity,
  currencyMode,
  rate,
  variant = 'card', // 'kpi' | 'card' | 'row' | 'inline'
  accentClass = 'text-[#0B1F3A]'
}) => {
  const mxnText = formatMXN(value, periodicity, false);
  const brlText = formatBRL(value, periodicity, rate, false);

  if (currencyMode === 'mxn') {
    if (variant === 'kpi') {
      return <div className={`text-2xl font-extrabold ${accentClass}`}>{mxnText}</div>;
    }
    if (variant === 'card') {
      return <div className={`text-xl sm:text-2xl font-extrabold ${accentClass}`}>{mxnText}</div>;
    }
    return <span className={`font-extrabold ${accentClass}`}>{mxnText}</span>;
  }

  if (currencyMode === 'brl') {
    if (variant === 'kpi') {
      return <div className="text-2xl font-extrabold text-emerald-700">{brlText}</div>;
    }
    if (variant === 'card') {
      return <div className="text-xl sm:text-2xl font-extrabold text-emerald-700">{brlText}</div>;
    }
    return <span className="font-extrabold text-emerald-700">{brlText}</span>;
  }

  // Padrão: 'dual' (MXN oficial em destaque + equivalente convertido em BRL)
  if (variant === 'kpi') {
    return (
      <div>
        <div className={`text-2xl font-extrabold leading-tight ${accentClass}`}>{mxnText}</div>
        <div className="text-xs sm:text-sm font-bold text-emerald-700 mt-0.5">
          ≈ {brlText}
        </div>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div>
        <div className={`text-xl sm:text-2xl font-extrabold leading-tight ${accentClass}`}>{mxnText}</div>
        <div className="text-xs sm:text-sm font-bold text-emerald-700 mt-0.5">
          ≈ {brlText}
        </div>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <span className="inline-flex flex-wrap items-baseline gap-1.5">
        <strong className={accentClass}>{mxnText}</strong>
        <span className="text-[11px] font-bold text-emerald-700">(≈ {brlText})</span>
      </span>
    );
  }

  // variant === 'row' (tabelas e barras)
  return (
    <div className="text-right leading-tight">
      <div className={`text-xs sm:text-sm font-extrabold ${accentClass}`}>{mxnText}</div>
      <div className="text-[11px] font-semibold text-emerald-700">≈ {brlText}</div>
    </div>
  );
};

// ============================================================================
// COMPONENTE PRINCIPAL DO DASHBOARD
// ============================================================================

export default function App() {
  // Estados de filtro e navegação
  const [selectedYear, setSelectedYear] = useState('2024');
  const [periodicity, setPeriodicity] = useState('quarterly'); // 'quarterly' | 'monthly'
  const [currencyMode, setCurrencyMode] = useState('dual'); // 'dual' | 'mxn' | 'brl'
  const [activeTab, setActiveTab] = useState('visao-geral');
  const [selectedGroupId, setSelectedGroupId] = useState('alimentos');
  const [foodSearch, setFoodSearch] = useState('');
  const [foodSort, setFoodSort] = useState('valor_desc');
  const [hoveredDecil, setHoveredDecil] = useState(null);
  const [hoveredFoodYear, setHoveredFoodYear] = useState(null);
  const [csvFeedback, setCsvFeedback] = useState(false);

  // Estados da API de Câmbio (MXN -> BRL)
  const [exchangeRate, setExchangeRate] = useState(FALLBACK_MXN_TO_BRL);
  const [rateInput, setRateInput] = useState('0,3057');
  const [rateStatus, setRateStatus] = useState('loading'); // 'loading' | 'live' | 'fallback' | 'manual'
  const [rateSource, setRateSource] = useState('Consultando API...');
  const [lastUpdated, setLastUpdated] = useState('--:--:--');

  // Busca em cadeia com fallback resiliente
  const fetchExchangeRate = useCallback(async () => {
    setRateStatus('loading');
    const formatTimeNow = () =>
      new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

    // 1. API Primária: open.er-api.com
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 5000);
      const res1 = await fetch('https://open.er-api.com/v6/latest/MXN', {
        signal: controller.signal
      });
      clearTimeout(timer);

      if (res1.ok) {
        const json1 = await res1.json();
        const brl = json1?.rates?.BRL;
        if (typeof brl === 'number' && brl > 0) {
          setExchangeRate(brl);
          setRateInput(brl.toFixed(4).replace('.', ','));
          setRateSource('open.er-api.com');
          setRateStatus('live');
          setLastUpdated(formatTimeNow());
          return;
        }
      }
    } catch (_) {
      // Falha silenciosa -> tenta API secundária
    }

    // 2. API Secundária: api.frankfurter.app
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 5000);
      const res2 = await fetch('https://api.frankfurter.app/latest?from=MXN&to=BRL', {
        signal: controller.signal
      });
      clearTimeout(timer);

      if (res2.ok) {
        const json2 = await res2.json();
        const brl = json2?.rates?.BRL;
        if (typeof brl === 'number' && brl > 0) {
          setExchangeRate(brl);
          setRateInput(brl.toFixed(4).replace('.', ','));
          setRateSource('api.frankfurter.app');
          setRateStatus('live');
          setLastUpdated(formatTimeNow());
          return;
        }
      }
    } catch (_) {
      // Falha silenciosa -> aplica fallback seguro
    }

    // 3. Fallback Seguro (0.3057)
    setExchangeRate(FALLBACK_MXN_TO_BRL);
    setRateInput(FALLBACK_MXN_TO_BRL.toFixed(4).replace('.', ','));
    setRateSource('Fallback de Referência');
    setRateStatus('fallback');
    setLastUpdated(formatTimeNow());
  }, []);

  useEffect(() => {
    fetchExchangeRate();
  }, [fetchExchangeRate]);

  // Manipulador para simulação manual de câmbio
  const handleManualRateChange = (rawVal) => {
    setRateInput(rawVal);
    const normalized = parseFloat(rawVal.replace(',', '.'));
    if (!Number.isNaN(normalized) && normalized > 0 && normalized < 100) {
      setExchangeRate(normalized);
      setRateStatus('manual');
      setRateSource('Simulação Manual');
    }
  };

  const applyRateMultiplier = (factor) => {
    const base = FALLBACK_MXN_TO_BRL;
    const next = Number((base * factor).toFixed(4));
    setExchangeRate(next);
    setRateInput(next.toFixed(4).replace('.', ','));
    setRateStatus('manual');
    setRateSource('Simulação Manual');
  };

  const periodLabel = periodicity === 'quarterly' ? 'Trimestral' : 'Mensal Estimado';
  const periodSubLabel = periodicity === 'quarterly' ? 'por trimestre' : 'mês estimado (÷ 3)';

  // Grupo selecionado para o painel de drill-down na Aba 1
  const selectedGroup = useMemo(
    () => GRANDES_GRUPOS.find((g) => g.id === selectedGroupId) || GRANDES_GRUPOS[0],
    [selectedGroupId]
  );

  // Subgrupos de alimentação filtrados e ordenados na Aba 2
  const filteredSubgroups = useMemo(() => {
    const query = foodSearch.trim().toLowerCase();
    const list = SUBGRUPOS_DENTRO_DOMICILIO.filter((item) =>
      item.nome.toLowerCase().includes(query)
    );
    return [...list].sort((a, b) => {
      if (foodSort === 'valor_desc') {
        return b.valores[selectedYear] - a.valores[selectedYear];
      }
      if (foodSort === 'var_desc') {
        return b.var_22_24 - a.var_22_24;
      }
      return a.var_22_24 - b.var_22_24;
    });
  }, [foodSearch, foodSort, selectedYear]);

  // Exportação real de CSV com valores oficiais em MXN e convertidos em BRL
  const handleExportCSV = () => {
    const conv = (mxn) =>
      mxn === '' || mxn === null || mxn === undefined
        ? ''
        : (Number(mxn) * exchangeRate).toFixed(2);

    const rows = [
      [
        'SECAO',
        'CATEGORIA_OU_INDICADOR',
        'TAXA_CAMBIO_MXN_BRL',
        '2016_MXN',
        '2018_MXN',
        '2020_MXN',
        '2022_MXN',
        '2024_MXN',
        '2016_BRL',
        '2018_BRL',
        '2020_BRL',
        '2022_BRL',
        '2024_BRL',
        'PARTICIPACAO_2024_PCT',
        'VAR_2022_2024_PCT'
      ],
      [
        'Panorama Geral',
        'Gasto Total Trimestral Medio',
        exchangeRate.toFixed(4),
        '',
        '',
        '',
        '',
        72705,
        '',
        '',
        '',
        '',
        conv(72705),
        100.0,
        ''
      ],
      [
        'Panorama Geral',
        'Gasto Corrente Total',
        exchangeRate.toFixed(4),
        '',
        '',
        '',
        '',
        61309,
        '',
        '',
        '',
        '',
        conv(61309),
        84.3,
        ''
      ],
      [
        'Panorama Geral',
        'Gasto Corrente Monetario',
        exchangeRate.toFixed(4),
        42453,
        43262,
        37693,
        44166,
        47674,
        conv(42453),
        conv(43262),
        conv(37693),
        conv(44166),
        conv(47674),
        65.6,
        7.9
      ],
      [
        'Panorama Geral',
        'Gasto Corrente Nao Monetario',
        exchangeRate.toFixed(4),
        '',
        '',
        '',
        '',
        13635,
        '',
        '',
        '',
        '',
        conv(13635),
        18.8,
        ''
      ],
      [
        'Panorama Geral',
        'Erogacoes Financeiras e de Capital',
        exchangeRate.toFixed(4),
        '',
        '',
        '',
        '',
        11396,
        '',
        '',
        '',
        '',
        conv(11396),
        15.7,
        ''
      ],
      ...GRANDES_GRUPOS.map((g) => [
        'Grandes Grupos (Gasto Monetario)',
        g.nome,
        exchangeRate.toFixed(4),
        g.valores['2016'],
        g.valores['2018'],
        g.valores['2020'],
        g.valores['2022'],
        g.valores['2024'],
        conv(g.valores['2016']),
        conv(g.valores['2018']),
        conv(g.valores['2020']),
        conv(g.valores['2022']),
        conv(g.valores['2024']),
        g.participacao['2024'],
        g.var_22_24
      ]),
      [
        'Alimentacao Macro',
        'Alimentos e bebidas dentro do domicilio',
        exchangeRate.toFixed(4),
        ALIMENTACAO_MACRO.dentro['2016'],
        ALIMENTACAO_MACRO.dentro['2018'],
        ALIMENTACAO_MACRO.dentro['2020'],
        ALIMENTACAO_MACRO.dentro['2022'],
        ALIMENTACAO_MACRO.dentro['2024'],
        conv(ALIMENTACAO_MACRO.dentro['2016']),
        conv(ALIMENTACAO_MACRO.dentro['2018']),
        conv(ALIMENTACAO_MACRO.dentro['2020']),
        conv(ALIMENTACAO_MACRO.dentro['2022']),
        conv(ALIMENTACAO_MACRO.dentro['2024']),
        77.9,
        ALIMENTACAO_MACRO.var_22_24.dentro
      ],
      [
        'Alimentacao Macro',
        'Alimentos e bebidas fora do domicilio',
        exchangeRate.toFixed(4),
        ALIMENTACAO_MACRO.fora['2016'],
        ALIMENTACAO_MACRO.fora['2018'],
        ALIMENTACAO_MACRO.fora['2020'],
        ALIMENTACAO_MACRO.fora['2022'],
        ALIMENTACAO_MACRO.fora['2024'],
        conv(ALIMENTACAO_MACRO.fora['2016']),
        conv(ALIMENTACAO_MACRO.fora['2018']),
        conv(ALIMENTACAO_MACRO.fora['2020']),
        conv(ALIMENTACAO_MACRO.fora['2022']),
        conv(ALIMENTACAO_MACRO.fora['2024']),
        21.7,
        ALIMENTACAO_MACRO.var_22_24.fora
      ],
      [
        'Alimentacao Macro',
        'Tabaco',
        exchangeRate.toFixed(4),
        ALIMENTACAO_MACRO.tabaco['2016'],
        ALIMENTACAO_MACRO.tabaco['2018'],
        ALIMENTACAO_MACRO.tabaco['2020'],
        ALIMENTACAO_MACRO.tabaco['2022'],
        ALIMENTACAO_MACRO.tabaco['2024'],
        conv(ALIMENTACAO_MACRO.tabaco['2016']),
        conv(ALIMENTACAO_MACRO.tabaco['2018']),
        conv(ALIMENTACAO_MACRO.tabaco['2020']),
        conv(ALIMENTACAO_MACRO.tabaco['2022']),
        conv(ALIMENTACAO_MACRO.tabaco['2024']),
        0.5,
        ALIMENTACAO_MACRO.var_22_24.tabaco
      ],
      ...SUBGRUPOS_DENTRO_DOMICILIO.map((s) => [
        'Subgrupos Dentro do Domicilio',
        s.nome,
        exchangeRate.toFixed(4),
        s.valores['2016'],
        s.valores['2018'],
        s.valores['2020'],
        s.valores['2022'],
        s.valores['2024'],
        conv(s.valores['2016']),
        conv(s.valores['2018']),
        conv(s.valores['2020']),
        conv(s.valores['2022']),
        conv(s.valores['2024']),
        Number(((s.valores['2024'] / 14004) * 100).toFixed(1)),
        s.var_22_24
      ]),
      ...DECIS_DATA.map((d) => [
        'Decis de Renda (Gasto Monetario)',
        `Decil ${d.decil} (Renda 2024: ${d.renda['2024']} MXN / ${conv(d.renda['2024'])} BRL)`,
        exchangeRate.toFixed(4),
        d.gasto['2016'],
        d.gasto['2018'],
        d.gasto['2020'],
        d.gasto['2022'],
        d.gasto['2024'],
        conv(d.gasto['2016']),
        conv(d.gasto['2018']),
        conv(d.gasto['2020']),
        conv(d.gasto['2022']),
        conv(d.gasto['2024']),
        Number(((d.gasto['2024'] / d.renda['2024']) * 100).toFixed(1)),
        ''
      ])
    ];

    const csvContent =
      '\uFEFF' +
      rows
        .map((r) =>
          r
            .map((cell) => {
              const str = String(cell ?? '');
              return str.includes(',') || str.includes('"')
                ? `"${str.replace(/"/g, '""')}"`
                : str;
            })
            .join(',')
        )
        .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `ENIGH_2024_MXN_BRL_${exchangeRate.toFixed(4)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setCsvFeedback(true);
    setTimeout(() => setCsvFeedback(false), 3500);
  };

  // Valores dinâmicos para o ano selecionado
  const monetarioAtual = PANORAMA_GASTO.monetario_total_serie[selectedYear];
  const varMonetarioAtual = PANORAMA_GASTO.monetario_var_periodo[selectedYear];
  const alimentosAtual = ALIMENTACAO_MACRO.total[selectedYear];
  const dentroAtual = ALIMENTACAO_MACRO.dentro[selectedYear];
  const foraAtual = ALIMENTACAO_MACRO.fora[selectedYear];
  const tabacoAtual = ALIMENTACAO_MACRO.tabaco[selectedYear];
  const shareAlimentosNoMonetario = (alimentosAtual / monetarioAtual) * 100;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-teal-600 selection:text-white">
      {/* ===================================================================== */}
      {/* CABEÇALHO EXECUTIVO & PAINEL DE CÂMBIO EM TEMPO REAL                  */}
      {/* ===================================================================== */}
      <header className="bg-[#0B1F3A] text-white border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
          {/* Top Bar: Título Institucional + Exportar CSV */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-5 border-b border-white/10">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-teal-500/20 text-teal-300 border border-teal-400/30">
                  <IconBarChart className="w-3.5 h-3.5" />
                  INEGI • ENIGH 2024
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-slate-300">
                  Amostra: 105.718 domicílios
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  Conversão MXN → BRL Ativa
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white">
                Estrutura de Despesas das Famílias | ENIGH 2024 (INEGI)
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Dados oficiais em Pesos Mexicanos constantes de 2024 (MX$) com conversão automática para Real Brasileiro (R$)
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {csvFeedback && (
                <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-xs font-medium">
                  <IconCheckCircle className="w-4 h-4 text-emerald-400" />
                  CSV (MXN + BRL) exportado!
                </div>
              )}
              <button
                onClick={handleExportCSV}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 active:bg-teal-700 text-white text-sm font-semibold shadow-sm transition-all cursor-pointer border border-teal-400/30"
              >
                <IconDownload className="w-4 h-4" />
                Exportar Dados (CSV)
              </button>
            </div>
          </div>

          {/* PAINEL DEDICADO DE CÂMBIO EM TEMPO REAL (MXN -> BRL) */}
          <div className="my-4 p-3.5 sm:p-4 rounded-xl bg-[#071426] border border-teal-500/30 shadow-inner">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              {/* Bloco 1: Taxa Ativa + Status API + Horário */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-lg bg-emerald-500/15 border border-emerald-400/30 text-emerald-300">
                    <IconGlobe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Câmbio Ativo (MXN → BRL)
                    </div>
                    <div className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                      1 MXN ={' '}
                      <span className="text-emerald-400">
                        R$ {exchangeRate.toFixed(4).replace('.', ',')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Selo de Status Dinâmico */}
                <div className="flex flex-col gap-1">
                  {rateStatus === 'live' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      API Conectada • Ao Vivo
                    </span>
                  )}
                  {rateStatus === 'loading' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-400/40">
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                      Atualizando...
                    </span>
                  )}
                  {rateStatus === 'fallback' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/40">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      Taxa de Referência / Fallback
                    </span>
                  )}
                  {rateStatus === 'manual' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-400/40">
                      <span className="w-2 h-2 rounded-full bg-purple-400" />
                      Simulação de Sensibilidade
                    </span>
                  )}
                  <span className="text-[11px] text-slate-400">
                    Fonte: <strong className="text-slate-300">{rateSource}</strong> • Última consulta: {lastUpdated}
                  </span>
                </div>
              </div>

              {/* Bloco 2: Botão Atualizar + Simulador de Sensibilidade + Seletor de Moeda */}
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Botão Atualizar Cotação */}
                <button
                  onClick={fetchExchangeRate}
                  disabled={rateStatus === 'loading'}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 active:bg-white/20 disabled:opacity-50 text-white text-xs font-semibold border border-white/15 transition-all cursor-pointer"
                  title="Consultar novamente as APIs públicas de câmbio"
                >
                  <IconRefresh
                    className={`w-3.5 h-3.5 text-emerald-400 ${
                      rateStatus === 'loading' ? 'animate-spin' : ''
                    }`}
                  />
                  Atualizar Cotação
                </button>

                {/* Simular Câmbio (R$) */}
                <div className="inline-flex items-center gap-1.5 bg-[#0B1F3A] px-2.5 py-1.5 rounded-lg border border-white/15">
                  <label
                    htmlFor="simular-cambio"
                    className="text-[11px] font-semibold text-slate-300 whitespace-nowrap"
                  >
                    Simular Câmbio (R$):
                  </label>
                  <input
                    id="simular-cambio"
                    type="text"
                    inputMode="decimal"
                    value={rateInput}
                    onChange={(e) => handleManualRateChange(e.target.value)}
                    className="w-16 px-1.5 py-0.5 rounded bg-[#071426] border border-teal-500/40 text-emerald-300 font-bold text-xs text-center focus:outline-none focus:ring-1 focus:ring-emerald-400"
                    aria-label="Simular taxa de câmbio de MXN para BRL"
                  />
                  <div className="hidden sm:flex items-center gap-1 ml-1">
                    <button
                      type="button"
                      onClick={() => applyRateMultiplier(0.9)}
                      className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-white/5 hover:bg-white/15 text-slate-300 cursor-pointer"
                      title="Simular queda de 10% no Peso Mexicano"
                    >
                      -10%
                    </button>
                    <button
                      type="button"
                      onClick={() => applyRateMultiplier(1.1)}
                      className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-white/5 hover:bg-white/15 text-slate-300 cursor-pointer"
                      title="Simular alta de 10% no Peso Mexicano"
                    >
                      +10%
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Barra de Controles Globais: Ano + Periodicidade + Modo de Exibição Monetária */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 py-3">
            {/* Seletor de Ano */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <IconCalendar className="w-3.5 h-3.5 text-teal-400" />
                Ano:
              </span>
              <div className="inline-flex bg-[#071426] p-1 rounded-lg border border-white/10">
                {YEARS.map((yr) => {
                  const active = selectedYear === yr;
                  return (
                    <button
                      key={yr}
                      onClick={() => setSelectedYear(yr)}
                      className={`px-2.5 sm:px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                        active
                          ? 'bg-teal-600 text-white shadow-sm'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {yr}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Seletor de Periodicidade */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <IconSliders className="w-3.5 h-3.5 text-amber-400" />
                Período:
              </span>
              <div className="inline-flex bg-[#071426] p-1 rounded-lg border border-white/10">
                <button
                  onClick={() => setPeriodicity('quarterly')}
                  className={`px-2.5 sm:px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                    periodicity === 'quarterly'
                      ? 'bg-white text-[#0B1F3A] shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Trimestral
                </button>
                <button
                  onClick={() => setPeriodicity('monthly')}
                  className={`px-2.5 sm:px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                    periodicity === 'monthly'
                      ? 'bg-white text-[#0B1F3A] shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Mensal (÷ 3)
                </button>
              </div>
            </div>

            {/* Seletor de Visualização Monetária */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <IconCoins className="w-3.5 h-3.5 text-emerald-400" />
                Moeda:
              </span>
              <div className="inline-flex bg-[#071426] p-1 rounded-lg border border-white/10">
                {[
                  { id: 'dual', label: 'Dual (MXN + BRL)' },
                  { id: 'mxn', label: 'Somente MXN (MX$)' },
                  { id: 'brl', label: 'Somente BRL (R$)' }
                ].map((opt) => {
                  const active = currencyMode === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setCurrencyMode(opt.id)}
                      className={`px-2.5 sm:px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                        active
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navegação por 4 Abas Analíticas */}
          <nav className="flex overflow-x-auto gap-1 pt-2 -mb-4">
            {[
              { id: 'visao-geral', label: '1. Visão Geral & Grandes Grupos', icon: IconLayers },
              { id: 'alimentacao', label: '2. Alimentação: Dentro vs. Fora', icon: IconUtensils },
              { id: 'desigualdade', label: '3. Desigualdade & Lei de Engel', icon: IconMapPin },
              { id: 'insights', label: '4. Insights & Arquitetura API', icon: IconBriefcase }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold whitespace-nowrap rounded-t-lg border-t border-x transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-50 text-[#0B1F3A] border-slate-200 shadow-sm'
                      : 'bg-white/5 text-slate-300 border-transparent hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-teal-600' : 'text-slate-400'}`} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* ===================================================================== */}
      {/* CONTEÚDO PRINCIPAL DAS 4 ABAS                                         */}
      {/* ===================================================================== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ------------------------------------------------------------------- */}
        {/* ABA 1: VISÃO GERAL & GRANDES GRUPOS                                 */}
        {/* ------------------------------------------------------------------- */}
        {activeTab === 'visao-geral' && (
          <div className="space-y-6">
            {selectedYear !== '2024' && (
              <div className="flex items-center justify-between flex-wrap gap-3 bg-amber-50 border border-amber-200 text-amber-900 px-4 py-3 rounded-xl text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <IconInfo className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>
                    Exibindo série histórica de <strong>{selectedYear}</strong> (pesos constantes de 2024 convertidos à taxa ativa). Os cards de Gasto Total e Não Monetário mantêm como referência o detalhamento publicado para 2024.
                  </span>
                </div>
                <button
                  onClick={() => setSelectedYear('2024')}
                  className="text-xs font-bold underline text-amber-800 hover:text-amber-950 cursor-pointer"
                >
                  Voltar para 2024
                </button>
              </div>
            )}

            {/* 4 KPI CARDS NO TOPO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {/* KPI 1: Gasto Total Médio */}
              <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Gasto Total Médio (2024)
                  </span>
                  <div className="p-2 rounded-lg bg-[#0B1F3A]/10 text-[#0B1F3A]">
                    <IconDollar className="w-4 h-4" />
                  </div>
                </div>
                <MoneyDisplay
                  value={PANORAMA_GASTO.total_2024}
                  periodicity={periodicity}
                  currencyMode={currencyMode}
                  rate={exchangeRate}
                  variant="kpi"
                />
                <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                  <span>{periodSubLabel}</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full font-semibold bg-slate-100 text-slate-700">
                    100% do dispêndio
                  </span>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between">
                  <span>Corrente: <strong>84,3%</strong></span>
                  <span>Cap./Financ.: <strong>15,7%</strong></span>
                </div>
              </div>

              {/* KPI 2: Gasto Corrente Total */}
              <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Gasto Corrente Total (2024)
                  </span>
                  <div className="p-2 rounded-lg bg-teal-500/10 text-teal-700">
                    <IconLayers className="w-4 h-4" />
                  </div>
                </div>
                <MoneyDisplay
                  value={PANORAMA_GASTO.corrente_total_2024}
                  periodicity={periodicity}
                  currencyMode={currencyMode}
                  rate={exchangeRate}
                  variant="kpi"
                  accentClass="text-slate-900"
                />
                <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                  <span>{periodSubLabel}</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full font-semibold bg-teal-50 text-teal-700 border border-teal-200">
                    84,3% do total
                  </span>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between">
                  <span>
                    Monet.:{' '}
                    <strong>
                      {formatCompactChart(
                        PANORAMA_GASTO.corrente_monetario_2024,
                        periodicity,
                        currencyMode,
                        exchangeRate
                      )}
                    </strong>
                  </span>
                  <span>
                    Não Monet.:{' '}
                    <strong>
                      {formatCompactChart(
                        PANORAMA_GASTO.corrente_nao_monetario_2024,
                        periodicity,
                        currencyMode,
                        exchangeRate
                      )}
                    </strong>
                  </span>
                </div>
              </div>

              {/* KPI 3: Gasto Corrente Monetário (Dinâmico por Ano) */}
              <div className="bg-white rounded-xl p-5 border-2 border-teal-600/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                    Gasto Corrente Monetário ({selectedYear})
                  </span>
                  <div className="p-2 rounded-lg bg-teal-600 text-white">
                    <IconBarChart className="w-4 h-4" />
                  </div>
                </div>
                <MoneyDisplay
                  value={monetarioAtual}
                  periodicity={periodicity}
                  currencyMode={currencyMode}
                  rate={exchangeRate}
                  variant="kpi"
                />
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="text-slate-500">{periodSubLabel}</span>
                  {varMonetarioAtual !== null ? (
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-bold ${
                        varMonetarioAtual >= 0
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}
                    >
                      {varMonetarioAtual >= 0 ? (
                        <IconTrendingUp className="w-3 h-3" />
                      ) : (
                        <IconTrendingDown className="w-3 h-3" />
                      )}
                      {formatPct(varMonetarioAtual, true)}
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                      Ano-base 2016
                    </span>
                  )}
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between">
                  <span>Base dos 9 Grandes Grupos</span>
                  <span className="font-semibold text-teal-700">65,6% do Total</span>
                </div>
              </div>

              {/* KPI 4: Principal Grupo — Alimentação (Dinâmico por Ano) */}
              <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Alimentos, Bebidas e Tabaco ({selectedYear})
                  </span>
                  <div className="p-2 rounded-lg bg-amber-500/15 text-amber-700">
                    <IconUtensils className="w-4 h-4" />
                  </div>
                </div>
                <MoneyDisplay
                  value={alimentosAtual}
                  periodicity={periodicity}
                  currencyMode={currencyMode}
                  rate={exchangeRate}
                  variant="kpi"
                  accentClass="text-slate-900"
                />
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="text-slate-500">
                    <strong>{formatPct(shareAlimentosNoMonetario)}</strong> do gasto monetário
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    <IconTrendingUp className="w-3 h-3" />
                    +8,1% (22–24)
                  </span>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between">
                  <span>
                    Dentro:{' '}
                    <strong>
                      {formatCompactChart(dentroAtual, periodicity, currencyMode, exchangeRate)}
                    </strong>
                  </span>
                  <span>
                    Fora:{' '}
                    <strong>
                      {formatCompactChart(foraAtual, periodicity, currencyMode, exchangeRate)}
                    </strong>
                  </span>
                </div>
              </div>
            </div>

            {/* SEÇÃO PRINCIPAL: GRÁFICO INTERATIVO DOS 9 GRANDES GRUPOS + PAINEL DRILL-DOWN */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Coluna Esquerda (7/12): Barras Horizontais dos 9 Grandes Grupos */}
              <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-[#0B1F3A]">
                      Distribuição do Gasto Corrente Monetário por Grandes Grupos ({selectedYear})
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Clique em qualquer categoria para inspecionar sua série histórica (2016–2024) ao lado
                    </p>
                  </div>
                  <div className="inline-flex flex-col items-end self-start sm:self-center px-3 py-1 rounded-lg bg-slate-100 text-xs">
                    <span className="font-bold text-slate-800">
                      Total: {formatMXN(monetarioAtual, periodicity)}
                    </span>
                    {currencyMode !== 'mxn' && (
                      <span className="text-[11px] font-bold text-emerald-700">
                        ≈ {formatBRL(monetarioAtual, periodicity, exchangeRate)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  {GRANDES_GRUPOS.map((grupo, idx) => {
                    const val = grupo.valores[selectedYear];
                    const pct = grupo.participacao[selectedYear];
                    const isSelected = grupo.id === selectedGroupId;
                    const barWidth = Math.min(100, (pct / 38.5) * 100);

                    return (
                      <button
                        key={grupo.id}
                        onClick={() => setSelectedGroupId(grupo.id)}
                        className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-teal-50/60 border-teal-500 shadow-sm ring-1 ring-teal-500/30'
                            : 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50/70'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-2 min-w-0">
                            <span
                              className="w-5 h-5 rounded-md text-[11px] font-bold text-white flex items-center justify-center shrink-0"
                              style={{ backgroundColor: grupo.cor }}
                            >
                              {idx + 1}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                              {grupo.nome}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 shrink-0">
                            <MoneyDisplay
                              value={val}
                              periodicity={periodicity}
                              currencyMode={currencyMode}
                              rate={exchangeRate}
                              variant="row"
                            />
                            <span className="w-12 text-right text-xs font-bold text-slate-600">
                              {formatPct(pct)}
                            </span>
                            <span
                              className={`hidden sm:inline-flex items-center justify-end w-14 text-[11px] font-semibold ${
                                grupo.var_22_24 >= 0 ? 'text-emerald-600' : 'text-rose-600'
                              }`}
                              title="Variação real 2022–2024"
                            >
                              {formatPct(grupo.var_22_24, true)}
                            </span>
                          </div>
                        </div>

                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${barWidth}%`,
                              backgroundColor: grupo.cor
                            }}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Coluna Direita (5/12): Drill-down da Categoria + Composição do Gasto Total */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {/* Card 1: Drill-down Histórico do Grupo Selecionado */}
                <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
                        Série Histórica Selecionada (2016–2024)
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-[#0B1F3A] mt-0.5">
                        {selectedGroup.nome}
                      </h3>
                    </div>
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-bold text-white shrink-0"
                      style={{ backgroundColor: selectedGroup.cor }}
                    >
                      {formatPct(selectedGroup.participacao[selectedYear])} em {selectedYear}
                    </span>
                  </div>

                  {/* Valor do ano selecionado no drill-down */}
                  <div className="mb-3 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200/70 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-600">
                      Gasto {periodLabel} ({selectedYear}):
                    </span>
                    <MoneyDisplay
                      value={selectedGroup.valores[selectedYear]}
                      periodicity={periodicity}
                      currencyMode={currencyMode}
                      rate={exchangeRate}
                      variant="inline"
                    />
                  </div>

                  {/* Gráfico SVG de Colunas Históricas (2016-2024) */}
                  <div className="my-3 bg-slate-50 rounded-xl p-3 border border-slate-100">
                    {(() => {
                      const vals = YEARS.map((y) => selectedGroup.valores[y]);
                      const maxVal = Math.max(...vals) * 1.22;
                      return (
                        <svg viewBox="0 0 360 172" className="w-full h-44 overflow-visible">
                          {[0.25, 0.5, 0.75, 1].map((ratio) => {
                            const yPos = 140 - ratio * 102;
                            return (
                              <line
                                key={ratio}
                                x1="12"
                                y1={yPos}
                                x2="348"
                                y2={yPos}
                                stroke="#E2E8F0"
                                strokeDasharray="3 3"
                                strokeWidth="1"
                              />
                            );
                          })}
                          {YEARS.map((yr, i) => {
                            const val = selectedGroup.valores[yr];
                            const barH = (val / maxVal) * 102;
                            const xPos = 22 + i * 67;
                            const yPos = 140 - barH;
                            const isCurrent = yr === selectedYear;
                            return (
                              <g
                                key={yr}
                                className="cursor-pointer"
                                onClick={() => setSelectedYear(yr)}
                              >
                                <rect
                                  x={xPos}
                                  y={yPos}
                                  width="44"
                                  height={barH}
                                  rx="6"
                                  fill={isCurrent ? selectedGroup.cor : '#94A3B8'}
                                  opacity={isCurrent ? 1 : 0.65}
                                />
                                {currencyMode === 'dual' ? (
                                  <>
                                    <text
                                      x={xPos + 22}
                                      y={yPos - 16}
                                      textAnchor="middle"
                                      className="text-[9px] font-extrabold fill-slate-800"
                                    >
                                      {formatMXN(val, periodicity, true)}
                                    </text>
                                    <text
                                      x={xPos + 22}
                                      y={yPos - 5}
                                      textAnchor="middle"
                                      className="text-[8.5px] font-bold fill-emerald-700"
                                    >
                                      {formatBRL(val, periodicity, exchangeRate, true)}
                                    </text>
                                  </>
                                ) : (
                                  <text
                                    x={xPos + 22}
                                    y={yPos - 6}
                                    textAnchor="middle"
                                    className="text-[9.5px] font-bold fill-slate-700"
                                  >
                                    {formatCompactChart(val, periodicity, currencyMode, exchangeRate)}
                                  </text>
                                )}
                                <text
                                  x={xPos + 22}
                                  y="158"
                                  textAnchor="middle"
                                  className={`text-[11px] ${
                                    isCurrent ? 'font-extrabold fill-[#0B1F3A]' : 'font-medium fill-slate-500'
                                  }`}
                                >
                                  {yr}
                                </text>
                              </g>
                            );
                          })}
                        </svg>
                      );
                    })()}
                  </div>

                  {/* Métricas rápidas do grupo */}
                  <div className="grid grid-cols-3 gap-2 mb-3 text-center">
                    <div className="bg-slate-50 rounded-lg p-2 border border-slate-100">
                      <div className="text-[10px] uppercase font-semibold text-slate-400">2016 → 2024</div>
                      <div className="text-xs sm:text-sm font-extrabold text-slate-800 mt-0.5">
                        {formatPct(
                          ((selectedGroup.valores['2024'] - selectedGroup.valores['2016']) /
                            selectedGroup.valores['2016']) *
                            100,
                          true
                        )}
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-2 border border-slate-100">
                      <div className="text-[10px] uppercase font-semibold text-slate-400">Choque 2020</div>
                      <div className="text-xs sm:text-sm font-extrabold text-slate-800 mt-0.5">
                        {formatPct(
                          ((selectedGroup.valores['2020'] - selectedGroup.valores['2018']) /
                            selectedGroup.valores['2018']) *
                            100,
                          true
                        )}
                      </div>
                    </div>
                    <div className="bg-emerald-50/70 rounded-lg p-2 border border-emerald-100">
                      <div className="text-[10px] uppercase font-semibold text-emerald-700">Biênio 22–24</div>
                      <div className="text-xs sm:text-sm font-extrabold text-emerald-700 mt-0.5">
                        {formatPct(selectedGroup.var_22_24, true)}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border-l-4 border-teal-600">
                    {selectedGroup.insight}
                  </p>
                </div>

                {/* Card 2: Composição do Gasto Total (Monetário vs Não Monetário vs Financeiro) */}
                <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-base font-bold text-[#0B1F3A]">
                        Composição do Gasto Total (2024)
                      </h3>
                      <p className="text-xs text-slate-500">
                        Gasto Corrente (84,3%) vs. Erogações de Capital (15,7%)
                      </p>
                    </div>
                    <IconPieChart className="w-4 h-4 text-teal-600" />
                  </div>

                  <div className="w-full h-5 rounded-lg overflow-hidden flex my-3 shadow-inner">
                    <div
                      style={{ width: '65.6%' }}
                      className="bg-teal-600 h-full flex items-center justify-center text-[10px] font-bold text-white"
                      title="Gasto Corrente Monetário: 65,6%"
                    >
                      65,6%
                    </div>
                    <div
                      style={{ width: '18.7%' }}
                      className="bg-sky-500 h-full flex items-center justify-center text-[10px] font-bold text-white"
                      title="Gasto Corrente Não Monetário: 18,8%"
                    >
                      18,8%
                    </div>
                    <div
                      style={{ width: '15.7%' }}
                      className="bg-[#0B1F3A] h-full flex items-center justify-center text-[10px] font-bold text-white"
                      title="Erogações Financeiras e de Capital: 15,7%"
                    >
                      15,7%
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                      <span className="flex items-center gap-2 font-medium text-slate-700">
                        <span className="w-2.5 h-2.5 rounded-sm bg-teal-600 shrink-0" />
                        Gasto Corrente Monetário (65,6%)
                      </span>
                      <MoneyDisplay
                        value={47674}
                        periodicity={periodicity}
                        currencyMode={currencyMode}
                        rate={exchangeRate}
                        variant="row"
                      />
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                      <span className="flex items-center gap-2 font-medium text-slate-700">
                        <span className="w-2.5 h-2.5 rounded-sm bg-sky-500 shrink-0" />
                        Gasto Corrente Não Monetário (18,8%)
                      </span>
                      <MoneyDisplay
                        value={13635}
                        periodicity={periodicity}
                        currencyMode={currencyMode}
                        rate={exchangeRate}
                        variant="row"
                      />
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="flex items-center gap-2 font-medium text-slate-700">
                        <span className="w-2.5 h-2.5 rounded-sm bg-[#0B1F3A] shrink-0" />
                        Erogações Financeiras e Capital (15,7%)
                      </span>
                      <MoneyDisplay
                        value={11396}
                        periodicity={periodicity}
                        currencyMode={currencyMode}
                        rate={exchangeRate}
                        variant="row"
                      />
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-semibold text-slate-500 mb-2">
                      Evolução Histórica Corrente vs. Financeira (% do Gasto Total):
                    </div>
                    <div className="grid grid-cols-5 gap-1.5 text-center">
                      {YEARS.map((yr) => {
                        const d = PANORAMA_GASTO.composicao_historica_pct[yr];
                        return (
                          <div
                            key={yr}
                            onClick={() => setSelectedYear(yr)}
                            className={`p-1.5 rounded-lg border cursor-pointer transition-all ${
                              selectedYear === yr
                                ? 'bg-teal-50 border-teal-400'
                                : 'bg-slate-50 border-slate-100 hover:border-slate-300'
                            }`}
                          >
                            <div className="text-[10px] font-bold text-slate-700">{yr}</div>
                            <div className="text-[11px] font-extrabold text-teal-700">{d.corrente}%</div>
                            <div className="text-[10px] text-slate-500">{d.financeiras}%</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* ABA 2: ALIMENTAÇÃO: DENTRO VS. FORA DO DOMICÍLIO                    */}
        {/* ------------------------------------------------------------------- */}
        {activeTab === 'alimentacao' && (
          <div className="space-y-6">
            {/* Cards Superiores: Dentro vs Fora vs Total */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Total Alimentos, Bebidas e Tabaco ({selectedYear})
                  </span>
                  <IconUtensils className="w-4 h-4 text-[#0B1F3A]" />
                </div>
                <MoneyDisplay
                  value={alimentosAtual}
                  periodicity={periodicity}
                  currencyMode={currencyMode}
                  rate={exchangeRate}
                  variant="card"
                />
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="text-slate-500">{periodLabel}</span>
                  <span className="px-2 py-0.5 rounded-full font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    +8,1% (2022–2024)
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-teal-600/30 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                    Consumo Dentro do Domicílio ({selectedYear})
                  </span>
                  <IconHome className="w-4 h-4 text-teal-600" />
                </div>
                <MoneyDisplay
                  value={dentroAtual}
                  periodicity={periodicity}
                  currencyMode={currencyMode}
                  rate={exchangeRate}
                  variant="card"
                  accentClass="text-teal-700"
                />
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-700">
                    {formatPct((dentroAtual / alimentosAtual) * 100)} do grupo alimentar
                  </span>
                  <span className="px-2 py-0.5 rounded-full font-bold bg-teal-50 text-teal-700 border border-teal-200">
                    +5,3% (2022–2024)
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-amber-500/30 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    Consumo Fora do Domicílio ({selectedYear})
                  </span>
                  <IconBuilding className="w-4 h-4 text-amber-600" />
                </div>
                <MoneyDisplay
                  value={foraAtual}
                  periodicity={periodicity}
                  currencyMode={currencyMode}
                  rate={exchangeRate}
                  variant="card"
                  accentClass="text-amber-600"
                />
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-700">
                    {formatPct((foraAtual / alimentosAtual) * 100)} do grupo alimentar
                  </span>
                  <span className="px-2 py-0.5 rounded-full font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    +19,2% (2022–2024)
                  </span>
                </div>
              </div>
            </div>

            {/* Gráfico de Dinâmica Estrutural (2016-2024) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-[#0B1F3A]">
                      Evolução: Dentro vs. Fora do Domicílio (2016–2024)
                    </h2>
                    <p className="text-xs text-slate-500">
                      Queda de -44,9% na alimentação fora do lar em 2020 e aceleração pós-pandemia (+70,6% em 2022 e +19,2% em 2024)
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-teal-700">
                      <span className="w-3 h-3 rounded-sm bg-teal-600" />
                      Dentro
                    </span>
                    <span className="flex items-center gap-1.5 text-amber-700">
                      <span className="w-3 h-3 rounded-sm bg-amber-500" />
                      Fora
                    </span>
                  </div>
                </div>

                {/* Barra de Inspeção Dual do Ano Hover/Selecionado */}
                {(() => {
                  const inspectYr = hoveredFoodYear || selectedYear;
                  const dInspect = ALIMENTACAO_MACRO.dentro[inspectYr];
                  const fInspect = ALIMENTACAO_MACRO.fora[inspectYr];
                  return (
                    <div className="mb-3 px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="font-extrabold text-[#0B1F3A]">
                        Ano {inspectYr} ({periodLabel}):
                      </span>
                      <span>
                        Dentro:{' '}
                        <MoneyDisplay
                          value={dInspect}
                          periodicity={periodicity}
                          currencyMode={currencyMode}
                          rate={exchangeRate}
                          variant="inline"
                          accentClass="text-teal-700"
                        />
                      </span>
                      <span>
                        Fora:{' '}
                        <MoneyDisplay
                          value={fInspect}
                          periodicity={periodicity}
                          currencyMode={currencyMode}
                          rate={exchangeRate}
                          variant="inline"
                          accentClass="text-amber-700"
                        />
                      </span>
                    </div>
                  );
                })()}

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <svg viewBox="0 0 620 230" className="w-full h-56 sm:h-64 overflow-visible">
                    {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
                      const y = 185 - ratio * 155;
                      const labelVal = 15000 * ratio;
                      return (
                        <g key={ratio}>
                          <line
                            x1="64"
                            y1={y}
                            x2="600"
                            y2={y}
                            stroke="#E2E8F0"
                            strokeDasharray="3 3"
                          />
                          <text
                            x="56"
                            y={y + 4}
                            textAnchor="end"
                            className="text-[10px] fill-slate-400 font-medium"
                          >
                            {formatCompactChart(labelVal, periodicity, currencyMode, exchangeRate)}
                          </text>
                        </g>
                      );
                    })}

                    <rect
                      x="280"
                      y="20"
                      width="96"
                      height="172"
                      rx="8"
                      fill="#FEF3C7"
                      opacity="0.55"
                    />
                    <text
                      x="328"
                      y="15"
                      textAnchor="middle"
                      className="text-[9px] font-bold fill-amber-800 uppercase"
                    >
                      Choque COVID-19
                    </text>

                    {YEARS.map((yr, idx) => {
                      const dVal = ALIMENTACAO_MACRO.dentro[yr];
                      const fVal = ALIMENTACAO_MACRO.fora[yr];
                      const dHeight = (dVal / 15000) * 155;
                      const fHeight = (fVal / 15000) * 155;
                      const groupX = 80 + idx * 105;
                      const isHovered = hoveredFoodYear === yr || selectedYear === yr;

                      return (
                        <g
                          key={yr}
                          className="cursor-pointer"
                          onMouseEnter={() => setHoveredFoodYear(yr)}
                          onMouseLeave={() => setHoveredFoodYear(null)}
                          onClick={() => setSelectedYear(yr)}
                        >
                          <rect
                            x={groupX}
                            y={185 - dHeight}
                            width="34"
                            height={dHeight}
                            rx="5"
                            fill={isHovered ? '#0F766E' : '#0D9488'}
                          />
                          <text
                            x={groupX + 17}
                            y={185 - dHeight - 5}
                            textAnchor="middle"
                            className="text-[9.5px] font-bold fill-teal-900"
                          >
                            {formatCompactChart(dVal, periodicity, currencyMode, exchangeRate)}
                          </text>

                          <rect
                            x={groupX + 38}
                            y={185 - fHeight}
                            width="34"
                            height={fHeight}
                            rx="5"
                            fill={yr === '2020' ? '#E11D48' : isHovered ? '#D97706' : '#F59E0B'}
                          />
                          <text
                            x={groupX + 55}
                            y={185 - fHeight - 5}
                            textAnchor="middle"
                            className={`text-[9.5px] font-bold ${
                              yr === '2020' ? 'fill-rose-700' : 'fill-amber-900'
                            }`}
                          >
                            {formatCompactChart(fVal, periodicity, currencyMode, exchangeRate)}
                          </text>

                          <text
                            x={groupX + 36}
                            y="206"
                            textAnchor="middle"
                            className={`text-xs ${
                              selectedYear === yr
                                ? 'font-extrabold fill-[#0B1F3A]'
                                : 'font-semibold fill-slate-600'
                            }`}
                          >
                            {yr}
                          </text>
                          <text
                            x={groupX + 36}
                            y="220"
                            textAnchor="middle"
                            className="text-[9px] fill-slate-400"
                          >
                            Fora: {((fVal / ALIMENTACAO_MACRO.total[yr]) * 100).toFixed(1).replace('.', ',')}%
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>

              {/* Coluna Direita (4/12): Proporção & Destaques de Consumo */}
              <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200/80 shadow-sm p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#0B1F3A] mb-1">
                    Estrutura do Gasto Alimentar ({selectedYear})
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Divisão entre abastecimento doméstico, foodservice e tabaco
                  </p>

                  <div className="w-full h-6 rounded-lg overflow-hidden flex mb-4 shadow-inner">
                    <div
                      style={{ width: `${(dentroAtual / alimentosAtual) * 100}%` }}
                      className="bg-teal-600 h-full flex items-center justify-center text-[11px] font-bold text-white"
                    >
                      {((dentroAtual / alimentosAtual) * 100).toFixed(1).replace('.', ',')}%
                    </div>
                    <div
                      style={{ width: `${(foraAtual / alimentosAtual) * 100}%` }}
                      className="bg-amber-500 h-full flex items-center justify-center text-[11px] font-bold text-white"
                    >
                      {((foraAtual / alimentosAtual) * 100).toFixed(1).replace('.', ',')}%
                    </div>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-lg bg-teal-50/70 border border-teal-100">
                      <div className="flex justify-between items-start font-bold text-teal-900">
                        <span>Dentro do domicílio</span>
                        <MoneyDisplay
                          value={dentroAtual}
                          periodicity={periodicity}
                          currencyMode={currencyMode}
                          rate={exchangeRate}
                          variant="row"
                          accentClass="text-teal-900"
                        />
                      </div>
                      <p className="text-slate-600 mt-1.5">
                        Representa <strong>77,9%</strong> do gasto alimentar em 2024. Crescimento constante mesmo durante a pandemia (+5,8% em 2020; +7,6% em 2022; +5,3% em 2024).
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-100">
                      <div className="flex justify-between items-start font-bold text-amber-900">
                        <span>Fora do domicílio</span>
                        <MoneyDisplay
                          value={foraAtual}
                          periodicity={periodicity}
                          currencyMode={currencyMode}
                          rate={exchangeRate}
                          variant="row"
                          accentClass="text-amber-900"
                        />
                      </div>
                      <p className="text-slate-600 mt-1.5">
                        Atingiu <strong>21,7%</strong> em 2024 (recorde da série histórica, superando 2018 em valor real: MX$ 3.896 vs. MX$ 3.477).
                      </p>
                    </div>

                    <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-50 border border-slate-200/70">
                      <span className="font-semibold text-slate-600">Tabaco (0,5% do grupo)</span>
                      <MoneyDisplay
                        value={tabacoAtual}
                        periodicity={periodicity}
                        currencyMode={currencyMode}
                        rate={exchangeRate}
                        variant="row"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Explorador Interativo dos 14 Subgrupos Dentro do Domicílio */}
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0B1F3A]">
                    Detalhamento dos 14 Subgrupos Dentro do Domicílio ({selectedYear})
                  </h2>
                  <div className="text-xs text-slate-500 mt-0.5 flex flex-wrap items-center gap-1">
                    <span>Base ({periodSubLabel}):</span>
                    <MoneyDisplay
                      value={dentroAtual}
                      periodicity={periodicity}
                      currencyMode={currencyMode}
                      rate={exchangeRate}
                      variant="inline"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative">
                    <IconSearch className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={foodSearch}
                      onChange={(e) => setFoodSearch(e.target.value)}
                      placeholder="Buscar subgrupo (ex: Carnes, Frutas)..."
                      className="pl-9 pr-3 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:w-64"
                    />
                  </div>

                  <div className="inline-flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg">
                    <IconArrowUpDown className="w-3.5 h-3.5 text-slate-500 ml-2" />
                    <select
                      value={foodSort}
                      onChange={(e) => setFoodSort(e.target.value)}
                      className="bg-transparent text-xs sm:text-sm font-semibold text-slate-700 pr-2 py-1 focus:outline-none cursor-pointer"
                    >
                      <option value="valor_desc">Ordenar: Maior Gasto ($)</option>
                      <option value="var_desc">Ordenar: Maior Alta 22–24 (%)</option>
                      <option value="var_asc">Ordenar: Menor Alta / Queda (%)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50/70">
                      <th className="py-3 px-3">Subgrupo Alimentar</th>
                      <th className="py-3 px-3 text-right">
                        Gasto ({selectedYear}) {currencyMode === 'dual' ? 'MXN / BRL' : currencyMode.toUpperCase()}
                      </th>
                      <th className="py-3 px-3 w-48 hidden sm:table-cell">% do Consumo Interno</th>
                      <th className="py-3 px-3 text-right">Var. 22–24</th>
                      <th className="py-3 px-3 text-center hidden md:table-cell">Tendência (16–24)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                    {filteredSubgroups.map((item) => {
                      const val = item.valores[selectedYear];
                      const shareInterno = (val / dentroAtual) * 100;
                      const maxSub = 3250;
                      const barPct = Math.min(100, (val / maxSub) * 100);

                      const sVals = YEARS.map((y) => item.valores[y]);
                      const minS = Math.min(...sVals);
                      const maxS = Math.max(...sVals);
                      const points = sVals
                        .map((v, i) => {
                          const x = 4 + i * 18;
                          const y = maxS === minS ? 12 : 20 - ((v - minS) / (maxS - minS)) * 16;
                          return `${x},${y}`;
                        })
                        .join(' ');

                      return (
                        <tr key={item.id} className="hover:bg-slate-50/90 transition-colors">
                          <td className="py-3 px-3 font-semibold text-slate-800">{item.nome}</td>
                          <td className="py-3 px-3 text-right">
                            <MoneyDisplay
                              value={val}
                              periodicity={periodicity}
                              currencyMode={currencyMode}
                              rate={exchangeRate}
                              variant="row"
                            />
                          </td>
                          <td className="py-3 px-3 hidden sm:table-cell">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-teal-600 rounded-full"
                                  style={{ width: `${barPct}%` }}
                                />
                              </div>
                              <span className="w-11 text-right text-xs font-bold text-slate-600">
                                {formatPct(shareInterno)}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-3 text-right">
                            <span
                              className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-xs font-bold ${
                                item.var_22_24 >= 10
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : item.var_22_24 >= 0
                                  ? 'bg-slate-100 text-slate-700'
                                  : 'bg-rose-100 text-rose-800'
                              }`}
                            >
                              {formatPct(item.var_22_24, true)}
                            </span>
                          </td>
                          <td className="py-3 px-3 hidden md:table-cell">
                            <div className="flex justify-center">
                              <svg width="80" height="24" className="overflow-visible">
                                <polyline
                                  fill="none"
                                  stroke={item.var_22_24 >= 0 ? '#0D9488' : '#E11D48'}
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  points={points}
                                />
                              </svg>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                    {filteredSubgroups.length === 0 && (
                      <tr>
                        <td colSpan={5} className="py-8 text-center text-slate-400 text-sm">
                          Nenhum subgrupo encontrado para &ldquo;{foodSearch}&rdquo;.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* ABA 3: DESIGUALDADE, REGIÕES & LEI DE ENGEL                         */}
        {/* ------------------------------------------------------------------- */}
        {activeTab === 'desigualdade' && (
          <div className="space-y-6">
            {/* Banner de Destaque da Desigualdade */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5 border-l-4 border-rose-500 border-y border-r border-slate-200 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-rose-700">
                  Pressão Orçamentária • Decil I (2024)
                </div>
                <div className="text-2xl font-extrabold text-slate-900 mt-1">
                  101,0% da Renda Corrente
                </div>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  O Decil I gasta{' '}
                  <MoneyDisplay
                    value={16955}
                    periodicity={periodicity}
                    currencyMode={currencyMode}
                    rate={exchangeRate}
                    variant="inline"
                  />{' '}
                  frente a uma renda de{' '}
                  <MoneyDisplay
                    value={16795}
                    periodicity={periodicity}
                    currencyMode={currencyMode}
                    rate={exchangeRate}
                    variant="inline"
                  />.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-l-4 border-teal-600 border-y border-r border-slate-200 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Capacidade de Poupança • Decil X (2024)
                </div>
                <div className="text-2xl font-extrabold text-slate-900 mt-1">
                  50,0% da Renda Corrente
                </div>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  O Decil X gasta{' '}
                  <MoneyDisplay
                    value={117988}
                    periodicity={periodicity}
                    currencyMode={currencyMode}
                    rate={exchangeRate}
                    variant="inline"
                  />{' '}
                  de uma renda de{' '}
                  <MoneyDisplay
                    value={236095}
                    periodicity={periodicity}
                    currencyMode={currencyMode}
                    rate={exchangeRate}
                    variant="inline"
                  />{' '}
                  (<strong>6,96x</strong> o gasto do Decil I).
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-l-4 border-amber-500 border-y border-r border-slate-200 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  Comprovação Empírica da Lei de Engel
                </div>
                <div className="text-2xl font-extrabold text-slate-900 mt-1">
                  46,5% vs. 34,8%
                </div>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Em <strong>Chiapas</strong>, quase metade do orçamento monetário vai para alimentos (46,5%), contra 34,8% em <strong>Querétaro</strong>.
                </p>
              </div>
            </div>

            {/* Gráfico Renda Corrente vs. Gasto Corrente Monetário por Decil (I ao X) */}
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0B1F3A]">
                    Renda Corrente vs. Gasto Corrente Monetário por Decis de Domicílios ({selectedYear})
                  </h2>
                  <p className="text-xs text-slate-500">
                    Passe o mouse ou clique sobre um decil para inspecionar o comprometimento da renda ({periodLabel})
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className="flex items-center gap-1.5 text-[#0B1F3A]">
                    <span className="w-3 h-3 rounded-sm bg-[#0B1F3A]" />
                    Renda Corrente
                  </span>
                  <span className="flex items-center gap-1.5 text-teal-700">
                    <span className="w-3 h-3 rounded-sm bg-teal-500" />
                    Gasto Monetário
                  </span>
                </div>
              </div>

              {/* Tooltip Dinâmico Dual do Decil */}
              <div className="mb-3 min-h-[40px] flex items-center justify-between px-4 py-2 rounded-lg bg-slate-50 border border-slate-200/70 text-xs">
                {(() => {
                  const activeD = hoveredDecil || DECIS_DATA[0];
                  const r = activeD.renda[selectedYear];
                  const g = activeD.gasto[selectedYear];
                  const ratio = (g / r) * 100;
                  return (
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 w-full justify-between">
                      <span className="font-extrabold text-[#0B1F3A]">
                        Decil {activeD.decil} ({selectedYear}):
                      </span>
                      <span>
                        Renda Média:{' '}
                        <MoneyDisplay
                          value={r}
                          periodicity={periodicity}
                          currencyMode={currencyMode}
                          rate={exchangeRate}
                          variant="inline"
                        />
                      </span>
                      <span>
                        Gasto Monetário:{' '}
                        <MoneyDisplay
                          value={g}
                          periodicity={periodicity}
                          currencyMode={currencyMode}
                          rate={exchangeRate}
                          variant="inline"
                          accentClass="text-teal-700"
                        />
                      </span>
                      <span>
                        Gasto/Renda:{' '}
                        <strong className={ratio > 100 ? 'text-rose-600' : 'text-slate-900'}>
                          {formatPct(ratio)}
                        </strong>
                      </span>
                    </div>
                  );
                })()}
              </div>

              <div className="overflow-x-auto">
                <svg viewBox="0 0 760 255" className="w-full min-w-[600px] h-64 overflow-visible">
                  {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
                    const maxScale = selectedYear === '2016' ? 260000 : 245000;
                    const y = 200 - ratio * 170;
                    return (
                      <g key={ratio}>
                        <line x1="66" y1={y} x2="745" y2={y} stroke="#E2E8F0" strokeDasharray="3 3" />
                        <text x="58" y={y + 4} textAnchor="end" className="text-[10px] fill-slate-400">
                          {formatCompactChart(maxScale * ratio, periodicity, currencyMode, exchangeRate)}
                        </text>
                      </g>
                    );
                  })}

                  {DECIS_DATA.map((d, idx) => {
                    const maxScale = selectedYear === '2016' ? 260000 : 245000;
                    const rVal = d.renda[selectedYear];
                    const gVal = d.gasto[selectedYear];
                    const rH = (rVal / maxScale) * 170;
                    const gH = (gVal / maxScale) * 170;
                    const xBase = 76 + idx * 66;
                    const ratioPct = ((gVal / rVal) * 100).toFixed(0);
                    const isSelected = hoveredDecil?.decil === d.decil;

                    return (
                      <g
                        key={d.decil}
                        className="cursor-pointer"
                        onMouseEnter={() => setHoveredDecil(d)}
                        onClick={() => setHoveredDecil(d)}
                      >
                        {isSelected && (
                          <rect
                            x={xBase - 4}
                            y="22"
                            width="58"
                            height="185"
                            rx="6"
                            fill="#F1F5F9"
                          />
                        )}
                        <rect
                          x={xBase}
                          y={200 - rH}
                          width="23"
                          height={rH}
                          rx="4"
                          fill="#0B1F3A"
                        />
                        <rect
                          x={xBase + 26}
                          y={200 - gH}
                          width="23"
                          height={gH}
                          rx="4"
                          fill={Number(ratioPct) > 100 ? '#E11D48' : '#0D9488'}
                        />
                        <text
                          x={xBase + 25}
                          y={Math.min(200 - rH, 200 - gH) - 6}
                          textAnchor="middle"
                          className={`text-[9px] font-extrabold ${
                            Number(ratioPct) > 100 ? 'fill-rose-600' : 'fill-slate-600'
                          }`}
                        >
                          {ratioPct}%
                        </text>
                        <text
                          x={xBase + 25}
                          y="220"
                          textAnchor="middle"
                          className="text-xs font-bold fill-slate-800"
                        >
                          Decil {d.decil}
                        </text>
                        <text
                          x={xBase + 25}
                          y="234"
                          textAnchor="middle"
                          className="text-[9px] fill-slate-500 font-medium"
                        >
                          {formatCompactChart(gVal, periodicity, currencyMode, exchangeRate)}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Disparidades Estaduais: Top 5 Maior vs Top 5 Menor Gasto + Lei de Engel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Top 5 vs Bottom 5 Estados (5/12) */}
              <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
                <h3 className="text-base font-bold text-[#0B1F3A]">
                  Extremos Estaduais de Gasto Monetário (2024)
                </h3>
                <div className="text-xs text-slate-500 mb-4 flex flex-wrap items-center gap-1">
                  <span>Média nacional:</span>
                  <MoneyDisplay
                    value={47674}
                    periodicity={periodicity}
                    currencyMode={currencyMode}
                    rate={exchangeRate}
                    variant="inline"
                  />
                  <span>• CDMX / Chiapas: <strong>2,45x</strong></span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-teal-700 mb-2">
                      Top 5 Maior Gasto Monetário
                    </div>
                    <div className="space-y-2.5">
                      {ESTADOS_TOP5.map((st) => (
                        <div key={st.sigla} className="text-xs">
                          <div className="flex justify-between items-center font-semibold text-slate-800 mb-1">
                            <span>
                              {st.estado}{' '}
                              {st.alimentacaoPct && (
                                <span className="text-[10px] text-teal-700 font-bold">
                                  (Alim: {formatPct(st.alimentacaoPct)})
                                </span>
                              )}
                            </span>
                            <MoneyDisplay
                              value={st.gasto2024}
                              periodicity={periodicity}
                              currencyMode={currencyMode}
                              rate={exchangeRate}
                              variant="row"
                            />
                          </div>
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-teal-600 rounded-full"
                              style={{ width: `${(st.gasto2024 / 67000) * 100}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-rose-700 mb-2">
                      Top 5 Menor Gasto Monetário
                    </div>
                    <div className="space-y-2.5">
                      {ESTADOS_BOTTOM5.map((st) => (
                        <div key={st.sigla} className="text-xs">
                          <div className="flex justify-between items-center font-semibold text-slate-800 mb-1">
                            <span>
                              {st.estado}{' '}
                              {st.alimentacaoPct && (
                                <span className="text-[10px] text-rose-700 font-bold">
                                  (Alim: {formatPct(st.alimentacaoPct)})
                                </span>
                              )}
                            </span>
                            <MoneyDisplay
                              value={st.gasto2024}
                              periodicity={periodicity}
                              currencyMode={currencyMode}
                              rate={exchangeRate}
                              variant="row"
                              accentClass="text-slate-900"
                            />
                          </div>
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-rose-500 rounded-full"
                              style={{ width: `${(st.gasto2024 / 67000) * 100}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparativo Lei de Engel + Brecha Urbano vs Rural (7/12) */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
                  <h3 className="text-base font-bold text-[#0B1F3A]">
                    Lei de Engel na Prática: Estrutura Orçamentária por Estado (2024)
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Quanto menor o nível de renda estadual, maior a fatia comprometida com alimentação básica e menor o espaço para educação e lazer
                  </p>

                  <div className="space-y-3.5">
                    {LEI_ENGEL_ESTADOS.map((item) => {
                      const outrosAgrupados = Number(
                        (
                          100 -
                          item.alimentos -
                          item.transporte -
                          item.educacao -
                          item.moradia
                        ).toFixed(1)
                      );
                      return (
                        <div key={item.estado} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <div className="flex flex-wrap items-center justify-between gap-1 mb-2 text-xs">
                            <div>
                              <span className="font-extrabold text-[#0B1F3A]">{item.estado}</span>
                              <span className="ml-2 text-[11px] text-slate-500">({item.perfil})</span>
                            </div>
                            <MoneyDisplay
                              value={item.gastoMonetario}
                              periodicity={periodicity}
                              currencyMode={currencyMode}
                              rate={exchangeRate}
                              variant="inline"
                            />
                          </div>

                          <div className="w-full h-5 rounded-md overflow-hidden flex text-[10px] font-bold text-white">
                            <div
                              style={{ width: `${item.alimentos}%` }}
                              className="bg-teal-600 flex items-center justify-center"
                              title={`Alimentos: ${item.alimentos}%`}
                            >
                              {item.alimentos}%
                            </div>
                            <div
                              style={{ width: `${item.transporte}%` }}
                              className="bg-[#0B1F3A] flex items-center justify-center"
                              title={`Transporte: ${item.transporte}%`}
                            >
                              {item.transporte}%
                            </div>
                            <div
                              style={{ width: `${item.educacao}%` }}
                              className="bg-blue-600 flex items-center justify-center"
                              title={`Educação e Lazer: ${item.educacao}%`}
                            >
                              {item.educacao}%
                            </div>
                            <div
                              style={{ width: `${item.moradia}%` }}
                              className="bg-indigo-500 flex items-center justify-center"
                              title={`Moradia: ${item.moradia}%`}
                            >
                              {item.moradia}%
                            </div>
                            <div
                              style={{ width: `${outrosAgrupados}%` }}
                              className="bg-slate-400 flex items-center justify-center"
                              title={`Demais 5 grupos: ${outrosAgrupados}%`}
                            >
                              {outrosAgrupados}%
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-3 pt-3 border-t border-slate-100 text-[11px] font-medium text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-teal-600" /> Alimentos
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-[#0B1F3A]" /> Transporte
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-blue-600" /> Educação/Lazer
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-indigo-500" /> Moradia
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-slate-400" /> Outros 5 grupos
                    </span>
                  </div>
                </div>

                {/* Brecha Urbano vs Rural (Gasto Corrente Total 2024) */}
                <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
                  <h3 className="text-base font-bold text-[#0B1F3A] mb-1">
                    Assimetria Urbano vs. Rural — Gasto Corrente Total (2024)
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">
                    Comparativo entre localidades urbanas (≥ 2.500 hab.) e rurais (&lt; 2.500 hab.)
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {URBANO_RURAL_DESTAQUES.slice(0, 6).map((ur) => {
                      const gap = ((ur.urbano - ur.rural) / ur.rural) * 100;
                      return (
                        <div
                          key={ur.estado}
                          className="p-3 rounded-lg bg-slate-50 border border-slate-200/70 flex flex-col justify-between"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-slate-800">{ur.estado}</span>
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                              +{gap.toFixed(0)}% urbano
                            </span>
                          </div>
                          <div className="space-y-1 text-[11px] text-slate-600">
                            <div className="flex justify-between">
                              <span>Urbano:</span>
                              <MoneyDisplay
                                value={ur.urbano}
                                periodicity={periodicity}
                                currencyMode={currencyMode}
                                rate={exchangeRate}
                                variant="inline"
                                accentClass="text-teal-700"
                              />
                            </div>
                            <div className="flex justify-between">
                              <span>Rural:</span>
                              <MoneyDisplay
                                value={ur.rural}
                                periodicity={periodicity}
                                currencyMode={currencyMode}
                                rate={exchangeRate}
                                variant="inline"
                                accentClass="text-[#0B1F3A]"
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* ABA 4: INSIGHTS EXECUTIVOS & ARQUITETURA DE DADOS / API             */}
        {/* ------------------------------------------------------------------- */}
        {activeTab === 'insights' && (
          <div className="space-y-6">
            {/* 6 Cartões de Insights Estratégicos */}
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <IconSparkles className="w-5 h-5 text-teal-600" />
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0B1F3A]">
                    Síntese Executiva & Implicações de Negócio (ENIGH 2024)
                  </h2>
                  <p className="text-xs text-slate-500">
                    Conclusões acionáveis extraídas dos microdados agregados do INEGI com equivalência em Real Brasileiro
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-teal-700 mb-1.5">
                    01. Rigidez do Orçamento Alimentar
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Apesar do crescimento real de <strong>+10,6% na renda corrente</strong> (2022–2024), o grupo <em>Alimentos, bebidas e tabaco</em> manteve exatamente <strong>37,7%</strong> do gasto monetário (
                    <MoneyDisplay
                      value={17982}
                      periodicity={periodicity}
                      currencyMode={currencyMode}
                      rate={exchangeRate}
                      variant="inline"
                    />
                    ), consolidando uma mudança estrutural frente aos 35,1% de 2016.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-1.5">
                    02. Boom do Foodservice (Fora do Lar)
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    O gasto com alimentação fora do domicílio cresceu <strong>+19,2%</strong> entre 2022 e 2024 (atingindo{' '}
                    <MoneyDisplay
                      value={3896}
                      periodicity={periodicity}
                      currencyMode={currencyMode}
                      rate={exchangeRate}
                      variant="inline"
                    />{' '}
                    ou 21,7% da verba alimentar), mais que dobrando frente ao piso de 2020 (MX$ 1.915).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-blue-700 mb-1.5">
                    03. Mudança no Mix da Cesta Básica
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Dentro do lar, <em>Carnes</em> (MX$ 3.247) e <em>Cereais</em> (MX$ 2.254) lideram, mas <em>Cereais</em> recuaram <strong>-1,9%</strong> e <em>Óleos/gorduras</em> caíram <strong>-16,2%</strong>, enquanto <em>Especiarias</em> (+19,3%), <em>Frutas</em> (+15,3%) e <em>Alimentos diversos</em> (+13,5%) aceleraram.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
                    04. Ciclo de Equipamento do Lar
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <em>Utensílios domésticos e limpeza</em> foi o grande grupo de maior expansão relativa no biênio (<strong>+12,2%</strong>), seguido por <em>Transporte e comunicações</em> (+9,3%) e <em>Cuidados pessoais</em> (+9,1%), sinalizando reposição de bens duráveis.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-rose-700 mb-1.5">
                    05. Vulnerabilidade na Base da Pirâmide
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    O <strong>Decil I</strong> compromete <strong>101,0%</strong> de sua renda corrente apenas com despesas monetárias correntes (MX$ 16.955 vs. MX$ 16.795), dependendo de transferências não monetárias ou crédito para fechar o trimestre.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                    06. Polarização Geográfica (Norte/Centro vs. Sul)
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Um domicílio na <strong>Ciudad de México</strong> (
                    <MoneyDisplay
                      value={66383}
                      periodicity={periodicity}
                      currencyMode={currencyMode}
                      rate={exchangeRate}
                      variant="inline"
                    />
                    ) gasta <strong>2,45 vezes</strong> mais que um domicílio em <strong>Chiapas</strong> (
                    <MoneyDisplay
                      value={27118}
                      periodicity={periodicity}
                      currencyMode={currencyMode}
                      rate={exchangeRate}
                      variant="inline"
                    />
                    ).
                  </p>
                </div>
              </div>
            </div>

            {/* Ficha Técnica e Arquitetura de Câmbio via API */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5 bg-[#0B1F3A] text-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
                  <IconFileSpreadsheet className="w-4 h-4" />
                  Ficha Técnica Oficial (INEGI)
                </div>
                <h3 className="text-lg font-bold mb-4">
                  Encuesta Nacional de Ingresos y Gastos de los Hogares (ENIGH 2024)
                </h3>
                <dl className="space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <dt className="text-slate-300">Órgão Responsável</dt>
                    <dd className="font-bold text-white">INEGI (México) • Publicação Jul/2025</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <dt className="text-slate-300">Tamanho da Amostra</dt>
                    <dd className="font-bold text-teal-300">105.718 domicílios particulares</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <dt className="text-slate-300">Período de Coleta</dt>
                    <dd className="font-bold text-white">21 de agosto a 28 de novembro de 2024</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <dt className="text-slate-300">Equipe de Campo</dt>
                    <dd className="font-bold text-white">3.127 entrevistadores e supervisores</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <dt className="text-slate-300">Unidade Base Oficial</dt>
                    <dd className="font-bold text-amber-300">Pesos Mexicanos (MXN) constantes de 2024</dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-slate-300">Conversão BRL Ativa</dt>
                    <dd className="font-bold text-emerald-300">
                      1 MXN = R$ {exchangeRate.toFixed(4).replace('.', ',')} ({rateSource})
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200/80 shadow-sm p-6">
                <h3 className="text-base sm:text-lg font-bold text-[#0B1F3A] mb-3">
                  Arquitetura da Integração Cambial & Glossário Metodológico
                </h3>
                <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                  <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200/70">
                    <strong className="text-emerald-950 block mb-1">
                      1. Pipeline Resiliente de Câmbio em Tempo Real (MXN → BRL):
                    </strong>
                    Ao inicializar ou ao clicar em <em>Atualizar Cotação</em>, a aplicação consulta em cadeia a API primária{' '}
                    <code className="px-1 py-0.5 rounded bg-white text-emerald-900 font-mono">
                      open.er-api.com/v6/latest/MXN
                    </code>{' '}
                    e, em caso de indisponibilidade, aciona a API secundária{' '}
                    <code className="px-1 py-0.5 rounded bg-white text-emerald-900 font-mono">
                      api.frankfurter.app/latest?from=MXN&amp;to=BRL
                    </code>
                    . Caso o ambiente restrinja tráfego externo, o sistema ativa automaticamente a taxa de referência (<strong>R$ 0,3057</strong>) e libera o simulador manual de sensibilidade.
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900 block mb-0.5">
                      2. Gasto Corrente Total (MX$ 61.309) = Monetário (MX$ 47.674) + Não Monetário (MX$ 13.635):
                    </strong>
                    O gasto monetário compreende desembolsos diretos em dinheiro ou cartão para aquisição de bens e serviços. O não monetário inclui autoconsumo, remuneração em espécie, transferências em produtos/serviços e a <em>estimativa de aluguel</em> de imóveis próprios.
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900 block mb-0.5">
                      3. Erogações Financeiras e de Capital (MX$ 11.396):
                    </strong>
                    Transações que modificam o patrimônio líquido do domicílio: prestações pagas pela compra de moradia própria, materiais/serviços para ampliação ou reforma estrutural, depósitos em poupança, investimentos e amortização de dívidas.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}