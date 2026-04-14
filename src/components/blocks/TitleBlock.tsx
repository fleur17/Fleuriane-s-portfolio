import { BlockRendereBoilerplate } from "@/components/blocks/BlockRendered";
import type { TitleBlock } from "@/types";
import { sizeClass } from "@/utils";

interface TitleBlockProps extends BlockRendereBoilerplate {
  block: TitleBlock;
}

export default function TitleBlock({ block, depth }: TitleBlockProps) {
  const position = block.position === "center" ? "text-center" : "";

  return (
    <h2 className={`mb-6 font-bold ${position} ${sizeClass(depth)}`}>
      {block.text}
    </h2>
  );
}
