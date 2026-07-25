'use client';

import Reveal from './Reveal';
import ContactForm from './ContactForm';

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/reachoutcreatives/' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1BgZjsf399/' },
  { label: 'WhatsApp', href: 'https://wa.me/9779867547338' },
];

export default function Contact() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-24">
      <Reveal>
        <h2 className="font-archivo uppercase text-5xl sm:text-6xl md:text-8xl leading-[0.9] text-paper">
          Let&apos;s Create
          <br />
          <span className="text-sun">Something</span>
        </h2>
      </Reveal>

      <div className="mt-12 md:mt-20 grid md:grid-cols-2 gap-14 md:gap-20">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-10">
          <div>
            <span className="uppercase text-xs tracking-[0.2em] text-sun font-bold">
              Email
            </span>
            <a
              href="mailto:hello@reachoutcreative.com"
              className="mt-3 block text-xl md:text-2xl font-semibold border-b border-paper/30 w-fit hover:border-sun hover:text-sun transition-colors duration-300"
            >
              hello@reachoutcreative.com
            </a>
          </div>

          <div>
            <span className="uppercase text-xs tracking-[0.2em] text-sun font-bold">
              Elsewhere
            </span>
            <div className="mt-3 flex flex-col gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-paper/85 hover:text-sun transition-colors duration-300 w-fit"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <p className="text-paper/75 text-base leading-relaxed max-w-sm">
            Tell us what you&apos;re making and we&apos;ll get back within a day
            or two. No project too small, no idea too rough.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
