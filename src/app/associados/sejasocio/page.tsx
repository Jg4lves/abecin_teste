'use client'

import Image from 'next/image'
import PageContent from "@/components/layout/PageContent"
import PageTitle from "@/components/layout/PageTitle"
import BoxPlano from "@/components/associados/BoxPlano";
import associadosPlanos from "@/data/AssociadosPlanos";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Sejasocio() {
    const currentYear = new Date().getFullYear();
    const pixKey = '04772610000164' // CNPJ da Abecin
    const [showPopup, setShowPopup] = useState(false);

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(pixKey).then(() => {
            setShowPopup(true); // Exibe o popup
            setTimeout(() => setShowPopup(false), 3000); // Oculta o popup após 3 segundos
        }).catch((err) => {
            console.error("Erro ao copiar para a área de transferência:", err);
        });
    };

    return (
        <PageContent>
            {showPopup &&
                createPortal(
                    <div className="fixed top-24 right-8 bg-abecin-primary text-white px-4 py-4 rounded shadow-lg z-50">
                        Chave PIX copiada para a área de transferência!
                    </div>,
                    document.body
                )
            }

            <PageTitle title={`Seja parte da Abecin em ${currentYear}!`} />
            <p className="my-12 ">De acordo com o Estatuto, em seu Art. 7º, podem se associar à Abecin pessoas físicas, acima de 18 (dezoito) anos, e pessoas jurídicas, desde que se enquadrem nas seguintes categorias:</p>
            <div className="flex flex-col gap-12">
                {associadosPlanos.map((plano, index) => (
                    <BoxPlano
                        key={index}
                        titulo={plano.titulo}
                        descricao={plano.descricao}
                        valor={plano.valor}
                    />
                ))}
            </div>
            <section className="flex flex-col justify-between mt-20 gap-12" >
                <PageTitle title="Dados Para Pagamento da Anuidade" />
                <div className="flex flex-col md:flex-row gap-8 justify-between ">
                    <div className="flex flex-col gap-4">
                        <p className="font-sm font-semibold">Dados da conta</p>
                        <ul className="list-disc font-sm list-inside">
                            <li>Banco do Brasil</li>
                            <li>Agência: 141-4</li>
                            <li>Conta: 119.907-2</li>
                            <li>CNPJ: 04772610/0001-64</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4 font-semibold">
                        <p className="mx-auto">Escaneie o QR Code para pagar via PIX</p>
                        <Image src="/qr_code.svg" alt="QR Code para pagamento via PIX" className="w-48 h-48 mx-auto" />
                        <p className="mx-auto">Ou copie a chave abaixo e insira-a manualmente</p>
                        <div className="flex mx-auto items-center gap-4">
                            <span className="px-10 py-2 border rounded bg-gray-100">{pixKey}</span>
                            <button
                                onClick={handleCopyToClipboard}
                                className="px-4 py-2 h-full border-[1px] border-black text-white rounded hover:bg-gray-100"
                            >
                                <Image src="/copy.svg" alt="Copiar chave PIX" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col justify-between mt-20 gap-12">
                <PageTitle title="Estatuto" />
                <div className="flex flex-col gap-4">
                    <p>Conheça o Estatuto da Abecin</p>
                    <a href="/estatuto" className="bg-abecin-primary hover:bg-abecin-secondary text-white max-w-fit px-16 py-4 rounded-lg">Acessar</a>
                </div>
            </section>
            <section className="flex flex-col justify-between mt-20 gap-12">
                <PageTitle title="Anexo do Comprovante" />
                <div className="flex flex-col gap-4">
                    <p>Preencha o formulário de inscrição e anexe o comprovante de pagamento da anuidade</p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0jKzP6-vZJt7PlLk4mzc0loVtKD_Illd-WdmFfR7wM3tDsw/viewform" target="_blank" rel="noreferrer" className="bg-abecin-primary hover:bg-abecin-secondary text-white px-16 py-4 rounded-lg max-w-fit">Acessar</a>
                </div>
            </section>
        </PageContent>
    )
}