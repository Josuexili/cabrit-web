'use client'
import Carousel from './Carru'

export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      aria-label="Imatge de portada de Roc González"
    >
      {/* Imatge de fons */}
      <div className="absolute inset-0 z-0">
        <Carousel />
      </div>

      {/* Logotip sobreposat */}
      <img
        src="/imatges/logoroc.png"
        alt="Cabreta transparent decorativa"
        className="absolute top-88 left-1/8 w-48 md:w-64 lg:w-72 drop-shadow-lg pointer-events-none -rotate-6 transition-transform"
        width={288}
        height={288}
      />
    </section>
  )
}
