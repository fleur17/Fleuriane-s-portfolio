import { FileIcon } from "lucide-react";
import Image from "next/image";

import { MediaType } from "@/types";
import { isDocument, isVideo } from "@/utils";

export default function Media({
  src,
  width,
  height,
  alt,
  className,
  caption,
}: MediaType) {
  return (
    <>
      {isVideo(src) ? (
        <video
          src={src}
          width={width}
          height={height}
          className={`min-h-0 ${className}`}
          controls
          playsInline
        />
      ) : isDocument(src) ? (
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 underline hover:opacity-70 ${className}`}
        >
          <FileIcon size={20} />
          {alt ?? src.split("/").pop()}
        </a>
      ) : (
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt ?? ""}
          className={className}
        />
      )}
      {caption && (
        <p className="text-sm leading-relaxed text-gray-600 italic">
          {caption}
        </p>
      )}
    </>
  );
}
