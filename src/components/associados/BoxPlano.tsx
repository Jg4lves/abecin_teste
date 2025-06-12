import { AssociadoPlano } from "@/types/Associados"
import Image from 'next/image'

export default function BoxPlano({ titulo, descricao, valor }: AssociadoPlano) {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl flex flex-row gap-2 font-medium text-black"><Image src="/books.svg" alt="Books"/>{titulo}</h2>
                <p className="text-sm text-abecin-primary font-semibold ">*Valor da anuidade para {currentYear}</p>
            </div>
            <p>{descricao}</p>
            <p className="text-abecin-secondary font-semibold">{valor}</p>
        </div>
    )    
}