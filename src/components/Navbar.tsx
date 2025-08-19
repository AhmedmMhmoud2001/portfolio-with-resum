'use client';

import Link from 'next/link';
import { Menu, X, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: 'Hero', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`w-full px-6 md:px-20 py-4 flex justify-between items-center fixed top-0 z-50 ${
        scrolled
          ? 'bg-white shadow-md text-gray-800'
          : 'bg-transparent text-white'
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className={`text-3xl font-bold ${
          scrolled ? 'text-purple-800' : 'text-white'
        }`}
      >
        Al Santawy
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-8 font-bold text-xl">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative group hover:text-purple-800 transition"
          >
            {link.label}
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-800 transition-all duration-500 group-hover:w-full"></span>
          </Link>
        ))}

        {/* CV Button */}
        <a
          href="/Resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-purple-800 text-white px-4 py-1.5 rounded transition-transform duration-300 hover:scale-105 hover:bg-purple-900 "
        >
          <Download size={18} /> Resume
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className={`md:hidden ${
          scrolled ? 'text-gray-800' : 'bg-transparent text-white'
        }`}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className={`absolute top-full left-0 w-full flex flex-col items-center space-y-4 py-6 md:hidden transition-all ${
            scrolled ? 'bg-white shadow-md text-gray-800' : 'bg-white text-gray-800'
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-lg group"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-800 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
          <a
            href="/Resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-purple-800 text-white px-4 py-1.5 rounded hover:bg-purple-900 transition"
          >
            <Download size={18} /> Resume
          </a>
        </div>
      )}
    </motion.nav>
  );
}
