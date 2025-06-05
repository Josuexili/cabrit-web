import { useEffect, useState } from 'react'

const fotos = [
  '/imatges/foto1.jpg',
  '/imatges/foto2.jpg',
  '/imatges/foto3.jpg',
  '/imatges/foto4.jpg',
  '/imatges/foto5.jpg',
  '/imatges/foto6.jpg',
]

export default function Carousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % fotos.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg h-64 md:h-96">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${fotos.length * 100}%`,
          transform: `translateX(-${index * (100 / fotos.length)}%)`,
        }}
      >
        {fotos.map((foto, i) => (
          <img
            key={i}
            src={foto}
            alt={`Foto ${i + 1}`}
            className="w-full h-64 md:h-96 object-cover flex-shrink-0"
            style={{ width: `${100 / fotos.length}%` }}
          />
        ))}
      </div>
    </div>
  )
}
