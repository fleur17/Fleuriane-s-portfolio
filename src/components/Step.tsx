import MediaDisplay from "@/components/MediaDisplay";
import { Steps } from "@/types";

interface StepProps {
  step: Steps;
  depth?: number;
}

export default function Step({ step, depth = 0 }: StepProps) {
  return (
    <>
      <section
        className={`mx-auto max-w-5xl space-y-10 px-6 ${depth === 0 ? "py-30" : "py-5"}`}
      >
        <h2
          className={`mb-6 font-bold ${depth === 0 ? "text-5xl" : "text-3xl"}`}
        >
          {step.title}
        </h2>

        {step.descriptions?.map((description, idx) => (
          <p key={idx} className="text-lg leading-relaxed">
            {description}
          </p>
        ))}

        <MediaDisplay medias={step} />

        {/* Recursive substeps — indented, smaller heading */}
        {step.substeps?.map((substep, idx) => (
          <Step key={idx} step={substep} depth={depth + 1} />
        ))}
      </section>
    </>
  );
}
