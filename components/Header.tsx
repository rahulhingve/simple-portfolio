'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-gray-800 shadow-md' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className='hidden lg:block '>
          <Link href="/" className="text-2xl font-bold ">
            Ashutosh Urmaliya
          </Link>
        </div>

        <ul className="flex space-x-6">
          <li><Link href="#about" className="hover:text-gray-600 transition-colors">About</Link></li>
          <li><Link href="#projects" className="hover:text-gray-600 transition-colors">Projects</Link></li>
          <li><Link href="#resume" className="hover:text-gray-600 transition-colors">Resume</Link></li>
          <li><Link href="#contact" className="hover:text-gray-600 transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </motion.header>
  )
}

