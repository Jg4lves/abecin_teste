'use client'

import PageContent from "@/components/layout/PageContent"
import PageTitle from "@/components/layout/PageTitle"
import BoxGestao from "@/components/gestao/BoxGestao"

export default function ExemploUso() {
    return (
        <PageContent>
            <PageTitle title="Exemplo de Uso - BoxGestao" className="mb-20" />

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Exemplos de como usar o componente BoxGestao:</h2>

                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h3 className="font-medium mb-2">1. Uso padrão (ABECIN):</h3>
                    <code className="text-sm bg-white p-2 rounded block">
                        {`<BoxGestao id={1} periodo="2022-2025" />`}
                    </code>
                    <p className="text-sm text-gray-600 mt-2">
                        Resultado: "Gestão ABECIN 2022-2025"
                    </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h3 className="font-medium mb-2">2. Especificando ABEBD:</h3>
                    <code className="text-sm bg-white p-2 rounded block">
                        {`<BoxGestao id={1} periodo="2022-2025" associacao="ABEBD" />`}
                    </code>
                    <p className="text-sm text-gray-600 mt-2">
                        Resultado: "Gestão ABEBD 2022-2025"
                    </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">3. Especificando ABECIN explicitamente:</h3>
                    <code className="text-sm bg-white p-2 rounded block">
                        {`<BoxGestao id={1} periodo="2022-2025" associacao="ABECIN" />`}
                    </code>
                    <p className="text-sm text-gray-600 mt-2">
                        Resultado: "Gestão ABECIN 2022-2025"
                    </p>
                </div>
            </div>

            <div className="border-t pt-8">
                <h2 className="text-xl font-semibold mb-4">Demonstração prática:</h2>

                <div className="mb-8">
                    <h3 className="font-medium mb-4">Exemplo com ABECIN (padrão):</h3>
                    <BoxGestao id={1} periodo="2022-2025" slug="gestao-abecin-2022-2025" url="/gestao/abecin/2022-2025" />
                </div>

                <div>
                    <h3 className="font-medium mb-4">Exemplo com ABEBD:</h3>
                    <BoxGestao id={1} periodo="2022-2025" associacao="ABEBD" slug="gestao-abebd-2022-2025" url="/gestao/abebd/2022-2025" />
                </div>
            </div>
        </PageContent>
    )
} 