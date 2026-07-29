import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&fm=jpg&w=2400&q=90'

const slides = [
  {
    id: '01',
    eyebrow: 'Featured Work',
    navLabel: 'Featured',
    detail: 'The making of grief',
    title: ['The Making', 'of Grief'],
    description:
      'A study of memory, absence and transformation through a new body of work.',
    cta: 'Explore the story',
    to: '/press',
    image:
      'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=2400&q=92',
  },
  {
    id: '02',
    eyebrow: 'Event',
    navLabel: 'Events',
    detail: 'London solo show',
    title: ['London', 'Solo Show'],
    description:
      'An intimate exhibition presenting new works, archival pieces and unseen studies.',
    cta: 'View event',
    to: '/events',
    image:
      'https://images.unsplash.com/photo-1569783721854-33a99b4c0bae?auto=format&fit=crop&w=2400&q=92',
  },
  {
    id: '03',
    eyebrow: 'Socials',
    navLabel: 'Socials',
    detail: 'Behind the work',
    title: ['Behind', 'the Work'],
    description:
      'Studio moments, visual references and ongoing work shared beyond the finished collection.',
    cta: 'Follow on socials',
    to: '/socials',
    image:
      'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&fm=jpg&w=2400&q=92',
  },
  {
    id: '04',
    eyebrow: 'Journal',
    navLabel: 'Journal',
    detail: 'On memory and form',
    title: ['On Memory', 'and Form'],
    description:
      'A new essay on process, image-making and the stories that remain after the work is complete.',
    cta: 'Read journal',
    to: '/journal',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&fm=jpg&w=2400&q=92',
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
    <section className="relative h-[100svh] min-h-[620px] overflow-hidden bg-near-black lg:h-[100dvh] lg:min-h-0">
      {slides.map((item, index) => (
        <div
          key={item.id}
          aria-hidden={index !== activeSlide}
          className={`absolute inset-0 bg-near-black transition-opacity duration-[1200ms] ease-out ${
            index === activeSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={item.image}
            alt=""
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            decoding="async"
            onError={(event) => {
              const image = event.currentTarget

              if (image.dataset.fallbackApplied !== 'true') {
                image.dataset.fallbackApplied = 'true'
                image.src = FALLBACK_IMAGE
              } else {
                image.style.display = 'none'
              }
            }}
            className={`h-full w-full object-cover transition-transform duration-[8000ms] ease-out ${
              index === activeSlide ? 'scale-[1.045]' : 'scale-100'
            }`}
          />
        </div>
      ))}

      {/* Dark overlays keep all text readable on bright and dark images */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1800px] flex-col px-5 pb-3 pt-[72px] sm:px-8 sm:pb-4 lg:px-[clamp(36px,4.5vw,78px)] lg:pb-[clamp(12px,2vh,22px)]">
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-2 py-4 text-center lg:py-[clamp(10px,2vh,24px)]">
          <div className="mb-[clamp(14px,2.2vh,22px)] flex items-center gap-4">
            <span className="h-px w-8 bg-white/60 sm:w-10" />

            <span className="font-ui text-[8px] font-medium uppercase tracking-[0.36em] text-white/85 sm:text-[9px]">
              {slide.eyebrow}
            </span>

            <span className="h-px w-8 bg-white/60 sm:w-10" />
          </div>

          <h1
            key={slide.id}
            className="mr-[-0.11em] animate-[heroFade_700ms_ease-out] font-display text-[clamp(44px,6vw,90px)] font-normal uppercase leading-[0.92] tracking-[0.11em] text-white"
          >
            {slide.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p
            className="mt-[clamp(17px,2.8vh,27px)] max-w-[440px] font-body text-[13px] font-normal leading-[1.7] sm:text-[14px] lg:text-[15px]"
            style={{
              color: 'rgba(255, 255, 255, 0.84)',
              textShadow: '0 2px 18px rgba(0, 0, 0, 0.45)',
            }}
          >
            {slide.description}
          </p>

          <Link
            to={slide.to}
            className="group mt-[clamp(18px,3vh,29px)] inline-flex min-w-[180px] items-center justify-between border border-white/75 px-5 py-[9px] font-ui text-[9px] font-medium uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-warm-white hover:text-near-black sm:min-w-[190px] sm:text-[10px]"
          >
            <span>{slide.cta}</span>

            <span
              aria-hidden="true"
              className="ml-4 text-[14px] transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        <div className="shrink-0 border-t border-white/25">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {slides.map((item, index) => {
              const isActive = index === activeSlide

              return (
                <Link
                  key={item.id}
                  to={item.to}
                  onMouseEnter={() => setActiveSlide(index)}
                  onFocus={() => setActiveSlide(index)}
                  className={`group flex min-h-[68px] items-center justify-between px-3 py-3 transition-colors duration-300 sm:min-h-[76px] sm:px-4 ${
                    index % 2 === 0
                      ? 'border-r border-white/20'
                      : ''
                  } ${
                    index < 2
                      ? 'border-b border-white/20 sm:border-b-0'
                      : ''
                  } ${
                    index !== slides.length - 1
                      ? 'sm:border-r sm:border-white/20'
                      : 'sm:border-r-0'
                  }`}
                >
                  <div className="min-w-0">
                    <span
                      className={`block font-ui text-[8px] font-medium uppercase tracking-[0.28em] transition-colors duration-300 sm:text-[9px] ${
                        isActive
                          ? 'text-white/90'
                          : 'text-white/55 group-hover:text-white/80'
                      }`}
                    >
                      {item.navLabel}
                    </span>

                    <span
                      className={`mt-1.5 block truncate font-body text-[11px] leading-none transition-colors duration-300 sm:text-[13px] ${
                        isActive
                          ? '!text-white'
                          : '!text-white/70 group-hover:!text-white'
                      }`}
                    >
                      {item.detail}
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    className={`ml-3 text-[14px] transition-all duration-300 group-hover:translate-x-1 ${
                      isActive
                        ? 'text-white opacity-100'
                        : 'text-white/55'
                    }`}
                  >
                    →
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}