'use client';

import { motion } from 'framer-motion';
import { Layout, Server, Code, MonitorSmartphone, Search, Layers } from 'lucide-react';

export default function Services() {
  const services = [
  {
    icon: <Layers size={32} className="text-blue-600" />,
    title: 'Full Stack Development',
    description:
      'Building complete web applications from frontend to backend using modern stacks like React, Next.js, Node.js, and MongoDB.',
  },
  {
    icon: <Layout size={32} className="text-purple-600" />,
    title: 'Frontend Development',
    description:
      'Creating fast, accessible, and interactive user interfaces using React, Next.js, TypeScript, and Tailwind CSS.',
  },
  {
    icon: <Server size={32} className="text-red-600" />,
    title: 'Backend Development',
    description:
      'Developing secure, scalable RESTful APIs and backend logic using Node.js, Express, and MongoDB.',
  },
  {
    icon: <MonitorSmartphone size={32} className="text-orange-600" />,
    title: 'Responsive Design',
    description:
      'Ensuring websites are fully responsive and optimized for all screen sizes and devices.',
  },
  {
    icon: <Search size={32} className="text-green-600" />,
    title: 'SEO Optimization',
    description:
      'Improving website visibility and search rankings through performance and accessibility best practices.',
  },
  {
    icon: <Code size={32} className="text-gray-600" />,
    title: 'Clean Code & Performance',
    description:
      'Writing maintainable, scalable, and optimized code that follows modern development standards and design patterns.',
  },
];
  return (
    <section
      id="services"
      className=" px-6 md:px-20 py-20  flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          What I Do
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white shadow-lg p-6 rounded-lg text-left border-t-4 border-purple-800"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
