import { useRef } from 'react'

interface Star {
  x: number
  y: number
  r: number
  delay: number
  dur: number
}

export default function StarField({ count = 180 }: { count?: number }) {
  const stars = useRef<Star[]>(
    Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      r: Math.random() * 1.8 + 0.3,
      delay: Math.random() * 5,
      dur: Math.random() * 4 + 2,
    }))
  ).current

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <svg width="100%" height="100%" className="absolute inset-0">
        {stars.map((s, i) => (
          <circle
            key={i}
            cx={`${s.x}%`}
            cy={`${s.y}%`}
            r={s.r}
            fill="white"
            className="animate-twinkle"
            style={{
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.dur}s`,
              opacity: 0.4,
            }}
          />
        ))}
      </svg>
    </div>
  )
}
