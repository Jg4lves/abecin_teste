export interface Concurso {
    id: number;
    titulo: string;
    conteudo: string;
    thumbnail: string;
    ano: string[];
}

export interface Concurso_ano {
    id: number;
    ano: string;
    slug: string;
    url: string;
}
