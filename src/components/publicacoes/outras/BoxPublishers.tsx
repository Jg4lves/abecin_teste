'use client'

import { usePathname, useRouter } from 'next/navigation'

interface Props {
	title: string
	description: string
	rota: number
}

export default function BoxPublishers({ title, description, rota }: Props) {
	const router = useRouter()
	const pathname = usePathname()

	const handleNavigate = () => {
		router.push(`${pathname}/${rota}`)
	}

	return (
		<div className="shadow-slate-[#44444426] drop-shadow rounded-xl px-6 py-8 bg-white flex flex-col gap-6">
			<h1 className="text-2xl font-semibold">{title}</h1>
			<p className="text-xl">{description}</p>
			<button
				onClick={handleNavigate}
				className="bg-abecin-secondary hover:bg-abecin-primary text-white text-xl py-3 px-10 rounded-lg w-52"
			>
				Acessar
			</button>
		</div>
	)
}
