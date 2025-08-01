'use client'

import React from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

interface MenuItem {
  href: string
  label: React.ReactNode
  title: string
  external?: boolean
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  menuItems: MenuItem[]
}

export default function MobileMenu({ isOpen, onClose, menuItems }: MobileMenuProps) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Capçalera amb botó de tancar */}
      <div className="flex justify-between items-center px-4 py-4 border-b">
        <h2 className="text-base font-semibold">Menú</h2>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-black"
          aria-label="Tancar menú"
        >
          <X size={20} />
        </button>
      </div>

      {/* Enllaços del menú */}
      <ul className="flex flex-col gap-2 px-4 py-4 text-sm font-medium">
        {menuItems.map(({ href, label, title, external }) => (
          <li key={href}>
            {external ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
                className="hover:text-red-600 transition"
                onClick={onClose}
              >
                {label}
              </a>
            ) : (
              <Link href={href} title={title}>
                <span
                  onClick={onClose}
                  className="hover:text-red-600 transition cursor-pointer"
                >
                  {label}
                </span>
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Botó de comanda */}
      <div className="px-4 mt-6">
        <a
          href="#comanda"
          onClick={onClose}
          className="block bg-red-600 text-white px-4 py-2 rounded-full text-sm text-center hover:bg-red-700 transition"
        >
          Reserva el teu cabrit
        </a>
      </div>
    </div>
  )
}
