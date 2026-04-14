import CardBlock from "@/components/blocks/CardBlock";
import ColumnBlock from "@/components/blocks/ColumnBlock";
import { DocumentBlock } from "@/components/blocks/DocumentBlock";
import MediaBlock from "@/components/blocks/MediaBlock";
import MixBlock from "@/components/blocks/MixBlock";
import TextBlock from "@/components/blocks/TextBlock";
import TitleBlock from "@/components/blocks/TitleBlock";
import TopicBlock from "@/components/blocks/TopicBlock";
import VideoBlock from "@/components/blocks/VideoBlock";
import { Block } from "@/types";

export interface BlockRendereBoilerplate {
  className?: string;
  depth?: number;
}

interface BlockRendererProps extends BlockRendereBoilerplate {
  block: Block;
}

export default function BlockRenderer({
  block,
  className,
  depth,
}: BlockRendererProps) {
  switch (block.type) {
    case "topic":
      return <TopicBlock block={block} className={className} depth={depth} />;
    case "title":
      return <TitleBlock block={block} className={className} depth={depth} />;
    case "text":
      return <TextBlock block={block} className={className} depth={depth} />;
    case "media":
      return <MediaBlock block={block} className={className} depth={depth} />;
    case "video":
      return <VideoBlock block={block} className={className} depth={depth} />;
    case "document":
      return (
        <DocumentBlock block={block} className={className} depth={depth} />
      );
    case "mix":
      return <MixBlock block={block} className={className} depth={depth} />;
    case "column":
      return <ColumnBlock block={block} className={className} depth={depth} />;
    case "card":
      return <CardBlock block={block} className={className} depth={depth} />;
    default:
      return null;
  }
}
