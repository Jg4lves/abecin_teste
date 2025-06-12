import PageTitle from '@/components/layout/PageTitle'
import HomeBanner from '@/components/home/HomeBanner'
import Image from 'next/image'
import HomeButton from '@/components/home/HomeButton'
import Link from 'next/link'

export default function Home() {
	return (
		<div className="mb-12">
			<HomeBanner />
			<div className="flex flex-col gap-14 mx-8 md:mx-20 lg:mx-auto max-w-4xl py-8 text-black animate-slideDown delay-400">
				<PageTitle title="A Abecin" />
				<section className="flex flex-col gap-4">
					<h2 className="text-2xl font-medium">
						2025! Novos desafios!
					</h2>
					<div className="flex flex-col gap-8 lg:gap-0 items-center lg:flex-row justify-between">
						<div className="flex flex-col gap-4 lg:max-w-[50%]">
							<p className="text-lg font-medium">
								Neste ano vivenciamos muitos desafios na
								educação universitária brasileira e foi com
								coragem e determinação que nós, enquanto
								docentes e pessoas interessadas na Educação em
								Ciência da Informação no Brasil, conquistamos
								novos espaços, incitamos debates, criamos
								oportunidades e, em uma corrente de parceria,
								mantivemos nosso propósito de assegurar o debate
								em prol da formação profissional de arquivistas,
								bibliotecários, gestores da informação e
								museólogos. Além disso, também participamos de
								uma reivindicação legítima em defesa do
								trabalho, do estudo, da permanência e do
								investimento destinado à educação nas
								instituições federais de ensino superior.
							</p>
							<HomeButton link='/' />
						</div>
						<div className="h-auto justify-center items-center flex w-full lg:w-fit">
							<Image
								src={'/new_year.png'}
								alt="A Abecin deseja um feliz ano novo!"
								width={400}
								height={400}
							/>
						</div>
					</div>
				</section>
				<section className="flex flex-col gap-12 mt-4">
					<div className="md:max-w-[50%] flex flex-col gap-4">
						<h2 className="text-2xl font-medium">
							Venha para a Abecin e seja parte da nossa história
						</h2>
						<p className="font-medium text-base">
							Estamos com a campanha para associação à Abecin em
							2024 e você é peça fundamental! Venha e aproveite
							todas as vantagens em ser Abecin!
						</p>
						<HomeButton link='associados/sejasocio'/>
					</div>
					<iframe
						width="max"
						height="450"
						src="https://www.youtube.com/embed/rsYJwIlaF9k"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="rounded-3xl"
					/>
				</section>
				<section className="flex flex-col-reverse md:flex-row gap-4 justify-between mt-8">
					<Image
						src={'/erecin_logo.png'}
						height={400}
						width={400}
						alt="logo da erecin"
					/>
					<div className="flex flex-col md:max-w-[50%] w-fit gap-8">
						<h2 className="text-2xl text-center font-medium">
							V ERECIN N-NE
						</h2>
						<p className="font-medium text-center lg:text-left text-base">
							O período de submissão de trabalhos para o V
							Encontro Regional de Educação em Ciência da
							Informação Norte/Nordeste está aberto, vai até o dia
							30/06. O Encontro ocorrerá na Universidade Federal
							da Bahia (UFBA), nos dias 23 e 24 de agosto de 2023.
						</p>
						<div className="flex justify-center">
							<HomeButton externalLink='http://www.erecin2023.ufba.br/' target='_blank' />
						</div>
					</div>
				</section>
				<section className="flex flex-col gap-8">
					<h2 className="text-2xl text-center font-medium">
						CONCURSO TCC Abecin - 2023
					</h2>
					<p className="font-medium text-base text-center">
						O “Concurso TCC Abecin - 2023” receberá inscrição de
						Trabalhos de Conclusão de Curso (TCC) defendidos entre
						junho de 2022 a maio de 2023 e desenvolvidos por
						discentes dos seguintes Cursos de Graduação, de
						instituições públicas e privadas do País: Arquivologia,
						Biblioteconomia, Ciência da Informação, Gestão da
						Informação e Museologia.
					</p>
					<HomeButton />
				</section>
				<section className="flex flex-col md:flex-row gap-4 justify-between">
					<div className="flex flex-col w-fit md:max-w-[50%] gap-4">
						<h2 className="text-2xl font-medium">
							PARCERIA Abecin E XIII ENCOUENTRO MERCOSUR
						</h2>
						<p className="font-medium text-xs lg:text-base">
							A Abecin e XIII Encuentro de Directores y XII de
							Docentes de Escuelas de Bibliotecología y Ciencia de
							la Información del MERCOSUR - 2023 - informam:
							<br />
							Sócios da Abecin têm desconto na inscrição!
							<br /> “Para los ponentes asociados a Abecin la
							inscripción se fija en USD30 y para los asociados a
							Abecin que asisten al evento sin presentar ponencia
							se fija una inscripción de USD35”.
							<br />
							Ao realizar a inscrição, pedimos aos sócios que nos
							informem através do email abecinoficial@gmail.com
							para que notifiquemos a secretaria do evento. Para
							ser sócio(a) Abecin, basta acessar nosso site
						</p>
						<HomeButton link='associados/sejasocio'/>
					</div>
					<div className="w-fit h-auto">
						<Image
							src={'/parceria_logo.png'}
							width={360}
							height={360}
							alt=""
						/>
					</div>
				</section>
				<section className="flex items-center justify-center">
					<Link href={'/noticias/todas'}>
						<button className="bg-abecin-primary hover:bg-abecin-secondary delay-100 text-white font-medium text-lg uppercase py-2 px-4 rounded-lg">
							<i className="fa-plus fa-solid text-xl mr-4" />
							ver mais notícias
						</button>
					</Link>
				</section>
			</div>
		</div>
	)
}
