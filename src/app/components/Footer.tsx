import React from 'react'
import FooterLegal from './FooterLegal'

export default function Footer() {
    return (
        <footer
            className="bg-[url('/imatges/Textures/fusta.avif')] bg-cover bg-center text-gray-800 text-sm px-6 py-1 mt-20 border-t border-gray-300"
            role="contentinfo"
            aria-label="Peu de pàgina"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-1 items-center">
                {/* Columna 1: Informació legal i autoria */}
                <div className="space-y-1 text-left text-xs md:text-sm">
                    <p>&copy; {new Date().getFullYear()} Cabrits del Roc</p>
                    <p>
                        Desenvolupat per <strong>Josuè González</strong>
                    </p>
                </div>

                {/* Columna 2: Logo centrat i gran */}
                <div className="flex justify-center items-center">
                    <img
                        src="/imatges/logo2.png"
                        alt="Logotip de Cabrits del Roc"
                        className="w-45 h-auto transform scale-110"
                        width={512}
                        height={256}
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                {/* Columna 3: Segell català */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src="/imatges/cabracatalana.png"
                        alt="Segell de Producte Català"
                        className="w-24 h-auto"
                        width={96}
                        height={96}
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                {/* Fila nova: Enllaços legals */}
                <div className="col-span-full w-full text-center mt-2 text-xs text-gray-600">
                    <FooterLegal />
                </div>
            </div>
        </footer>

    )
}
