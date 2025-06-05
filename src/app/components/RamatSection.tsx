'use client'

import React from 'react'

export default function RamatSection() {
  return (
    <section
      id="ramat"
      className="font-mochiy py-20 px-6 md:px-0 max-w-6xl mx-auto text-black"
      aria-labelledby="ramat-title"
    >
      <h2
        id="ramat-title"
        className="text-4xl font-semibold mb-12 text-center tracking-wide font-mochiy"
      >
        El ramat
      </h2>

      {/* Bloc amb imatge de fons i text a sobre */}
      <div
        className="relative overflow-hidden bg-cover bg-center text-black min-h-[500px] flex items-start pt-8 px-8 md:px-20"
        style={{
          backgroundImage: "url('/imatges/Textures/grass.jpg')",
        }}
      >
      

        {/* Text gran, en cursiva i informal a dalt del div */}
        <div className="relative z-10 space-y-6 text-lg md:text-xl italic font-light leading-relaxed max-w-5xl font-mochiy">
          <p>
            El nostre ramat viu en llibertat, criat sense pinso ni additius,
            seguint un estil de vida natural i lliure. Cada cabra és part
            d’un ecosistema viu, on el respecte per la terra ho és tot.
          </p>
          <p>
            Ajuden a netejar el bosc del Bages i l’Anoia, mantenint-lo sa i
            evitant incendis... a la seva manera: menjant, saltant i fent vida!
          </p>
          <p>
            I tot això ens permet oferir-te una carn de veritat: autèntica,
            saborosa i amb una història al darrere.
          </p>
        </div>
      </div>
    </section>
  )
}

