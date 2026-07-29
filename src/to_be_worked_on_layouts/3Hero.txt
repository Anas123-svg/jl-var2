import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-cover bg-center lg:h-[100dvh] lg:min-h-[540px]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=2400&q=92')",
        backgroundPosition: 'center 46%',
      }}
    >
      {/* Background treatment */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/5 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />

      {/* Subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_180_180%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%22.85%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22_opacity=%22.45%22/%3E%3C/svg%3E')]" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1560px] flex-col px-5 pb-4 pt-[72px] text-white sm:px-8 sm:pb-5 lg:px-[clamp(32px,4.5vw,72px)]">

        {/* Main hero area */}
        <div className="flex min-h-0 flex-1 items-center">
          <div className="grid w-full grid-cols-1 items-center gap-[clamp(30px,4vw,70px)] xl:grid-cols-[190px_minmax(0,1fr)_190px] 2xl:grid-cols-[215px_minmax(0,1fr)_215px]">
            <EditorialCard
              label="Exhibition"
              title="London Solo Show"
              to="/events"
              image="https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=900&q=88"
            />

            {/* Centered editorial statement */}
            <div className="mx-auto flex w-full max-w-[820px] flex-col items-center text-center">
              <div className="mb-[clamp(14px,2.3vh,24px)] flex items-center justify-center gap-4">
                <span className="h-px w-7 bg-white/55 sm:w-11" />

                <p className="font-ui text-[8px] font-medium uppercase tracking-[0.42em] text-white/80 sm:text-[9px]">
                  New Collection
                </p>

                <span className="h-px w-7 bg-white/55 sm:w-11" />
              </div>

              <h1 className="pl-[0.1em] font-display text-[clamp(50px,7vw,104px)] font-normal uppercase leading-[0.84] tracking-[0.1em] text-white">
                A Study
                <span className="mt-[0.12em] block text-white/92">
                  In Feeling
                </span>
              </h1>

              <p className="mt-[clamp(17px,2.8vh,28px)] max-w-[390px] font-body text-[12px] leading-[1.75] text-white/75 sm:text-[13px]">
                New work exploring image, memory and the quiet space
                between them.
              </p>

<Link
  to="/shop"
  className="group mt-[clamp(18px,3vh,30px)] inline-flex min-w-[175px] items-center justify-between border border-white/60 px-5 py-[11px] font-ui text-[9px] font-medium uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-white hover:text-[#171717] sm:min-w-[185px] sm:text-[10px]"
>
  View Collection

  <span
    aria-hidden="true"
    className="ml-4 text-[14px] transition-transform duration-300 group-hover:translate-x-1"
  >
    →
  </span>
</Link>            </div>

<EditorialCard
  label="Journal"
  title="Behind the Work"
  to="/socials"
  image="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=90"
/>
          </div>
        </div>

        {/* Bottom information row */}
        <div className="flex min-h-[52px] shrink-0 items-center justify-between border-t border-white/20">
          <p className="hidden max-w-[310px] font-body text-[11px] leading-relaxed text-white/65 sm:block">
            Rooted in story, rich in detail and made to last.
          </p>

          <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end sm:gap-[clamp(18px,2.5vw,38px)]">
            {[
              ['Shop', '/shop'],
              ['Socials', '/socials'],
              ['Events', '/events'],
              ['Press', '/press'],
            ].map(([label, to]) => (
              <Link
                key={label}
                to={to}
                className="font-ui text-[7px] font-medium uppercase tracking-[0.28em] text-white/70 transition-opacity hover:opacity-45 sm:text-[8px]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EditorialCard({
  label,
  title,
  to,
  image,
}: {
  label: string
  title: string
  to: string
  image: string
}) {
  return (
    <Link
      to={to}
      className="group hidden w-full bg-[#F7F4EF] text-[#171717] shadow-[0_28px_75px_-30px_rgba(0,0,0,0.75)] transition-transform duration-500 hover:-translate-y-1 xl:block"
    >
<div className="aspect-[4/3] overflow-hidden bg-[#E9E4DD]">
  <img
    src={image}
    alt={title}
    loading="eager"
    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
    onError={(event) => {
      const imageElement = event.currentTarget

      imageElement.onerror = null
      imageElement.src =
        'https://images.unsplash.com/photo-1577083552431-6e5fd01988a5?auto=format&fit=crop&w=1200&q=90'
    }}
  />
</div>
      <div className="p-[15px] 2xl:p-[17px]">
        <span className="font-ui text-[7px] font-medium uppercase tracking-[0.31em] text-[#6D6964]">
          {label}
        </span>

        <h3 className="mt-2 pl-[0.05em] font-display text-[18px] font-normal uppercase leading-[1.05] tracking-[0.05em] 2xl:text-[20px]">
          {title}
        </h3>

        <div className="mt-4 flex items-center justify-between border-t border-[#DAD5CE] pt-3">
          <span className="font-ui text-[7px] font-medium uppercase tracking-[0.27em] text-[#6D6964]">
            View Details
          </span>

          <span className="text-[13px] transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  )
}