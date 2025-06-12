import socialsData from '@/data/socialsData'

export default function Socials() {
	return (
		<div className="flex flex-row gap-2 items-center text-sm">
			{socialsData.map(social => (
				<a
					key={social.name}
					target="_blank"
					rel="noopener"
					href={`${social.link}`}
				>
					<i className={`${social.icon} text-gray-300 hover:text-white`} />
				</a>
			))}
		</div>
	)
}
