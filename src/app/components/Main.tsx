'use client'

import React from 'react'

interface MainProps {
  children: React.ReactNode
}

export default function Main({ children }: MainProps) {
  return (
    <main
      role="main"
     className="relative min-h-screen bg-cover bg-center bg-no-repeat text-forest-green-900"

      style={{
        backgroundColor: 'transparent',
      }}
    >
      {/* Overlay fosc semitransparent */}
      <div className="absolute inset-0 bg-opacity-30 pointer-events-none" />

      {/* Contingut amb posicionament relatiu per estar per sobre de l'overlay */}
      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </main>
  )
}
