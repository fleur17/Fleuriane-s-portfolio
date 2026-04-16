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

  return <Component />;
}
