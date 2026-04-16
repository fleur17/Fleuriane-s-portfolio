import { BlockRendererBoilerplate } from "@/components/blocks/BlockRenderer";
import RichText from "@/components/RichText";
import type { TextBlock } from "@/types";

interface TextBlockProps extends BlockRendererBoilerplate {
  block: TextBlock;
}

export default function TextBlock({ block }: TextBlockProps) {
  const layout = block.position === "center" ? "text-center" : "";

  return (
    <RichText
      text={block.text}
      className={`mb-10 text-lg leading-relaxed ${layout}`}
    />
  );
}
