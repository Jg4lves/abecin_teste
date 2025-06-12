'use client'

import PageContent from "@/components/layout/PageContent";
import PageTitle from "@/components/layout/PageTitle";
import { Associado_ano } from "@/types/Associados";
import AssociadoService from "@/utils/services/associados";
import { useEffect, useState } from "react";
import BoxAno from "@/components/associados/BoxAno";

export default function AssociadosAnteriores() {
    const [anosAssociados, setAnosAssociados] = useState<Associado_ano[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAnosAssociados = async () => {
            try {
                const response = await AssociadoService.getAnosAssociados();
                const anoAtual = new Date().getFullYear();
                const anosFiltrados = response
                    .filter((associado: Associado_ano) => parseInt(associado.ano) < anoAtual)
                    .sort((a, b) => parseInt(b.ano) - parseInt(a.ano));

                setAnosAssociados(anosFiltrados);
            } catch (err) {
                if (err instanceof Error) {
                    console.error(err.message);
                    setError(err.message);
                }
                else {
                    console.error('Erro desconhecido', err);
                }
            } finally {
                setLoading(false);
            }
        };
        // Chama a função para buscar os dados
        fetchAnosAssociados();
    }, []);

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
            <PageTitle title="Associados Anteriores" />
            <div className="grid grid-cols-3 max-md:grid-cols-1 align-middle gap-4 mt-12 justify-center items-center">
                {anosAssociados.length > 0 ? (
                    anosAssociados.map((associado) => (
                        <BoxAno key={associado.id} ano={associado.ano} />
                    ))
                ) : (
                    <p className="text-lg">Nenhum associado encontrado.</p>
                )}
            </div>
        </PageContent>
    );
}