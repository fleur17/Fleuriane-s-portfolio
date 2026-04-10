import { motion } from "framer-motion";
import Image from "next/image";

import { MediaType } from "@/types";

interface PrototypeCardProps {
  image: MediaType;
}

export default function PrototypeCard({ image }: PrototypeCardProps) {
  return (
    <motion.div
      className="w-75 overflow-hidden rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Image
        src={image.src}
        width={image.width ?? 300}
        height={image.height ?? 500}
        alt={image.alt ?? ""}
        className={`h-auto w-full ${image.className}`}
      />
      <h3 className="mt-2 mb-4 text-center text-lg font-semibold">
        {image.alt}
      </h3>
    </motion.div>
  );
}
