// src/components/ShopGrid.tsx
// Aligned with FeaturedCollection: bordered container, border-border-warm hairlines,
// text-secondary muted, matching eyebrow/heading tracking, matching section padding scale.

import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const categories = [
  { id: 'all', label: 'All', count: 8, active: true },
  { id: 'prints', label: 'Prints', count: 3 },
  { id: 'wearables', label: 'Wearables', count: 2 },
  { id: 'objects', label: 'Objects', count: 2 },
  { id: 'editions', label: 'Editions', count: 1 },
]

const merch = [
  // Row 1
  {
    id: 'm1',
    title: 'Studio Tee',
    category: 'Wearables',
    meta: 'Cotton · Unisex',
    price: '£38',
    badge: 'New',
    tint: 'bg-[#EFE4D2]',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=90',
  },
  {
    id: 'm2',
    title: 'Canvas Tote',
    category: 'Wearables',
    meta: 'Natural · Screen-printed',
    price: '£28',
    tint: 'bg-[#E4EADB]',
    image:
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=90',
  },
  {
    id: 'm3',
    title: 'The Making of Grief',
    category: 'Prints',
    meta: 'Poster · A2',
    price: '£45',
    badge: 'Limited',
    tint: 'bg-[#DDE5EA]',
    image:
      'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&w=1200&q=90',
  },
  {
    id: 'm4',
    title: 'Studio Notes',
    category: 'Objects',
    meta: 'Hardback · 148 pp',
    price: '£60',
    tint: 'bg-[#EAE0E4]',
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=90',
  },
  // Row 2
  {
    id: 'm5',
    title: 'Untitled No. 7',
    category: 'Editions',
    meta: 'Signed · Edition of 25',
    price: '£220',
    badge: 'Edition',
    tint: 'bg-[#E1DDD1]',
    image:
      'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=90',
  },
  {
    id: 'm6',
    title: 'Body of Light',
    category: 'Prints',
    meta: 'Silver gelatin · A3',
    price: '£95',
    tint: 'bg-[#DBE2E5]',
    image:
      'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=90',
  },
  {
    id: 'm7',
    title: 'Ceramic Vessel',
    category: 'Objects',
    meta: 'Hand-thrown · Small',
    price: '£72',
    tint: 'bg-[#E7DED3]',
    image:
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=90',
  },
  {
    id: 'm8',
    title: 'Quiet Remains',
    category: 'Prints',
    meta: 'Archival print · A2',
    price: '£85',
    badge: 'New',
    tint: 'bg-[#E6DEE0]',
    image:
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=90',
  },
]

// Row 1: arc dips at the edges. Row 2: mirrored arc peaks at the edges.
const fan = [
  'lg:-rotate-[3deg] lg:translate-y-2',
  'lg:-rotate-[1deg] lg:-translate-y-1',
  'lg:rotate-[1deg] lg:-translate-y-1',
  'lg:rotate-[3deg] lg:translate-y-2',
  'lg:rotate-[3deg] lg:translate-y-2',
  'lg:rotate-[1deg] lg:-translate-y-1',
  'lg:-rotate-[1deg] lg:-translate-y-1',
  'lg:-rotate-[3deg] lg:translate-y-2',
]

