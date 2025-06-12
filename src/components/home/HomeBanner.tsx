'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeBanner() {
	const [searchQuery, setSearchQuery] = useState('');
	const router = useRouter();

	const handleSearch = () => {
		if (searchQuery.trim()) {
			router.push(`/noticias/search/${encodeURIComponent(searchQuery.trim())}`);
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	return (
		<div className="mt-20 flex items-center justify-center py-8 px-4 w-full bg-abecin-secondary min-h-32 lg:min-h-40">
			<div className="flex-col align-middle gap-4 inline-flex">
				<h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-white">
					Associação Brasileira de Educação em Ciência da Informação
				</h1>
				<div className="self-end h-8 flex flex-row">
					<div className="h-full relative">
						<input
							type="text"
							placeholder="O que deseja Buscar?"
							className="pl-8 h-full pr-0 w-fit rounded-l-lg focus:outline-none focus:ring-0"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							onKeyDown={handleKeyPress}
						/>
						<i className="fa-solid fa-magnifying-glass absolute top-1/2 transform -translate-y-1/2 left-2" />
					</div>
					<button
						className="uppercase text-lg border-2 bg-abecin-primary hover:bg-white hover:text-black delay-100 text-white px-2 h-full font-bold rounded-r-lg"
						onClick={handleSearch}
					>
						buscar
					</button>
				</div>
			</div>
		</div>
	);
}
