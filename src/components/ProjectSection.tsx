import Image from "next/image";
import Link from "next/link";

import { ProjectShowcaseData } from "@/types";

interface ProjectSectionProps {
  project: ProjectShowcaseData;
}

export default function ProjectSection({ project }: ProjectSectionProps) {
  return (
    <section className="relative mx-auto flex max-w-350 flex-col items-center gap-16 px-6 py-30 lg:flex-row">
      <p
        className={`font-serif text-[16px] tracking-[4px] text-black uppercase lg:absolute lg:top-6 lg:rotate-180 lg:[writing-mode:vertical-rl] ${
          project.textSection.position === "left" ? "lg:left-5" : "lg:right-5"
        }`}
      >
        {project.textSection.projectType}
      </p>

      <div
        className={`mt-10 flex-1 space-y-6 lg:ml-25 ${project.textSection.position === "left" ? "lg:order-1" : "lg:order-2"}`}
      >
        <h2 className="font-serif text-[40px] font-bold text-black">
          {project.textSection.name}
        </h2>

        <p className="max-w-87.5 font-serif text-[24px] leading-tight text-black">
          {project.textSection.description}
        </p>

        <Link
          href={project.textSection.href}
          className="inline-block cursor-pointer bg-black px-6 py-3 font-bold text-white transition-opacity hover:opacity-80"
        >
          Read More
        </Link>

        <Image
          src={project.textSection.media.src}
          width={project.textSection.media.width}
          height={project.textSection.media.height}
          alt={project.textSection.media.alt ?? ""}
          className="mt-4 h-auto w-auto"
        />
      </div>

      <div
        className={`group flex w-full flex-1 justify-center ${project.textSection.position === "left" ? "lg:order-2" : "lg:order-1"}`}
      >
        <div className="bg-beige w-full max-w-162.5 overflow-hidden rounded-lg shadow-md">
          {project.mediaSection.map((media) => {
            return (
              <Image
                src={media.src}
                alt={media.alt ?? ""}
                width={media.width}
                height={media.height}
                className={`${media.className} h-auto w-full object-cover`}
                key={media.src}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
