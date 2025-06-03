'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const productes = [
  {
    nom: 'Cabrit tallat de pastura lliure',
    imatge: '/imatges/foto2.jpg',
    descripcio:
      'Carn de cabrit criada en llibertat al Parc Rural de Montserrat, amb un sabor autèntic, saludable i natural. Tallada a mida, fresca i perfecta per a cuina tradicional o creativa.',
  },
]

// Aquí afegim només l'array d'imatges rotatòries per a la secció "El pastor"
const imatgesPastor = [
  '/imatges/foto2.jpg',
  '/imatges/foto3.jpg',
  '/imatges/foto4.jpg',
]

export default function RocGonzalez() {
  const [menuObert, setMenuObert] = useState(false)

  // Estat per controlar quina imatge mostrar a la secció "El pastor"
  const [indexImatge, setIndexImatge] = useState(0)

  // Efecte per canviar la imatge automàticament cada 4 segons
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexImatge((i) => (i + 1) % imatgesPastor.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>

      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-mochiy text-forest-green-900 font-bold tracking-wide"
          >
            Cabrits del Roc
          </a>


          {/* Menú Desktop */}
          <ul className="hidden md:flex space-x-12 text-forest-green-900 font-semibold text-lg">
            <li>
              <a
                href="#productes"
                className="hover:text-forest-green-700 transition"
              >
                Producte
              </a>
            </li>
            <li>
              <a
                href="#filosofia"
                className="hover:text-forest-green-700 transition"
              >
                La meva filosofia
              </a>
            </li>
            <li>
              <a
                href="#contacte"
                className="hover:text-forest-green-700 transition"
              >
                Contacte
              </a>
            </li>
            <li>
              <a
                href="#ubicacio"
                className="hover:text-forest-green-700 transition"
              >
                On som
              </a>
            </li>
            <li>
              <a
                href="#pastor"
                className="hover:text-forest-green-700 transition"
              >
                El pastor
              </a>
            </li>
          </ul>

          {/* Botó menú mòbil */}
          <button
            className="md:hidden text-forest-green-900 hover:text-forest-green-700 transition"
            onClick={() => setMenuObert(!menuObert)}
            aria-label="Obrir menú"
          >
            {menuObert ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Menú mòbil */}
        {menuObert && (
          <div className="md:hidden bg-white shadow-md border-t border-forest-green-200">
            <ul className="flex flex-col space-y-3 p-6 text-forest-green-900 font-semibold text-lg">
              <li>
                <a
                  href="#productes"
                  onClick={() => setMenuObert(false)}
                  className="hover:text-forest-green-700"
                >
                  Producte
                </a>
              </li>
              <li>
                <a
                  href="#filosofia"
                  onClick={() => setMenuObert(false)}
                  className="hover:text-forest-green-700"
                >
                  La meva filosofia
                </a>
              </li>
              <li>
                <a
                  href="#contacte"
                  onClick={() => setMenuObert(false)}
                  className="hover:text-forest-green-700"
                >
                  Contacte
                </a>
              </li>
              <li>
                <a
                  href="#ubicacio"
                  onClick={() => setMenuObert(false)}
                  className="hover:text-forest-green-700"
                >
                  On som
                </a>
              </li>
              <li>
                <a
                  href="#pastor"
                  onClick={() => setMenuObert(false)}
                  className="hover:text-forest-green-700"
                >
                  El pastor
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main className="font-serif text-forest-green-900 bg-white min-h-screen">
        {/* Hero */}
        <section
          className="relative h-screen w-full flex items-center justify-center overflow-hidden"
          aria-label="Imatge de portada de Roc González"
        >
          {/* Imatge de fons */}
          <img
            src="/imatges/foto5.jpg"
            alt="Cabrit pasturant lliurement al Parc Rural de Montserrat"
            className="object-cover w-full h-full"
            loading="lazy"
            decoding="async"
          />

          {/* Logotip sobreposat */}
          <img
            src="/imatges/logoroc.png"
            alt="Cabreta transparent decorativa"
            className="absolute top-88 left-1/8 w-48 md:w-64 lg:w-72 drop-shadow-lg pointer-events-none -rotate-6 transition-transform"
          />
        </section>

        {/* Producte */}
        <section
          id="productes"
          className="max-w-5xl mx-auto py-20 px-6 md:px-0"
          aria-labelledby="productes-title"
        >
          <h2
            id="productes-title"
            className="text-4xl font-extrabold mb-12 text-center tracking-wide"
          >
            El meu producte
          </h2>

          <article className="border border-green-300 rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src={productes[0].imatge}
              alt={productes[0].nom}
              className="rounded w-full md:w-96 h-72 object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="max-w-xl text-green-900">
              <h3 className="text-3xl font-semibold mb-4">{productes[0].nom}</h3>
              <p className="mb-6 leading-relaxed text-lg font-light">
                {productes[0].descripcio}
              </p>
              <p className="text-green-700 font-medium mb-4">
                Ideal per a rostits, guisats i receptes tradicionals que busquen
                sabor i naturalitat.
              </p>
              <a
                href="#contacte"
                className="inline-block bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-md font-semibold transition"
              >
                Demana ara el teu cabrit tallat
              </a>
            </div>
          </article>
        </section>

        {/* Filosofia */}
        <section
          id="filosofia"
          className="bg-green-50 py-20 px-6 md:px-0"
          aria-labelledby="filosofia-title"
        >
          <h2
            id="filosofia-title"
            className="text-4xl font-extrabold mb-12 text-center tracking-wide"
          >
            La meva filosofia
          </h2>

          <div className="max-w-4xl mx-auto text-lg font-light leading-relaxed text-green-900 px-4 md:px-0">
            <p className="mb-6">
              Les meves cabres pasturen lliurement per la natura del Parc Rural de
              Montserrat, alimentant-se de manera natural i diversa. Això garanteix
              una carn de cabrit saludable, saborosa i respectuosa amb el medi
              ambient.
            </p>
            <p>
              Crec que la qualitat i el sabor venen de respectar el cicle natural i
              criar amb cura, sense confinaments ni additius.
            </p>
          </div>
        </section>

        {/* Contacte */}
        <section
          id="contacte"
          className="bg-black py-20 px-6 text-center text-white"
          aria-labelledby="contacte-title"
        >
          <h2
            id="contacte-title"
            className="text-4xl font-extrabold mb-12 tracking-wide"
          >
            Contacta’m
          </h2>

          <div className="flex flex-col items-center space-y-8 text-white text-xl font-medium">
            {/* Telèfon amb WhatsApp */}
            <a
              href="https://wa.me/34666666666" // IMPORTANT: posa el número correcte en format internacional!
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 hover:text-green-400 transition"
            >
              <img
                src="/imatges/whatsapp-icon.png"
                alt="WhatsApp"
                className="w-8 h-8"
              />
              <span className="text-2xl">+34 666 666 666</span>
            </a>

            {/* Correu electrònic */}
            <a
              href="mailto:roc@example.com"
              className="hover:text-green-400 transition text-2xl"
            >
              roc@example.com
            </a>
          </div>
        </section>


        {/* Ubicació */}
        <section
          id="ubicacio"
          className="max-w-5xl mx-auto py-20 px-6"
          aria-label="Mapa de ubicació"
        >
          <h2 className="text-4xl font-extrabold mb-12 text-center tracking-wide">
            On som
          </h2>
          <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.9999999999995!2d2.000000!3d41.600000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2e000000000%3A0x0000000000000000!2sParc%20Rural%20Montserrat!5e0!3m2!1ses!2ses!4v1688300000000!5m2!1ses!2ses"
              loading="lazy"
              title="Mapa de la ubicació del Parc Rural de Montserrat"
              className="w-full h-full border-0"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* El pastor */}
        <section
          id="pastor"
          className="bg-white py-20 px-6 md:px-0 max-w-5xl mx-auto font-serif text-black"
          aria-labelledby="pastor-title"
        >
          <h2
            id="pastor-title"
            className="text-4xl font-semibold mb-12 text-center tracking-wide"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            El pastor
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 px-4 md:px-0">
            {/* Imatge rotatòria */}
            <img
              src={imatgesPastor[indexImatge]}
              alt="El pastor amb les seves cabres"
              className="rounded-md shadow-md w-full max-w-sm object-cover h-64 md:h-80"
            />

            <div className="text-base leading-relaxed font-light max-w-xl" style={{ fontFamily: "'Merriweather', serif" }}>
              <p className="mb-6">
                Em dic Roc i sóc el pastor que cuida les cabres del Parc Rural de Montserrat.
              </p>
              <p className="mb-6">
                Les meves cabres pasturen lliurement, seguint el ritme de la natura i alimentant-se de manera diversa i natural.
              </p>
              <p className="mb-6">
                Aquesta forma de cria respectuosa fa que la carn sigui autèntica, saborosa i saludable, amb un gust que només s’aconsegueix quan els animals viuen en llibertat i ben cuidats.
              </p>
              <p className="mb-6">
                Crec fermament que la qualitat de la carn ve de respectar els cicles naturals i garantir el benestar dels animals.
              </p>
              <p className="mb-6">
                Cada dia m’encarrego de les cabres amb paciència i dedicació, perquè tu puguis gaudir d’un producte que és fruit d’una feina honesta i una connexió profunda amb el medi ambient.
              </p>

              {/* Enllaços */}
              <div className="mt-8 flex flex-col md:flex-row gap-6 md:gap-10">
                <a
                  href="https://www.youtube.com/watch?v=I1Rfkk8J8sU"
                  className="text-black hover:text-green-800 font-medium underline transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  El roc a TV3, caçadors de bolets!
                </a>
                <a
                  href="https://www.parcruraldelmontserrat.cat/ca/informacio/noticies/pln293/roc-gonzalez-les-meves-cabres-pasturen-lliurement-i-aixo-fa-que-la-carn-sigui-mes-autentica-i-saludable"
                  className="text-black hover:text-green-800 font-medium underline transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  Entrevista a Roc González al Parc Rural de Montserrat
                </a>
              </div>
            </div>
          </div>
        </section>



      </main>
      <footer className="bg-green-900 text-white py-10 px-6 mt-20 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="mb-4">&copy; {new Date().getFullYear()} Cabrits del Roc. Tots els drets reservats.</p>
          <nav className="space-x-6">
            <a href="#productes" className="hover:text-green-400 transition">Producte</a>
            <a href="#filosofia" className="hover:text-green-400 transition">La meva filosofia</a>
            <a href="#contacte" className="hover:text-green-400 transition">Contacte</a>
            <a href="#ubicacio" className="hover:text-green-400 transition">On som</a>
            <a href="#pastor" className="hover:text-green-400 transition">El pastor</a>
          </nav>
        </div>
      </footer>

    </>
  )
}
