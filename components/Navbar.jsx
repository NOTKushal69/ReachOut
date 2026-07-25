'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from './Logo';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <div className="sticky top-0 z-50 px-4 md:px-6 pt-4 md:pt-5">
      <header className="mx-auto max-w-6xl">
        <nav className="flex items-center justify-between gap-4 rounded-full bg-white/12 backdrop-blur-md border border-white/20 pl-4 pr-3 md:pl-6 md:pr-4 h-16 md:h-[68px] shadow-lg shadow-royal-700/20">
          <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <ul className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`uppercase text-sm tracking-wide font-semibold transition-colors duration-200 ${
                    isActive(l.href) ? 'text-sun' : 'text-paper/85 hover:text-paper'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-sun text-navy font-bold uppercase tracking-wide text-sm px-6 py-2.5 hover:bg-paper transition-colors duration-300"
          >
            Get in Touch
          </Link>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`block h-0.5 w-6 bg-paper transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-paper transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-paper transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </nav>

        {open && (
          <ul className="md:hidden mt-2 rounded-3xl bg-royal-600 border border-white/20 px-6 py-5 flex flex-col gap-4 shadow-lg">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`uppercase text-base tracking-wide font-semibold ${
                    isActive(l.href) ? 'text-sun' : 'text-paper/90'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}
