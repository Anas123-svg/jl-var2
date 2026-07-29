import { Link } from 'react-router-dom'

const arrow = (
  <span className="arrow inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
    &rarr;
  </span>
)

type LinkProps = { to: string; children: React.ReactNode; className?: string }

/** Underlined text link with animated arrow. */
export function ArrowLink({ to, children, className = '' }: LinkProps) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-3 border-b border-near-black pb-1.5 font-ui text-[12px] font-medium uppercase tracking-wide text-near-black transition-[gap] duration-300 hover:gap-4 ${className}`}
    >
      {children} {arrow}
    </Link>
  )
}

/** Outlined button — no fill, fills to near-black on hover. */
export function OutlinedButton({ to, children, className = '' }: LinkProps) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center justify-between gap-8 border border-near-black px-[26px] py-[18px] font-ui text-[12px] font-medium uppercase tracking-wide text-near-black transition-colors duration-300 hover:bg-near-black hover:text-warm-white ${className}`}
    >
      {children} {arrow}
    </Link>
  )
}
