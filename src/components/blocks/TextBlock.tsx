import MarkdownText from "@/components/MarkdownText";
import type { TextBlock } from "@/types";

export default function TextBlock({ block }: { block: TextBlock }) {
  return (
    <MarkdownText
      text={block.text}
      className="mt-6 text-lg leading-relaxed md:mt-10"
    />
  );
}
