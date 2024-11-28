'use client'

import { motion } from 'framer-motion'
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'

export default function About() {
  const skills = [
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'TypeScript', icon: SiTypescript },
  ]

  return (
    <section id="about" className="py-20 bg-gray-500">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg mb-12 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm a passionate web developer with expertise in modern frontend technologies. I love creating beautiful, responsive, and user-friendly websites that deliver exceptional user experiences.
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <skill.icon className="text-5xl mb-2" />
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

