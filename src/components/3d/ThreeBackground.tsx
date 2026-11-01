'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Deterministic pseudo-random number generator to ensure render purity
function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function AtmosphericField() {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const count = 1800;
    const posArray = new Float32Array(count * 3);
    const colArray = new Float32Array(count * 3);

    // Clean modern developer starfield palette
    const palette = [
      [1.0, 1.0, 1.0],     // crisp white
      [0.98, 0.8, 0.08],   // subtle amber gold
      [0.85, 0.85, 0.9],   // light silver
      [0.6, 0.65, 0.75],   // slate silver
    ];

    for (let i = 0; i < count; i++) {
      posArray[i * 3] = (pseudoRandom(i * 3 + 1) - 0.5) * 35;
      posArray[i * 3 + 1] = (pseudoRandom(i * 3 + 2) - 0.5) * 25;
      posArray[i * 3 + 2] = (pseudoRandom(i * 3 + 3) - 0.5) * 20 - 5;

      const c = palette[Math.floor(pseudoRandom(i * 3 + 4) * palette.length)];
      colArray[i * 3] = c[0];
      colArray[i * 3 + 1] = c[1];
      colArray[i * 3 + 2] = c[2];
    }
    return [posArray, colArray];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.elapsedTime;
    pointsRef.current.rotation.y = t * 0.015;
    pointsRef.current.rotation.x = Math.sin(t * 0.008) * 0.05;
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colors} stride={3} frustumCulled>
      <PointMaterial
        transparent
        vertexColors
        size={0.045}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.65}
      />
    </Points>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ position: 'absolute', inset: 0 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
      >
        <AtmosphericField />
      </Canvas>
    </div>
  );
}
