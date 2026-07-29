import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { brand, nav } from '../data/content'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const isHomePage = pathname === '/'
  const useLightText = isHomePage || menuOpen

  const mid = Math.ceil(nav.length / 2)
  const leftNav = nav.slice(0, mid)
  const rightNav = nav.slice(mid)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const originalOverflow = document.body.style.overflow

    document.body.style.overflow = menuOpen ? 'hidden' : originalOverflow

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`left-0 top-0 z-50 h-[72px] w-full border-b transition-colors duration-300 ${
          isHomePage
            ? 'absolute border-white/20 bg-transparent'
            : 'sticky border-[#DDD8D1] bg-[#FAF8F5]/95 backdrop-blur-xl'
        }`}
      >
        <div className="mx-auto grid h-full max-w-[1560px] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8 lg:px-[clamp(32px,4.5vw,72px)]">
          {/* Desktop left navigation */}
          <nav className="hidden items-center gap-[clamp(24px,2.7vw,48px)] lg:flex">
            {leftNav.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                label={item.label}
                light={useLightText}
              />
            ))}
          </nav>

          {/* Wordmark */}
          <Link
            to="/"
            aria-label={`${brand.name} home`}
            className={`col-start-1 justify-self-start whitespace-nowrap pl-[0.36em] font-display text-[clamp(20px,1.75vw,29px)] font-normal uppercase leading-none tracking-[0.36em] transition-colors lg:col-start-2 lg:justify-self-center ${
              useLightText ? 'text-white' : 'text-[#171717]'
            }`}
          >
            {brand.name}
          </Link>

          {/* Desktop right navigation */}
          <div className="hidden items-center justify-end gap-[clamp(24px,2.7vw,48px)] lg:flex">
            {rightNav.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                label={item.label}
                light={useLightText}
              />
            ))}

          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="col-start-3 flex h-10 w-10 justify-self-end flex-col items-end justify-center gap-[6px] lg:hidden"
          >
            <span
              className={`h-px transition-all duration-300 ${
                useLightText ? 'bg-white' : 'bg-[#171717]'
              } ${
                menuOpen
                  ? 'w-6 translate-y-[3.5px] rotate-45'
                  : 'w-6'
              }`}
            />

            <span
              className={`h-px transition-all duration-300 ${
                useLightText ? 'bg-white' : 'bg-[#171717]'
              } ${
                menuOpen
                  ? 'w-6 -translate-y-[3.5px] -rotate-45'
                  : 'w-4'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile navigation */}
      <div
        className={`fixed inset-0 z-40 overflow-y-auto bg-[#151515] transition-all duration-500 lg:hidden ${
          menuOpen
            ? 'visible opacity-100'
            : 'pointer-events-none invisible opacity-0'
        }`}
      >
        <nav className="mx-auto flex min-h-full max-w-[680px] flex-col justify-center px-6 pb-10 pt-24 sm:px-10">
          <p className="mb-7 font-ui text-[8px] font-medium uppercase tracking-[0.38em] text-white/45">
            Navigation
          </p>

          {nav.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between border-b border-white/15 py-[clamp(15px,2.8vh,24px)]"
            >
              <span className="pl-[0.08em] font-display text-[clamp(34px,10vw,58px)] font-normal uppercase leading-none tracking-[0.08em] text-white transition-opacity group-hover:opacity-60">
                {item.label}
              </span>

              <span className="font-ui text-[8px] font-medium tracking-[0.28em] text-white/40">
                {String(index + 1).padStart(2, '0')}
              </span>
            </NavLink>
          ))}

          <div className="mt-8 flex items-center justify-between">
            <span className="font-ui text-[8px] uppercase tracking-[0.3em] text-white/40">
              Selected work and stories
            </span>

            <Link
              to="/press"
              onClick={() => setMenuOpen(false)}
              className="font-ui text-[8px] uppercase tracking-[0.3em] text-white"
            >
              Latest Issue →
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

function NavItem({
  to,
  label,
  light,
}: {
  to: string
  label: string
  light: boolean
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group relative whitespace-nowrap font-ui text-[9px] font-medium uppercase tracking-[0.31em] transition-opacity ${
          light ? 'text-white' : 'text-[#171717]'
        } ${isActive ? 'opacity-100' : 'opacity-65 hover:opacity-100'}`
      }
    >
      {({ isActive }) => (
        <>
          {label}

          <span
            className={`absolute -bottom-[8px] left-0 h-px transition-all duration-300 ${
              light ? 'bg-white' : 'bg-[#171717]'
            } ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
          />
        </>
      )}
    </NavLink>
  )
}