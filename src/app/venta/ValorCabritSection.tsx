'use client'

import React from 'react'
import Link from 'next/link'

export default function SeccioValorCabrit() {
  return (
    <section className="font-sans bg-white h-screen px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Imatge */}
        <div className="w-full h-full flex justify-center items-center">
          <img
            src="/imatges/carncabrit.jpg"
            alt="En Roc amb el seu ramat"
            className="rounded-2xl shadow-xl max-h-[90vh] w-auto object-contain"
          />
        </div>

        {/* Text */}
        <div className="w-full text-[#222] overflow-y-auto max-h-[90vh] pr-2">
          <h3 className="text-xl sm:text-2xl md:text-xl font-bold text-[#8B0000] mb-6 leading-snug">
            Carn autèntica, sabor impecable
          </h3>
          <p className="text-sm sm:text-[15px] md:text-base leading-relaxed tracking-normal">
            <Link href="/pastor" className="text-[#8B0000] underline hover:text-[#B22222]">En Roc</Link> no té una fàbrica. Té un ramat.  
            Cada dia surt amb les cabres a pasturar, coneix cada animal pel nom i és ell qui les ajuda a parir.  
            Cuida tot el procés amb les seves mans —des del primer dia fins que la carn arriba a casa teva.
            <br /><br />
            Aquí no hi ha intermediaris, ni presses, ni maquillatge.  
            El seu <Link href="/ramat" className="text-[#8B0000] underline hover:text-[#B22222]">ramat</Link> viu en llibertat, com abans.
            <br /><br />
            I el resultat es nota: amb una bona <Link href="#receptes" className="text-[#8B0000] underline hover:text-[#B22222]">recepta</Link>, aquest cabrit no el podràs comparar amb cap altre.
            <br /><br />
            <strong>I el millor?</strong> Per menjar carn d’aquesta qualitat, no cal gastar gaire.  
            Amb ingredients senzills i estima, tastaràs un cabrit com no l’has provat mai.
          </p>
        </div>
      </div>
    </section>
  )
}
