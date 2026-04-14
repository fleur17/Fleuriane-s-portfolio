import Markdown from "react-markdown";

interface MarkdownTextProps {
  text: string;
  className?: string;
}

export default function MarkdownText({ text, className }: MarkdownTextProps) {
  return (
    <Markdown
      components={{
        p: ({ children }) => <p className={` ${className}`}>{children}</p>,
      }}
    >
      {text}
    </Markdown>
  );
}