export default function ShopGrid() {
  return (
    <section
      id="shop"
      className="overflow-hidden border-t border-border-warm text-near-black"
      style={{ background: '#FAF8F5' }}
    >
      <div className="mx-auto max-w-[1600px] border-x border-border-warm">
        <div className="px-5 pt-20 pb-20 sm:px-7 sm:pt-24 sm:pb-24 lg:px-[clamp(32px,4vw,80px)] lg:pt-[clamp(96px,12vh,144px)] lg:pb-[clamp(96px,12vh,144px)]">
          {/* ── Section header — mirrors FeaturedCollection ───── */}
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-[clamp(48px,6vw,120px)]">
              <div>
                <p className="font-ui text-[10px] font-medium uppercase tracking-[0.3em] text-secondary sm:text-[11px]">
                  The Shop
                </p>

                <h2 className="mt-4 font-display text-[clamp(32px,3.4vw,54px)] uppercase leading-[0.96] tracking-[0.02em] text-near-black">
                  Objects
                  <span className="block">&amp; Editions</span>
                </h2>
              </div>

              <div className="max-w-[460px] lg:justify-self-end lg:text-right">
                <p className="font-body text-[15px] leading-[1.75] text-secondary sm:text-[16px]">
                  Prints, wearables and small objects from the studio. Editions
                  are hand-numbered; select pieces are open to enquiry.
                </p>

                <Link
                  to="#"
                  className="group mt-6 inline-flex items-center gap-3 font-ui text-[10px] font-medium uppercase tracking-[0.28em] text-near-black"
                >
                  <span className="border-b border-near-black/70 pb-1 group-hover:border-near-black">
                    View Full Collection
                  </span>
                  <span aria-hidden="true" className="text-[12px]">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>

          {/* ── Category + sort bar ─────────────────────────── */}
          <Reveal delay={80}>
            <div className="mt-10 flex flex-col gap-3 border-y border-border-warm py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:mt-12">
              {/* Category chips */}
              <nav
                aria-label="Shop categories"
                className="-mx-1 flex flex-wrap items-center gap-x-1 gap-y-2 overflow-x-auto sm:mx-0"
              >
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={[
                      'inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 font-ui text-[9px] font-medium uppercase tracking-[0.28em] sm:text-[10px]',
                      cat.active
                        ? 'bg-near-black text-[#FAF8F5]'
                        : 'text-secondary hover:bg-near-black/[0.05] hover:text-near-black',
                    ].join(' ')}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={[
                        'font-ui text-[9px] tracking-[0.16em]',
                        cat.active ? 'text-[#FAF8F5]/60' : 'text-secondary/60',
                      ].join(' ')}
                    >
                      {String(cat.count).padStart(2, '0')}
                    </span>
                  </button>
                ))}
              </nav>

              {/* Sort / count */}
              <div className="flex items-center gap-4 whitespace-nowrap">
                <p className="font-ui text-[9px] font-medium uppercase tracking-[0.28em] text-secondary sm:text-[10px]">
                  08 Pieces
                </p>
                <span className="h-3 w-px bg-border-warm" aria-hidden="true" />
                <button
                  type="button"
                  className="group inline-flex items-center gap-1.5 font-ui text-[9px] font-medium uppercase tracking-[0.28em] text-secondary hover:text-near-black sm:text-[10px]"
                >
                  <span>Sort · Newest</span>
                  <span
                    aria-hidden="true"
                    className="text-[11px] text-secondary/70"
                  >
                    ↓
                  </span>
                </button>
              </div>
            </div>
          </Reveal>

          {/* ── Row 1 ───────────────────────────────────────── */}
          <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-6 lg:mt-12 lg:grid-cols-4 lg:gap-[clamp(14px,1.6vw,22px)]">
            {merch.slice(0, 4).map((item, i) => (
              <Reveal key={item.id} delay={i * 80}>
                <ShopCard item={item} rotationClass={fan[i]} />
              </Reveal>
            ))}
          </div>

          {/* ── Row separator ───────────────────────────────── */}
          <Reveal delay={320}>
            <div className="mt-12 flex items-center gap-4 lg:mt-16">
              <span className="h-px flex-1 bg-border-warm" aria-hidden="true" />
              <p className="font-ui text-[9px] font-medium uppercase tracking-[0.3em] text-secondary sm:text-[10px]">
                Editions &amp; Objects
              </p>
              <span className="h-px flex-1 bg-border-warm" aria-hidden="true" />
            </div>
          </Reveal>

          {/* ── Row 2 ───────────────────────────────────────── */}
          <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-6 lg:mt-12 lg:grid-cols-4 lg:gap-[clamp(14px,1.6vw,22px)]">
            {merch.slice(4, 8).map((item, i) => (
              <Reveal key={item.id} delay={i * 80}>
                <ShopCard item={item} rotationClass={fan[i + 4]} />
              </Reveal>
            ))}
          </div>

          {/* ── Footer: reviews + CTA ───────────────────────── */}
          <Reveal delay={480}>
            <div className="mt-12 flex flex-col gap-4 border-t border-border-warm pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:mt-16">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <div className="flex items-center gap-2">
                  <p className="font-ui text-[12px] font-semibold tracking-[0.02em] text-near-black">
                    4.9
                  </p>
                  <div
                    className="flex items-center gap-0.5 text-[11px] text-[#D9A441]"
                    aria-label="Rated 4.9 out of 5"
                  >
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="opacity-40">★</span>
                  </div>
                  <span className="font-ui text-[9px] uppercase tracking-[0.28em] text-secondary sm:text-[10px]">
                    · 214 reviews
                  </span>
                </div>
                <span
                  className="hidden h-3 w-px bg-border-warm sm:inline-block"
                  aria-hidden="true"
                />
                <p className="font-ui text-[9px] uppercase tracking-[0.28em] text-secondary sm:text-[10px]">
                  Free UK shipping over £75
                </p>
              </div>

              <Link
                to="#"
                className="group inline-flex min-h-[36px] items-center justify-center gap-3 self-start border border-near-black px-5 py-2 font-ui text-[9px] font-medium uppercase tracking-[0.28em] text-near-black hover:bg-near-black hover:text-[#FAF8F5] sm:self-auto sm:text-[10px]"
              >
                <span>Shop All</span>
                <span aria-hidden="true" className="text-[12px]">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ── Card ────────────────────────────────────────────────── */

type Item = {
  id: string
  title: string
  category: string
  meta: string
  price: string
  badge?: string
  tint: string
  image: string
}

function ShopCard({ item, rotationClass }: { item: Item; rotationClass: string }) {
  return (
    <Link
      to="#"
      className={`group relative block rounded-[14px] p-2.5 shadow-[0_12px_30px_-14px_rgba(45,35,20,0.22)] will-change-transform hover:z-10 hover:-translate-y-1.5 hover:rotate-0 hover:shadow-[0_18px_44px_-16px_rgba(45,35,20,0.30)] ${item.tint} ${rotationClass}`}
    >
      {/* Badge */}
      {item.badge && (
        <span className="absolute left-3.5 top-3.5 z-10 inline-flex items-center rounded-full bg-near-black px-2 py-0.5 font-ui text-[8.5px] font-medium uppercase tracking-[0.24em] text-[#FAF8F5]">
          {item.badge}
        </span>
      )}

      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[10px] bg-[#FAF8F5]">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.05]"
        />
      </div>

      {/* Caption */}
      <div className="mt-3 flex items-baseline justify-between gap-3 px-0.5 pb-0.5">
        <div className="min-w-0">
          <p className="font-ui text-[9px] font-medium uppercase tracking-[0.3em] text-secondary sm:text-[10px]">
            {item.category}
          </p>
          <p className="mt-1.5 truncate font-body text-[13px] italic leading-tight text-near-black sm:text-[14px]">
            {item.title}
          </p>
          <p className="mt-1 font-body text-[11px] leading-[1.45] text-secondary sm:text-[12px]">
            {item.meta}
          </p>
        </div>

        <span className="shrink-0 font-ui text-[12px] font-medium text-near-black">
          {item.price}
        </span>
      </div>
    </Link>
  )
}