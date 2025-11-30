"use client";

import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

// Particle cloud component
function FloatingParticles({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const particlesCount = 300;

  const positions = useMemo(() => {
    const arr = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [particlesCount]);

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geom;
  }, [positions]);

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
    <main className="w-full bg-white text-black font-serif">
      <Header />

      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat py-40 text-center"
        style={{ backgroundImage: "url('/drawing_bg1.svg')" }}
      >
        <h1 className="text-6xl font-serif font-bold text-black drop-shadow-lg">
          The Neuroportal
        </h1>
      </section>

      <div className="w-full h-[2px] bg-black my-0"></div>

      {/* Product Description */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-25 items-start">
          <div className="md:pr-0 ml-15">
            <h2 className="text-5xl font-serif font-bold mb-6 text-black">
              Description of the project
            </h2>
            <p className="text-lg font-serif leading-relaxed text-black mt-10">
              We are constantly thinking—our brains are always active, never truly at rest. 
              This got us thinking: 
              what if we could capture those brainwaves, the very essence of our thoughts, 
              and make them visible? What if we could transform something so intangible into something we can see,
              touch, or even experience?
            </p>
          </div>

          <div className="ml-50 mt-0">
            <h2 className="text-5xl font-serif font-bold mb-6 text-black">Topics</h2>
            <ul className="mt-20 list-none text-lg font-serif text-black">
              <li className="pb-2 mb-2">
                <span className="border-b border-black inline-block w-1/2 pb-2">Art Installation</span>
              </li>
              <li className="pb-2 mb-2">
                <span className="border-b border-black inline-block w-1/2 pb-2">Meditative Artwork</span>
              </li>
              <li className="pb-2 mb-2">
                <span className=" w-1/2 pb-2">Inspired by the japanesse culture</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="w-full h-[2px] bg-black my-14"></div>

      {/* First Step with Particle Animation */}
      <section className="max-w-[1300px] mx-auto px-6 py-12 flex flex-col items-center relative">
        <h2 className="text-3xl font-bold mb-6 z-10 relative">First Step</h2>
        <p className="text-lg max-w-[800px] text-center mb-10 z-10 relative">
          The EEG captures the frequency that changes in our brain and 
          TouchDesigner maps those signals into the moving visuals you see on the screen.
          TouchDesigner allows us to connect with the EEG headset and translate the brainwave patterns particularlyn into visual forms.
        </p>

        {/* Particle Canvas */}
        <div className="w-full h-[700px] relative">
          <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 10], fov: 50 }}>
            <FloatingParticles mouseX={mousePos.x} mouseY={mousePos.y} />
          </Canvas>
          
        </div>
      </section>

      <div className="w-full h-[2px] bg-black my-14"></div>

      {/* Doors Section */}
      <section className="max-w-[1300px] mx-auto px-6 py-12 flex flex-col items-center gap-10">
        <h2 className="text-3xl font-bold">Second Step</h2>
        <p className="text-lg max-w-[800px] text-center mb-10">
          Next, we come to the physical aspect of the project: the construction of the door. 
          The door plays an important part of the project as it serves as a metaphorical gateway, symbolizing the transition from ordinary consciousness into more focused and meditative state of mind and also as a canva to the artwork.
        </p>
        <div className="flex flex-col md:flex-row gap-10">
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

      <div className="w-full h-[2px] bg-black my-14"></div>

      {/* Beige Section */}
      <div className="w-full bg-[#f4ede4] py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6 md:divide-x md:divide-black">
          <p className="text-lg font-serif leading-relaxed text-black">
            The opening of the door reflects the act of entering the visual space that
            will open to opportunity for inner reflection and reconnection.
          </p>
          <p className="text-lg font-serif leading-relaxed text-black">
            We wanted to place the door in a real-life setting, where it could offer
            a warm and inviting welcome.<br /><br />
            Thanks to the AI-generated image, the prototype now lives in a realistic
            environment, drawing the viewer into its textures, waves, and soft tones
            that highlight the essence of the door.
          </p>
        </div>
      </div>

      {/* EEG Section */}
      <section className="max-w-[1300px] mx-auto px-6 py-12 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6">Third Step</h2>
        <p className="text-lg max-w-[800px] text-center mb-10">
          Projection mapping allows us to project visuals onto a three-dimensional surface in this case,
          the door creating the illusion of depth and transformation.
          The visuals that are generated by the EEG data will be projected onto the door
          to create an ever-changing art piece. However, there have been some challenges with fitting the size of the projection to match the door perfectly.
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
      <section className="max-w-[1300px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Image src="/photo_1.svg" width={700} height={700} alt="photo 1" />
          <Image src="/photo_2.svg" width={700} height={700} alt="photo 2" />
        </div>
      </section>

      <div className="w-full h-[2px] bg-black my-14"></div>

      {/* Final Steps */}
     <section className="max-w-[1300px] mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold mb-10">Photos of the project</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    <div className="w-full aspect-square overflow-hidden rounded-lg shadow-md">
      <Image
        src="/1.svg"
        alt="step 1"
        width={400}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="w-full aspect-square overflow-hidden rounded-lg shadow-md">
      <Image
        src="/2.svg"
        alt="step 2"
        width={400}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="w-full aspect-square overflow-hidden rounded-lg shadow-md">
      <Image
        src="/3.svg"
        alt="step 3"
        width={400}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>



    <div className="w-full aspect-square overflow-hidden rounded-lg shadow-md">
      <Image
        src="/festival_learning.jpg"
        alt="step 2"
        width={400}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-full aspect-square overflow-hidden rounded-lg shadow-md">
      <Image
        src="/neuro_door.jpg"
        alt="step 2"
        width={400}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>
     <div className="w-full aspect-square overflow-hidden rounded-lg shadow-md">
      <Image
        src="/neuro_purple.jpg"
        alt="step 2"
        width={400}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</section>


      <div className="w-full h-[2px] bg-black my-20"></div>

      {/* Back Button */}
      <div className="w-full flex justify-center pb-20">
        <Link
          href="/"
          className="px-6 py-3 bg-black text-white font-bold hover:opacity-80 transition-opacity"
        >
          Back to Home
        </Link>
      </div>

      <Footer />
    </main>
  );
}
