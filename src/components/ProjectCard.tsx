import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function ProjectCard({
  slug,
  title,
  category,
  description,
  image,
}: ProjectCardProps) {
  return (
    <Link href={slug}>
      <div className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl">
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="mb-1 font-['Shippori_Mincho_B1:Medium'] text-sm text-gray-500">
            {category}
          </p>
          <h3 className="mb-2 font-['Shippori_Mincho_B1:ExtraBold'] text-2xl text-black">
            {title}
          </h3>
          <p className="font-sans text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </Link>
  );
}
