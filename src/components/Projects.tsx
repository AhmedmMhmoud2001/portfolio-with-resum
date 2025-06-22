'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Kemet Backend',
      image: '/projects/Kemet.png',
      github: 'https://github.com/ahmed/kemet-backend',
      demo: 'https://kemet-backend.vercel.app',
    },
    {
      title: 'Personal Portfolio',
      image: '/projects/dayma.png',
      description: 'My personal website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.',
      github: 'https://github.com/ahmed/portfolio',
      demo: '/',
    },
    {
      title: 'Personal Portfolio',
      image: '/projects/food-eat.png',
      description: 'My personal website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.',
      github: 'https://github.com/ahmed/portfolio',
      demo: '/',
    },
    {
      title: 'Personal Portfolio',
      image: '/projects/fresh-fruit.png',
      description: 'My personal website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.',
      github: 'https://github.com/ahmed/portfolio',
      demo: '/',
    },
    {
      title: 'Personal Portfolio',
      image: '/projects/kaspes.png',
      description: 'My personal website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.',
      github: 'https://github.com/ahmed/portfolio',
      demo: '/',
    },
    {
      title: 'Personal Portfolio',
      image: '/projects/shopsy-hazel.png',
      description: 'My personal website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.',
      github: 'https://github.com/ahmed/portfolio',
      demo: '/',
    },
    {
      title: 'Personal Portfolio',
      image: '/projects/type-n-speak.png',
      description: 'My personal website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.',
      github: 'https://github.com/ahmed/portfolio',
      demo: '/',
    },
    {
      title: 'watched',
      image: '/projects/watchn.png',
      description: 'My personal website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.',
      github: 'https://github.com/AhmedmMhmoud2001/E-Commerce',
      demo: 'https://watched-delta.vercel.app/',
    },
    {
      title: 'chat-cat',
      image: '/projects/chat-cat.png',
      description: 'My personal website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.',
      github: 'https://github.com/AhmedmMhmoud2001/E-Commerce',
      demo: 'https://react-chat-cat.vercel.app/',
    },
    {
      title: 'shop',
      image: '/projects/shop.png',
      description: 'My personal website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.',
      github: 'https://github.com/AhmedmMhmoud2001/E-Commerce',
      demo: 'https://new-pro-swart.vercel.app/',
    },
    {
      title: 'udemy',
      image: '/projects/udemy.png',
      description: 'My personal website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.',
      github: 'https://github.com/AhmedmMhmoud2001/udemy',
      demo: 'https://udemy-one.vercel.app/',
    },
    // ... المشاريع الأخرى
  ];

  return (
    <section
      id="projects"
      className="px-6 md:px-20 py-20 bg-gray-50 flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-gray-50 shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-56 object-cover"
                priority={index === 0} // فقط أول صورة تعطيها priority
              />

              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-700 font-medium px-4 py-2 rounded hover:bg-gray-100 flex items-center gap-1"
                  >
                    <Github size={18} /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-700 font-medium px-4 py-2 rounded hover:bg-gray-100 flex items-center gap-1"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
