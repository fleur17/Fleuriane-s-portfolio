import Image from "next/image";

import { MediaType } from "@/types";
import { isVideo } from "@/utils";

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
      ) : (
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt ?? ""}
          className={className}
        />
      )}
      <p className="text-sm leading-relaxed text-gray-600 italic">{caption}</p>
    </>
  );
}
