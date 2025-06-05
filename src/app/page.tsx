'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import FooterLegal from './components/FooterLegal'
import Carousel from './components/Carru'


const productes = [
  {
    nom: '1 cabrit tallat (4-5 kg)',
    imatge: '/imatges/Cabtrittallat.jpg',
    descripcio:
      'Carn tendra i saborosa, perfecta per cuinar al forn o a la brasa. Producte de proximitat, fet amb estima i respecte per la terra.',
    preu: '30€/kg (IVA inclòs)'
  },
  {
    nom: '1/2 cabrit tallat (4-5 kg)',
    imatge: '/imatges/cabrittallat2.jpg',
    descripcio:
      'Carn tendra i saborosa, perfecta per cuinar al forn o a la brasa. Producte de proximitat, fet amb estima i respecte per la terra.',
    preu: '30€/kg (IVA inclòs)'
  },
]

type Comentari = {
  id: number
  text: string
  valoracio: number
  nom: string
}

const comentaris: Comentari[] = [
  {
    id: 1,
    text: 'La carn és exquisita!!! el tracte amb el ramader el més interessant! 😂😂',
    valoracio: 5,
    nom: 'Jordi Pecanins'
  },
  {
    id: 2,
    text: 'Ets un cabronàsss Roc! Quina carn més de **** mare!!!',
    valoracio: 5,
    nom: 'Juanjo Tenesa'
  },
  {
    id: 3,
    text: 'Un sabor espectacular!! ja en pots anar preparant un altre!!😂😂😂',
    valoracio: 5,
    nom: 'Algú que doni permís'
  }
]



