'use client';

import Link from 'next/link';
import Reveal from './Reveal';
import { services } from './serviceData';

export default function Services() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-24">
      <div className="flex flex-col">
        {services.map((s, i) => (
          <Reveal
            key={s.slug}
            className="grid md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 border-b border-paper/15 first:pt-0"
          >
            <div className="md:col-span-1 flex md:block items-center gap-4">
              <span className="font-archivo text-sun text-2xl md:text-3xl">
                0{i + 1}
              </span>
            </div>

            <div className="md:col-span-4">
              <div className="text-sun mb-5">{s.icon}</div>
              <h2 className="font-archivo uppercase text-3xl md:text-4xl leading-none text-paper">
                {s.title}
              </h2>
            </div>

            <div className="md:col-span-7">
              <p className="text-paper/85 text-lg leading-relaxed">{s.long}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-3 text-paper/80 text-sm md:text-base"
                  >
                    <span className="h-2 w-2 rounded-full bg-sun shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 md:mt-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-3xl bg-paper text-navy p-8 md:p-12">
          <p className="font-archivo uppercase text-2xl md:text-3xl leading-tight max-w-xl text-navy">
            Have a project that needs a bit of everything?
          </p>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center justify-center rounded-full bg-royal text-paper font-bold uppercase tracking-wide px-8 py-4 hover:bg-navy transition-colors duration-300"
          >
            Start a Project
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
