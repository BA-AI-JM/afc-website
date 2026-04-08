'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/fighters', label: 'Fighters' },
  { href: '/championships', label: 'Championships' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-afc-black/90 backdrop-blur-md border-b border-afc-border">
      <div className="section-padding">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logos/AFC-WHITE.png"
              alt="Almighty Fighting Championship"
              width={180}
              height={50}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-widest text-afc-muted hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/events" className="btn-primary text-xs">
              View Events
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="section-padding pb-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold uppercase tracking-widest text-afc-muted hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/events" className="btn-primary text-center mt-2" onClick={() => setIsOpen(false)}>
            View Events
          </Link>
        </div>
      </div>
    </nav>
  );
}
