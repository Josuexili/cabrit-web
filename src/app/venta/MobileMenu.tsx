'use client'

import React from 'react'

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
  menuItems: { href: string; label: string; title: string }[]
}

export default function MobileMenu({ isOpen, onClose, menuItems }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div
      id="menu-mobil"
      className="md:hidden bg-white shadow-md border-t border-forest-green-200"
      role="region"
      aria-label="Menú de navegació mòbil"
    >
      <ul className="flex flex-col space-y-3 p-6 text-forest-green-900 font-semibold text-lg">
        {menuItems.map(({ href, label, title }) => (
          <li key={href}>
            <a
              href={href}
              onClick={onClose}
              className="hover:text-forest-green-700"
              title={title}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
