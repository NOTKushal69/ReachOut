'use client';

import Link from 'next/link';
import Reveal from './Reveal';

const allProjects = Array.from({ length: 6 }, (_, i) => ({
  src: `/videos/project${i + 1}.mp4`,
  poster: `/videos/project${i + 1}-poster.jpg`,
  title: `Project ${i + 1}`,
}));

export default function VideoGrid({
  limit,
  title = 'See Our Best Work',
  showViewAll = false,
}) {
  const projects = limit ? allProjects.slice(0, limit) : allProjects;

  return (
    <section id="portfolio" className="pt-24 md:pt-40 pb-0 px-4 md:px-6">
      <Reveal className="px-2 md:px-4 mb-10 md:mb-14">
        <h2 className="font-archivo uppercase text-4xl md:text-6xl leading-none text-paper">
          {title}
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        {projects.map((project, i) => (
          <Reveal
            key={project.src}
            delay={i * 0.08}
            y={24}
            className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-royal-700 group"
          >
            <video
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              poster={project.poster}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={project.src} type="video/mp4" />
            </video>
          </Reveal>
        ))}
      </div>

      {showViewAll && (
        <Reveal className="px-2 md:px-4 mt-10 md:mt-14">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full bg-sun text-navy font-bold uppercase tracking-wide px-8 py-4 hover:bg-paper transition-colors duration-300"
          >
            View Full Portfolio
          </Link>
        </Reveal>
      )}
    </section>
  );
}