export default function RocGonzalez() {
  const [menuObert, setMenuObert] = useState(false)


  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
        <nav
          className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
          aria-label="Navegació principal"
        >
          <h1>
            <a
              href="#"
              className="text-2xl lg:text-xl font-mochiy text-forest-green-900 font-bold tracking-wide"
              title="Inici - Cabrits del Roc"
            >
              Cabrits del Roc
            </a>
          </h1>

          {/* Menú de pantalla gran */}
          <ul className="hidden md:flex space-x-12 lg:space-x-8 text-forest-green-900 font-semibold text-lg lg:text-base">
            {[
              { href: '#productes', label: 'Producte', title: 'Ves a la secció de productes' },
              { href: '#contacte', label: 'Contacte', title: 'Contacta amb mi' },
              { href: '#pastor', label: 'El pastor', title: 'Secció El pastor' },
            ].map(({ href, label, title }) => (
              <li key={href}>
                <a href={href} className="hover:text-forest-green-700 transition" title={title}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Botó menú mòbil */}
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

        {/* Menú mòbil desplegable */}
        {menuObert && (
          <div
            id="menu-mobil"
            className="md:hidden bg-white shadow-md border-t border-forest-green-200"
            role="region"
            aria-label="Menú de navegació mòbil"
          >
            <ul className="flex flex-col space-y-3 p-6 text-forest-green-900 font-semibold text-lg">
              {[
                { href: '#productes', label: 'Producte', title: 'Ves a la secció de productes' },
                { href: '#contacte', label: 'Contacte', title: 'Contacta amb mi' },
                { href: '#pastor', label: 'El pastor', title: 'Secció El pastor' },
              ].map(({ href, label, title }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setMenuObert(false)}
                    className="hover:text-forest-green-700"
                    title={title}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>



      <main
        role="main"
        className="text-forest-green-900 bg-white min-h-screen"
      >
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
            width={1920}
            height={1080}
          />

          {/* Logotip sobreposat */}
          <img
            src="/imatges/logoroc.png"
            alt="Cabreta transparent decorativa"
            className="absolute top-88 left-1/8 w-48 md:w-64 lg:w-72 drop-shadow-lg pointer-events-none -rotate-6 transition-transform"
            width={288}
            height={288}
          />
        </section>

        {/* ramat */}
        <section
          id="ramat"
          className="bg-white font-mochiy py-20 px-6 md:px-0 max-w-6xl mx-auto text-black"
          aria-labelledby="ramat-title"
        >
          <h2
            id="ramat-title"
            className="text-4xl font-semibold mb-12 text-center tracking-wide font-mochiy"
          >
            El ramat
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 px-4 md:px-0">
            {/* Imatge a l'esquerra */}
            <div className="w-full md:w-1/2">
              <Carousel />
            </div>

            {/* Text a la dreta */}
            <div className="text-base leading-loose max-w-xl w-full md:w-1/2 font-mochiy space-y-8">
              <p>
                El nostre ramat viu en llibertat, criat sense pinso ni additius, seguint un estil de vida arrelat a la natura. Cada cabra forma part d’un ecosistema viu, on la sostenibilitat i el respecte pel medi ambient són pilars fonamentals.  </p>
              <p>
                Les cabres pasturen lliurement pels boscos del Bages i l’Anoia, ajudant a conservar el sotabosc i prevenir incendis, gràcies a la seva habilitat natural per eliminar vegetació seca i mantenir l’entorn equilibrat.  </p>

              <p>
                Aquesta gestió tradicional i respectuosa ens permet oferir un producte autèntic i de gran qualitat, ple de sabor i caràcter.  </p>
            </div>
          </div>
        </section>



        {/* Producte */}
        <section
          id="productes"
          className="min-h-screen flex items-center px-6 md:px-0"
          aria-labelledby="productes-title"
        >
          <div className="max-w-5xl mx-auto w-full font-serif text-black">
            <h2 className="font-rye font-bold text-4xl text-black text-center mb-12 tracking-wide">

            </h2>




            <article className="border border-green-300 rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
              <img
                src={productes[0].imatge}
                alt={`${productes[0].nom}, carn de cabrit natural i saludable`}
                className="rounded w-full md:w-96 h-72 object-cover"
                loading="lazy"
                decoding="async"
                width={384}
                height={288}
              />
              <div className="max-w-xl text-green-900 text-center mx-auto">
                <h3 className="text-3xl font-semibold mb-4">{productes[0].nom}</h3>
                <p className="mb-6 leading-relaxed text-lg font-light">
                  {productes[0].descripcio}
                </p>
                <p className="text-lg font-semibold mb-4">
                  {productes[0].preu}
                </p>

                <div className="flex justify-center">
                  <a
                    href="#contacte"
                    className="inline-block bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-md font-semibold transition"
                    title="Demana ara el teu cabrit tallat"
                  >
                    Demana-ho ja!
                  </a>
                </div>
              </div>

            </article>

            <article className="border border-green-300 rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
              <img
                src={productes[1].imatge}
                alt={`${productes[1].nom}, carn de cabrit natural i saludable`}
                className="rounded w-full md:w-96 h-72 object-cover"
                loading="lazy"
                decoding="async"
                width={384}
                height={288}
              />
              <div className="max-w-xl text-green-900 text-center mx-auto">
                <h3 className="text-3xl font-semibold mb-4">{productes[1].nom}</h3>
                <p className="mb-6 leading-relaxed text-lg font-light">
                  {productes[1].descripcio}
                </p>
                <p className="text-lg font-semibold mb-4">
                  {productes[1].preu}
                </p>

                <div className="flex justify-center">
                  <a
                    href="#contacte"
                    className="inline-block bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-md font-semibold transition"
                    title="Demana ara el teu cabrit tallat"
                  >
                    Demana-ho ja!
                  </a>
                </div>
              </div>

            </article>
          </div>
        </section>



        {/* Secció comentaris */}
        <section
          id="clients"
          className="w-full mx-auto px-2 lg:px-6 pt-2 pb-4 bg-gray-50 text-black"
          aria-labelledby="clients-title"
        >
          <div className="space-y-1 mx-auto text-sm max-w-4xl">
            {comentaris.length === 0 ? (
              <p className="text-center font-light italic pt-2">
                Encara no hi ha cap comentari.
              </p>
            ) : (
              comentaris.map(({ id, text, valoracio, nom }) => (
                <article
                  key={id}
                  className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-2 bg-white p-3 rounded-lg shadow-sm border border-gray-100"
                  aria-label={`Comentari amb valoració de ${valoracio} estrelles per ${nom}`}
                >
                  {/* Estrelles */}
                  <div className="flex space-x-1 text-yellow-400 text-lg font-semibold">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < valoracio ? '' : 'text-gray-300'}>
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Text comentari */}
                  <p className="text-sm sm:text-base text-center sm:text-left font-serif italic text-gray-800 leading-snug flex-1">
                    {text}
                  </p>

                  {/* Nom */}
                  <span className="text-xs sm:text-sm text-gray-600 font-medium flex-shrink-0">
                    – {nom}
                  </span>
                </article>
              ))
            )}
          </div>
        </section>




        {/* Contacte */}
        <section
          id="contacte"
          className="min-h-screen flex items-center justify-center px-6 bg-black text-white text-center"
          aria-labelledby="contacte-title"
        >
          <div>
            <h2
              id="contacte-title"
              className="text-4xl font-extrabold mb-12 tracking-wide"
            >
              Contacta’m
            </h2>

            <div className="flex flex-col items-center space-y-8 text-white text-xl font-medium">
              {/* Telèfon amb WhatsApp */}
              <a
                href="https://wa.me/34666666666"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:text-green-400 transition"
                title="Contacta per WhatsApp al +34 666 666 666"
              >
                <img
                  src="/imatges/whatsapp-icon.png"
                  alt="Icona WhatsApp"
                  className="w-8 h-8"
                  width={32}
                  height={32}
                />
                <span className="text-2xl">+34 666 666 666</span>
              </a>

              {/* Correu electrònic */}
              <a
                href="mailto:roc@example.com"
                className="hover:text-green-400 transition text-2xl"
                title="Enviar correu electrònic a roc@example.com"
              >
                roc@example.com
              </a>
            </div>
          </div>
        </section>


        {/* El pastor */}
        <section
          id="pastor"
          className="bg-white py-20 px-6 md:px-0 max-w-6xl mx-auto font-mochiy text-black"
          aria-labelledby="pastor-title"
        >
          <h2
            id="pastor-title"
            className="text-4xl font-semibold mb-12 text-center tracking-wide"
          >
            El pastor
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 px-4 md:px-0">
            {/* Imatge fixa a l'esquerra */}
            <div className="w-full md:w-1/2">
              <img
                src="/imatges/roc1.jpg" // <-- Substitueix amb la ruta real
                alt="El pastor Roc González cuidant les seves cabres al Parc Rural de Montserrat"
                className="rounded-md shadow-md object-cover w-full h-64 md:h-[28rem]"
                width={640}
                height={448}
              />
            </div>

            {/* Text a la dreta */}
            <div
              className="text-base leading-relaxed font-light max-w-xl w-full md:w-1/2"
            >
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
                  title="Veure el Roc a TV3, caçadors de bolets"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  El roc a TV3, caçadors de bolets!
                </a>
                <a
                  href="https://www.parcruraldelmontserrat.cat/ca/informacio/noticies/pln293/roc-gonzalez-les-meves-cabres-pasturen-lliurement-i-aixo-fa-que-la-carn-sigui-mes-autentica-i-saludable"
                  className="text-black hover:text-green-800 font-medium underline transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Entrevista a Roc González al Parc Rural de Montserrat"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  Entrevista a Roc González al Parc Rural de Montserrat
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
  className="bg-green-900 text-white text-sm px-6 py-8 mt-20"
  role="contentinfo"
  aria-label="Peu de pàgina"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
    {/* Columna 1: Informació legal i autoria */}
    <div className="space-y-1 text-left text-xs md:text-xs">
      <p>&copy; {new Date().getFullYear()} Cabrits del Roc</p>
      <p>Developed by <strong>Josuè González</strong></p>
      <p>Tots els drets reservats.</p>
    </div>

    {/* Columna 2: Logo de l’empresa, centrat */}
    <div className="flex justify-center items-center">
      <img
        src="/imatges/logoroc.png"
        alt="Logotip de Cabrits del Roc"
        className="w-32 h-auto"
        width={128}
        height={64}
        loading="lazy"
        decoding="async"
      />
    </div>

    {/* Columna 3: Segell Producte Català, alineat a la dreta */}
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

    {/* Fila nova: Enllaços legals centrats, amb fons blanc i text negre */}
    <div className="col-span-full w-full text-center mt-6">
  <div className="inline-block bg-white text-gray-900 text-[10px] px-2 py-0 rounded-lg shadow-sm space-x-4">
    <FooterLegal />
  </div>
</div>
  </div>
</footer>


    </>
  )
}
