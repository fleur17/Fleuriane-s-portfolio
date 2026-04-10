import ReactMarkdown from "react-markdown";

interface RichTextProps {
  content: string;
  className?: string;
}

export default function RichText({ content, className }: RichTextProps) {
  return (
    <div className={className}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
