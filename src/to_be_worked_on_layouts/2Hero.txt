// src/components/Hero.tsx
// Version 1 — Fully centered. Eyebrow, title, description and CTA are
// stacked and centered both vertically and horizontally. Indicators and
// meta sit in a bottom band.

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    id: '01',
    eyebrow: 'Featured Work',
    navLabel: 'Featured',
    title: ['The Making', 'of Grief'],
    description:
      'A study of memory, absence and transformation through a new body of work.',
    cta: 'Explore the story',
    to: '/press',
    meta: 'London · 2026',
    image:
      'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=2400&q=92',
  },
  {
    id: '02',
    eyebrow: 'Event',
    title: ['London', 'Solo Show'],
    description:
      'An intimate exhibition presenting new works, archival pieces and unseen studies.',
    cta: 'View event',
    to: '/events',
    meta: '14 September · London',
    image:
      'https://images.unsplash.com/photo-1569783721854-33a99b4c0bae?auto=format&fit=crop&w=2400&q=92',
  },
  {
    id: '03',
    eyebrow: 'Socials',
    title: ['Behind', 'the Work'],
    description:
      'Studio moments, visual references and ongoing work shared beyond the finished collection.',
    cta: 'Follow on socials',
    to: '/socials',
    meta: 'Instagram · Updates',
    image:
      'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=2400&q=92',
  },
  {
    id: '04',
    eyebrow: 'Journal',
    title: ['On Memory', 'and Form'],
    description:
      'A new essay on process, image-making and the stories that remain after the work is complete.',
    cta: 'Read journal',
    to: '/journal',
    meta: 'Essay · July 2026',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2400&q=92',
  },
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 7000)

    return () => window.clearInterval(interval)
  }, [])

  const slide = slides[activeSlide]

  return (
    <section className="relative h-[100svh] min-h-[620px] overflow-hidden bg-near-black">
      {slides.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
            index === activeSlide ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== activeSlide}
        >
          <img
            src={item.image}
            alt=""
            className={`h-full w-full object-cover transition-transform duration-[8000ms] ease-out ${
              index === activeSlide ? 'scale-105' : 'scale-100'
            }`}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        </div>
      ))}

      {/* Center-weighted scrim for centered text */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/40" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1800px] flex-col px-6 pb-8 pt-[112px] sm:px-10 sm:pb-12 lg:px-[clamp(44px,5vw,90px)] lg:pb-[clamp(38px,5vh,68px)]">
        {/* Centered block */}
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-white/70" />

            <span className="font-ui text-[9px] font-medium uppercase tracking-[0.32em] text-white/80 sm:text-[10px]">
              {slide.eyebrow}
            </span>

            <span className="h-px w-10 bg-white/70" />
          </div>

          <h1
            key={slide.id}
            className="mr-[-0.12em] animate-[heroFade_700ms_ease-out] font-display text-[clamp(38px,5.8vw,92px)] uppercase leading-[1.12] tracking-[0.12em] text-white"
          >
            {slide.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-[460px] font-body text-[15px] leading-[1.7] text-white/85 sm:text-[17px]">
            {slide.description}
          </p>

          <Link
            to={slide.to}
            className="group mt-10 inline-flex w-fit items-center gap-4 border border-white/85 bg-transparent px-5 py-[9px] font-ui text-[10px] font-medium uppercase tracking-[0.28em] text-white transition-colors duration-300 hover:bg-warm-white hover:text-near-black sm:px-6 sm:py-[10px]"
          >
            <span>{slide.cta}</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </div>

        {/* Bottom band */}
        <div className="flex flex-col gap-5 border-t border-white/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 sm:gap-x-9">
            {slides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Show hero slide ${index + 1}: ${item.eyebrow}`}
                aria-current={index === activeSlide}
                onClick={() => setActiveSlide(index)}
                className="group flex items-center gap-3"
              >
                <span
                  className={`font-ui text-[8px] font-medium tracking-[0.26em] transition-colors duration-300 ${
                    index === activeSlide
                      ? 'text-white'
                      : 'text-white/45 group-hover:text-white/80'
                  }`}
                >
                  {item.id}
                </span>

                <span
                  className={`h-[3px] w-[3px] rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? 'bg-white'
                      : 'bg-white/40 group-hover:bg-white/70'
                  }`}
                />

                <span
                  className={`font-ui text-[8px] font-medium uppercase tracking-[0.26em] transition-colors duration-300 sm:text-[9px] ${
                    index === activeSlide
                      ? 'text-white'
                      : 'text-white/45 group-hover:text-white/80'
                  }`}
                >
                  {'navLabel' in item ? item.navLabel : item.eyebrow}
                </span>
              </button>
            ))}
          </div>

          <span className="font-ui text-[8px] font-medium uppercase tracking-[0.3em] text-white/65">
            {slide.meta}
          </span>
        </div>
      </div>
    </section>
  )
}