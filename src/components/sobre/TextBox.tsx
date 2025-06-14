interface TextBoxProps {
	icone?: string
	titulo?: string
	conteudo: string
	tipo: 'cargo' | 'info' | 'contato'
}

export default function TextBox({
	icone,
	titulo,
	conteudo,
	tipo
}: TextBoxProps) {
	return (
		<div className="bg-abecin-secondary text-white px-10 py-12 rounded-2xl flex flex-col relative min-h-[200px]">
			{tipo === 'cargo' && (
				<div>
					<div>
						<i
							className={`absolute top-4 right-4 fa-solid ${icone}`}
						/>
						{titulo ? (
							<h1 className="mb-2 text-xl">{titulo}</h1>
						) : (
							''
						)}
					</div>
					<p className="text-lg">{conteudo}</p>
				</div>
			)}
			{tipo === 'info' && (
				<div>
					<div className="flex md:mb-4 min-h-20 lg:min-h-[50px] gap-2">
						<i className={`fa-solid pt-1 ${icone}`} />
						<h1 className="font-bold text-xl leading-tight">
							{titulo}
						</h1>
					</div>
					<p className="text-sm">{conteudo}</p>
				</div>
			)}
			{tipo === 'contato' && (
				<div className="items-center flex flex-col gap-2">
					<h1 className="font-bold text-xl">{titulo}</h1>
					<div className="flex flex-row gap-2 items-center">
						<i className="fa-regular text-base fa-envelope" />
						<a
							className="text-base"
							href={`mailto:${conteudo}`}
						>
							{conteudo}
						</a>
					</div>
				</div>
			)}
		</div>
	)
}
