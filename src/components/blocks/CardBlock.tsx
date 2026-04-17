import { BlockRendererBoilerplate } from "@/components/blocks/BlockRenderer";
import CardRenderer from "@/components/blocks/CardRenderer";
import type { CardBlock } from "@/types";

interface CardBlockProps extends BlockRendererBoilerplate {
  block: CardBlock;
}

export default function CardBlock({ block }: CardBlockProps) {
  return (
    <>
      <div
        className={`flex flex-col items-stretch justify-center gap-8 sm:flex-row`}
      >
        <CardRenderer block={block} />
      </div>
    </>
  );
}
