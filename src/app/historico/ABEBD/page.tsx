'use client'

import PageContent from "@/components/layout/PageContent"
import PageTitle from "@/components/layout/PageTitle"
import { periodosAbebd } from "@/data/gestaoABEBD"
import BoxGestao from "@/components/gestao/BoxGestao"

export default function ABEBD() {
    return (
        <PageContent>
            <PageTitle title="ABEBD" />
            <section className="pt-12 flex flex-col gap-6">
                <p>Durante o I Simpósio  sobre o Ensino de Biblioteconomia no Brasil, realizado em 1965, foi constituída uma Comissão composta por: Maria Martha de Carvalho (Presidente), Alfredo Américo Hamar e Abner Lellis Vicentini (membros) responsáveis por elaborar uma proposta de Estatuto para uma nova Associação.</p>
                <p>No V Congresso Brasileiro de Biblioteconomia e Documentação (CBBD), em reuniões realizadas no dia 9 de janeiro de 1967 (com a presença de 27 professores brasileiros) e no 10 de janeiro de 1967 (com a presença de 40 professores brasileiros) discutiu-se o Estatuto proposto para a nova Associação.</p>
                <p>No dia 13 de janeiro de 1967 foi aprovado o Estatuto e, assim, foi criada a Associação Brasileira de Escolas de Biblioteconomia e Documentação (ABEBD), com a participação de 27 professores brasileiros.</p>
                <p>Para conhecer mais sobre a criação e trajetória da ABEBD, <a href="http://eprints.rclis.org/8802/1/25_04.pdf" target="_blank" rel="noopener noreferrer" className="underline text-abecin-secondary hover:text-abecin-primary">Acesse: A criação da ABEBD: expectativas e caminhos adotados,</a> de autoria de Francisco das Chagas de Souza.</p>
            </section>
            <section className="pt-20 flex flex-col gap-6">
                {periodosAbebd.map((periodo) => (
                    <div className="mb-20" key={periodo.id}>
                        <BoxGestao
                            id={periodo.id}
                            periodo={periodo.periodo}
                            slug={periodo.slug}
                            url={periodo.url}
                            associacao={periodo.associacao} />
                    </div>
                ))}
            </section>
        </PageContent>
    )
}