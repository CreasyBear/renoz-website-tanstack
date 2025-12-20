import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from './Image'
import { Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DayNightSliderProps {
  className?: string
}

export default function DayNightSlider({ className }: DayNightSliderProps) {
  const [mode, setMode] = useState<'day' | 'night'>('night')

  return (
    <div className={cn("relative w-full aspect-[4/3] md:aspect-video rounded-[32px] overflow-hidden shadow-2xl bg-gray-900 group select-none", className)}>
      {/* 1. Day Layer (Always visible at bottom) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stock/corner-street-house.webp"
          alt="Daytime Solar Production"
          className="w-full h-full object-cover"
          width={1200}
          height={675}
        />
        {/* Day Overlay/Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent mix-blend-overlay" />
      </div>

      {/* 2. Night Layer (Fades in on top) */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 1 }}
        animate={{ opacity: mode === 'night' ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <Image
          src="/images/stock/corner-street-house-lights-on.webp"
          alt="Nighttime Battery Power"
          className="w-full h-full object-cover"
          width={1200}
          height={675}
        />
        {/* Night Overlay/Atmosphere */}
        <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* 3. Content Overlay (Text & Value Prop) */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 md:p-12 pointer-events-none">
        {/* Header Content */}
        <div className="text-center">
          <motion.h3
            className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-2"
            key={mode}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {mode === 'day' ? 'Generate & Store.' : 'Power through the night.'}
          </motion.h3>
          <motion.p
             className="text-lg md:text-xl text-white/90 font-medium drop-shadow-md"
             key={`sub-${mode}`}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.1 }}
          >
             {mode === 'day'
               ? "Capture free energy from the sun."
               : "Use your stored energy when the sun goes down."}
          </motion.p>
        </div>
      </div>

      {/* 4. Interactive Toggle Control */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
        <div className="flex p-1.5 bg-black/40 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl">
          {/* Morning Button */}
          <button
            onClick={() => setMode('day')}
            className={cn(
              "relative px-8 py-3 rounded-full flex items-center gap-3 transition-all duration-500",
              mode === 'day'
                ? "bg-white text-black shadow-lg scale-105"
                : "text-white/70 hover:text-white hover:bg-white/10"
            )}
          >
            <Sun className={cn("w-5 h-5", mode === 'day' ? "text-orange-500" : "text-white/70")} />
            <div className="text-left">
              <div className="text-sm font-bold leading-none mb-0.5">Day</div>
              <div className="text-[10px] font-medium opacity-80 uppercase tracking-wider">Charge Battery</div>
            </div>
          </button>

          {/* Night Button */}
          <button
            onClick={() => setMode('night')}
            className={cn(
              "relative px-8 py-3 rounded-full flex items-center gap-3 transition-all duration-500",
              mode === 'night'
                ? "bg-white text-black shadow-lg scale-105"
                : "text-white/70 hover:text-white hover:bg-white/10"
            )}
          >
            <Moon className={cn("w-5 h-5", mode === 'night' ? "text-blue-600" : "text-white/70")} />
            <div className="text-left">
              <div className="text-sm font-bold leading-none mb-0.5">Night</div>
              <div className="text-[10px] font-medium opacity-80 uppercase tracking-wider">Discharge</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

