import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type Props = {
  children: ReactNode
  className?: string
  /** Optional stagger delay in ms */
  delay?: number
}

export default function Reveal({ children, className = '', delay = 0 }: Props) {
  const { ref, shown } = useReveal()

  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: shown ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
