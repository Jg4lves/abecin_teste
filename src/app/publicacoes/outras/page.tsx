'use client'

import PageTitle from '@/components/layout/PageTitle'
import PageContent from '@/components/layout/PageContent'
import PublicacoesService from '@/utils/services/publicacoes'
import BoxPublishers from '@/components/publicacoes/outras/BoxPublishers'
import { useState, useEffect } from 'react'

export interface ColecaoProp {
	id: number
	titulo: string
	conteudo: string
	thumbnail: string | boolean
	link: string
	pdf_url: string
	categoria: number
}

export interface CategoriasProp {
	id: number
	nome: string
	descricao: string
	slug: string
	url: string
}

export default function Outras() {
	const [categorias, setCategorias] = useState<CategoriasProp[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCategorias = async () => {
			try {
				const response = await PublicacoesService.getCategorias()
				setCategorias(response)
			} catch (err) {
				if (err instanceof Error) {
					console.error(err.message)
					setError(err.message)
				} else {
					console.error('Erro desconhecido', err);
				}
			} finally {
				setLoading(false)
			}
		}
		// Chama a função para buscar os dados
		fetchCategorias()
	}, [])

	if (loading)
		return (
			<PageContent>
				<PageTitle title="Carregando..." />
			</PageContent>
		);

	if (error)
		return (
			<PageContent>
				<p>Erro: {error}</p>
			</PageContent>
		);

	return (
		<PageContent>
			<PageTitle title="Memória" />
			<p className="mt-12 font-medium">
				Conheça outras publicações relevantes na área:
			</p>
			<div className="mt-8 flex flex-col gap-8">
				{categorias.map((categorias) => (
					<BoxPublishers
						key={categorias.id}
						title={categorias.nome}
						description={categorias.descricao}
						rota={categorias.id}
					/>
				))}
			</div>
		</PageContent>
	)
}