import { useState, type FormEvent } from 'react'
import { joinList } from '../data/content'
import Reveal from './Reveal'

export default function JoinList() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    // Wire this to your list provider (Mailchimp, Buttondown, etc.)
    setDone(true)
    setEmail('')
  }

  return (
    <section className="px-6 py-gap-xl text-center sm:px-pad-x">
      <Reveal>
        <span className="label mb-[26px] block">{joinList.label}</span>
        <h2 className="font-display text-[clamp(34px,4.5vw,60px)] uppercase leading-[1.05] tracking-[0.04em]">
          {joinList.title}
        </h2>
        <p className="mx-auto mb-11 mt-[26px] max-w-[520px] text-secondary">
          {joinList.body}
        </p>

        {done ? (
          <p className="meta mx-auto max-w-[520px] !text-near-black">
            Thank you — you're on the list.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-[520px] flex-col gap-5 border-near-black sm:flex-row sm:gap-0 sm:border-b"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              aria-label="Email address"
              className="flex-1 border-b border-near-black bg-transparent px-1 py-4 font-ui text-[13px] uppercase tracking-wide text-near-black placeholder:text-secondary focus:outline-none sm:border-b-0"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-3 border border-near-black px-1 py-4 font-ui text-[12px] font-medium uppercase tracking-wide text-near-black transition-[gap] hover:gap-4 sm:border-0 sm:py-0"
            >
              Join{' '}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </button>
          </form>
        )}
      </Reveal>
    </section>
  )
}
