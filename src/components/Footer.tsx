// src/components/Footer.tsx
// Dark curved footer that rises INTO the newsletter section above.
// Achieved by matching the outer footer bg to the newsletter (bg-divider),
// pulling the whole footer up with a negative margin-top, and increasing arch height.

import { Link } from 'react-router-dom'

const exploreLinks = [
  { label: 'Exhibitions', to: '/events' },
  { label: 'The Shop', to: '/shop' },
  { label: 'Press & Journals', to: '/press' },
  { label: 'About the Studio', to: '/about' },
]

const resourceLinks = [
  { label: 'Shipping & Returns', to: '/shipping' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Sale', to: '/terms' },
  { label: 'FAQ', to: '/faq' },
]

const socials = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-[15px] w-[15px]" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[14px] w-[14px]" aria-hidden="true">
        <path d="M17.7 3H21l-7.3 8.3L22.2 21h-6.8l-5.3-6.5L4 21H.7l7.8-8.9L.5 3h7l4.8 6L17.7 3Zm-1.2 16h1.9L6.4 4.9H4.4L16.5 19Z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px]" aria-hidden="true">
        <path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8.1v2.8h2.4V21h3Z" />
      </svg>
    ),
  },
  {
    label: 'Pinterest',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px]" aria-hidden="true">
        <path d="M12 3a9 9 0 0 0-3.3 17.4c-.1-.7-.2-1.9 0-2.7l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.8 1.5 1.8 1.8 0 3.2-1.9 3.2-4.7 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.6 2.2-4.6 4.4 0 .9.3 1.8.8 2.3l.1.2-.3 1.2c0 .2-.2.2-.4.1-1.2-.6-2-2.4-2-3.9 0-3.2 2.3-6.1 6.7-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.3-5.2 6.3-1 0-2-.5-2.3-1.2l-.6 2.4c-.2.9-.8 2-1.2 2.6A9 9 0 1 0 12 3Z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    // Outer bg matches the Newsletter section above so the strip that
    // sits above the arch is seamless with the newsletter.
    // Negative margin-top pulls the whole footer up so the arch rises
    // ~80–160px into the newsletter, creating the overlap.
    <footer className="relative -mt-[clamp(80px,10vh,160px)] overflow-hidden bg-divider text-near-black">
      {/* ——— Curved dark sheet ——— */}
      <div className="relative left-1/2 w-[140%] -translate-x-1/2 rounded-t-[100%_160px] bg-near-black text-white sm:rounded-t-[100%_200px] lg:w-[130%] lg:rounded-t-[100%_240px]">
        <div className="mx-auto w-[calc(100%/1.4)] lg:w-[calc(100%/1.3)]">
          <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-[clamp(32px,4vw,64px)]">
            {/* Brand + links band */}
            <div className="grid gap-11 pb-12 pt-20 sm:pt-24 lg:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.4fr)] lg:gap-[clamp(56px,7vw,130px)] lg:pb-14 lg:pt-28">
              {/* Brand block */}
              <div>
                <p className="font-display text-[clamp(26px,2.4vw,38px)] uppercase leading-none tracking-[0.06em] text-white">
                  Lorek
                  <span className="italic normal-case tracking-normal text-white/50">
                    {' '}Studio
                  </span>
                </p>

                <p className="mt-4 max-w-[340px] font-body text-[13px] leading-[1.7] text-white/55 sm:text-[14px]">
                  Contemporary image-making from London — exhibitions,
                  editions and writing on process. Founded in twenty-nineteen,
                  the studio works between print, photography and place.
                </p>

                {/* Social icon row */}
                <div className="mt-6 flex items-center gap-2.5">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      title={s.label}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-near-black"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Link columns — Explore / Resources / Visit */}
              <div className="grid grid-cols-2 gap-9 sm:grid-cols-3 sm:gap-6">
                <div>
                  <p className="font-ui text-[9px] font-medium uppercase tracking-[0.26em] text-white/45">
                    Explore
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {exploreLinks.map((l) => (
                      <li key={l.label}>
                        <Link
                          to={l.to}
                          className="group inline-flex items-center gap-2 font-body text-[13px] text-white/65 transition-colors duration-300 hover:text-white sm:text-[14px]"
                        >
                          <span
                            aria-hidden="true"
                            className="h-px w-0 bg-white transition-all duration-300 group-hover:w-3"
                          />
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-ui text-[9px] font-medium uppercase tracking-[0.26em] text-white/45">
                    Resources
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {resourceLinks.map((l) => (
                      <li key={l.label}>
                        <Link
                          to={l.to}
                          className="group inline-flex items-center gap-2 font-body text-[13px] text-white/65 transition-colors duration-300 hover:text-white sm:text-[14px]"
                        >
                          <span
                            aria-hidden="true"
                            className="h-px w-0 bg-white transition-all duration-300 group-hover:w-3"
                          />
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <p className="font-ui text-[9px] font-medium uppercase tracking-[0.26em] text-white/45">
                    Visit
                  </p>

                  <address className="mt-4 space-y-2.5 not-italic">
                    <p className="font-body text-[13px] leading-[1.6] text-white/65 sm:text-[14px]">
                      12 Hoxton Square,
                      <br />
                      London N1 6NU
                    </p>

                    <p className="font-body text-[13px] leading-[1.6] text-white/65 sm:text-[14px]">
                      Tue — Sat, 11am — 6pm
                    </p>

                    <a
                      href="mailto:studio@lorek.co"
                      className="group inline-flex items-center gap-2 font-body text-[13px] text-white/65 transition-colors duration-300 hover:text-white sm:text-[14px]"
                    >
                      <span
                        aria-hidden="true"
                        className="h-px w-0 bg-white transition-all duration-300 group-hover:w-3"
                      />
                      studio@lorek.co
                    </a>
                  </address>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col gap-3 border-t border-white/12 py-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-ui text-[9px] uppercase tracking-[0.22em] text-white/40">
                © 2026 Lorek Studio · All rights reserved
              </p>

              <p className="hidden font-body text-[11px] italic text-white/35 sm:block sm:text-[12px]">
                London · Est. MMXIX
              </p>

              <button
                type="button"
                onClick={scrollToTop}
                className="group inline-flex items-center gap-2.5 self-start font-ui text-[9px] font-medium uppercase tracking-[0.22em] text-white/55 transition-colors duration-300 hover:text-white sm:self-auto"
              >
                Back to top

                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/25 text-[12px] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-white group-hover:bg-white group-hover:text-near-black"
                >
                  ↑
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}