// src/components/Newsletter.tsx
// Join Our List — centred column with ornamental divider and trust row.
// Extra bottom padding leaves room for the footer arch to rise into this section.

import { useState, type FormEvent } from 'react'
import { joinList } from '../data/content'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
  }

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden border-t border-border-warm bg-divider text-near-black"
    >
      {/* Subtle decorative marks in the corners — very quiet */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute left-8 top-10 hidden h-px w-16 bg-near-black/10 sm:block" />
        <span className="absolute right-8 top-10 hidden h-px w-16 bg-near-black/10 sm:block" />
      </div>

      <div className="relative mx-auto max-w-[600px] px-5 pt-16 pb-[clamp(140px,18vh,220px)] text-center sm:px-6 sm:pt-20 lg:pt-[clamp(88px,11vh,136px)]">
        {/* Eyebrow */}
        <p className="font-ui text-[10px] font-medium uppercase tracking-[0.3em] text-secondary sm:text-[11px]">
          {joinList.label}
        </p>

        {/* Ornamental divider */}
        <div
          aria-hidden="true"
          className="mx-auto mt-6 flex items-center justify-center gap-2.5"
        >
          <span className="h-px w-10 bg-near-black/25" />
          <span className="h-[5px] w-[5px] rotate-45 bg-near-black/40" />
          <span className="h-px w-10 bg-near-black/25" />
        </div>

        {/* Heading */}
        <h2 className="mt-6 font-display text-[clamp(30px,3.4vw,50px)] uppercase leading-[0.96] tracking-[0.02em]">
          {joinList.title}
        </h2>

        {/* Body */}
        <p className="mx-auto mt-5 max-w-[460px] font-body text-[14px] leading-[1.75] text-secondary sm:text-[15px]">
          {joinList.body}
        </p>

        {/* Form / thank-you */}
        {sent ? (
          <div className="mx-auto mt-10 max-w-[440px]">
            <p className="font-body text-[14px] italic text-near-black sm:text-[15px]">
              Thank you — you&apos;re on the list.
            </p>
            <p className="mt-2 font-ui text-[9px] uppercase tracking-[0.28em] text-secondary sm:text-[10px]">
              A note lands in your inbox each month.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-[460px] items-center gap-4 border-b border-near-black/40 pb-3 transition-colors focus-within:border-near-black"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              aria-label="Email address"
              className="min-w-0 flex-1 bg-transparent py-1.5 text-left font-body text-[15px] text-near-black placeholder:text-near-black/35 focus:outline-none"
            />

            <button
              type="submit"
              className="group inline-flex shrink-0 items-center gap-2 font-ui text-[10px] font-medium uppercase tracking-[0.28em] text-near-black sm:text-[11px]"
            >
              <span>Subscribe</span>
              <span
                aria-hidden="true"
                className="text-[12px] transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </button>
          </form>
        )}

        {/* Trust row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-ui text-[9px] uppercase tracking-[0.28em] text-secondary sm:text-[10px]">
          <span>2,400+ Readers</span>
          <span className="h-2 w-px bg-near-black/20" aria-hidden="true" />
          <span>Monthly</span>
          <span className="h-2 w-px bg-near-black/20" aria-hidden="true" />
          <span>Unsubscribe Anytime</span>
        </div>
      </div>
    </section>
  )
}