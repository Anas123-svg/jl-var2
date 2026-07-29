import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="bg-[#FAF8F5] lg:h-[calc(100dvh-92px)] lg:min-h-[600px]">
      <div className="mx-auto flex h-full max-w-[1800px] flex-col p-5 sm:p-6 lg:p-[clamp(20px,2vw,32px)]">
        <div className="grid flex-1 gap-5 sm:gap-6 lg:grid-cols-[29%_1fr_29%] lg:gap-[clamp(20px,2vw,32px)]">
          {/* Center: Featured Essay (first on mobile) */}
          <Link
            to="/press"
            className="group order-first relative min-h-[540px] overflow-hidden lg:order-none lg:col-start-2 lg:row-start-1"
          >
            <img
              src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=2000&q=90"
              alt="Featured essay artwork"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03]"
              loading="eager"
              fetchPriority="high"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />

            <div className="absolute inset-x-0 top-0 flex items-center justify-center p-6 sm:p-7">
              <span className="font-ui text-[10px] font-medium uppercase tracking-[0.4em] text-white/75">
                Featured Essay
              </span>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
              <h1 className="font-display text-[clamp(44px,4.8vw,80px)] uppercase leading-[0.94] tracking-[0.02em]">
                On Beauty
                <span className="block">and Pain</span>
              </h1>

              <p className="mt-6 max-w-[380px] font-body text-[15px] leading-[1.75] text-white/85">
                Reflections on the body as memory, image and living archive.
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-6 sm:p-7">
              <span className="inline-flex items-center gap-5 border-b border-white/60 pb-2 font-ui text-[10px] font-medium uppercase tracking-[0.3em] text-white transition-colors duration-300 group-hover:border-white">
                Read Essay
                <span className="text-[12px] transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </span>
            </div>
          </Link>

          {/* Left: Collection — full-height card */}
          <div className="lg:col-start-1 lg:row-start-1">
            <ImageCard
              index="01"
              label="Collection"
              title="New Collection"
              detail="Limited edition archival prints"
              to="/shop"
              image="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1600&q=90"
              tall
            />
          </div>

          {/* Right: Exhibition + Socials stacked */}
          <div className="grid gap-5 sm:gap-6 lg:col-start-3 lg:row-start-1 lg:grid-rows-2 lg:gap-[clamp(20px,2vw,32px)]">
            <ImageCard
              index="02"
              label="Exhibition"
              title="London Solo Show"
              detail="October 10 — November 2"
              to="/events"
              image="https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1400&q=90"
            />

            <ImageCard
              index="03"
              label="Socials"
              title="Behind the Work"
              detail="Studio journal"
              to="/socials"
              image="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1400&q=90"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ImageCard({
  index,
  label,
  title,
  detail,
  to,
  image,
  tall = false,
}: {
  index: string
  label: string
  title: string
  detail: string
  to: string
  image: string
  tall?: boolean
}) {
  return (
    <Link
      to={to}
      className={`group relative block h-full overflow-hidden ${
        tall ? 'min-h-[440px]' : 'min-h-[380px]'
      } lg:min-h-0`}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
        loading="eager"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 text-white sm:p-7">
        <span className="font-ui text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">
          {label}
        </span>

        <span className="font-ui text-[10px] tracking-[0.3em] text-white/55">
          {index}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white sm:p-7">
        <div>
          <h2
            className={`font-display uppercase leading-[0.98] tracking-[0.02em] ${
              tall
                ? 'text-[clamp(28px,2.7vw,42px)]'
                : 'text-[clamp(24px,2.2vw,34px)]'
            }`}
          >
            {title}
          </h2>

          <p className="mt-2.5 font-body text-[13px] italic text-white/70">
            {detail}
          </p>
        </div>

        <span className="mb-1 text-[13px] transition-transform duration-300 group-hover:translate-x-1.5">
          →
        </span>
      </div>
    </Link>
  )
}