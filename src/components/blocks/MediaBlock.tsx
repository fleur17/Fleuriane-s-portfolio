import Media from "@/components/Media";
import type { MediaBlock, MediaType } from "@/types";

export default function MediaBlock({ block }: { block: MediaBlock }) {
  const mediasCount = block.medias.length;
  const gridLayout = "grid grid-cols-1 gap-6 md:gap-10";

  const layout = () => {
    if (block.mediasLayout === "full-width") {
      return "flex w-full flex-col items-center gap-10";
    }

    const colsClass =
      mediasCount === 1
        ? "md:grid-cols-1"
        : mediasCount === 2
          ? "md:grid-cols-2"
          : "md:grid-cols-3";

    return `${gridLayout} ${colsClass}`;
  };

  const isGrid = block.mediasLayout === "grid";
  const mediaWrapper = (media: MediaType) =>
    isGrid ? (
      <div key={media.src}>
        <Media
          src={media.src}
          alt={media.alt ?? ""}
          width={media.width}
          height={media.height}
          className={`h-auto w-full max-w-full rounded-lg ${media.className ?? ""}`}
          caption={media.caption}
        />
      </div>
    ) : (
      <Media
        key={media.alt}
        src={media.src}
        alt={media.alt ?? ""}
        width={media.width}
        height={media.height}
        className={`h-auto w-full max-w-full ${media.className ?? ""}`}
        caption={media.caption}
      />
    );

  return (
    <>
      {block.medias && (
        <div className={layout()}>
          {block.medias.map((media) => mediaWrapper(media))}
        </div>
      )}
    </>
  );
}
