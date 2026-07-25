'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';

/**
 * Infinite horizontal marquee driven by Framer Motion.
 * Expects `children` to already contain the content duplicated 3x
 * (rendered as a single flex row) so the loop point is invisible.
 */
export default function Marquee({
  children,
  speed = 60,
  pauseOnHover = true,
  className = '',
}) {
  const x = useMotionValue(0);
  const trackRef = useRef(null);
  const paused = useRef(false);
  const offset = useRef(0);

  useAnimationFrame((_, delta) => {
    if (paused.current || !trackRef.current) return;
    const fullWidth = trackRef.current.scrollWidth / 3;
    if (!fullWidth) return;

    offset.current -= (speed * delta) / 1000;
    if (offset.current <= -fullWidth) offset.current += fullWidth;
    x.set(offset.current);
  });

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => {
        if (pauseOnHover) paused.current = true;
      }}
      onMouseLeave={() => {
        if (pauseOnHover) paused.current = false;
      }}
    >
      <motion.div
        ref={trackRef}
        style={{ x, willChange: 'transform' }}
        className="flex w-max"
      >
        {children}
      </motion.div>
    </div>
  );
}
