import { motion } from 'framer-motion'

const BASE = 0.5
const LINES = [
  { text: 'From the very first moment I saw you,', t: BASE },
  { text: 'something inside me shifted.',          t: BASE + 0.65 },
  { text: '',                                       t: 0 },
  { text: 'The world got a little warmer.',        t: BASE + 1.55 },
  { text: 'A little quieter.',                     t: BASE + 2.15 },
  { text: 'Like the universe had leaned in',       t: BASE + 2.75 },
  { text: "and whispered: ‘This one. She’s the one.’", t: BASE + 3.35 },
]

export default function Page2Love({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-romance flex flex-col items-center justify-center text-center px-6">

      <div
        className="absolute pointer-events-none"
        style={{
          width: 520, height: 520, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(233,30,99,0.2) 0%, transparent 68%)',
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          animation: 'glow-breathe 6s ease-in-out infinite',
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="page-label mb-10"
      >
        SINCE THE DAY I MET YOU
      </motion.p>

      <div className="flex flex-col items-center gap-2" style={{ maxWidth: 540 }}>
        {LINES.map((line, i) =>
          line.text === '' ? (
            <div key={i} style={{ height: '0.85rem' }} />
          ) : (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: line.t }}
              className="serif italic leading-loose"
              style={{
                fontSize: 'clamp(1.05rem, 2.8vw, 1.28rem)',
                color: i <= 1
                  ? 'rgba(252,228,236,0.92)'
                  : i >= LINES.length - 2
                  ? '#f8bbd9'
                  : 'rgba(252,228,236,0.76)',
              }}
            >
              {line.text}
            </motion.p>
          )
        )}
      </div>

      {/* Beating heart */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: BASE + 4.5 }}
        style={{
          fontSize: '2.2rem',
          color: '#e91e63',
          margin: '2.4rem 0',
          animation: 'heartbeat 2.2s ease-in-out infinite',
          display: 'inline-block',
        }}
      >
        ♥
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: BASE + 5.2 }}
        onClick={onNext}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.93 }}
        className="cta-btn"
      >
        Continue &nbsp;♥
      </motion.button>
    </div>
  )
}
