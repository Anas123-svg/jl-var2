// src/components/Newsletter.tsx
// Join Our List — two-column band matched to the footer's newsletter aesthetic.
// Extra bottom padding leaves room for the footer arch to rise into this section.

import { useState, type FormEvent } from 'react'
import { joinList } from '../data/content'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    setStatus('sent')
  }

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden border-t border-border-warm bg-divider text-near-black"
    >
      {/* Very quiet corner marks */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute left-8 top-12 hidden h-px w-16 bg-near-black/10 sm:block" />
        <span className="absolute right-8 top-12 hidden h-px w-16 bg-near-black/10 sm:block" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 pt-20 pb-[clamp(160px,20vh,240px)] sm:px-8 sm:pt-24 lg:px-[clamp(32px,4vw,64px)] lg:pt-[clamp(96px,12vh,144px)]">
        <div className="grid gap-10 lg:grid-cols-[minmax(320px,1fr)_minmax(0,1fr)] lg:items-center lg:gap-[clamp(64px,7vw,140px)]">
          {/* Left — eyebrow + heading */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-near-black/40" />
              <p className="font-ui text-[10px] font-medium uppercase tracking-[0.28em] text-near-black/55">
                {joinList.label}
              </p>
            </div>

            <h2 className="mt-5 font-display text-[clamp(30px,3.4vw,54px)] uppercase leading-[0.96] tracking-[0.035em] text-near-black">
              {joinList.title}
              <span className="italic normal-case tracking-normal text-near-black/55">
                {' '}— occasionally.
              </span>
            </h2>
          </div>

          {/* Right — body + form + trust row */}
          <div className="lg:pl-2">
            <p className="max-w-[460px] font-body text-[14px] leading-[1.7] text-secondary sm:text-[15px]">
              {joinList.body}
            </p>

            {status === 'sent' ? (
              <div className="mt-7 max-w-[500px]">
                <div className="flex items-center gap-3 rounded-full border border-emerald-700/30 bg-emerald-50/60 px-5 py-3">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-700 text-[11px] text-white"
                  >
                    ✓
                  </span>
                  <p className="font-body text-[14px] italic text-near-black sm:text-[15px]">
                    Thank you — you&apos;re on the list.
                  </p>
                </div>
                <p className="mt-3 px-1 font-ui text-[9px] font-medium uppercase tracking-[0.22em] text-near-black/55 sm:text-[10px]">
                  A note lands in your inbox each month.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-7 flex w-full max-w-[500px] items-center gap-1 rounded-full border border-near-black/25 bg-warm-white/70 p-1.5 backdrop-blur-sm focus-within:border-near-black/60"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  className="min-w-0 flex-1 bg-transparent px-4 py-2 font-body text-[14px] text-near-black placeholder:text-near-black/35 focus:outline-none sm:text-[15px]"
                />

                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-near-black px-4 py-2 font-ui text-[9px] font-medium uppercase tracking-[0.22em] text-[#FAF8F5] hover:bg-near-black/85 sm:px-5 sm:text-[10px]"
                >
                  <span>Subscribe</span>
                  <span aria-hidden="true" className="text-[12px] tracking-normal">
                    →
                  </span>
                </button>
              </form>
            )}

            {/* Trust row */}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 px-1">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-600"
                />
                <p className="font-ui text-[9px] font-medium uppercase tracking-[0.22em] text-near-black/55 sm:text-[10px]">
                  2,400+ readers
                </p>
              </div>

              <span
                aria-hidden="true"
                className="hidden h-3 w-px bg-near-black/20 sm:block"
              />

              <p className="font-body text-[12px] italic text-secondary sm:text-[13px]">
                Monthly · unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}