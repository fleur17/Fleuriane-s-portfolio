import { motion } from "framer-motion";

import { BlockRendererBoilerplate } from "@/components/renderers/BlockRenderer";
import type { TitleBlock } from "@/types";
import { sizeClass } from "@/utils";

interface TitleBlockProps extends BlockRendererBoilerplate {
  block: TitleBlock;
}

export default function TitleBlock({ block, depth }: TitleBlockProps) {
  const position = block.position === "center" ? "text-center" : "";

  return (
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`mt-20 mb-6 font-bold first:mt-0 ${position} ${sizeClass(depth)}`}
    >
      {block.text}
    </motion.h2>
  );
}
