import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PAGES = [
  { label: 'The Night I First Saw You', index: 0 },
  { label: 'The Chapters We Wrote', index: 1 },
  { label: 'The Worlds You Created', index: 2 },
  { label: 'The Forever Ahead', index: 3 },
  { label: "My Heart's Only Question", index: 4 },
]

interface NavOrbProps {
  current: number
  onNavigate: (i: number) => void
}

export default function NavOrb({ current, onNavigate }: NavOrbProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed top-6 right-6 z-50">
      <motion.button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full flex items-center justify-center glass-card animate-glow-pulse cursor-pointer"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        style={{ border: '1px solid rgba(198,150,110,0.5)' }}
      >
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-xl"
          style={{ color: '#c6966e' }}
        >
          ♡
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute top-14 right-0 glass-card rounded-2xl p-4 min-w-52"
            style={{ border: '1px solid rgba(198,150,110,0.25)' }}
          >
            <p className="font-script text-center mb-3" style={{ color: '#c6966e', fontSize: '1.1rem' }}>
              Our Story
            </p>
            {PAGES.map((p) => (
              <button
                key={p.index}
                onClick={() => { onNavigate(p.index); setOpen(false) }}
                className="block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-300"
                style={{
                  color: current === p.index ? '#c6966e' : 'rgba(245,230,211,0.7)',
                  background: current === p.index ? 'rgba(198,150,110,0.12)' : 'transparent',
                  fontFamily: 'Playfair Display, serif',
                }}
              >
                {p.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
