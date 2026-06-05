import { motion } from 'framer-motion'

const QUALITIES = [
  'My calm in every storm.',
  'My laughter on the hardest days.',
  'My home, wherever we are.',
  'My favourite everything.',
]

export default function Page3YouAre({ onNext }: { onNext: () => void }) {
  const lastDelay = 1.7 + (QUALITIES.length - 1) * 0.65

  return (
    <div className="relative w-full h-full bg-romance flex flex-col items-center justify-center text-center px-6">

      <div
        className="absolute pointer-events-none"
        style={{
          width: 540, height: 540, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(233,30,99,0.22) 0%, transparent 68%)',
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          animation: 'glow-breathe 4.5s ease-in-out infinite',
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="page-label mb-7"
      >
        WHAT YOU MEAN TO ME
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="script shimmer mb-12"
        style={{ fontSize: 'clamp(3rem, 11vw, 6.5rem)' }}
      >
        You are my&hellip;
      </motion.h2>

      <div className="flex flex-col items-center gap-5 mb-14">
        {QUALITIES.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 1.7 + i * 0.65 }}
            className="flex items-center gap-4"
          >
            <motion.span
              animate={{ scale: [1, 1.35, 1] }}
              transition={{ duration: 1.2, delay: 2.1 + i * 0.65, repeat: Infinity, repeatDelay: 3.5 }}
              style={{ color: '#e91e63', fontSize: '1.1rem', flexShrink: 0 }}
            >
              ♥
            </motion.span>
            <p
              className="serif italic"
              style={{ fontSize: 'clamp(1.1rem, 3.2vw, 1.4rem)', color: 'rgba(252,228,236,0.9)' }}
            >
              {q}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: lastDelay + 0.9 }}
        onClick={onNext}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.93 }}
        className="cta-btn"
      >
        And there&rsquo;s more &nbsp;♥
      </motion.button>
    </div>
  )
}
