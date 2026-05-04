import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, FolderGit2 } from "lucide-react";
import ProjectCard from "../../components/project/ProjectCard";
import TechBadge from "../../components/ui/TechBadge";
import { projects } from "../../data/projects";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const revisei = projects[0];
  const techLoop = useMemo(() => [...revisei.techs, ...revisei.techs], [revisei]);

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="min-h-screen bg-slate-50 px-6 pb-20 pt-32 text-zinc-950">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10 animate-fadeUp">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-xl bg-zinc-100 p-2">
              <FolderGit2 className="text-zinc-950" size={24} />
            </div>
            <span className="font-mono text-sm font-bold uppercase tracking-widest text-zinc-600">
              Portfolio
            </span>
          </div>
          <h1 className="max-w-3xl text-4xl font-extrabold md:text-6xl">
            Projetos com foco em produto, stack e evolução técnica.
          </h1>
        </div>

        <div className="mb-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <ProjectCard project={revisei} featured />

          <aside className="overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-900/5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
              Stack do Revisei
            </p>
            <h2 className="mt-3 text-2xl font-extrabold">
              Full stack de verdade
            </h2>
            <p className="mt-3 text-zinc-600">
              Autenticação, regras de negócio, banco relacional, ORM e testes no
              core da aplicação.
            </p>

            <div className="relative mt-8 overflow-hidden">
              <div className="flex w-max gap-3 animate-techLoop">
                {techLoop.map((tech, index) => (
                  <TechBadge key={`${tech.name}-${index}`} tech={tech} />
                ))}
              </div>
            </div>
          </aside>
        </div>

        <section className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-xl shadow-zinc-900/5 md:p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-extrabold">Outros projetos</h2>
            <div className="flex gap-2">
              <button
                onClick={prevProject}
                className="rounded-full border border-zinc-200 p-2 text-zinc-700 transition hover:border-zinc-500"
                aria-label="Projeto anterior"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={nextProject}
                className="rounded-full border border-zinc-200 p-2 text-zinc-700 transition hover:border-zinc-500"
                aria-label="Próximo projeto"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-[1fr_220px] md:items-stretch">
            <ProjectCard project={projects[currentIndex]} />
            <div className="grid grid-cols-4 gap-2 md:grid-cols-1">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-2xl border p-3 text-left text-sm font-bold transition ${
                    currentIndex === index
                      ? "border-zinc-950 bg-zinc-950 text-white"
                      : "border-zinc-200 text-zinc-600 hover:border-zinc-300"
                  }`}
                >
                  {project.title}
                </button>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Projects;
