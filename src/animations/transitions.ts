import type { Transition } from 'framer-motion';

/** Shared easing curves and transition presets for a cohesive motion language. */
export const easing = {
  smooth: [0.22, 1, 0.36, 1],
  inOut: [0.65, 0, 0.35, 1],
  out: [0, 0, 0.2, 1],
} as const;

export const transitions = {
  smooth: { duration: 0.6, ease: easing.smooth } satisfies Transition,
  quick: { duration: 0.3, ease: easing.out } satisfies Transition,
  spring: { type: 'spring', stiffness: 260, damping: 28 } satisfies Transition,
} as const;
