import type { TitleBlock } from "@/types";

export default function TitleBlock({ block }: { block: TitleBlock }) {
  return <h2 className="mb-6 text-5xl font-bold">{block.text}</h2>;
}
