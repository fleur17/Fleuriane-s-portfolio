import Image from "next/image";
import Link from "next/link";

import { ProjectData } from "@/types";

interface ProjectSectionProps {
  project: ProjectData;
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
          src={project.textSection.image.src}
          width={project.textSection.image.width}
          height={project.textSection.image.height}
          alt={project.textSection.image.alt}
          className="mt-4 h-auto w-auto"
        />
      </div>

      <div
        className={`group flex w-full flex-1 justify-center ${project.textSection.position === "left" ? "lg:order-2" : "lg:order-1"}`}
      >
        <div className="bg-beige w-full max-w-162.5 overflow-hidden rounded-lg shadow-md">
          {project.imageSection.map((image) => {
            return (
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={`${image.className} h-auto w-full object-cover`}
                key={image.src}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
