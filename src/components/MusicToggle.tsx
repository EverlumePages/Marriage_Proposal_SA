import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {})
    }
    setPlaying(!playing)
  }

  return (
    <>
      {/* Using a freely available romantic piano piece from a CDN */}
      <audio ref={audioRef} loop>
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
          type="audio/mpeg"
        />
      </audio>
      <motion.button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full glass-card flex items-center justify-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ border: '1px solid rgba(198,150,110,0.3)', color: '#c6966e' }}
        title={playing ? 'Mute music' : 'Play music'}
      >
        {playing ? (
          <motion.span
            key="playing"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-base"
          >
            ♫
          </motion.span>
        ) : (
          <motion.span
            key="muted"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-base opacity-50"
          >
            ♪
          </motion.span>
        )}
      </motion.button>
    </>
  )
}
