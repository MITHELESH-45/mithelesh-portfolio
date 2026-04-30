import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';
import { useInView } from 'react-intersection-observer';

const ParticleCloud = () => {
  const ref = useRef<any>(null);
  // Generate random spherical positions
  const sphere = useMemo(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }), []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f0ff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
};

export const BackgroundParticles: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // pause when out of view
    threshold: 0,
    rootMargin: "500px 0px 500px 0px" // Keep rendering a bit outside to prevent jarring stops
  });

  return (
    <div ref={ref} className="fixed inset-0 z-[-1] bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background z-[-1]" />
      {/* 
        Optimization: We conditionally render the canvas contents based on inView.
        For a truly global canvas, we just pause the render loop. R3F suspends rendering if canvas is hidden,
        but unmounting `ParticleCloud` is more explicit.
      */}
      {inView && (
        <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
          <ParticleCloud />
        </Canvas>
      )}
    </div>
  );
};
