import Image from "next/image";
import Link from "next/link";

export default function HomePageHero() {
  return (
    <section className="relative mb-20 w-full">
      <div className="bg-beige absolute -top-10 left-1/2 -z-10 h-[120%] w-[80%] -translate-x-1/2 md:left-1/4 md:w-1/2 md:-translate-x-1/2" />

      <div className="mx-auto mt-10 flex max-w-300 flex-col items-center justify-center gap-12 px-6 md:flex-row">
        <div className="flex w-full justify-center rounded-lg transition-transform duration-500 hover:scale-[1.02] md:w-1/2">
          <Image
            src="/images/about/home-page.svg"
            alt="Fleuriane"
            width={510}
            height={718}
            priority
            className="h-auto w-full max-w-95 rounded-lg md:max-w-none"
          />
        </div>

        <div className="fade-in-up mb-10 w-full translate-y-0 space-y-4 text-center font-serif text-black opacity-0 transition-all duration-700 ease-out md:ml-40 md:w-1/2 md:text-left">
          <p className="presentation">Hi there</p>
          <p className="presentation">
            I am <span className="text-bordeau">Fleuriane Lam</span>, a
          </p>
          <p className="presentation font-light italic">
            Creative Technologist.
          </p>
          <p className="presentation">
            Welcome to my world, where design meets{" "}
            <span className="text-bordeau font-bold">emotion</span>, and{" "}
            <span className="text-bordeau font-bold">technology</span> becomes{" "}
            <span className="text-bordeau font-bold italic">poetry</span>.
          </p>

          <Link
            href="/about-me"
            className="inline-block cursor-pointer px-0 py-3 font-bold text-black underline transition-opacity hover:opacity-80"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
