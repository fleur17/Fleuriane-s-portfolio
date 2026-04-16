import { FileIcon } from "lucide-react";

import { BlockRendererBoilerplate } from "@/components/blocks/BlockRenderer";
import type { DocumentBlock } from "@/types";

interface DocumentBlockProps extends BlockRendererBoilerplate {
  block: DocumentBlock;
}

export function DocumentBlock({ block }: DocumentBlockProps) {
  const layout = block.position === "center" ? "justify-center" : "";

  return (
    <a
      href={block.src}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 underline hover:opacity-70 ${layout}`}
    >
      <FileIcon size={20} />
      {block.alt ?? block.src.split("/").pop()}
    </a>
  );
}
