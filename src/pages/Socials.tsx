import { OutlinedButton } from '../components/Actions'
import Frame from '../components/Frame'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

const channels = [
  { name: 'Instagram', handle: '@jacoblorek', href: '#' },
  { name: 'Newsletter', handle: 'Join the list', href: '#newsletter' },
  { name: 'Contact', handle: 'studio@jacoblorek.com', href: 'mailto:studio@jacoblorek.com' },
]

export default function Socials() {
  return (
    <>
      <PageHeader
        label="Socials"
        title={['Follow', 'the Work']}
        intro="Studio notes, new work, and exhibition news as it happens. A quieter view of the process behind each collection."
      />

      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 pb-gap-xl sm:px-pad-x lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal>
          <Frame ratio="aspect-[4/5]" tone="mist" index="01" caption="Studio Notes · London" />
        </Reveal>

        <div>
          {channels.map((channel, index) => (
            <Reveal key={channel.name} delay={index * 80}>
              <a
                href={channel.href}
                className="group flex items-center justify-between gap-8 border-t border-border-warm py-9 transition-colors hover:text-secondary"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-display text-[18px] text-secondary">0{index + 1}</span>
                  <span className="font-display text-[clamp(27px,4vw,48px)] uppercase tracking-[0.025em]">
                    {channel.name}
                  </span>
                </div>
                <span className="meta hidden sm:block">{channel.handle}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </Reveal>
          ))}

          <Reveal delay={280}>
            <div className="mt-14">
              <OutlinedButton to="/press">Read the Journal</OutlinedButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
