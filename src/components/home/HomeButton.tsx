import Link from "next/link"

interface HomeButtonProps {
	link?: string
	externalLink?: string
	target?: string
}

export default function HomeButton({ link, target, externalLink }: HomeButtonProps) {
	return (
		<Link href={link ? `/${link}` : externalLink || "/"} className="flex items-center" target={target}>
			<button className="bg-abecin-primary rounded-xl py-2 px-4 max-w-fit hover:bg-abecin-secondary text-base delay-100 text-white">
				Saiba Mais
			</button>
		</Link>
	)
}
