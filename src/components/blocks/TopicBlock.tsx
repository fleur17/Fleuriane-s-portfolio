import { motion } from "framer-motion";

import { BlockRendererBoilerplate } from "@/components/renderers/BlockRenderer";
import type { TopicBlock } from "@/types";

interface TopicBlockProps extends BlockRendererBoilerplate {
  block: TopicBlock;
}

export default function TopicBlock({ block }: TopicBlockProps) {
  return (
    <div className="mx-auto mb-20 grid max-w-6xl grid-cols-1 items-start gap-10 px-6 md:grid-cols-2">
      <div className="flex flex-col justify-start md:ml-15">
        <motion.h2
          className="mt-20 mb-6 text-5xl font-bold first:mt-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {block.title}
        </motion.h2>
        <motion.p
          className="mt-6 text-lg leading-relaxed md:mt-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {block.text}
        </motion.p>
      </div>

      <div className="mt-10 flex flex-col justify-start md:mt-0 md:ml-50">
        <motion.h2
          className="mt-20 mb-6 text-5xl font-bold first:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Topics
        </motion.h2>
        <motion.ul
          className="list-none space-y-4 text-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {block.topics.map((topic, idx) => (
            <li key={topic}>
              <span
                className={`inline-block w-1/2 border-b pb-1 ${idx < block.topics.length - 1 ? "border-black" : "border-transparent"}`}
              >
                {topic}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
