'use client';

import Marquee from './Marquee';

const images = Array.from({ length: 12 }, (_, i) => `/images/portfolio${i + 1}.jpg`);
const tripledImages = [...images, ...images, ...images];

export default function ImageStrip() {
  return (
    <section className="mt-24 md:mt-40">
      <Marquee speed={50} className="w-full">
        {tripledImages.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative w-[240px] h-[320px] sm:w-[300px] sm:h-[400px] shrink-0 mr-4 rounded-3xl overflow-hidden bg-royal-700"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt="Portfolio piece"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
