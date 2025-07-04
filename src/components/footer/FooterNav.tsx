import headerData from '@/data/headerData'
import Link from 'next/link'

export default function FooterNav() {
	return (
		<nav className="flex flex-row justify-between w-full">
			{headerData.map(item => (
				<div key={item.label}>
					{item.submenu.length > 0 ? (
						<h1 className="font-semibold text-sm mb-4">
							{item.label}
						</h1>
					) : (
						<Link href={item.link}>
							<h1 className="font-semibold text-sm mb-4">
								{item.label}
							</h1>
						</Link>
					)}

					<div>
						{item.submenu.map(subItem => (
							<Link
								key={subItem.label}
								href={subItem.link}
								target={subItem.target}
								rel={subItem.target === '_blank' ? 'noopener noreferrer' : undefined}
							>
								<h2 className="text-xs mb-2 text-gray-300 hover:text-white">
									{subItem.label}
								</h2>
							</Link>
						))}
					</div>
				</div>
			))}
		</nav>
	)
}
