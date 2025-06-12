'use client'

import PageContent from "@/components/layout/PageContent";
import PageTitle from "@/components/layout/PageTitle";
import { Concurso_ano } from "@/types/Concurso";
import ConcursosService from "@/utils/services/concursos";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Concursos() {
    const [anosConcursos, setAnosConcursos] = useState<Concurso_ano[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAnosConcursos = async () => {
            try {
                const response = await ConcursosService.getConcursos();
                const sortedConcursos = response.sort((a, b) => parseInt(b.ano) - parseInt(a.ano));
                setAnosConcursos(sortedConcursos);
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
        fetchAnosConcursos();
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
            <PageTitle title="Concursos" />
            <div className="grid grid-cols-3 max-md:grid-cols-1 align-middle gap-4 mt-12 justify-center items-center">
                {anosConcursos.length > 0 ? (
                    anosConcursos.map((concurso) => (
                        <Link
                            key={concurso.id}
                            href={`/concursos/${concurso.ano}`}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center"
                        >
                            <h3 className="text-xl font-semibold text-abecin-primary">
                                Concurso TCC {concurso.ano}
                            </h3>
                        </Link>
                    ))
                ) : (
                    <p className="text-lg">Nenhum concurso encontrado.</p>
                )}
            </div>
        </PageContent>
    );
}
