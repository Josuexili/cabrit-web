type Comentari = {
  id: number
  text: string
  valoracio: number
  nom: string
}

type ComentariCardProps = {
  comentari: Comentari
}

export default function ComentariCard({ comentari }: ComentariCardProps) {
  const { text, valoracio, nom } = comentari

  return (
    <article
      className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-2 bg-white p-3 rounded-lg shadow-sm border border-gray-100"
      aria-label={`Comentari amb valoració de ${valoracio} estrelles per ${nom}`}
    >
      {/* Estrelles */}
      <div className="flex space-x-1 text-yellow-400 text-lg font-semibold">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < valoracio ? '' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>

      {/* Text comentari */}
      <p className="text-sm sm:text-base text-center sm:text-left font-serif italic text-gray-800 leading-snug flex-1">
        {text}
      </p>

      {/* Nom */}
      <span className="text-xs sm:text-sm text-gray-600 font-medium flex-shrink-0">
        – {nom}
      </span>
    </article>
  )
}
