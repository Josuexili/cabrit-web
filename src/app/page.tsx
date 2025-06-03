'use client'

import React, { useEffect, useState } from 'react'
import Head from 'next/head'

const images = [
  '/imatges/cabrit1.jpg',
  '/imatges/cabrit2.jpg',
  '/imatges/cabrit3.jpg',
  '/imatges/cabrit4.jpg',
  '/imatges/cabrit5.jpg',
]

export default function CabritDelBages() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3500) // cada 3.5 segons canvia la imatge
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Head>
        <title>Cabrit del Bages - Cabrit de muntanya</title>
        <meta
          name="description"
          content="Cabrit de muntanya, criat en llibertat i pastura, amb respecte pel medi ambient i la tradició del cor de Catalunya."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900">
        {/* Header amb logo i menú */}
        <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
          <div className="text-3xl font-bold cursor-pointer">Cabrit del Bages</div>
          <nav className="space-x-6 text-lg hidden md:block">
            <a href="#productes" className="hover:text-green-600">
              Productes
            </a>
            <a href="#historia" className="hover:text-green-600">
              Història
            </a>
            <a href="#ubicacio" className="hover:text-green-600">
              On som
            </a>
            <a href="#contacte" className="hover:text-green-600">
              Contacte
            </a>
          </nav>
        </header>

        {/* Hero / Portada amb carrousel i fons que transmet benestar */}
        <section className="relative h-[350px] md:h-[450px] lg:h-[500px] flex flex-col items-center justify-center bg-green-100 px-4">
          {/* Contenidor imatges */}
          <div className="relative w-full max-w-md md:max-w-xl lg:max-w-2xl h-48 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-lg mb-6 md:mb-8">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Cabrit ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  i === current ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          {/* Text amb fons semitransparent */}
          <div className="bg-black bg-opacity-50 p-4 md:p-8 rounded text-center text-white max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4">
              Cabrit ecològic de muntanya
            </h1>
            <p className="text-base md:text-lg lg:text-xl">
              Criat en llibertat i pastura al cor de Catalunya, amb un respecte absolut pel medi ambient i la natura que
              l’envolta.
            </p>
          </div>
        </section>

        {/* Secció Productes */}
        <section id="productes" className="max-w-7xl mx-auto py-16 px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">Els nostres productes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border rounded-lg shadow p-6 text-center">
                <div className="h-48 bg-gray-200 mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Imatge producte {i}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Producte {i}</h3>
                <p>Cabrit tallat i envasat al buit, ideal per a forn, brasa o guisats.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Secció Història */}
        <section id="historia" className="bg-green-50 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">La nostra història</h2>
            <p className="text-lg leading-relaxed">
              Som una explotació vocacional ubicada al cor de Catalunya, on els cabrits pasturen lliurement i s’alimenten
              exclusivament de la natura. No fem servir pinso: els nostres cabrits surten de cabres felices i gaudeixen de
              la cura i atenció constant d’un pastor, fins i tot a la nit.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              El resultat és un cabrit deliciós, amb un sabor intens que només s’aconsegueix criant-los de manera natural,
              al camp, amb total llibertat i sostenibilitat.
            </p>
          </div>
        </section>

        {/* Secció Ubicació */}
        <section id="ubicacio" className="max-w-7xl mx-auto py-16 px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">On som</h2>
          <div className="flex flex-col md:flex-row md:space-x-10 items-center justify-center">
            <div className="md:w-1/2 mb-8 md:mb-0 w-full">
              {/* Embed Google Maps - Canvia l’URL per la teva ubicació */}
              <iframe
                title="Ubicació Cabrit del Bages"
                src="https://maps.google.com/maps?q=sant%20fruitos%20de%20bages&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                loading="lazy"
                className="rounded shadow"
              ></iframe>
            </div>
            <div className="md:w-1/2 text-center md:text-left px-4 md:px-0">
              <h3 className="text-2xl font-semibold mb-4">Masia a la muntanya</h3>
              <p>Visita’ns a la nostra masia, on podràs conèixer el procés de cria i gaudir de la natura en estat pur.</p>
              <address className="not-italic mt-4">
                C/ Exemple, 123
                <br />
                08250 Sant Fruitós de Bages, Barcelona
                <br />
                Tel: 123 456 789
              </address>
            </div>
          </div>
        </section>

        {/* Secció Contacte */}
        <section id="contacte" className="bg-green-50 py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Contacta amb nosaltres</h2>
            <form className="space-y-6">
              <input type="text" placeholder="Nom" className="w-full p-3 border rounded" required />
              <input type="email" placeholder="Correu electrònic" className="w-full p-3 border rounded" required />
              <textarea
                placeholder="Missatge"
                rows={4}
                className="w-full p-3 border rounded"
                required
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>

        <footer className="bg-gray-100 text-center py-6 text-gray-600 text-sm">
          © {new Date().getFullYear()} Cabrit del Bages. Fet amb ❤️ i respecte per la terra.
        </footer>
      </main>
    </>
  )
}
