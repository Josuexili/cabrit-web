'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [menuObert, setMenuObert] = useState(false)

  const menuItems = [
    { href: '#productes', label: 'Productes', title: 'Ves a la secció de productes' },
    { href: '#contacte', label: 'Contacte', title: 'Contacta amb mi' },
    { href: '#vendadirecta', label: 'Comprar', title: 'Compra directa' },
    { href: '/pastor', label: 'El pastor', title: 'Qui hi ha darrere' },
    { href: '/ramat', label: 'El ramat', title: 'Pagin el ramat' },
    { href: '/receptes', label: 'Receptes', title: 'Receptes de cuina' }
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#8B0000] shadow-md">
      <nav
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Navegació principal"
      >
        {/* Menú visible en mida mitjana i superior */}
        <ul className="hidden md:flex flex-1 justify-between text-white font-semibold text-lg lg:text-base">
          {menuItems.map(({ href, label, title }) => (
            <li key={href}>
              <a
                href={href}
                className="hover:text-[#FFDADA] transition duration-200"
                title={title}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botó per obrir el menú en dispositius petits */}
        <button
          className="md:hidden text-white hover:text-[#FFDADA] transition"
          onClick={() => setMenuObert(!menuObert)}
          aria-label={menuObert ? 'Tancar menú' : 'Obrir menú'}
          aria-expanded={menuObert}
          aria-controls="menu-mobil"
          type="button"
        >
          {menuObert ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <MobileMenu isOpen={menuObert} onClose={() => setMenuObert(false)} menuItems={menuItems} />
    </header>
  )
}
