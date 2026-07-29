// src/components/Hero.tsx

import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="bg-[#FAF8F5] lg:h-[calc(100dvh-80px)] lg:min-h-[560px] lg:overflow-hidden">
      <div className="mx-auto grid h-full max-w-[1600px] border-x border-[#E7E2DC] lg:grid-cols-[1fr_minmax(360px,0.8fr)_1fr]">
        {/* Left image panel */}
        <Link
          to="/shop"
          className="group relative min-h-[420px] overflow-hidden border-b border-[#E7E2DC] lg:min-h-0 lg:border-b-0 lg:border-r"
        >
          <img
            src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1600&q=90"
            alt="Contemporary artwork"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
            loading="eager"
            fetchPriority="high"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/10 transition-opacity duration-500 group-hover:opacity-80" />

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7 text-white lg:p-8">
            <div>
              <p className="font-ui text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">
                Featured
              </p>

              <h2 className="mt-3 font-display text-[clamp(28px,2.9vw,44px)] uppercase leading-[1] tracking-[0.04em]">
                New
                <br />
                Collection
              </h2>
            </div>

            <span className="mb-1 font-ui text-[13px] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </Link>

        {/* Central editorial panel */}
        <div className="order-first flex flex-col justify-between bg-[#FAF8F5] px-8 py-10 sm:px-12 lg:order-none lg:px-[clamp(32px,3vw,52px)] lg:py-[clamp(28px,4vh,44px)]">
          <div className="my-auto py-8 text-center lg:py-4">
            <p className="mb-5 font-ui text-[10px] font-medium uppercase tracking-[0.3em] text-[#999590]">
              Latest Story
            </p>

            <h1 className="font-display text-[clamp(40px,4.2vw,68px)] uppercase leading-[0.98] tracking-[0.03em] text-[#1A1A1A]">
              The Making
              <span className="block">of Grief</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[380px] font-body text-[16px] leading-[1.75] text-[#666666]">
              An exploration of shadow, memory and transformation through a
              new body of work.
            </p>

            <Link
              to="/press"
              className="group mt-8 inline-flex items-center gap-4 border-b border-[#1A1A1A]/70 pb-2 font-ui text-[10px] font-medium uppercase tracking-[0.28em] text-[#1A1A1A] transition-colors hover:border-[#1A1A1A]"
            >
              <span>Read Article</span>

              <span className="text-[12px] transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-3 border-t border-[#E7E2DC] pt-5">
            <Link to="/shop" className="group border-r border-[#E7E2DC] pr-4">
              <span className="font-ui text-[9px] font-medium uppercase tracking-[0.28em] text-[#999590]">
                Shop
              </span>

              <span className="mt-1.5 block font-body text-[14px] text-[#1A1A1A] transition-opacity group-hover:opacity-55">
                Prints
              </span>
            </Link>

            <Link to="/events" className="group border-r border-[#E7E2DC] px-4">
              <span className="font-ui text-[9px] font-medium uppercase tracking-[0.28em] text-[#999590]">
                Events
              </span>

              <span className="mt-1.5 block font-body text-[14px] text-[#1A1A1A] transition-opacity group-hover:opacity-55">
                London
              </span>
            </Link>

            <Link to="/socials" className="group pl-4">
              <span className="font-ui text-[9px] font-medium uppercase tracking-[0.28em] text-[#999590]">
                Socials
              </span>

              <span className="mt-1.5 block font-body text-[14px] text-[#1A1A1A] transition-opacity group-hover:opacity-55">
                Follow
              </span>
            </Link>
          </div>
        </div>

        {/* Right image panel */}
        <Link
          to="/events"
          className="group relative min-h-[420px] overflow-hidden border-t border-[#E7E2DC] lg:min-h-0 lg:border-l lg:border-t-0"
        >
          <img
            src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1600&q=90"
            alt="Gallery exhibition"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
            loading="eager"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/20 transition-opacity duration-500 group-hover:opacity-80" />

          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-7 text-white lg:p-8">
            <span className="font-ui text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">
              Exhibition
            </span>

            <span className="font-ui text-[10px] font-medium uppercase tracking-[0.25em] text-white/70">
              2026
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7 text-white lg:p-8">
            <div>
              <h2 className="font-display text-[clamp(28px,2.9vw,44px)] uppercase leading-[1] tracking-[0.04em]">
                London
                <br />
                Solo Show
              </h2>

              <p className="mt-3 font-body text-[14px] italic text-white/70">
                October 10 — November 2
              </p>
            </div>

            <span className="mb-1 font-ui text-[13px] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}