import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CHAPTERS = [
  {
    num: 'I',
    title: 'The Rainy Evening',
    date: 'A Thursday that changed everything',
    text: 'We were supposed to stay inside. Instead you pulled me out into the rain, arms spread wide, face lifted to the sky — and I fell in love before I even realized it was happening.',
  },
  {
    num: 'II',
    title: 'Terrible Jokes Under the Stars',
    date: 'The night we talked until dawn',
    text: 'You laughed at every single one. Not because they were funny — they were awful — but because you were generous like that. Your laughter became my favorite sound in any language.',
  },
  {
    num: 'III',
    title: 'The Kitchen at 2 AM',
    date: 'When ordinary became extraordinary',
    text: "Flour on your cheek, music too loud, burning something we'd never admit to anyone. I looked at you in that chaos and thought: this is home.",
  },
  {
    num: 'IV',
    title: 'The Drive to Nowhere',
    date: 'When being lost felt perfect',
    text: "Wrong turns, a map that made no sense, and you singing along to every song. I didn't need the destination. I just needed that. I just needed you.",
  },
  {
    num: 'V',
    title: 'The Quiet Sunday',
    date: 'When stillness spoke louder than words',
    text: "We didn't say much. You read, I watched you. And in that silence I understood that loving someone isn't always fireworks — sometimes it's the softest, steadiest light.",
  },
]

export default function Page2Chapters({ onNext }: { onNext: () => void }) {
  const [active, setActive] = useState(0)

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 30% 50%, #1a0e2e 0%, #0a0510 70%)',
      }}
    >
      {/* Decorative book spine glow */}
      <div
        className="absolute left-1/2 top-0 h-full w-px pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(198,150,110,0.15), transparent)' }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center"
      >
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-cinzel tracking-[0.35em] text-xs mb-4"
          style={{ color: 'rgba(198,150,110,0.7)' }}
        >
          CHAPTER BY CHAPTER
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="font-script shimmer-text mb-10 text-center"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', lineHeight: 1.2 }}
        >
          The Chapters We Wrote in Secret
        </motion.h2>

        {/* Book */}
        <div className="w-full flex flex-col md:flex-row gap-6 items-start">
          {/* Chapter tabs (left page) */}
          <div className="flex md:flex-col gap-2 md:w-56 flex-shrink-0">
            {CHAPTERS.map((ch, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className="text-left px-4 py-3 rounded-xl cursor-pointer transition-all duration-300"
                animate={{
                  background:
                    active === i
                      ? 'rgba(198,150,110,0.15)'
                      : 'rgba(255,255,255,0.03)',
                  borderColor:
                    active === i
                      ? 'rgba(198,150,110,0.4)'
                      : 'rgba(198,150,110,0.1)',
                }}
                style={{ border: '1px solid' }}
                whileHover={{ x: 4 }}
              >
                <span
                  className="font-cinzel text-xs block mb-1"
                  style={{ color: active === i ? '#c6966e' : 'rgba(198,150,110,0.4)' }}
                >
                  CHAPTER {ch.num}
                </span>
                <span
                  className="font-serif-elegant text-sm leading-tight"
                  style={{ color: active === i ? '#f5e6d3' : 'rgba(245,230,211,0.45)' }}
                >
                  {ch.title}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Right page */}
          <div className="flex-1 min-h-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, rotateY: -15, x: 30 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                exit={{ opacity: 0, rotateY: 15, x: -30 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="glass-card rounded-2xl p-8 h-full relative"
                style={{ perspective: '800px', minHeight: '280px' }}
              >
                {/* Page texture lines */}
                {Array.from({ length: 8 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute left-8 right-8"
                    style={{
                      top: `${60 + i * 26}px`,
                      height: '1px',
                      background: 'rgba(198,150,110,0.06)',
                    }}
                  />
                ))}

                <p
                  className="font-cinzel text-xs tracking-widest mb-2"
                  style={{ color: 'rgba(198,150,110,0.6)' }}
                >
                  CHAPTER {CHAPTERS[active].num}
                </p>
                <h3
                  className="font-script mb-1"
                  style={{ fontSize: '2rem', color: '#c6966e' }}
                >
                  {CHAPTERS[active].title}
                </h3>
                <p
                  className="font-serif-elegant italic text-xs mb-6"
                  style={{ color: 'rgba(245,230,211,0.4)' }}
                >
                  {CHAPTERS[active].date}
                </p>
                <p
                  className="font-serif-elegant leading-loose"
                  style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'rgba(245,230,211,0.85)' }}
                >
                  {CHAPTERS[active].text}
                </p>

                <div
                  className="absolute bottom-6 right-8 font-cinzel text-xs"
                  style={{ color: 'rgba(198,150,110,0.3)' }}
                >
                  {active + 1} / {CHAPTERS.length}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          onClick={onNext}
          className="mt-10 font-cinzel tracking-widest text-sm px-10 py-4 rounded-full cursor-pointer transition-all duration-300"
          style={{
            border: '1px solid rgba(198,150,110,0.4)',
            color: 'rgba(245,230,211,0.8)',
            background: 'rgba(198,150,110,0.08)',
          }}
          whileHover={{ scale: 1.04, borderColor: 'rgba(198,150,110,0.8)' }}
          whileTap={{ scale: 0.97 }}
        >
          Continue Reading →
        </motion.button>
      </motion.div>
    </div>
  )
}
