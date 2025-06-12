import Image from 'next/image'
import Socials from './Socials'
import FooterNav from './FooterNav'

export default function Footer() {
	return (
		<footer className="hidden lg:flex flex-row py-12 px-6 gap-2 bg-abecin-primary text-white">
			<div className="flex flex-row md:flex-col gap-4 w-1/3">
				<Image
					src="/extended_abecin.png"
					alt="Logo da abecin"
					width={420}
					height={420}
				/>
				<Socials />
			</div>
			<div className='flex flex-row w-full pr-12'>
				<FooterNav />
			</div>
		</footer>
	)
}
