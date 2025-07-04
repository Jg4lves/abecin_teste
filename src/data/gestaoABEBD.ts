import { Gestao, GestaoPeriodo } from "@/types/Gestao";


const gestoesAbebd: Gestao[] = [
    {
        periodo: '09/01/1967 a 09/07/1969 (Primeira Gestão)',
        diretoria: {
            presidente: 'Maria Martha de Carvalho (UFMG)',
            vice_presidente: 'Zenaira Garcia Marques (UFRGS)',
            primeiro_secretario: 'Ana Maria Polke (UFMG)',
            segundo_secretario: 'Jahyra Correa Santos (UFGRS)',
            primeiro_tesoureiro: 'Elton Eugênio Volpini (UFMG)',
            segundo_tesoureiro: 'Minda Groismann (UFRGS)',
        },
        coordenacao_regional: {},
    },
    {
        periodo: '09/07/1969 a 09/07/1971',
        diretoria: {
            presidente: 'Alfredo Américo Hamar (USP)',
            vice_presidente: 'Maria Stela Santos Pita Leite (UFBA)',
            primeiro_secretario: 'Iara Correia (USP)',
            segundo_secretario: 'Esmeralda Aragão (UFBA)',
            primeiro_tesoureiro: 'Neide Pedroso Póvoa (USP)',
            segundo_tesoureiro: 'Eurídice Pires de Santana (UFBA)',
        },
        coordenacao_regional: {},
    },
    {
        periodo: '09/07/1971 a 31/07/1973',
        diretoria: {
            presidente: 'Álvaro Sobreal Barcellos (UFF)',
            vice_presidente: 'Maria Lúcia Pacheco de Almeida (UFPA)',
            primeiro_secretario: 'Dyrse Barreto Ferreira (UFF)',
            segundo_secretario: 'Maria Lúcia Vasconcelos Coelho (UFPA)',
            primeiro_tesoureiro: 'Eliane de Oliveira Sebóia Ribeiro (UFF)',
            segundo_tesoureiro: 'Tereza Jane de Vasconcelos Souza Filho (UFPA)',
        },
        coordenacao_regional: {},
    },
    {
        periodo: '31/07/1973 a 25/07/1975',
        diretoria: {
            presidente: 'Maria Stela Pita Leite (UFBA)',
            vice_presidente: 'Zenaira Garcia Marquez (UFRGS)',
            primeiro_secretario: 'Maria de Lourdes do Carmo Conceição (UFBA)',
            segundo_secretario: 'Sara Rotman Jakbson (UFRGS)',
            primeiro_tesoureiro: 'Marinha Andrade (UFBA)',
            segundo_tesoureiro: 'Evangelina de Azevedo Veiga (UFRGS)',
        },
        coordenacao_regional: {},
    },
    {
        periodo: '25/07/1975 a 15/07/1978',
        diretoria: {
            presidente: 'Maria Antônia Ribas Pinke Belfort de Mattos (PUC-Campinas)',
            vice_presidente: 'Alfredo Américo Hamar (USP)',
            primeiro_secretario: 'Henriette Simões Ferreira de Toledo (PUC-Campinas)',
            segundo_secretario: 'Miriam Zambel (PUC-Campinas)',
            primeiro_tesoureiro: 'Edilza Bonavita Martins Mendes (PUC-Campinas)',
            segundo_tesoureiro: 'Eufélia Pupo Paula (PUC-Campinas)',
        },
        coordenacao_regional: {},
    },
    {
        periodo: '07/07/1977 a 09/07/1979?',
        diretoria: {
            presidente: 'Maria Antônia Ribas Pinke Belfort de Mattos (PUC-Campinas)',
            primeiro_secretario: 'Alice Gonçalvez Strazzacappa Hernández (PUC-Campinas)',
            primeiro_tesoureiro: 'Vânia Lande de Carvalho (FESP/SP)',
        },
        coordenacao_regional: {},
    },
    {
        periodo: '15/07/1978 a 21/07/1979 (1981)?',
        diretoria: {
            presidente: 'Regina Célia Montenegro de Lima (IBICT/UFRJ)',
            primeiro_secretario: 'Amélia Silveira (UFSC)',
            segundo_secretario: 'Maria Nazaré de Freitas Pereira (IBICT/UFRJ) - substituta a partir de 05/1981',
            primeiro_tesoureiro: 'Ida Maria Cardoso de Lima (UFSC) - substituta a partir de 05/1981',
        },
        coordenacao_regional: {},
    },
    {
        periodo: '17/01/1982 a 24/10/1983',
        diretoria: {
            presidente: 'Cléa Dubeux Pinto Pimentel (UFPE)',
            primeiro_secretario: 'Fernanda Ivo Neves (UFPE)',
            primeiro_tesoureiro: 'Maria das Graças de Lima Melo (UFPE)',
        },
        coordenacao_regional: {},
    },
    {
        periodo: '24/10/1983 a 26/02/1986',
        diretoria: {
            presidente: 'Cléa Dubeux Pinto Pimentel (UFPE)',
            primeiro_secretario: 'Fernanda Ivo Neves (UFPE)',
            primeiro_tesoureiro: 'Maria das Graças de Lima Melo (UFPE)',
        },
        coordenacao_regional: {},
    },
    {
        periodo: '27/02/1986 a 02/1988',
        diretoria: {
            presidente: 'Fernanda Ivo Neves (UFPE)',
        },
        coordenacao_regional: {},
    },
    {
        periodo: '28/07/1988 a 29/08/1989',
        diretoria: {
            presidente: 'Lourdes Gregol Fagundes da Silva (UFRGS)',
            primeiro_secretario: 'Lígia Beatriz Meurer (UFRGS)\nInês Rosito Pinto Kruel (UFRGS) - substituta a partir de 27/09/1988',
            segundo_secretario: 'Jussara Pereira Santos (UFRGS)',
            primeiro_tesoureiro: 'Coeli Maria Juliano (FURG)',
        },
        coordenacao_regional: {},
    },
    {
        periodo: '29/08/1989 a 26/09/1991',
        diretoria: {
            presidente: 'Lourdes Gregol Fagundes da Silva (UFRGS)',
            primeiro_secretario: 'Inês Rosito Pinto Kruel (UFRGS)',
            segundo_secretario: 'Jussara Pereira Santos (UFRGS)',
        },
        coordenacao_regional: {},
    },
    {
        periodo: '26/09/1991 a 24/11/1993',
        diretoria: {
            presidente: 'José Augusto Chaves Guimarães (Unesp)',
            primeiro_secretario: 'Bárbara Fadel (Unesp)',
            primeiro_tesoureiro: 'Maria de Lurdes Bertachini (Unesp)',
        },
        coordenacao_regional: {},
    },
    {
        periodo: '25/11/1993 a 22/08/1995',
        diretoria: {
            presidente: 'José Augusto Chaves Guimarães (Unesp)',
            vice_presidente: 'Oswaldo Francisco de Almeida Júnior (USP)',
            primeiro_secretario: 'Bárbara Fadel (Unesp)',
            segundo_secretario: 'Rosemeire Marino Nastri (EBDSC/São Carlos)',
            primeiro_tesoureiro: 'Maria de Lurdes Bertachini (Unesp)',
            segundo_tesoureiro: 'Maria Edith Giusti Serra (FESP/SP)',
        },
        coordenacao_regional: {},
    },
    {
        periodo: '23/08/1995 a 22/08/1997',
        diretoria: {
            presidente: 'Jussara Pereira Santos (UFRGS)',
            vice_presidente: 'Lígia Leindorf Bartz Kraemer (UFPR)',
            primeiro_secretario: 'Iara Conceição Bitencourt Neves (UFRGS)',
            segundo_secretario: 'Cláudia Gonçalvez de Souza (UFSC)',
            primeiro_tesoureiro: 'Maria do Rocio Fontoura Teixeira (UFRGS)',
            segundo_tesoureiro: 'Vilma Gimenez da Cruz (UEL)',
        },
        coordenacao_regional: {},
    },
    {
        periodo: '23/07/1997 a 08/1998',
        diretoria: {
            presidente: 'Jussara Pereira Santos (UFRGS)',
            vice_presidente: 'Lígia Leindorf Bartz Kraemer (UFPR)',
            primeiro_secretario: 'Iara Conceição Bitencourt Neves (UFRGS)',
            segundo_secretario: 'Cláudia Gonçalvez de Souza (UFSC)',
            primeiro_tesoureiro: 'Maria do Rocio Fontoura Teixeira (UFRGS)',
            segundo_tesoureiro: 'Vilma Gimenez da Cruz (UEL)',
        },
        coordenacao_regional: {},
    },
    {
        periodo: '1998-2001 (Última Gestão)',
        diretoria: {
            presidente: 'Vera Sílvia Marão Beraquet (PUC-Campinas)',
            vice_presidente: 'Marta Lígia Pomim Valentim (UEL)',
            primeiro_secretario: 'Mariângela Pisoni Zanaga (PUC-Campinas)',
            primeiro_tesoureiro: 'Marisa Marques Zanatta (PUC-Campinas)',
        },
        coordenacao_regional: {},
    },
];

const periodosAbebd: GestaoPeriodo[] = gestoesAbebd.map((gestao, idx) => ({
  id: idx + 1,
  periodo: gestao.periodo,
  slug: gestao.periodo.split(' ')[0].replace(/\//g, '-'),
  url: `/historico/ABEBD/${idx + 1}`,
  associacao: 'ABEBD',
}));

export default gestoesAbebd;
export { periodosAbebd };