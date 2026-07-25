'use client';

import Reveal from './Reveal';

const approach = [
  {
    k: '01',
    title: 'Direct access',
    body: 'You talk to the people actually making the work — no account managers, no telephone game.',
  },
  {
    k: '02',
    title: 'Fast turnaround',
    body: 'A tight team means fewer hand-offs and quicker rounds, without the studio-sized overhead.',
  },
  {
    k: '03',
    title: 'One consistent look',
    body: 'Design, edit, grade and grain handled together, so every deliverable feels like it belongs.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-3xl">
        <Reveal>
          <p className="font-archivo uppercase text-2xl md:text-4xl leading-snug text-paper">
            We&apos;re a tight-knit creative team obsessed with the details
            most people scroll past.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-paper/85 text-base md:text-lg leading-relaxed">
            Reach Out Creative is built around a simple idea: great content
            shouldn&apos;t take a whole studio to make. From first frame to
            final export, we handle the design, the edit, the grade and the
            grain — so every project stays sharp, personal and fast to turn
            around.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-6 text-paper/85 text-base md:text-lg leading-relaxed">
            We work across performance marketing, social media, content,
            website development and workflow automation — for brands, creators
            and businesses who care how their work looks and performs. Big
            enough to deliver, small enough to stay hands-on with every detail.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-4 md:gap-5">
        {approach.map((a, i) => (
          <Reveal
            key={a.k}
            delay={i * 0.1}
            className="bg-paper text-navy rounded-3xl p-8 md:p-9 flex flex-col gap-4"
          >
            <span className="font-archivo text-royal text-xl">{a.k}</span>
            <h3 className="font-archivo uppercase text-lg md:text-xl leading-tight text-navy">
              {a.title}
            </h3>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              {a.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
