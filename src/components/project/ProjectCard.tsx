import type { Project } from "../../types/project";

interface Props {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: Props) => {
  return (
    <div
      className="bg-zinc-900/50 backdrop-blur-sm group p-6 rounded-3xl border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 opacity-0 animate-fadeUp w-full max-w-sm min-h-45 flex flex-col justify-between shadow-2xl hover:shadow-blue-500/10"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div>
        <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h2>

        <p className="text-zinc-400 text-sm leading-relaxed mt-3 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          {project.techs.map((tech) => (
            <div
              key={tech.name}
              className="bg-zinc-800/50 p-1.5 rounded-lg border border-zinc-700 hover:scale-110 transition-transform cursor-help"
              title={tech.name}
            >
              <img
                src={tech.link}
                alt={tech.name}
                className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-8">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2.5 rounded-xl border border-zinc-700 text-zinc-300 font-medium text-sm hover:bg-zinc-800 hover:text-white transition-all active:scale-95"
        >
          GitHub
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-blue-400 transition-all active:scale-95 shadow-lg shadow-white/5"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
