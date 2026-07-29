// src/components/Header.tsx

import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { brand, nav } from '../data/content'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const leftNav = nav.filter((item) =>
    ['shop', 'socials'].includes(item.label.toLowerCase()),
  )
  const rightNav = nav.filter((item) =>
    ['events', 'press'].includes(item.label.toLowerCase()),
  )

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `group relative font-ui text-[11px] font-medium uppercase tracking-[0.28em] text-[#1A1A1A] transition-opacity duration-300 ${
      isActive ? 'opacity-100' : 'opacity-55 hover:opacity-100'
    }`

  const renderDesktopLink = (item: (typeof nav)[number]) => (
    <NavLink key={item.to} to="#" className={() => linkClasses({ isActive: false })}>
      <>
        {item.label}
        <span className="absolute -bottom-[6px] left-0 h-px w-0 bg-[#1A1A1A] transition-all duration-300 group-hover:w-full" />
      </>
    </NavLink>
  )

  return (
    <header className="relative z-50 h-[64px] border-b border-[#E7E2DC] bg-[#FAF8F5] lg:h-[80px]">
      <div className="mx-auto flex h-full max-w-[1600px] items-center px-6 lg:px-10">
        {/* Mobile: brand left, hamburger right */}
        <div className="flex w-full items-center justify-between lg:hidden">
          <Link
            to="#"
            onClick={() => setMenuOpen(false)}
            className="font-display text-[22px] uppercase leading-none tracking-[0.2em] text-[#1A1A1A]"
          >
            {brand.name}
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-10 w-10 flex-col items-end justify-center gap-[5px]"
          >
            <span
              className={`h-px bg-[#1A1A1A] transition-all duration-300 ${
                menuOpen ? 'w-[22px] translate-y-[3px] rotate-45' : 'w-[22px]'
              }`}
            />
            <span
              className={`h-px bg-[#1A1A1A] transition-all duration-300 ${
                menuOpen ? 'w-[22px] -translate-y-[3px] -rotate-45' : 'w-[14px]'
              }`}
            />
          </button>
        </div>

        {/* Desktop: 3-column grid — left nav | brand | right nav */}
        <div className="hidden w-full grid-cols-[1fr_auto_1fr] items-center lg:grid">
          <nav className="flex items-center justify-start gap-[clamp(32px,3.5vw,56px)]">
            {leftNav.map(renderDesktopLink)}
          </nav>

          <div className="flex justify-center px-12">
            <Link
              to="#"
              className="font-display text-[26px] uppercase leading-none tracking-[0.2em] text-[#1A1A1A]"
            >
              {brand.name}
            </Link>
          </div>

          <nav className="flex items-center justify-end gap-[clamp(32px,3.5vw,56px)]">
            {rightNav.map(renderDesktopLink)}
          </nav>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`absolute left-0 top-full w-full overflow-hidden border-b border-[#E7E2DC] bg-[#FAF8F5] transition-all duration-500 lg:hidden ${
          menuOpen
            ? 'max-h-[400px] opacity-100'
            : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 py-2">
          {nav.map((item, index) => (
            <NavLink
              key={item.to}
              to="#"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-[#E7E2DC] py-4 font-ui text-[11px] font-medium uppercase tracking-[0.28em] text-[#666666] last:border-b-0"
            >
              <span>{item.label}</span>
              <span className="font-body text-[13px] italic tracking-normal text-[#B0AAA2]">
                0{index + 1}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}