'use client'

import PageContent from "@/components/layout/PageContent";
import PageTitle from "@/components/layout/PageTitle";
import React, { useState, useEffect } from "react";
import { Associados, AssociadosInstitucional } from "@/types/Associados";
import AssociadoService from "@/utils/services/associados";

export default function AssociadosAno({ params }: { params: Promise<{ ano: string }> }) {
    const [associados, setAssociados] = useState<Associados>({} as Associados);
    const [instituicoes, setInstituicoes] = useState<AssociadosInstitucional[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { ano } = React.use(params)

    useEffect(() => {
        const fetchAssociados = async () => {
            try {
                const response = await AssociadoService.getAssociadosByAno(ano)
                const responseInstituicoes = await AssociadoService.getAssociadosInstitucional()
                if (responseInstituicoes) {
                    const filteredInstituicoes = responseInstituicoes.filter((instituicao: AssociadosInstitucional) => instituicao.categorias.includes(ano));
                    setInstituicoes(filteredInstituicoes);
                }

                setAssociados(response)
            } catch (err) {
                if (err instanceof Error) {
                    console.error(err.message)
                    setError(err.message)
                } else {
                    console.error('Erro desconhecido', err);
                }
            }
            finally {
                setLoading(false)
            }
        }
        // Chama a função para buscar os dados
        fetchAssociados()
    }, [ano])

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
            <PageTitle title={`Associados do ano ${ano}`} />
            <div className="flex flex-col gap-4 mt-20">
                <PageTitle title='Sócios Individuais' className="!text-2xl !font-medium mb-6" spanClassName="h-[0.4rem]" />
                {associados?.socios_individuais && associados.socios_individuais.length > 0 ? (
                    associados.socios_individuais.map((associado: string, index: number) => (
                        <div key={index} className="flex flex-row gap-2 font-medium items-center">
                            <i className="fa-regular fa-user" />
                            <p className="text-xl">{associado}</p>
                        </div>
                    ))
                ) : (
                    <p>Ainda não existem sócios individuais cadastrados nesse ano</p>
                )}
                <PageTitle title='Sócios Institucionais' className="!text-2xl !font-medium my-12" spanClassName="h-[0.4rem]" />
                {instituicoes.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {instituicoes.map((instituicao: AssociadosInstitucional, index: number) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img key={index} src={instituicao.thumbnail} alt={instituicao.titulo} className="w-36 h-auto" />
                        ))}
                    </div>
                ) : (
                    <p>Ainda não existem sócios institucionais cadastrados nesse ano</p>
                )}
            </div>
        </PageContent>
    );
}