'use client'
import { useState } from 'react'

interface Props {
	title: string
	mail: string
}

export default function MailDropdown({ title, mail }: Props) {
	const [isMailVisible, setIsMailVisible] = useState(false)

	const toggleMailVisibility = () => {
		setIsMailVisible(prevState => !prevState)
	}

	return (
		<div className='w-full'>
			<div
				className="cursor-pointer px-8 py-4 border-2 rounded-xl border-abecin-primary justify-between text-abecin-primary flex flex-row hover:bg-abecin-primary hover:text-white delay-100 ease-in-out"
				onClick={toggleMailVisibility}
			>
				<h1 className='font-bold text-xl'>{title}</h1>
				<i
					className={`fa-solid ${
						isMailVisible ? 'fa-angle-up' : 'fa-angle-down'
					}`}
				/>
			</div>
			<div
				className={`flex flex-row sm:pl-12 mt-6 gap-2 items-center transition-all font-semibold duration-500 overflow-hidden text-abecin-primary text-lg ${
					isMailVisible ? 'max-h-64' : 'max-h-0'
				}`}
			>
				<i className="fa-regular fa-envelope" />
				<a className='break-all md:max-w-full' href={`mailto:${mail}`}>{mail}</a>
			</div>
		</div>
	)
}
