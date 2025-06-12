'use client'

import PageContent from "@/components/layout/PageContent"
import PageTitle from "@/components/layout/PageTitle"
import BoxColecoes from "@/components/publicacoes/outras/BoxColecoes"
import { ColecaoProp, CategoriasProp } from "../page"
import React, { useState, useEffect } from "react"
import PublicacoesService from "@/utils/services/publicacoes"

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    const [colecoes, setColecoes] = useState<ColecaoProp[]>([]);
    const [categoria, setCategoria] = useState<CategoriasProp>({} as CategoriasProp);
    const { id } = React.use(params);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchColecoes = async () => {
            try {
                const response = await PublicacoesService.getPublicacaoPorCategoria(id)
                setColecoes(response)
                const categoriaResponse = await PublicacoesService.getCategoriasPorId(id)
                setCategoria(categoriaResponse)
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
        fetchColecoes()
    }, [id])

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
            <PageTitle title={categoria.nome} />
            <div className="flex mt-12 flex-col gap-4">
                <p className="text-xl mb-12">{categoria.descricao}</p>
                {colecoes.length > 0 ? (
                    colecoes.map((colecao) => (
                        <BoxColecoes
                            key={colecao.id}
                            titulo={colecao.titulo}
                            conteudo={colecao.conteudo}
                            pdf_url={colecao.pdf_url}
                            thumbnail={colecao.thumbnail}
                            id={colecao.id}
                            link={colecao.link}
                            categoria={colecao.categoria}
                        />
                    ))
                ) : (
                    <p className="text-center text-lg text-gray-500">
                        Nenhuma publicação registrada nesta coleção.
                    </p>
                )}
            </div>
        </PageContent>
    )
}