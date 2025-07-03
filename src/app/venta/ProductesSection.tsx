'use client'

import ProducteCard from './ProducteCard'

type Producte = {
  nom: string
  imatge: string
  descripcio: string
  preu: string
}

const productes: Producte[] = [
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
  }
]

export default function ProductesSection() {
  return (
    <section
      id="productes"
      className="min-h-screen flex items-center px-6 md:px-0"
      aria-labelledby="productes-title"
    >
      <div className="max-w-5xl mx-auto w-full font-serif text-black">
        <h2
          id="productes-title"
          className="font-rye font-bold text-4xl text-black text-center mb-12 tracking-wide"
        >
        </h2>

        {productes.map((producte, index) => (
          <ProducteCard key={index} producte={producte} />
        ))}
      </div>
    </section>
  )
}
