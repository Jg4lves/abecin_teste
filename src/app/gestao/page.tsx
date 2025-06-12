'use client'

import { useEffect, useState } from 'react';
import PageContent from '@/components/layout/PageContent';
import PageTitle from '@/components/layout/PageTitle';
import SectionTitle from '@/components/layout/SectionTitle';
import TextBox from '@/components/sobre/TextBox';
import GestaoService from '@/utils/services/gestao';
import { Gestores } from '@/types/Gestao';

export default function Gestao() {
	const [gestores, setGestores] = useState<Gestores[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await GestaoService.get();
				const data = response;

				if (!data || !Array.isArray(data)) {
					throw new Error('Dados de gestão inválidos.');
				}

				const filteredGestores = data.filter(
					(gestor: Gestores) => gestor.periodo === '2022-2025'
				);

				setGestores(filteredGestores);
			} catch (err) {
				if (err instanceof Error) {
					console.error(err.message);
					setError(err.message);
				} else {
					console.error('Erro desconhecido', err);
				}
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading)
		return (
			<PageContent>
				<PageTitle title="Carregando..." />
			</PageContent>
		);

	if (error)
		return (
			<PageContent>
				<p>Erro: {error}</p>
			</PageContent>
		);

	return (
		<PageContent>
			<PageTitle title="Gestão 2022-2025" />
			<div className="mt-8 flex flex-col gap-32">
				<section className="flex flex-col gap-14">
					<SectionTitle title="Diretoria" />
					<div className="mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-lg md:max-w-4xl">
						{['Presidente', 'Vice-Presidente', '1ª Secretário(a)', '2º Secretário(a)', '1ª Tesoureiro(a)', '2ª Tesoureiro(a)'].map((cargo) => (
							<TextBox
								key={cargo}
								tipo="cargo"
								titulo={`${cargo}:`}
								icone="fa-user"
								conteudo={gestores.find((gestor) => gestor.cargo === cargo)?.nome || ''}
							/>
						))}
					</div>
				</section>
				<section className="flex flex-col gap-14">
					<SectionTitle title="Conselho Fiscal" />
					<div className="mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-lg md:max-w-4xl">
						{gestores
							.filter((gestor) => gestor.cargo === 'Conselho Fiscal')
							.map((gestor, index) => (
								<TextBox
									key={index}
									tipo="cargo"
									icone="fa-user"
									conteudo={gestor.nome}
								/>
							))}
					</div>
				</section>
				<section className="flex flex-col gap-14">
					<SectionTitle title="Coordenação Regionais" />
					<div className="mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-lg md:max-w-4xl">
						{gestores
							.filter((gestor) => gestor.cargo.startsWith('Coordenação Regional'))
							.map((gestor, index) => (
								<TextBox
									key={index}
									tipo="cargo"
									titulo={`${gestor.cargo}:`}
									icone="fa-landmark"
									conteudo={gestor.nome}
								/>
							))}
					</div>
				</section>
				<section className="flex flex-col gap-14">
					<SectionTitle title="Comissão de Educação à Distância" />
					<div className="mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-lg md:max-w-4xl">
						{gestores
							.filter((gestor) => gestor.cargo === 'Comissão de Educação à Distância')
							.map((gestor, index) => (
								<TextBox
									key={index}
									tipo="cargo"
									icone="fa-user-graduate"
									conteudo={gestor.nome}
								/>
							))}
					</div>
				</section>
			</div>
		</PageContent>
	);
}