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
		link: '/',
		submenu: [
			{ label: 'Estatuto', link: '/estatuto' },
			{ label: 'Plano de Gestão', link: '/plano' },
			{ label: 'Gestão Atual', link: '/gestao' },
			{ label: 'Gestões Anteriores', link: '/gestao/anteriores' }
		]
	},
	{
		label: 'Associadas/os',
		link: '/associados',
		submenu: [
			{ label: 'Seja associada/o', link: '/associados/sejasocio' },
			{
				label: `Associadas/os ${currentYear}`,
				link: `/associados/${currentYear}`
			},
			{ label: 'Associadas/os Anteriores', link: '/associados/anteriores' }
		]
	},
	{
		label: 'Prêmio TCC',
		link: '/concursos',
		submenu: []
	},
	{
		label: 'Publicações',
		link: '/publicacoes',
		submenu: [
			{ label: 'Abecin Editora', link: '/publicacoes' },
			{ label: 'Rebecin', link: 'https://portal.abecin.org.br/rebecin', target: '_blank' },
		]
	},
	{
		label: 'Memória',
		link: '/memoria',
		submenu: [
			{ label: 'Outras Publicações', link: '/publicacoes/outras' },
			{ label: 'ABEBD', link: '/historico' }
		]
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
