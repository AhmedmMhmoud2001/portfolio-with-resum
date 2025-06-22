'use client';

import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 px-6 md:px-20 py-10 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Left - Copyright */}
        <div>
          <p className="font-semibold text-lg">Ahmed Al Santawy</p>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Right - Social Links */}
        <div className="flex gap-5 flex-wrap justify-center">
          <a
            href="mailto:ahmedmahmoud2152001@gmail.com"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-600 transition"
          >
            <Mail size={18} /> Email
          </a>
          <a
            href="https://wa.me/201002265274"
            target="_blank"
            className="flex items-center gap-2 hover:text-green-600 transition"
          >
            <Phone size={18} /> WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-mahmoud-elsantawy/"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-700 transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com/AhmedmMhmoud2001"
            target="_blank"
            className="flex items-center gap-2 hover:text-black transition"
          >
            <Github size={18} /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
