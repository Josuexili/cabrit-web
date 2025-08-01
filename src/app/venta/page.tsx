'use client'

import React from 'react'
import Header from './Header'
import Hero from './HeroSection'
import Hero2 from './Hero2Section'
import Productes from './ProductesSection'
import Contacte from './ContactSection'
import Footer from '../components/Footer'
import Main from '../components/Main'
import ComentarisSection from './ComentarisSection'
import SeccioValorCabrit from './ValorCabritSection'

export default function LandingVenda() {
  return (
    <>
      <Header />

      <Main>
        <Hero2 />
        <Hero />
        <SeccioValorCabrit />
        <Productes />
        <ComentarisSection />
        <Contacte />
      </Main>

      <Footer />
    </>
  )
}
