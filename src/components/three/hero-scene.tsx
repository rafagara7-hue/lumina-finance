'use client';

import { Suspense } from 'react';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

/**
 * Lightweight React Three Fiber hero. A floating, slowly distorting orb that
 * gives the landing page depth without shipping heavy assets. Loaded client-only
 * via `next/dynamic` (`ssr: false`) from the marketing page.
 */
function Orb() {
  return (
    <Float speed={1.4} rotationIntensity={1.1} floatIntensity={1.6}>
      <mesh castShadow>
        <icosahedronGeometry args={[1.6, 12]} />
        <MeshDistortMaterial
          color="#10b8a0"
          emissive="#0b3b39"
          roughness={0.25}
          metalness={0.6}
          distort={0.4}
          speed={1.6}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} />
      <pointLight position={[-6, -4, -4]} intensity={0.8} color="#3b82f6" />
      <Suspense fallback={null}>
        <Orb />
      </Suspense>
    </Canvas>
  );
}
