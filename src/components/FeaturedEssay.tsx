// src/components/PressPublications.tsx
// Press Publications — a single dark statement band. Pull quote from press,
// citation, and the row of publications that have written about the work.
// Same skeleton as the previous Studio band, repurposed for press credibility.

const publications = [
  'Frieze',
  'AnOther',
  'Apollo',
  'Wallpaper*',
  'Elephant',
  'ArtReview',
]

export default function PressPublications() {
  return (
    <section
      id="press-publications"
      className="bg-near-black text-warm-white"
    >
      <div className="mx-auto max-w-[1100px] px-5 py-20 text-center sm:px-6 sm:py-24 lg:py-[clamp(112px,14vh,168px)]">
        <p className="font-ui text-[10px] font-medium uppercase tracking-[0.3em] text-warm-white/45 sm:text-[11px]">
          As Featured In
        </p>

        {/* Pull quote */}
        <p className="mx-auto mt-8 max-w-[880px] font-body text-[clamp(20px,2.6vw,34px)] italic leading-[1.5] text-warm-white/90">
          &ldquo;A body of work that treats the image as an act of remembering
          — quiet, deliberate, and slow to give itself away.&rdquo;
        </p>

        {/* Citation */}
        <div className="mx-auto mt-7 flex items-center justify-center gap-3">
          <span aria-hidden="true" className="h-px w-6 bg-warm-white/40" />

          <p className="font-ui text-[10px] font-medium uppercase tracking-[0.24em] text-warm-white/70 sm:text-[11px]">
            Frieze
            <span className="ml-2 font-body text-[11px] normal-case italic tracking-normal text-warm-white/45 sm:text-[12px]">
              · Isabel Reynolds, March 2025
            </span>
          </p>

          <span aria-hidden="true" className="h-px w-6 bg-warm-white/40" />
        </div>

        {/* Publications row */}
        <div className="mx-auto mt-12 flex flex-wrap items-baseline justify-center gap-x-5 gap-y-3 sm:gap-x-8">
          {publications.map((name, index) => (
            <span key={name} className="flex items-baseline gap-5 sm:gap-8">
              <span className="font-display text-[15px] uppercase tracking-[0.05em] text-warm-white/75 sm:text-[17px]">
                {name}
              </span>

              {index < publications.length - 1 && (
                <span
                  aria-hidden="true"
                  className="h-px w-4 self-center bg-warm-white/25"
                />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}