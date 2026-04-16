import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { BufferAttribute, BufferGeometry, Points, PointsMaterial } from "three";

const particlesCount = 500;
const positions = new Float32Array(particlesCount * 3);
for (let i = 0; i < particlesCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;
}

// Particle cloud component
export default function FloatingParticles() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const pointsRef = useRef<Points>(null);

  const geometry = useMemo(() => {
    const geom = new BufferGeometry();
    geom.setAttribute("position", new BufferAttribute(positions, 3));
    return geom;
  }, []);

  const material = useMemo(() => {
    return new PointsMaterial({
      color: "#69363d",
      size: 0.05,
    });
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.002 + mousePos.x * 0.01;
      pointsRef.current.rotation.x += 0.002 + mousePos.y * 0.01;
    }
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}
