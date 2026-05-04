import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types/project";
import TechBadge from "../ui/TechBadge";

interface Props {
  project: Project;
  featured?: boolean;
}

const ProjectCard = ({ project, featured = false }: Props) => {
  return (
    <article
      className={`flex h-full flex-col justify-between rounded-3xl border bg-white p-6 shadow-xl transition hover:-translate-y-1 ${
        featured
          ? "border-zinc-300 shadow-zinc-900/10"
          : "border-zinc-200 shadow-zinc-900/5"
      }`}
    >
      <div>
        {featured && (
          <span className="mb-4 inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-zinc-700">
            Super destaque
          </span>
        )}

        <h2 className="text-3xl font-extrabold text-zinc-950">
          {project.title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-zinc-600">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-zinc-200 px-4 py-3 text-sm font-bold text-zinc-800 transition hover:border-zinc-400"
        >
          GitHub
          <ArrowUpRight size={16} />
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-zinc-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-zinc-800"
          >
            Live Demo
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
