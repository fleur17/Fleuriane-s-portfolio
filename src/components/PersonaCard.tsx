import { motion } from "framer-motion";

import Media from "@/components/Media";

interface PersonaCardProps {
  name: string;
  age: number;
  goals: string;
  painPoints: string;
  img: string;
}

export default function PersonaCard({
  name,
  age,
  goals,
  painPoints,
  img,
}: PersonaCardProps) {
  return (
    <motion.div
      className="rounded-3xl bg-white p-6 text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Media
        src={img}
        width={200}
        height={200}
        alt={name}
        className="mx-auto mb-4 rounded-full"
      />
      <h3 className="text-xl font-bold">
        {name}, {age}
      </h3>
      <p className="mt-2 text-black">
        <strong>Goals:</strong> {goals}
      </p>
      <p className="mt-1 text-black">
        <strong>Pain Points:</strong> {painPoints}
      </p>
    </motion.div>
  );
}
