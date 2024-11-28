'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 text-center text-white">
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
          <div className=' flex items-center justify-center   '>
            <img src="arpit-modified.png" alt="" className='w-52' />
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Ashutosh Urmaliya
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A passionate developer creating amazing web experiences
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="#projects"
            className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

