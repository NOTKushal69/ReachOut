'use client';

import Link from 'next/link';
import Reveal from './Reveal';
import { services } from './serviceData';

export default function Capabilities({ heading = 'What We Do', withCta = false }) {
  return (
    <section id="what-we-do" className="py-24 md:py-40 px-4 md:px-6">
      <Reveal className="px-2 md:px-4 mb-10 md:mb-14">
        <h2 className="font-archivo uppercase text-4xl md:text-6xl leading-none text-paper">
          {heading}
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
        {services.map((cap, i) => (
          <Reveal
            key={cap.title}
            delay={i * 0.1}
            className="bg-paper text-navy rounded-3xl px-6 py-10 md:p-9 flex flex-col gap-4 md:gap-5"
          >
            <div className="text-royal">{cap.icon}</div>
            <h3 className="font-archivo uppercase text-lg md:text-2xl leading-tight text-navy">
              {cap.title}
            </h3>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              {cap.short}
            </p>
          </Reveal>
        ))}
      </div>

      {withCta && (
        <Reveal className="px-2 md:px-4 mt-10 md:mt-14">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full bg-sun text-navy font-bold uppercase tracking-wide px-8 py-4 hover:bg-paper transition-colors duration-300"
          >
            Explore Services
          </Link>
        </Reveal>
      )}
    </section>
  );
}
