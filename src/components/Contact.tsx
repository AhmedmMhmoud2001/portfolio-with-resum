'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  return (
    <section
      id="contact"
      className="px-6 md:px-20 py-20 bg-white flex flex-col justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 text-center mb-10">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-10 h-full">
  {/* Form */}
  <div className="flex-1 bg-white p-8 rounded-lg shadow-md h-full flex flex-col justify-between">
    {!submitted ? (
      <form
        action="https://formsubmit.co/ahmedmahmoud2152001@gmail.com"
        method="POST"
        onSubmit={(e) => {
          if (!/\S+@\S+\.\S+/.test(email)) {
            e.preventDefault();
            setError('Please enter a valid email address');
            return;
          }
          setError('');
          setSubmitted(true);
        }}
        className="space-y-6 flex flex-col flex-grow justify-between"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://localhost:3000/#contact" />

        {/* Name */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        {/* Message */}
        <div className="flex-grow">
          <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-purple-900 text-white py-3 px-6 rounded-md hover:bg-purple-900 transition shadow"
        >
          Send Message
        </button>
      </form>
    ) : (
      <div className="text-green-600 text-xl text-center mt-6">
        ✅ Thank you! Your message has been sent successfully.
      </div>
    )}
  </div>

  {/* Google Map */}
  <div className="flex-1 aspect-[16/9] rounded-lg overflow-hidden shadow-md">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.202824450103!2d31.235711!3d30.044420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fc181f8fdcf%3A0x5224b35d5f8abf3f!2z2KfZhNin2YXYp9mF!5e0!3m2!1sen!2seg!4v1718820000000"
    className="w-full h-full"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

</div>

      </motion.div>
    </section>
  );
}
