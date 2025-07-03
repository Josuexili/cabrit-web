'use client'

import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Ramat from './RamatSection'
import Qualitat from './QualitatSelection'
import Footer from '../components/Footer'
import Main from '../components/Main'


export default function LandingVenda() {
  return (
    <>
      <Header />

      <Main>
        <Hero />
        <Ramat />
        <Qualitat />
      </Main>

      <Footer />
    </>
  )
}
