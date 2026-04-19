import BlockRenderer from "@/components/blocks/BlockRenderer";
import Separator from "@/components/Separator";
import { Step } from "@/types";

interface StepRendererProps {
  step: Step;
  index: number;
  totalSteps: number;
  depth?: number;
}

export default function StepRenderer({
  step,
  index,
  totalSteps,
  depth = 0,
}: StepRendererProps) {
  const paddingClass = depth === 0 ? "py-30" : "py-5";

  return (
    <>
      <section
        className={`mx-auto flex max-w-6xl flex-col px-6 ${paddingClass}`}
      >
        {step.blocks.map((block, blockIdx) => (
          <BlockRenderer
            key={`${depth}-block-${blockIdx}`}
            block={block}
            depth={depth}
          />
        ))}

        {step.substeps?.map((substep, substepIdx) => (
          <StepRenderer
            key={`${depth}-substep-${substepIdx}`}
            step={substep}
            index={substepIdx}
            totalSteps={step.substeps?.length || 0}
            depth={depth + 1}
          />
        ))}
      </section>
      {depth === 0 && index < totalSteps - 1 && <Separator />}
    </>
  );
}
