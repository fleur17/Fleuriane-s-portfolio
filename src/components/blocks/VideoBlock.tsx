import { motion } from "framer-motion";
import { useState } from "react";

import Media from "@/components/Media";
import { BlockRendererBoilerplate } from "@/components/renderers/BlockRenderer";
import type { VideoBlock } from "@/types";

interface VideoBlockProps extends BlockRendererBoilerplate {
  block: VideoBlock;
}

export default function VideoBlock({ block }: VideoBlockProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {isPlaying || !block.media?.placeholder ? (
        <video
          src={block.media?.src}
          controls
          autoPlay={isPlaying}
          className="h-auto min-h-0 w-200 max-w-full rounded-lg"
        />
      ) : (
        <div
          className="inline-block cursor-pointer rounded-lg px-6 py-3 font-bold text-white transition-opacity hover:opacity-80"
          onClick={() => setIsPlaying(true)}
        >
          <Media
            src={block.media.placeholder}
            alt={block.media.alt ?? ""}
            width={block.media.width}
            height={block.media.height}
            className={`h-auto w-200 max-w-full ${block.media.className}`}
          />
        </div>
      )}
    </motion.div>
  );
}
