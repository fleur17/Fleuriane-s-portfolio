import { Canvas } from "@react-three/fiber";

import { BlockRendererBoilerplate } from "@/components/blocks/BlockRenderer";
import FloatingParticles from "@/components/blocks/custom/FloatingParticles";
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
      <div className="relative h-175 w-full">
        <Canvas
          className="absolute inset-0 z-0"
          camera={{ position: [0, 0, 10], fov: 50 }}
        >
          <Component />
        </Canvas>
      </div>
    );
  }

  return <Component />;
}
