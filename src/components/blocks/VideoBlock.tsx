import { useState } from "react";

import Media from "@/components/Media";
import type { VideoBlock } from "@/types";

export default function VideoBlock({ block }: { block: VideoBlock }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      {isPlaying || !block.media?.placeholder ? (
        <video
          src={block.media?.src}
          controls
          autoPlay={isPlaying}
          className="mx-auto h-auto min-h-0 w-200 max-w-full rounded-lg"
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
    </>
  );
}
