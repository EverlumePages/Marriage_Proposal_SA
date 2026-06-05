import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CelebrationScreen from '../components/CelebrationScreen'

const PROPOSAL_LINES = [
  'I have been rehearsing this moment in my heart',
  'for longer than I know how to say.',
  '',
  'You are the answer to questions I didn\'t know I had.',
  'The reason I believe in things like fate and grace.',
  '',
  'Every day with you is something I would choose',
  'a thousand times over.',
  '',
  'So I am asking you —',
  'not because I have to,',
  'but because choosing you',
  'is the truest thing I have ever done.',
]

const SPARKLE_POSITIONS = Array.from({ length: 20 }, () => ({
  x: Math.random() * 300 - 150,
  y: Math.random() * 300 - 150,
  delay: Math.random() * 3,
  dur: Math.random() * 2 + 1.5,
  size: Math.random() * 6 + 3,
}))

function DiamondRing() {
  return (
    <div className="relative flex items-center justify-center animate-ring-float" style={{ width: 160, height: 160 }}>
      {SPARKLE_POSITIONS.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: '50%', top: '50%' }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], x: s.x, y: s.y }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: 'easeOut' }}
        >
          <svg width={s.size} height={s.size} viewBox="0 0 10 10">
            <path d="M5 0L5.5 4.5L10 5L5.5 5.5L5 10L4.5 5.5L0 5L4.5 4.5Z" fill="#f5e6d3" />
          </svg>
        </motion.div>
      ))}

      <motion.svg width="140" height="140" viewBox="0 0 140 140" className="animate-glow-pulse">
        <ellipse cx="70" cy="100" rx="34" ry="12" fill="none" stroke="url(#ringGrad)" strokeWidth="7" />
        <rect x="54" y="60" width="32" height="44" rx="4" fill="none" stroke="url(#ringGrad)" strokeWidth="3" />
        <polygon points="70,22 95,58 70,78 45,58" fill="url(#diamondGrad)" stroke="#f5e6d3" strokeWidth="1.2" opacity="0.95" />
        <polygon points="70,22 82,45 70,78 58,45" fill="white" opacity="0.15" />
        <polygon points="70,22 95,58 82,45" fill="white" opacity="0.25" />
        <polygon points="70,22 45,58 58,45" fill="white" opacity="0.08" />
        <ellipse cx="60" cy="38" rx="8" ry="5" fill="white" opacity="0.35" transform="rotate(-20 60 38)" />
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8c87a" />
            <stop offset="50%" stopColor="#f5e6d3" />
            <stop offset="100%" stopColor="#c6966e" />
          </linearGradient>
          <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8f4ff" />
            <stop offset="40%" stopColor="#c8e8ff" />
            <stop offset="100%" stopColor="#a0c8f0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  )
}

export default function Page5Proposal() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [showButtons, setShowButtons] = useState(false)
  const [saidYes, setSaidYes] = useState(false)
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    PROPOSAL_LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleLines(i + 1), 1000 + i * 700))
    })
    timers.push(
      setTimeout(() => setShowButtons(true), 1000 + PROPOSAL_LINES.length * 700 + 600)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  const handleNoHover = () => {
    setNoPos({
      x: (Math.random() - 0.5) * 300,
      y: (Math.random() - 0.5) * 200,
    })
  }

  if (saidYes) return <CelebrationScreen />

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 50%, #200a30 0%, #0a0510 65%)' }}
    >
      {/* Light rays */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            width: '2px',
            height: '40vh',
            background: 'linear-gradient(to bottom, rgba(198,150,110,0.15), transparent)',
            left: '50%',
            top: '10%',
            transformOrigin: 'top center',
            transform: `rotate(${i * 30 - 75}deg)`,
          }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative z-10 flex flex-col items-center px-6 text-center max-w-2xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-cinzel tracking-[0.35em] text-xs mb-6"
          style={{ color: 'rgba(198,150,110,0.7)' }}
        >
          THE FINAL CHAPTER
        </motion.p>

        <DiamondRing />

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.5 }}
          className="font-script shimmer-text my-8"
          style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', lineHeight: 1 }}
        >
          Will You Marry Me?
        </motion.h1>

        <div className="glass-card rounded-2xl p-8 mb-8 text-left" style={{ maxWidth: '520px' }}>
          {PROPOSAL_LINES.slice(0, visibleLines).map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`font-serif-elegant italic leading-loose ${line === '' ? 'mt-2' : ''}`}
              style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: 'rgba(245,230,211,0.85)' }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <AnimatePresence>
          {showButtons && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 items-center"
            >
              <motion.button
                onClick={() => setSaidYes(true)}
                className="relative font-cinzel tracking-widest px-12 py-5 rounded-full cursor-pointer animate-glow-pulse"
                style={{
                  background: 'linear-gradient(135deg, #c6966e, #e8c87a, #c6966e)',
                  color: '#0a0510',
                  fontSize: '1rem',
                  fontWeight: 700,
                  border: 'none',
                  letterSpacing: '0.2em',
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                Yes, I Choose You Forever
              </motion.button>

              <motion.button
                onMouseEnter={handleNoHover}
                onFocus={handleNoHover}
                animate={{ x: noPos.x, y: noPos.y }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="font-cinzel tracking-widest px-8 py-4 rounded-full cursor-pointer"
                style={{
                  border: '1px solid rgba(198,150,110,0.15)',
                  color: 'rgba(245,230,211,0.25)',
                  background: 'transparent',
                  fontSize: '0.75rem',
                }}
              >
                I need a moment...
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
