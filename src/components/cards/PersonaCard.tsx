import Media from "@/components/Media";
import RichText from "@/components/RichText";
import type { PersonaCard } from "@/types/card";

export default function PersonaCard({ persona }: { persona: PersonaCard }) {
  return (
    <>
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
      <RichText text={persona.text} />
    </>
  );
}
