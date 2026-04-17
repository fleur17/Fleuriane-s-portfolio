import { motion } from "framer-motion";

import { BlockRendererBoilerplate } from "@/components/blocks/BlockRenderer";
import RichText from "@/components/RichText";
import type { TextBlock } from "@/types";

interface TextBlockProps extends BlockRendererBoilerplate {
  block: TextBlock;
}

export default function TextBlock({ block }: TextBlockProps) {
  const layout = block.position === "center" ? "text-center" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <RichText
        text={block.text}
        className={`mb-10 text-lg leading-relaxed ${layout}`}
      />
    </motion.div>
  );
}
