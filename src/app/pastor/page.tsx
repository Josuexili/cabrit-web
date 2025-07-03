'use client'

import React from 'react'
import Header from './Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Pastor from './PastorSection'


export default function LandingVenda() {
  return (
    <>
      <Header />

      <Main>
        <Pastor />
        
      </Main>

      <Footer />
    </>
  )
}
