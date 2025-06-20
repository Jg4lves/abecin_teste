import { ReactNode } from 'react'

interface PageContentProps {
	children: ReactNode
}

export default function PageContent({ children }: PageContentProps) {
	return (
		<div className="md:mx-20 lg:mx-auto max-w-4xl mx-8 my-32 md:my-44 text-black animate-slideDown delay-400">
			{children}
		</div>
	)
}
