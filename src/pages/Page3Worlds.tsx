import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const QUALITIES = [
  {
    emoji: '☀️',
    title: 'The Smile That Calms Storms',
    text: 'In every moment I have come undone, your smile has been the first light through the clouds. You do not fix things — you make me believe they will be okay.',
    color: '#f5c878',
    glow: 'rgba(245,200,120,0.3)',
  },
  {
    emoji: '🌿',
    title: 'The Way You See Beauty',
    text: 'You find wonder in the smallest things — a spider web catching dew, the smell of rain on warm pavement. You taught me to look more slowly at the world.',
    color: '#7ec8a4',
    glow: 'rgba(126,200,164,0.3)',
  },
  {
    emoji: '🔥',
    title: 'Your Quiet Ferocity',
    text: 'Soft in the way you love. Fierce in the way you protect what matters. You carry both like they were always meant to live in the same heart.',
    color: '#e8845c',
    glow: 'rgba(232,132,92,0.3)',
  },
  {
    emoji: '🌙',
    title: 'The Peace You Bring',
    text: 'Not every kind of peace is silence. Yours is the sound of a house breathing when someone you love is in it. I never knew calm until I knew you.',
    color: '#a88de8',
    glow: 'rgba(168,141,232,0.3)',
  },
  {
    emoji: '✨',
    title: 'How You Make Me Better',
    text: 'You never asked me to change. And somehow, loving you made me grow into the version of myself I always hoped existed somewhere underneath.',
    color: '#f9c0c8',
    glow: 'rgba(249,192,200,0.3)',
  },
  {
    emoji: '💎',
    title: 'Your Impossible Depth',
    text: 'Years of knowing you and I still find new rooms in you — new thoughts, new surprises, new grace. You are infinite, and I am grateful to be the one exploring.',
    color: '#7ecde8',
    glow: 'rgba(126,205,232,0.3)',
  },
]

export default function Page3Worlds({ onNext }: { onNext: () => void }) {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 60% 40%, #120820 0%, #0a0510 70%)',
      }}
    >
      {/* Background orb field */}
      {QUALITIES.map((q, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.7,
          }}
          style={{
            width: 250 + i * 40,
            height: 250 + i * 40,
            background: `radial-gradient(circle, ${q.glow} 0%, transparent 70%)`,
            left: `${10 + (i % 3) * 30}%`,
            top: `${20 + Math.floor(i / 3) * 40}%`,
            transform: 'translate(-50%,-50%)',
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center"
      >
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-cinzel tracking-[0.35em] text-xs mb-4"
          style={{ color: 'rgba(198,150,110,0.7)' }}
        >
          WHAT YOU ARE TO ME
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="font-script shimmer-text mb-10 text-center"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', lineHeight: 1.2 }}
        >
          The Worlds You Created in Me
        </motion.h2>

        {/* Crystal orbs grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full mb-10">
          {QUALITIES.map((q, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.12, duration: 0.8 }}
              onClick={() => setSelected(selected === i ? null : i)}
              className="relative rounded-2xl p-5 text-center cursor-pointer transition-all duration-300 glass-card"
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.97 }}
              style={{
                borderColor: selected === i ? q.color : 'rgba(198,150,110,0.15)',
                boxShadow: selected === i ? `0 0 30px ${q.glow}` : 'none',
              }}
            >
              <motion.span
                className="block text-3xl mb-3"
                animate={{ scale: selected === i ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.6 }}
              >
                {q.emoji}
              </motion.span>
              <p
                className="font-serif-elegant font-semibold text-sm leading-tight"
                style={{ color: selected === i ? q.color : '#f5e6d3' }}
              >
                {q.title}
              </p>

              <AnimatePresence>
                {selected === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="font-serif-elegant italic text-xs mt-3 leading-relaxed"
                    style={{ color: 'rgba(245,230,211,0.8)' }}
                  >
                    {q.text}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          onClick={onNext}
          className="font-cinzel tracking-widest text-sm px-10 py-4 rounded-full cursor-pointer"
          style={{
            border: '1px solid rgba(198,150,110,0.4)',
            color: 'rgba(245,230,211,0.8)',
            background: 'rgba(198,150,110,0.08)',
          }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Into Our Future →
        </motion.button>
      </motion.div>
    </div>
  )
}
