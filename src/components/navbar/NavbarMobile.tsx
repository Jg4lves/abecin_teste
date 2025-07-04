'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { MenuItem } from '@/types/MenuItem'

interface NavbarMobileProps {
    isMenuOpen: boolean
    openSubmenu: number | null
    setOpenSubmenu: (index: number | null) => void
    setIsMenuOpen: (isOpen: boolean) => void
    headerData: MenuItem[]
}

export default function NavbarMobile({
    isMenuOpen,
    openSubmenu,
    setOpenSubmenu,
    setIsMenuOpen,
    headerData,
}: NavbarMobileProps) {
    const menuMobileRef = useRef<HTMLDivElement | null>(null)
    const stop = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuMobileRef.current && !menuMobileRef.current.contains(e.target as Node)) {
                setIsMenuOpen(false)
                setOpenSubmenu(null)
            }
        }

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isMenuOpen, setIsMenuOpen, setOpenSubmenu])

    if (!isMenuOpen) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <nav
                ref={menuMobileRef}
                onClick={stop}
                className="fixed right-0 top-0 h-screen w-[280px] bg-white text-gray-800 z-50 lg:hidden
                         shadow-2xl transform transition-transform duration-300 ease-in-out"
            >
                {/* Menu Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-bold text-abecin-primary">Menu</h2>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full"
                    >
                        <i className="fa-solid fa-xmark text-xl"></i>
                    </button>
                </div>

                {/* Menu Items */}
                <div className="p-4 space-y-2">
                    {headerData.map((item, idx) => (
                        <div key={item.label} className="w-full">
                            {item.submenu.length > 0 ? (
                                <>
                                    {/* Header with submenu */}
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            stop(e)
                                            setOpenSubmenu(openSubmenu === idx ? null : idx)
                                        }}
                                        className="w-full text-left py-3 px-4 flex items-center justify-between
                                                 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                    >
                                        <span className="font-medium">{item.label}</span>
                                        <i className={`fa-solid fa-angle-down transition-transform duration-200
                                                    ${openSubmenu === idx ? 'rotate-180' : ''}`}></i>
                                    </button>

                                    {/* Submenu items */}
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out
                                                  ${openSubmenu === idx ? 'max-h-96' : 'max-h-0'}`}>
                                        <div className="pl-4 space-y-1">
                                            {item.submenu.map(sub => (
                                                <Link
                                                    key={sub.label}
                                                    href={sub.link}
                                                    target={sub.target}
                                                    rel={sub.target === '_blank' ? 'noopener noreferrer' : undefined}
                                                    onClick={() => {
                                                        setOpenSubmenu(null)
                                                        setIsMenuOpen(false)
                                                    }}
                                                    className="block py-2 px-4 text-gray-600 hover:text-abecin-primary
                                                             hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                /* Top-level link (no submenu) */
                                <Link
                                    href={item.link!}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block w-full text-left py-3 px-4 font-medium
                                             hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </nav>
        </>
    )
}
