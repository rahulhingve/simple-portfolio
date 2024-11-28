'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-3 py-2 border bg-gray-300 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-3 py-2 border bg-gray-300 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
              <textarea id="message" name="message" rows={4} required className="w-full px-3 py-2 border bg-gray-300 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">Send Message</button>
          </motion.form>
        </div>
        <motion.div
          className="mt-12 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <FaLinkedin className="text-3xl" />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
            <FaGithub className="text-3xl" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400 transition-colors">
            <FaTwitter className="text-3xl" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

