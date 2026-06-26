'use client';

import dynamic from 'next/dynamic';

// React Three Fiber must run client-side only.
const HeroScene = dynamic(() => import('@/components/three/hero-scene'), {
  ssr: false,
  loading: () => null,
});

export function HeroCanvas({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <HeroScene />
    </div>
  );
}
