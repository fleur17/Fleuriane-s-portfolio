import Image from "next/image";

import { MediaType } from "@/types";
import { isVideo } from "@/utils";

export default function Media({
  src,
  width,
  height,
  alt,
  className,
}: MediaType) {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        width={width}
        height={height}
        className={className}
        controls
        playsInline
      />
    );
  }

  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt ?? ""}
      className={className}
    />
  );
}
