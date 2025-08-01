import React from 'react'
import { Leaf, Trees } from 'lucide-react'

export default function NetejaForestal() {
  return (
    <section className="w-full bg-white py-20 px-6 font-serif">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Bloc de text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4">Neteja Forestal amb Cabres</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Les cabres són una eina natural i eficient per a la gestió del sotabosc. Mitjançant un pasturatge controlat, contribuïm a reduir la biomassa combustible, prevenir incendis i regenerar els ecosistemes de forma sostenible.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            El nostre projecte combina el respecte pel medi ambient amb una activitat ramadera responsable i arrelada al territori. Apostem per un futur on la natura i les activitats humanes puguin conviure en harmonia.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Leaf className="text-green-700" />
            <Trees className="text-green-700" />
            <span className="text-sm text-gray-600">Sostenibilitat · Prevenció d'incendis · Equilibri ecològic</span>
          </div>
        </div>

        {/* Bloc d’imatge */}
        <div className="flex justify-center">
          <img
            src="/imatges/netejaforestal.jpg"
            alt="Cabres netejant el bosc"
            className="w-full max-w-md rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}
