import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { brand, nav } from '../data/content'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="relative z-50 h-[68px] border-b border-[#E7E2DC] bg-[#FAF8F5] lg:h-[84px]">
        <div className="mx-auto grid h-full max-w-[1800px] grid-cols-[1fr_auto] items-center px-5 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-[clamp(20px,2vw,32px)]">
          <Link
            to="/"
            className="justify-self-start font-display text-[clamp(21px,1.8vw,28px)] uppercase leading-none tracking-[0.22em] text-[#1A1A1A]"
          >
            {brand.name}
          </Link>

          <nav className="hidden items-center justify-center gap-[clamp(36px,4.5vw,72px)] lg:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `group relative font-ui text-[10px] font-medium uppercase tracking-[0.3em] transition-colors duration-300 ${
                    isActive
                      ? 'text-[#1A1A1A]'
                      : 'text-[#666666] hover:text-[#1A1A1A]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    <span
                      className={`absolute -bottom-[6px] left-0 h-px bg-[#1A1A1A] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden justify-self-end lg:flex">
            <Link
              to="/contact"
              className="border border-[#1A1A1A] px-6 py-2.5 font-ui text-[10px] font-medium uppercase tracking-[0.3em] text-[#1A1A1A] transition-colors duration-300 hover:bg-[#1A1A1A] hover:text-[#FAF8F5]"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-10 w-10 flex-col items-end justify-center gap-[5px] justify-self-end lg:hidden"
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
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#FAF8F5] pt-[68px] transition-all duration-500 lg:hidden ${
          menuOpen
            ? 'visible opacity-100'
            : 'pointer-events-none invisible opacity-0'
        }`}
      >
        <nav className="flex h-full flex-col justify-center px-5 pb-[68px] sm:px-6">
          {nav.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={`flex items-baseline justify-between border-b border-[#E7E2DC] py-6 transition-all duration-500 ${
                menuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: menuOpen ? `${index * 60}ms` : '0ms' }}
            >
              <span className="font-display text-[clamp(30px,8vw,46px)] uppercase leading-none tracking-[0.06em] text-[#1A1A1A]">
                {item.label}
              </span>

              <span className="font-body text-[13px] italic text-[#666666]">
                0{index + 1}
              </span>
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={`mt-10 flex items-center justify-center gap-4 border border-[#1A1A1A] py-4 font-ui text-[11px] font-medium uppercase tracking-[0.3em] text-[#1A1A1A] transition-all duration-500 ${
              menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{
              transitionDelay: menuOpen ? `${nav.length * 60}ms` : '0ms',
            }}
          >
            Contact
            <span className="text-[13px]">→</span>
          </Link>
        </nav>
      </div>
    </>
  )
}