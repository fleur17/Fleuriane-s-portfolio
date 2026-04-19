import { motion } from "framer-motion";

import { BlockRendererBoilerplate } from "@/components/renderers/BlockRenderer";
import CardRenderer from "@/components/renderers/CardRenderer";
import type { CardBlock } from "@/types";

interface CardBlockProps extends BlockRendererBoilerplate {
  block: CardBlock;
}

export default function CardBlock({ block }: CardBlockProps) {
  return (
    <>
      <motion.div
        className={`flex flex-col items-stretch justify-center gap-8 sm:flex-row`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CardRenderer block={block} />
      </motion.div>
    </>
  );
}
