interface diretoria {
	presidente?: string
	vice_presidente?: string
	primeiro_secretario?: string
	segundo_secretario?: string
	primeiro_tesoureiro?: string
	segundo_tesoureiro?: string
}

interface coordenacao_regional {
	centro_oeste?: string
	nordeste?: string
	norte?: string
	sao_paulo?: string
	sudeste?: string
	sul?: string
}

export interface Gestao {
	periodo: string
	diretoria: diretoria
	conselho_fiscal?: string[]
	coordenacao_regional: coordenacao_regional
	comissao_ead?: string[]
}

export interface GestaoPeriodo {
	id: number
	periodo: string
	slug: string
	url: string
}

export interface Gestores {
	cargo: string
	nome: string
	periodo: string
}
