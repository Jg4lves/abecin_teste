import PageTitle from '@/components/layout/PageTitle'
import SectionTitle from '@/components/layout/SectionTitle'
import Iconsbar from '@/components/sobre/Iconsbar'
import TextBox from '@/components/sobre/TextBox'
import HomeBanner from '@/components/home/HomeBanner'

export default function Sobre() {
	return (
		<div>
			<HomeBanner />
			<div className="flex flex-col gap-14 mx-8 md:mx-20 lg:mx-auto max-w-4xl py-12 text-black animate-slideDown delay-400">
				<PageTitle title="Sobre" />
				<div className="flex flex-col gap-16">
					<section>
						<div className="flex flex-col text-pretty gap-8">
							<p>
								A ABECIN é uma entidade constituída com a finalidade
								de assegurar o debate sobre a formação de pessoas
								comprometidas com a manutenção e a ampliação de um
								corpo profissional atuante nos campos das práticas
								da Ciência da Informação, que congrega instituições
								e profissionais voltados à formação de recursos
								humanos em nível universitário, cuja missão guarda
								relação direta com o conjunto de interesses e visões
								de mundo e com o ideário de permanência desse corpo
								profissional na sociedade.
							</p>
							<p>
								A criação da ABECIN é resultante do entendimento
								comum de profissionais que hoje, majoritariamente
								operando nos campos do ensino, pesquisa e extensão,
								forjou ou assimilou um conhecimento decorrente de
								práticas de trabalho transformado em conhecimento
								escolar fluente dentro da instituição educacional
								instituída para dar virtual existência e noção de
								permanência a esse corpo profissional, com a fixação
								de novos recursos humanos na realização da pesquisa,
								da experimentação e do ensino.
							</p>
						</div>
					</section>
					<section className="flex flex-col gap-8">
						<SectionTitle
							title="A Abecin é, sobretudo, um espaço político no qual a discussão sobre a perspectiva da construção e experimentação de saberes novos é tão importante e significativa quanto à ação de praticar esses saberes conquistados."
						/>
						<div className="mx-auto flex flex-col md:grid md:grid-cols-2 gap-4 max-w-lg md:max-w-4xl">
							<TextBox
								tipo="info"
								icone="fa-book"
								titulo="Saberes dos Conteúdos"
								conteudo="Os saberes dos conteúdos do respectivo campo já existentes e prontos para serem utilizados, transmitidos, adaptados e transformados"
							/>
							<TextBox
								tipo="info"
								icone="fa-graduation-cap"
								titulo="Saberes para a Formação de Competências"
								conteudo="Os saberes de como realizar a transposição didática desses conteúdos para a formação das competências, habilidades e atitudes dos profissionais egressos dos cursos"
							/>
							<TextBox
								tipo="info"
								icone="fa-wrench"
								titulo="Saberes sobre Métodos e Técnicas de Ensino"
								conteudo="Os saberes sobre os melhores métodos e técnicas de ensino a serem empregados na formação das habilidades e das atitudes esperadas pelos usuários dos serviços prestados pelos egressos da escola"
							/>
							<TextBox
								tipo="info"
								icone="fa-chart-line"
								titulo="Saberes Profissionais"
								conteudo="Os saberes derivados da transposição didática e seu efeito na consolidação dos saberes profissionais nos egressos dos cursos"
							/>
						</div>
					</section>
					<section className="flex flex-col gap-6 ">
						<div className="flex flex-col gap-4 items-center">
							<SectionTitle title="Fomentando o Futuro da Profissão" />
							<Iconsbar />
						</div>
						<p className="text-pretty">
							Visto assim, a ABECIN afirma-se como instância
							constituída para assegurar o debate sobre a formação de
							seres humanos comprometidos com a manutenção de um corpo
							profissional que se projeta no futuro. Também é de sua
							responsabilidade fomentar entre os seus membros o
							conhecimento dos meios de ensino, das diretrizes
							curriculares, da articulação horizontal e vertical do
							conhecimento a ser transmitido, da comunicação
							professor-aluno, do contexto em que se move a ação
							prática do corpo profissional-docente especialmente em
							seus aspectos filosóficos, históricos, políticos,
							sociais, econômicos, pedagógicos, etc. Trata-se de
							pesquisar a articulação do conhecimento de ensino e de
							pesquisa sobre o ensino com todos os fenômenos materiais
							ou não que constituem, fazem desenvolver e explicam o
							modo de ser e de agir dos profissionais do campo das
							profissões da informação e de seu futuro.
						</p>
						<p className="text-pretty">
							Sob esta perspectiva, a Abecin é uma associação de educação instituída pelo campo de ensino e é parte integrante do sistema de conhecimento e de ação política das profissões da informação, representado pela Ciência da Informação.
						</p>
					</section>
					<section className='flex flex-col gap-16 pb-16'>
						<div className="bg-abecin-secondary bg-[url('/vector.png')] bg-no-repeat bg-[left_2rem_top_4rem] md:bg-[right_3rem_top_1rem] lg:bg-[right_5rem_top_2rem] lg:bg-[length:250px_220px] rounded-2xl py-12 px-8 md:px-28">
							<p className="text-center text-pretty text-white font-bold">
								Sua missão é, acima de tudo, fortalecer de maneira
								única o corpo profissional no campo das profissões
								da informação. Esse fortalecimento cria uma base
								sólida para orientar as escolas na consolidação dos
								diversos segmentos que compõem essa área de atuação.
							</p>
						</div>
						<p className="text-pretty">
							Com base nisso, a Abecin tece esforços para fomentar no corpo profissional, a partir da atuação educacional, o sentimento de sobrevivência ou permanência profissional. A consciência dessa dimensão constituiu entendimento básico entre os membros da Associação.
						</p>
					</section>
				</div>
			</div>

		</div>

	)
}
