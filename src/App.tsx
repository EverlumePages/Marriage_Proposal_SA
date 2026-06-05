import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FloatingHearts from './components/FloatingHearts'
import FallingPetals from './components/FallingPetals'
import Page1Opening from './pages/Page1Opening'
import Page2Love from './pages/Page2Love'
import Page3YouAre from './pages/Page3YouAre'
import Page4Proposal from './pages/Page4Proposal'

const PAGES = [Page1Opening, Page2Love, Page3YouAre, Page4Proposal]

/* Page progress dots — small hearts */
function HeartDots({ total, current, onNavigate }: { total: number; current: number; onNavigate: (i: number) => void }) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-50">
      {Array.from({ length: total }, (_, i) => (
        <motion.button
          key={i}
          onClick={() => onNavigate(i)}
          animate={{ scale: current === i ? 1.4 : 1, opacity: current === i ? 1 : 0.35 }}
          whileHover={{ scale: 1.5, opacity: 0.8 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            color: '#e84c6e',
            fontSize: '1rem',
            lineHeight: 1,
          }}
        >
          ♥
        </motion.button>
      ))}
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState(0)
  const [dir, setDir] = useState(1)

  const navigate = (target: number) => {
    setDir(target >= page ? 1 : -1)
    setPage(target)
  }

  const CurrentPage = PAGES[page]

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ background: '#0d0208' }}>
      {/* Ambient layer — always visible */}
      <FloatingHearts />
      <FallingPetals />

      {/* Page content */}
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={page}
          custom={dir}
          initial={{ opacity: 0, scale: 0.97, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.02, filter: 'blur(8px)' }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
          style={{ zIndex: 2 }}
        >
          <CurrentPage onNext={() => navigate(Math.min(page + 1, PAGES.length - 1))} />
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots — hidden on last page (proposal handles its own flow) */}
      {page < PAGES.length - 1 && (
        <HeartDots total={PAGES.length} current={page} onNavigate={navigate} />
      )}
    </div>
  )
}
