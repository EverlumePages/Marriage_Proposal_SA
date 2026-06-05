/* Continuous ambient hearts — pure CSS animations for 60 fps performance */
const COLORS = [
  '#ff4081', '#e91e63', '#f06292',
  '#c2185b', '#f48fb1', '#ff80ab',
  '#ff1744', '#f8bbd9', '#ff6090',
]

interface HeartCfg {
  left: string; size: number; color: string; opacity: number
  riseDur: string; swayDur: string; delay: string
}

const HEARTS: HeartCfg[] = Array.from({ length: 52 }, () => ({
  left: `${Math.random() * 98}%`,
  size: 10 + Math.random() * 32,
  color: COLORS[Math.floor(Math.random() * COLORS.length)],
  opacity: 0.22 + Math.random() * 0.62,
  riseDur: `${9 + Math.random() * 13}s`,
  swayDur: `${4 + Math.random() * 5}s`,
  delay: `${Math.random() * 22}s`,
}))

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {HEARTS.map((h, i) => (
        <span
          key={i}
          className="heart-rise"
          style={{
            left: h.left,
            fontSize: h.size,
            color: h.color,
            opacity: h.opacity,
            animationDuration: `${h.riseDur}, ${h.swayDur}`,
            animationDelay: `${h.delay}, ${h.delay}`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  )
}
