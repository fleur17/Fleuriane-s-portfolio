import { motion } from "framer-motion";

import MarkdownText from "@/components/MarkdownText";
import Media from "@/components/Media";
import { Card } from "@/types";

export default function PersonaCard({ persona }: { persona: Card }) {
  return (
    <motion.div
      className="rounded-3xl bg-white p-6 text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Media
        src={persona.model.src}
        width={persona.model.width ?? 200}
        height={persona.model.height ?? 200}
        alt={persona.model.alt ?? persona.model.src}
        className="mx-auto mb-4 rounded-full"
      />
      <h3 className="text-xl font-bold">
        {persona.name
          ? `${persona.name}, ${persona.role}, ${persona.age}`
          : `${persona.role}, ${persona.age}`}
      </h3>
      <MarkdownText text={persona.text} />
    </motion.div>
  );
}
