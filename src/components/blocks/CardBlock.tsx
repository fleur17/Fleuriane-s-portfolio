import { motion } from "framer-motion";

import { BlockRendereBoilerplate } from "@/components/blocks/BlockRendered";
import PersonaCard from "@/components/PersonaCard";
import type { CardBlock } from "@/types";

interface CardBlockProps extends BlockRendereBoilerplate {
  block: CardBlock;
}

export default function CardBlock({ block }: CardBlockProps) {
  return (
    <>
      <motion.h2
        className="mb-6 text-center text-4xl font-bold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {block.title}
      </motion.h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-lg">
        {block.text}
      </p>

      <div className="grid gap-10 md:grid-cols-3">
        {block.cards.map((persona, idx) => {
          return <PersonaCard key={`persona-${idx}`} persona={persona} />;
        })}
      </div>
    </>
  );
}
