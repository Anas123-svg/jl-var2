// src/components/Header.tsx

import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { brand, nav } from '../data/content'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/15">
      <div className="mx-auto flex h-[92px] max-w-[1800px] items-center justify-between px-6 sm:px-10 lg:px-[clamp(44px,5vw,90px)]">
        <Link
          to="/"
          aria-label={`${brand.name} homepage`}
          onClick={() => setMenuOpen(false)}
          className="relative z-20 font-display text-[clamp(24px,2.2vw,35px)] uppercase leading-none tracking-[0.2em] text-white"
        >
          {brand.name}
        </Link>

        <nav className="hidden items-center gap-[clamp(28px,3.5vw,58px)] lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `group relative font-ui text-[9px] font-medium uppercase tracking-[0.3em] text-white transition-opacity duration-300 xl:text-[10px] ${
                  isActive ? 'opacity-100' : 'opacity-65 hover:opacity-100'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}

                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-white transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
          className="relative z-20 flex h-10 w-10 flex-col items-end justify-center gap-[6px] lg:hidden"
        >
          <span
            className={`block h-px bg-white transition-all duration-300 ${
              menuOpen ? 'w-6 translate-y-[3.5px] rotate-45' : 'w-6'
            }`}
          />

          <span
            className={`block h-px bg-white transition-all duration-300 ${
              menuOpen ? 'w-6 -translate-y-[3.5px] -rotate-45' : 'w-4'
            }`}
          />
        </button>
      </div>

      <div
        className={`absolute inset-x-0 top-0 min-h-screen bg-near-black transition-all duration-500 lg:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav className="flex min-h-screen flex-col justify-center px-7 sm:px-12">
          {nav.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between border-b border-white/15 py-5 font-display text-[clamp(30px,8vw,48px)] uppercase tracking-[0.04em] ${
                  isActive ? 'text-white' : 'text-white/60'
                }`
              }
            >
              <span>{item.label}</span>

              <span className="font-ui text-[9px] tracking-[0.25em] text-white/40">
                0{index + 1}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}