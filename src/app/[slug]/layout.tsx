import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <div className="flex w-full justify-center pb-20">
        <Link
          href="/"
          className="bg-black px-6 py-3 font-bold text-white transition-opacity hover:opacity-80"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}
