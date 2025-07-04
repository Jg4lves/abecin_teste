'use client'; 

import PageContent from "@/components/layout/PageContent";
import PageTitle from "@/components/layout/PageTitle";
import NoticiasService from "@/utils/services/noticias";
import Noticia from "@/types/Noticia";
import parse from "html-react-parser";
import Link from "next/link";

// Custom parser options to handle nested anchor tags
const parserOptions = {
    replace: (domNode: any) => {
        if (domNode.type === 'tag' && domNode.name === 'a') {
            const hasNestedAnchors = domNode.children?.some((child: any) =>
                child.type === 'tag' && child.name === 'a'
            );

            if (hasNestedAnchors) {
                return {
                    type: 'tag',
                    name: 'span',
                    attribs: { ...domNode.attribs, style: 'color: blue; text-decoration: underline; cursor: pointer;' },
                    children: domNode.children
                };
            }
        }
    }
};

interface SearchPageProps {
    params: {
        query: string;
    }
}

export default async function SearchPage({ params }: SearchPageProps) {
    let noticias: Noticia[] = [];
    let error: string | null = null;

    try {
        noticias = await NoticiasService.searchNoticias(params.query);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            error = err.message;
        } else {
            console.error("Erro desconhecido", err);
            error = "Erro desconhecido";
        }
    }

    if (error) {
        return (
            <PageContent>
                <p>Erro: {error}</p>
            </PageContent>
        );
    }

    return (
        <PageContent>
            <PageTitle title={`Resultados da busca: "${params.query}"`} />
            <div className="flex mt-12 pt-8 flex-col gap-4">
                {noticias.length > 0 ? (
                    <div className="flex flex-col gap-12">
                        {noticias.map((noticia) => (
                            <Link key={noticia.id} href={`/noticias/${noticia.id}`}>
                                <div className="p-8 rounded-md flex flex-col gap-4 cursor-pointer hover:bg-gray-100 transition">
                                    <div className="flex items-center gap-2">
                                        <i className="fa-regular text-xl fa-newspaper" />
                                        <p className="text-base font-medium">
                                            {new Date(noticia.data).toLocaleDateString("pt-BR", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </div>
                                    <h2 className="text-2xl font-bold">{noticia.titulo}</h2>
                                    <div className="noticia-conteudo space-y-2">
                                        {parse(
                                            noticia.conteudo.length > 300
                                                ? `${noticia.conteudo.substring(0, 300)}...`
                                                : noticia.conteudo,
                                            parserOptions
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-lg text-gray-500">
                        Nenhuma notícia encontrada para &quot;{params.query}&quot;.
                    </p>
                )}
            </div>
        </PageContent>
    );
}
