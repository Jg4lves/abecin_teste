import { MenuItem } from '@/types/MenuItem'

const year = new Date().getFullYear()
const currentYear = year.toString()

/**
 * Este módulo exporta os dados de navegação para a barra de navegação (Navbar) do site.
 * O objeto `headerData` contém informações sobre cada item de menu e seus respectivos submenus.
 * O comportamento de cada item de menu varia dependendo da existência de submenus:
 * - Se um item de menu tem submenus, ao ser clicado, o submenu será exibido.
 * - Caso contrário, o item de menu redireciona o usuário para o link especificado.
 *
 * @module
 *
 * @example
 * // Exemplo de uso:
 * const headerData: MenuItem[] = [
 *   {
 *     label: "A ABECIN",
 *     link: "/sobre",
 *     submenu: [
 *       { label: "Quem Somos", link: "/sobre/quem-somos" },
 *       { label: "Diretoria", link: "/sobre/diretoria" },
 *       { label: "História", link: "/sobre/historia" },
 *       { label: "Estatuto", link: "/sobre/estatuto" },
 *     ],
 *   },
 *   ...
 * ]
 *
 * @returns {MenuItem[]} Um array de objetos de menu, cada um com um `label`, `link` e (opcionalmente) um `submenu`.
 *
 * @example
 * headerData.map(item => (
 *   <button key={item.label} onClick={() => handleMenuClick(item)}>
 *     {item.label}
 *     {item.submenu.length > 0 && <i className="fa-solid fa-angle-down" />}
 *   </button>
 * ));
 */

const headerData: MenuItem[] = [
	{
		label: 'A Abecin',
		link: '/sobre',
		submenu: [
			{ label: 'Plano de Gestão', link: '/gestao' },
			{ label: 'Gestões Anteriores', link: '/gestao/anteriores' },
			{ label: 'Estatuto', link: '/estatuto' }
		]
	},
	{
		label: 'Associados',
		link: '/associados',
		submenu: [
			{ label: 'Seja associado', link: '/associados/sejasocio' },
			{
				label: `Associados ${currentYear}`,
				link: `/associados/${currentYear}`
			},
			{ label: 'Associados Anteriores', link: '/associados/anteriores' }
		]
	},
	{
		label: 'Publicações',
		link: '/publicacoes',
		submenu: [
			{ label: 'Abecin', link: '/publicacoes/' },
			{ label: 'Outras publicações', link: '/publicacoes/outras' }
		]
	},
	{
		label: 'Documentos',
		link: '/documentos',
		submenu: [
			{ label: 'Abecin', link: '/documentos/abecin' },
			{ label: 'Escolas', link: '/documentos/escolas' },
			{ label: 'Atas e convocações', link: '/documentos/atas' },
			{ label: 'Prestações de contas', link: '/documentos/transparencia' }
		]
	},
	{
		label: 'Prêmio TCC',
		link: '/concursos',
		submenu: []
	},
	{
		label: 'Notícias',
		link: '/noticias',
		submenu: []
	},
	{
		label: 'Contato',
		link: '/contato',
		submenu: []
	}
]

export default headerData
