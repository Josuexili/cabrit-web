'use client'

import React from 'react'

export default function ReceptesCabrit() {
  const receptes = [
    {
      titol: 'Cabrit al forn amb romaní i patates',
      descripcio:
        'Una recepta tradicional i saborosa, perfecta per a dinars en família. El cabrit s’enforna lentament amb herbes aromàtiques i patates, donant com a resultat una carn tendra i gustosa.',
      ingredients: [
        '1 espatlla de cabrit',
        '3 patates grans',
        '4 grans d’all',
        '1 branqueta de romaní fresc',
        '1 got de vi blanc',
        'Oli d’oliva verge extra',
        'Sal i pebre al gust',
      ],
      passos: [
        'Preescalfa el forn a 180 °C.',
        'Pela i talla les patates a rodanxes i col·loca-les a la base d’una safata de forn.',
        'Col·loca l’espatlla de cabrit damunt, sala i afegeix pebre i romaní.',
        'Afegeix els alls aixafats i rega-ho tot amb vi blanc i un bon raig d’oli.',
        'Enforna durant 1h 30 min, remullant amb el suc cada 20 minuts.',
      ],
    },
    {
      titol: 'Estofat de cabrit amb verdures',
      descripcio:
        'Una opció nutritiva i reconfortant. El cabrit s’estofa lentament amb verdures de temporada per aconseguir un plat equilibrat i ple de sabor.',
      ingredients: [
        '800 g de carn de cabrit trossejada',
        '1 ceba gran',
        '2 pastanagues',
        '1 porro',
        '2 tomàquets madurs',
        '1 fulla de llorer',
        '1 got de brou de carn',
        'Oli d’oliva, sal i pebre',
      ],
      passos: [
        'Enrosseix la carn en una cassola amb oli d’oliva i reserva-la.',
        'Sofregeix la ceba, porro i pastanaga a la mateixa cassola.',
        'Afegeix els tomàquets ratllats i cuina uns minuts.',
        'Torna-hi la carn, afegeix el brou i el llorer.',
        'Cuina-ho a foc lent durant 1 hora i mitja, fins que la carn sigui ben tendra.',
      ],
    },
  ]

  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Receptes amb cabrit</h1>

      {receptes.map((recepta, index) => (
        <article key={index} className="mb-12 border-b pb-8">
          <h2 className="text-2xl font-semibold mb-2">{recepta.titol}</h2>
          <p className="text-gray-700 mb-4">{recepta.descripcio}</p>

          <h3 className="text-lg font-semibold mb-1">Ingredients</h3>
          <ul className="list-disc list-inside mb-4 text-sm text-gray-800">
            {recepta.ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mb-1">Passos</h3>
          <ol className="list-decimal list-inside text-sm text-gray-800 space-y-1">
            {recepta.passos.map((pas, i) => (
              <li key={i}>{pas}</li>
            ))}
          </ol>
        </article>
      ))}
    </section>
  )
}
