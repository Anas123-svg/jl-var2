type Props = {
  caption?: string
  ratio?: string
  src?: string
  alt?: string
  className?: string
  tone?: 'ink' | 'stone' | 'sand' | 'mist'
  index?: string
}

const tones = {
  ink: 'from-[#171717] via-[#33302d] to-[#0d0d0d]',
  stone: 'from-[#d7d2cb] via-[#aaa49d] to-[#6f6b67]',
  sand: 'from-[#e9e1d8] via-[#c9b8a8] to-[#8d7a69]',
  mist: 'from-[#dedbd6] via-[#b6b6b1] to-[#737571]',
}

export default function Frame({
  caption,
  ratio = 'aspect-[3/4]',
  src,
  alt = '',
  className = '',
  tone = 'ink',
  index,
}: Props) {
  return (
    <figure className={`group relative overflow-hidden bg-near-black ${ratio} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
          loading="lazy"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${tones[tone]}`} aria-hidden>
          <div className="absolute inset-[9%] border border-warm-white/20" />
          <div className="absolute left-[18%] top-0 h-full w-px rotate-[18deg] bg-warm-white/15" />
          <div className="absolute bottom-[15%] right-[12%] h-[32%] w-[42%] rounded-full border border-warm-white/15" />
          {index ? (
            <span className="absolute right-5 top-4 font-display text-[64px] leading-none text-warm-white/10">
              {index}
            </span>
          ) : null}
        </div>
      )}
      {caption ? (
        <figcaption className="absolute bottom-[18px] left-5 right-5 flex justify-between gap-4 font-ui text-[9px] uppercase tracking-meta text-warm-white/65">
          <span>{caption}</span>
          <span aria-hidden>↗</span>
        </figcaption>
      ) : null}
    </figure>
  )
}
