import { motion } from "framer-motion";

import HeroCarousel from "@/components/blocks/HeroCarousel";
import type { HeroBlock } from "@/types";

export default function HeroBlock({ block }: { block: HeroBlock }) {
  const sectionClasses = block.background
    ? "w-full bg-cover bg-center bg-no-repeat py-32 text-center md:py-40"
    : "bg-beige relative w-full overflow-hidden py-32";

  return (
    <section
      className={`${sectionClasses}`}
      style={{
        backgroundImage: `url('${block.background}')`,
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 text-center">
        <motion.h1
          className="text-5xl leading-snug font-bold md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {block.title}
        </motion.h1>
        <motion.p
          className="max-w-3xl text-lg leading-relaxed md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {block.subtitle}
        </motion.p>
        {block.carousel && <HeroCarousel block={block.carousel} />}
      </div>
    </section>
  );
}
