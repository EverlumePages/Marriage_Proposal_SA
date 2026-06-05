interface PetalConfig {
  left: string
  size: number
  opacity: number
  duration: string
  delay: string
  hue: number
}

const PETALS: PetalConfig[] = Array.from({ length: 22 }, () => ({
  left: `${Math.random() * 98}%`,
  size: 14 + Math.random() * 18,
  opacity: 0.35 + Math.random() * 0.5,
  duration: `${13 + Math.random() * 12}s`,
  delay: `${Math.random() * 18}s`,
  hue: 330 + Math.random() * 30,
}))

function PetalSVG({ size, hue }: { size: number; hue: number }) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 30 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={`pg-${hue}`} cx="40%" cy="30%">
          <stop offset="0%" stopColor={`hsl(${hue},85%,80%)`} />
          <stop offset="100%" stopColor={`hsl(${hue},65%,55%)`} stopOpacity="0.7" />
        </radialGradient>
      </defs>
      <ellipse
        cx="15"
        cy="22"
        rx="9"
        ry="20"
        fill={`url(#pg-${hue})`}
        transform="rotate(-15 15 22)"
      />
    </svg>
  )
}

export default function FallingPetals() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {PETALS.map((p, i) => (
        <div
          key={i}
          className="petal-fall"
          style={{
            left: p.left,
            opacity: p.opacity,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        >
          <PetalSVG size={p.size} hue={p.hue} />
        </div>
      ))}
    </div>
  )
}
