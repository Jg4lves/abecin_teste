import PageTitle from "@/components/layout/PageTitle"
import PageContent from "@/components/layout/PageContent"
import CapituloBox from "@/components/estatuto/CapituloBox"
import estatutoCapitulos from "@/data/TextoEstatuto"

export default function EstatutoPage() {
    return (
        <PageContent>
            <h1 className={`text-3xl font-semibold relative mb-14 mx-auto text-center`}>
                Estatuto
            </h1>
            {estatutoCapitulos.map((capitulo, index) => (
                <CapituloBox key={index} titulo={capitulo.titulo} conteudo={capitulo.conteudo} />
            ))}
        </PageContent>
    )
}