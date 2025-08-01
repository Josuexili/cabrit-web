'use client'

import React from 'react'
import FooterLegal from './FooterLegal'

export default function Footer() {
  return (
    <footer
      className="bg-[url('/imatges/Textures/fusta.avif')] bg-cover bg-center text-black text-sm px-6 py-8 border-t border-gray-300"
      role="contentinfo"
      aria-label="Peu de pàgina"
    >
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Fila 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Columna 1: Informació legal */}
          <div className="text-left text-xs md:text-sm space-y-1">
            <p>&copy; {new Date().getFullYear()} Cabrits del Roc</p>
            <p>Desenvolupat per <strong>Josuè González</strong></p>
          </div>

          {/* Columna 2: Logo central */}
          <div className="flex justify-center">
            <img
              src="/imatges/logo2.png"
              alt="Logotip de Cabrits del Roc"
              className="h-20 w-auto"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Columna 3: Segell català */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/imatges/cabracatalana.png"
              alt="Segell de Producte Català"
              className="h-16 w-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Fila 2: Logos institucionals / socials */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/34612345678"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacta per WhatsApp"
          >
            <img
              src="/imatges/whatsapp-icon.png"
              alt="WhatsApp"
              className="h-8 w-auto hover:scale-110 transition-transform"
            />
          </a>

          {/* Marca pròpia */}
          <a
            href="https://ventacabrit.cat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Web de la marca Ventacabrit"
          >
            <img
              src="/imatges/ventacabrit.png"
              alt="Marca Cabrit"
              className="h-8 md:h-10 w-auto hover:scale-110 transition-transform"
            />
          </a>

          {/* Parc Rural */}
          <a
            href="https://parcruraloliva.cat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Web del Parc Rural de l'Oliva"
          >
            <img
              src="/imatges/parc rural oliva.svg"
              alt="Parc Rural de l'Oliva"
              className="h-8 md:h-10 w-auto hover:scale-110 transition-transform"
            />
          </a>
        </div>

        {/* Fila 3: Enllaços legals */}
        <div className="text-center text-xs text-gray-600 mt-2">
          <FooterLegal />
        </div>
      </div>
    </footer>
  )
}
