import React from "react"
import PageTitle from "../layout/PageTitle"
import { Capitulo } from "@/types/EstatutoCapitulo"

export default function CapituloBox({titulo, conteudo}: Capitulo) {
    return (
        <div className="mb-20">
            <PageTitle title={titulo} className="!text-2xl !font-medium mb-12" spanClassName="h-[0.4rem]" />
            {conteudo.map((paragrafo, index) => (
                <p key={index} className="text-xl">{paragrafo.split('<br>').map((linha, i) => (
                    <React.Fragment key={i}>
                      {linha}
                      <br />
                    </React.Fragment>
                  ))}</p>
            ))}
        </div>
    )
}