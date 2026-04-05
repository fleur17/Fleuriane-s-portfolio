import Link from "next/link";

interface CustomLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function CustomLink({
  href,
  className,
  children,
}: CustomLinkProps) {
  return (
    <Link
      href={href}
      className={`${className} cursor-pointer font-serif hover:opacity-70`}
    >
      {children}
    </Link>
  );
}
