"use client";

import Link from "next/link";
import { Fragment, useState } from "react";

import Media from "@/components/Media";
import MediaDisplay from "@/components/MediaDisplay";
import Separator from "@/components/Separator";
import Step from "@/components/Step";
import { BusinessProject } from "@/types";

interface BusinessProjectProps {
  project: BusinessProject;
}

export default function BusinessProjectPage({ project }: BusinessProjectProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className="w-full bg-white font-serif text-black">
      <section
        className="w-full bg-cover bg-center bg-no-repeat py-32 text-center md:py-40"
        style={{
          backgroundImage: `url('${project.background.src}')`,
        }}
      >
        <h1 className="font-serif text-6xl font-bold drop-shadow-lg">
          {project.title}
        </h1>
        <p className="mt-4 font-serif text-xl font-light drop-shadow-lg">
          {project.subtitle}
        </p>
      </section>

      <div className="my-0 h-0.5 w-full bg-black"></div>

      <section className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-6 md:grid-cols-2 md:py-20 lg:py-30">
        <div className="flex flex-col justify-start md:ml-15">
          <h2 className="mb-6 text-5xl font-bold">
            Description of the product
          </h2>
          <p className="mt-6 text-lg leading-relaxed md:mt-10">
            {project.description}
          </p>
        </div>

        <div className="mt-10 flex flex-col justify-start md:mt-0 md:ml-50">
          <h2 className="mb-20 text-5xl font-bold">Topics</h2>
          <ul className="list-none space-y-4 text-lg">
            {project.topics.map((topic, idx) => (
              <li key={topic}>
                <span
                  className={`inline-block w-1/2 border-b pb-1 ${idx < project.topics.length - 1 ? "border-black" : "border-transparent"}`}
                >
                  {topic}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex w-full justify-center md:col-span-2">
          <MediaDisplay medias={project.showcase} />
        </div>
      </section>

      <Separator />

      {project.steps.map((step, idx) => (
        <Fragment key={idx}>
          <Step step={step} />
          <Separator />
        </Fragment>
      ))}

      <section className="mx-auto max-w-4xl px-6 py-30 text-center">
        <h2 className="mb-10 text-5xl font-bold">{project.assets.title}</h2>

        {isPlaying || !project.assets.media?.placeholder ? (
          <video
            src={project.assets.media?.src}
            controls
            autoPlay={isPlaying}
            className="mx-auto h-auto min-h-0 w-200 max-w-full rounded-lg"
          />
        ) : (
          <div
            className="inline-block cursor-pointer rounded-lg px-6 py-3 font-bold text-white transition-opacity hover:opacity-80"
            onClick={() => setIsPlaying(true)}
          >
            <Media
              src={project.assets.media.placeholder}
              alt={project.assets.media.alt ?? ""}
              width={project.assets.media.width}
              height={project.assets.media.height}
              className={`h-auto w-200 max-w-full ${project.assets.media.className}`}
            />
          </div>
        )}

        <p className="mt-6 text-lg leading-relaxed md:mt-10">
          {project.assets.description}
        </p>
      </section>

      <div className="flex w-full justify-center pb-20">
        <Link
          href="/"
          className="bg-black px-6 py-3 font-bold text-white transition-opacity hover:opacity-80"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
