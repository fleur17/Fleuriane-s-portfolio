import { BlockRendererBoilerplate } from "@/components/blocks/BlockRenderer";
import type { TitleBlock } from "@/types";
import { sizeClass } from "@/utils";

interface TitleBlockProps extends BlockRendererBoilerplate {
  block: TitleBlock;
}

export default function TitleBlock({ block, depth }: TitleBlockProps) {
  const position = block.position === "center" ? "text-center" : "";

  return (
    <h2
      className={`mt-20 mb-6 font-bold first:mt-0 ${position} ${sizeClass(depth)}`}
    >
      {block.text}
    </h2>
  );
}
