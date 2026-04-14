import type { TopicBlock } from "@/types";

export default function TopicBlock({ block }: { block: TopicBlock }) {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-6 md:grid-cols-2 md:py-20 lg:py-30">
      <div className="flex flex-col justify-start md:ml-15">
        <h2 className="mb-6 text-5xl font-bold">{block.title}</h2>
        <p className="mt-6 text-lg leading-relaxed md:mt-10">{block.text}</p>
      </div>

      <div className="mt-10 flex flex-col justify-start md:mt-0 md:ml-50">
        <h2 className="mb-20 text-5xl font-bold">Topics</h2>
        <ul className="list-none space-y-4 text-lg">
          {block.topics.map((topic, idx) => (
            <li key={topic}>
              <span
                className={`inline-block w-1/2 border-b pb-1 ${idx < block.topics.length - 1 ? "border-black" : "border-transparent"}`}
              >
                {topic}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
