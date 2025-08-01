'use client'

import React, { useState } from 'react'
import { Menu, X, Instagram } from 'lucide-react'
import { MessageCircleMore } from 'lucide-react' // Si vols una icona tipus WhatsApp
import { Mail } from 'lucide-react'

import MobileMenu from './MobileMenu'
import Image from 'next/image'

export default function Header() {
  const [menuObert, setMenuObert] = useState(false)

  const menuItems = [
    { href: '#productes', label: 'Productes', title: 'Compra cabrit' },
    { href: '#contacte', label: 'Contacte', title: 'Contacta amb nosaltres' },
    { href: '/ramat', label: 'El ramat', title: 'Descobreix el ramat' },
    { href: '/pastor', label: 'El pastor', title: 'Descobreix el pastor' },
    { href: '/receptes', label: 'Receptes', title: 'Veure les receptes' },
    { href: '/neteja' , label: 'Neteja', title: 'Neteja forestal' },

  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <nav
        className="px-0 py-0 pr-5 flex items-start justify-between"
        aria-label="Navegació principal"
      >
        {/* LOGO */}
        <div className="flex items-start gap-3">
          <a href="/" title="Inici">
            <Image
              src="/imatges/logo01.png"
              alt="Logo Cabrits del Roc"
              width={100}
              height={100}
              className="rounded-full"
            />
          </a>
        </div>

        {/* BOTÓ MENÚ SEMPRE VISIBLE */}
        <button
          className="text-black hover:text-[#FFDADA] transition absolute right-7 top-4"
          onClick={() => setMenuObert(!menuObert)}
          aria-label={menuObert ? 'Tancar menú' : 'Obrir menú'}
          aria-expanded={menuObert}
          aria-controls="menu-mobil"
          type="button"
        >
          {menuObert ? <X size={45} /> : <Menu size={45} />}
        </button>
        <a
          href="mailto:info@eltevaempresa.com"
          className="absolute right-24 top-5 text-blue-500 hover:text-pink-600 transition"
          title="Envia'ns un correu"
        >
          <Mail size={32} />
         
        </a>
        <a
          href="https://instagram.com/el_teu_instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-47 top-5 text-black-500 hover:text-pink-600 transition"
          title="Instagram"
        >
          <Instagram size={31} />
        </a>
        <a
          href="https://wa.me/34636969995" // Substitueix pel teu número (sense espais ni +)
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-35 top-5 text-green-500 hover:text-green-600 transition"
          title="Contacta per WhatsApp"
        >
          <MessageCircleMore size={32} />
        </a>


      </nav>

      {/* MENÚ MÒBIL (sempre com a menú principal) */}
      <MobileMenu
        isOpen={menuObert}
        onClose={() => setMenuObert(false)}
        menuItems={[
          ...menuItems,
          {
            href: 'https://instagram.com/el_teu_instagram',
            label: <Instagram size={22} />,
            title: 'Instagram',
            external: true,
          },
        ]}
      />
    </header>
  )
}
