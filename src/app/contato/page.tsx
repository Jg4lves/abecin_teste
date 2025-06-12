'use client'

import PageContent from '@/components/layout/PageContent'
import PageTitle from '@/components/layout/PageTitle'
import TextBox from '@/components/sobre/TextBox'
import MailDropdown from '@/components/contatos/MailDropdown'
import { useState, useEffect } from 'react'
import ContatoService from '@/utils/services/contato'

interface Email {
	cargo: string
	endereco: string
}

export default function Contato() {
	const [emails, setEmails] = useState<Email[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await ContatoService.get();
				const emailArray: Email[] = Object.entries(data.emails).map(
					([key, value]) => ({
						cargo: key as string,
						endereco: value as string
					})
				)

				setEmails(emailArray)
			} catch (err) {
				if (err instanceof Error) {
					console.error(err.message)
					setError(err.message)
				} else {
					console.error('Erro desconhecido', err)
				}
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	const getEmailByCargo = (cargo: string): string => {
		const email = emails.find(
			item => item.cargo.toLowerCase() === cargo.toLowerCase()
		)
		return email ? email.endereco : 'Email não encontrado'
	}

	if (loading)
		return (
			<PageContent>
				<PageTitle title="Carregando..." />
			</PageContent>
		)
	if (error)
		return (
			<PageContent>
				<p>Erro: {error}</p>
			</PageContent>
		)

	return (
		<PageContent>
			<PageTitle title="Contatos" />
			<div className="mt-20 flex flex-col items-center gap-36">
				<div className="flex flex-col items-center lg:flex-row gap-6">
					<TextBox
						tipo="contato"
						titulo="Diretoria"
						conteudo={getEmailByCargo('diretoria')}
					/>
					<TextBox
						tipo="contato"
						titulo="Editora"
						conteudo={getEmailByCargo('editora')}
					/>
					<TextBox
						tipo="contato"
						titulo="Tesouraria"
						conteudo={getEmailByCargo('tesouraria')}
					/>
				</div>
				<div className="flex flex-col items-center gap-12 w-full">
					<h1 className="text-2xl text-center font-semibold text-[#1E1E1E]">
						Entre em contato com as nossas Coordenadorias Regionais
					</h1>
					<div className="flex flex-col gap-12 w-full">
						<MailDropdown
							title="Coordenação Regional Centro-Oeste"
							mail={getEmailByCargo('centro_oeste')}
						/>
						<MailDropdown
							title="Coordenação Regional Nordeste"
							mail={getEmailByCargo('nordeste')}
						/>
						<MailDropdown
							title="Coordenação Regional Norte"
							mail={getEmailByCargo('norte')}
						/>
						<MailDropdown
							title="Coordenação Regional São Paulo"
							mail={getEmailByCargo('sao_paulo')}
						/>
						<MailDropdown
							title="Coordenação Regional Sudeste"
							mail={getEmailByCargo('sudeste')}
						/>
						<MailDropdown
							title="Coordenação Regional Sul"
							mail={getEmailByCargo('sul')}
						/>
					</div>
				</div>
				<div className="items-center justify-center flex bg-[url('/location.png')] bg-cover bg-center w-full h-96 rounded-lg mb-20">
					<div className="flex flex-row gap-4 items-center text-white bg-abecin-secondary p-6 rounded-xl text-xl">
						<i className="fa-solid fa-location-dot" />
						<a
							href="https://www.google.com/search?q=Rua+Maracaj%C3%BA+n%C2%BA+58%2C+Vila+Mariana%2C+S%C3%A3o+Paulo%2FSP%2C+CEP+04013-020&oq=Rua+Maracaj%C3%BA+n%C2%BA+58%2C+Vila+Mariana%2C+S%C3%A3o+Paulo%2FSP%2C+CEP+04013-020&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDIxMjZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
							target="_blank"
							className=" font-medium"
						>
							Endereço fiscal: Rua Maracajú nº 58, Vila Mariana,
							São Paulo/SP, CEP 04013-020
						</a>
					</div>
				</div>
			</div>
		</PageContent>
	)
}
