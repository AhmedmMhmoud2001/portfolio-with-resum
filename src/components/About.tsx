'use client';

import { motion } from 'framer-motion';
import {Download } from 'lucide-react';
import Image from 'next/image';
export default function About() {
  

  const skills = [
  // Frontend
  'HTML5',
  'CSS3',
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Framer Motion',
  'Next Themes',
  'Next Intl',

  // Backend
  'Node.js',
  'Express.js',
  'MongoDB',
  'Mongoose',
  'REST APIs',
  'JWT',

  // Tools & UI
  'Git',
  'GitHub',
  // 'Figma',
  'Lucide Icons',
  'Google Fonts',
  'Postman',
  'VS Code',

  // Workflow & Deployment
  'Vercel',
  'ESLint',
  // 'Prettier',
  // 'CI/CD',
  'Responsive Design',
  'SEO Optimization',
];


  return (
    <section
      id="about"
      className=" px-6 md:px-20 py-16 bg-gray-50 flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-12 text-center">
          About Me
        </h2>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-12 mb-12">
          {/* Left: Bio */}
          <div className="flex-1 text-gray-700 text-lg leading-relaxed">
            <p className="mb-3">
              👋 I’m <span className="text-purple-800 font-semibold">Ahmed Al Santawy</span>, a passionate <span className="text-purple-800 font-semibold">Full Stack Web Developer</span> focused on building high-quality, responsive, and scalable web applications.
            </p>
            <p className="mb-3">
              I specialize in modern technologies like Next.js, React, TypeScript, and Tailwind CSS, and I take pride in writing clean, maintainable code that solves real-world problems.
            </p>
            <p className="mb-3">
              With a strong eye for detail and a deep understanding of user experience, I help teams and clients bring their digital ideas to life — fast, efficient, and beautiful.        
                </p>
                <p className="mb-5">
                 🧠 Always learning. 💻 Always building. 🔥 Always improving.
                </p>
            <a
          href="/Resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-purple-900 text-white px-4 py-1.5 rounded hover:bg-purple-900 transition"
        > 
        <Download size={18} /> Resume
        </a>
          </div>

          {/* Right: Stats */}
          {/* <div className="w-[350px] h-[400px] rounded-2xl bg-purple-800 from-purple-950 to-purple-500 p-1 shadow-xl">
          <Image
            src="/profile.jpg"
            alt="Ahmed Mahmoud"
            width={350}
            height={400}
            className="rounded-2xl object-cover w-full h-full"
          />
        </div> */}
        <div className="w-full max-w-[350px] aspect-[7/8] rounded-2xl bg-gradient-to-br from-purple-950 to-purple-500 p-1 shadow-xl">
  <div className="relative w-full h-full rounded-2xl overflow-hidden">
    <Image
      src="/profile.jpg"
      alt="Ahmed Mahmoud"
      fill
      className="object-cover rounded-2xl"
    />
  </div>
</div>

        </div>

        {/* Skills and Technologies */}
        <div className="mt-10 ">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Technologies & Tools I Use:
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
