'use client';

import Marquee from './Marquee';

const TAGLINE = 'Trend Moves Fast, So Do We';
const items = Array.from({ length: 8 }, () => TAGLINE);
const tripledItems = [...items, ...items, ...items];

function Band({ textClass }) {
  return (
    <Marquee speed={65} pauseOnHover={false} scrollBoost className="w-full">
      {tripledItems.map((text, i) => (
        <span
          key={i}
          className={`font-archivo uppercase ${textClass} text-2xl md:text-4xl whitespace-nowrap px-6 flex items-center gap-6`}
        >
          {text} <span aria-hidden="true">✦</span>
        </span>
      ))}
    </Marquee>
  );
}

export default function DiagonalMarquee() {
  return (
    <section className="relative my-24 md:my-32 h-[220px] md:h-[300px] overflow-hidden">
      {/* White band — crosses behind */}
      <div className="absolute top-1/2 left-1/2 w-[130%] -translate-x-1/2 -translate-y-1/2 rotate-[4deg] bg-paper py-4 md:py-6 z-10 shadow-xl">
        <Band textClass="text-navy" />
      </div>

      {/* Yellow band — crosses in front */}
      <div className="absolute top-1/2 left-1/2 w-[130%] -translate-x-1/2 -translate-y-1/2 -rotate-[4deg] bg-sun py-4 md:py-6 z-20 shadow-xl">
        <Band textClass="text-navy" />
      </div>
    </section>
  );
}
