'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const fotos = [
  '/imatges/foto1.jpg',
  '/imatges/foto2.jpg',
  '/imatges/foto3.jpg',
  '/imatges/foto4.jpg',
  '/imatges/foto5.jpg',
  '/imatges/foto6.jpg',
]

export default function Carousel() {
  const autoplay = useRef(
    Autoplay({
      delay: 8000,
      stopOnInteraction: false,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
    })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current])

  // Estat per saber quin slide està actiu
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Quan Embla està llest, s'afegeix listener de canvi de slide
  useEffect(() => {
  if (!emblaApi) return

  const onSelect = () => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }

  emblaApi.on('select', onSelect)
  onSelect()

  return () => {
    emblaApi.off('select', onSelect)
  }
}, [emblaApi])


  return (
    <div className="embla overflow-hidden w-full h-full">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {fotos.map((foto, i) => (
            <div
              key={i}
              className="embla__slide flex-shrink-0 basis-full h-full relative overflow-hidden"
            >
              <motion.img
                key={`${i}-${selectedIndex === i ? 'active' : 'inactive'}`} // canvia key per reiniciar
                src={foto}
                alt={`Foto ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                initial={{ scale: 1, translateZ: 0 }}
                animate={selectedIndex === i ? {
                  scale: [1, 1.08],
                  translateZ: [0, 20],
                } : { scale: 1, translateZ: 0 }}
                transition={{
                  duration: 6,
                  ease: 'easeInOut',
                  repeat: 0, // no repetir automàticament, ja que s'executa per cada slide
                }}
                style={{
                  transformOrigin: 'center center',
                  backfaceVisibility: 'hidden',
                  willChange: 'transform',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
