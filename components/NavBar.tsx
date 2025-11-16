'use client';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 border-b border-white/10 bg-gray-950/80 backdrop-blur z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold tracking-wider">Sujal Rooge</div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-sm font-semibold transition-colors hover:border-white hover:text-white"
          >
            Let&apos;s Connect
          </a>
          <button
            className="md:hidden rounded-full border border-white/20 p-2 text-gray-200"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-gray-950/95 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-6 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
