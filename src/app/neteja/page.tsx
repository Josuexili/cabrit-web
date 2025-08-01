'use client'

import React from 'react'
import Header from './Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Neteja from './NetejaForestal'

export default function RocGonzalez() {
  return (
    <>
      <Header />
      
      <Main>
       <Neteja />
      </Main>
      <Footer />
    </>
  )
}
