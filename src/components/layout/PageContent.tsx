import { ReactNode } from 'react'

interface PageContentProps {
	children: ReactNode
}

export default function PageContent({ children }: PageContentProps) {
	return (
		<div className="md:mx-20 lg:mx-auto max-w-4xl mx-8 mt-32 mb-32 md:mt-40 text-black animate-slideDown delay-400">
			{children}
		</div>
	)
}
