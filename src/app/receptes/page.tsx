'use client'

import React from 'react'
import Header from './Header'
import Hero from './HeroSection'
import Productes from './ProductesSection'
import Comentaris from './ComentarisSection'
import Contacte from '../venta/ContactSection'
import Pastor from './PastorSection'
import Footer from './Footer'
import Main from './Main'
import CabritsSection from './QualitatSelection'
import RamatSection from './RamatSection'

export default function RocGonzalez() {


  return (
    <>
      <Header />
      
      {/* Menú mòbil */}

      <Main>
        <Hero />
        <CabritsSection />
        <RamatSection />
        <Productes />
        <Comentaris /> 
        <Contacte />
        <Pastor />
      </Main>
      
      <Footer />
    </>
  )
}
