interface Props {
	title: string
	className?: string
	spanClassName?: string
}

export default function PageTitle({ title, className, spanClassName }: Props) {
	return (
		<h1 className={`${className || ''} text-3xl font-semibold relative `}>
			{title}
			<span className={`${spanClassName || ''} block mt-2 w-0 h-2 bg-[#4A1861] absolute left-0 animate-grow`} />
		</h1>
	)
}
