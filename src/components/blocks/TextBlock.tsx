import RichText from "@/components/RichText";
import type { TextBlock } from "@/types";

export default function TextBlock({ block }: { block: TextBlock }) {
  return (
    <RichText
      text={block.text}
      className="mt-6 text-lg leading-relaxed md:mt-10"
    />
  );
}
