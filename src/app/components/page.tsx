'use client'

import React from 'react'
import Header from '../venta/Header'
import Hero from '../venta/HeroSection'
import Productes from '../venta/ProductesSection'
import Comentaris from '../venta/ComentarisSection'
import Contacte from '../venta/ContactSection'
import Pastor from '../pastor/PastorSection'
import Footer from './Footer'
import Main from './Main'
import CabritsSection from '../ramat/QualitatSelection'
import RamatSection from '../ramat/RamatSection'

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
