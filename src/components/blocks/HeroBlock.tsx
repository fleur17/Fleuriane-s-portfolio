import { motion } from "framer-motion";

import HeroCarousel from "@/components/HeroCarousel";
import type { HeroBlock } from "@/types";

export default function HeroBlock({ block }: { block: HeroBlock }) {
  return (
    <div
      className="mx-auto flex w-full flex-col items-center gap-12 bg-cover bg-center bg-no-repeat px-6 py-32 text-center md:py-40"
      style={{
        backgroundImage: `url('${block.background}')`,
      }}
    >
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
      {block.carousel && (
        <HeroCarousel medias={block.carousel.medias} type={"carousel"} />
      )}
    </div>
  );
}
