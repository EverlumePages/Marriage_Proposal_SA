import { motion } from 'framer-motion'

interface PageDotsProps {
  total: number
  current: number
  onNavigate: (i: number) => void
}

export default function PageDots({ total, current, onNavigate }: PageDotsProps) {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {Array.from({ length: total }, (_, i) => (
        <motion.button
          key={i}
          onClick={() => onNavigate(i)}
          className="rounded-full cursor-pointer transition-all duration-500"
          animate={{
            width: current === i ? 8 : 6,
            height: current === i ? 24 : 6,
            backgroundColor:
              current === i ? 'rgba(198,150,110,0.9)' : 'rgba(198,150,110,0.3)',
          }}
          whileHover={{ scale: 1.3 }}
          style={{ border: 'none', outline: 'none' }}
        />
      ))}
    </div>
  )
}
