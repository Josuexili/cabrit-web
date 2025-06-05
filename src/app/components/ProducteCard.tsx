'use client'

import React from 'react'

type Producte = {
  nom: string
  imatge: string
  descripcio: string
  preu: string
}

interface ProducteCardProps {
  producte: Producte
}

export default function ProducteCard({ producte }: ProducteCardProps) {
  return (
    <article className="border border-green-300 rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
      <img
        src={producte.imatge}
        alt={`${producte.nom}, carn de cabrit natural i saludable`}
        className="rounded w-full md:w-96 h-72 object-cover"
        loading="lazy"
        decoding="async"
        width={384}
        height={288}
      />
      <div className="max-w-xl text-green-900 text-center mx-auto">
        <h3 className="text-3xl font-semibold mb-4">{producte.nom}</h3>
        <p className="mb-6 leading-relaxed text-lg font-light">
          {producte.descripcio}
        </p>
        <p className="text-lg font-semibold mb-4">{producte.preu}</p>

        <div className="flex justify-center">
          <a
            href="#contacte"
            className="inline-block bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-md font-semibold transition"
            title={`Demana ara ${producte.nom}`}
          >
            Demana-ho ja!
          </a>
        </div>
      </div>
    </article>
  )
}
