'use client'

import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-500">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Resume
        </motion.h2>
        <motion.p
          className="text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Download my resume to learn more about my qualifications, experience, and skills.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="ASHUTOSH-URMALIYA.pdf"
            download
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}

