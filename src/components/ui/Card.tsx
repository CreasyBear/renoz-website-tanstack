import { type ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  variant?: 'default' | 'dark' | 'cream' | 'glass'
  className?: string
  hover?: boolean
}

export default function Card({
  children,
  variant = 'default',
  className = '',
  hover = false,
  ...props
}: CardProps) {
  const variantClasses = {
    default: 'bg-[var(--white)] border border-gray-100 shadow-soft',
    dark: 'bg-[var(--black)] text-[var(--text-on-dark)] border border-gray-800 shadow-2xl',
    cream: 'bg-[var(--cream)] border border-[#EBE5DE] shadow-sm',
    glass: 'glass',
  }

  return (
    <motion.div
      className={cn(
        'rounded-[32px] p-8 transition-all duration-500 ease-out',
        variantClasses[variant],
        hover && 'hover:shadow-lg hover:-translate-y-1 cursor-pointer hover:border-renoz-green/20',
        className
      )}
      initial={hover ? { opacity: 0, y: 30 } : undefined}
      whileInView={hover ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
