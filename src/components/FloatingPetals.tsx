import { useMemo } from 'react'

interface Petal {
  left: number
  delay: number
  dur: number
  size: number
  opacity: number
}

export default function FloatingPetals({ count = 18 }: { count?: number }) {
  const petals = useMemo<Petal[]>(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 12,
        dur: Math.random() * 10 + 12,
        size: Math.random() * 14 + 8,
        opacity: Math.random() * 0.5 + 0.3,
      })),
    [count]
  )

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {petals.map((p, i) => (
        <div
          key={i}
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationName: 'petal-drift',
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            opacity: p.opacity,
          }}
        >
          <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse
              cx="15"
              cy="15"
              rx="8"
              ry="14"
              fill="url(#petalGrad)"
              transform="rotate(-30 15 15)"
            />
            <defs>
              <radialGradient id="petalGrad" cx="40%" cy="30%">
                <stop offset="0%" stopColor="#f9c0c8" />
                <stop offset="100%" stopColor="#c47b8a" stopOpacity="0.7" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  )
}
