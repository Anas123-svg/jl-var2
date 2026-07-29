import { eventsPage } from '../data/content'
import { ArrowLink } from '../components/Actions'
import Frame from '../components/Frame'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

export default function Events() {
  return (
    <>
      <PageHeader label={eventsPage.label} title={eventsPage.title} intro={eventsPage.intro} />

      <section className="mx-auto max-w-[1440px] px-6 pb-gap-xl sm:px-pad-x">
        <Reveal>
          <Frame
            ratio="aspect-[16/8]"
            tone="stone"
            index="01"
            caption="The Gallery · Shoreditch · London"
            className="mb-12 sm:mb-16"
          />
        </Reveal>

        {eventsPage.events.map((event, index) => (
          <Reveal key={event.id} delay={index * 80}>
            <article className="grid gap-5 border-t border-border-warm py-10 md:grid-cols-[70px_220px_1fr_auto] md:items-start md:gap-8 lg:py-14">
              <span className="font-display text-[28px] text-secondary">0{index + 1}</span>
              <div className="meta pt-1">{event.dates}</div>
              <div>
                <h2 className="font-display text-[clamp(27px,3.2vw,43px)] uppercase leading-[1.05] tracking-[0.025em]">
                  {event.title}
                </h2>
                <p className="caption mt-3">{event.venue}</p>
                <p className="mt-5 max-w-[610px] text-secondary">{event.body}</p>
              </div>
              <ArrowLink to="/events" className="mt-2 whitespace-nowrap">Details &amp; RSVP</ArrowLink>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  )
}
