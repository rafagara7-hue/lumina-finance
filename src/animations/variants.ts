import type { Variants } from 'framer-motion';

import { transitions } from './transitions';

/** Reusable Framer Motion variants — keep motion consistent across the product. */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.smooth },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: transitions.smooth },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: transitions.smooth },
};

/** Parent container that staggers its children on enter. */
export const staggerContainer = (stagger = 0.08, delayChildren = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});
