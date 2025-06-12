'use client';

import PageContent from "@/components/layout/PageContent";
import PageTitle from "@/components/layout/PageTitle";
import NoticiasService from "@/utils/services/noticias";
import React, { useState, useEffect } from "react";
import Noticia from "@/types/Noticia";
import parse from "html-react-parser"; // Importa o html-react-parser
import Image from "next/image";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = React.use(params);
    const [noticia, setNoticia] = useState<Noticia>({} as Noticia);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const response = await NoticiasService.getNoticiaPorId(id);
                setNoticia(response);
            } catch (err) {
                if (err instanceof Error) {
                    console.error(err.message);
                    setError(err.message);
                } else {
                    console.error("Erro desconhecido", err);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchNoticias();
    }, [id]);

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
            <div className="flex pt-8 flex-col gap-4">
                <div className="flex flex-col gap-12">
                    <div className="p-2 flex flex-col gap-4">
                        <h1 className="text-4xl font-bold">{noticia.titulo}</h1>
                        <div className="flex items-center gap-2 mb-6">
                            <i className="fa-regular text-xl fa-newspaper" />
                            <p className="text-base font-medium">
                                {new Date(noticia.data).toLocaleDateString("pt-BR", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </p>
                        </div>
                        <Image
                            src={noticia.thumbnail}
                            alt={noticia.titulo}
                            className="rounded-md w-full h-auto"
                            width={800} // Adjust width as needed
                            height={600} // Adjust height as needed
                            priority // Optional: for LCP optimization
                        />
                    </div>
                    <div className="noticia-conteudo space-y-4">
                        {parse(noticia.conteudo)}
                    </div>
                </div>
            </div>

        </PageContent >
    );
}