// src/components/UpcomingExhibition.tsx
// Exhibition — statement + programme list left, single image right. Static.

import { Link } from 'react-router-dom'
import { eventsPage } from '../data/content'

const EXHIBITION_IMAGE =
  'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1800&q=90'

const [mainEvent, ...programme] = eventsPage.events

export default function UpcomingExhibition() {
  return (
    <section id="exhibition" className="border-t border-border-warm bg-divider text-near-black">
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-6 sm:py-20 lg:px-[clamp(32px,4vw,80px)] lg:py-[clamp(80px,10vh,128px)]">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-[clamp(48px,6vw,120px)]">
          {/* Left — statement + programme */}
          <div>
            <p className="font-ui text-[10px] font-medium uppercase tracking-[0.3em] text-secondary sm:text-[11px]">
              Upcoming Exhibition
            </p>

            <h2 className="mt-4 font-display text-[clamp(34px,3.8vw,62px)] uppercase leading-[0.95] tracking-[0.02em]">
              {mainEvent.title}
            </h2>

            <p className="mt-5 font-body text-[14px] italic text-secondary sm:text-[15px]">
              {mainEvent.dates} · {mainEvent.venue}
            </p>

            <p className="mt-5 max-w-[480px] font-body text-[15px] leading-[1.75] text-secondary sm:text-[16px]">
              {mainEvent.body} An evening with the artist marks the opening,
              followed by talks and conversations across the season.
            </p>

            {/* Programme — remaining events as quiet rows */}
            <div className="mt-9 max-w-[480px] border-t border-near-black/15">
              {programme.map((event, index) => (
                <div
                  key={event.id}
                  className="grid grid-cols-[28px_minmax(0,1fr)] items-baseline gap-4 border-b border-near-black/15 py-3.5"
                >
                  <span className="font-ui text-[9px] font-medium tracking-[0.24em] text-secondary/70 sm:text-[10px]">
                    0{index + 1}
                  </span>

                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <span className="font-display text-[15px] uppercase tracking-[0.03em] text-near-black sm:text-[16px]">
                      {event.title}
                    </span>

                    <span className="font-body text-[12px] italic text-secondary sm:text-[13px]">
                      {event.dates}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/events"
              className="mt-9 inline-flex items-center gap-4 border border-near-black px-6 py-3 font-ui text-[10px] font-medium uppercase tracking-[0.3em] text-near-black hover:bg-near-black hover:text-warm-white sm:text-[11px]"
            >
              View Details
              <span aria-hidden="true" className="text-[13px]">
                →
              </span>
            </Link>
          </div>

          {/* Right — single image with caption */}
          <figure>
            <div className="relative aspect-[4/5] overflow-hidden bg-warm-white sm:aspect-[4/3] lg:aspect-[4/5]">
              <img
                src={EXHIBITION_IMAGE}
                alt="Installation view of the exhibition"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <figcaption className="mt-3 flex items-baseline justify-between gap-4 border-t border-near-black/15 pt-3">
              <span className="font-body text-[12px] italic text-secondary sm:text-[13px]">
                Installation view — The Gallery, Shoreditch
              </span>

              <span className="font-ui text-[9px] font-medium uppercase tracking-[0.26em] text-secondary sm:text-[10px]">
                London · 2026
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
