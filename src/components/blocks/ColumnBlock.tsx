import { motion } from "framer-motion";

import { BlockRendererBoilerplate } from "@/components/renderers/BlockRenderer";
import RichText from "@/components/RichText";
import type { ColumnBlock } from "@/types";

interface ColumnBlockProps extends BlockRendererBoilerplate {
  block: ColumnBlock;
}

export default function ColumnBlock({ block }: ColumnBlockProps) {
  const columnsCount = block.text.length;

  return (
    <motion.div
      className="bg-beige mb-6 w-full py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div
        className="mx-auto grid max-w-5xl gap-10 px-6 md:divide-x md:divide-black"
        style={{
          gridTemplateColumns: `repeat(${columnsCount}, 1fr)`,
        }}
      >
        {block.text.map((t) => (
          <RichText
            key={t}
            text={t}
            className="font-serif text-lg leading-relaxed text-black"
          />
        ))}
      </div>
    </motion.div>
  );
}
