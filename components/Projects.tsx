'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of Project 1',
    image: '/project1.jpg',
    link: 'https://project1.com',
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2',
    image: '/project2.jpg',
    link: 'https://project2.com',
  },
  {
    title: 'Project 3',
    description: 'A brief description of Project 3',
    image: '/project3.jpg',
    link: 'https://project3.com',
  },
  {
    title: 'Project 4',
    description: 'A brief description of Project 4',
    image: '/project4.jpg',
    link: 'https://project4.com',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-400 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={225}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Project
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

