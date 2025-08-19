'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// تعريف نوع خاص للتصنيفات
type Category = 'all' | 'frontend' | 'backend' | 'fullstack';

interface Project {
  title: string;
  image: string;
  github: string;
  demo: string;
  category: Category;
}

export default function Projects() {
  const [filter, setFilter] = useState<Category>('all');

  const projects: Project[] = [
    {
      title: 'Kemet',
      image: '/projects/kemet.png',
      github: 'https://github.com/AhmedmMhmoud2001/kemet-frontend.git',
      demo: 'https://kemet-mechanical-services.vercel.app',
      category: 'fullstack',
    },
    {
      title: 'shopsy-hazel',
      image: '/projects/shopsy-hazel.png',
      github: 'https://github.com/AhmedmMhmoud2001/Shopsy.git',
      demo: 'https://shopsy-hazel.vercel.app',
      category: 'frontend',
    },
    {
      title: 'udemy',
      image: '/projects/udemy.png',
      github: 'https://github.com/AhmedmMhmoud2001/udemy',
      demo: 'https://udemy-one.vercel.app/',
      category: 'frontend',
    },
    {
      title: 'food-eat',
      image: '/projects/food-eat.png',
      github: 'https://github.com/AhmedmMhmoud2001/Food-Eat.git',
      demo: 'https://food-eat-lake.vercel.app/',
      category: 'frontend',
    },{
      title: 'fresh-fruit',
      image: '/projects/fresh-fruit.png',
      github: 'https://github.com/AhmedmMhmoud2001/Fresh-Fruit.git',
      demo: 'https://fresh-fruit-phi.vercel.app/',
      category: 'frontend',
    },
    {
      title: 'dayma',
      image: '/projects/dayma.png',
      github: 'https://github.com/AhmedmMhmoud2001/Dayma.git',
      demo: 'https://dayma.vercel.app/',
      category: 'frontend',
    }
    ,
    // {
    //   title: 'watched',
    //   image: '/projects/watchn.png',
    //   github: 'https://github.com/AhmedmMhmoud2001/E-Commerce',
    //   demo: 'https://watched-delta.vercel.app/',
    //   category: 'fullstack',
    // },
    
    {
      title: 'shop',
      image: '/projects/shop.png',
      github: 'https://github.com/AhmedmMhmoud2001/E-Commerce',
      demo: 'https://new-pro-swart.vercel.app/',
      category: 'frontend',
    },
    {
      title: 'kaspes',
      image: '/projects/kaspes.png',
      github: 'https://github.com/AhmedmMhmoud2001/Kaspes.git',
      demo: 'https://kaspes.vercel.app/',
      category: 'frontend',
    },
    {
      title: 'chat-cat',
      image: '/projects/chat-cat.png',
      github: 'https://github.com/AhmedmMhmoud2001/react-chat-cat.git',
      demo: 'https://react-chat-cat.vercel.app/',
      category: 'frontend',
    },
    {
      title: 'calculator',
      image: '/projects/calc.png',
      github: 'https://github.com/AhmedmMhmoud2001/react-calculator.git',
      demo: 'https://react-calcultor-omega.vercel.app',
      category: 'frontend',
    },
  ];

  // فلترة المشاريع
  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

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
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-8">
          My Projects
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {(['all', 'frontend', 'backend', 'fullstack'] as Category[]).map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded font-semibold transition ${
                  filter === cat
                    ? 'bg-purple-800 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat === 'all'
                  ? 'All'
                  : cat === 'frontend'
                  ? 'Frontend'
                  : cat === 'backend'
                  ? 'Backend'
                  : 'Full Stack'}
              </button>
            )
          )}
        </div>

        {/* المشاريع */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
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
                priority={index === 0}
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
