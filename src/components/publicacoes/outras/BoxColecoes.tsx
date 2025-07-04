import { ColecaoProp } from "@/app/publicacoes/outras/page";
import Image from "next/image";
import parse from "html-react-parser";

// Custom parser options to handle nested anchor tags
const parserOptions = {
    replace: (domNode: any) => {
        if (domNode.type === 'tag' && domNode.name === 'a') {
            // Check if this anchor tag contains other anchor tags
            const hasNestedAnchors = domNode.children?.some((child: any) =>
                child.type === 'tag' && child.name === 'a'
            );

            if (hasNestedAnchors) {
                // Replace nested anchor with span to avoid hydration error
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

export default function BoxColecoes({ titulo, conteudo, pdf_url, thumbnail }: ColecaoProp) {
    return (
        <div className="flex gap-8 mb-12">
            {typeof thumbnail === "string" ? (
                <Image src={thumbnail} alt={titulo} width={500} height={500} className="w-1/2 h-1/2" />
            ) : (
                <Image src="/ph_publicacao.png" alt="Logo ABECIN" width={500} height={500} className="w-1/2 h-1/2" />
            )}
            <div className="flex flex-col pt-8 gap-4">
                <h1 className="text-2xl font-semibold">{titulo}</h1>
                <p className="text-xl">{parse(conteudo, parserOptions)}</p>
                <a href={pdf_url} className="max-w-52 pt-4" target="_blank" rel="noopener noreferrer">
                    <button className="self-end bg-abecin-secondary hover:bg-abecin-primary text-white text-xl py-3 px-10 rounded-lg w-full">
                        Acessar
                    </button>
                </a>
            </div>
        </div >
    )
}