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
  src="/imatges/logo2.png"
  alt="Cabreta transparent decorativa"
  className="absolute top-25 right-25 w-60 md:w-60 lg:w-60 drop-shadow-lg pointer-events-none rotate-15 transition-transform"
  width={192}
  height={192}
/>

    </section>
  )
}
