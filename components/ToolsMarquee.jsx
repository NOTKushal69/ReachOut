'use client';

import Marquee from './Marquee';

const tools = [
  'Google Ads',
  'Meta Ads',
  'HubSpot',
  'Zapier',
  'Webflow',
  'Google Analytics',
];
const tripledTools = [...tools, ...tools, ...tools];

export default function ToolsMarquee() {
  return (
    <section className="py-20 md:py-28 border-y border-paper/15">
      <Marquee speed={40} className="w-full">
        {tripledTools.map((tool, i) => (
          <div
            key={`${tool}-${i}`}
            className="flex items-center gap-4 px-10 md:px-14 shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-sun text-navy font-archivo text-sm">
              {tool
                .split(' ')
                .map((w) => w[0])
                .join('')}
            </span>
            <span className="font-archivo uppercase tracking-wide text-lg md:text-xl whitespace-nowrap text-paper">
              {tool}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
