'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [menuObert, setMenuObert] = useState(false)

  const menuItems = [
    { href: '#productes', label: 'Producte', title: 'Ves a la secció de productes' },
    { href: '#contacte', label: 'Contacte', title: 'Contacta amb mi' },
    { href: '#pastor', label: 'El pastor', title: 'Secció El pastor' },
    { href: '#ramat', label: 'El ramat', title: 'Secció El ramat' },
    { href: '#comentaris', label: 'Comentaris', title: 'Veure els comentaris' }
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between" aria-label="Navegació principal">
        <h1>
          <a
            href="#"
            className="text-2xl lg:text-xl font-mochiy text-forest-green-900 font-bold tracking-wide"
            title="Inici - Cabrits del Roc"
          >
            Cabrits del Roc
          </a>
        </h1>

        <ul className="hidden md:flex space-x-12 lg:space-x-8 text-forest-green-900 font-semibold text-lg lg:text-base">
          {menuItems.map(({ href, label, title }) => (
            <li key={href}>
              <a href={href} className="hover:text-forest-green-700 transition" title={title}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-forest-green-900 hover:text-forest-green-700 transition"
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
