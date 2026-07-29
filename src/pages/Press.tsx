import { pressPage } from '../data/content'
import { ArrowLink } from '../components/Actions'
import Frame from '../components/Frame'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

const tones = ['ink', 'sand', 'mist', 'stone'] as const

export default function Press() {
  return (
    <>
      <PageHeader label={pressPage.label} title={pressPage.title} intro={pressPage.intro} />

      <section className="mx-auto max-w-[1440px] px-6 pb-gap-xl sm:px-pad-x">
        {pressPage.articles.map((article, index) => (
          <Reveal key={article.id} delay={index * 70}>
            <article className="grid gap-7 border-t border-border-warm py-10 md:grid-cols-[0.72fr_1fr] md:items-center md:gap-14 lg:py-16">
              <Frame
                ratio="aspect-[16/10]"
                tone={tones[index]}
                index={`0${index + 1}`}
                caption={`${article.label} · ${article.date}`}
                className={index % 2 ? 'md:order-2' : ''}
              />
              <div className={index % 2 ? 'md:order-1' : ''}>
                <div className="mb-6 flex items-center gap-6">
                  <span className="label">{article.label}</span>
                  <span className="h-px w-10 bg-border-warm" />
                  <span className="meta">{article.date}</span>
                </div>
                <h2 className="font-display text-[clamp(35px,5vw,66px)] uppercase leading-[0.98] tracking-[0.02em]">
                  {article.title}
                </h2>
                <p className="mb-8 mt-6 max-w-[590px] text-secondary">{article.excerpt}</p>
                <ArrowLink to="/press">Read Article</ArrowLink>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  )
}
