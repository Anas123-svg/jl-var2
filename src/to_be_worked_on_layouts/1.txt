// src/components/UpcomingExhibition.tsx

import { Link } from 'react-router-dom'
import { eventsPage } from '../data/content'
import Reveal from './Reveal'

const EXHIBITION_IMAGE =
  'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=2000&q=90'

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=2000&q=90'

const events = eventsPage.events.slice(0, 2).map((event, index) => ({
  ...event,
  type: index === 0 ? 'Exhibition' : 'Opening',
}))

export default function UpcomingExhibition() {
  return (
    <section
      id="upcoming-exhibition"
      className="overflow-hidden border-t border-near-black/10 bg-[#F0ECE6] text-near-black"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-10 sm:px-8 sm:py-12 lg:px-[clamp(36px,4.5vw,78px)] lg:py-[clamp(52px,5vw,76px)]">
        <div className="grid overflow-hidden border border-near-black/15 bg-[#F0ECE6] lg:min-h-[520px] lg:grid-cols-[0.92fr_1.08fr]">
          {/* Left content */}
          <div className="flex flex-col justify-between px-5 py-7 sm:px-8 sm:py-9 lg:px-[clamp(32px,3.8vw,62px)] lg:py-[clamp(32px,4vw,56px)]">
            <Reveal>
              <div>
                <div className="flex items-center justify-between border-b border-near-black/15 pb-4">
                  <div className="flex items-center gap-4">
                    <span className="h-px w-7 bg-near-black/40" />

                    <p className="font-ui text-[8px] font-medium uppercase tracking-[0.32em] text-near-black/45 sm:text-[9px]">
                      Upcoming Exhibition
                    </p>
                  </div>

                  <span className="font-ui text-[7px] font-medium uppercase tracking-[0.28em] text-near-black/35 sm:text-[8px]">
                    Autumn 2026
                  </span>
                </div>

                <div className="mt-8 lg:mt-[clamp(34px,4.5vh,56px)]">
                  <p className="font-ui text-[7px] font-medium uppercase tracking-[0.34em] text-near-black/40 sm:text-[8px]">
                    London Programme
                  </p>

                  <h2 className="mt-3.5 font-display text-[clamp(38px,4.2vw,70px)] uppercase leading-[0.9] tracking-[0.02em] text-near-black">
                    Autumn
                    <span className="block">Programme</span>
                  </h2>

                  <p className="mt-5 max-w-[390px] font-body text-[13px] leading-[1.7] text-near-black/60 sm:text-[14px]">
                    A focused presentation of new work, archival pieces and
                    artist-led conversations in London.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-10 lg:mt-12">
              <div className="border-t border-near-black/15">
                {events.map((event, index) => (
                  <Reveal key={event.id} delay={100 + index * 70}>
                    <Link
                      to="/events"
                      className="group grid gap-3 border-b border-near-black/15 py-4 sm:grid-cols-[28px_minmax(0,1fr)_auto] sm:items-center sm:gap-4"
                    >
                      <span className="font-ui text-[7px] font-medium tracking-[0.28em] text-near-black/30 sm:text-[8px]">
                        0{index + 1}
                      </span>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="font-ui text-[7px] font-medium uppercase tracking-[0.27em] text-near-black/40 sm:text-[8px]">
                            {event.type}
                          </span>

                          <span className="h-px w-4 bg-near-black/15" />

                          <span className="font-body text-[10px] text-near-black/45 sm:text-[11px]">
                            {event.dates}
                          </span>
                        </div>

                        <h3 className="mt-2 font-display text-[clamp(20px,1.9vw,32px)] uppercase leading-[1.02] tracking-[0.015em] text-near-black">
                          {event.title}
                        </h3>

                        <p className="mt-1.5 font-body text-[10px] italic text-near-black/40 sm:text-[11px]">
                          {event.venue}
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                        className="hidden text-[14px] text-near-black/35 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-near-black sm:block"
                      >
                        →
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={260}>
                <Link
                  to="/events"
                  className="group mt-6 inline-flex min-w-[170px] items-center justify-between border border-near-black/35 px-[18px] py-3 font-ui text-[8px] font-medium uppercase tracking-[0.27em] text-near-black transition-colors duration-300 hover:border-near-black hover:bg-near-black hover:text-[#F0ECE6] sm:min-w-[190px] sm:px-5 sm:text-[9px]"
                >
                  <span>View All Events</span>

                  <span
                    aria-hidden="true"
                    className="ml-4 text-[13px] transition-transform duration-300 group-hover:translate-x-1 sm:ml-5 sm:text-[14px]"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Right image */}
          <Reveal
            delay={80}
            className="min-h-[320px] border-t border-near-black/15 sm:min-h-[400px] lg:min-h-0 lg:border-l lg:border-t-0"
          >
            <Link
              to="/events"
              aria-label="Explore the autumn exhibition programme"
              className="group relative mx-auto block h-full w-full max-w-[900px] overflow-hidden bg-near-black/5 lg:max-w-[780px]"
            >
              <img
                src={EXHIBITION_IMAGE}
                alt="Visitors viewing contemporary artwork in a gallery"
                loading="lazy"
                decoding="async"
                onError={(event) => {
                  const image = event.currentTarget

                  if (image.dataset.fallbackApplied !== 'true') {
                    image.dataset.fallbackApplied = 'true'
                    image.src = FALLBACK_IMAGE
                  } else {
                    image.style.display = 'none'
                  }
                }}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1500ms] ease-out group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-black/[0.06] transition-colors duration-500 group-hover:bg-black/[0.12]" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

              <div className="absolute left-4 top-4 border border-white/45 bg-black/10 px-3 py-2 backdrop-blur-sm sm:left-6 sm:top-6 sm:px-4 sm:py-3">
                <span className="font-ui text-[7px] font-medium uppercase tracking-[0.3em] text-white sm:text-[8px]">
                  London · 2026
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 text-white sm:p-6 lg:p-[clamp(24px,3vw,40px)]">
                <div>
                  <p className="font-ui text-[7px] font-medium uppercase tracking-[0.3em] text-white/65 sm:text-[8px]">
                    The Gallery · Shoreditch
                  </p>

                  <p className="mt-2.5 max-w-[320px] font-body text-[12px] leading-[1.55] text-white/85 sm:text-[13px]">
                    New work shown together for the first time.
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/55 text-[15px] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-near-black sm:h-11 sm:w-11 sm:text-[16px]"
                >
                  →
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}