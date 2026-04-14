import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface MarkdownTextProps {
  text: string;
  className?: string;
}

export default function RichText({ text, className }: MarkdownTextProps) {
  return (
    <Markdown
      rehypePlugins={[rehypeRaw]}
      components={{
        p: ({ children }) => <p className={className}>{children}</p>,
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-70"
          >
            {children}
          </a>
        ),
        strong: ({ children }) => (
          <strong className="font-bold">{children}</strong>
        ),
        ul: ({ children }) => <ul className="list-disc pl-5">{children}</ul>,
        li: ({ children }) => <li className="mt-1">{children}</li>,
      }}
    >
      {text}
    </Markdown>
  );
}
