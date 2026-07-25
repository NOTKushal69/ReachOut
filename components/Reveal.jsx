'use client';

import { motion } from 'framer-motion';

/**
 * Scroll-triggered fade + upward slide, used across all major sections.
 */
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 32,
  duration = 0.7,
  className = '',
  once = true,
  amount = 0.2,
}) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
