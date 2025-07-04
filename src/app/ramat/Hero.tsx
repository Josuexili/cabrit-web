'use client'
import Carousel from './Carru'

export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      aria-label="Cabrit sencer"
    >
      {/* Carrusel de fons */}
      <div className="absolute inset-0 z-0">
        <Carousel />
      </div>

      {/* Text central */}
      <div className="absolute bottom-16 w-full z-10 text-center px-6">
        <h1 className="text-[#8B0000] text-3xl md:text-5xl font-bold drop-shadow-md mb-4">
          Estan com una cabra!
        </h1>
      </div>

      {/* Logotip decoratiu responsiu */}
      <img
        src="/imatges/logo2.png"
        alt="Cabreta transparent decorativa"
        className="hidden sm:block absolute top-15 right-10 w-24 md:w-36 lg:w-48 drop-shadow-lg pointer-events-none rotate-[15deg] transition-transform"
        width={192}
        height={192}
      />
    </section>
  )
}
