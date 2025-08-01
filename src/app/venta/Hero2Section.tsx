import React from 'react'
import { Beef, Leaf, MapPin } from 'lucide-react' // Pots canviar-ho per una imatge pròpia

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-0 px-0 font-serif">
      {/* FOTO1: Imatge gran superior */}
      <div className="w-full">
        <img
          src="/imatges/foto4.jpg"
          alt="Ramat pasturant"
          className="w-full h-100 object-cover shadow-md"
        />
      </div>

      {/* TEXTOS + FOTO2 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-screen-xl mx-auto px-6 py-12 text-black">
        {/* TEXT1 */}
        <div className="text-sm flex flex-col items-center text-center">
          <h2 className="text-lg font-bold mb-2">Producte de proximitat</h2>
          <p className="whitespace-pre leading-snug">
            Cabrits criats amb respecte{'\n'}
            i cura a les muntanyes{'\n'}
            del nostre territori.{'\n'}
            Relació directa i sense{'\n'}
            intermediaris.
          </p>
          <MapPin className="mt-3 text-yellow-500" size={18} />
        </div>

        {/* TEXT2 */}
        <div className="text-sm flex flex-col items-center text-center">
          <h2 className="text-lg font-bold mb-2">Sabor autèntic</h2>
          <p className="whitespace-pre leading-snug">
            Una carn natural i tendra,{'\n'}
            amb un gust únic que{'\n'}
            només s’aconsegueix amb{'\n'}
            una criança tranquil·la.
          </p>
          <Beef className="mt-3 text-red-700" size={18} />
        </div>

        {/* TEXT3 */}
        <div className="text-sm flex flex-col items-center text-center">
          <h2 className="text-lg font-bold mb-2">Compromís amb el medi</h2>
          <p className="whitespace-pre leading-snug">
            Ramaderia sostenible,{'\n'}
            arrelada al territori,{'\n'}
            que manté viu el paisatge{'\n'}
            i la biodiversitat rural.
          </p>
          <Leaf className="mt-3 text-green-700" size={18} />
        </div>

        {/* FOTO2 */}
        <div className="flex justify-center -mt-7 items-center">
          <img
            src="/imatges/putacabra.jpg"
            alt="Cabres netejant el bosc"
            className="w-60 h-60 object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  )
}
