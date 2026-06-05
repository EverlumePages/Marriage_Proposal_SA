import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CelebrationScreen from '../components/CelebrationScreen'

/* Pink sparkles that orbit the ring */
const SPARKLES = Array.from({ length: 16 }, (_, i) => {
  const angle = (i / 16) * Math.PI * 2
  const r = 92 + Math.random() * 28
  return {
    x: Math.cos(angle) * r,
    y: Math.sin(angle) * r,
    delay: Math.random() * 3,
    dur: 1.4 + Math.random() * 1.6,
    size: 4 + Math.random() * 7,
    pink: Math.random() > 0.5,
  }
})

function DiamondRing() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 200, height: 200 }}>
      {/* Pink halo */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(233,30,99,0.28) 0%, transparent 68%)',
          animation: 'glow-breathe 2.8s ease-in-out infinite',
        }}
      />

      {/* Orbiting sparkles — gold for diamond, pink for romance */}
      {SPARKLES.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: '50%', top: '50%', width: s.size, height: s.size, marginLeft: -s.size / 2, marginTop: -s.size / 2 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], x: s.x, y: s.y }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: 'easeOut' }}
        >
          <svg viewBox="0 0 10 10" width={s.size} height={s.size}>
            <path
              d="M5 0L5.6 4.4L10 5L5.6 5.6L5 10L4.4 5.6L0 5L4.4 4.4Z"
              fill={s.pink ? '#f48fb1' : '#f8d878'}
            />
          </svg>
        </motion.div>
      ))}

      {/* Ring */}
      <div style={{ animation: 'ring-float 3.8s ease-in-out infinite', position: 'relative', zIndex: 2 }}>
        <svg width="158" height="172" viewBox="0 0 160 175">
          <ellipse cx="80" cy="140" rx="50" ry="16" fill="none" stroke="url(#band)" strokeWidth="10" />
          <path d="M40 128 Q80 118 120 128" fill="none" stroke="url(#band)" strokeWidth="4" />
          {[55, 68, 92, 105].map((x, i) => (
            <line key={i} x1={x} y1={i % 2 === 0 ? 120 : 122} x2={x + (i < 2 ? 8 : -8)} y2={70}
              stroke="url(#band)" strokeWidth="3" strokeLinecap="round" />
          ))}
          {/* Diamond crown */}
          <polygon points="80,18 115,62 80,78 45,62" fill="url(#dTop)" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" />
          {/* Diamond pavilion */}
          <polygon points="45,62 115,62 80,90" fill="url(#dBot)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.6" />
          {/* Facets */}
          <polygon points="80,18 100,50 60,50" fill="white" opacity="0.35" />
          <polygon points="80,18 115,62 100,50" fill="white" opacity="0.22" />
          <polygon points="80,18 45,62 60,50" fill="white" opacity="0.10" />
          {/* Shine */}
          <ellipse cx="67" cy="34" rx="10" ry="6" fill="white" opacity="0.55" transform="rotate(-20 67 34)" />
          <ellipse cx="72" cy="26" rx="4" ry="2.5" fill="white" opacity="0.7" />
          <defs>
            <linearGradient id="band" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5d06e" />
              <stop offset="40%" stopColor="#fceea0" />
              <stop offset="100%" stopColor="#c8a040" />
            </linearGradient>
            <linearGradient id="dTop" x1="10%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#c8e8ff" />
              <stop offset="100%" stopColor="#90c8f8" />
            </linearGradient>
            <linearGradient id="dBot" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a8d8f8" />
              <stop offset="100%" stopColor="#60a8e8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

const LETTER = [
  'I want to be with you in all the ways —',
  'the adventurous days and the quiet ones.',
  'In every morning, every evening,',
  'every ordinary moment made extraordinary',
  'just because you are in it.',
  '',
  'I choose you. Today. Tomorrow.',
  'Every single day for the rest of my life.',
  '',
  'Will you choose me too?',
]

export default function Page4Proposal() {
  const [visible, setVisible] = useState(0)
  const [showBtns, setShowBtns] = useState(false)
  const [saidYes, setSaidYes] = useState(false)
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    LETTER.forEach((_, i) => {
      timers.push(setTimeout(() => setVisible(i + 1), 1500 + i * 620))
    })
    timers.push(setTimeout(() => setShowBtns(true), 1500 + LETTER.length * 620 + 500))
    return () => timers.forEach(clearTimeout)
  }, [])

  const runNo = () => setNoPos({
    x: (Math.random() - 0.5) * 350,
    y: (Math.random() - 0.5) * 250,
  })

  if (saidYes) return <CelebrationScreen />

  return (
    <div className="relative w-full h-full bg-romance flex flex-col items-center justify-center text-center px-6 overflow-y-auto">

      {/* Light rays */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            width: 1, height: '42vh',
            background: 'linear-gradient(to bottom, rgba(233,30,99,0.14), transparent)',
            left: '50%', top: '6%',
            transformOrigin: 'top center',
            transform: `rotate(${i * 22.5 - 79}deg)`,
            animation: `glow-breathe ${3 + i * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="page-label mb-4"
      >
        THE QUESTION IN MY HEART
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.65 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.6 }}
      >
        <DiamondRing />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.85 }}
        className="script shimmer"
        style={{ fontSize: 'clamp(3rem, 11vw, 7rem)', marginBottom: '1.8rem' }}
      >
        Will You Marry Me?
      </motion.h1>

      {/* Letter lines */}
      <div className="flex flex-col items-center gap-1 mb-8" style={{ maxWidth: 500 }}>
        {LETTER.slice(0, visible).map((line, i) =>
          line === '' ? (
            <div key={i} style={{ height: '0.55rem' }} />
          ) : (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="serif italic"
              style={{
                fontSize: 'clamp(0.93rem, 2.4vw, 1.12rem)',
                color: i >= LETTER.length - 2
                  ? '#f8bbd9'
                  : 'rgba(252,228,236,0.82)',
                lineHeight: 1.8,
              }}
            >
              {line}
            </motion.p>
          )
        )}
      </div>

      {/* Buttons */}
      <AnimatePresence>
        {showBtns && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col sm:flex-row gap-5 items-center mt-2"
          >
            {/* YES — pink gradient, glowing */}
            <motion.button
              onClick={() => setSaidYes(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.93 }}
              className="caps cursor-pointer"
              style={{
                fontSize: '0.88rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                padding: '1.1rem 3.5rem',
                borderRadius: '9999px',
                border: 'none',
                background: 'linear-gradient(135deg, #c2185b, #e91e63, #f06292)',
                color: '#fff',
                animation: 'btn-glow 2s ease-in-out infinite',
              }}
            >
              Yes, forever ♥
            </motion.button>

            {/* NO — runs away on hover */}
            <motion.button
              onMouseEnter={runNo}
              onFocus={runNo}
              animate={{ x: noPos.x, y: noPos.y }}
              transition={{ type: 'spring', stiffness: 280, damping: 18 }}
              className="caps cursor-pointer"
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.18em',
                padding: '0.7rem 1.6rem',
                borderRadius: '9999px',
                border: '1px solid rgba(255,255,255,0.07)',
                color: 'rgba(252,228,236,0.18)',
                background: 'transparent',
              }}
            >
              I need a moment...
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
