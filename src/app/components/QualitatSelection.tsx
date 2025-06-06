'use client'

import React from 'react'

export default function CabritsSection() {
  return (
    <section
      id="cabrits"
      className="relative bg-gray-50 text-gray-900 min-h-[600px] bg-white/0.2 flex flex-col items-center py-16 px-8 md:px-20"

      aria-labelledby="cabrits-title"
    >
      {/* Títol principal */}
      <h2
        id="cabrits-title"
        className="text-3xl font-semibold mb-12 text-center tracking-wide font-serif"
      >
        Cabrits criats en llibertat
      </h2>

      {/* Contenidor de text que ocupa tota l’amplada */}
      <div className="w-full max-w-5xl space-y-12 text-center font-serif text-sm leading-relaxed text-gray-800 px-4 md:px-0">

        {/* Bloc 1: Vida en llibertat */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Un ramat que viu en llibertat tot l’any</h3>
          <p className="mb-1">
            Els nostres cabrits pasturen lliurement pels boscos i camps, respectant el seu benestar.
          </p>
          <p>
            Criats sense pinso artificial, només amb pastura natural, mantenen la seva essència tradicional.
          </p>
        </div>

        {/* Bloc 2: Pastura natural i sostenibilitat */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Pastura natural que nodreix i protegeix</h3>
          <p className="mb-1">
            S’alimenten exclusivament de la pastura dels boscos, ajudant a mantenir l’ecosistema i prevenir incendis.
          </p>
          <p>
            Aquesta alimentació aporta a la carn un sabor autèntic i ric en nutrients.
          </p>
        </div>

        {/* Bloc 3: Beneficis ecològics */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Un ecosistema viu i sa</h3>
          <p className="mb-1">
            Els cabrits netegen el bosc menjant vegetació baixa, prevenint incendis i afavorint la biodiversitat.
          </p>
          <p>
            Contribueixen a un cicle natural i sostenible que beneficia tota la comarca.
          </p>
        </div>

        {/* Bloc 4: Producte de qualitat */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Carn ecològica, sabor i tradició</h3>
          <p className="mb-1">
            Oferim cabrits de gran qualitat, criats amb respecte i segons valors ecològics i tradicionals.
          </p>
          <p>
            Prova la diferència d’un producte criat en llibertat, amb amor i dedicació.
          </p>
        </div>
        <div className="flex justify-between items-center w-full max-w-xl mx-auto relative">
  <img
    src="/imatges/logoroc.png"
    alt="Esquerra"
    className="w-12 h-auto"
  />
  <img
    src="/imatges/logoroc.png"
    alt="Centre"
    className="w-12 h-auto absolute left-1/2 transform -translate-x-1/2"
  />
  <img
    src="/imatges/logoroc.png"
    alt="Dreta"
    className="w-12 h-auto"
  />
</div>


      </div>
    </section>
  )
}
