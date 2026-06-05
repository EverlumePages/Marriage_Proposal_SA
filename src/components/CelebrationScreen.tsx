import { useMemo } from 'react'
import { motion } from 'framer-motion'

const PINKS = ['#ff4081','#e91e63','#f06292','#c2185b','#f48fb1','#ffb3c1','#ff80ab','#fce4ec']
const GOLDS = ['#f5d06e','#fceea0','#e8c060','#fffde7']

interface Particle {
  x: number; y: number; color: string; size: number
  delay: number; dur: number; shape: 'heart' | 'rect' | 'star'
  rx: number; ry: number; rot: number
}

export default function CelebrationScreen() {
  const particles = useMemo<Particle[]>(() =>
    Array.from({ length: 100 }, () => {
      const r = Math.random()
      return {
        x: 20 + Math.random() * 60,
        y: 35 + Math.random() * 30,
        color: r > 0.7 ? GOLDS[Math.floor(Math.random() * GOLDS.length)] : PINKS[Math.floor(Math.random() * PINKS.length)],
        size: r > 0.6 ? 12 + Math.random() * 22 : 5 + Math.random() * 9,
        delay: Math.random() * 2.2,
        dur: 2.2 + Math.random() * 2.8,
        shape: r > 0.55 ? 'heart' : r > 0.3 ? 'rect' : 'star',
        rx: (Math.random() - 0.5) * 90,
        ry: -(25 + Math.random() * 75),
        rot: (Math.random() - 0.5) * 540,
      }
    }), [])

  const floatHearts = useMemo(() =>
    Array.from({ length: 45 }, () => ({
      left: Math.random() * 100,
      delay: Math.random() * 5,
      dur: 6 + Math.random() * 8,
      size: 14 + Math.random() * 26,
      color: PINKS[Math.floor(Math.random() * PINKS.length)],
    })), [])

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 55%, #3d0028 0%, #0f010c 68%)',
        zIndex: 100,
      }}
    >
      {/* Glowing rings */}
      {[380, 560, 740].map((size, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: size, height: size,
            border: `1px solid rgba(233,30,99,${0.18 - i * 0.05})`,
            left: '50%', top: '50%',
            transform: 'translate(-50%,-50%)',
            animation: `glow-breathe ${3 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}

      {/* Burst particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1.1, 0.9, 0],
            x: `${p.rx}vw`,
            y: `${p.ry}vh`,
            rotate: p.rot,
          }}
          transition={{
            duration: p.dur, delay: p.delay,
            repeat: Infinity, repeatDelay: 0.5 + Math.random() * 2,
            ease: 'easeOut',
          }}
        >
          {p.shape === 'heart' ? (
            <span style={{ fontSize: p.size, color: p.color, lineHeight: 1 }}>♥</span>
          ) : p.shape === 'star' ? (
            <svg viewBox="0 0 10 10" width={p.size} height={p.size}>
              <path d="M5 0L5.6 4.4L10 5L5.6 5.6L5 10L4.4 5.6L0 5L4.4 4.4Z" fill={p.color} />
            </svg>
          ) : (
            <div style={{ width: p.size * 0.6, height: p.size, background: p.color, borderRadius: 2 }} />
          )}
        </motion.div>
      ))}

      {/* Continuous floating hearts */}
      {floatHearts.map((h, i) => (
        <span
          key={i}
          className="heart-rise absolute"
          style={{
            left: `${h.left}%`,
            fontSize: h.size,
            color: h.color,
            opacity: 0.75,
            animationDuration: `${h.dur}s, ${h.dur * 0.55}s`,
            animationDelay: `${h.delay}s, ${h.delay}s`,
          }}
        >
          ♥
        </span>
      ))}

      {/* Central message */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
      >
        <motion.div
          animate={{ scale: [1, 1.14, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{ fontSize: '4.5rem', lineHeight: 1, marginBottom: '1rem' }}
        >
          💍
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.3 }}
          className="script shimmer"
          style={{ fontSize: 'clamp(3.5rem, 14vw, 8.5rem)' }}
        >
          She Said Yes!
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1.2 }}
          style={{ color: '#e91e63', fontSize: '1.3rem', letterSpacing: '0.55em', margin: '0.8rem 0 1.2rem' }}
        >
          ♥ &nbsp; ♥ &nbsp; ♥
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1.2 }}
          className="serif italic"
          style={{ fontSize: 'clamp(1rem, 2.8vw, 1.22rem)', color: 'rgba(252,228,236,0.82)', maxWidth: 400, lineHeight: 1.85 }}
        >
          Our forever begins right now.
          <br />
          <span style={{ color: 'rgba(244,143,177,0.75)', fontSize: '0.9em' }}>
            And it&rsquo;s going to be beautiful.
          </span>
        </motion.p>
      </motion.div>
    </div>
  )
}
