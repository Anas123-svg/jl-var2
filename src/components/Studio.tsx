// src/components/Studio.tsx
// The Studio — a single dark statement band. One sentence, four words.
// The page's only dark moment; a quiet chapter break between halves.

import { brand } from '../data/content'

export default function Studio() {
  return (
    <section id="studio" className="bg-near-black text-warm-white">
      <div className="mx-auto max-w-[1100px] px-5 py-20 text-center sm:px-6 sm:py-24 lg:py-[clamp(112px,14vh,168px)]">
        <p className="font-ui text-[10px] font-medium uppercase tracking-[0.3em] text-warm-white/45 sm:text-[11px]">
          The Studio
        </p>

        <p className="mx-auto mt-8 max-w-[880px] font-body text-[clamp(20px,2.6vw,34px)] italic leading-[1.5] text-warm-white/90">
          &ldquo;{brand.statement}&rdquo;
        </p>

        {/* Keywords row */}
        <div className="mx-auto mt-10 flex flex-wrap items-baseline justify-center gap-x-5 gap-y-3 sm:gap-x-8">
          {brand.keywords.map((word, index) => (
            <span key={word} className="flex items-baseline gap-5 sm:gap-8">
              <span className="font-ui text-[9px] font-medium uppercase tracking-[0.28em] text-warm-white/55 sm:text-[10px]">
                {word}
              </span>

              {index < brand.keywords.length - 1 && (
                <span aria-hidden="true" className="h-px w-4 self-center bg-warm-white/25" />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
