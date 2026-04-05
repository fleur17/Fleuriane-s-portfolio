"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

import Footer from "@/components/footer";
import Header from "@/components/header";

const particlesCount = 500;
const positions = new Float32Array(particlesCount * 3);
for (let i = 0; i < particlesCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;
}

// Particle cloud component
function FloatingParticles({
  mouseX,
  mouseY,
}: {
  mouseX: number;
  mouseY: number;
}) {
  const pointsRef = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geom;
  }, []);

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      color: "#69363d",
      size: 0.05,
    });
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.002 + mouseX * 0.01;
      pointsRef.current.rotation.x += 0.002 + mouseY * 0.01;
    }
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}

export default function NeuroportalPage() {
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

  return (
    <main className="w-full bg-white font-serif text-black">
      <Header />

      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat py-40 text-center"
        style={{ backgroundImage: "url('/drawing_bg1.svg')" }}
      >
        <h1 className="font-serif text-6xl font-bold text-black drop-shadow-lg">
          The Neuroportal
        </h1>
      </section>

      <div className="my-0 h-[2px] w-full bg-black"></div>

      {/* Product Description */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-start gap-25 md:grid-cols-2">
          <div className="ml-15 md:pr-0">
            <h2 className="mb-6 font-serif text-5xl font-bold text-black">
              Description of the project
            </h2>
            <p className="mt-10 font-serif text-lg leading-relaxed text-black">
              We are constantly thinking—our brains are always active, never
              truly at rest. This got us thinking: what if we could capture
              those brainwaves, the very essence of our thoughts, and make them
              visible? What if we could transform something so intangible into
              something we can see, touch, or even experience?
            </p>
          </div>

          <div className="mt-0 ml-50">
            <h2 className="mb-6 font-serif text-5xl font-bold text-black">
              Topics
            </h2>
            <ul className="mt-20 list-none font-serif text-lg text-black">
              <li className="mb-2 pb-2">
                <span className="inline-block w-1/2 border-b border-black pb-2">
                  Art Installation
                </span>
              </li>
              <li className="mb-2 pb-2">
                <span className="inline-block w-1/2 border-b border-black pb-2">
                  Meditative Artwork
                </span>
              </li>
              <li className="mb-2 pb-2">
                <span className="w-1/2 pb-2">
                  Inspired by the japanesse culture
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="my-14 h-[2px] w-full bg-black"></div>

      {/* First Step with Particle Animation */}
      <section className="relative mx-auto flex max-w-[1300px] flex-col items-center px-6 py-12">
        <h2 className="relative z-10 mb-6 text-3xl font-bold">First Step</h2>
        <p className="relative z-10 mb-10 max-w-[800px] text-center text-lg">
          The EEG captures the frequency that changes in our brain and
          TouchDesigner maps those signals into the moving visuals you see on
          the screen. TouchDesigner allows us to connect with the EEG headset
          and translate the brainwave patterns particularly into visual forms.
        </p>

        {/* Particle Canvas */}
        <div className="relative h-[700px] w-full">
          <Canvas
            className="absolute inset-0 z-0"
            camera={{ position: [0, 0, 10], fov: 50 }}
          >
            <FloatingParticles mouseX={mousePos.x} mouseY={mousePos.y} />
          </Canvas>
        </div>
      </section>

      <div className="my-14 h-[2px] w-full bg-black"></div>

      {/* Doors Section */}
      <section className="mx-auto flex max-w-[1300px] flex-col items-center gap-10 px-6 py-12">
        <h2 className="text-3xl font-bold">Second Step</h2>
        <p className="mb-10 max-w-[800px] text-center text-lg">
          Next, we come to the physical aspect of the project: the construction
          of the door. The door plays an important part of the project as it
          serves as a metaphorical gateway, symbolizing the transition from
          ordinary consciousness into more focused and meditative state of mind
          and also as a canva to the artwork.
        </p>
        <div className="flex flex-col gap-10 md:flex-row">
          <Image
            src="/first_proto_neuro.svg"
            alt="Door 2"
            width={500}
            height={500}
            className="w-full max-w-[500px]"
          />
          <Image
            src="/second_proto_neuro.svg"
            alt="Door 2"
            width={500}
            height={500}
            className="w-full max-w-[500px]"
          />
        </div>
      </section>

      <div className="my-14 h-[2px] w-full bg-black"></div>

      {/* Beige Section */}
      <div className="w-full bg-[#f4ede4] py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2 md:divide-x md:divide-black">
          <p className="font-serif text-lg leading-relaxed text-black">
            The opening of the door reflects the act of entering the visual
            space that will open to opportunity for inner reflection and
            reconnection.
          </p>
          <p className="font-serif text-lg leading-relaxed text-black">
            We wanted to place the door in a real-life setting, where it could
            offer a warm and inviting welcome.
            <br />
            <br />
            Thanks to the AI-generated image, the prototype now lives in a
            realistic environment, drawing the viewer into its textures, waves,
            and soft tones that highlight the essence of the door.
          </p>
        </div>
      </div>

      {/* EEG Section */}
      <section className="mx-auto flex max-w-[1300px] flex-col items-center px-6 py-12">
        <h2 className="mb-6 text-3xl font-bold">Third Step</h2>
        <p className="mb-10 max-w-[800px] text-center text-lg">
          Projection mapping allows us to project visuals onto a
          three-dimensional surface in this case, the door creating the illusion
          of depth and transformation. The visuals that are generated by the EEG
          data will be projected onto the door to create an ever-changing art
          piece. However, there have been some challenges with fitting the size
          of the projection to match the door perfectly.
        </p>
        <Image
          src="/third_step.svg"
          alt="First step"
          width={700}
          height={700}
          className="w-full max-w-[700px]"
        />
      </section>

      {/* Photos Section */}
      <section className="mx-auto max-w-[1300px] px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <Image src="/photo_1.svg" width={700} height={700} alt="photo 1" />
          <Image src="/photo_2.svg" width={700} height={700} alt="photo 2" />
        </div>
      </section>

      <div className="my-14 h-[2px] w-full bg-black"></div>

      {/* Final Steps */}
      <section className="mx-auto max-w-[1300px] px-6 py-16">
        <h2 className="mb-10 text-3xl font-bold">Photos of the project</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="aspect-square w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src="/1.svg"
              alt="step 1"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="aspect-square w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src="/2.svg"
              alt="step 2"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="aspect-square w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src="/3.svg"
              alt="step 3"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="aspect-square w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src="/festival_learning.jpg"
              alt="step 2"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src="/neuro_door.jpg"
              alt="step 2"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src="/neuro_purple.jpg"
              alt="step 2"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="my-20 h-[2px] w-full bg-black"></div>

      {/* Back Button */}
      <div className="flex w-full justify-center pb-20">
        <Link
          href="/"
          className="bg-black px-6 py-3 font-bold text-white transition-opacity hover:opacity-80"
        >
          Back to Home
        </Link>
      </div>

      <Footer />
    </main>
  );
}
