import { motion } from "framer-motion";

import Media from "@/components/Media";
import RichText from "@/components/RichText";
import type { MixBlock } from "@/types";

export default function MixBlock({ block }: { block: MixBlock }) {
  const isTextLeft = block.position === "left";

  return (
    <div
      className={`flex items-center gap-10 ${isTextLeft ? "flex-row" : "flex-row-reverse"}`}
    >
      <div className="flex-1 space-y-6">
        <motion.h2
          className="mb-6 text-4xl font-bold"
          initial={{ opacity: 0, x: isTextLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {block.title}
        </motion.h2>
        <RichText
          text={block.text}
          className="mt-6 text-lg leading-relaxed md:mt-10"
        />
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
