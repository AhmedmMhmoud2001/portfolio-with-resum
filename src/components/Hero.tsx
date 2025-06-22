'use client';

import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[url(/header.jpg)] bg-cover bg-center bg-no-repeat px-6 md:px-20 py-24 flex items-center"
    >
      <motion.div 
      initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-3xl mx-auto text-center md:text-left">
        {/* العنوان الرئيسي */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4 leading-tight">
          Hi! I am <br />
          <span className="text-gray-900">Ahmed Al Santawy</span>
        </h1>

        {/* العنوان المتحرك */}
        <div className="text-lg md:text-xl font-mono text-purple-800 px-4 py-3 rounded inline-block mb-6 ">
          &lt;code&gt;{' '}
          <Typewriter
            words={[
              'Full Stack Developer | React & Node.js',
              'Frontend Developer',
              'Backend Developer | Node.js & APIs',
              'Modern Frontend Specialist',
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />{' '}
          &lt;/code&gt;
        </div>

        {/* الوصف */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          I build fast, modern, and fully responsive websites with clean code,
          optimized for performance, accessibility, and SEO — combining
          intuitive UI/UX with scalable backend solutions.
        </p>

        {/* الأزرار */}
        <div className=" mb-6">
          <a
            href="#projects"
            className="border border-purple-800 text-fuchsia-50 px-6 py-3 rounded bg-purple-800 hover:bg-purple-900 transition"
          >
            View Projects
          </a>
        </div>

      </motion.div>
    </section>
  );
}
