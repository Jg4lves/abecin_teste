import ButtonIcon from '@/components/publicacoes/ButtonIcon'
import PageContent from '@/components/layout/PageContent'
import PageTitle from '@/components/layout/PageTitle'

export default function Publicacoes() {
	return (
		<PageContent>
			<div className="flex flex-col gap-16">
				<section className="flex flex-col gap-4">
					<PageTitle title="Publicações da Abecin" />
					<p className="mt-8">
						Com vistas a ampliar o diálogo com a comunidade
						científica e a dar visibilidade à produção intelectual
						em Ciência da Informação, Biblioteconomia, Arquivologia
						e Museologia, a ABECIN mantém em atividade a{' '}
						<span className="font-bold text-abecin-secondary">
							Rebecin
						</span>{' '}
						e a{' '}
						<span className="font-bold text-abecin-secondary">
							ABECIN Editora.
						</span>
					</p>
					<div className="flex flex-col  md:flex-row gap-6">
						<ButtonIcon
							title="Acessar Rebecin"
							icon="fa-book-open"
							link="https://portal.abecin.org.br/rebecin"
						/>
						<ButtonIcon
							title="Acessar Abecin Editora"
							icon="fa-book"
							link="https://portal.abecin.org.br/editora"
						/>
					</div>
				</section>
				<section className="flex flex-col gap-4">
					<PageTitle title="Sobre a Rebecin" />
					<div className="flex flex-col gap-4">
						<p className="mt-8">
							A Revista Brasileira de Educação em Ciência da
							Informação (REBECIN) é uma revista com periodicidade
							semestral registrada com ISSN 2358-3193 de acesso
							livre e gratuito publicada pela ABECIN.
						</p>
					</div>
				</section>
				<section className="flex flex-col gap-4">
					<PageTitle title="Sobre a Abecin editora" />
					<div className="mt-8 flex flex-col gap-12">
						<p>
							A Abecin Editora tem como missão publicar livros e
							coletâneas, na versão digital, em Ciência da
							Informação, Biblioteconomia, Arquivologia e
							Museologia, com base em princípios éticos, legais,
							sociais, científicos e sustentáveis.
						</p>
					</div>
				</section>
			</div>
		</PageContent>
	)
}
