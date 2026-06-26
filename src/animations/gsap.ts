import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Centralized GSAP setup. Register plugins once, guarded for SSR.
 * Use together with the `useGSAP` hook from `@gsap/react` inside client components.
 */
let registered = false;

export function registerGsap(): typeof gsap {
  if (!registered && typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return gsap;
}

export { gsap, ScrollTrigger };
