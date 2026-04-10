import Media from "@/components/Media";
import { Medias } from "@/types";

interface MediaDisplayProps {
  medias: Medias;
}

export default function MediaDisplay({ medias }: MediaDisplayProps) {
  return (
    <>
      {medias.medias &&
        (medias.mediaLayout === "grid" ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10">
            {medias.medias.map((media) => (
              <div
                key={media.alt}
                className={media.fullWidth ? "col-span-full" : ""}
              >
                <Media
                  src={media.src}
                  alt={media.alt ?? ""}
                  width={media.width}
                  height={media.height}
                  className={`h-auto w-full max-w-full rounded-lg ${media.className ?? ""}`}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex w-full flex-col items-center gap-10">
            {medias.medias.map((media) => (
              <Media
                key={media.alt}
                src={media.src}
                alt={media.alt ?? ""}
                width={media.width}
                height={media.height}
                className={`h-auto w-full max-w-full ${media.className ?? ""}`}
              />
            ))}
          </div>
        ))}
    </>
  );
}
