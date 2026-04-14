import RichText from "@/components/RichText";
import type { ColumnBlock } from "@/types";

export default function ColumnBlock({ block }: { block: ColumnBlock }) {
  const columnsCount = block.text.length;

  return (
    <div className="bg-beige w-full py-16">
      <div
        className="mx-auto grid max-w-5xl gap-10 px-6 md:divide-x md:divide-black"
        style={{
          gridTemplateColumns: `repeat(${columnsCount}, 1fr)`,
        }}
      >
        {block.text.map((t) => (
          <RichText
            text={t}
            className="font-serif text-lg leading-relaxed text-black"
          />
        ))}
      </div>
    </div>
  );
}
