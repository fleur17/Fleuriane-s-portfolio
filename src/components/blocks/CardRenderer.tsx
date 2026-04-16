import { motion } from "framer-motion";

import Media from "@/components/Media";
import PersonaCard from "@/components/PersonaCard";
import { CardBlock } from "@/types";
import { Card } from "@/types/card";

export interface CardRendererBoilerplate {
  className?: string;
  depth?: number;
}

interface CardRendererProps extends CardRendererBoilerplate {
  block: CardBlock;
}

function renderCard(card: Card) {
  switch (card.type) {
    case "persona":
      return <PersonaCard key={card.name} persona={card} />;
    case "media":
      return (
        <>
          <Media
            key={card.src}
            src={card.src}
            width={card.width}
            height={card.height}
            alt={card.alt}
          />
          {card.title && (
            <h3 className="mt-2 mb-4 text-center text-lg font-semibold">
              {card.title}
            </h3>
          )}
        </>
      );
    default:
      return null;
  }
}

export default function CardRenderer({ block }: CardRendererProps) {
  return block.cards.map((card, idx) => (
    <motion.div
      key={idx}
      className={`overflow-hidden rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl ${
        card.type === "persona" ? "flex-1 bg-white p-6 text-center" : ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {renderCard(card)}
    </motion.div>
  ));
}
