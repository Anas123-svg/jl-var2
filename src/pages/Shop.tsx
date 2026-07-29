import { shopPage } from '../data/content'
import { ArrowLink } from '../components/Actions'
import Frame from '../components/Frame'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

const tones = ['sand', 'ink', 'stone', 'mist', 'ink', 'sand'] as const

export default function Shop() {
  return (
    <>
      <PageHeader label={shopPage.label} title={shopPage.title} intro={shopPage.intro} />

      <section className="mx-auto grid max-w-[1440px] gap-x-8 gap-y-20 px-6 pb-gap-xl sm:px-pad-x md:grid-cols-2 lg:grid-cols-3">
        {shopPage.products.map((product, index) => (
          <Reveal key={product.id} delay={(index % 3) * 90} className="flex">
            <article className="group flex w-full flex-col">
              <Frame
                caption={product.edition}
                ratio={index === 0 || index === 4 ? 'aspect-[4/5]' : 'aspect-[3/4]'}
                tone={tones[index]}
                index={`0${index + 1}`}
                className="mb-7"
              />
              <div className="mb-3 flex items-start justify-between gap-6">
                <h2 className="font-display text-[clamp(23px,2.5vw,32px)] uppercase leading-[1.08] tracking-[0.025em]">
                  {product.title}
                </h2>
                <span className="font-ui text-[13px] font-medium tracking-wide">{product.price}</span>
              </div>
              <p className="caption mb-6">{product.meta}</p>
              <ArrowLink to="/shop">View Print</ArrowLink>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  )
}
