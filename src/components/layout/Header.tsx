import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import Image from '../ui/Image'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/homeowners', label: 'Homeowners' },
    { to: '/installers', label: 'Installers' },
    { to: '/products', label: 'Products' },
    { to: '/resources', label: 'Resources' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'glass-dark py-3 shadow-lg'
            : 'bg-transparent py-5 bg-gradient-to-b from-black/80 to-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <Image
                src="/images/optimized/logo-white-natural.webp"
                fallback="/images/optimized/logo-white-natural.png"
                alt="RENOZ Energy"
                width={160}
                height={40}
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                fetchPriority="high"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium text-white/90 hover:text-[var(--renoz-green)] transition-colors relative group"
                  activeProps={{
                    className: '!text-[var(--renoz-green)]',
                  }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--renoz-green)] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-[var(--black)] text-[var(--text-on-dark)] shadow-2xl z-50 flex flex-col border-l border-white/10"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Image
                  src="/images/optimized/logo-white-natural.webp"
                  fallback="/images/optimized/logo-white-natural.png"
                  alt="RENOZ Energy"
                  width={128}
                  height={32}
                  className="h-8 w-auto"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1 p-6 overflow-y-auto">
                <ul className="space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        to={link.to}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all active:scale-95"
                        activeProps={{
                          className:
                            'bg-[var(--renoz-green)] hover:bg-[var(--renoz-green-dark)] text-white shadow-lg',
                        }}
                      >
                        <span className="font-medium text-lg">{link.label}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="p-6 border-t border-white/10">
                <p className="text-sm text-gray-400 text-center">
                  © 2025 RENOZ Energy
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
