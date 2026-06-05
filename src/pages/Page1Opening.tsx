import { motion } from 'framer-motion'

const EASE = [0.2, 0, 0.1, 1] as [number, number, number, number]
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.4, delay, ease: EASE },
})

export default function Page1Opening({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-romance flex flex-col items-center justify-center text-center px-6">

      {/* Pink center glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 620, height: 620, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(233,30,99,0.22) 0%, transparent 68%)',
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          animation: 'glow-breathe 5s ease-in-out infinite',
        }}
      />

      <motion.p {...rise(0.4)} className="page-label mb-7">
        A MESSAGE JUST FOR YOU
      </motion.p>

      {/* Main title — .script + .shimmer together handles clipping */}
      <motion.h1
        {...rise(0.8)}
        className="script shimmer"
        style={{ fontSize: 'clamp(4.5rem, 15vw, 9rem)' }}
      >
        My Love...
      </motion.h1>

      {/* Divider */}
      <motion.div
        {...rise(1.5)}
        className="flex items-center gap-5 mb-10"
        style={{ width: 280 }}
      >
        <div style={{ flex: 1, height: 1, background: 'rgba(240,98,146,0.25)' }} />
        <span style={{ color: '#e91e63', fontSize: '1rem', animation: 'heartbeat 2.2s ease-in-out infinite', display: 'inline-block' }}>♥</span>
        <div style={{ flex: 1, height: 1, background: 'rgba(240,98,146,0.25)' }} />
      </motion.div>

      <motion.p
        {...rise(2.0)}
        className="serif italic leading-loose mb-3"
        style={{ fontSize: 'clamp(1.05rem, 2.8vw, 1.3rem)', color: 'rgba(252,228,236,0.88)', maxWidth: 460 }}
      >
        There is something I have been holding<br />
        inside my heart for a long time.
      </motion.p>

      <motion.p
        {...rise(2.9)}
        className="serif italic mb-14"
        style={{ fontSize: 'clamp(1.05rem, 2.8vw, 1.25rem)', color: 'rgba(252,228,236,0.52)' }}
      >
        Tonight, I finally say it.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 3.8 }}
        onClick={onNext}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className="cta-btn"
      >
        I&rsquo;m ready &nbsp;♥
      </motion.button>
    </div>
  )
}
