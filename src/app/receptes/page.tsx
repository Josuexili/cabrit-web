'use client'

import React from 'react'
import Header from './Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function RocGonzalez() {
  return (
    <>
      <Header />
      {/* Menú mòbil (si cal afegir-lo aquí) */}
      <Main>
        {/* Add your main content here */}
        {/* Example content to satisfy the children prop */}
        <div></div>
      </Main>
      <Footer />
    </>
  )
}
