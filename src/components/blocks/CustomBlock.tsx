import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";

import FloatingParticles from "@/components/blocks/custom/FloatingParticles";
import { BlockRendererBoilerplate } from "@/components/renderers/BlockRenderer";
import type { CustomBlock } from "@/types";

interface CustomBlockProps extends BlockRendererBoilerplate {
  block: CustomBlock;
}

const customComponents: Record<string, React.ComponentType> = {
  "floating-particles": FloatingParticles,
};

export default function CustomBlockRenderer({ block }: CustomBlockProps) {
  const Component = customComponents[block.component];

  if (!Component) return null;

  if (block.component === "floating-particles") {
    return (
      <motion.div
        className="relative h-175 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Canvas
          className="absolute inset-0 z-0"
          camera={{ position: [0, 0, 10], fov: 50 }}
        >
          <Component />
        </Canvas>
      </motion.div>
    );
  }

  return <Component />;
}
