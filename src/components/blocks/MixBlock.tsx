import { motion } from "framer-motion";

import { BlockRendererBoilerplate } from "@/components/blocks/BlockRenderer";
import Media from "@/components/Media";
import RichText from "@/components/RichText";
import type { MixBlock } from "@/types";

interface MixBlockProps extends BlockRendererBoilerplate {
  block: MixBlock;
}

export default function MixBlock({ block }: MixBlockProps) {
  const isTextLeft = block.position === "left";

  return (
    <div
      className={`flex gap-10 ${isTextLeft ? "flex-row" : "flex-row-reverse"}`}
    >
      <div className="flex-1 space-y-6">
        <motion.h2
          className="mt-20 mb-6 text-4xl font-bold first:mt-0"
          initial={{ opacity: 0, x: isTextLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {block.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: isTextLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <RichText
            text={block.text}
            className="mb-6 text-lg leading-relaxed"
          />
        </motion.div>
      </div>

      <motion.div
        className="flex flex-1 justify-center"
        initial={{ opacity: 0, x: isTextLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-150 overflow-hidden rounded-3xl bg-white shadow-lg transition-transform duration-500 hover:scale-105">
          <Media
            src={block.media.src}
            alt={block.media.alt ?? ""}
            width={block.media.width ?? 200}
            height={block.media.height ?? 200}
            className={`h-auto w-full object-cover ${block.media.className}`}
          />
        </div>
      </motion.div>
    </div>
  );
}
