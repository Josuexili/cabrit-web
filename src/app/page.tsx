'use client'

import React from 'react'
import Header from './components/Header'
import Hero from './components/HeroSection'
import Productes from './components/ProductesSection'
import Comentaris from './components/ComentarisSection'
import Contacte from './components/ContactSection'
import Pastor from './components/PastorSection'
import Footer from './components/Footer'
import Main from './components/Main'
import CabritsSection from './components/QualitatSelection'
import RamatSection from './components/RamatSection'

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
