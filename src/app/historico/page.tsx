import PageContent from "@/components/layout/PageContent"
import PageTitle from "@/components/layout/PageTitle"
import Link from "next/link"

export default function Historico() {
    return (
        <PageContent>
            <PageTitle title="Histórico" />
            <section className="pt-12">
                <p className="mb-8">A Associação Brasileira de Ensino de Biblioteconomia e Documentação (ABEBD) foi desativada em 2001 e passou a denominar-se Associação Brasileira de Educação em Ciência da Informação (ABECIN).</p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/historico/ABEBD" className="flex items-center">
                        <button className="bg-abecin-primary rounded-xl py-2 px-4 max-w-fit hover:bg-abecin-secondary text-base delay-100 text-white">
                            ABEBD
                        </button>
                    </Link>

                    <Link href="/gestao/anteriores" className="flex items-center">
                        <button className="bg-abecin-primary rounded-xl py-2 px-4 max-w-fit hover:bg-abecin-secondary text-base delay-100 text-white">
                            Gestões Anteriores
                        </button>
                    </Link>
                </div>
            </section>
        </PageContent>
    )
}