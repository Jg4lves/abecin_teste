'use client'

import PageContent from "@/components/layout/PageContent";
import PageTitle from "@/components/layout/PageTitle";
import { Concurso } from "@/types/Concurso";
import ConcursosService from "@/utils/services/concursos";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { use } from "react";

export default function ConcursoDetalhes({ params }: { params: Promise<{ ano: string }> }) {
    const { ano } = use(params);
    const [concurso, setConcurso] = useState<Concurso | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchConcurso = async () => {
            try {
                const response = await ConcursosService.getConcursoPorAno(ano);
                setConcurso(response);
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
        fetchConcurso();
    }, [ano]);

    // Add attributes to all links in the content
    useEffect(() => {
        if (contentRef.current) {
            const links = contentRef.current.getElementsByTagName('a');
            Array.from(links).forEach(link => {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            });
        }
    }, [concurso]);

    if (loading)
        return (
            <PageContent>
                <PageTitle title="Carregando..." />
            </PageContent>
        );

    if (error)
        return (
            <PageContent>
                <PageTitle title={`Concurso TCC ${ano}`} />
                <p className="text-center text-lg mt-8">{error}</p>
            </PageContent>
        );

    if (!concurso)
        return (
            <PageContent>
                <PageTitle title={`Concurso TCC ${ano}`} />
                <p className="text-center text-lg mt-8">Nenhum concurso encontrado para este ano.</p>
            </PageContent>
        );

    return (
        <PageContent>
            <PageTitle className="mb-12" title={concurso.titulo} />
            <div className="mt-8 flex flex-col gap-8">
                {concurso.thumbnail && (
                    <div className="relative w-full h-[400px]">
                        <Image
                            src={concurso.thumbnail}
                            alt={concurso.titulo}
                            fill
                            className="object-contain"
                        />
                    </div>
                )}
                <div
                    ref={contentRef}
                    className="prose max-w-none [&_a]:text-blue-600 [&_a]:underline [&_a]:decoration-2 [&_a:hover]:text-blue-800 [&_a:hover]:decoration-4"
                    dangerouslySetInnerHTML={{ __html: concurso.conteudo }}
                />
            </div>
        </PageContent>
    );
} 