'use client';

import Link from 'next/link';
import Logo from './Logo';

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/reachoutcreatives/' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1BgZjsf399/' },
  { label: 'WhatsApp', href: 'https://wa.me/9779867547338' },
];

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="mt-16 md:mt-24 bg-navy rounded-t-[2.5rem] px-6 md:px-10 py-14 md:py-16">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        <div className="flex flex-col gap-5 max-w-sm">
          <Logo size="lg" />
          <Link
            href="/contact"
            className="uppercase text-sm tracking-wide font-semibold text-paper/80 hover:text-sun transition-colors duration-300"
          >
            Let&apos;s create something →
          </Link>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-8">
          <nav className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="uppercase text-sm tracking-wide text-paper/65 hover:text-paper transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase text-sm tracking-wide text-paper/65 hover:text-sun transition-colors duration-300"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="text-paper/45 text-xs mt-12">
        © {new Date().getFullYear()} Reach Out Creative. All rights reserved.
      </p>
    </footer>
  );
}
