// src/components/FeaturedCollection.tsx
// The Work — balanced 2×2 paneled grid echoing the hero's bordered structure.
// Sits between Hero (warm white, bordered panels) and UpcomingExhibition (divider bg).

import { Link } from 'react-router-dom'

const pieces = [
  {
    id: 'w1',
    label: 'Collection',
    title: 'New Collection',
    caption: 'Archival pigment prints · Spring 2026',
    description:
      'A new suite of large-format prints exploring surface, repetition and the weight of colour.',
    to: '#',
    image:
      'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1400&q=90',
  },
  {
    id: 'w2',
    label: 'Series',
    title: 'The Making of Grief',
    caption: 'Untitled No. 7 · London, 2026',
    description:
      'Works made over a single winter — shadow, memory and transformation held in one frame.',
    to: '#',
    image:
      'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1400&q=90',
  },
  {
    id: 'w3',
    label: 'Study',
    title: 'Body of Light',
    caption: 'Silver gelatin print · 2025',
    description:
      'Darkroom studies in exposure and absence, printed by hand in small editions.',
    to: '#',
    image:
      'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&w=1400&q=90',
  },
  {
    id: 'w4',
    label: 'Archive',
    title: 'Quiet Remains',
    caption: 'Mixed media on paper · 2026',
    description:
      'Fragments and works on paper drawn from the studio archive, shown here for the first time.',
    to: '#',
    image:
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1400&q=90',
  },
]

export default function FeaturedCollection() {
  return (
    <section
      id="work"
      className="border-t border-border-warm bg-warm-white text-near-black"
    >
      <div className="mx-auto max-w-[1600px] border-x border-border-warm">
        {/* ── Editorial statement ─────────────────────────────── */}
        <div className="grid gap-8 px-5 py-12 sm:px-7 sm:py-14 lg:grid-cols-2 lg:items-end lg:gap-[clamp(48px,6vw,120px)] lg:px-[clamp(32px,4vw,80px)] lg:py-[clamp(56px,7vh,88px)]">
          <div>
            <p className="font-ui text-[10px] font-medium uppercase tracking-[0.3em] text-secondary sm:text-[11px]">
              The Work
            </p>

            <h2 className="mt-4 font-display text-[clamp(32px,3.4vw,54px)] uppercase leading-[0.96] tracking-[0.02em]">
              Selected
              <span className="block">Pieces</span>
            </h2>
          </div>

          <div className="max-w-[460px] lg:justify-self-end lg:text-right">
            <p className="font-body text-[15px] leading-[1.75] text-secondary sm:text-[16px]">
              Four bodies of work from the studio — recent series, hand-printed
              editions and pieces drawn from the archive. Each is available to
              view in full, with selected works open to enquiry.
            </p>

            <Link
              to="#"
              className="group mt-6 inline-flex items-center gap-3 font-ui text-[10px] font-medium uppercase tracking-[0.28em] text-near-black"
            >
              <span className="border-b border-near-black/70 pb-1 transition-colors group-hover:border-near-black">
                View Full Collection
              </span>

              <span
                aria-hidden="true"
                className="text-[12px] transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* ── Balanced 2×2 paneled grid ───────────────────────── */}
        <div className="grid border-t border-border-warm sm:grid-cols-2">
          {pieces.map((piece, index) => (
            <Link
              key={piece.id}
              to={piece.to}
              aria-label={`View ${piece.title}`}
              className={[
                'group block px-5 py-8 sm:px-7 sm:py-10 lg:px-[clamp(32px,4vw,64px)] lg:py-[clamp(40px,5vh,56px)]',
                // hairline dividers between panels, echoing the hero
                index % 2 === 0 ? 'sm:border-r sm:border-border-warm' : '',
                index < pieces.length - 1 ? 'border-b border-border-warm' : '',
                index < 2 ? 'sm:border-b sm:border-border-warm' : 'sm:border-b-0',
              ].join(' ')}
            >
              {/* Panel header */}
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-ui text-[9px] font-medium uppercase tracking-[0.3em] text-secondary sm:text-[10px]">
                  {piece.label}
                </p>

                <p className="font-ui text-[9px] tracking-[0.24em] text-secondary/65 sm:text-[10px]">
                  {String(index + 1).padStart(2, '0')} / 04
                </p>
              </div>

              {/* Image */}
              <div className="relative mt-5 aspect-[4/3] overflow-hidden bg-divider">
                <img
                  src={piece.image}
                  alt={piece.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                <div className="pointer-events-none absolute inset-0 bg-near-black/0 transition-colors duration-500 group-hover:bg-near-black/[0.05]" />
              </div>

              {/* Text block */}
              <div className="mt-5 flex flex-col gap-2 sm:mt-6">
                <h3 className="font-display text-[22px] uppercase leading-[1.02] tracking-[0.02em] transition-opacity duration-300 group-hover:opacity-60 sm:text-[24px] lg:text-[27px]">
                  {piece.title}
                </h3>

                <p className="font-body text-[12px] italic leading-[1.5] text-secondary sm:text-[13px]">
                  {piece.caption}
                </p>

                <p className="mt-1 max-w-[420px] font-body text-[13px] leading-[1.7] text-secondary sm:text-[14px]">
                  {piece.description}
                </p>

                <span className="mt-3 inline-flex items-center gap-2 font-ui text-[9px] font-medium uppercase tracking-[0.28em] text-near-black sm:text-[10px]">
                  <span className="border-b border-near-black/0 pb-0.5 transition-colors duration-300 group-hover:border-near-black/70">
                    View Piece
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-[11px] transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}