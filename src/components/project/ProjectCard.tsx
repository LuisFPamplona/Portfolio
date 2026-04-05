import type { Project } from "../../types/project";

interface Props {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: Props) => {
  return (
    <>
      <div
        className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition opacity-0 animate-fadeUp w-full max-w-sm min-h-45"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <h2 className="text-xl font-semibold text-white">{project.title}</h2>
        <p className="flex flex-wrap gap-2 mt-4">{project.description}</p>

        <div>
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-zinc-800 text-zinc-300  px-2 py-1 rounded-md "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-sm"
          >
            Ver GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-sm"
          >
            Ver demo
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
