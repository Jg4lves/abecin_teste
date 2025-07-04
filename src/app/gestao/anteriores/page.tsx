'use client'

import PageTitle from "@/components/layout/PageTitle"
import PageContent from "@/components/layout/PageContent"
import { useEffect, useState } from "react";
import GestaoService from "@/utils/services/gestao";
import BoxGestao from "@/components/gestao/BoxGestao";
import { GestaoPeriodo } from "@/types/Gestao";


export default function GestaoAnterior() {
    const [periodos, setPeriodos] = useState<GestaoPeriodo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await GestaoService.getPeriodos();
                const sortedPeriods = response.sort((a, b) => b.periodo.localeCompare(a.periodo));
                setPeriodos(sortedPeriods);
            } catch (err) {
                if (err instanceof Error) {
                    console.error(err.message);
                    setError(err.message);
                } else {
                    console.error('Erro desconhecido', err);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Carregando períodos...</p>;

    if (error) return <p>Erro: {error}</p>;

    return (
        <PageContent>
            <PageTitle title="Gestões Anteriores" className="mb-20" />
            <div className="flex flex-col gap-32">
                {periodos.map((periodo) => (
                    <BoxGestao
                        key={periodo.id}
                        id={periodo.id}
                        periodo={periodo.periodo}
                        slug={periodo.slug}
                        url={periodo.url}
                        associacao={periodo.associacao} />
                ))}
            </div>
        </PageContent>
    );
}