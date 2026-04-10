import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Media from "@/components/Media";
import { MediaType } from "@/types";

interface HeroCarouselProps {
  carousel: MediaType[];
}

export default function HeroCarousel({ carousel }: HeroCarouselProps) {
  const totalWidth = carousel.length * 360; // approximate card width + gap
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    const update = () => setInnerWidth(window.innerWidth || 0);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="mt-12 w-full overflow-hidden">
      <motion.div
        className="while-tap:cursor-grabbing flex cursor-grab gap-4"
        drag="x"
        dragConstraints={{ left: -totalWidth + innerWidth, right: 0 }}
        dragElastic={0.1}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        whileHover={{ scale: 1.01 }}
      >
        {carousel.concat(carousel).map((img, idx) => (
          <div
            key={idx}
            className="w-62.5 shrink-0 sm:w-70 md:w-[320px] lg:w-87.5"
          >
            <Media
              src={img.src}
              alt={img.alt ?? `Interface ${idx + 1}`}
              width={img.width ?? 350}
              height={img.height ?? 500}
              className={`h-auto w-full rounded-2xl object-cover shadow-md ${img.className}`}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
