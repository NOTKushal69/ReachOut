import Reveal from './Reveal';

/**
 * Consistent page title block for inner pages. Sits directly under the
 * sticky navbar and matches the homepage's editorial type treatment.
 */
export default function PageHeader({ eyebrow, title, children }) {
  return (
    <header className="px-6 md:px-10 pt-12 md:pt-16 pb-10 md:pb-16 border-b border-paper/15">
      {eyebrow && (
        <Reveal>
          <span className="block text-sun uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-4">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h1 className="font-archivo uppercase text-5xl sm:text-6xl md:text-7xl leading-[0.9] text-paper">
          {title}
        </h1>
      </Reveal>
      {children && (
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-2xl text-paper/85 text-lg md:text-xl leading-relaxed">
            {children}
          </p>
        </Reveal>
      )}
    </header>
  );
}
