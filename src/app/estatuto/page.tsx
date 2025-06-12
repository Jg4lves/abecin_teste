import PageTitle from "@/components/layout/PageTitle"
import PageContent from "@/components/layout/PageContent"
import CapituloBox from "@/components/estatuto/CapituloBox"
import estatutoCapitulos from "@/data/TextoEstatuto"

export default function EstatutoPage() {
    return (
        <PageContent>
            <PageTitle title="Estatuto" className="mb-20" />
            {estatutoCapitulos.map((capitulo, index) => (
                <CapituloBox key={index} titulo={capitulo.titulo} conteudo={capitulo.conteudo} />
            ))}
        </PageContent>
    )
}