import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import headerData from '@/data/headerData'
import { useRouter } from 'next/navigation'
import { MenuItem } from '@/types/MenuItem'
import NavbarMobile from './NavbarMobile'

/**
 * Componente de Navegação (Navbar) que exibe a barra de navegação do site.
 * O componente lida com a exibição de submenus para itens de menu que os possuem e a navegação do usuário para links específicos.
 * Ele também inclui suporte para a navegação no mobile através de um menu hamburguer.
 *
 * Funcionalidades principais:
 * - Exibe uma logo clicável que redireciona para a página inicial.
 * - Exibe os itens principais do menu de navegação, com submenus que podem ser expandidos ao clicar.
 * - No caso de itens de menu sem submenu, ao clicar, o usuário é redirecionado para o link correspondente.
 * - Implementa lógica para fechar submenus ao clicar fora da área de navegação.
 * - No mobile, a navegação é exibida por meio de um menu hambúrguer.
 *
 * Melhorias recentes:
 * - Adicionado tratamento para fechar submenus ao clicar fora do menu utilizando um `useEffect` com `menuRef`.
 * - `menuRef` agora abrange o contêiner principal de navegação para englobar todos os elementos que devem estar protegidos do clique externo.
 * - Adicionada lógica condicional para alternar a visibilidade de submenus e suporte para navegação no mobile.
 *
 * @component
 * @example
 * // Exemplo de uso:
 * return <Navbar />;
 *
 * @returns {JSX.Element} Componente Navbar com menu de navegação e suporte para submenus e navegação no mobile.
 */

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [openSubmenu, setOpenSubmenu] = useState<number | null>(null)
	const router = useRouter()
	const menuDesktopRef = useRef<HTMLDivElement | null>(null)

	// Toggle mobile menu
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
		if (!isMenuOpen) {
			setOpenSubmenu(null) // Reset submenu when opening mobile menu
		}
	}

	// Handle logo click
	const handleLogoClick = () => {
		router.push('/')
		setIsMenuOpen(false)
		setOpenSubmenu(null)
	}

	// Handle desktop menu item click
	const handleDesktopItemClick = (item: MenuItem, index: number) => {
		if (item.submenu.length < 1) {
			router.push(item.link!)
		} else {
			setOpenSubmenu(prev => (prev === index ? null : index))
		}
	}

	// Handle desktop submenu item click
	const handleDesktopSubmenuClick = async (link: string, e: React.MouseEvent) => {
		e.stopPropagation()
		try {
			await router.push(link)
			setOpenSubmenu(null)
		} catch (error) {
			console.error('Erro ao navegar:', error)
		}
	}

	// Handle outside click for desktop
	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				menuDesktopRef.current &&
				!menuDesktopRef.current.contains(event.target as Node)
			) {
				setOpenSubmenu(null)
			}
		}

		document.addEventListener('mousedown', handleOutsideClick)
		return () => document.removeEventListener('mousedown', handleOutsideClick)
	}, [])

	return (
		<header className="fixed top-0 z-10 w-full bg-[#4A1861] py-4 px-8 text-white">
			<div className="flex flex-row items-center justify-between">
				{/* Logo */}
				<div className="relative h-[53px] flex items-center">
					<button
						onClick={handleLogoClick}
						aria-label="Página Inicial"
						className="cursor-pointer"
					>
						<Image
							src="/logo_abecin.png"
							alt="Logo da Abecin"
							width={146}
							height={53}
							priority
							className="h-auto"
						/>
					</button>
				</div>

				{/* Mobile Menu Button */}
				<div className="lg:hidden">
					<button
						className="text-white"
						aria-label="Abrir Menu"
						onClick={toggleMenu}
					>
						<i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
					</button>
				</div>

				{/* Desktop Navigation */}
				<nav
					ref={menuDesktopRef}
					className="hidden lg:flex flex-row gap-4 items-center relative"
				>
					{headerData.map((item, index) => (
						<div key={index} className="relative group">
							<button
								className="font-bold cursor-pointer text-base flex items-center"
								onClick={() => handleDesktopItemClick(item, index)}
							>
								{item.label}
								<i
									className={`${item.submenu.length < 1
										? ''
										: 'fa-solid fa-angle-down ml-1'
										}`}
								></i>
							</button>

							{/* Desktop Submenu */}
							{item.submenu.length > 0 && (
								<div className="absolute top-full mt-7 bg-[#4A1861] text-white rounded shadow-md w-48 flex flex-col opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
									{item.submenu.map((submenuItem, subIndex) => (
										<button
											key={subIndex}
											onClick={(e) => handleDesktopSubmenuClick(submenuItem.link, e)}
											className="px-4 py-2 hover:bg-[#670396] text-left"
										>
											{submenuItem.label}
										</button>
									))}
								</div>
							)}
						</div>
					))}
				</nav>
			</div>

			{/* Mobile Navigation */}
			<NavbarMobile
				isMenuOpen={isMenuOpen}
				openSubmenu={openSubmenu}
				setOpenSubmenu={setOpenSubmenu}
				setIsMenuOpen={setIsMenuOpen}
				headerData={headerData}
			/>
		</header>
	)
}
