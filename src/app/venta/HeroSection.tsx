'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      aria-label="Cabrit sencer"
    >
      {/* Imatge de fons responsive */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/imatges/foto5.jpg"
          alt="Cabrit sencer"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>


      {/* Text central */}


      {/* Logotip decoratiu responsiu */}
      <Image
        src="/imatges/lliurelogo.png"
        alt="Sello qualitat Cabrits del Roc"
        width={300}
        height={300}
        className="absolute bottom-25 left-[75%] -translate-x-1/2 
             w-55 sm:w-60 md:w-70 lg:w-80 xl:w-90 
             drop-shadow-lg pointer-events-none rotate-[15deg] transition-transform"
      />
    </section>
  )
}
