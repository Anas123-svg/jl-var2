import Reveal from './Reveal'

type Props = { label: string; title: string[]; intro: string }

export default function PageHeader({ label, title, intro }: Props) {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-16 sm:px-pad-x sm:pb-24 sm:pt-24">
      <Reveal>
        <div className="grid gap-8 border-b border-border-warm pb-12 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:pb-16">
          <div>
            <span className="label mb-7 block">{label}</span>
            <h1 className="font-display text-[clamp(52px,8vw,112px)] uppercase leading-[0.9] tracking-[0.015em]">
              {title.map((line, i) => <span key={i} className="block">{line}</span>)}
            </h1>
          </div>
          <p className="max-w-[520px] text-secondary lg:justify-self-end">{intro}</p>
        </div>
      </Reveal>
    </section>
  )
}
