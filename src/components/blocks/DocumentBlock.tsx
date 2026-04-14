import { FileIcon } from "lucide-react";

import type { DocumentBlock } from "@/types";

export function DocumentBlock({ block }: { block: DocumentBlock }) {
  return (
    <a
      href={block.src}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 underline hover:opacity-70`}
    >
      <FileIcon size={20} />
      {block.alt ?? block.src.split("/").pop()}
    </a>
  );
}
