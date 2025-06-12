export interface Associados {
    titulo: string
    socios_individuais?: string[]
    ano: string
}

export interface AssociadoPlano {
    titulo: string
    descricao: string
    valor: string
}   

export interface Associado_ano {
    id: number
    ano: string
    slug: string
    url: string
}

export interface AssociadosInstitucional {
    id: number
    titulo: string
    thumbnail: string
    categorias: string[]
}