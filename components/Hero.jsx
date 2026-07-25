'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 w-[420px] h-[420px] rounded-full" style={{ background: '#2461E6' }} />
        <div className="absolute left-24 bottom-0 w-72 h-72 rounded-full" style={{ background: '#4C86FF' }} />
        <div className="absolute -right-16 top-24 w-[360px] h-[360px] rounded-full" style={{ background: '#2461E6' }} />
        <div className="absolute right-40 bottom-8 w-64 h-64 rounded-full" style={{ background: '#4C86FF', opacity: 0.7 }} />
      </div>

      {/* Arrow badge (top-right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        className="absolute right-6 md:right-12 top-6 md:top-10 z-10 flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-sun ring-4 ring-sun/40"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-11 md:h-11" fill="none" stroke="#081A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 7 7 17" />
          <path d="M16 17H7V8" />
        </svg>
      </motion.div>

      <div className="relative px-6 md:px-10 pt-16 pb-12 md:pt-24 md:pb-20 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-display font-extrabold leading-[0.9] tracking-tight"
        >
          <span className="block text-sun text-[19vw] md:text-[15vw] lg:text-[11rem]">
            Reachout
          </span>
          <span className="block text-paper -mt-[6vw] md:-mt-[5vw] lg:-mt-16 text-[11vw] md:text-[8vw] lg:text-8xl">
            Agency.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="font-display font-bold uppercase mt-6 md:mt-8 max-w-4xl text-3xl md:text-5xl leading-[1.05]"
        >
          <span className="text-paper">Empowering </span>
          <span className="text-sun">Brands Through </span>
          <span className="text-paper">Content, </span>
          <span className="text-sun">Strategy &amp; Innovation.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full bg-sun text-navy font-bold uppercase tracking-wide px-8 py-4 hover:bg-paper transition-colors duration-300"
          >
            See Portfolio
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-paper/70 text-paper font-bold uppercase tracking-wide px-8 py-4 hover:bg-paper hover:text-navy transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>

      {/* Showreel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        className="px-4 md:px-6 pb-2"
      >
        <video
          className="w-full h-[45vh] md:h-[70vh] object-cover rounded-3xl bg-royal-700"
          poster="/videos/showreel-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/showreel.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </section>
  );
}
