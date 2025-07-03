import ComentariCard from './ComentariCard'

type Comentari = {
  id: number
  text: string
  valoracio: number
  nom: string
}

const comentaris: Comentari[] = [
  {
    id: 1,
    text: 'La carn és exquisita!!! el tracte amb el ramader el més interessant! 😂😂',
    valoracio: 5,
    nom: 'Jordi Pecanins'
  },
  {
    id: 2,
    text: 'Ets un cabronàsss Roc! Quina carn més de **** mare!!!',
    valoracio: 5,
    nom: 'Juanjo Tenesa'
  },
  {
    id: 3,
    text: 'Un sabor espectacular!! ja en pots anar preparant un altre!!😂😂😂',
    valoracio: 5,
    nom: 'Algú que doni permís'
  }
]

export default function ComentarisSection() {
  return (
    <section
      id="clients"
      className="w-full mx-auto px-2 lg:px-6 pt-2 pb-4 text-black"
      aria-labelledby="clients-title"
    >
      <div className="space-y-1 mx-auto text-sm max-w-4xl">
        {comentaris.length === 0 ? (
          <p className="text-center font-light italic pt-2">
            Encara no hi ha cap comentari.
          </p>
        ) : (
          comentaris.map((comentari) => (
            <ComentariCard key={comentari.id} comentari={comentari} />
          ))
        )}
      </div>
    </section>
  )
}
