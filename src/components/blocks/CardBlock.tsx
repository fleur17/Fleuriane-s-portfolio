import { BlockRendererBoilerplate } from "@/components/blocks/BlockRenderer";
import CardRenderer from "@/components/blocks/CardRenderer";
import type { CardBlock } from "@/types";

interface CardBlockProps extends BlockRendererBoilerplate {
  block: CardBlock;
}

export default function CardBlock({ block }: CardBlockProps) {
  const cardCount = block.cards.length;

  let colsClass = "md:grid-cols-3";
  if (cardCount === 2) {
    colsClass = "md:grid-cols-2";
  }

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
