'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const productes = [
  {
    nom: 'Cabrit tallat',
    imatge: '/imatges/Cabtrittallat.jpg',
    descripcio:
      'Cabrits criats com s’ha fet tota la vida: amb llet de la mare i pastura del camp, sense pinso ni presses. Són animals petits, d’uns 4 a 5 kg (nets), amb una carn ben tendra i saborosa, perfecta per cuinar al forn o a la brasa. Producte de proximitat, fet amb estima i respecte per la terra.',
    preu: '30€/kg (IVA inclòs)'
  },
]

type EstrellesProps = {
  valor: number;
  setValor: (valor: number) => void;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Estrelles({ valor, setValor }: EstrellesProps) {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          type="button"
          aria-label={`${i} estrella${i > 1 ? 's' : ''}`}
          onClick={() => setValor(i)}
          className={`text-2xl ${i <= valor ? 'text-yellow-400' : 'text-gray-300'
            } focus:outline-none`}
        >
          ★
        </button>
      ))}
    </div>
  )
}

type Comentari = {
  id: number
  text: string
  valoracio: number
  nom: string
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function RocGonzalez() {
  const [menuObert, setMenuObert] = useState(false)
  const [comentaris, setComentaris] = useState<Comentari[]>([])
  const [nouComentari, setNouComentari] = useState('')
  const [novaValoracio, setNovaValoracio] = useState(0)
  const [nomClient, setNomClient] = useState('')
  const [errors, setErrors] = useState({
    nom: '',
    comentari: '',
    valoracio: '',
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('comentaris')
      if (stored) {
        try {
          const parsed: Comentari[] = JSON.parse(stored)
          setComentaris(parsed)
        } catch (e) {
          console.error('Error parsejant comentaris:', e)
        }
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('comentaris', JSON.stringify(comentaris))
    }
  }, [comentaris])
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  function enviarComentari() {
    let valid = true
    const errorsTemp = { nom: '', comentari: '', valoracio: '' }

    if (nomClient.trim().length === 0) {
      errorsTemp.nom = 'El nom és obligatori'
      valid = false
    }

    if (nouComentari.trim().length === 0) {
      errorsTemp.comentari = 'El comentari és obligatori'
      valid = false
    } else if (nouComentari.trim().length > 150) {
      errorsTemp.comentari = 'El comentari no pot tenir més de 150 caràcters'
      valid = false
    }

    if (novaValoracio <= 0) {
      errorsTemp.valoracio = 'Has de posar una valoració'
      valid = false
    }

    setErrors(errorsTemp)

    if (!valid) return

    const nou: Comentari = {
      id: Date.now(),
      text: nouComentari.trim(),
      valoracio: novaValoracio,
      nom: nomClient.trim(),
    }

    setComentaris((prev) => [nou, ...prev])
    setNouComentari('')
    setNovaValoracio(0)
    setNomClient('')
    setErrors({ nom: '', comentari: '', valoracio: '' })
  }




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
              { href: '#clients', label: 'Valoracions', title: 'Opinions dels clients' },
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
                { href: '#clients', label: 'Els nostres clients', title: 'Opinions dels clients' },
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
        className="font-serif text-forest-green-900 bg-white min-h-screen"
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

        {/* Producte */}
        <section
          id="productes"
          className="min-h-screen flex items-center px-6 md:px-0"
          aria-labelledby="productes-title"
        >
          <div className="max-w-5xl mx-auto w-full">
            <h2 className="font-rye font-bold text-4xl text-black text-center mb-12 tracking-wide">
              PRODUCTE
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
              <div className="max-w-xl text-green-900">
                <h3 className="text-3xl font-semibold mb-4">{productes[0].nom}</h3>
                <p className="mb-6 leading-relaxed text-lg font-light">
                  {productes[0].descripcio}
                </p>
                <p className="text-lg font-semibold mb-4">
                  {productes[0].preu}
                </p>

                <a
                  href="#contacte"
                  className="inline-block bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-md font-semibold transition"
                  title="Demana ara el teu cabrit tallat"
                >
                  Demana ara el teu cabrit tallat
                </a>
              </div>
            </article>
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



        {/* seccio comentaris */}
        <section
          id="clients"
          className="w-full mx-auto px-4 lg:px-16 py-16 bg-white text-black"
          aria-labelledby="clients-title"
        >
          <h2
            id="clients-title"
            className="text-4xl font-extrabold mb-8 texst-center tracking-wide"
          >
            Alguns clients
          </h2>


          {/* llista valoracions */}
          <div className="space-y-3 mx-auto text-sm">
            {comentaris.length === 0 && (
              <p className="text-center font-light italic">
                Encara no hi ha cap comentari. Sigues el primer a opinar!
              </p>
            )}

            {comentaris
              .slice(0, 4) // Mostrem els 4 primers comentaris, canvia si vols últims
              .map(({ id, text, valoracio, nom }) => (
                <article
                  key={id}
                  className="flex items-center justify-between bg-white p-2 rounded-lg border border-white"
                  aria-label={`Comentari amb valoració de ${valoracio} estrelles per ${nom}`}
                >
                  {/* Estrelles */}
                  <div
                    className="flex space-x-1 text-yellow-400 text-2xl drop-shadow-sm font-semibold flex-shrink-0"
                    aria-hidden="true"

                  >
                    {[...Array(valoracio)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                    {[...Array(5 - valoracio)].map((_, i) => (
                      <span key={i} className="text-gray-300">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Comentari */}
                  <p className="mx-6 text-black text-lg font-semibold text-center flex-1 leading-snug break-words whitespace-pre-line">
                    {text}
                  </p>

                  {/* Nom */}
                  <span className="text-black font-medium flex-shrink-0 ml-4 whitespace-nowrap">
                    {nom}
                  </span>
                </article>
              ))}
          </div>


          {/* Formulari nou comentari */}
          {/* <form
            onSubmit={(e) => {
              e.preventDefault()

              const newErrors = { nom: '', comentari: '', valoracio: '' }

              if (nomClient.trim() === '') newErrors.nom = 'Si us plau, introdueix el teu nom'
              if (nouComentari.trim() === '') newErrors.comentari = 'Si us plau, escriu un comentari'
              if (novaValoracio === 0) newErrors.valoracio = 'Si us plau, selecciona una valoració'

              setErrors(newErrors)
              if (Object.values(newErrors).some((msg) => msg !== '')) return

              enviarComentari() // Cridem sense passar e, evita duplicats i errors
            }}
            className="mb-12 flex flex-col space-y-6"
            aria-label="Formulari per enviar comentari i valoració"
            noValidate
          >
            {/* Nom *
            <div className="relative">
              <label htmlFor="nomClient" className="text-lg font-semibold">El teu nom</label>
              <input
                type="text"
                id="nomClient"
                value={nomClient}
                onChange={(e) => setNomClient(e.target.value)}
                placeholder="Escriu el teu nom"
                className="p-3 mt-1 rounded border border-green-300 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-invalid={errors.nom ? 'true' : 'false'}
                aria-describedby={errors.nom ? 'error-nom' : undefined}
              />
              {errors.nom && (
                <div
                  id="error-nom"
                  className="absolute -top-2 left-2 transform -translate-y-full bg-green-600 text-white text-sm px-3 py-1 rounded shadow z-10"
                  role="alert"
                >
                  {errors.nom}
                  <div className="absolute left-3 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-green-600" />
                </div>
              )}
            </div>

            {/* Comentari *
            <div className="relative">
              <label htmlFor="comentari" className="text-lg font-semibold">Escriu el teu comentari</label>
              <textarea
                id="comentari"
                rows={4}
                value={nouComentari}
                onChange={(e) => setNouComentari(e.target.value)}
                className="p-3 mt-1 rounded border border-green-300 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-invalid={errors.comentari ? 'true' : 'false'}
                aria-describedby={errors.comentari ? 'error-comentari' : undefined}
              />
              {errors.comentari && (
                <div
                  id="error-comentari"
                  className="absolute -top-2 left-2 transform -translate-y-full bg-green-600 text-white text-sm px-3 py-1 rounded shadow z-10"
                  role="alert"
                >
                  {errors.comentari}
                  <div className="absolute left-3 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-green-600" />
                </div>
              )}
            </div>

            {/* Valoració *
            <div className="relative">
              <label className="text-lg font-semibold">Valora el producte</label>
              <Estrelles valor={novaValoracio} setValor={setNovaValoracio} />
              {errors.valoracio && (
                <div
                  className="absolute -top-2 left-2 transform -translate-y-full bg-green-600 text-white text-sm px-3 py-1 rounded shadow z-10"
                  role="alert"
                >
                  {errors.valoracio}
                  <div className="absolute left-3 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-green-600" />
                </div>
              )}
            </div>

            {/* Botó enviar *
            <button
              type="submit"
              className="self-start bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-md font-semibold transition"
              aria-label="Enviar comentari i valoració"
            >
              Enviar
            </button>
          </form> */}

        </section>






        {/* El pastor */}
        <section
          id="pastor"
          className="bg-white py-20 px-6 md:px-0 max-w-6xl mx-auto font-serif text-black"
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
              style={{ fontFamily: "'Merriweather', serif" }}
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
         className="bg-green-100 text-green-900 text-sm px-6 py-8 mt-20"
        role="contentinfo"
        aria-label="Peu de pàgina"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
          {/* Informació legal i autoria - esquerra, text més petit */}
          <div className="space-y-1 text-left text-xs md:text-xs">
            <p>&copy; {new Date().getFullYear()} Cabrits del Roc</p>
            <p>Developed by <strong>Josuè González</strong></p>
            <p>Tots els drets reservats.</p>
          </div>

          {/* Logo empresa - centrat */}
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

          {/* Segell Producte Català - dret */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/imatges/productecatala.png"
              alt="Segell de Producte Català"
              className="w-24 h-auto"
              width={96}
              height={96}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </footer>
    </>
  )
}
