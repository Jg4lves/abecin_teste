interface Props {
    ano: string
}

export default function BoxAno({ ano }: Props) {
    return (
        <a href={`/associados/${ano}`} className="flex flex-row gap-4 mt-4 text-xl text-white bg-abecin-primary hover:bg-abecin-secondary px-6 py-4 rounded-lg items-center max-md:mx-auto w-fit hover:scale-105">
            <i className="fa-regular fa-calendar" />
            <p>Associados {ano}</p>
        </a>
    )
}