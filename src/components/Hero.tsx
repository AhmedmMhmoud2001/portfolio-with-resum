'use client';

import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[url(/header.jpg)] bg-cover bg-center bg-no-repeat 
                 px-6 md:px-20 py-24 md:py-28 
                 flex flex-col-reverse md:flex-row items-center"
    >
      {/* النصوص */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full md:w-2/3 text-center md:text-left flex-1"
      >
        {/* العنوان الرئيسي */}
        <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-gray-700 mb-6 leading-tight">
          Hi! I am <br />
          <span className="text-gray-900">Ahmed Al Santawy</span>
        </h1>

        {/* العنوان المتحرك */}
        <div className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl font-mono text-purple-800 rounded inline-block mb-8 font-semibold">
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
        <p className="text-gray-500 mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
          I build fast, modern, and fully responsive websites with clean code,
          optimized for performance, accessibility, and SEO — combining
          intuitive UI/UX with scalable backend solutions.
        </p>

        {/* الأزرار */}
        <div className="my-6">
          <a
            href="#projects"
            className="border border-purple-800 text-white px-6 py-3 rounded bg-purple-800 
                       hover:bg-purple-900 transition-transform hover:scale-105 inline-block mr-4 font-bold"
          >
            View Projects
          </a>
        </div>
      </motion.div>

      {/* الصورة */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0"
      >
        <div className="custom-shape-container">
          <div className="custom-shape-inner">
            <Image
              src="/profile.jpg"
              alt="Ahmed Mahmoud"
              fill
              sizes="(max-width: 640px) 240px,
         (max-width: 1024px) 352px,
         400px"
              className="object-cover custom-shape-img transition-transform duration-200 hover:scale-105 "
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
