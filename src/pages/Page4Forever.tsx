import { motion } from 'framer-motion'

const VISIONS = [
  {
    icon: '✈️',
    title: 'All the Places We Haven\'t Been Yet',
    desc: 'Every cobblestone street still waiting for our footsteps. Every sunset we haven\'t watched from a rooftop somewhere unknown. Every passport stamp still unclaimed.',
    offsetY: 0,
  },
  {
    icon: '☕',
    title: 'A Thousand Quiet Mornings',
    desc: 'Coffee before the world wakes up. Your hair undone. The particular light that only exists in the first hour. Mornings that ask nothing of us — only that we be there, together.',
    offsetY: 30,
  },
  {
    icon: '🏡',
    title: 'A Home That Knows Our Names',
    desc: 'Not just walls and rooms — a place that holds our smell, our music, our laughter, our arguments resolved over dinner, our joy too big for one person to hold alone.',
    offsetY: -20,
  },
  {
    icon: '👴🏽👵🏽',
    title: 'Growing Old Without Growing Apart',
    desc: 'Wrinkles that map every laugh we shared. Hands that know each other the way a key knows its lock. Still curious about each other. Still choosing each other every single day.',
    offsetY: 15,
  },
  {
    icon: '🌱',
    title: 'Everything We Haven\'t Built Yet',
    desc: 'Dreams we haven\'t dreamed yet, adventures unnamed, surprises neither of us can predict. I want all of it — especially the parts I can\'t imagine, because they\'ll be with you.',
    offsetY: -10,
  },
]

export default function Page4Forever({ onNext }: { onNext: () => void }) {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 80%, #1a0a1a 0%, #0a0510 60%)',
      }}
    >
      {/* Watercolor wash overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 20% 20%, rgba(180,100,140,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(100,80,180,0.08) 0%, transparent 50%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center"
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-cinzel tracking-[0.35em] text-xs mb-4"
          style={{ color: 'rgba(198,150,110,0.7)' }}
        >
          OUR UNWRITTEN PAGES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="font-script shimmer-text mb-12 text-center"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', lineHeight: 1.2 }}
        >
          The Forever I Can't Imagine Without You
        </motion.h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {VISIONS.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 + v.offsetY }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.2, duration: 1, ease: 'easeOut' }}
              className="glass-card rounded-2xl p-6 relative overflow-hidden group"
              whileHover={{ y: -6, scale: 1.02 }}
            >
              {/* Watercolor wash on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 30% 30%, rgba(198,150,110,0.08) 0%, transparent 70%)`,
                }}
              />

              <span className="block text-4xl mb-4">{v.icon}</span>
              <h3
                className="font-serif-elegant font-semibold mb-3 leading-tight"
                style={{ fontSize: '1.05rem', color: '#f5e6d3' }}
              >
                {v.title}
              </h3>
              <p
                className="font-serif-elegant italic text-sm leading-relaxed"
                style={{ color: 'rgba(245,230,211,0.65)' }}
              >
                {v.desc}
              </p>
            </motion.div>
          ))}

          {/* Placeholder photo card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1"
            style={{ minHeight: '180px', borderStyle: 'dashed', borderColor: 'rgba(198,150,110,0.2)' }}
          >
            <span className="text-4xl mb-3 opacity-30">📷</span>
            <p
              className="font-serif-elegant italic text-sm text-center"
              style={{ color: 'rgba(245,230,211,0.3)' }}
            >
              A photo of us,<br />to be placed here
            </p>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          onClick={onNext}
          className="font-cinzel tracking-widest text-sm px-10 py-4 rounded-full cursor-pointer animate-glow-pulse"
          style={{
            border: '1px solid rgba(198,150,110,0.6)',
            color: '#f5e6d3',
            background: 'linear-gradient(135deg, rgba(198,150,110,0.15), rgba(120,60,160,0.15))',
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
        >
          To My Heart's Question →
        </motion.button>
      </motion.div>
    </div>
  )
}
