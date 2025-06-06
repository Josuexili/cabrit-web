'use client'

import React from 'react'

export default function RamatSection() {
  return (
    <section
      id="ramat"
      className="relative overflow-hidden bg-cover bg-center text-black min-h-[500px] flex items-start pt-8 px-8 md:px-20"
      style={{
        backgroundImage: "url('/imatges/foto4.jpg')",
      }}
      aria-labelledby="ramat-title"
    >
      {/* Bloc amb imatge de fons i text a sobre */}
      <div className="relative overflow-hidden bg-cover bg-center text-black min-h-[500px] flex flex-col pt-8 px-8 md:px-20">

        {/* Primer comentari, a l'esquerra */}
        <div
          className="relative z-10 max-w-4xl text-green-100 italic font-light leading-relaxed font-mochiy
                     before:content-['‘'] before:text-8xl before:absolute before:-left-10 before:-top-12 before:text-green-300
                     after:content-['’'] after:text-8xl after:absolute after:-right-10 after:-bottom-8 after:text-green-300
                     px-6 mb-20"
        >
          <p className="text-lg md:text-xl">
            El nostre ramat viu en llibertat, criat sense pinso ni additius.<br />
            Són part d’un ecosistema viu on el respecte per la terra és tot.
          </p>
        </div>

        {/* Segon comentari, més a la dreta i més separat */}
        <div
          className="relative z-10 max-w-4xl text-green-100 italic font-light leading-relaxed font-mochiy
                     before:content-['‘'] before:text-8xl before:absolute before:-left-8 before:-top-10 before:text-green-300
                     after:content-['’'] after:text-8xl after:absolute after:-right-8 after:-bottom-6 after:text-green-300
                     px-6 ml-28"
        >
          <p className="text-lg md:text-xl">
            Ajuden a netejar el bosc, mantenint-lo sa i evitant incendis...<br />
            a la seva manera, menjant i fent vida!
          </p>
        </div>

      </div>
    </section>
  )
}
