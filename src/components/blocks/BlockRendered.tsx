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

export default function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "topic":
      return <TopicBlock block={block} />;
    case "title":
      return <TitleBlock block={block} />;
    case "text":
      return <TextBlock block={block} />;
    case "media":
      return <MediaBlock block={block} />;
    case "video":
      return <VideoBlock block={block} />;
    case "document":
      return <DocumentBlock block={block} />;
    case "mix":
      return <MixBlock block={block} />;
    case "column":
      return <ColumnBlock block={block} />;
    case "card":
      return <CardBlock block={block} />;
    default:
      return null;
  }
}
