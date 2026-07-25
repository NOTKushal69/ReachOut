/**
 * Text wordmark used in the navbar and footer (replaces the image logo).
 * `size="lg"` is the larger footer variant.
 */
export default function Logo({ size = 'sm' }) {
  const name =
    size === 'lg' ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl';
  const tag =
    size === 'lg'
      ? 'text-[11px] md:text-xs tracking-[0.3em]'
      : 'text-[9px] md:text-[10px] tracking-[0.28em]';

  return (
    <span className="inline-flex flex-col leading-none">
      <span className={`font-display font-extrabold text-paper ${name}`}>
        Reachout<span className="text-sun">.</span>
      </span>
      <span className={`uppercase font-semibold text-paper/70 mt-1 ${tag}`}>
        Creative Agency
      </span>
    </span>
  );
}
