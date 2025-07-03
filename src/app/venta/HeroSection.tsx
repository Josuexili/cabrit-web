'use client'
import Carousel from '../components/Carru'

export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      aria-label="Cabrit sencer"
    >
      {/* Imatge de fons */}
      <div className="absolute inset-0 z-0">
        <img
          src="/imatges/123.jpg"
          alt="Cabrit sencer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text central */}
      <div className="absolute bottom-16 w-full z-10 text-center px-6">
        <h1 className="text-[#8B0000] text-3xl md:text-5xl font-bold drop-shadow-md mb-4">
          De la pastura al teu plat.
        </h1>
        <h2 className="text-[#8B0000] text-lg md:text-2xl drop-shadow-md leading-relaxed">
          Cabrit de veritat, criat amb llibertat i estima.<br />
          Sense fàbriques, ni intermediaris, ni invents.
        </h2>
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
